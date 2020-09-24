---
title: Build and publish a new release of RadGrad
sidebar_label: Build a release
---

We utilize [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) to containerize and deploy RadGrad.  For Mongo, we use the official Mongo image without modification.

This page provides documentation on the standard procedures used to build a new release of RadGrad using Docker. The basic steps are shown in the right sidebar and documented in the following sections.

The next sections document each of these steps.

## Install Docker and Docker Compose

Make sure you have Docker and Docker Compose installed on your development and production systems.

Please refer to the official [Docker install documentation](https://docs.docker.com/install/) and [Docker-Compose install documentation](https://docs.docker.com/compose/install/) for installation instructions.  If you are on a Mac or Windows, you can install [Docker Desktop](https://www.docker.com/products/docker-desktop).

In addition, you will need an account on DockerHub, and your account will need to be a member of the [DockerHub RadGrad organization](https://hub.docker.com/u/radgrad).

## Build a new Docker Image

The radgrad2 repo contains a directory named docker/ containing a script called docker-build.sh.

To build a new Docker image,  `cd` into the `/docker` subdirectory, and invoke `docker-build.sh`. This command takes 5-10 minutes to complete on my laptop.

A typical run looks like this:

```
$ ./docker-build.sh
=> Installing app's npm packages, then building Meteor app bundle...

(stuff deleted)

Step 1/7 : FROM node:12.18.4
 ---> 28faf336034d
Step 2/7 : WORKDIR /radgrad
 ---> Running in b7ac0d5db543
Removing intermediate container b7ac0d5db543
 ---> 1a206d81b65a
Step 3/7 : COPY . /radgrad
 ---> edd67610c60e
Step 4/7 : RUN cd /radgrad/programs/server && npm install --unsafe-perm
 ---> Running in 97db0fb25f8c

(stuff deleted)

Removing intermediate container 97db0fb25f8c
 ---> 27d559ab99b7
Step 5/7 : EXPOSE 80
 ---> Running in 8da236f19868
Removing intermediate container 8da236f19868
 ---> 0abffad25026
Step 6/7 : EXPOSE 8888
 ---> Running in 1d356c3ea524
Removing intermediate container 1d356c3ea524
 ---> a5387df2a689
Step 7/7 : CMD ["node", "main.js"]
 ---> Running in 90e38cb8fd46
Removing intermediate container 90e38cb8fd46
 ---> c247633a9816
Successfully built c247633a9816
Successfully tagged radgrad:latest
=> Deleting all temporary files...
=> Docker build complete!
=> Use the 'docker image ls' command to check that the 'radgrad' image was successfully generated
 $

```

The result of the build will be a new Docker image named `radgrad:latest`.

Once the script has finished running, you can confirm that the image has been successfully created by invoking the `docker image ls` command.

## Publish the Image to DockerHub

First, make sure that your DockerHub account is a member of the [RadGrad DockerHub organization](https://hub.docker.com/orgs/radgrad).

Second, determine the new version number you'll associate with your image.  Use [https://hub.docker.com/r/radgrad/radgrad/tags](https://hub.docker.com/r/radgrad/radgrad/tags) to determine the current DockerHub version number associated with RadGrad.

You'll want to increment the major, minor, or bugfix component of the current version number to get the new version number.

 Third, invoke the docker tag command to attach the new version number. For example, here is the command to tag the newly built image with the new version number 2.0.12:

 ```shell
 $ docker tag radgrad:latest radgrad/radgrad:2.0.12
 ```

 Fourth, publish the tagged image to DockerHub. To do this, login to your DockerHub account by invoking the `docker login` command.

 Then push the image to the radgrad organization on DockerHub by invoking the `docker push` command. Here's an example of pushing the image that's been tagged with the new version number 2.0.12:

 ```shell
 $ docker push radgrad/radgrad:2.0.12
 The push refers to repository [docker.io/radgrad/radgrad]
 274a938dfe74: Pushed
 c447352fa851: Pushed
 df9fbba33a0d: Pushed
 be0fb77bfb1f: Layer already exists
 63c810287aa2: Layer already exists
 2793dc0607dd: Layer already exists
 74800c25aa8c: Layer already exists
 ba504a540674: Layer already exists
 81101ce649d5: Layer already exists
 daf45b2cad9a: Layer already exists
 8c466bf4ca6f: Layer already exists
 2.0.12: digest: sha256:b0299638d1528390399a43fff74f71f397780e70d5f4432218cb5c12d7cf0d66 size: 2636
 ```

 ## Update the RadGrad Docker Compose .env file

 Once the image containing the new version of RadGrad is pushed to DockerHub, you can now update the Docker Compose .env file in the radgrad-docker repository to indicate that future installations of RadGrad should use this new image.

 To do this, checkout the  [radgrad-docker repository](https://github.com/radgrad/radgrad-docker) from GitHub. You must have commit privileges to this repo.

 Next, edit the .env file.  The first section of the file specifies the version of the image file. A recent version looks like this:

 ```
RADGRAD_IMAGE=radgrad/radgrad:2.0.1
```

Edit this file to update the version number associated with your service to its new version number.

Commit this change to GitHub.

## Create a new opq-docker release

Now it is time to document your update. We do this by making an [radgrad2 release](https://github.com/radgrad/radgrad-docker/releases).

Please name your release as a date in YYYY-MM-DD format. Use the description field to briefly describe the updates in this release.

If you now want to deploy your new release, continue to the next section.
