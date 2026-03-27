import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

/** GitHub Pages serves 404.html for unknown paths so React Router can handle deep links. */
function githubPagesSpaFallback() {
  return {
    name: 'github-pages-spa-fallback',
    closeBundle() {
      const indexHtml = resolve(__dirname, 'dist/index.html')
      const notFoundHtml = resolve(__dirname, 'dist/404.html')
      if (existsSync(indexHtml)) copyFileSync(indexHtml, notFoundHtml)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  logLevel: 'error', // Suppress warnings, only show errors
  // Dedicated port so this app is not confused with other Vite projects (e.g. ai-project-pantry on 5173).
  server: {
    port: 5180,
    // Listen on IPv4 + IPv6; default [::1]-only breaks http://localhost when it resolves to 127.0.0.1
    host: true,
  },
  plugins: [
    base44({
      // Support for legacy code that imports the base44 SDK with @/integrations, @/entities, etc.
      // can be removed if the code has been updated to use the new SDK imports from @base44/sdk
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
      hmrNotifier: true,
      navigationNotifier: true,
      analyticsTracker: true,
      visualEditAgent: true
    }),
    react(),
    githubPagesSpaFallback(),
  ]
});