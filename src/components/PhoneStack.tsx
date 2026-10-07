import type { Project } from '../data/projects'

const MAX_PHONES = 3

/** Three phone frames, centre one raised, bleeding off the bottom of the card media area. */
export default function PhoneStack({ project }: { project: Project }) {
  const phones = project.images.filter((i) => i.kind === 'mobile').slice(0, MAX_PHONES)

  // Put the first shot in the middle so the strongest screen leads.
  const ordered = phones.length === 3 ? [phones[1], phones[0], phones[2]] : phones

  return (
    <div className="flex h-full items-end justify-center gap-3 px-4 pt-5">
      {ordered.map((img, i) => {
        const isCentre = phones.length === 3 ? i === 1 : false
        return (
          <div
            key={img.src + i}
            className={`aspect-[9/19.5] w-[26%] max-w-[110px] shrink-0 overflow-hidden rounded-t-2xl border-x-4 border-t-4 border-zinc-800 bg-surface shadow-md transition duration-500 group-hover:-translate-y-1 ${
              isCentre ? 'translate-y-2' : 'translate-y-6'
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </div>
        )
      })}
    </div>
  )
}
