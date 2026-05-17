import Reveal from './Reveal'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-showcase-bg px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(56,189,248,0.22),transparent_55%),radial-gradient(ellipse_60%_45%_at_80%_20%,rgba(139,92,246,0.18),transparent_50%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-showcase-border to-transparent" />

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-showcase-accent">
          Developer portfolio
        </p>
        <h1 className="mb-5 bg-gradient-to-br from-showcase-text via-showcase-muted to-showcase-accent bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          My Project Showcase
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-showcase-muted sm:text-lg">
          I design and build modern web experiences — polished interfaces with React
          and Tailwind, plus solid backends on Node.js. Browse frontend and backend
          work below.
        </p>
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-showcase-accent to-showcase-accent-2 px-8 py-3 text-sm font-semibold text-showcase-bg shadow-lg shadow-showcase-accent/25 transition duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-xl hover:shadow-showcase-accent-2/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-showcase-accent active:translate-y-0 active:scale-[0.99]"
        >
          View Projects
        </a>
      </Reveal>
    </section>
  )
}
