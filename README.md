# AI Nibbler (`ainibbler-home`)

Vite + React site. Run it locally or deploy the production build (for example with GitHub Pages via the included workflow).

**Source code map:** see [`src/README.md`](src/README.md) for the recommended folder layout and where to add routes or pages.

## Local development

1. Clone the repository and open this directory.
2. Install dependencies: `npm install`
3. Optional: create **`.env.local`** (do not commit it) if you need a non-default pantry link:

```env
VITE_AI_PROJECT_PANTRY_URL=YOUR_PANTRY_PUBLIC_SITE_URL
```

4. Start the dev server:
   - **`npm run dev`** — then open **http://localhost:5180** in your browser.
   - **`npm run dev:open`** — same, but **opens your default browser** automatically.
5. Test a **production-like** build locally: **`npm run try:prod`** (builds, then serves `dist/` and opens the browser).

**In Cursor / VS Code:** `Ctrl+Shift+P` → **“Simple Browser: Show”** → enter `http://localhost:5180` to preview inside the editor (after `npm run dev`).

## Production build

```bash
npm run build
```

Output is in `dist/`. Preview locally with `npm run preview`.

## GitHub Pages

Pushing to `main` runs **Deploy to GitHub Pages** (see `.github/workflows/deploy-github-pages.yml`).

### Required: use the Actions build (fixes a blank site)

If **ainibbler.com** (or your domain) shows a **white / blank page**, the live site is probably serving the **wrong** `index.html` (the repo root file still points at `/src/main.jsx`, which only works with `npm run dev`).

1. On GitHub: **Settings → Pages → Build and deployment**.
2. Set **Source** to **GitHub Actions** — **not** “Deploy from a branch”.
3. Open the **Actions** tab → run **Deploy to GitHub Pages** (or push to `main`). Wait until it’s green.
4. The first deploy may ask you to **approve** the `github-pages` environment (review and approve in the workflow run).
5. **Settings → Pages → Custom domain:** must match **`public/CNAME`** exactly (e.g. `ainibbler.com`). DNS at your registrar should follow [GitHub’s custom domain docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).

After a correct deploy, **View Page Source** on the live site should show a script tag like **`/assets/index-….js`**, not **`/src/main.jsx`**.

Optional: set repository secret **`VITE_AI_PROJECT_PANTRY_URL`** to your deployed pantry site URL so the sidebar / links resolve in production.

## Public repository hygiene

- Never commit **`.env`**, **`.env.local`**, or any file containing API keys, tokens, or private URLs. This repo’s **`.gitignore`** is set accordingly; use **`.env.example`** only for non-sensitive placeholder names.
- **`VITE_AI_PROJECT_PANTRY_URL`** must be a **public** pantry site URL (no credentials in the value).
