import { useState } from 'react'

export default function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false)

  const showPlaceholder = !project.image || imgError

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-showcase-border bg-showcase-card shadow-[0_8px_30px_-12px_rgba(15,23,42,0.75)] transition duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-showcase-accent/40 hover:shadow-[0_20px_40px_-16px_rgba(56,189,248,0.2),0_8px_24px_-12px_rgba(139,92,246,0.15)]">
      {/* Gradient accent stripe */}
      <div
        className="h-1 w-full shrink-0 bg-gradient-to-r from-showcase-accent via-showcase-accent-2 to-showcase-accent opacity-90"
        aria-hidden
      />

      <div className="relative aspect-[16/10] overflow-hidden bg-[#0f172a]">
        {showPlaceholder ? (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.gradient} pointer-events-none`}
            aria-hidden
          >
            <span className="rounded-full border border-showcase-border bg-showcase-bg/60 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-showcase-muted">
              Preview
            </span>
          </div>
        ) : (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-showcase-bg/90 via-showcase-bg/20 to-transparent opacity-90" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-showcase-text sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-showcase-muted">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-showcase-border bg-showcase-bg/40 px-3 py-1 text-xs font-medium text-showcase-accent"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 border-t border-showcase-border/80 pt-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] flex-1 min-w-[120px] items-center justify-center rounded-xl bg-gradient-to-r from-showcase-accent to-showcase-accent-2 px-4 py-2.5 text-sm font-semibold text-showcase-bg shadow-md shadow-showcase-accent/20 transition duration-300 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-showcase-accent"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] flex-1 min-w-[120px] items-center justify-center rounded-xl border border-showcase-border bg-showcase-bg/30 px-4 py-2.5 text-sm font-semibold text-showcase-text transition duration-300 hover:border-showcase-accent/50 hover:bg-showcase-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-showcase-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}
