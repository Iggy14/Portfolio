import { useState } from 'react'
import type { ProjectImage } from '@/data/projects'
import { cn } from '@/lib/utils'
import GalleryLightbox from './GalleryLightbox'

interface ProjectGalleryProps {
  title: string
  images: ProjectImage[]
}

/** Desktop shots: one large hero with a thumbnail strip. Mobile shots: a horizontal phone strip. */
export default function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const desktop = images.filter((image) => image.kind !== 'mobile')
  const mobile = images.filter((image) => image.kind === 'mobile')
  // The lightbox walks desktop shots first, then mobile, matching the order on the page.
  const all = [...desktop, ...mobile]

  const [active, setActive] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-6">
      {desktop.length > 0 && (
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={() => setLightboxIndex(active)}
            aria-label={`Enlarge: ${desktop[active].alt}`}
            className="block w-full cursor-zoom-in overflow-hidden rounded-2xl ring-1 ring-pink/60"
          >
            <img
              src={desktop[active].src}
              alt={desktop[active].alt}
              width={1600}
              height={1000}
              decoding="async"
              className="aspect-[2/1] w-full object-cover"
            />
          </button>

          {desktop.length > 1 && (
            <ul className="-m-1 flex gap-3 overflow-x-auto p-1" aria-label="Screenshots">
              {desktop.map((image, i) => (
                <li key={`${image.src}-${i}`} className="w-24 shrink-0 sm:w-32">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show: ${image.alt}`}
                    aria-pressed={i === active}
                    className={cn(
                      'block w-full overflow-hidden rounded-lg ring-1 ring-pink/60 transition',
                      i === active ? 'ring-2 ring-rose-dark' : 'opacity-60 hover:opacity-100',
                    )}
                  >
                    <img
                      src={image.src}
                      alt=""
                      width={320}
                      height={200}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[2/1] w-full object-cover"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {mobile.length > 0 && (
        <div className="flex flex-col gap-3">
          <h2 className="text-lg">On mobile</h2>
          <ul className="-m-1 flex snap-x snap-mandatory gap-4 overflow-x-auto p-1 pb-2">
            {mobile.map((image, i) => (
              <li key={`${image.src}-${i}`} className="w-40 shrink-0 snap-start sm:w-48">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(desktop.length + i)}
                  aria-label={`Enlarge: ${image.alt}`}
                  className="block w-full cursor-zoom-in overflow-hidden rounded-3xl ring-1 ring-pink/60"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={390}
                    height={844}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[9/19.5] w-full object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <GalleryLightbox
        title={title}
        images={all}
        startIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </div>
  )
}
