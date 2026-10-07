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
    'Hi! I am Iggy. I loveee building things that actually solve problems with a background in data analytics. >_<',
    'I’m comfortable working across the full stack, from designing REST APIs and database schemas to building responsive, mobile-first UIs, with hands-on experience using React, Node.js, Firebase, and PostgreSQL.',
  ],
  email: 'hsulab9@gmail.com',
  resumeUrl: '/resume.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Iggy14', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hsu-lab-phyo-pai-b65669309', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:hsulab9@gmail.com', icon: 'email' },
  ],
}
