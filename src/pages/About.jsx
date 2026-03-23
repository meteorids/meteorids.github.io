import PageTitle from '../components/PageTitle'

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <PageTitle src="/images/about.png" alt="ABOUT" />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Text */}
        <div className="flex-1 space-y-6 opacity-0 animate-fade-up stagger-1">
          <div className="font-mono text-xs text-accent tracking-[0.2em] uppercase mb-6">
            // biography
          </div>

          <p className="font-mono text-sm leading-relaxed text-neutral-300">
            A USA [NYC/DC] based Physicist with a Ph.D.
          </p>

          <p className="font-mono text-sm leading-relaxed text-neutral-400">
            My name is Milos Sztipanov, and I have a background in both
            research and academic teaching. My field of expertise is radiative transfer.
          </p>

          <p className="font-mono text-sm leading-relaxed text-neutral-400">
            I am a physical scientist working for NOAA (National Oceanic and
            Atmospheric Administration), working to improve the radiation scheme
            in Unified Forecast System and its applications.
            I also hold a position as a Research Associate at the University of Maryland,
            and collaborate with international and interagency
            (NASA, Japanese Meteorological Agency, Norwegian Institute for Air Research) scientists.
          </p>

          <p className="font-mono text-sm leading-relaxed text-neutral-400">
            My previous research topics included radiative transfer,
            atmospheric physics, biophysics and sequence aligning algorithms.
          </p>

          <p className="font-mono text-sm leading-relaxed text-neutral-400">
            After completing my B.Sc., I specialized in radiation transfer in the atmosphere,
            using theoretical and computational tools such as coding, high-performance computing,
            and machine learning.
            I have also taught a range of courses, including General Physics, Mechanics,
            Electromagnetism, Statistics, and Physics Laboratory for Scientists.
          </p>

          <p className="font-mono text-sm leading-relaxed text-neutral-400">
            For more details feel free to download my CV.
          </p>

          <div className="pt-4">
            <a
              href="/documents/milos_cv.pdf"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume PDF
            </a>
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
            {/* Corner markers */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent/40" />
          </div>
        </div>
      </div>
    </section>
  )
}
