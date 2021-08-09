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
    algolia: {
      apiKey: '012c57e0c263840b94aedde05ba9b733',
      indexName: 'radgrad',
      contextualSearch: false,
      searchParameters: {},
    },
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
          position: 'right',
        },
        {to: 'blog', label: 'News', position: 'right'},
        {to: 'docs/about/opportunities', label: 'Join Us', position: 'right'},
        {href: 'https://github.com/radgrad', label: 'GitHub', position: 'right'},
        {href: 'https://github.com/radgrad/radgrad2/projects/10', label: 'Project Board', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `RadGrad is sponsored by:<br/>
                  <a href='http://csdl.ics.hawaii.edu'>Collaborative Software Development Laboratory</a><br/>
                  <a href='http://www.ics.hawaii.edu'>Department of Information and Computer Sciences</a><br/>
                  <a href='http://www.hawaii.edu'>University of Hawaii</a><br/>
                  with funding from the National Science Foundation (Awards 1829542, 2025112)`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
