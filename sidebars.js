module.exports = {
  someSidebar: {
    Concepts: ['concepts/ice'],
    Users: [],
    Developers: [
      {
        type: 'category',
        label: 'Getting started'
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
    ],
    RadGrad2: ['radgrad2/goals',
      {
        type: 'category',
        label: 'Overview',
        items: [
          'radgrad2/overview/radgrad-concepts'
        ]
      },
      {
        type: 'category',
        label: 'Developer Guide',
        items: [
          "radgrad2/developer/installation",
          "radgrad2/developer/ide",
          "radgrad2/developer/source-code-organization",
          "radgrad2/developer/coding-standards",
          "radgrad2/developer/testing",
          "radgrad2/developer/e2e-testing",
          "radgrad2/developer/testing-with-different-roles",
          "radgrad2/developer/building-academic-plans",
          "radgrad2/developer/database-fixtures",
          "radgrad2/developer/continuous-integration",
          "radgrad2/developer/radgrad.org",
          "radgrad2/developer/radgrad-patterns",
          "radgrad2/developer/redux"
        ],
      },
      {
        type: 'category',
        label: 'Data Model',
        items: [
          "radgrad2/datamodel/overview",
          "radgrad2/datamodel/class-hierarchy",
          "radgrad2/datamodel/entity-relationship-model",
          "radgrad2/datamodel/user-management",
          "radgrad2/datamodel/ice",
          "radgrad2/datamodel/dump-restore",
          "radgrad2/datamodel/pub-sub",
          "radgrad2/datamodel/integrity-checking"

        ],
      },
    ],
    Subprojects: [
      {
        type: 'category',
        label: 'Internbit',
        items: ['subprojects/internbit/goals', 'subprojects/internbit/resources', 'subprojects/internbit/scraping', 'subprojects/internbit/needs-assessment', 'subprojects/internbit/canonical-schema', 'subprojects/internbit/evaluation'],
      },
      {
        type: 'category',
        label: 'CSExplore',
        items: [
            'subprojects/csexplore/goals',
          'subprojects/csexplore/resources',
          'subprojects/csexplore/organizing-principle',
          'subprojects/csexplore/evaluation',
          {
            type: 'category',
            label: 'Mockups',
            items: [
              'subprojects/csexplore/annotated-mockup/save-hawaii-with-computer-science',
              'subprojects/csexplore/annotated-mockup/csexplore-ocean-earth',
              'subprojects/csexplore/annotated-mockup/find-the-path',
              'subprojects/csexplore/annotated-mockup/CS-Explore-Chat',
              'subprojects/csexplore/annotated-mockup/build-your-community'
            ]
          }],
      },
      {
        type: 'category',
        label: 'DevOps',
        items: [
            'subprojects/devops/goals',
          'subprojects/devops/resources',
          'subprojects/devops/evaluation',
          {
            type: 'category',
            label: 'Deployment',
            items: [
              'subprojects/devops/deployment/heroku',
              'subprojects/devops/deployment/nodechef',
              'subprojects/devops/deployment/digital-ocean',
              'subprojects/devops/deployment/google-cloud',
              'subprojects/devops/deployment/microsoft-azure',
              'subprojects/devops/deployment/uh-its',
              'subprojects/devops/deployment/aws',
              'subprojects/devops/deployment/mongo-url',
              'subprojects/devops/deployment/waves-hosting'
            ]
          }
        ],
      }
    ],

  },
};
