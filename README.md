# Portfolio

Personal portfolio of Hsu Lab Phyo Pai (Iggy), a software developer. Live at https://portfolio-taupe-seven-n4djdw0nk9.vercel.app/

A single-page site with a home page (hero, about, featured projects, tech stack, experience), a projects index, per-project detail pages with image galleries, a contact form, and a light/dark theme.

## Tech stack

Vite, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, React Router, Framer Motion, React Hook Form + Zod. There is no backend; the contact form posts to a third-party form service (Formspree).

## Getting started

```bash
npm install
cp .env.example .env.local   # then set VITE_FORM_ENDPOINT
npm run dev
```

| Script | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint with oxlint |

## Configuration

`VITE_FORM_ENDPOINT` is your Formspree form URL (`https://formspree.io/f/xxxxxxx`). Without it the contact form logs a warning and does not send. Set it in `.env.local` for local work and in the Vercel project's environment settings for production.

## Editing content

All content lives in typed files under `src/data/`:

- `profile.ts`: name, role, about text, email, social links
- `projects.ts`: projects (add images under `public/projects/<slug>/`)
- `skills.ts`: tech stack
- `experience.ts`: work history and education

When you add a project, also add its URL to `public/sitemap.xml`.

## Deployment

Deployed on Vercel. `vercel.json` rewrites unknown paths to `index.html` so deep links such as `/projects/remindu` work with `BrowserRouter`.

## Docs

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md): how the site is structured and the patterns to follow
- [`docs/TODO.md`](docs/TODO.md): remaining work
