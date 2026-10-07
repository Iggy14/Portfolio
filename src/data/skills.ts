import type { IconType } from 'react-icons'
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiGooglecolab,
  SiPostgresql,
  SiPwa,
  SiPython,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVitest,
  SiZod,
} from 'react-icons/si'
import { FaFileExcel } from 'react-icons/fa'
import { IoLogoTableau } from 'react-icons/io5'
import PowerBiIcon from './PowerBiIcon'

export interface Skill {
  name: string
  /** Official website the logo links to. */
  url: string
  icon: IconType
  /** Brand colour; omit to use the default ink colour. */
  color?: string
}

export interface SkillGroup {
  category: string
  items: Skill[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { name: 'TypeScript', url: 'https://www.typescriptlang.org', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', url: 'https://developer.mozilla.org/docs/Web/JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML', url: 'https://developer.mozilla.org/docs/Web/HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', url: 'https://developer.mozilla.org/docs/Web/CSS', icon: SiCss, color: '#663399' },
      { name: 'Python', url: 'https://www.python.org', icon: SiPython, color: '#3776AB' },
      { name: 'SQL (PostgreSQL)', url: 'https://www.postgresql.org', icon: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', url: 'https://react.dev', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', url: 'https://nextjs.org', icon: SiNextdotjs },
      { name: 'Vite', url: 'https://vite.dev', icon: SiVite, color: '#646CFF' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'shadcn/ui', url: 'https://ui.shadcn.com', icon: SiShadcnui },
    ],
  },
  {
    category: 'Backend & Data',
    items: [
      { name: 'Supabase', url: 'https://supabase.com', icon: SiSupabase, color: '#3FCF8E' },
      { name: 'Firebase', url: 'https://firebase.google.com', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Node.js', url: 'https://nodejs.org', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express', url: 'https://expressjs.com', icon: SiExpress },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', url: 'https://git-scm.com', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', url: 'https://github.com', icon: SiGithub },
      { name: 'Docker', url: 'https://www.docker.com', icon: SiDocker, color: '#2496ED' },
      { name: 'Vitest', url: 'https://vitest.dev', icon: SiVitest, color: '#6E9F18' },
      { name: 'Zod', url: 'https://zod.dev', icon: SiZod, color: '#408AFF' },
      { name: 'PWA', url: 'https://web.dev/progressive-web-apps', icon: SiPwa, color: '#5A0FC8' },
      { name: 'Google Colab', url: 'https://colab.research.google.com', icon: SiGooglecolab, color: '#F9AB00' },
      { name: 'Power BI', url: 'https://powerbi.microsoft.com', icon: PowerBiIcon, color: '#F2C811' },
      { name: 'Tableau', url: 'https://www.tableau.com', icon: IoLogoTableau, color: '#E97627' },
      { name: 'Excel', url: 'https://www.microsoft.com/microsoft-365/excel', icon: FaFileExcel, color: '#217346' },
    ],
  },
]
