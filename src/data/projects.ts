export interface ProjectImage {
  src: string
  alt: string
  /** 'mobile' images go in the phone strip; anything else is a desktop shot. */
  kind?: 'desktop' | 'mobile'
}

export interface Project {
  slug: string
  title: string
  /** Groups the project on /projects. */
  category: 'software' | 'analytics'
  summary: string
  thumbnail: string
  /** 'mobile' renders the card media as a stack of phone shots (from `images` with kind 'mobile'). Default 'desktop'. */
  thumbnailKind?: 'desktop' | 'mobile'
  tags: string[]
  overview: string
  /** Omit for projects with no real-world problem/solution (e.g. dataset exercises). */
  problem?: string
  solution?: string
  /** What the project shows, as short bullets (used by analytics dashboards). */
  highlights?: string[]
  /** Findings read off the project (analytics dashboards). Interpretation of what is visible, not invented results. */
  conclusions?: string[]
  /** Suggested actions, framed as "if this were a live business"; never claimed outcomes. */
  recommendations?: string[]
  /** Source dataset; `url` is omitted until confirmed. */
  dataset?: { name: string; url?: string }
  images: ProjectImage[]
  liveUrl?: string
  repoUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: '2ndu',
    title: '2ndU',
    category: 'software',
    summary:
      'A second-hand marketplace for Rangsit University students: browse, post and chat about pre-loved items.',
    thumbnail: '/projects/2ndu/home.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    overview:
      '2ndU is a campus marketplace where Rangsit University students buy and sell pre-loved items. Members browse listings, post their own, and chat with each other, with an admin role for moderation.',
    problem:
      'Students throw away or struggle to resell books, furniture and gadgets, and general marketplaces or group chats make it hard to trust that a seller is a real student.',
    solution:
      'Sellers are verified: they confirm a school email and a student ID, enforced by a database function rather than the client. Row Level Security protects the data, and Supabase Realtime powers chat between buyers and sellers.',
    images: [
      { src: '/projects/2ndu/home.webp', alt: '2ndU home page: a rack of second-hand shirts and shoes on a green background with Shop Now and Sell Yours buttons' },
      { src: '/projects/2ndu/listing.webp', alt: '2ndU listing page for a refrigerator with a photo carousel, discounted price, Chat with Seller button and details tabs' },
      { src: '/projects/2ndu/chats.webp', alt: '2ndU chats: a list of conversations on the left and a buyer and seller negotiating a water bottle price on the right' },
      { src: '/projects/2ndu/become-seller.webp', alt: '2ndU Become a Seller page asking for a school email to send a confirmation link' },
      { src: '/projects/2ndu/post-item.webp', alt: '2ndU List an Item form with title, description, categories, location, handover options and image upload' },
      { src: '/projects/2ndu/mobile-home.webp', alt: '2ndU home page on a phone with Shop Now and Sell Yours buttons', kind: 'mobile' },
      { src: '/projects/2ndu/mobile-sign-up.webp', alt: '2ndU Create an Account form on a phone with Just Buying and Buy and Sell options', kind: 'mobile' },
      { src: '/projects/2ndu/mobile-browse.webp', alt: '2ndU Fresh Finds grid on a phone with category filters and item prices', kind: 'mobile' },
    ],
    liveUrl: 'https://2nd-u.vercel.app',
    repoUrl: 'https://github.com/Iggy14/2ndU',
    featured: true,
  },
  {
    slug: 'remindu',
    title: 'RemindU',
    category: 'software',
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
    featured: false,
  },
  {
    slug: 'tankq',
    title: 'TankQ',
    category: 'software',
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
    slug: 'reelgroup',
    title: 'ReelGroup',
    category: 'software',
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
    featured: false,
  },
  {
    slug: 'finance-tracker',
    title: 'Finance Tracker',
    category: 'software',
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
  {
    slug: '3a-superstore',
    title: '3A Superstore',
    category: 'analytics',
    summary:
      'A Power BI dashboard on customer demographics and order patterns for a Turkish retail chain.',
    thumbnail: '/projects/3a-superstore/dashboard.webp',
    tags: ['Power BI', 'Data Visualization', 'Kaggle'],
    overview:
      'An exploratory Power BI dashboard built on the 3A Superstore dataset from Kaggle, looking at who orders, where, and when across a Turkish retail chain.',
    highlights: [
      'Headline cards for top-spending gender (F), top-spending age (67) and the region with the most customers (Marmara)',
      'Total orders by region, led by İç Anadolu, then Akdeniz and Marmara',
      'Total orders by customer age and by month (the month axis is alphabetical, not calendar order)',
      'A map of customer concentration and a branch-town ranking, with Yenimahalle highest at 311,235 orders',
    ],
    conclusions: [
      'İç Anadolu leads on total orders (roughly 1.5M), ahead of Akdeniz and Marmara, with orders falling steadily down to Doğu Anadolu.',
      'Marmara has the most customers but ranks third on orders, which suggests fewer orders per customer there than in İç Anadolu.',
      'Orders look seasonal: January, March, April, May, June and July sit near 1.0M, while September to December drop to roughly 0.65M.',
      'Age is not a strong differentiator: orders stay within a narrow band (about 890K to 960K) with no clear trend, so the age-67 peak is only a marginal lead.',
      'Orders are concentrated in a few branch towns. Yenimahalle (311,235) and Çankaya (260,761), both in Ankara, lead, which fits İç Anadolu being the top region.',
    ],
    recommendations: [
      'Investigate why Marmara has so many customers but fewer orders, for example with loyalty offers or reorder reminders to lift order frequency.',
      'Plan promotions for the September to December dip, and make sure stock and staffing cover the January to July peak.',
      'Segment campaigns by region, branch town and gender rather than age, since age shows little variation.',
      'Add revenue, margin and orders-per-customer measures. Order counts alone cannot show profitability or customer value, and a year filter would separate seasonality from growth.',
    ],
    dataset: { name: '3A Superstore (Kaggle)' },
    images: [
      { src: '/projects/3a-superstore/dashboard.webp', alt: '3A Superstore Power BI dashboard: top spending gender, age and region cards, orders by region, age and month, a customer map and a branch-town table' },
    ],
    featured: true,
  },
  {
    slug: 'netflix-dashboard',
    title: 'Netflix Dashboard',
    category: 'analytics',
    summary:
      'A Tableau dashboard exploring the Netflix catalogue by type, genre, rating, country and year.',
    thumbnail: '/projects/netflix-dashboard/dashboard.webp',
    tags: ['Tableau', 'Data Visualization', 'Kaggle'],
    overview:
      'An exploratory Tableau dashboard built on a Netflix Movies and TV Shows dataset from Kaggle, showing what the catalogue is made of and how it grew, with a detail panel for a selected title.',
    highlights: [
      'A title detail panel (type, date added, rating, duration, release year, genre and description) shown for 3Below: Tales of Arcadia',
      'A world map shaded by the number of titles per country',
      'The top 10 genre combinations, led by Documentaries (299), Stand-Up Comedy (273) and Dramas, International Movies (248)',
      'Title counts by rating, led by TV-MA (2,027) and TV-14 (1,698)',
      'Movies and TV shows added by year, and a movie versus TV show split of 4,265 to 1,969',
    ],
    conclusions: [
      'Movies dominate the catalogue: 4,265 titles (68.42%) against 1,969 TV shows.',
      'Growth is recent. Titles barely register before about 2015, then climb steeply to a peak in 2019 of roughly 2,300. The sharp fall in 2020 is probably a partial year, so it should not be read as a decline.',
      'The catalogue leans mature: TV-MA and TV-14 together cover about 60% of titles, while the kids ratings (TV-Y7, TV-G, TV-Y, TV-Y7-FV and G) add up to under 10%.',
      'Documentaries and stand-up comedy are the largest single genre tags, and five of the top ten genre combinations include International Movies.',
    ],
    recommendations: [
      'Check how much of 2020 the data covers before drawing any conclusion about a slowdown.',
      'If household or family subscribers matter, the thin kids and family share (under 10% by rating) is the clearest gap to look at.',
      'Add viewing or engagement data. Title counts show what is on the service, not what people watch, so they cannot say which genres to invest in.',
      'Replace the map with a ranked bar chart of top countries, since a shaded map is hard to read precisely and hides the ranking.',
    ],
    dataset: { name: 'Netflix Movies and TV Shows (Kaggle)' },
    images: [
      { src: '/projects/netflix-dashboard/dashboard.webp', alt: 'Netflix Tableau dashboard: a title detail panel, a country map, the top 10 genres, ratings, titles by year and a movie versus TV show split' },
    ],
    featured: false,
  },
  {
    slug: 'nba-players-insight',
    title: 'NBA Players Insight',
    category: 'analytics',
    summary:
      'A Tableau dashboard on NBA player scoring, schools, age and PER, debut years and active status.',
    thumbnail: '/projects/nba-players-insight/dashboard.webp',
    tags: ['Tableau', 'Data Visualization', 'Kaggle'],
    overview:
      'An exploratory Tableau dashboard built on an NBA players dataset from Kaggle, covering all-time scoring leaders, where players come from, how PER varies with age, and how many players are still active, with a player card for a selected player.',
    highlights: [
      'A player card (position, height, weight, birthday, school, debut year and PER) shown for Cody Williams',
      'The top 10 career scorers against their average, led by LeBron James (42,174), Karl Malone (36,900) and Kobe Bryant (33,650)',
      'The five schools that produced the most players: Kentucky, Duke, UCLA, UNC and Kansas',
      'Average PER by age, from 8.5 at age 20 to 11.574 at age 23',
      'Players per debut year, average height and weight, and a split of 885 active to 4,384 inactive players',
    ],
    conclusions: [
      'Most players in the data are inactive: 4,384 of 5,269 (83.25%), against 885 active players.',
      'LeBron James is the clear career-scoring leader at 42,174 points. Four of the top ten sit above the top-ten average line.',
      'Kentucky is the largest source of players, ahead of Duke, UCLA and UNC, which are close together. The school chart does not start at zero, so it exaggerates how small Kansas looks next to Kentucky.',
      'PER is highest at age 23 (11.574) and lowest at age 20 (8.5), with ages 21 to 25 all above 10, so production seems to settle in from the early twenties.',
      'The debut-year chart is not in calendar order and every value is 100 or more, so it appears to show only the busiest debut years, led by 1968 (172) and 1947 (161). It cannot show a trend over time.',
    ],
    recommendations: [
      'For scouting, treat ages 21 to 25 as the main window, but check how many players sit behind each age before relying on the PER averages.',
      'Compare scorers across eras with per-game or per-season figures. Career points favour long careers, so the ranking mixes eras and career lengths.',
      'Put the school chart on a zero-based axis and the debut-year chart in calendar order so both can be read without a misleading impression.',
      'Add player counts next to PER by age, and a way to see PER by position, so the numbers can be trusted.',
    ],
    dataset: { name: 'NBA players (Kaggle)' },
    images: [
      { src: '/projects/nba-players-insight/dashboard.webp', alt: 'NBA Players Insight Tableau dashboard: a player card, top 10 scorers, top 5 schools, PER by age, players per debut year, average height and weight, and active versus inactive players' },
    ],
    featured: false,
  },
]
