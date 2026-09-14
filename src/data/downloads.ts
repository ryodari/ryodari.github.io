export interface Download {
  name: string;
  filename: string;
  description?: string;
  size?: string;
}

export const downloads: Download[] = [
  {
    name: 'PGP Public Key',
    filename: 'pgp-public.asc',
    description: 'For contacting me safely via Email.',
    size: '3.1K',
  },
];
