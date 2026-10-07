export interface SkillGroup {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Vite', 'Figma', 'VS Code'] },
]
