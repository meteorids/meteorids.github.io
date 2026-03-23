export default function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted tracking-wider">
          <span className="text-accent/40">&copy;</span> {new Date().getFullYear()} meteorids
        </p>
        <div className="font-mono text-xs text-muted/50 tracking-wider">
          // built with react + vite
        </div>
      </div>
    </footer>
  )
}
