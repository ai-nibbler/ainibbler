# `src/` layout

| Folder | Purpose |
|--------|---------|
| **`app/`** | App shell: root `App.jsx`, centralized **`routes.jsx`** (add routes here). |
| **`pages/`** | Route-level screens (one main component per file). **`NotFoundPage.jsx`** for 404. |
| **`components/layout/`** | Shell UI (sidebar, main layout). |
| **`components/shared/`** | Reusable sections used across pages (footers, cards). |
| **`components/ui/`** | shadcn/Radix primitives — prefer composing these in `shared/` or `pages/`. |
| **`config/`** | Committed app config and public constants (URLs, env-backed defaults). **No secrets.** |
| **`hooks/`** | Shared React hooks. |
| **`lib/`** | Small utilities (`utils.js` includes `cn()` for Tailwind class merging). |
| **`styles/`** | Global CSS (`globals.css`: Tailwind layers + design tokens). |

**Entry:** `main.jsx` mounts `app/App.jsx` and imports global styles.

**Quick test:** from repo root, `npm run dev:open` (opens browser) or `npm run try:prod` (production build + preview).

**Path alias:** `@/` → `src/` (see `vite.config.js` and `jsconfig.json`).
