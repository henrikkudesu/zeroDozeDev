// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://zerodozedev.netlify.app/',
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: true
    }
  },
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Fira Code",
      cssVariable: "--font-fira-code",
      weights: [400, 500, 600, 700],
      display: "swap",
    }]
  }
});