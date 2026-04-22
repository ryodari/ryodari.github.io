// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
  site: 'https://beparano.id',
  output: 'static',
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, {
      behavior: 'append',
      properties: { class: 'heading-anchor', ariaHidden: 'true', tabIndex: -1 },
      content: { type: 'text', value: '#' },
    }],
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
});
