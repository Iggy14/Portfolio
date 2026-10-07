export interface Experience {
  role: string
  company: string
  period: string
  highlights: string[]
}

export const experience: Experience[] = [
  {
    role: 'Job Title',
    company: 'Company Name',
    period: '2025 - Present',
    highlights: ['Describe a key responsibility or achievement.', 'Add another, ideally with a measurable result.'],
  },
  {
    role: 'Previous Role',
    company: 'Another Company',
    period: '2023 - 2025',
    highlights: ['Describe a key responsibility or achievement.'],
  },
]
