---
title: Setup a Digital Ocean server using Meteor Up
sidebar_label: Setup Digital Ocean server
---

This page documents the process of setting up a cloud-based server for RadGrad using [Digital Ocean](https://digitalocean.com) and [Meteor Up](http://meteor-up.com).

## Buy a custom domain name for your RadGrad server

Use a domain registrar service such as [NameCheap](https://namecheap.com) to buy a domain name for your RadGrad server. This is necessary in order to enable HTTPS for secure communication with your RadGrad server.

## Use Digital Ocean DNS for your domain name

You need to tell your registrar that you will use Digital Ocean's name servers. For instructions, see [How to point to Digital Ocean Nameservers from Common Doman Registrars](https://www.digitalocean.com/community/tutorials/how-to-point-to-digitalocean-nameservers-from-common-domain-registrars).

Propogating this change takes up to 24 hours, so be patient.  To check to see if it's finished, you can use [Digital Ocean's DNS Lookup Page](https://www.digitalocean.com/community/tools/dns).

For example, for the (newly created) radgrad.dev domain, once the transition is complete, this page displays the following:

![](/img/deployment/dns-lookup-radgrad-dev.png)

## Create an Digital Ocean Ubuntu server (i.e. Droplet)

Login to [Digital Ocean](https://digitalocean.com), then click on the "Create" button and select a Droplet (Ubuntu server). Create a root password and save it someplace safe.

It's helpful to change the default name of your droplet to the intended custom domain name to simplify management. For example, here's the newly created droplet for "radgrad.dev":

![](/img/deployment/do-droplet.png)

## Connect your domain to your droplet

In Digital Ocean, go to your Networking tab on the left menu, then click "Domains". You should see a pane like the following:

![](/img/deployment/do-domain-page.png)

You can enter your new domain, then click "Add domain". Once the nameserver transfer has finished, you'll see "3 NS" below the domain name.

Next, click on the domain, put "@" for the hostname, and select your droplet:

![](/img/deployment/do-domain-setup-1.png)

After clicking Add Domain, it will look like this:

![](/img/deployment/do-domain-setup-2.png)

Once you've completed this, within a short time you should see that your domain routes to your droplet:

```
$ nslookup radgrad.dev
Server:		10.0.1.1
Address:	10.0.1.1#53

Non-authoritative answer:
Name:	radgrad.dev
Address: 157.245.253.34
```

## Configure app/.deploy/mup.js

Copy app/.deploy/sample.mup.js file to mup.js.  It will look something like this:

```
module.exports = {
  servers: { one: { host: 'CHANGEME.EDU', username: 'root', password: 'CHANGEME' }},
  hooks: { 'pre.deploy': { localCommand: 'npm run update-build-version' }},
  app: {
    name: 'radgrad',
    path: '../',
    servers: { one: {}},
    buildOptions: { serverOnly: true, debug: true },
    env: {
      ROOT_URL: 'https://CHANGME.EDU',
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },
    docker: { image: 'abernix/meteord:node-12-base' },
    enableUploadProgressBar: true,
    deployCheckWaitTime: 900
  },
  mongo: { version: '3.4.1', servers: { one: {} } },
  proxy: {
    domains: 'CHANGEME.EDU',
    ssl: { letsEncryptEmail: 'CHANGEME@HAWAII.EDU', forceSSL: true }
  }
};
```
Note that there are several occurences of the string “CHANGEME”. This indicates the parts of the mup.js file that need to be configured for your application. You can edit these strings to be lower case, they are upper case only to make them stand out in the file.

Note: that the “host” and "domains" values are just the domain name. For example, if your domain name is "radgrad.dev", then the value of "host" and "domains" should be just "radgrad.dev". Do not include "https://" in these fields.

However, the ROOT_URL includes the protocol. For example, if your domain name is "radgrad.dev", then the value of ROOT_URL should be “https://radgrad.dev”.

## Configure app/.deploy/settings.js

Copy app/.deploy/sample.settings.js to settings.js.  Edit this file to include appropriate credentials and other information specific to your deployment.

## Run mup setup

Inside the app/.deploy directory, invoke “mup setup” (or “mup.cmd setup” on Windows). You should get output like the following:

```
$ mup setup

Started TaskList: Setup Docker
[radgrad.dev] - Setup Docker
[radgrad.dev] - Setup Docker: SUCCESS

Started TaskList: Setup Meteor
[radgrad.dev] - Setup Environment
[radgrad.dev] - Setup Environment: SUCCESS

Started TaskList: Setup Mongo
[radgrad.dev] - Setup Environment
[radgrad.dev] - Setup Environment: SUCCESS
[radgrad.dev] - Copying Mongo Config
[radgrad.dev] - Copying Mongo Config: SUCCESS

Started TaskList: Start Mongo
[radgrad.dev] - Start Mongo
[radgrad.dev] - Start Mongo: SUCCESS

Started TaskList: Setup proxy
[radgrad.dev] - Setup Environment
[radgrad.dev] - Setup Environment: SUCCESS
[radgrad.dev] - Pushing the Startup Script
[radgrad.dev] - Pushing the Startup Script: SUCCESS
[radgrad.dev] - Pushing Nginx Config Template
[radgrad.dev] - Pushing Nginx Config Template: SUCCESS
[radgrad.dev] - Pushing Nginx Config
[radgrad.dev] - Pushing Nginx Config: SUCCESS
[radgrad.dev] - Cleaning Up SSL Certificates
[radgrad.dev] - Cleaning Up SSL Certificates: SUCCESS
[radgrad.dev] - Configure Nginx Upstream
[radgrad.dev] - Configure Nginx Upstream: SUCCESS

Started TaskList: Start proxy
[radgrad.dev] - Start proxy
[radgrad.dev] - Start proxy: SUCCESS

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

## Find and save the admin password

**Extremely Important Note:**  Each time you start up RadGrad and initialize it with a new database, a new admin password will be generated and the log file will be the only place it is made available.  You must print the logs by running `mup logs`, find the line that indicates the admin password within the logs, and save that password someplace safe.

Note that the logs are cleared each time you deploy an update, so it is important to find and save that admin password.

If you forget to save the admin password, you will need to clear the database and reinitialize the system from scratch in order to regenerate it. There is no way to recover it after it is deleted from the logs.

## Finish initial setup

See the next sections for additional setup instructions, including:

  * [Setup CAS authentication](./setup-cas)
  * [Setup Robo3T](./setup-robo3t)
  * [Setup MontiAPM](./setup-montiapm)

## Publishing a new release

Once you have successfully set up your RadGrad server, subsequent updates to the system are much more simple.

See [Publishing a new release](./publish-a-release-mup) for details.
