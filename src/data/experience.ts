export interface Experience {
  role: string
  company: string
  period: string
  highlights: string[]
}

export const experience: Experience[] = [
  {
    role: 'Software Developer (Internship)',
    company: 'Thai Chemical Storage Company Limited',
    period: 'Aug 2026 - Dec 2026',
    highlights: [
      'Designed and developed company websites from the ground up, turning business needs into clean, responsive pages.',
      'Worked directly with stakeholders to gather requirements and deliver features that met their expectations.',
    ],
  },
  {
    role: 'English Teacher (Part-time)',
    company: 'Erudite Organization',
    period: 'Feb 2025 - Jun 2025',
    highlights: [
      'Supported 5+ students in improving spoken and listening English confidence through consistent one-on-one sessions.',
    ],
  },
  {
    role: 'Data Analyst (Part-time)',
    company: 'Rangsit International Language Center',
    period: 'Jan 2024 - Apr 2024',
    highlights: [
      'Analyzed data and managed digital forms, strengthening spreadsheet skills and cross-cultural communication.',
    ],
  },
  {
    role: 'ICT Tutor (Freelance)',
    company: 'Rangsit University',
    period: 'Jun 2023 - Present',
    highlights: [
      'Mentored 10+ classmates on databases, web fundamentals, and programming; improved project completion rates.',
    ],
  },
  {
    role: 'Web & Database Trainee',
    company: 'Ei Mon Mon Swe Academy',
    period: 'Jul 2020 - Sep 2022',
    highlights: ['Built web projects with HTML/CSS/JS and worked on SQL schema design and data normalization.'],
  },
]

/** Same shape as Experience: `role` is the programme, `company` the school. */
export const education: Experience[] = [
  {
    role: 'B.Sc. Information and Communication Technology',
    company: 'Rangsit University, Pathum Thani',
    period: 'Jun 2023 - Present',
    highlights: ['Relevant: Data Structures, Web Development, Database Systems, Software Engineering'],
  },
  {
    role: 'Foundation - Web, Backend & Database Development',
    company: 'Teacher Ei Mon Mon Swe',
    period: 'Jul 2020 - Sep 2022',
    highlights: [],
  },
  {
    role: 'Chinese Language',
    company: 'Yangon University of Foreign Language',
    period: 'Dec 2019 - Mar 2020',
    highlights: [],
  },
]
