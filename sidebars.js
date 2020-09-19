module.exports = {
  someSidebar: {
    Overview: ['overview/welcome', 'overview/ice'],
    'User Guide': [
        'users/tutorials/why-radgrad',
        'users/tutorials/interests',
        'users/tutorials/career-goals',
        'users/tutorials/opportunities',
        'users/tutorials/verification-requests',
        'users/tutorials/degree-plans',
        'users/tutorials/getting-started',
      {
        type: 'link',
        label: '1 Page Cheat Sheet (PDF)',
        href: 'http://go.hawaii.edu/JuG'
      }
    ],
    'Developer Guide': [
      {
        type: 'category',
        label: 'Getting started',
        items: [
            'developers/getting-started/development-goals',
            'developers/getting-started/ide-setup',
            'developers/getting-started/install-radgrad',
        ],
      },
      {
        type: 'category',
        label: 'Concepts',
        items: [
          'developers/concepts/academic-plans',
          'developers/concepts/class-hierarchy',
          'developers/concepts/data-model',
          'developers/concepts/database-fixtures',
          'developers/concepts/design-patterns',
          'developers/concepts/design-antipatterns',
          'developers/concepts/engineering-standards',
          'developers/concepts/entity-relationship-model',
          'developers/concepts/pub-sub-caching',
          'developers/concepts/radgrad-domain',
          'developers/concepts/source-code-organization',
        ]
      },
      {
        type: 'category',
        label: 'How to...',
        items: [
          'developers/howto/implement-dump-restore',
          'developers/howto/maintain-coding-standards',
          'developers/howto/maintain-data-integrity',
          'developers/howto/manage-this-site',
          'developers/howto/manage-ui-state-with-redux',
          'developers/howto/manage-users',
          'developers/howto/perform-end-to-end-testing',
          'developers/howto/perform-testing-with-different-roles',
          'developers/howto/perform-unit-and-integration-testing',
          'developers/howto/remote-pair-program',
          'developers/howto/update-the-data-model-ui',
          'developers/howto/use-mdx',
          'developers/howto/write-markdown',
        ]
      },
    ],
    'About us': ['about/about-us'],
    Archive: [
      {
        type: 'category',
        label: 'Internbit',
        items: ['archive/internbit/goals', 'archive/internbit/resources', 'archive/internbit/scraping', 'archive/internbit/needs-assessment', 'archive/internbit/canonical-schema', 'archive/internbit/evaluation'],
      },
      {
        type: 'category',
        label: 'CSExplore',
        items: [
          'archive/csexplore/goals',
          'archive/csexplore/resources',
          'archive/csexplore/organizing-principle',
          'archive/csexplore/evaluation',
          {
            type: 'category',
            label: 'Mockups',
            items: [
              'archive/csexplore/annotated-mockup/save-hawaii-with-computer-science',
              'archive/csexplore/annotated-mockup/csexplore-ocean-earth',
              'archive/csexplore/annotated-mockup/find-the-path',
              'archive/csexplore/annotated-mockup/CS-Explore-Chat',
              'archive/csexplore/annotated-mockup/build-your-community'
            ]
          }],
      },
      {
        type: 'category',
        label: 'DevOps',
        items: [
          'archive/devops/goals',
          'archive/devops/resources',
          'archive/devops/evaluation',
          {
            type: 'category',
            label: 'Deployment',
            items: [
              'archive/devops/deployment/heroku',
              'archive/devops/deployment/nodechef',
              'archive/devops/deployment/digital-ocean',
              'archive/devops/deployment/google-cloud',
              'archive/devops/deployment/microsoft-azure',
              'archive/devops/deployment/uh-its',
              'archive/devops/deployment/aws',
              'archive/devops/deployment/mongo-url',
              'archive/devops/deployment/waves-hosting'
            ]
          }
        ],
      }
    ],

  },
};
