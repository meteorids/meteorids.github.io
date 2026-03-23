export default function PageTitle({ src, alt }) {
  return (
    <div className="mb-10 opacity-0 animate-fade-in">
      <img
        src={src}
        alt={alt}
        className="ascii-title h-14 sm:h-16 md:h-20 w-auto"
        draggable={false}
      />
    </div>
  )
}
