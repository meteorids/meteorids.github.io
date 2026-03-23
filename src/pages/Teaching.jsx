import PageTitle from '../components/PageTitle'

const courses = [
  'General Physics',
  'Mechanics',
  'Electromagnetism',
  'Physics Laboratory for Scientists',
  'Applied Statistics',
]

export default function Teaching() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <PageTitle src="/images/teaching.png" alt="TEACHING" />

      <div className="space-y-8 opacity-0 animate-fade-up stagger-1">
        <div className="font-mono text-xs text-accent tracking-[0.2em] uppercase">
          // academic experience
        </div>

        <p className="font-mono text-sm leading-relaxed text-neutral-400 max-w-2xl">
          Throughout my career I have taught lectures, recitations, laboratory classes,
          and seminars at university level, and worked as a laboratory manager.
        </p>

        <div className="pt-4">
          <p className="font-mono text-sm text-neutral-300 mb-6">
            Courses taught:
          </p>

          <div className="space-y-3">
            {courses.map((course, i) => (
              <div
                key={course}
                className="group flex items-center gap-4 pl-6 py-3 border-l border-border hover:border-accent/50 transition-all duration-300"
              >
                <span className="font-mono text-xs text-accent/50 group-hover:text-accent transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-sm text-neutral-300 group-hover:text-white transition-colors">
                  {course}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
