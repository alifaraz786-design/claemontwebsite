// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Frontend-only marketing site: Astro's default `static` output is what we want.
// Tailwind v4 is wired through the Vite plugin (@astrojs/tailwind is Tailwind v3 only
// and does not support Astro 7). Design tokens live in src/styles/global.css @theme.
export default defineConfig({
  site: 'https://www.claemontridgelaw.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
