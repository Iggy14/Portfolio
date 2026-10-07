# TODO

## Content (replace placeholders)
- [ ] Name, role, tagline, and about text in `src/data/profile.ts`
- [ ] Real email, GitHub, and LinkedIn links in `src/data/profile.ts`
- [ ] Projects in `src/data/projects.ts` (title, summary, tags, role, year, problem/solution, links)
- [ ] Project thumbnails and screenshots in `public/projects/`
- [ ] Tech stack in `src/data/skills.ts`
- [ ] Experience in `src/data/experience.ts`
- [ ] Add `public/resume.pdf`
- [ ] Update title, description, and Open Graph tags in `index.html`
- [ ] Design a final favicon in `public/favicon.svg` (currently a placeholder "Y")

## Setup
- [ ] Create a Formspree (or similar) form and set `VITE_FORM_ENDPOINT` in `.env`
- [ ] Test the contact form end to end (success and error states)

## Design
- [ ] Apply your designs: layout, spacing, typography, and hero
- [ ] Finalize the color palette and check text contrast (WCAG AA)
- [ ] Add an Open Graph / social share image
- [ ] Decide whether to add a hero photo or illustration

## Testing
- [ ] Check in the browser at mobile, tablet, and desktop widths
- [ ] Test the mobile menu (open, close, Esc, link click, scroll lock)
- [ ] Verify About and Contact links from `/projects` and a project page
- [ ] Verify scroll-spy highlighting on the home page
- [ ] Test the 404 page and an unknown project slug
- [ ] Keyboard-only pass and a screen-reader spot check
- [ ] Test with reduced motion turned on
- [ ] Run Lighthouse (target 90+ on all categories)

## Deployment
- [ ] Choose a host (Vercel, Netlify, or GitHub Pages)
- [ ] Add the SPA rewrite config for that host (see `ARCHITECTURE.md`)
- [ ] Set `VITE_FORM_ENDPOINT` in the host's environment settings
- [ ] Connect a custom domain (optional)
- [ ] Add `robots.txt` and a sitemap
- [ ] Initialize git and push to GitHub

## Nice to have
- [ ] Analytics (Plausible or Vercel Analytics)
- [ ] Per-page titles and meta descriptions (`react-helmet-async` or React 19 head tags)
- [ ] Convert images to WebP/AVIF
- [ ] Project filtering by tag on `/projects`
- [ ] Testimonials section
- [ ] Blog or case studies (MDX)
- [ ] Unit tests for the contact form (Vitest)
- [ ] Rewrite `README.md` (it's still the Vite default)
