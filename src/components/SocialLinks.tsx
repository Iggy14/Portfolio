import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { profile } from '../data/profile'

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
}

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {profile.socials.map(({ label, href, icon }) => {
        const Icon = icons[icon]
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-blush text-rose-dark transition hover:-translate-y-0.5 hover:bg-pink"
            >
              <Icon size={20} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
