import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'
import path, { resolve } from 'node:path'
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
  logLevel: 'error',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5180,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
  plugins: [react(), githubPagesSpaFallback()],
})
