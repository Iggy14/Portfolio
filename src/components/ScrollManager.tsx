import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 * Handles scrolling on navigation: to the #hash target if present
 * (retrying briefly while lazy pages mount), otherwise to the top.
 * A hash present on the initial page load (e.g. after a refresh) is dropped
 * so the page opens at the top.
 */
export default function ScrollManager() {
  const { pathname, search, hash, key } = useLocation()
  const navigate = useNavigate()
  const prevPath = useRef(pathname)
  const initialKey = useRef(key)

  useEffect(() => {
    const pathChanged = prevPath.current !== pathname
    prevPath.current = pathname

    if (hash && key === initialKey.current) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      navigate({ pathname, search }, { replace: true })
      return
    }

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
  }, [pathname, search, hash, key, navigate])

  return null
}
