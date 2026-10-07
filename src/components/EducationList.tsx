import type { Experience } from '../data/experience'
import Reveal from './Reveal'

export default function EducationList({ items }: { items: Experience[] }) {
  return (
    <ul className="mx-auto max-w-3xl divide-y divide-pink/60">
      {items.map((item, i) => (
        <li key={`${item.company}-${item.period}`}>
          <Reveal delay={i * 0.08}>
            <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div>
                <h4 className="font-medium text-ink">{item.role}</h4>
                <p className="text-rose-dark">{item.company}</p>
                {item.highlights.map((h) => (
                  <p key={h} className="mt-1 text-sm italic text-ink-soft">
                    {h}
                  </p>
                ))}
              </div>
              <p className="shrink-0 text-sm text-ink-soft">{item.period}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}
