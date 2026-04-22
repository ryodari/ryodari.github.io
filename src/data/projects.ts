export interface Project {
  name: string;
  description: string;
  url?: string;
  sourceUrl?: string;
  tags: string[];
  archived?: boolean;
}

export const projects: Project[] = [
  {
    name: 'pr0dl',
    description: 'A command-line downloader for pr0gramm.com. Fetches media URLs from the API and downloads them in parallel with resume support.',
    sourceUrl: 'https://github.com/ryodari/pr0dl',
    tags: ['Rust'],
    archived: false,
  },
  {
    name: 'beparano.id',
    description: 'This website. Built with Astro, Tailwind CSS, and hosted on GitHub Pages.',
    url: 'https://beparano.id',
    sourceUrl: 'https://github.com/ryodari/ryodari.github.io',
    tags: ['Astro', 'Tailwind', 'TypeScript'],
    archived: false,
  },
];
