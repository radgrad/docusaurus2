---
title: Publish a new release of RadGrad
sidebar_label: Publish a release
---

Once RadGrad is running on a production server, you can follow these steps to update it with a new release.

## Update settings.json

First, check to make sure that settings.json and mup.js have the correct values for this release.

If you are planning to load a new snapshot of the database, then you will need to first [reset the production DB](reset-db).

## Perform quality assurance

Before making a new release, be sure to [run the tests](/docs/developers/testing/overview) and check that they all pass.

## Deploy to production

Once you have completed quality assurance and have assured yourself that the code is ready for deployment, you can deploy as follows:

```shell
cd .deploy/
mup deploy
```

