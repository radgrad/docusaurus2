module.exports = {
  someSidebar: {
    Overview: ['overview/motivation', 'overview/goals', 'overview/basic-constructs'],
    'User Guide': [
      'users/overview',
        'users/tutorials/why-radgrad',
        'users/tutorials/interests',
        'users/tutorials/career-goals',
        'users/tutorials/opportunities',
        'users/tutorials/ice-and-levels',
        'users/tutorials/verification-requests',
        'users/tutorials/degree-plans',
        'users/tutorials/reviews',
        'users/tutorials/getting-started',
      {
        type: 'link',
        label: '1 Page Cheat Sheet (PDF)',
        href: 'http://go.hawaii.edu/JuG'
      }
    ],
    'Developer Guide': [
        'developers/overview',
      {
        type: 'category',
        label: 'Getting started',
        items: [ 'developers/getting-started/overview',
          {
            type: 'category',
            label: 'Concepts',
            items: [
              'developers/getting-started/concepts/development-goals',
              'developers/getting-started/concepts/engineering-standards',
              'developers/getting-started/concepts/source-code-organization',
            ]
          },
          {
            type: 'category',
            label: 'How to...',
            items: [
              'developers/getting-started/howto/setup-the-ide',
              'developers/getting-started/howto/install-radgrad',
              'developers/getting-started/howto/run-scripts',
              'developers/getting-started/howto/maintain-coding-standards',
              'developers/getting-started/howto/remote-pair-program',
            ]
          },
        ],
      },
      {
        type: 'category',
        label: 'Design',
        items: [ 'developers/design/overview',
          {
            type: 'category',
            label: 'Concepts',
            items: [
              'developers/design/concepts/academic-plans',
              'developers/design/concepts/class-hierarchy',
              'developers/design/concepts/data-model',
              'developers/design/concepts/design-patterns',
              'developers/design/concepts/design-antipatterns',
              'developers/design/concepts/entity-relationship-model',
              'developers/design/concepts/pub-sub-caching',
            ]
          },
          {
            type: 'category',
            label: 'How to...',
            items: [
              'developers/design/howto/maintain-data-integrity',
              'developers/design/howto/manage-ui-state-with-redux',
              'developers/design/howto/manage-users',
              'developers/design/howto/update-the-data-model-ui',
            ]
          },
        ],
      },
      {
        type: 'category',
        label: 'Testing',
        items: [ 'developers/testing/overview',
          {
            type: 'category',
            label: 'Concepts',
            items: [
              'developers/testing/concepts/database-fixtures',
            ]
          },
          {
            type: 'category',
            label: 'How to...',
            items: [
              'developers/testing/howto/implement-dump-restore',
              'developers/testing/howto/perform-end-to-end-testing',
              'developers/testing/howto/perform-testing-with-different-roles',
              'developers/testing/howto/perform-unit-and-integration-testing',
            ]
          },
        ],
      },
      {
        type: 'category',
        label: 'Deployment',
        items: [ 'developers/deployment/overview',
          {
            type: 'category',
            label: 'Concepts',
            items: [
            ]
          },
          {
            type: 'category',
            label: 'How to...',
            items: [
              'developers/deployment/howto/build-a-release',
              'developers/deployment/howto/setup-production-server',
              'developers/deployment/howto/setup-https',
              'developers/deployment/howto/deploy-a-release',
              'developers/deployment/howto/docker-management',
              'developers/deployment/howto/setup-ssh',
            ]
          },
        ],
      },
      {
        type: 'category',
        label: 'Documentation',
        items: [
          {
            type: 'category',
            label: 'Concepts',
            items: [
              'developers/documentation/concepts/radgrad-domain',
            ]
          },
          {
            type: 'category',
            label: 'How to...',
            items: [
              'developers/documentation/howto/manage-this-site',
              'developers/documentation/howto/use-mdx',
              'developers/documentation/howto/write-markdown',
            ]
          },
        ],
      },
      {
        type: 'category',
        label: 'Reference',
        items: [ 'developers/reference/overview',
        ],
      },
    ],
    'About us': ['about/team', 'about/publications', 'about/opportunities'],
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
