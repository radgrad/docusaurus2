---
title: Setup a production server using Meteor Up
sidebar_label: Setup production server
---

This page documents the process of setting up a production server for RadGrad based upon [Meteor Up](http://meteor-up.com).

## Setup developer account

To start, you will need to create the ability for multiple developers to manage a single RadGrad installation on this server.  You can do this either via multiple logins, each with sudo access, and a shared directory, or else via a single account whose password is shared amongst developers involved in production.

In this page, we will assume you (or a sysadmin) has created an admin account called "radgrad" that is used by all developers to manage this installation.

## Open ports

Several ports on the server will need to be open:

| Port | Service |
|------|---------|
| 22   | ssh     |
| 443  | https   |
|  80  | web     |
| 19999 | NetData |

## Setup NetData

It is useful to have system load monitoring established for the production server.  One (free) choice is [NetData](https://www.netdata.cloud/).

Follow their instructions to set up a monitor daemon on the production server and "claim" that server in their cloud-based dashboard service.  When you are done, you can easily monitor the load on your server and even set up alerts when various thresholds are crossed. Here's a screen shot illustrating the dashboard:

![](/img/deployment/netdata-dashboard.png)

## Add NOPASSWD

In order for the `mup setup` command to work, you must add NOPASSWD to the sudoers file on the server as documented in [SSH based authentication with sudo](https://github.com/zodern/meteor-up/blob/ee017150591f53f7f85d0a4081a1b6018230e437/README.md#ssh-based-authentication-with-sudo).

## Install mup

Follow the instructions at [http://meteor-up.com/docs.html#installation](http://meteor-up.com/docs.html#installation):

```shell
npm install -g mup
```

## Setup mup.js and settings.json

In the app/.deploy directory, there are two template files: mup.sample.js and settings.sample.json.

Copy mup.sample.js to mup.js and settings.sample.js to settings.js:

```shell
cp mup.sample.js mup.js; cp settings.sample.json settings.json
```

Both mup.js and settings.json are ignored by git, so you can safely add credentials into those files without fear of them being committed to GitHub.

Edit these two files, adding credentials where necessary.  See Philip if you need credentials.

## Set up server

You can now set up the server following the directions at [http://meteor-up.com/docs.html#setting-up-a-server](http://meteor-up.com/docs.html#setting-up-a-server):

```shell
mup setup
```
Sample invocation and output:

```shell
app/.deploy $ mup setup

Started TaskList: Setup Docker
[radgrad2.ics.hawaii.edu] - Setup Docker
[radgrad2.ics.hawaii.edu] - Setup Docker: SUCCESS

Started TaskList: Setup Meteor
[radgrad2.ics.hawaii.edu] - Setup Environment
[radgrad2.ics.hawaii.edu] - Setup Environment: SUCCESS

Started TaskList: Setup Mongo
[radgrad2.ics.hawaii.edu] - Setup Environment
[radgrad2.ics.hawaii.edu] - Setup Environment: SUCCESS
[radgrad2.ics.hawaii.edu] - Copying Mongo Config
[radgrad2.ics.hawaii.edu] - Copying Mongo Config: SUCCESS

Started TaskList: Start Mongo
[radgrad2.ics.hawaii.edu] - Start Mongo
[radgrad2.ics.hawaii.edu] - Start Mongo: SUCCESS

Started TaskList: Setup proxy
[radgrad2.ics.hawaii.edu] - Setup Environment
[radgrad2.ics.hawaii.edu] - Setup Environment: SUCCESS
[radgrad2.ics.hawaii.edu] - Pushing the Startup Script
[radgrad2.ics.hawaii.edu] - Pushing the Startup Script: SUCCESS
[radgrad2.ics.hawaii.edu] - Pushing Nginx Config Template
[radgrad2.ics.hawaii.edu] - Pushing Nginx Config Template: SUCCESS
[radgrad2.ics.hawaii.edu] - Pushing Nginx Config
[radgrad2.ics.hawaii.edu] - Pushing Nginx Config: SUCCESS
[radgrad2.ics.hawaii.edu] - Cleaning Up SSL Certificates
[radgrad2.ics.hawaii.edu] - Cleaning Up SSL Certificates: SUCCESS
[radgrad2.ics.hawaii.edu] - Configure Nginx Upstream
[radgrad2.ics.hawaii.edu] - Configure Nginx Upstream: SUCCESS

Started TaskList: Start proxy
[radgrad2.ics.hawaii.edu] - Start proxy
[radgrad2.ics.hawaii.edu] - Start proxy: SUCCESS

Next, you should run:
    mup deploy
```
## Deploy to server

Now you can deploy the current version of RadGrad in your directory to the server following the directions at [http://meteor-up.com/docs.html#deploying-an-app](http://meteor-up.com/docs.html#deploying-an-app):

```shell
mup deploy
```

Sample invocation and output. This takes approximately 10 minutes on my machine to complete:

```shell
app/.deploy $ mup deploy
Building App Bundle Locally

Started TaskList: Pushing Meteor App
[radgrad2.ics.hawaii.edu] - Pushing Meteor App Bundle to the Server
[radgrad2.ics.hawaii.edu] - Pushing Meteor App Bundle to the Server: SUCCESS
[radgrad2.ics.hawaii.edu] - Prepare Bundle
[radgrad2.ics.hawaii.edu] - Prepare Bundle: SUCCESS

Started TaskList: Configuring App
[radgrad2.ics.hawaii.edu] - Pushing the Startup Script
[radgrad2.ics.hawaii.edu] - Pushing the Startup Script: SUCCESS
[radgrad2.ics.hawaii.edu] - Sending Environment Variables
[radgrad2.ics.hawaii.edu] - Sending Environment Variables: SUCCESS

Started TaskList: Start Meteor
[radgrad2.ics.hawaii.edu] - Start Meteor
[radgrad2.ics.hawaii.edu] - Start Meteor: SUCCESS
[radgrad2.ics.hawaii.edu] - Verifying Deployment
[radgrad2.ics.hawaii.edu] - Verifying Deployment: SUCCESS

```

After deployment finishes, the app should be live at [https://radgrad2.ics.hawaii.edu](https://radgrad2.ics.hawaii.edu).


## Setup Robo3T

A convenient way to inspect the contents of the production database is to use [Robo3T](https://robomongo.org/).

You have the choice of downloading Studio 3T or Robo 3T.  These instructions are for Robo 3T, which is simpler (and free).

After downloading and installing Robo3T, you must create a connection that includes port forwarding to the production MongoDB service.

First, create a new connection and name it appropriately:

![](/img/deployment/robo3t-account-config.png)

Next, set up SSH access to the server running the MongoDB container by clicking on the 'SSH' tab. For example, here is the dialog window for defining ssh access to radgrad2.ics.hawaii.edu:

![](/img/deployment/robo3t-ssh-config.png)

If you have configured things correctly, then after pressing "Save" you'll get this window:

![](/img/deployment/robo3t-connect.png)

And after connecting, you can inspect any collection and document:

![](/img/deployment/robo3t-dashboard.png)




## Setup APM

It is useful to have application performance monitoring.  We hope to be able to use [Monti APM](https://montiapm.com/). Unfortunately, there is a problem with the latest release of the agent, as documented [here](https://github.com/monti-apm/monti-apm-agent/issues/14#issuecomment-701714047). Hopefully that problem will be resolved soon.

Here's what a Monti APM dashboard will look if we can get the bug resolved:

![](/img/deployment/monti-apm-dashboard.png)









