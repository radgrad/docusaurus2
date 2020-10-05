---
title: Build and publish a new release of RadGrad
sidebar_label: Build a release
---

Eventually, we would like to implement continuous deployment of RadGrad. This would mean that when a developer makes a commit or merges a branch into master, the new master branch will be tested and automatically deployed to the production server.

For now, the process is manual and consists of the following steps:

## Update settings.json

First, check to make sure that settings.json and mup.js have the correct values for this release.

If you are planning to load a new snapshot of the database, then you will need to first [reset the production DB](reset-db).

## Perform quality assurance

Before making a new release, be sure to [run the tests](/docs/developers/testing/reference/testing-scripts) and check that they all pass.

## Deploying to production

Once you have completed quality assurance and have assured yourself that the code is ready for deployment, you can deploy as follows:

```shell
cd .deploy/
mup deploy
```

These commands assume that you have already setup your production environment.

