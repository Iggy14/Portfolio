import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export type NavKey = 'home' | 'about' | 'projects' | 'contact' | null

/**
 * Scroll-spy. Sections opt in with a `data-nav` attribute. On non-home pages
 * the Projects link follows the route, and Contact highlights when in view.
 */
export function useActiveSection(): NavKey {
  const { pathname } = useLocation()
  const [active, setActive] = useState<NavKey>(null)

  useEffect(() => {
    const update = () => {
      const marker = window.innerHeight * 0.35
      let current: NavKey = null

      document.querySelectorAll<HTMLElement>('[data-nav]').forEach((el) => {
        if (el.getBoundingClientRect().top <= marker) current = el.dataset.nav as NavKey
      })

      if (pathname.startsWith('/projects') && current !== 'contact') current = 'projects'
      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    const t = window.setTimeout(update, 400) // after lazy pages mount
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      window.clearTimeout(t)
    }
  }, [pathname])

  return active
}
