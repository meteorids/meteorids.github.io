import { useState, useEffect } from 'react'

const lines = [
  { text: '> INITIALIZING METEORIDS v1.0.0', delay: 0 },
  { text: '> LOADING ATMOSPHERIC DATA...', delay: 600, status: 'OK' },
  { text: '> CALIBRATING INSTRUMENTS...', delay: 1400, status: 'OK' },
  { text: '> CONNECTING TO NOAA SERVERS...', delay: 2000, status: 'OK' },
  { text: '> SYSTEM READY', delay: 2800, accent: true },
]

const TOTAL_DURATION = 3600

export default function BootSequence({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([])
  const [statuses, setStatuses] = useState({})
  const [fading, setFading] = useState(false)

  useEffect(() => {
    // Check if already seen this session
    if (sessionStorage.getItem('meteorids-booted')) {
      onComplete()
      return
    }

    // Show lines progressively
    lines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i])
      }, line.delay)

      // Show status after a short pause
      if (line.status) {
        setTimeout(() => {
          setStatuses((prev) => ({ ...prev, [i]: line.status }))
        }, line.delay + 400)
      }
    })

    // Fade out and complete
    setTimeout(() => setFading(true), TOTAL_DURATION)
    setTimeout(() => {
      sessionStorage.setItem('meteorids-booted', '1')
      onComplete()
    }, TOTAL_DURATION + 600)
  }, [onComplete])

  // Don't render if already booted
  if (sessionStorage.getItem('meteorids-booted')) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-surface flex items-center justify-center transition-opacity duration-500 ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="font-mono text-sm sm:text-base space-y-3 px-6 max-w-lg w-full">
        {/* Cursor blink at top */}
        <div className="text-accent/30 text-xs mb-6 tracking-[0.3em]">
          METEORIDS SYSTEM
        </div>

        {lines.map((line, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 transition-opacity duration-300 ${
              visibleLines.includes(i) ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className={line.accent ? 'text-accent font-bold' : 'text-neutral-400'}>
              {line.text}
            </span>
            {line.status && (
              <span
                className={`text-accent font-bold transition-opacity duration-200 ${
                  statuses[i] ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {line.status}
              </span>
            )}
          </div>
        ))}

        {/* Loading bar */}
        {visibleLines.length > 0 && (
          <div className="mt-8 h-px bg-border overflow-hidden">
            <div
              className="h-full bg-accent/60"
              style={{
                width: `${(visibleLines.length / lines.length) * 100}%`,
                transition: 'width 0.4s ease-out',
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
