import { Link } from 'react-router-dom'
import AboutPhoto from '../components/AboutPhoto'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import { experience } from '../data/experience'

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <>
      <Hero />

      {/* About */}
      <section id="about" data-nav="about" className="scroll-mt-16 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="About" title="A little about me" />
            <div className="max-w-2xl space-y-4 text-lg text-ink-soft">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <AboutPhoto />
        </div>
      </section>

      {/* Featured projects */}
      <section id="featured-projects" data-nav="projects" className="scroll-mt-16 bg-cream-dark py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="Work" title="Featured projects" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              to="/projects"
              className="inline-block rounded-full border-2 border-rose-dark px-6 py-3 font-medium text-rose-dark transition hover:bg-rose-dark hover:text-white"
            >
              View all projects
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Tech stack */}
      <section id="tech" data-nav="about" className="scroll-mt-16 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="Skills" title="Tech stack" />
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, i) => (
              <Reveal key={group.category} delay={i * 0.08}>
                <h3 className="mb-3 text-xl">{group.category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full bg-pink/60 px-4 py-1.5 text-sm font-medium text-rose-dark">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" data-nav="about" className="scroll-mt-16 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="Journey" title="Experience" />
          </Reveal>
          <ol className="max-w-3xl space-y-8 border-l-2 border-pink pl-6">
            {experience.map((job, i) => (
              <li key={`${job.company}-${job.period}`} className="relative">
                <span className="absolute -left-[33px] top-2 h-3 w-3 rounded-full bg-rose-dark" aria-hidden />
                <Reveal delay={i * 0.08}>
                  <p className="text-sm text-ink-soft">{job.period}</p>
                  <h3 className="text-xl">
                    {job.role} <span className="text-rose-dark">@ {job.company}</span>
                  </h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-ink-soft">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
