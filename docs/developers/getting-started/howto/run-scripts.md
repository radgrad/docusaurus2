---
title: Run NPM scripts
sidebar_label: Run NPM scripts
---

We use the following NPM scripts for development. They are defined in the RadGrad2 [package.json](https://github.com/radgrad/radgrad2/blob/master/app/package.json) file.

All of the scripts are invoked with `meteor npm run`.

## start

`meteor npm run start` is the standard command to invoke RadGrad in development mode.  This configures the system using [settings.development.json](https://github.com/radgrad/radgrad2/blob/master/config/settings.development.json) annd runs it on port 3200.

## start-custom

`meteor npm run start-custom` is the same as the above, but allows you to use a customized configuration file that is ignored in commits to the repository. In order to to make use of this command, there is some set-up required:

  1.  If `radgrad/custom/` does not exist, create it

  2. Copy [settings.development.json](https://github.com/radgrad/radgrad/blob/master/config/settings.development.json) into it

You can now edit `custom/settings.development.json` and the `meteor npm run start-custom` command will use that configuration.

Please be aware that if you want to use custom Assets in your configuration (e.g. a custom `databaseRestoreFileName`), you will need to place the custom file into `app/private/` due to the way Meteor loads assets. If you wish to exclude the custom asset from commits to the repository, place it into a `custom/` directory anywhere in `app/private/`. For more information on the `custom/` convention, see [source code organization](/docs/developers/getting-started/concepts/source-code-organization).

## lint

`meteor npm run lint` runs ESLint from the command line.  We configure ESLint in [.eslintrc](https://github.com/radgrad/radgrad2/blob/master/app/.eslintrc).

This command is also specified as the "pretest" script, which means it will be run implicitly when you invoke the "test" script for unit testing.

Any ESLint errors fails the build in continuous integration.

## test

`meteor npm run test` runs the "unit" tests, which are server-side tests intended to ensure that the RadGrad data model is implemented correctly.

See [Perform Unit and Integration Testing](/docs/developers/testing/howto/perform-unit-and-integration-testing) for more detail.

It also runs lint, since this is specified as a pre-test.

## test-no-lint

`meteor npm run test-no-lint` runs the unit tests but does not run lint.  Lint takes at least a minute to run, so this saves some time.

## test-app

`meteor npm run test-app` runs the "integration tests", which are client-initiated tests intended to ensure that client-server communication is implemented correctly.

See [Perform Unit and Integration Testing](/docs/developers/testing/howto/perform-unit-and-integration-testing) for more detail.

## test-e2e

`meteor npm run test-e2e` runs end-to-end tests using [TestCafe](https://devexpress.github.io/testcafe/) and a headless chrome browser.

See [Perform End-to-End Testing](/docs/developers/testing/howto/perform-end-to-end-testing) for more detail.

## test-e2e-v

`meteor npm run test-e2e-v` is like test-e2e, but uses a regular Chrome browser so you can view the process of testing.

## generate-docs

`meteor npm run generate-docs` generates code-level documentation by running JSDoc over the source files.

## deploy

`meteor npm run deploy` deploys the system to Galaxy.















