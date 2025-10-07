import config from '~/config.json';

export const navLinks = [
  {
    label: 'Proyectos',
    pathname: '/#project-1',
  },
  {
    label: 'Detalles',
    pathname: '/#details',
  },
  {
    label: 'Contacto',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Instagram',
    url: `${config.instagram}`,
    icon: 'instagram',
  },
  {
    label: 'LinkedIn',
    url: `${config.linkedin}`,
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
