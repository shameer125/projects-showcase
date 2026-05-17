export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="scroll-mt-28 border-t border-showcase-border bg-showcase-bg px-4 py-12 sm:px-6 lg:px-8"
    >
      <div
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center
      sm:flex-row sm:text-left"
      >
        <div>
          <p className="text-sm font-semibold text-showcase-text">
            My Project Showcase
          </p>
          <p className="mt-1 text-sm text-showcase-muted">
            Built with React & Tailwind CSS · © {year}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-showcase-muted">
          <a
            href="mailto:hello@example.com"
            className="transition hover:text-showcase-accent focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-2 focus-visible:outline-showcase-accent"
          >
            hello@example.com
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-showcase-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-showcase-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
