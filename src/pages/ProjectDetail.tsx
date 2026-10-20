import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import ProjectGallery from '../components/ProjectGallery'
import NotFound from './NotFound'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  if (!project) return <NotFound />

  const siblings = projects.filter((p) => p.category === project.category)
  const next = siblings[(siblings.indexOf(project) + 1) % siblings.length]

  return (
    <article className="py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-rose-dark">
          <FiArrowLeft /> All projects
        </Link>

        <h1 className="mt-6 text-center text-4xl text-rose-dark sm:text-5xl">{project.title}</h1>
        <p className="mt-3 text-center text-lg text-ink-soft">{project.summary}</p>

        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {project.tags.map((t) => (
            <li key={t} className="rounded-full bg-pink/60 px-3 py-1 text-xs font-medium text-rose-dark">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-rose-dark px-5 py-2.5 text-sm font-medium text-on-accent transition hover:bg-rose hover:text-on-rose"
            >
              Live demo <FiExternalLink />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-rose-dark px-5 py-2.5 text-sm font-medium text-rose-dark transition hover:bg-rose-dark hover:text-on-accent"
            >
              Source code <FiGithub />
            </a>
          )}
        </div>

        <Reveal className="mt-10">
          <ProjectGallery title={project.title} images={project.images} wide={project.category === 'analytics'} />
        </Reveal>

        <Reveal className="mt-12 space-y-8">
          <div>
            <h2 className="mb-2 text-center text-2xl text-rose-dark">Overview</h2>
            <p className="text-ink-soft">{project.overview}</p>
          </div>
          {project.highlights && (
            <div>
              <h2 className="mb-2 text-center text-2xl text-rose-dark">What it shows</h2>
              <ul className="list-disc space-y-1 pl-5 text-ink-soft">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          )}
          {project.conclusions && (
            <div>
              <h2 className="mb-2 text-center text-2xl text-rose-dark">What we can conclude</h2>
              <ul className="list-disc space-y-1 pl-5 text-ink-soft">
                {project.conclusions.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          )}
          {project.recommendations && (
            <div>
              <h2 className="mb-2 text-center text-2xl text-rose-dark">Recommendations</h2>
              <p className="mb-2 text-sm text-ink-soft">If this were a live business, I would:</p>
              <ul className="list-disc space-y-1 pl-5 text-ink-soft">
                {project.recommendations.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          )}
          {project.problem && (
            <div>
              <h2 className="mb-2 text-center text-2xl text-rose-dark">The problem</h2>
              <p className="text-ink-soft">{project.problem}</p>
            </div>
          )}
          {project.solution && (
            <div>
              <h2 className="mb-2 text-center text-2xl text-rose-dark">The solution</h2>
              <p className="text-ink-soft">{project.solution}</p>
            </div>
          )}
          {project.dataset && (
            <div>
              <h2 className="mb-2 text-center text-2xl text-rose-dark">Dataset</h2>
              <p className="text-ink-soft">
                {project.dataset.url ? (
                  <a
                    href={project.dataset.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-rose-dark underline"
                  >
                    {project.dataset.name}
                  </a>
                ) : (
                  project.dataset.name
                )}
              </p>
            </div>
          )}
        </Reveal>

        {next !== project && (
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
        )}
      </div>
    </article>
  )
}
