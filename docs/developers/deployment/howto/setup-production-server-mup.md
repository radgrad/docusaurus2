---
title: Setup a production server using Meteor Up
sidebar_label: Setup production server (mup)
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
$ npm install -g mup
```

## Create the mup.js file

In the app/.deploy directory, there is a file called mup.sample.js that provides a template for the mup.js file.  Make a copy of that file called mup.js:

```shell
$ radgrad2/app/.deploy $ cp mup.sample.js mup.js
```

The mup.js file is .gitignored, so you can add credentials to that file without fear of the file being committed to GitHub.

Edit the username and password fields to provide credentials for the production server. See Philip if you need credentials.

## Set up server

You can now set up the server following the directions at [http://meteor-up.com/docs.html#setting-up-a-server](http://meteor-up.com/docs.html#setting-up-a-server):

```shell
$ mup setup
```

## Deploy to server

Now you can deploy the current version of RadGrad in your directory to the server following the directions at [http://meteor-up.com/docs.html#deploying-an-app](http://meteor-up.com/docs.html#deploying-an-app):

```shell
$ mup deploy
```

After deployment finishes, the app should be live at [https://radgrad2.ics.hawaii.edu](https://radgrad2.ics.hawaii.edu).

## Setup APM

It is useful to have application performance monitoring.  We hope to be able to use [Monti APM](https://montiapm.com/). Unfortunately, there is a problem with the latest release of the agent, as documented [here](https://github.com/monti-apm/monti-apm-agent/issues/14#issuecomment-701714047). Hopefully that problem will be resolved soon.

Here's what a Monti APM dashboard will look if we can get the bug resolved:

![](/img/deployment/monti-apm-dashboard.png)









