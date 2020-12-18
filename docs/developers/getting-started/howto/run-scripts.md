---
title: Run RadGrad
sidebar_label: Run RadGrad
---

We use a variety NPM scripts for development. They are defined in the RadGrad2 [package.json](https://github.com/radgrad/radgrad2/blob/master/app/package.json) file.

There are two scripts for running RadGrad: start and start-custom.
 Both are invoked with `meteor npm run`.

## start

`meteor npm run start` is the standard command to invoke RadGrad in development mode.  This configures the system using [settings.development.json](https://github.com/radgrad/radgrad2/blob/master/config/settings.development.json) annd runs it on port 3200.

## start-custom

`meteor npm run start-custom` is the same as the above, but allows you to use a customized configuration file that is ignored in commits to the repository. In order to to make use of this command, there is some set-up required:

  1.  If `radgrad/custom/` does not exist, create it

  2. Copy [settings.development.json](https://github.com/radgrad/radgrad/blob/master/config/settings.development.json) into it

You can now edit `custom/settings.development.json` and the `meteor npm run start-custom` command will use that configuration.

Please be aware that if you want to use custom Assets in your configuration (e.g. a custom `databaseRestoreFileName`), you will need to place the custom file into `app/private/` due to the way Meteor loads assets. If you wish to exclude the custom asset from commits to the repository, place it into a `custom/` directory anywhere in `app/private/`. For more information on the `custom/` convention, see [source code organization](/docs/developers/getting-started/concepts/source-code-organization).

## Scripts for testing

There are a variety of additional scripts for testing. Their documentation is available [here](../../testing/reference/testing-scripts).














