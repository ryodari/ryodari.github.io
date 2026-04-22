// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://beparano.id',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
});
