module.exports = {
  evaluationSidebar: [
    'evaluation/overview',
    'evaluation/111-f21-feedback',
    'evaluation/111-s22-feedback',
    'evaluation/211-s22-feedback',
    'evaluation/314-f21-feedback',
    'evaluation/314-s22-feedback',
  ],
  mainSidebar: {
    Overview: ['overview/motivation', 'overview/goals', 'overview/basic-constructs'],
    'User Guide': [
      'users/overview',
      {
        type: 'category',
        label: 'New Student Tutorial',
        items: [
          'users/new-student/overview',
          'users/new-student/login',
          'users/new-student/home',
          'users/new-student/terms-and-conditions',
          'users/new-student/interests',
          'users/new-student/career-goals',
          'users/new-student/courses',
          'users/new-student/opportunities',
          'users/new-student/planner',
          'users/new-student/ice',
          'users/new-student/visibility',
          'users/new-student/levels',
          'users/new-student/whats-next',
        ],
      },
      {
        type: 'category',
        label: 'New Faculty Tutorial',
        items: [
          'users/new-faculty/overview',
          'users/new-faculty/student-role',
          'users/new-faculty/login',
          'users/new-faculty/home',
          'users/new-faculty/terms-and-conditions',
          'users/new-faculty/interests',
          'users/new-faculty/career-goals',
          'users/new-faculty/visibility',
          'users/new-faculty/manage-opportunities',
          'users/new-faculty/whats-next',
        ],
      },
      {
        type: 'category',
        label: 'New Advisor Tutorial',
        items: [
          'users/new-advisor/overview',
          'users/new-advisor/student-role',
          'users/new-advisor/login',
          'users/new-advisor/home',
          'users/new-advisor/terms-and-conditions',
          'users/new-advisor/interests',
          'users/new-advisor/career-goals',
          'users/new-advisor/visibility',
          'users/new-advisor/manage-opportunities',
          'users/new-advisor/manage-students',
          'users/new-advisor/whats-next',
        ],
      },
      {
        type: 'category',
        label: 'Demo Tutorial',
        items: [
          'users/demo/overview',
          'users/demo/login',
          'users/demo/home',
          'users/demo/explorers',
          'users/demo/degree-plan',
          'users/demo/ice',
          'users/demo/levels',
          'users/demo/visibility',
          'users/demo/verification',
          'users/demo/reviews',
          'users/demo/community',
          'users/demo/faculty-home',
          'users/demo/faculty-forecast',
          'users/demo/faculty-management',
          'users/demo/advisor-home',
          'users/demo/advisor-manage-students',
          'users/demo/summary',
        ],
      },
    ],
    'Developer Guide': [
      'developers/overview',
      {
        type: 'category',
        label: 'Getting started',
        items: [
          'developers/getting-started/overview',
          'developers/getting-started/onboarding-summer-2021',
          'developers/getting-started/tech-stack',
          {
            type: 'category',
            label: 'How to...',
            items: [
              'developers/getting-started/howto/install-radgrad',
              'developers/getting-started/howto/run-scripts',
              'developers/getting-started/howto/work-on-issues',
            ]
          },
        ],
      },
      {
        type: 'category',
        label: 'Needs Assessment',
        items: [
          'developers/needs-assessment/overview',
          'developers/needs-assessment/domain-model',
          'developers/needs-assessment/pilot-instance',
          'developers/needs-assessment/pilot-study',
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
                      'developers/design/app/imports/api/user-interactions',
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
                  'developers/design/scripts/howto/generate-demo-fixture',
                ]
              },
              'developers/design/scripts/reference',
            ]
          },
        ]
      },
      {
        type: 'category',
        label: 'Patterns and practices',
        items: [
          'developers/patterns/overview',
          'developers/patterns/refactoring',
          'developers/patterns/ui-theme',
          'developers/patterns/methods',
          'developers/patterns/components-methods',
          'developers/patterns/labels',
          'developers/patterns/colors',
          'developers/patterns/sandbox',
          'developers/patterns/sticky-state',
        ]
      },
      {
        type: 'category',
        label: 'Reviews',
        items: ['developers/reviews/overview',
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
          'developers/checklists/ui-checklist',
          'developers/checklists/js-ts-checklist',
          'developers/checklists/react-checklist',
          'developers/checklists/testing-checklist',
          'developers/checklists/combined',
        ],
      },
      {
        type: 'category',
        label: 'Testing',
        items: ['developers/testing/overview',
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
            items: ['developers/testing/reference/testing-scripts',
            ],
          },
        ],
      },
      {
        type: 'category',
        label: 'InternAloha',
        items: [
          'developers/internaloha/overview',
          'developers/internaloha/design-issues',
          'developers/internaloha/import-process',
        ],
      },
      {
        type: 'category',
        label: 'Deployment',
        items: ['developers/deployment/overview',
          {
            type: 'category',
            label: 'Concepts',
            items: []
          },
          {
            type: 'category',
            label: 'How to...',
            items: [
              'developers/deployment/howto/setup-in-house-server-mup',
              'developers/deployment/howto/setup-digital-ocean-server-mup',
              'developers/deployment/howto/setup-robo3t',
              'developers/deployment/howto/setup-montiapm',
              'developers/deployment/howto/setup-cas',
              'developers/deployment/howto/publish-a-release-mup',
              'developers/deployment/howto/reset-db',
              'developers/deployment/howto/update-mongo-mup'
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
          'developers/reference/degree-experience-planner',
          { type: 'link', label: 'JSDocs', href: 'https://radgrad.github.io/radgrad2/' },
        ],
      },
    ],
    'Computer Engineering': ['compeng/overview', 'compeng/design', 'compeng/interests', 'compeng/career_goals', 'compeng/opportunities'],
    'About us': ['about/team', 'about/publications', 'about/opportunities', 'about/spring-2021', 'about/summer-2021', 'about/fall-2021',  'about/contact-us'],
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
