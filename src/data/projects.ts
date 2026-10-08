export interface ProjectImage {
  src: string
  alt: string
  /** 'mobile' images go in the phone strip; anything else is a desktop shot. */
  kind?: 'desktop' | 'mobile'
}

export interface Project {
  slug: string
  title: string
  summary: string
  thumbnail: string
  /** 'mobile' renders the card media as a stack of phone shots (from `images` with kind 'mobile'). Default 'desktop'. */
  thumbnailKind?: 'desktop' | 'mobile'
  tags: string[]
  overview: string
  problem: string
  solution: string
  images: ProjectImage[]
  liveUrl?: string
  repoUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'remindu',
    title: 'RemindU',
    summary:
      'An AI life-admin PWA: describe a responsibility in plain language and it becomes a reminder with push notifications.',
    thumbnail: '/projects/remindu/mobile-home.webp',
    thumbnailKind: 'mobile',
    tags: ['React', 'TypeScript', 'Supabase', 'Gemini', 'PWA'],
    overview:
      'RemindU is an installable, mobile-first PWA for two people plus a shared space. You tell it something like "car insurance renews every 14 March, remind me a month before" and it sets up the reminder for you.',
    problem:
      'Life admin (renewals, deadlines, recurring chores) lives in people\'s heads, and generic reminder apps make you fill in rigid forms. Letting an AI do the date maths is risky because language models are unreliable at it.',
    solution:
      'The AI only extracts intent into a structured rule; a deterministic rule engine does all the date calculations, including recurring and month-end-safe schedules. Reminders can be private or shared with a group, and Web Push (VAPID) delivers notifications on Android and installed iOS.',
    images: [
      { src: '/projects/remindu/mobile-home.webp', alt: 'RemindU home: October calendar with due-date dots and the next reminders', kind: 'mobile' },
      { src: '/projects/remindu/mobile-chat.webp', alt: 'RemindU chat turning "pay bills on every 30th monthly" into a shared reminder to confirm', kind: 'mobile' },
      { src: '/projects/remindu/mobile-reminders.webp', alt: 'RemindU reminders list grouped into next 7 days and later, with Personal and Shared tabs', kind: 'mobile' },
      { src: '/projects/remindu/mobile-settings.webp', alt: 'RemindU settings: shared space with an invite code, members and notification toggle', kind: 'mobile' },
      { src: '/projects/remindu/mobile-notifications.webp', alt: 'RemindU push notifications on Android: buy cat food is due tomorrow, Anniversary is due in 3 days', kind: 'mobile' },
      { src: '/projects/remindu/mobile-sign-in.webp', alt: 'RemindU sign-in screen with email and password fields', kind: 'mobile' },
    ],
    liveUrl: 'https://remind-u-ivory.vercel.app',
    repoUrl: 'https://github.com/Iggy14/RemindU',
    featured: true,
  },
  {
    slug: 'reelgroup',
    title: 'ReelGroup',
    summary:
      'A group movie-night picker: suggest films, vote, track what you have seen, and settle ties with a live bracket.',
    thumbnail: '/projects/reelgroup/main.webp',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    overview:
      'ReelGroup helps a group of friends agree on what to watch. Members join a group with an invite code, suggest films from TMDB, and vote; the top-voted film becomes Tonight\'s Pick.',
    problem:
      'Choosing a movie as a group usually turns into endless back-and-forth in a chat, with no record of what has already been watched.',
    solution:
      'A "Decide Now" live session runs a bracket where each member makes a final pick, with ties spawning a runoff automatically. Per-member watched tracking, optimistic voting, and Supabase Realtime keep everyone in sync.',
    images: [
      { src: '/projects/reelgroup/main.webp', alt: 'ReelGroup watchlist: six suggested films with vote counts and a Decide Now button' },
      { src: '/projects/reelgroup/sign-in.webp', alt: 'ReelGroup sign-in screen with an invite-code field' },
      { src: '/projects/reelgroup/tonights-pick.webp', alt: 'Tonight\'s Pick: the top-voted film with its synopsis and who suggested it' },
      { src: '/projects/reelgroup/decide-now.webp', alt: 'Decide Now live bracket: choose between Blade Runner 2049 and Van Helsing' },
      { src: '/projects/reelgroup/film-details.webp', alt: 'Film details dialog for Monsters vs Aliens with a Choose This button' },
      { src: '/projects/reelgroup/members.webp', alt: 'Group page with the invite code and each member\'s watched and suggested counts' },
      { src: '/projects/reelgroup/mobile-watchlist.webp', alt: 'ReelGroup watchlist on a phone', kind: 'mobile' },
      { src: '/projects/reelgroup/mobile-suggest.webp', alt: 'Suggest a Film dialog on a phone', kind: 'mobile' },
      { src: '/projects/reelgroup/mobile-members.webp', alt: 'Group members page on a phone', kind: 'mobile' },
    ],
    liveUrl: 'https://reel-group-movie-picker.vercel.app',
    repoUrl: 'https://github.com/Iggy14/ReelGroup-Movie-Picker',
    featured: true,
  },
  {
    slug: 'tankq',
    title: 'TankQ',
    summary:
      'A bilingual (Thai/English) marketing and catalogue website for an FRP tank manufacturer.',
    thumbnail: '/projects/tankq/home.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'next-intl'],
    overview:
      'The public website for TankQ Solution, an FRP and PE tank manufacturer, with a product catalogue, project showcase, after-sales services and contact pages.',
    problem:
      'The company needed a professional presence for Thai and international customers, with a catalogue that is easy to update without a backend.',
    solution:
      'A fully static Next.js site with locale-prefixed routes, content held in typed data and JSON message files, and composable product-detail sections (size tables, lists, image grids, zoomable diagrams). Per-page SEO metadata, a sitemap, hreflang and JSON-LD breadcrumbs are built in.',
    images: [
      { src: '/projects/tankq/home.webp', alt: 'TankQ home page: "Strong. Safe. Sustainable." hero over a blue FRP tank' },
      { src: '/projects/tankq/about.webp', alt: 'TankQ about page with four colour variants of a water tank' },
      { src: '/projects/tankq/products.webp', alt: 'TankQ products page with category filters and tank photos' },
      { src: '/projects/tankq/product-detail.webp', alt: 'FRP Vertical Water Tank product page with a photo gallery' },
      { src: '/projects/tankq/tank-designs.webp', alt: 'Standard tank design drawings from 8 to 30 cubic metres with dimensions' },
      { src: '/projects/tankq/quality.webp', alt: 'Quality page: production standards and the FRP production process' },
      { src: '/projects/tankq/contact.webp', alt: 'Contact page with a LINE QR code and company details' },
      { src: '/projects/tankq/mobile-menu.webp', alt: 'TankQ mobile navigation drawer with the products submenu', kind: 'mobile' },
      { src: '/projects/tankq/mobile-septic.webp', alt: 'TankQ septic anaerobic filter system page on a phone with a size table', kind: 'mobile' },
    ],
    liveUrl: 'https://www.tankq-solution.com',
    repoUrl: 'https://github.com/Iggy14/tankq',
    featured: true,
  },
  {
    slug: 'finance-tracker',
    title: 'Finance Tracker',
    summary:
      'A mobile-first personal finance app for tracking daily expenses across multiple bank accounts.',
    thumbnail: '/projects/finance-tracker/mobile-calendar.webp',
    thumbnailKind: 'mobile',
    tags: ['React', 'Vite', 'Supabase', 'Recharts'],
    overview:
      'A phone-first expense tracker with a monthly calendar view, category breakdowns, per-account daily budgets and Google sign-in, so all data stays private to each user.',
    problem:
      'Spreadsheets are clumsy for logging everyday spending on the go, and splitting it across several bank accounts makes it harder to see where money goes.',
    solution:
      'Tap any day on the calendar to add or review entries in a bottom sheet. An analytics dashboard shows a spending pie chart, monthly bar chart and daily food spend against budget, with data synced in real time to Supabase.',
    images: [
      { src: '/projects/finance-tracker/mobile-calendar.webp', alt: 'Finance Tracker home: account balance card and a monthly calendar with under, near and over budget dots', kind: 'mobile' },
      { src: '/projects/finance-tracker/mobile-analytics.webp', alt: 'Finance Tracker analytics: total spent, average per day, days over budget and a spending-by-category chart', kind: 'mobile' },
      { src: '/projects/finance-tracker/mobile-settings.webp', alt: 'Finance Tracker settings: bank accounts with balances and daily budgets, and the profile', kind: 'mobile' },
      { src: '/projects/finance-tracker/mobile-entry.webp', alt: 'Finance Tracker day entry sheet where numbers and formulas like =A1+B2*3 can be typed', kind: 'mobile' },
      { src: '/projects/finance-tracker/mobile-sign-in.webp', alt: 'Finance Tracker sign-in with a Continue with Google button', kind: 'mobile' },
    ],
    liveUrl: 'https://finance-tracker-zeta-murex-50.vercel.app',
    repoUrl: 'https://github.com/Iggy14/finance-tracker',
    featured: false,
  },
]
