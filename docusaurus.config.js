module.exports = {
  title: 'RadGrad 2',
  tagline: 'Documentation for RadGrad 2 and its subprojects: InternBit, CSExplore, and DevOps',
  url: 'https://radgrad.github.io',
  baseUrl: '/',
  favicon: 'img/radgrad.ico',
  organizationName: 'radgrad', // Usually your GitHub org/user name.
  projectName: 'radgrad.github.io', // Usually your repo name.
  onBrokenLinks:'log',
  themeConfig: {
    navbar: {
      title: 'RadGrad',
      logo: {
        alt: 'RadGrad',
        src: 'img/radgrad_logo.png',
      },
      items: [
        {
          to: 'docs/overview/welcome',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'News', position: 'left'},
        {
          href: 'https://github.com/radgrad/',
          label: 'GitHub',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} University of Hawaii.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
