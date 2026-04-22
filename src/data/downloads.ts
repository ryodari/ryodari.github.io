export interface Download {
  name: string;
  filename: string;
  description?: string;
  size?: string;
}

export const downloads: Download[] = [
  {
    name: 'Curriculum Vitae',
    filename: 'cv.pdf',
    description: 'My curriculum vitae.',
    size: '—',
  },
];
