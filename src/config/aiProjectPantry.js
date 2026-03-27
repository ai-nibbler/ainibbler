/**
 * Separate app: `ai-project-pantry` (Vite). Landing is `/` on its origin.
 * Local default is usually http://localhost:5173 (Vite’s first port). If the pantry terminal
 * shows another port, set VITE_AI_PROJECT_PANTRY_URL in .env to that URL.
 * Production: set VITE_AI_PROJECT_PANTRY_URL (e.g. https://pantry.example.com)
 */
const fromEnv = import.meta.env.VITE_AI_PROJECT_PANTRY_URL;
const raw = (fromEnv && String(fromEnv).trim()) || "http://localhost:5173";

export const AI_PROJECT_PANTRY_URL = raw.replace(/\/+$/, "");
