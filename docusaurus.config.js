module.exports = {
  title: 'RadGrad',
  tagline: 'Developing awesome computer scientists, one graduate at a time',
  url: 'https://radgrad.netlify.com',
  baseUrl: '/',
  favicon: 'img/radgrad.ico',
  organizationName: 'radgrad', // Usually your GitHub org/user name.
  projectName: 'docusaurus2', // Usually your repo name.
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
          to: 'docs/overview/motivation',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {to: 'blog', label: 'News', position: 'left'},
        {href: 'https://github.com/radgrad', label: 'GitHub', position: 'left'}
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `RadGrad is sponsored by:<br/>
                  <a href='http://csdl.ics.hawaii.edu'>Collaborative Software Development Laboratory</a><br/>
                  <a href='http://www.ics.hawaii.edu'>Department of Information and Computer Sciences</a><br/>
                  <a href='http://www.hawaii.edu'>University of Hawaii</a>`,
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
