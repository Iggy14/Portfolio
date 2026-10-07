import type { ProjectImage } from '@/data/projects'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'

interface GalleryLightboxProps {
  title: string
  images: ProjectImage[]
  /** Index to open at, or null when closed. */
  startIndex: number | null
  onClose: () => void
}

/** Full-screen viewer: swipe, arrow keys or the arrow buttons to move between images. */
export default function GalleryLightbox({
  title,
  images,
  startIndex,
  onClose,
}: GalleryLightboxProps) {
  return (
    <Dialog open={startIndex !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-5xl">
        <DialogTitle className="sr-only">{title} screenshots</DialogTitle>
        <DialogDescription className="sr-only">
          Use the arrow keys or swipe to move between screenshots.
        </DialogDescription>
        <Carousel opts={{ startIndex: startIndex ?? 0 }}>
          <CarouselContent>
            {images.map((image, i) => (
              <CarouselItem key={`${image.src}-${i}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="mx-auto max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length > 1 && (
            <>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </>
          )}
        </Carousel>
      </DialogContent>
    </Dialog>
  )
}
