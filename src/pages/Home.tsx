import { Link } from 'react-router-dom'
import AboutPhoto from '../components/AboutPhoto'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import TechBento from '../components/TechBento'
import Timeline from '../components/Timeline'
import EducationList from '../components/EducationList'
import { education, experience } from '../data/experience'

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
              <Reveal key={p.slug} delay={i * 0.08} className="h-full">
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              to="/projects"
              className="inline-block rounded-full border-2 border-rose-dark px-6 py-3 font-medium text-rose-dark transition hover:bg-rose-dark hover:text-on-accent"
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
          <TechBento />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" data-nav="about" className="scroll-mt-16 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="Journey" title="Experience" />
          </Reveal>
          <Timeline items={experience} />
          <Reveal>
            <h3 className="mb-6 mt-14 text-2xl">Education</h3>
          </Reveal>
          <EducationList items={education} />
        </div>
      </section>
    </>
  )
}
