# AI Nibbler (`ainibbler-home`)

Vite + React site. Run it locally or deploy the production build (for example with GitHub Pages via the included workflow).

## Local development

1. Clone the repository and open this directory.
2. Install dependencies: `npm install`
3. Optional: create **`.env.local`** (do not commit it) if you need a non-default pantry link:

```env
VITE_AI_PROJECT_PANTRY_URL=YOUR_PANTRY_PUBLIC_SITE_URL
```

4. Start the dev server: `npm run dev`

## Production build

```bash
npm run build
```

Output is in `dist/`. Preview locally with `npm run preview`.

## GitHub Pages

Pushing to `main` runs **Deploy to GitHub Pages** (see `.github/workflows/deploy-github-pages.yml`). Configure the **Pages** source to **GitHub Actions** in the repository settings.

Optional: set repository secret **`VITE_AI_PROJECT_PANTRY_URL`** to your deployed pantry site URL so the sidebar / links resolve in production. Custom domains are set under **Pages** → **Custom domain**.
