import type { Experience } from '../data/experience'
import Reveal from './Reveal'

export default function Timeline({ items }: { items: Experience[] }) {
  return (
    <ol className="mx-auto max-w-3xl space-y-8 border-l-2 border-pink pl-6">
      {items.map((item, i) => (
        <li key={`${item.company}-${item.period}`} className="relative">
          <span className="absolute -left-[33px] top-2 h-3 w-3 rounded-full bg-rose-dark" aria-hidden />
          <Reveal delay={i * 0.08}>
            <p className="text-sm text-ink-soft">{item.period}</p>
            <h3 className="text-xl">
              {item.role} <span className="text-rose-dark">@ {item.company}</span>
            </h3>
            {item.highlights.length > 0 && (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-ink-soft">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
