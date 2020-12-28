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
        items: [
            'developers/getting-started/overview',
            'developers/getting-started/tech-stack',
          {
            type: 'category',
            label: 'How to...',
            items: [
              'developers/getting-started/howto/install-radgrad',
              'developers/getting-started/howto/run-scripts',
              'developers/getting-started/howto/branch-and-merge',
            ]
          },
        ],
      },
      {
        type: 'category',
        label: 'Design',
        items: [
          'developers/design/overview',
          {
            type: 'category',
            label: 'app/',
            items: [
              'developers/design/app/overview',
              {
                type: 'category',
                label: 'imports/',
                items: [
                  'developers/design/app/imports/overview',
                  {
                    type: 'category',
                    label: 'api/',
                    items: [
                      'developers/design/app/imports/api/overview',
                      'developers/design/app/imports/api/data-model',
                      'developers/design/app/imports/api/class-hierarchy',
                      'developers/design/app/imports/api/entity-relationship-model',
                      'developers/design/app/imports/api/pub-sub',
                      'developers/design/app/imports/api/data-integrity',
                      'developers/design/app/imports/api/dump-restore',
                      'developers/design/app/imports/api/manage-users',
                    ]
                  },
                  {
                    type: 'category',
                    label: 'redux/',
                    items: [
                      'developers/design/app/imports/redux/overview',
                      'developers/design/app/imports/redux/manage-ui-state',
                    ]
                  },
                  {
                    type: 'category',
                    label: 'ui/',
                    items: [
                      'developers/design/app/imports/ui/overview',
                    ]
                  },
                ]
              },
            ]
          },
          {
            type: 'category',
            label: 'config/',
            items: [
              'developers/design/config/overview',
              'developers/design/config/settings',
            ]
          },
          {
            type: 'category',
            label: 'scripts/',
            items: [
              'developers/design/scripts/overview',
              {
                type: 'category',
                label: 'How to...',
                items: [
                  'developers/design/scripts/howto/update-student-star-data',
                  'developers/design/scripts/howto/convert-data',
                ]
              },
              'developers/design/scripts/reference',
            ]
          },
        ]
      },
      {
        type: 'category',
        label: 'Reviews',
        items: [ 'developers/reviews/overview',
          {
            type: 'category',
            label: 'How to...',
            items: ['developers/reviews/howto/conduct-a-review']
          },
        ]
      },
      {
        type: 'category',
        label: 'Checklists',
        items: [
          'developers/checklists/overview',
          'developers/checklists/architecture-checklist',
          'developers/checklists/design-checklist',
          'developers/checklists/js-ts-checklist',
          'developers/checklists/react-checklist',
          'developers/checklists/testing-checklist',
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
              'developers/testing/concepts/continuous-integration',
            ]
          },
          {
            type: 'category',
            label: 'How to...',
            items: [
              'developers/testing/howto/write-unit-tests',
              'developers/testing/howto/write-integration-tests',
              'developers/testing/howto/write-acceptance-tests',
              'developers/testing/howto/perform-testing-with-different-roles',
            ]
          },
          {
            type: 'category',
            label: 'Reference',
            items: [ 'developers/testing/reference/testing-scripts',
            ],
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
              'developers/deployment/howto/setup-production-server-mup',
              'developers/deployment/howto/setup-digital-ocean-server-mup',
              'developers/deployment/howto/setup-robo3t',
              'developers/deployment/howto/setup-montiapm',
              'developers/deployment/howto/publish-a-release-mup',
              'developers/deployment/howto/reset-db'
            ]
          },
          {
            type: 'category',
            label: 'Reference',
            items: [
              'developers/deployment/reference/mup-commands',
              'developers/deployment/reference/settings-file',
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
        items: [
            'developers/reference/overview',
          { type: 'link', label: 'JSDocs', href: 'https://radgrad.github.io/radgrad2/' },
        ],
      },
    ],
    'About us': ['about/team', 'about/publications', 'about/opportunities'],
    Archive: [
      {
        type: 'category',
        label: 'Deployment (Docker)',
        items: [
          'archive/docker/setup-production-server',
          'archive/docker/build-a-release',
          'archive/docker/deploy-a-release',
          'archive/docker/docker-management',
          'archive/docker/setup-ssh',
          'archive/docker/docker-commands',
        ],
      },
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
