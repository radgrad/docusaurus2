---
title: Publish a new release of RadGrad
sidebar_label: Publish a new release
---

Once RadGrad is running on a server, you can follow these steps to update it with a new release.

## Obtain the mup.js and settings.js files

If you are not the person who originally set up the server, you will need to obtain the production mup.js and setting.js files, which contain the credentials for the server.

Once you have those files, put them in the .deploy directory.

## Update settings.json

Next, check to make sure that your settings.json and mup.js have the correct values for this release.

If you are planning to load a new snapshot of the database, then you will need to follow the instructions to [reset the production DB](reset-db).

If you are just deploying an updated version of the code, then you shouldn't reset the database.

## Perform quality assurance

Before making a new release, consider [running the tests](/docs/developers/testing/overview) and check that they all pass.

## Deploy to production

Once you have completed quality assurance and have assured yourself that the code is ready for deployment, you can deploy as follows:

```shell
cd .deploy/
mup deploy
```

You should check the logs after deploying:

```shell
mup logs
```
