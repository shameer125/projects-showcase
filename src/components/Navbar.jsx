export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-showcase-border bg-showcase-bg/85
    backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a
          href="#hero"
          className="text-sm font-semibold tracking-tight text-showcase-text transition
          hover:text-showcase-accent"
        >
          Showcase
        </a>
        <ul className="flex items-center gap-6 text-sm text-showcase-muted">
          <li>
            <a
              href="#hero"
              className="transition hover:text-showcase-text focus-visible:outline
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-showcase-accent"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="transition hover:text-showcase-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-showcase-accent"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="transition hover:text-showcase-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-showcase-accent"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
