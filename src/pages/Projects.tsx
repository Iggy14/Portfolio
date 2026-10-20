import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects, type Project } from '../data/projects'

const groups: { category: Project['category']; title: string }[] = [
  { category: 'software', title: 'Software Development' },
  { category: 'analytics', title: 'Data Analytics' },
]

export default function Projects() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Work" title="All projects" />
        {groups.map(({ category, title }) => {
          const items = projects.filter((p) => p.category === category)
          if (items.length === 0) return null
          return (
            <div key={category} className="mb-14 last:mb-0">
              <h3 className="mb-6 text-2xl text-rose-dark">{title}</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p, i) => (
                  <Reveal key={p.slug} delay={(i % 3) * 0.08} className="h-full">
                    <ProjectCard project={p} />
                  </Reveal>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
