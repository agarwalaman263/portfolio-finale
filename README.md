# Aman Agarwal — Portfolio

A responsive personal portfolio rebuilt with **React, TypeScript, and Vite**, preserving the original site's personal identity while refreshing the design and professional content.

## Included

- Responsive layout for desktop, tablet, and mobile
- Intro / hero section with a custom CSS illustration
- Selected work and measurable impact
- About section, career timeline, education, skills, and contact section
- Copy-email interaction and mobile navigation
- SEO metadata and custom favicon
- Reduced-motion support
- Static deployment configuration for Vercel, Netlify, and GitHub Pages

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy

### Vercel
1. Push this project to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Add `amanagarwal.in` under Project → Settings → Domains and follow Vercel's DNS instructions.

### Netlify
1. Import the GitHub repository.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Add your custom domain in Domain management and follow the DNS instructions.

### GitHub Pages
For a project subpath, set Vite's `base` option to `'/repository-name/'` in `vite.config.ts`, then build and publish `dist/` with GitHub Actions. For a custom domain, add a `public/CNAME` file containing `amanagarwal.in` and configure the DNS records required by GitHub Pages.

## Update content

- Main content, experience, project cards, skills, and contact address: `src/App.tsx`
- Colors, layout, and responsive styles: `src/styles.css`
- SEO title and description: `index.html`
- Favicon: `public/favicon.svg`

## Before publishing

1. Confirm the contact email in `src/App.tsx`.
2. Replace the LinkedIn and GitHub links in the contact section with your exact profile URLs.
3. Add a downloadable resume only if you want one publicly available; no resume file is included.
4. Confirm that all project descriptions and impact metrics are safe to publish.
5. Confirm your current public-facing location and whether you want “Bengaluru, India” shown.
6. Run `npm install` and `npm run build` locally.

## Notes on accuracy

The portfolio uses the professional details shared in conversation and visible on the original website. It intentionally omits unconfirmed employment dates for earlier roles and does not invent LinkedIn/GitHub profile URLs. The current contact email is carried over from the original website; verify it before publishing.
