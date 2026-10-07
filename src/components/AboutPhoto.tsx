import Reveal from './Reveal'

export default function AboutPhoto() {
  return (
    <Reveal className="order-first mx-auto w-full max-w-xs md:order-none md:max-w-sm">
      <div className="relative aspect-square">
        <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-full bg-rose-dark" aria-hidden />
        <div className="absolute inset-0 translate-x-3 -translate-y-1 rounded-full bg-rose" aria-hidden />
        <img
          src="/about.jpg"
          alt="Portrait"
          width={800}
          height={800}
          loading="lazy"
          decoding="async"
          className="relative size-full rounded-full border-8 border-cream object-cover"
        />
      </div>
    </Reveal>
  )
}
