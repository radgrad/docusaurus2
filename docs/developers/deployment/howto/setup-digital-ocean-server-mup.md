---
title: Setup a Digital Ocean server using Meteor Up
sidebar_label: Setup Digital Ocean server
---

This page documents the process of setting up a cloud-based server for RadGrad using [Digital Ocean](https://digitalocean.com) and [Meteor Up](http://meteor-up.com).

## Buy a custom domain name for your RadGrad server

Use a service such as [NameCheap](https://namecheap.com) to buy a domain name for your RadGrad server. This is necessary in order to enable HTTPS for secure communication with your RadGrad server.

Once you have purchased the domain name, you will need to enable Digital Ocean to provide the DNS services for this domain.

For instructions on how to do this, see [How to set up a custom domain name](http://courses.ics.hawaii.edu/ics314f20/morea/deployment/reading-digital-ocean-domain-name.html).

Note that you will typically need to wait about 24 hours after buying the domain name and enabling Digital Ocean name servers before you can proceed.


## Create an Digital Ocean Ubuntu server (i.e. Droplet)

Login to [Digital Ocean](https://digitalocean.com), then click on the "Create" button and select a Droplet (Ubuntu server). Create a root password and save it someplace safe.

## Configure app/.deploy/mup.js

Copy app/.deploy/sample.mup.js file to mup.js.  It will look something like this:

```
module.exports = {
  servers: {
    one: {
      host: 'changeme.edu',
      username: 'root',
      password: 'changeme'
    }
  },
  hooks: {
    'pre.deploy': {
      localCommand: 'npm run update-build-version'
    }
  },
  app: {
    name: 'radgrad',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
      debug: true,
    },

    env: {
      ROOT_URL: 'https://changeme.edu',
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },

    docker: {
      image: 'abernix/meteord:node-12-base',
    },

    enableUploadProgressBar: true,
    deployCheckWaitTime: 900
  },

  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  },

  proxy: {
    domains: 'changme.edu',
    ssl: {
      letsEncryptEmail: 'changeme@hawaii.edu',
      forceSSL: true
    }
  }
};

```
Note that there are several occurrences of the string “changeme”. You need to update these to indicate your custom domain and your root password.

Note that the “host” value is just the domain name, but the ROOT_URL is “https://” followed by the domain name.

## Configure app/.deploy/settings.js

Copy app/.deploy/sample.settings.js to settings.js.  Edit this file to include appropriate credentials and other information specific to your deployment.

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

Note that if you get an error involving "Error response from daemon: endpoint mup-nginx-proxy not found", that's OK. It will get fixed in the following steps.server

## Run mup reconfig

Now invoke `mup reconfig`:

```
$ mup reconfig

Started TaskList: Configuring App
[meteor-application-template-react.xyz] - Pushing the Startup Script
[meteor-application-template-react.xyz] - Pushing the Startup Script: SUCCESS
[meteor-application-template-react.xyz] - Sending Environment Variables
[meteor-application-template-react.xyz] - Sending Environment Variables: SUCCESS

Started TaskList: Start Meteor
[meteor-application-template-react.xyz] - Start Meteor
[meteor-application-template-react.xyz] - Start Meteor: SUCCESS
[meteor-application-template-react.xyz] - Verifying Deployment
[meteor-application-template-react.xyz] - Verifying Deployment: SUCCESS
$
```

If `mup setup` resulted in an error above, now run it again (and the problem should go away):

```
$ mup setup

Started TaskList: Setup Docker
[meteor-application-template-react.xyz] - Setup Docker
[meteor-application-template-react.xyz] - Setup Docker: SUCCESS

Started TaskList: Setup Meteor
[meteor-application-template-react.xyz] - Setup Environment
[meteor-application-template-react.xyz] - Setup Environment: SUCCESS

Started TaskList: Setup Mongo
[meteor-application-template-react.xyz] - Setup Environment
[meteor-application-template-react.xyz] - Setup Environment: SUCCESS
[meteor-application-template-react.xyz] - Copying Mongo Config
[meteor-application-template-react.xyz] - Copying Mongo Config: SUCCESS

Started TaskList: Start Mongo
[meteor-application-template-react.xyz] - Start Mongo
[meteor-application-template-react.xyz] - Start Mongo: SUCCESS

Started TaskList: Setup proxy
[meteor-application-template-react.xyz] - Setup Environment
[meteor-application-template-react.xyz] - Setup Environment: SUCCESS
[meteor-application-template-react.xyz] - Pushing the Startup Script
[meteor-application-template-react.xyz] - Pushing the Startup Script: SUCCESS
[meteor-application-template-react.xyz] - Pushing Nginx Config Template
[meteor-application-template-react.xyz] - Pushing Nginx Config Template: SUCCESS
[meteor-application-template-react.xyz] - Pushing Nginx Config
[meteor-application-template-react.xyz] - Pushing Nginx Config: SUCCESS
[meteor-application-template-react.xyz] - Cleaning Up SSL Certificates
[meteor-application-template-react.xyz] - Cleaning Up SSL Certificates: SUCCESS
[meteor-application-template-react.xyz] - Configure Nginx Upstream
[meteor-application-template-react.xyz] - Configure Nginx Upstream: SUCCESS

Started TaskList: Start proxy
[meteor-application-template-react.xyz] - Start proxy
[meteor-application-template-react.xyz] - Start proxy: SUCCESS

Next, you should run:
    mup deploy
$
```

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

**Extremely Important Note:**  Each time you start up RadGrad and initialize it with a new database, a new admin password will be generated and the log file will be the only place it is made available.  You must check the logs and save that password someplace safe, because it will be overwritten the next time you deploy an update.

## Finish initial setup

See the next sections for additional setup instructions, including:

  * [Setup CAS authentication](./setup-cas)
  * [Setup Robo3T](./setup-robo3t)
  * [Setup MontiAPM](./setup-montiapm)

## Publishing a new release

Once you have successfully set up your RadGrad server, subsequent updates to the system are much more simple.

See [Publishing a new release](./publish-a-release-mup) for details.
