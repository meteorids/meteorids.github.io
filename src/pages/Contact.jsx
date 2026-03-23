import { Mail, Code2, Briefcase, FlaskConical } from 'lucide-react'
import PageTitle from '../components/PageTitle'

const links = [
  {
    label: 'e-mail',
    detail: 'milostipanov@gmail.com',
    href: 'mailto:milostipanov@gmail.com',
    icon: Mail,
  },
  {
    label: 'github',
    detail: 'github.com/meteorid',
    href: 'https://github.com/meteorid',
    icon: Code2,
    external: true,
  },
  {
    label: 'linkedin',
    detail: 'Dr. Milos Sztipanov',
    href: 'https://www.linkedin.com/in/dr-milos-sztipanov-5670845b/',
    icon: Briefcase,
    external: true,
  },
  {
    label: 'researchgate',
    detail: 'Dr. Milos Sztipanov',
    href: 'https://www.researchgate.net/profile/Milos-Sztipanov',
    icon: FlaskConical,
    external: true,
  },
]

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <PageTitle src="/images/contact.png" alt="CONTACT" />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Links */}
        <div className="flex-1 space-y-8 opacity-0 animate-fade-up stagger-1">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white">
            Say hello<span className="text-accent">!</span>
          </h1>

          <div className="space-y-3 pt-4">
            {links.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 py-4 px-6 border border-border
                             hover:border-accent/30 hover:bg-accent/5
                             transition-all duration-300"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-accent/50 group-hover:text-accent transition-colors flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="font-mono text-xs text-muted uppercase tracking-widest mb-1">
                      {link.label}
                    </div>
                    <div className="font-mono text-sm text-neutral-300 group-hover:text-accent transition-colors">
                      {link.detail}
                    </div>
                  </div>
                  <span className="font-mono text-muted group-hover:text-accent transition-colors text-sm">
                    &rarr;
                  </span>
                </a>
              )
            })}
          </div>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0 opacity-0 animate-fade-up stagger-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-b from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative overflow-hidden" style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
              <img
                src="/images/milos.jpg"
                alt="Milos Sztipanov"
                className="w-72 lg:w-80 h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent/40" />
          </div>
        </div>
      </div>
    </section>
  )
}
