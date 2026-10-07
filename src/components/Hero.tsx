import { motion, useReducedMotion } from 'framer-motion'
import SocialLinks from './SocialLinks'
import { profile } from '../data/profile'

const [first, second] = profile.heroLines

const line = 'block font-hero uppercase leading-[0.85] tracking-tight text-[clamp(4.5rem,17vw,13rem)]'

/** The two-line name. Rendered twice: solid behind the portrait, outlined in front of it. */
function NameLines({ className = '', intro = false }: { className?: string; intro?: boolean }) {
  return (
    <div className={`absolute inset-x-[30px] top-24 md:top-10 ${className}`}>
      <div className="relative">
        <span aria-hidden className={line}>
          {first}
        </span>
        {intro && (
          <p className="absolute left-[50px] top-full mt-[80px] max-w-[15rem] text-xs font-normal text-hero-text [-webkit-text-stroke:0] sm:max-w-xs sm:text-sm">
            {profile.heroIntro}
          </p>
        )}
      </div>
      <div className="relative">
        <span aria-hidden className={`${line} mt-[calc(max(14vw,11rem)+70px)] text-right lg:mt-[calc(10rem+70px)]`}>
          {second}
        </span>
        {intro && (
          <SocialLinks className="pointer-events-auto absolute -left-[10px] flex-col top-1/2 -translate-y-1/2 text-base [-webkit-text-stroke:0]" />
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' as const, delay },
  })

  return (
    <section
      id="home"
      data-nav="home"
      className="relative scroll-mt-16 overflow-hidden bg-gradient-to-br from-hero-from via-hero-via to-hero-to"
    >
      <h1 className="sr-only">{profile.name}</h1>
      <div className="relative mx-auto flex h-[calc(100svh-4rem)] min-h-[34rem] max-w-[90rem] flex-col">
        {/* Layer 1: solid name, behind the portrait */}
        <NameLines className="z-0 text-hero-text" />

        {/* Layer 2: portrait, cropped to the upper body */}
        <motion.div
          {...fade(0.2)}
          className="pointer-events-none absolute inset-x-0 bottom-16 top-28 z-10 flex justify-center md:top-12"
        >
          <div className="h-full w-[min(80vw,26rem)] overflow-hidden [mask-image:linear-gradient(to_bottom,black_65%,transparent_95%)] md:[mask-image:none]">
            <img
              src="/hero_pic.webp"
              alt={`Portrait of ${profile.name}`}
              width={724}
              height={2171}
              className="w-full max-w-none"
            />
          </div>
        </motion.div>

        {/* Layer 3: outlined name, in front of the portrait */}
        <NameLines
          intro
          className="pointer-events-none z-20 text-transparent [-webkit-text-stroke:2px_var(--color-hero-text)]"
        />

        {/* Bottom bar */}
        <div className="relative z-30 mx-auto mt-auto flex w-full max-w-6xl items-center border-t border-hero-text/60 px-4 py-4 sm:px-6">
          <p className="font-hero text-xl uppercase tracking-wide text-hero-text sm:text-3xl">
            I&apos;m {profile.shortName}, a {profile.role}
          </p>
        </div>
      </div>
    </section>
  )
}
