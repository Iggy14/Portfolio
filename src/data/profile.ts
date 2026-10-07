export interface Profile {
  name: string
  /** Name split into the two display lines used by the hero */
  heroLines: [string, string]
  /** 2-3 line intro shown under the first name line in the hero */
  heroIntro: string
  /** Short form used in "I'm …" sentences */
  shortName: string
  role: string
  tagline: string
  about: string[]
  email: string
  resumeUrl: string
  socials: { label: string; href: string; icon: 'github' | 'linkedin' | 'email' }[]
}

export const profile: Profile = {
  name: 'Hsu Lab Phyo Pai',
  heroLines: ['Hsu Lab', 'Phyo Pai'],
  shortName: 'Hsu Lab',
  heroIntro:
    'I design and build clean, thoughtful web experiences. Curious, detail-oriented, and always learning something new.',
  role: 'Software Developer',
  tagline: 'I build thoughtful, responsive web experiences with React and TypeScript.',
  about: [
    'Write a short intro about who you are and what you do.',
    'Add a second paragraph about what you care about, what you are learning, or what you are looking for.',
  ],
  email: 'you@example.com',
  resumeUrl: '/resume.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/your-username', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/your-username', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:you@example.com', icon: 'email' },
  ],
}
