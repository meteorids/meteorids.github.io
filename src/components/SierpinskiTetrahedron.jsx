import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Regular tetrahedron vertices (centered at origin)
const TETRA_VERTICES = [
  new THREE.Vector3(0, 1, 0),
  new THREE.Vector3(-0.943, -0.333, 0),
  new THREE.Vector3(0.471, -0.333, -0.816),
  new THREE.Vector3(0.471, -0.333, 0.816),
]

function generateSierpinski(vertices, depth, scale, center) {
  if (depth === 0) {
    const edges = []
    const v = vertices.map((v0) =>
      v0.clone().multiplyScalar(scale).add(center)
    )
    for (let i = 0; i < 4; i++) {
      for (let j = i + 1; j < 4; j++) {
        edges.push(v[i].clone(), v[j].clone())
      }
    }
    return [{ edges, center: center.clone() }]
  }

  const units = []
  const halfScale = scale / 2
  for (let i = 0; i < 4; i++) {
    const offset = vertices[i].clone().multiplyScalar(halfScale).add(center)
    units.push(...generateSierpinski(vertices, depth - 1, halfScale, offset))
  }
  return units
}

export default function SierpinskiTetrahedron() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth
    const height = container.clientHeight

    // Mutable state
    const mouse = { x: 0, y: 0, smoothX: 0, smoothY: 0 }
    let hovered = false
    let explodeProgress = 0

    // Scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0, 4.5)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // Make canvas receive pointer events
    const canvas = renderer.domElement
    canvas.style.cursor = 'pointer'

    // Generate fractal
    const units = generateSierpinski(TETRA_VERTICES, 3, 1.6, new THREE.Vector3(0, 0, 0))

    const group = new THREE.Group()
    const unitMeshes = []
    const accentColor = new THREE.Color(0x00ff9f)
    const dimColor = new THREE.Color(0x005533)

    units.forEach((unit) => {
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(unit.edges.length * 3)
      unit.edges.forEach((v, i) => {
        positions[i * 3] = v.x
        positions[i * 3 + 1] = v.y
        positions[i * 3 + 2] = v.z
      })
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

      const material = new THREE.LineBasicMaterial({
        color: accentColor.clone(),
        transparent: true,
        opacity: 0.7,
      })

      const mesh = new THREE.LineSegments(geometry, material)
      group.add(mesh)

      // Explode direction: outward from fractal center + random scatter
      const dir = unit.center.clone().normalize().multiplyScalar(2.5)
      dir.x += (Math.random() - 0.5) * 1.2
      dir.y += (Math.random() - 0.5) * 1.2
      dir.z += (Math.random() - 0.5) * 1.2

      unitMeshes.push({
        mesh,
        originalPositions: new Float32Array(positions),
        explodeDir: dir,
      })
    })

    scene.add(group)

    // Glow copy
    const glowGroup = new THREE.Group()
    units.forEach((unit) => {
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(unit.edges.length * 3)
      unit.edges.forEach((v, i) => {
        positions[i * 3] = v.x
        positions[i * 3 + 1] = v.y
        positions[i * 3 + 2] = v.z
      })
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      const material = new THREE.LineBasicMaterial({
        color: accentColor,
        transparent: true,
        opacity: 0.15,
      })
      glowGroup.add(new THREE.LineSegments(geometry, material))
    })
    glowGroup.scale.setScalar(1.02)
    scene.add(glowGroup)

    // Animation
    let animationId
    const clock = new THREE.Clock()
    let baseRotY = 0

    function animate() {
      animationId = requestAnimationFrame(animate)
      const dt = clock.getDelta()
      const elapsed = clock.getElapsedTime()

      // Smooth mouse
      mouse.smoothX += (mouse.x - mouse.smoothX) * 0.08
      mouse.smoothY += (mouse.y - mouse.smoothY) * 0.08

      // Auto rotation + mouse offset
      baseRotY += dt * 0.3
      group.rotation.y = baseRotY + mouse.smoothX * 0.6
      group.rotation.x = Math.sin(elapsed * 0.15) * 0.15 + mouse.smoothY * 0.4
      glowGroup.rotation.copy(group.rotation)

      // Explode
      const targetExplode = hovered ? 1 : 0
      explodeProgress += (targetExplode - explodeProgress) * 0.08

      unitMeshes.forEach((u) => {
        const posAttr = u.mesh.geometry.getAttribute('position')
        const arr = posAttr.array

        for (let i = 0; i < u.originalPositions.length; i += 3) {
          arr[i] = u.originalPositions[i] + u.explodeDir.x * explodeProgress
          arr[i + 1] = u.originalPositions[i + 1] + u.explodeDir.y * explodeProgress
          arr[i + 2] = u.originalPositions[i + 2] + u.explodeDir.z * explodeProgress
        }
        posAttr.needsUpdate = true

        u.mesh.material.opacity = 0.7 - explodeProgress * 0.35
        u.mesh.material.color.lerpColors(accentColor, dimColor, explodeProgress * 0.5)
      })

      // Glow pulse
      glowGroup.children.forEach((child) => {
        child.material.opacity = 0.1 + Math.sin(elapsed * 2) * 0.05
      })

      renderer.render(scene, camera)
    }

    animate()

    // Events — on canvas directly
    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      mouse.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    }

    function onMouseEnter() { hovered = true }
    function onMouseLeave() {
      hovered = false
      mouse.x = 0
      mouse.y = 0
    }

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseenter', onMouseEnter)
    canvas.addEventListener('mouseleave', onMouseLeave)

    function onResize() {
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animationId)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseenter', onMouseEnter)
      canvas.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      container.removeChild(canvas)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-64 sm:w-72 lg:w-80 aspect-square"
    />
  )
}
