export interface ContactLink {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
}

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:mail@beparano.id',
    description: 'mail@beparano.id',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ryodari',
    description: '@ryodari',
    external: true,
  },
  {
    label: 'Signal',
    href: 'https://signal.me/#eu/UbdYtzFWig-uBxosDB0lunFWfu7CXqieZWVfz1TVV4zvLqefvjlI6KZr8fpDhIVb',
    description: 'schluessel.666',
    external: true,
  },
  {
    label: 'Matrix',
    href: 'https://matrix.to/#/@schluessel:monero.social',
    description: '@schluessel:monero.social',
    external: true,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/ryodarikun',
    description: '@ryodarikun',
    external: true,
  },
  {
    label: 'Bluesky',
    href: 'https://bsky.app/profile/beparano.id',
    description: '@beparano.id',
    external: true,
  },
  {
    label: 'Mastodon',
    href: 'https://girldick.gay/@schluessel',
    description: '@schluessel@girldick.gay',
    external: true,
  },
  {
    label: 'PGP Key',
    href: '/downloads/pgp-public.asc',
    description: '2037 0BFF 53C7 0CBF 354F  A222 A2A6 0263 EB2F BCB9',
  },
];
