export interface Project {
  slug: string
  title: string
  summary: string
  thumbnail: string
  tags: string[]
  role: string
  year: string
  overview: string
  problem: string
  solution: string
  images: string[]
  liveUrl?: string
  repoUrl?: string
  featured: boolean
}

const placeholder = '/projects/placeholder.svg'

export const projects: Project[] = [
  {
    slug: 'project-one',
    title: 'Project One',
    summary: 'A short description of what this project does and why it matters.',
    thumbnail: placeholder,
    tags: ['React', 'TypeScript'],
    role: 'Design and development',
    year: '2026',
    overview: 'A paragraph introducing the project.',
    problem: 'What problem were you solving?',
    solution: 'How did you solve it, and what did you learn?',
    images: [placeholder, placeholder],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/your-username/project-one',
    featured: true,
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    summary: 'A short description of what this project does and why it matters.',
    thumbnail: placeholder,
    tags: ['React', 'Tailwind'],
    role: 'Frontend developer',
    year: '2026',
    overview: 'A paragraph introducing the project.',
    problem: 'What problem were you solving?',
    solution: 'How did you solve it, and what did you learn?',
    images: [placeholder],
    repoUrl: 'https://github.com/your-username/project-two',
    featured: true,
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    summary: 'A short description of what this project does and why it matters.',
    thumbnail: placeholder,
    tags: ['Node.js', 'PostgreSQL'],
    role: 'Full-stack developer',
    year: '2025',
    overview: 'A paragraph introducing the project.',
    problem: 'What problem were you solving?',
    solution: 'How did you solve it, and what did you learn?',
    images: [placeholder],
    featured: true,
  },
  {
    slug: 'project-four',
    title: 'Project Four',
    summary: 'A short description of what this project does and why it matters.',
    thumbnail: placeholder,
    tags: ['TypeScript'],
    role: 'Developer',
    year: '2025',
    overview: 'A paragraph introducing the project.',
    problem: 'What problem were you solving?',
    solution: 'How did you solve it, and what did you learn?',
    images: [placeholder],
    featured: false,
  },
]
