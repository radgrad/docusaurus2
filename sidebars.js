module.exports = {
  someSidebar: {
    Overview: ['overview/motivation', 'overview/managing-this-site', 'overview/markdown-reference', 'overview/mdx'],
    DevOps: ['devops/goals', 'devops/resources'],
    InternBit: ['internbit/goals', 'internbit/resources'],
    CSExplore: ['csexplore/goals', 'csexplore/resources'],
    RadGrad2: ['radgrad2/goals',
      {
        type: 'category',
        label: 'Developer Guide',
        items: [
          "radgrad2/developer/developer-guide-installation",
          "radgrad2/developer/developer-guide-ide",
          "radgrad2/developer/developer-guide-source-code-organization",
          "radgrad2/developer/developer-guide-coding-standards",
          "radgrad2/developer/developer-guide-testing",
          "radgrad2/developer/developer-guide-building-academic-plans",
          "radgrad2/developer/developer-guide-database-fixtures",
          "radgrad2/developer/developer-guide-continuous-integration",
          "radgrad2/developer/developer-guide-radgrad.org"
        ],
      },
      {
        type: 'category',
        label: 'Data Model',
        items: [
          "radgrad2/datamodel/data-model-overview",
          "radgrad2/datamodel/data-model-class-hierarchy",
          "radgrad2/datamodel/data-model-entity-relationship-model",
          "radgrad2/datamodel/data-model-user-management",
          "radgrad2/datamodel/data-model-ice",
          "radgrad2/datamodel/data-model-dump-restore",
          "radgrad2/datamodel/data-model-pub-sub",
          "radgrad2/datamodel/data-model-integrity-checking"

        ],
      },
    ],
  },
};
