export default function Section({ children, className = '' }) {
  return (
    <section className={`max-w-4xl mx-auto px-6 py-16 md:py-24 ${className}`}>
      {children}
    </section>
  )
}
