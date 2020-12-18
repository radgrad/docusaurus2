---
title: Overview of app/
sidebar_label: Overview
---

The `app/` directory contains the source code for the RadGrad2 Meteor application, structured according to Meteor application best practices as illustrated in [meteor-application-template-react](https://ics-software-engineering.github.io/meteor-application-template-react/).

## Directory overview

<img src="/img/design/radgrad2/app.png" />

The app/ directory contains the following subdirectories:

`.deploy/`: The Meteor Up (MUP) configuration files for deploying RadGrad2 to a host. For more details, please see [Deployment](../../../deployment/overview).

`.meteor/`: The standard directory used by Meteor to manage the installation.

`client/`: The standard directory specifying files that will be eagerly loaded by Metoer each time a client (i.e. browser) connects to the server.

`imports/`: The standard directory used to hold application specific files. By putting files in this directory (rather than client or server), loading of files can be controlled and minimized.

`private/`: The standard directory used to hold files that the Meteor application may need access to at run-time, but which cannot be retrieve via a URL at run-time.

`public/`: The standard directory used to hold files that can be retrieved via a URL at run-time. For example, static assets such as images are typically stored in the public/ directory.

`server/`: The standard directory specifying files that will be eagerly loaded by Meteor upon server startup.

`tests/`: A directory that contains end-to-end (TestCafe) test code. Meteor ignores this directory entirely. Note that unit and integration test code (which is run by Meteor) is located within the imports/ directory close to the code that is under test. For more details, please see [Testing](../../../testing/overview).

The app/ directory also contains a number of configuration files related to NPM (such as package.json and package-lock.json), ESLint, JSDoc, etc.

