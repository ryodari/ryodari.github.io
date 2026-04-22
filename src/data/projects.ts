export interface Project {
  name: string;
  description: string;
  url?: string;
  sourceUrl?: string;
  tags: string[];
  status: 'active' | 'archived' | 'wip';
}

export const projects: Project[] = [
  {
    name: 'beparano.id',
    description: 'This website. Built with Astro, Tailwind CSS, and hosted on GitHub Pages.',
    url: 'https://beparano.id',
    sourceUrl: 'https://github.com/ryodari/ryodari.github.io',
    tags: ['Astro', 'Tailwind', 'TypeScript'],
    status: 'wip',
  },
];
