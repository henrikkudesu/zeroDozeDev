// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  site: 'http://www.zerodozedev.com.br',
  integrations: [sitemap()],
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