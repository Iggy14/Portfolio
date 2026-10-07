import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { profile } from '../data/profile'
import { useActiveSection, type NavKey } from '../hooks/useActiveSection'

export default function Navbar() {
  const { pathname } = useLocation()
  const active = useActiveSection()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links: { key: Exclude<NavKey, null>; label: string; to: string | { pathname: string; hash: string } }[] = [
    { key: 'home', label: 'Home', to: '/' },
    { key: 'about', label: 'About', to: '/#about' },
    { key: 'projects', label: 'Projects', to: '/projects' },
    { key: 'contact', label: 'Contact', to: { pathname, hash: '#contact' } },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = (key: NavKey) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      active === key ? 'bg-pink text-rose-dark' : 'text-ink hover:bg-blush'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled || open ? 'bg-cream/85 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="absolute left-4 top-2 -translate-y-20 rounded bg-rose-dark px-3 py-2 text-sm text-white focus:translate-y-0"
      >
        Skip to content
      </a>

      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" onClick={() => setOpen(false)} className="font-display text-2xl text-rose-dark">
          {profile.name}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link key={l.key} to={l.to} className={linkClass(l.key)}>
              {l.label}
            </Link>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded-full bg-rose-dark px-5 py-2 text-sm font-medium text-white transition hover:bg-rose hover:text-ink"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-rose-dark md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] overflow-y-auto bg-cream px-6 pb-10 pt-4 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.key}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-pink/50 py-4 font-display text-2xl ${
                    active === l.key ? 'text-rose-dark' : 'text-ink'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block rounded-full bg-rose-dark py-3 text-center font-medium text-white"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  )
}
