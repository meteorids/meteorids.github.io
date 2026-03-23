import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  { to: '/teaching', label: 'Teaching' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-display font-bold text-xl tracking-tight text-white hover:text-accent transition-colors duration-300"
          onClick={() => setMobileOpen(false)}
        >
          meteorids<sup className="text-accent text-[10px] ml-0.5">&reg;</sup>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `font-mono text-xs tracking-[0.2em] uppercase px-4 py-2 transition-all duration-300 ${
                  isActive
                    ? 'text-accent'
                    : 'text-muted hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <span className="link-hover">
                  <span className="text-accent/50 mr-1">{isActive ? '>' : '/'}</span>
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-muted hover:text-accent transition-colors p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="font-mono text-lg leading-none">
            {mobileOpen ? '[x]' : '[=]'}
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-surface/95 backdrop-blur-md animate-slide-in">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `font-mono text-sm tracking-wider py-3 px-4 transition-all duration-300 border-l-2 ${
                    isActive
                      ? 'text-accent border-accent bg-accent/5'
                      : 'text-muted border-transparent hover:text-white hover:border-accent/30'
                  }`
                }
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
