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
| Forms | React Hook Form + Zod |
| Icons | react-icons |
| Lint | oxlint |

## Folder structure

```
public/
  favicon.svg            Custom favicon
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
    Reveal.tsx           Scroll-triggered fade/slide-up wrapper
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

All copy and project data is in `src/data/` as typed arrays and objects. To change content, edit these files; no component changes are needed. A project's `slug` forms its URL, `featured: true` puts it on the home page, and the `images` array fills its detail page.

## Contact form

`Contact.tsx` validates with a Zod schema (name required, valid email, message of at least 10 characters) through React Hook Form. On submit it POSTs JSON to `VITE_FORM_ENDPOINT` (for example a Formspree URL). If the variable is unset, nothing is sent and the form shows an error message. Status text is in an `aria-live` region.

## Styling and theme

Tailwind v4 theme tokens in `src/index.css` define the palette: `cream`, `cream-dark`, `blush`, `pink`, `rose`, `rose-dark`, `ink`, and `ink-soft`. Fonts are DM Serif Display for headings, Inter for body text, and Anton (`font-hero`) for the hero name, loaded from Google Fonts in `index.html`. There is one light theme and no dark mode. Layout is mobile-first, and the nav switches to a hamburger drawer below the `md` breakpoint.

## Performance

- Route-level code splitting through `React.lazy`.
- Images use `loading="lazy"` (except the first project detail image), `decoding="async"`, and explicit width/height to avoid layout shift.
- Thumbnails use one fixed aspect ratio (16:10).

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
