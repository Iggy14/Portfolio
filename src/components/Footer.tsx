import SocialLinks from './SocialLinks'
import { profile } from '../data/profile'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-pink/60 bg-cream-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-ink-soft">
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
