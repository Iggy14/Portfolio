import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import NotFound from './NotFound'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <NotFound />

  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  return (
    <article className="py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-rose-dark">
          <FiArrowLeft /> All projects
        </Link>

        <h1 className="mt-6 text-4xl sm:text-5xl">{project.title}</h1>
        <p className="mt-3 text-lg text-ink-soft">{project.summary}</p>

        <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-sm">
          <div>
            <dt className="text-ink-soft">Role</dt>
            <dd className="font-medium">{project.role}</dd>
          </div>
          <div>
            <dt className="text-ink-soft">Year</dt>
            <dd className="font-medium">{project.year}</dd>
          </div>
        </dl>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="rounded-full bg-pink/60 px-3 py-1 text-xs font-medium text-rose-dark">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-rose-dark px-5 py-2.5 text-sm font-medium text-white transition hover:bg-rose hover:text-ink"
            >
              Live demo <FiExternalLink />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-rose-dark px-5 py-2.5 text-sm font-medium text-rose-dark transition hover:bg-rose-dark hover:text-white"
            >
              Source code <FiGithub />
            </a>
          )}
        </div>

        <div className="mt-10 space-y-6">
          {project.images.map((src, i) => (
            <Reveal key={`${src}-${i}`}>
              <img
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                width={1600}
                height={1000}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full rounded-2xl ring-1 ring-pink/60"
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 space-y-8">
          <div>
            <h2 className="mb-2 text-2xl">Overview</h2>
            <p className="text-ink-soft">{project.overview}</p>
          </div>
          <div>
            <h2 className="mb-2 text-2xl">The problem</h2>
            <p className="text-ink-soft">{project.problem}</p>
          </div>
          <div>
            <h2 className="mb-2 text-2xl">The solution</h2>
            <p className="text-ink-soft">{project.solution}</p>
          </div>
        </Reveal>

        <Link
          to={`/projects/${next.slug}`}
          className="mt-14 flex items-center justify-between rounded-2xl bg-blush p-6 transition hover:bg-pink/60"
        >
          <span>
            <span className="block text-sm text-ink-soft">Next project</span>
            <span className="font-display text-2xl">{next.title}</span>
          </span>
          <FiArrowRight size={24} className="text-rose-dark" />
        </Link>
      </div>
    </article>
  )
}
