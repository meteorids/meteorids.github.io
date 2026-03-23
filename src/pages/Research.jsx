import PageTitle from '../components/PageTitle'

const publications = [
  {
    authors: 'Sztipanov, M.; Krizsán, L.; Li, W.; Stamnes, J.J.; Svendby, T.; Stamnes, K.',
    title: 'Machine Learning-Based Retrieval of Total Ozone Column Amount and Cloud Optical Depth from Irradiance Measurements',
    journal: 'Atmosphere',
    year: 2024,
    url: 'https://www.mdpi.com/2073-4433/15/9/1103',
  },
  {
    authors: 'Milos Sztipanov, Wei Li, Arne Dahlback, Jakob Stamnes, Tove Svendby, Knut Stamnes',
    title: 'New method for retrieval of aerosol optical depth from multichannel irradiance measurements',
    journal: 'Optics Express',
    year: 2023,
    url: 'https://opg.optica.org/oe/abstract.cfm?doi=10.1364/OE.493712',
  },
  {
    authors: 'Milos Sztipanov',
    title: 'Methods of ozone amount, cloud and aerosol optical depth from ground-based irradiance measurements',
    journal: 'Dissertation',
    year: 2023,
    url: 'https://www.proquest.com/openview/cd192b0c59f0e248031dff6a078b0739/1?pq-origsite=gscholar&cbl=18750&diss=y',
  },
  {
    authors: 'Milos Sztipanov, Lubna Tumeh, Wei Li, Tove Svendby, Arve Kylling, Arne Dahlback, Jakob J. Stamnes, Georg Hansen, and Knut Stamnes',
    title: 'Ground-based measurements of total ozone column amount with a multichannel moderate-bandwidth filter instrument at the Troll research station, Antarctica',
    journal: 'Appl. Opt. 59, 97-106',
    year: 2020,
    url: 'https://www.irs2022.org',
  },
]

function ResearchSection({ title, children, index }) {
  return (
    <div className={`opacity-0 animate-fade-up stagger-${index}`}>
      <h2 className="font-display font-bold text-xl text-white mb-4 flex items-center gap-3">
        <span className="text-accent font-mono text-xs">0{index}.</span>
        {title}
      </h2>
      <div className="font-mono text-sm leading-relaxed text-neutral-400 space-y-4 pl-8 border-l border-border">
        {children}
      </div>
    </div>
  )
}

export default function Research() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <PageTitle src="/images/research.png" alt="RESEARCH" />

      <div className="space-y-12">
        <ResearchSection title="Introduction" index={1}>
          <p>
            I have a long history involving science and research that began at my early age
            and has continued with my involvement with several research projects.
          </p>
          <p>
            I finished my bachelor's degree in physics with a theoretical focus. I have completed
            my Master of Science and Ph.D in physics, doing research under Prof. Knut Stamnes
            in the Light and Life Laboratory at Stevens Institute of Technology [Hoboken, NJ].
            My dissertation title is "Methods for retrieval of ozone amount, cloud and aerosol
            optical depth from ground-based irradiance measurements".
          </p>
        </ResearchSection>

        <div className="divider" />

        <ResearchSection title="Specialization &mdash; Projects" index={2}>
          <p>
            I am specialized in radiative transfer and atmospheric physics. In my research
            I utilize radiative transfer methods, machine learning, simulations, coding,
            ground based measurements and satellite data.
          </p>
          <p>
            In my first major research project I used data gathered by a NILU-UV instrument
            and used a lookup-table method to determine and analyze ozone amount and ozone
            hole trends above Antarctica. The results were compared to the Ozone Monitoring
            Instruments' results that is deployed on NASA's Aura satellite.
          </p>
          <p>
            As my next research, I studied atmospheric aerosols and their radiative and
            microphysical properties. Using radiative transfer simulations and additional
            methods I developed an algorithm to measure aerosol optical depth with a
            multichannel irradiance meter instrument.
          </p>
          <p>
            Currently I am working on retrieving aerosol optical depth and aerosol size
            distribution parameters from a multichannel irradiance instrument, using machine
            learning techniques. As part of this project I successfully used machine learning
            to retrieve ozone amount and cloud optical depth from the same instrument in the NYC area.
          </p>
        </ResearchSection>

        <div className="divider" />

        <ResearchSection title="Laboratory" index={3}>
          <p>
            In the Light and Life Laboratory I was responsible for data collection,
            management and processing, and calibrating/maintaining a NILU-UV instrument.
          </p>
          <p>
            I tested the (then new) NILU-CUBE instrument in 2015 before it was deployed
            in Colorado, USA. I am also familiar with many of NASA satellite products,
            their file structures and I have an account on NASA's Goddard Earth Sciences
            Data and Information Services Center that is a satellite database that provides
            access to a wide range of global climate data, concentrated primarily in the
            areas of atmospheric composition, atmospheric dynamics, global precipitation,
            and solar irradiance.
          </p>
        </ResearchSection>

        <div className="divider" />

        {/* Publications */}
        <div className="opacity-0 animate-fade-up stagger-4">
          <h2 className="font-display font-bold text-xl text-white mb-8 flex items-center gap-3">
            <span className="text-accent font-mono text-xs">04.</span>
            Recent Publications
          </h2>

          <div className="space-y-6">
            {publications.map((pub, i) => (
              <a
                key={i}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group pl-8 border-l border-border hover:border-accent/50 transition-colors duration-300"
              >
                <p className="font-mono text-xs text-muted mb-1">{pub.authors}</p>
                <p className="font-display font-semibold text-sm text-neutral-200 group-hover:text-accent transition-colors duration-300 mb-1">
                  "{pub.title}"
                </p>
                <p className="font-mono text-xs text-accent/60">
                  {pub.journal} ({pub.year}) <span className="text-muted">&rarr;</span>
                </p>
              </a>
            ))}

            {/* Conference */}
            <div className="pl-8 border-l border-border">
              <p className="font-mono text-xs text-muted mb-1">Conference Presentation</p>
              <a
                href="https://www.irs2022.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-semibold text-sm text-neutral-200 hover:text-accent transition-colors"
              >
                International Radiation Symposium
              </a>
              <p className="font-mono text-xs text-accent/60">
                Speaker &mdash; Thessaloniki, Greece (2022)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
