import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Handles scrolling on navigation: to the #hash target if present
 * (retrying briefly while lazy pages mount), otherwise to the top.
 */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const prevPath = useRef(pathname)

  useEffect(() => {
    const pathChanged = prevPath.current !== pathname
    prevPath.current = pathname

    if (!hash) {
      window.scrollTo({ top: 0, behavior: pathChanged ? 'instant' : 'smooth' })
      return
    }

    let frame = 0
    let tries = 0
    const seek = () => {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: pathChanged ? 'instant' : 'smooth', block: 'start' })
      } else if (tries++ < 60) {
        frame = requestAnimationFrame(seek)
      }
    }
    seek()
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, key])

  return null
}
