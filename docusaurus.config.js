module.exports = {
  title: 'RadGrad 2020',
  tagline: 'Documentation for RadGrad 2, CSExplore, and InternBit',
  url: 'https://radgrad.github.io',
  baseUrl: '/',
  favicon: 'img/radgrad.ico',
  organizationName: 'radgrad', // Usually your GitHub org/user name.
  projectName: 'radgrad.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'RadGrad',
      logo: {
        alt: 'RadGrad',
        src: 'img/radgrad_logo.png',
      },
      links: [
        {
          to: 'docs/overview/motivation',
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
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Markdown Guide',
              to: 'docs/markdown-reference',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://radgrad2.slack.com',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'News',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/radgrad/',
            },
          ],
        },
      ],
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
