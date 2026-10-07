import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-pink/60 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="aspect-[16/10] overflow-hidden bg-blush">
        <img
          src={project.thumbnail}
          alt={project.title}
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl">{project.title}</h3>
        <p className="mt-2 text-sm text-ink-soft">{project.summary}</p>
      </div>
    </Link>
  )
}
