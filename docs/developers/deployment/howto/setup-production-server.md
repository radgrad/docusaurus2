---
title: Setup a production server
sidebar_label: Setup production server
---

To set up a server for use in production, please do the following tasks:

## Install Docker and Docker Compose

First, install Docker and Docker Compose on your production server.

Please consult the [Docker installation documentation](https://docs.docker.com/install/) and the [Docker Compose installation documentation](https://docs.docker.com/compose/install/) for instructions.

:::note

TO install Docker on Ubuntu 18, I followed [these instructions](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04).

Note that you need to setup the user to not need sudo for docker.

I followed the standard docker-compose installation instructions.
:::

## Clone radgrad-docker

Next, clone the [radgrad-docker repository](https://github.com/radgrad/radgrad-docker) with `git clone https://github.com/radgrad/radgrad-docker.git`.

## Create config/settings.production.json

Your local radgrad-docker directory contains a subdirectory called "sample-config" containing a sample settings.production.json file called "sample.settings.production.json".

In order for RadGrad to deploy successfully, it expects to a file called "settings.production.json" in a directory named "config".

To setup this directory and file using sample.settings.production.json as a template, execute the following commands:

```shell
$ mkdir config
$ cp -R sample-config/* config
$ mv config/sample.settings.production.json config/settings.production.json
```

:::caution
More details on settings.production.json setup needed.
:::

## Setup MongoDB indexes

When you create a new RadGrad database, it's best to ensure that the indexes are created before any data is accepted.

First, copy the [ensure-indexes.sh](https://github.com/radgrad/radgrad-docker/blob/master/scripts/mongodb/ensure_indexes.sh) and [ensure-indexes.js](https://github.com/radgrad/radgrad-docker/blob/master/scripts/mongodb/ensure_indexes.js) files from opq/mongod to your host machine.

Next, ensure that the MongoDB docker container is running.

Finally, invoke the ensure-indexes.sh script (`./ensure-indexes.sh`)

:::caution
ensure-indexes.js needs to be updated.
:::

The next section continues the documentation of the production server setup process by explaining how to set up HTTPS.
