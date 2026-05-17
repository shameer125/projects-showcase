import { useMemo, useState } from 'react'
import { projects as allProjects } from './data/projects'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectSection from './components/ProjectSection'
import Footer from './components/Footer'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
]

function filterBySearch(list, query) {
  const q = query.trim().toLowerCase()
  if (!q) return list
  return list.filter((p) => p.title.toLowerCase().includes(q))
}

export default function App() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const searched = useMemo(
    () => filterBySearch(allProjects, search),
    [search],
  )

  const frontendProjects = useMemo(
    () => searched.filter((p) => p.category === 'frontend'),
    [searched],
  )

  const backendProjects = useMemo(
    () => searched.filter((p) => p.category === 'backend'),
    [searched],
  )

  const showFrontend = filter === 'all' || filter === 'frontend'
  const showBackend = filter === 'all' || filter === 'backend'

  const totalVisible =
    (showFrontend ? frontendProjects.length : 0) +
    (showBackend ? backendProjects.length : 0)

  return (
    <div className="min-h-screen bg-showcase-bg antialiased text-showcase-text">
      <Navbar />

      <main>
        <Hero />

        <div
          id="projects"
          className="scroll-mt-24 border-t border-showcase-border px-4 pb-20 pt-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-showcase-text sm:text-3xl">
                  Projects
                </h2>
                <p className="mt-2 max-w-xl text-sm text-showcase-muted sm:text-base">
                  Filter by category or search by title. Cards lift slightly on hover
                  with a smooth transition.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <div
                  className="inline-flex rounded-full border border-showcase-border bg-showcase-card/80 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                  role="tablist"
                  aria-label="Project category"
                >
                  {FILTERS.map(({ id, label }) => {
                    const selected = filter === id
                    return (
                      <button
                        key={id}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        onClick={() => setFilter(id)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                          selected
                            ? 'bg-gradient-to-r from-showcase-accent to-showcase-accent-2 text-showcase-bg shadow-md shadow-showcase-accent/25'
                            : 'text-showcase-muted hover:text-showcase-text'
                        }`}
                      >
                        {label}
                      </button>
                    )
                  })}
                </div>

                <label className="relative block min-w-[min(100%,240px)]">
                  <span className="sr-only">Search projects</span>
                  <input
                    type="search"
                    placeholder="Search by title…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-full border border-showcase-border bg-showcase-card py-2.5 pl-10 pr-4 text-sm text-showcase-text shadow-inner outline-none transition placeholder:text-showcase-muted/70 focus:border-showcase-accent/60 focus:ring-2 focus:ring-showcase-accent/30"
                  />
                  <svg
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-showcase-muted"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </label>
              </div>
            </div>

            {totalVisible === 0 ? (
              <p className="rounded-2xl border border-showcase-border bg-showcase-card px-6 py-12 text-center text-showcase-muted">
                No projects match your search. Try another title or clear the search.
              </p>
            ) : (
              <div className="flex flex-col gap-16 lg:gap-20">
                {showFrontend ? (
                  <ProjectSection
                    sectionId="frontend-projects"
                    title="Frontend Projects"
                    subtitle="Interfaces, design systems, and client-side experiences."
                    projects={frontendProjects}
                  />
                ) : null}
                {showBackend ? (
                  <ProjectSection
                    sectionId="backend-projects"
                    title="Backend Projects"
                    subtitle="APIs, data layers, and server-side tooling."
                    projects={backendProjects}
                  />
                ) : null}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
