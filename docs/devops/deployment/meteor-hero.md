---
title: Meteor Hero
sidebar_label: Meteor Hero
---

## Deployment Documentation


Deployment to Heroku

Originally recommended to use meteor-hero, but I was unable to launch it following documentation. Error could have been on my part. Looking into other options, [Meteor Buildpack Horse](https://github.com/AdmitHub/meteor-buildpack-horse) seemed to have positive reviews. Deploying to Heroku was breeze with it.

To start, clone the sample [meteor repo](https://ics-software-engineering.github.io/meteor-application-template-react/)
`cd path/to/app`. Verify everything is running well locally by running `meteor npm install` and `meteor npm run start`


```
PS G:\GitFolder\buildpackhorse-for-heroku\app> meteor npm install

> core-js@3.6.4 postinstall G:\GitFolder\buildpackhorse-for-heroku\app\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"

added 416 packages from 333 contributors and audited 416 packages in 43.24s

21 packages are looking for funding
  run `npm fund` for details

found 22 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
```

```
PS G:\GitFolder\buildpackhorse-for-heroku\app> meteor npm run start

> meteor-application-template-react@ start G:\GitFolder\buildpackhorse-for-heroku\app
> meteor --no-release-check --settings ../config/settings.development.json

[[[[[ ~\G\GitFolder\buildpackhorse-for-heroku\app ]]]]]

=> Started proxy.

Unable to resolve some modules:

  "@babel/runtime/helpers/createSuper" in /G/GitFolder/buildpackhorse-for-heroku/app/imports/ui/layouts/App.jsx (web.browser.legacy)

If you notice problems related to these missing modules, consider running:

  meteor npm install --save @babel/runtime

=> Started MongoDB.
W20200716-23:58:17.211(-7)? (STDERR) Note: you are using a pure-JavaScript implementation of bcrypt.
W20200716-23:58:17.684(-7)? (STDERR) While this implementation will work correctly, it is known to be
W20200716-23:58:17.686(-7)? (STDERR) approximately three times slower than the native implementation.
W20200716-23:58:17.698(-7)? (STDERR) In order to use the native implementation instead, run
W20200716-23:58:17.699(-7)? (STDERR)
W20200716-23:58:17.699(-7)? (STDERR)   meteor npm install --save bcrypt
W20200716-23:58:17.701(-7)? (STDERR)
W20200716-23:58:17.701(-7)? (STDERR) in the root directory of your application.
I20200716-23:58:18.283(-7)? Creating the default user(s)
I20200716-23:58:18.287(-7)?   Creating user admin@foo.com.
I20200716-23:58:18.558(-7)?   Creating user john@foo.com.
I20200716-23:58:18.793(-7)? Creating default data.
I20200716-23:58:18.797(-7)?   Adding: Basket (john@foo.com)
I20200716-23:58:18.813(-7)?   Adding: Bicycle (john@foo.com)
I20200716-23:58:18.816(-7)?   Adding: Banana (admin@foo.com)
I20200716-23:58:18.821(-7)?   Adding: Boogie Board (admin@foo.com)
=> Started your app.

=> App running at: http://localhost:3000/
   Type Control-C twice to stop.
```

# SIGN UP WITH HEROKU

Following step 1 of [Meteor Buildpack Horse](https://github.com/AdmitHub/meteor-buildpack-horse) docs, the app needs to be set up to deploy with Heroku. 

 * Sign up for a free account on Heroku.
 * Verify you have Git installed on your computer.
 * Download the [Heroku CLI tool](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) 
     * You might need to restart your shell client after instillation for it to take effect

Log into Heroku through your shell client
```
cd path/to/app

PS G:\GitFolder\buildpackhorse-for-heroku\app> heroku login
heroku: Press any key to open up the browser to login or q to exit:
Opening browser to https://cli-auth.heroku.com/auth/cli/browser/5bfae492-b6b2-4982-a967-3e***redactedForPrivacy***
Logging in... done
Logged in as arslanxr@gmail.com
```

Before you can deploy your app to Heroku, you need to initialize a local Git repository and commit your application code to it. The following 

```
cd path/to/app
git init   //Initialized empty Git repository in .git/
git add .
git commit -m "My first commit"
```

Your app’s code is now tracked in a local Git repository. It has not yet been pushed to any remote servers. The `heroku create` CLI command creates a new empty application on Heroku, along with an associated empty Git repository.

```
PS G:\GitFolder\buildpackhorse-for-heroku\app> heroku create
Creating app... done, ⬢ enigmatic-thicket-32549
https://enigmatic-thicket-32549.herokuapp.com/ | https://git.heroku.com/enigmatic-thicket-32549.git
```

Use the git remote command `git remote -v` to confirm that a remote named heroku has been set for your app
```
PS G:\GitFolder\buildpackhorse-for-heroku\app> git remote -v
heroku  https://git.heroku.com/enigmatic-thicket-32549.git (fetch)
heroku  https://git.heroku.com/enigmatic-thicket-32549.git (push)
```


Jumping back to Meteor Buildpack Horse docs, we move on to step 2. First, install the buildpack registry addon by running `heroku plugins:install buildpack-registry`

```
PS G:\GitFolder\buildpackhorse-for-heroku\app> heroku plugins:install buildpack-registry
Installing plugin buildpack-registry... installed v1.0.1
```

Run `heroku buildpacks:set admithub/meteor-horse` to set the buildpack to the latest version.
```
PS G:\GitFolder\buildpackhorse-for-heroku\app> heroku buildpacks:set admithub/meteor-horse
Buildpack set. Next release on enigmatic-thicket-32549 will use admithub/meteor-horse.
Run git push heroku master to create a new release using this buildpack.
```

# SETTING UP AN EXTERNAL MONGO DATABASE

[MongoDB Atlas](https://www.mongodb.com/cloud/atlas) will be used for this. 
 * Sign up for a free account or log in. 
 * Select 'Create a new cluster'
 * Select the free cluster option. Your first one will be free
 * You will be prompted to select your hosting provider and a few other settings. The default ones are fine for this. Click "Create Cluster" at the bottom of the page. It will take a few minutes to deploy
 * Your home page will display your new cluster. Click Connect
 * Select "Connect with app*
 * Copy the connection string and save it somewhere. I personally have a notepad I paste it into. We will modify this string and this makes it easier
   * replace the `<password>` with your password
   * give your database a name in the `<dbname>` section

![](/img/devopsimages/MongoAtlas/Mongo1.png)
![](/img/devopsimages/MongoAtlas/Mongo2.png)
![](/img/devopsimages/MongoAtlas/Mongo3.png)
![](/img/devopsimages/MongoAtlas/Mongo4.png)
![](/img/devopsimages/MongoAtlas/Mongo5.png)
![](/img/devopsimages/MongoAtlas/Mongo6.png)



# DEPLOYING

Lets set our url by running `heroku config:set ROOT_URL="https://<appname>.herokuapp.com"`, but first, change `<appname>` to whatever your app is called. 

```
PS G:\GitFolder\buildpackhorse-for-heroku\app> heroku config:set ROOT_URL="https://buildpackhorse-for-heroku.herokuapp.com"
Setting ROOT_URL and restarting ⬢ enigmatic-thicket-32549... done, v3
ROOT_URL: https://buildpackhorse-for-heroku.herokuapp.com
```

We also set the MONGO_URL by using the connection string Atlas provided us earlier. `heroku config:set MONGO_URL="mongodb+srv://arslanr:MYPASSWORD@cluster0.rbdff.mongodb.net/MYDATABASENAME?retryWrites=true&w=majority"`. Make sure to modify the string with your atlas password and give your database a name.

```
PS G:\GitFolder\buildpackhorse-for-heroku\app> heroku config:set MONGO_URL="mongodb+srv://arslanr:MYPASSWORD@cluster0.rbdff.mongodb.net/MYDATABASENAME?retryWrites=true&w=majority"
Setting MONGO_URL and restarting ⬢ enigmatic-thicket-32549... done, v4
MONGO_URL: mongodb+srv://arslanr:MYPASSWORD@cluster0.rbdff.mongodb.net/MYDATABASENAME?retryWrites=true
'w' is not recognized as an internal or external command,
operable program or batch file.
```


Once that's done, you can deploy your app using this build pack any time by pushing to heroku with `git push heroku master`
```
PS G:\GitFolder\buildpackhorse-for-heroku\app> git push heroku master
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
remote: -----> Building Meteor app with ROOT_URL: https://buildpackhorse-for-heroku.herokuapp.com
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