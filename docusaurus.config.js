module.exports = {
  title: 'RadGrad',
  tagline: 'Developing awesome computer scientists, one graduate at a time',
  url: 'https://radgrad.github.io',
  baseUrl: '/',
  favicon: 'img/radgrad.ico',
  organizationName: 'radgrad', // Usually your GitHub org/user name.
  projectName: 'radgrad.github.io', // Usually your repo name.
  stylesheets: ['https://fonts.googleapis.com/css?family=Nunito'],
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
      links: [
        {
          title: 'Video Tutorials',
          items: [
            { label: 'Why RadGrad?', to: 'docs/users/tutorials/why-radgrad', },
            { label: 'Interests', to: 'docs/users/tutorials/interests', },
            { label: 'Career Goals', to: 'docs/users/tutorials/career-goals', },
            { label: 'Opportunities', to: 'docs/users/tutorials/opportunities', },
            { label: 'ICE and Levels', to: 'docs/users/tutorials/ice-and-levels', },
            { label: 'Verification Requests', to: 'docs/users/tutorials/verification-requests', },
            { label: 'Reviews', to: 'docs/users/tutorials/reviews', },
            { label: 'Getting Started', to: 'docs/users/tutorials/getting-started', },
          ],
        },
        {
          title: 'Explorers',
          items: [
            { label: 'Career Goals', href: 'https://radgrad.ics.hawaii.edu/explorer/career-goals/', },
            { label: 'Interests', href: 'https://radgrad.ics.hawaii.edu/explorer/interests/', },
            { label: 'Opportunities', href: 'https://radgrad.ics.hawaii.edu/explorer/opportunities/', },
            { label: 'Courses', href: 'https://radgrad.ics.hawaii.edu/explorer/courses/', },
          ],
        },
        {
          title: 'Development',
          items: [
            { label: 'News', to: 'blog', },
            { label: 'GitHub', href: 'https://github.com/radgrad/', },
          ],
        },
      ],
      copyright: `RadGrad is sponsored by:<br/>
                  <a href='http://csdl.ics.hawaii.edu'>Collaborative Software Development Laboratory</a><br/>
                  University of Hawaii`,
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
