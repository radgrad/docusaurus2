---
title: Setup Robo3T
---

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