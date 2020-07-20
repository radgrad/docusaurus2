---
title: Heroku
sidebar_label: Heroku
---

## Overview

(Note from Arslan: Originally tried to use [meteor-hero](https://github.com/jkrup/meteor-hero), but was unable to launch it following documentation. Error could have been on my part. Looking into other options, [Meteor Buildpack Horse](https://github.com/AdmitHub/meteor-buildpack-horse) seemed to have positive reviews. Deploying to Heroku was breeze with it, and so that is what is documented here.)

Instructions assume meteor, git, and npm are installed on your system.

## Install sample Meteor app

To start, clone the sample app [meteor-application-template-react](https://ics-software-engineering.github.io/meteor-application-template-react/) to your local computer.

Change directories to the app/ directory, and follow the template's installation instructions to verify everything is running well locally by running `meteor npm install` and `meteor npm run start`.

## Install Heroku

First, sign up for a free account on Heroku at [this page](https://signup.heroku.com/).

Next, download the [Heroku CLI tool](https://devcenter.heroku.com/articles/heroku-cli#download-and-install). You might need to restart your shell client after installation for it to take effect.

## Create a new Heroku app

To create a Heroku app to host your Meteor app, you musts first log into Heroku through your shell client. Change directories to the app/ directory, then run `heroku login`:

```
PS G:\GitFolder\meteor-application-template-react\app> heroku login
heroku: Press any key to open up the browser to login or q to exit:
Opening browser to https://cli-auth.heroku.com/auth/cli/browser/5bfae492-b6b2-4982-a967-3e***redactedForPrivacy***
Logging in... done
Logged in as arslanxr@gmail.com
```

Now that you're logged in to Heroku, you can use the `heroku create` CLI command to create a new empty application on Heroku, along with an associated Git repository at Heroku:

```
PS G:\GitFolder\meteor-application-template-react\app> heroku create
Creating app... done, ⬢ enigmatic-thicket-32549
https://enigmatic-thicket-32549.herokuapp.com/ | https://git.heroku.com/enigmatic-thicket-32549.git
```

You can use the git remote command `git remote -v` to confirm that a remote named heroku has been set for your app:
```
PS G:\GitFolder\meteor-application-template-react\app> git remote -v
heroku  https://git.heroku.com/enigmatic-thicket-32549.git (fetch)
heroku  https://git.heroku.com/enigmatic-thicket-32549.git (push)
```

## Install Meteor Buildpack Horse

Now we follow step two of the [Meteor Buildpack Horse](https://github.com/AdmitHub/meteor-buildpack-horse) docs.

First, install the buildpack registry addon by running `heroku plugins:install buildpack-registry`:

```
PS G:\GitFolder\meteor-application-template-react\app> heroku plugins:install buildpack-registry
Installing plugin buildpack-registry... installed v1.0.1
```

Next, run `heroku buildpacks:set admithub/meteor-horse` to set the buildpack to the latest version.
```
PS G:\GitFolder\meteor-application-template-react\app> heroku buildpacks:set admithub/meteor-horse
Buildpack set. Next release on enigmatic-thicket-32549 will use admithub/meteor-horse.
Run git push heroku master to create a new release using this buildpack.
```

## Create a MongoDB instance

Before we can actually deploy the Meteor app, we need to set up a MongoDB database instance in which to store the data.  Heroku does not provide MongoDB hosting, so we will use the free tier of MongoDB Atlas hosting service.

See [Setting up a MongoDB Instance](mongo-url.md) for instructions on how to create the MongoDB instance.

This process should yield a MONGO_URL connection string for use below.

## Set the application and database URLs

First, set the url by running `heroku config:set ROOT_URL="https://<appname>.herokuapp.com"`, changing `<appname>` to whatever your app is called.

```
PS G:\GitFolder\meteor-application-template-react\app> heroku config:set ROOT_URL="https://meteor-application-template-react.herokuapp.com"
Setting ROOT_URL and restarting ⬢ enigmatic-thicket-32549... done, v3
ROOT_URL: https://meteor-application-template-react.herokuapp.com
```

Second, set the MONGO_URL by using the connection string Atlas provided us and running: `heroku config:set MONGO_URL="mongodb+srv://arslanr:MYPASSWORD@cluster0.rbdff.mongodb.net/MYDATABASENAME?retryWrites=true&w=majority"`. Make sure to modify the string with your atlas password and give your database a name.

```
PS G:\GitFolder\meteor-application-template-react\app> heroku config:set MONGO_URL="mongodb+srv://arslanr:MYPASSWORD@cluster0.rbdff.mongodb.net/MYDATABASENAME?retryWrites=true&w=majority"
Setting MONGO_URL and restarting ⬢ enigmatic-thicket-32549... done, v4
MONGO_URL: mongodb+srv://arslanr:MYPASSWORD@cluster0.rbdff.mongodb.net/MYDATABASENAME?retryWrites=true
'w' is not recognized as an internal or external command,
operable program or batch file.
```

## Deployment (and redeployment)

Once that's done, you can deploy your app any time by pushing your application to heroku with `git push heroku master`
```
PS G:\GitFolder\meteor-application-template-react\app> git push heroku master
Enumerating objects: 14730, done.
Counting objects: 100% (14730/14730), done.
Delta compression using up to 8 threads
Compressing objects: 100% (10071/10071), done.
Writing objects: 100% (14730/14730), 12.94 MiB | 642.00 KiB/s, done.
Total 14730 (delta 3850), reused 14730 (delta 3850)
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Node.js app detected
remote: -----> Installing meteor
remote: Downloading Meteor distribution
remote:
remote: Meteor 1.10.2 has been installed in your home directory (~/.meteor).
remote:
remote: Now you need to do one of the following:
remote:
remote:   (1) Add "$HOME/.meteor" to your path, or
remote:   (2) Run this command as root:
remote:         cp "/tmp/codon/tmp/cache/meteor/.meteor/packages/meteor-tool/1.10.2/mt-os.linux.x86_64/scripts/admin/launch-meteor" /usr/bin/meteor
remote:
remote: Then to get started, take a look at 'meteor --help' or see the docs at
remote: docs.meteor.com.
remote: -----> Target Meteor version: Meteor 1.10.2
remote: -----> Checking if this meteor version supports --server-only
remote: -----> Using node: v12.16.1
remote: ----->    and npm: 6.14.0
remote: audited 416 packages in 3.571s
remote:
remote: 21 packages are looking for funding
remote:   run `npm fund` for details
remote:
remote: found 22 low severity vulnerabilities
remote:   run `npm audit fix` to fix them, or `npm audit` for details
remote: -----> Building Meteor app with ROOT_URL: https://meteor-application-template-react.herokuapp.com
remote: app/node_modules/semantic-ui-css/semantic.css: warn: There are some @import rules in the middle of a file. This might be a bug, as imports are only valid at the beginning of a file.
remote: Browserslist: caniuse-lite is outdated. Please run next command `npm update`
remote:
remote: Unable to resolve some modules:
remote:
remote:   "@babel/runtime/helpers/createSuper" in
remote: /tmp/build_30ad13c7/imports/ui/layouts/App.jsx (web.browser.legacy)
remote:
remote: If you notice problems related to these missing modules, consider running:
remote:
remote:   meteor npm install --save @babel/runtime
remote:
remote: -----> Moving built slug to /tmp/build_30ad13c7/.meteor/heroku_build/app
remote: -----> Installing npm production dependencies on built slug
remote: npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
remote:
remote: > fibers@4.0.3 install /tmp/build_30ad13c7/.meteor/heroku_build/app/programs/server/node_modules/fibers
remote: > node build.js || nodejs build.js
remote:
remote: `linux-x64-72-glibc` exists; testing
remote: Binary is fine; exiting
remote:
remote: > meteor-dev-bundle@ install /tmp/build_30ad13c7/.meteor/heroku_build/app/programs/server
remote: > node npm-rebuild.js
remote:
remote:
remote: > core-js@3.2.1 postinstall /tmp/build_30ad13c7/.meteor/heroku_build/app/programs/server/npm/node_modules/meteor/ecmascript-runtime-client/node_modules/core-js
remote: > node scripts/postinstall || echo "ignore"
remote:
remote: Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!
remote:
remote: The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
remote: > https://opencollective.com/core-js
remote: > https://www.patreon.com/zloirock
remote:
remote: Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)
remote:
remote: core-js@3.2.1 /tmp/build_30ad13c7/.meteor/heroku_build/app/programs/server/npm/node_modules/meteor/ecmascript-runtime-client/node_modules/core-js
remote:
remote: > core-js@3.2.1 postinstall /tmp/build_30ad13c7/.meteor/heroku_build/app/programs/server/npm/node_modules/meteor/ecmascript-runtime-server/node_modules/core-js
remote: > node scripts/postinstall || echo "ignore"
remote:
remote: Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!
remote:
remote: The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
remote: > https://opencollective.com/core-js
remote: > https://www.patreon.com/zloirock
remote:
remote: Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)
remote:
...
... 
...
remote: -----> Adding PATH environment
remote: -----> Running extras
remote: -----> Adding profile script to resolve MONGO_URL from mongolab addon
remote: -----> Adding profile script to resolve ROOT_URL from heroku app name
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote:
remote: -----> Compressing...
remote:        Done: 71.6M
remote: -----> Launching...
remote:        Released v5
remote:        https://enigmatic-thicket-32549.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/enigmatic-thicket-32549.git
 * [new branch]      master -> master
```

The website should be running at https://enigmatic-thicket-32549.herokuapp.com/. There are ways to rename the URL `enigmatic-thicket-32549` part to anything you want.

:::warning

According to ROOT_URL, I think the application should be available at: https://meteor-application-template-react.herokuapp.com/, but it's not.   Did you actually set the ROOT_URL correctly in these instructions?

:::
