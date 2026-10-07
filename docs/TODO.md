# TODO

## Content (replace placeholders)
- [x] Name, role, tagline, and about text in `src/data/profile.ts`
- [x] Real email, GitHub, and LinkedIn links in `src/data/profile.ts`
- [ ] Review the four GitHub projects in `src/data/projects.ts` (RemindU, ReelGroup, TankQ, Finance Tracker). Copy is drafted from each repo's README; the problem/solution wording is an assumption, so correct them (e.g. TankQ may be client work)
- [x] Tech stack in `src/data/skills.ts`
- [x] Experience in `src/data/experience.ts`
- [x] Add `public/resume.pdf`
- [x] Make title/description in `index.html` more specific and add an `og:image`

## Setup
- [ ] Create a Formspree (or similar) form and set `VITE_FORM_ENDPOINT` in `.env`
- [ ] Test the contact form end to end (success and error states)

## Design
- [ ] Apply your designs: layout, spacing, typography, and hero
- [ ] Finalize the color palette and check text contrast (WCAG AA)
- [x] Add an Open Graph / social share image (`public/og.jpg`; after deploy, check the preview in a link debugger)
- [ ] Decide whether to add a hero photo or illustration

## Testing
- [ ] Check in the browser at mobile, tablet, and desktop widths
- [ ] Visually check the project gallery (`ProjectGallery.tsx`, `GalleryLightbox.tsx`) on `/projects/remindu`: thumbnails swap the hero, the phone strip scrolls and snaps, the lightbox opens at the clicked image, arrow keys and swipe work, and light and dark both look right. Built but not viewed in a browser (the Chrome extension was not connected)
- [ ] Test the mobile menu (open, close, Esc, link click, scroll lock)
- [ ] Verify About and Contact links from `/projects` and a project page
- [ ] Verify scroll-spy highlighting on the home page
- [ ] Test the 404 page and an unknown project slug
- [ ] Keyboard-only pass and a screen-reader spot check
- [ ] Test with reduced motion turned on
- [ ] Run Lighthouse (target 90+ on all categories)

## Deployment
- [x] Choose a host (Vercel, Netlify, or GitHub Pages)
- [x] Add the SPA rewrite config for that host (`vercel.json`; after redeploy, verify `/projects/remindu` loads on refresh)
- [ ] Set `VITE_FORM_ENDPOINT` in the host's environment settings
- [ ] Connect a custom domain (optional)
- [x] Add `robots.txt` and a sitemap (in `public/`; update `sitemap.xml` when adding a project slug or changing the domain)
- [x] Initialize git and push to GitHub

## Nice to have
- [ ] Analytics (Plausible or Vercel Analytics)
- [ ] Per-page titles and meta descriptions (`react-helmet-async` or React 19 head tags)
- [ ] Project filtering by tag on `/projects`
- [ ] Testimonials section
- [ ] Blog or case studies (MDX)
- [ ] Unit tests for the contact form (Vitest)
- [x] Rewrite `README.md`
