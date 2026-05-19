import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

export default function ProjectSection({ title, subtitle, projects, sectionId }) {
  if (projects.length === 0) return null

  return (
    <Reveal>
      <section
        id={sectionId}
        className="scroll-mt-28"
        aria-labelledby={`${sectionId}-heading`}
      >
        <div className="mb-8 flex flex-col gap-2 sm:mb-10">
          <div className="flex items-center gap-3">
            <span
              className="h-2 w-2 rounded-full bg-gradient-to-br from-showcase-accent
            to-showcase-accent-2 shadow-[0_0_12px_rgba(56,189,248,0.6)]"
              aria-hidden
            />
            <h2
              id={`${sectionId}-heading`}
              className="text-2xl font-semibold tracking-tight text-showcase-text sm:text-3xl"
            >
              {title}
            </h2>
          </div>
          {subtitle ? (
            <p className="max-w-2xl pl-5 text-sm text-showcase-muted sm:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Reveal>
  )
}
