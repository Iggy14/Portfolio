import { useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const apply = (dark: boolean) => {
  document.documentElement.classList.toggle('dark', dark)
  document.querySelector('meta[name=theme-color]')?.setAttribute('content', dark ? '#1a1316' : '#fff8f0')
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  } catch {
    // storage unavailable; theme just won't persist
  }
}

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  return (
    <button
      type="button"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => {
        apply(!dark)
        setDark(!dark)
      }}
      className={`flex h-11 w-11 items-center justify-center rounded-full text-rose-dark transition hover:bg-blush ${className}`}
    >
      {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  )
}
