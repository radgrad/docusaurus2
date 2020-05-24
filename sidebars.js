module.exports = {
  someSidebar: {
    Overview: ['overview/motivation', 'overview/managing-this-site', 'overview/markdown-reference', 'overview/mdx'],
    DevOps: ['devops/goals', 'devops/resources'],
    InternBit: ['internbit/goals', 'internbit/resources', 'internbit/scraping'],
    CSExplore: ['csexplore/goals', 'csexplore/resources', 'csexplore/organizing-principle'],
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
