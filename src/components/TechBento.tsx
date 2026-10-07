import type { CSSProperties } from 'react'
import { skills } from '../data/skills'
import type { Skill } from '../data/skills'
import Reveal from './Reveal'

/** Grid footprint per category (6-column grid on large screens). */
const spans: Record<string, string> = {
  Languages: 'lg:col-span-3',  Frontend: 'lg:col-span-3',
  'Backend & Data': 'lg:col-span-2',
  Tools: 'lg:col-span-4',
}

function TechTile({ name, url, icon: Icon, color }: Skill) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={name}
      aria-label={`${name} website`}
      style={{ '--brand': color ?? 'var(--color-ink)' } as CSSProperties}
      className="group relative flex h-20 w-20 flex-col items-center justify-center overflow-hidden rounded-2xl bg-cream/70 text-(--brand) transition-colors duration-300 hover:bg-surface focus-visible:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-dark"
    >
      <Icon
        aria-hidden
        className="h-8 w-8 transition-transform duration-300 motion-safe:group-hover:-translate-y-2 motion-safe:group-focus-visible:-translate-y-2"
      />
      <span
        aria-hidden
        className="absolute inset-x-1 bottom-1.5 truncate text-center text-[10px] font-medium text-ink opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-safe:translate-y-2 motion-safe:group-hover:translate-y-0 motion-safe:group-focus-visible:translate-y-0"
      >
        {name}
      </span>
    </a>
  )
}

export default function TechBento() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
      {skills.map((group, i) => (
        <Reveal
          key={group.category}
          delay={i * 0.08}
          className={`rounded-3xl bg-pink/50 p-5 sm:p-6 ${spans[group.category] ?? 'lg:col-span-2'} ${group.items.length > 5 ? 'sm:col-span-2' : ''}`}
        >
          <h3 className="mb-4 text-xl">{group.category}</h3>
          <ul className="flex flex-wrap gap-3">
            {group.items.map((item) => (
              <li key={item.name}>
                <TechTile {...item} />
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  )
}
