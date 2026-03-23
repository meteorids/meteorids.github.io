import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'

const SierpinskiTetrahedron = lazy(() => import('../components/SierpinskiTetrahedron'))

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-73px)] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Text */}
          <div className="flex-1 max-w-xl space-y-8">
            <div className="space-y-2 opacity-0 animate-fade-up">
              <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase">
                // physicist &amp; researcher
              </p>
            </div>

            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight opacity-0 animate-fade-up stagger-1">
              Hi! I am<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">
                Milos
              </span>
            </h1>

            <p className="font-mono text-sm sm:text-base text-neutral-400 leading-relaxed max-w-md opacity-0 animate-fade-up stagger-2">
              I am a physicist focused on radiative transfer, atmospheric physics,
              machine learning, and instrumentation.
            </p>

            <div className="flex gap-4 opacity-0 animate-fade-up stagger-3">
              <Link to="/about" className="btn-primary">
                Read more
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact
              </Link>
            </div>

            {/* Status line */}
            <div className="flex items-center gap-3 opacity-0 animate-fade-up stagger-4">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-muted">
                NOAA &middot; University of Maryland
              </span>
            </div>
          </div>

          {/* 3D Sierpinski Tetrahedron */}
          <div className="flex-shrink-0 opacity-0 animate-fade-up stagger-3">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full scale-150 pointer-events-none" />
              <Suspense fallback={<div className="w-64 sm:w-72 lg:w-80 aspect-square" />}>
                <SierpinskiTetrahedron />
              </Suspense>
            </div>
          </div>

        </div>

        {/* Bottom coordinates */}
        <div className="mt-20 lg:mt-32 flex justify-between items-end font-mono text-[10px] text-muted/40 tracking-widest opacity-0 animate-fade-up stagger-5">
          <span>40.7128&deg; N, 74.0060&deg; W</span>
          <span>v1.0.0</span>
        </div>
      </div>
    </section>
  )
}
