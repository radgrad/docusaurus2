module.exports = {
  someSidebar: {
    Overview: ['overview/motivation', 'overview/managing-this-site', 'overview/engineering-standards', 'overview/remote-pair-programming', 'overview/markdown-reference', 'overview/mdx'],
    DevOps: ['devops/goals', 'devops/resources',
      {
        type: 'category',
        label: 'Deployment',
        items: [
          'devops/deployment/heroku'
        ]
      }],
    InternBit: ['internbit/goals', 'internbit/resources', 'internbit/scraping'],
    CSExplore: ['csexplore/goals', 'csexplore/resources', 'csexplore/organizing-principle',
      {
        type: 'category',
        label: 'Mockups',
        items: [
            'csexplore/annotated-mockup/save-hawaii-with-computer-science',
            'csexplore/annotated-mockup/csexplore-ocean-earth',
            'csexplore/annotated-mockup/find-the-path',
            'csexplore/annotated-mockup/CS-Explore-Chat',
            'csexplore/annotated-mockup/build-your-community'
        ]
      }],
    RadGrad2: ['radgrad2/goals',
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
          "radgrad2/developer/radgrad.org"
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
  },
};
