# Architecture

A single-page portfolio built with Vite, React 19, and TypeScript. It has no backend. Content lives in typed data files, and the contact form posts to a third-party form service.

## Tech stack

| Concern | Choice |
|---|---|
| Build / dev server | Vite |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS v4 (theme tokens in `src/index.css`) |
| Routing | React Router (`BrowserRouter`) |
| Animation | Framer Motion |
| UI components | shadcn/ui (Radix base; `components.json`, files in `src/components/ui/`) |
| Forms | React Hook Form + Zod |
| Icons | react-icons |
| Lint | oxlint |

## Folder structure

```
public/
  favicon.svg            Favicon (pink rounded square, "HL", cat ears)
  resume.pdf             Resume (add yours; opened by the nav button)
  projects/              Project images
src/
  main.tsx               Entry point
  App.tsx                Router and lazy-loaded routes
  index.css              Tailwind import, theme tokens, base styles
  data/                  All site content, typed
    profile.ts           Name, role, tagline, about text, socials, resume URL
    projects.ts          Project list (Project interface)
    skills.ts            Tech stack groups
    experience.ts        Work history
  components/
    Layout.tsx           Shell: navbar, page outlet, contact, footer
    Navbar.tsx           Fixed nav, mobile drawer
    Contact.tsx          Contact form section (shown on every page)
    Footer.tsx
    ScrollManager.tsx    Scroll-to-top / scroll-to-hash on navigation
    ProjectCard.tsx      Thumbnail card linking to a project page
    SocialLinks.tsx      Icon links (hero and footer)
    SectionHeading.tsx
    Hero.tsx             Home hero: name in 3 layers (solid / portrait / outlined), from profile.heroLines
    ThemeToggle.tsx      Light/dark switch
    Timeline.tsx         Vertical timeline for experience and education (both use the Experience shape)
    EducationList.tsx    Minimal education list (degree, school, right-aligned dates)
    Reveal.tsx           Scroll-triggered fade/slide-up wrapper
    ProjectGallery.tsx   Project images: desktop hero + thumbnails, phone strip
    GalleryLightbox.tsx  Dialog + Carousel viewer opened from the gallery
    ui/                  shadcn/ui components (button, dialog, tabs, carousel)
  hooks/
    useActiveSection.ts  Scroll-spy for nav highlighting
  pages/
    Home.tsx             Hero, About, Featured projects, Tech stack, Experience
    Projects.tsx         All projects grid
    ProjectDetail.tsx    Full project page
    NotFound.tsx         404
```

## Routing

| Path | Page |
|---|---|
| `/` | Home |
| `/projects` | All projects |
| `/projects/:slug` | Project detail (unknown slug renders the 404 page) |
| `*` | 404 |

Every route renders inside `Layout`, so the contact section and footer appear on all pages, including the 404. Pages are loaded with `React.lazy`, and `Layout` wraps the outlet in `Suspense`.

## Page layout

`Layout` renders, top to bottom: `ScrollManager` (renders nothing), `Navbar` (fixed), the routed page inside an animated `<main>`, then `Contact` and `Footer`. The `<main>` is keyed by pathname, so it fades in on each route change.

## Navigation and scrolling

The nav links are Home, About, Projects, Contact, plus a Resume button. Resume is a plain `<a target="_blank">` to `/resume.pdf`.

- **Home** links to `/`.
- **About** links to `/#about`, a section on the home page.
- **Projects** links to `/projects`.
- **Contact** links to `{ pathname: <current page>, hash: '#contact' }`, so it scrolls to the form on whatever page you are on.

`ScrollManager` reacts to every location change (including repeated clicks on the same link, via `location.key`):
- With a hash, it finds the element by id and scrolls to it. It retries each animation frame for up to about 1 second, because lazy-loaded pages may not have mounted yet.
- Without a hash, it scrolls to the top.
- It scrolls instantly when the path changed and smoothly otherwise.

## Scroll-spy

Sections opt in with a `data-nav="home|about|projects|contact"` attribute. `useActiveSection` listens to scroll and resize and picks the last tagged section whose top has passed 35% of the viewport height. On any `/projects*` route, Projects is active unless the contact section is in view.

On the home page, the sections map to nav items as follows:

| Section | `data-nav` |
|---|---|
| Hero | `home` |
| About | `about` |
| Featured projects | `projects` |
| Tech stack, Experience | `about` |
| Contact | `contact` |

## Content model

Tech stack entries in `skills.ts` are `{ name, url, icon, color? }`, with `icon` a `react-icons/si` component and `url` the official site. `TechBento.tsx` renders them as a bento grid: one card per category (card widths are in its `spans` map, keyed by category name), with logo-only tiles shown in brand colour that reveal the name on hover or focus. Tiles open `url` in a new tab, so `name` is also the tooltip and `aria-label`. A new category needs an entry in `spans`, or it falls back to a 2-column card.

All copy and project data is in `src/data/` as typed arrays and objects. To change content, edit these files; no component changes are needed. A project's `slug` forms its URL, `featured: true` puts it on the home page, and the `images` array fills its detail page.

## Contact form

`Contact.tsx` validates with a Zod schema (name required, valid email, message of at least 10 characters) through React Hook Form. On submit it POSTs JSON to `VITE_FORM_ENDPOINT` (for example a Formspree URL). If the variable is unset, nothing is sent and the form shows an error message. Status text is in an `aria-live` region.

## Styling and theme

Tailwind v4 theme tokens in `src/index.css` define the palette: `cream`, `cream-dark`, `blush`, `pink`, `rose`, `rose-dark`, `ink`, and `ink-soft`. Fonts are DM Serif Display for headings, Inter for body text, and Anton (`font-hero`) for the hero name, loaded from Google Fonts in `index.html`. Dark mode: `:root.dark` in `index.css` overrides the same tokens (plus `surface`, `on-accent`, `on-rose`, `hero-*`), so components use tokens and never `dark:` variants; use `bg-surface` instead of `bg-white` and `text-on-accent` instead of `text-white`. `ThemeToggle` (in the navbar) toggles the class and saves to `localStorage`; an inline script in `index.html` applies it before paint, defaulting to the OS preference. Layout is mobile-first, and the nav switches to a hamburger drawer below the `md` breakpoint.

## Performance

- Route-level code splitting through `React.lazy`.
- Images use `loading="lazy"` (except the first project detail image), `decoding="async"`, and explicit width/height to avoid layout shift.
- Card thumbnails and gallery desktop shots use one fixed aspect ratio (2:1), matching 1920x~980 screenshots.

## Accessibility

- Semantic landmarks: `<nav aria-label="Main">`, `<main id="main">`, and a skip-to-content link.
- The hamburger is a real `<button>` with `aria-expanded` and `aria-controls`. Esc closes the menu, and body scroll is locked while it is open.
- Visible focus outlines and form labels tied to inputs.
- `Reveal` and the hero animation respect `prefers-reduced-motion`, and smooth scrolling is turned off for those users.

## Development

```
npm install
npm run dev      # dev server
npm run build    # type-check and production build
npm run lint
npm run preview  # serve the production build
```

## Deployment notes

The output is a static site in `dist/`. Because routing uses `BrowserRouter`, the host must rewrite unknown paths to `index.html` so deep links such as `/projects/project-one` work. Vercel and Netlify need a rewrite rule for this (`vercel.json` or `_redirects`); GitHub Pages needs a `404.html` fallback or a switch to `HashRouter`. Set `VITE_FORM_ENDPOINT` as an environment variable in the host's settings.

## Project images and the gallery

A project's `images` is `ProjectImage[]`: `{ src, alt, kind? }`. `kind: 'mobile'` puts a shot in the phone strip (9:19.5 frames, horizontal scroll with snap); anything else is a desktop shot, shown as a 2:1 hero with a thumbnail strip underneath. Either group may be empty. Clicking any shot opens `GalleryLightbox`, which pages through desktop shots first, then mobile.

### Mobile-only projects on the card

Set `thumbnailKind: 'mobile'` on a project that only exists as a phone app. `ProjectCard` then keeps its 2:1 media area but renders `PhoneStack` (up to three `kind: 'mobile'` images as phone frames, first shot in the centre) instead of the cropped `thumbnail`. Such a project needs at least one mobile image; `thumbnail` is unused for the card.

## shadcn/ui

Components live in `src/components/ui/` and import through the `@/` alias (`src/*`, set in `tsconfig.json`, `tsconfig.app.json` and `vite.config.ts`). The shadcn tokens (`--background`, `--primary`, `--border`, etc.) at the end of `src/index.css` point at the site palette, so they follow dark mode with no extra work. Add components with `npx shadcn@latest add <name>`, then check that `index.css` keeps the Inter font and cream body background (the shadcn CLI can overwrite them).
