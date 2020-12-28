---
title: Setup a Digital Ocean server using Meteor Up
sidebar_label: Setup Digital Ocean server
---

This page documents the process of setting up a digital ocean server for RadGrad based upon [Meteor Up](http://meteor-up.com).

## Sign up with Digital Ocean

First, go to [Digital Ocean](https://www.digitalocean.com/?refcode=puttingAnythingHereSeemsToMakeTheButtonForThe$100CreditAppear). Using this link might get you a "Free Credit Active" link that will get you some free minutes.

## Create an Ubuntu server (i.e. Droplet)

Click on the "Create" button and select a Droplet (Ubuntu server). Create a root password and save it someplace safe.

## Configure app/.deploy/mup.js

Copy the sample.mup.js file to mup.js.  It will look something like this:

```
module.exports = {
  servers: {
    one: {
      host: '111.222.333.444',
      username: 'root',
      password: 'changeme'
    }
  },

  app: {
    name: 'meteor-application-template-react',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      ROOT_URL: 'http://111.222.333.444',
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },

    docker: {
      image: 'abernix/meteord:node-12-base',
    },

    enableUploadProgressBar: true
  },

  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  },
};
```
There is one occurrence of the string “changeme”, and two occurrences of the string “111.222.333.444”.

Change the string “changeme” (i.e. the server root password) to the Droplet root password you specified above.

Change the string “111.222.333.444” to the IP address associated with this Droplet. (In the screenshots above, the Droplet’s IP address is 167.172.222.158.) Be sure to use the “ipv4” address, not the “Private IP” address!

Note that the “host” value is just the IP address, but the ROOT_URL is “http://” followed by the IP address.

## Configure app/.deploy/settings.js

Copy sample.settings.js to settings.js.  Edit this file to include appropriate credentials and other information specific to your deployment.

## Run mup setup

Inside the app/.deploy directory, invoke “mup setup” (or “mup.cmd setup” on Windows). You should get output like the following:

```
$ mup setup

Started TaskList: Setup Docker
[167.172.222.158] - Setup Docker
[167.172.222.158] - Setup Docker: SUCCESS

Started TaskList: Setup Meteor
[167.172.222.158] - Setup Environment
[167.172.222.158] - Setup Environment: SUCCESS

Started TaskList: Setup Mongo
[167.172.222.158] - Setup Environment
[167.172.222.158] - Setup Environment: SUCCESS
[167.172.222.158] - Copying Mongo Config
[167.172.222.158] - Copying Mongo Config: SUCCESS

Started TaskList: Start Mongo
[167.172.222.158] - Start Mongo
[167.172.222.158] - Start Mongo: SUCCESS

Next, you should run:
    mup deploy

$
```

For more details on the setup command, see [http://meteor-up.com/docs.html#setting-up-a-server](http://meteor-up.com/docs.html#setting-up-a-server).

## Run mup deploy

Now you can bundle up your Meteor application, send it over to the Droplet, and start it running on your Droplet.

Inside the app/.deploy directory, invoke “mup deploy” (or, on Windows “mup.cmd deploy”). You should get output like the following:

```
$ mup deploy
Building App Bundle Locally

Started TaskList: Pushing Meteor App
[167.172.222.158] - Pushing Meteor App Bundle to the Server
[167.172.222.158] - Pushing Meteor App Bundle to the Server: SUCCESS
[167.172.222.158] - Prepare Bundle
[167.172.222.158] - Prepare Bundle: SUCCESS

Started TaskList: Configuring App
[167.172.222.158] - Pushing the Startup Script
[167.172.222.158] - Pushing the Startup Script: SUCCESS
[167.172.222.158] - Sending Environment Variables
[167.172.222.158] - Sending Environment Variables: SUCCESS

Started TaskList: Start Meteor
[167.172.222.158] - Start Meteor
[167.172.222.158] - Start Meteor: SUCCESS
[167.172.222.158] - Verifying Deployment
[167.172.222.158] - Verifying Deployment: SUCCESS
```

For more details on the deploy command, see [http://meteor-up.com/docs.html#deploying-an-app](http://meteor-up.com/docs.html#deploying-an-app).

After deployment finishes, the app should be live.

## Check status of deployment through logs

To ensure that what you wanted to have happen actually happened, check the logs with mup logs:

```shell
mup logs
```

Sample invocation and results:

```shell
mup logs
[radgrad2.ics.hawaii.edu]=> Starting meteor app on port:3000
[radgrad2.ics.hawaii.edu]Monti APM: completed instrumenting the app
[radgrad2.ics.hawaii.edu]Beginning startup.
[radgrad2.ics.hawaii.edu]Invoking defineAdminUser
[radgrad2.ics.hawaii.edu]Defining admin radgrad@hawaii.edu with password asfasdf
[radgrad2.ics.hawaii.edu]Invoking loadDatabase
[radgrad2.ics.hawaii.edu]Monti APM: Successfully connected
```

Note that when you start up the system with a new database, a new admin password will be generated and the log file will be the only place it is made available.

## Setup SSL and HTTPS

You will probably want to buy a custom domain name and then setup SSL so that you can access the RadGrad instance using https. For instructions, please see [How to setup HTTPS](http://courses.ics.hawaii.edu/ics314f20/morea/deployment/reading-digital-ocean-https.html).
