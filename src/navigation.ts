import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Projects',
      href: '#projects',
    },
    {
      text: 'About',
      href: '#about',
    },
    {
      text: 'Journey',
      href: '#journey',
    },
    {
      text: 'Contact',
      href: '#contact',
    },
  ],

  actions: [
    {
      text: 'Resume',
      href: '/resume.pdf',
    },
  ],
};
export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    {
      ariaLabel: 'GitHub',
      icon: 'tabler:brand-github',
      href: 'https://github.com/iampradeeploganathan',
    },
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/in/pradeep-loganathan-data-scientist',
    },
  ],

  footNote: `
    © ${new Date().getFullYear()} Pradeep Loganathan. Built with Astro.
  `,
};