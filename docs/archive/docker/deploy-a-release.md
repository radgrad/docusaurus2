---
title: Deploy a release (Docker)
---

A RadGrad release contains two services: RadGrad (the Meteor application), and MongoDB (the backend database system).

Deployment is the process of bringing up these services on a production server.

We utilize [Docker](https://www.docker.com/) to manage deployment.

We publish the Docker Image for the RadGrad service to the [RadGrad organization at DockerHub](https://hub.docker.com/u/radgrad).

:::warning
Windows-based deployment is not supported.
:::

## Bring up services

cd into the radgrad-docker directory, where you should find a script called `docker-compose-run.sh`.  To make it executable, invoke:

```
$ chmod 775 docker-compose-run.sh
```

Invoke it with:

```
$ ./docker-compose-run.sh
```

This will download all the latest official public images for the two RadGrad services, and run them.  The output should look like this:

```
$ ./docker-compose-run.sh
Creating network "opq-docker_default" with the default driver
Pulling mongo (mongo:4.0.5)...
4.0.5: Pulling from library/mongo
7b722c1070cd: Pull complete
5fbf74db61f1: Pull complete
ed41cb72e5c9: Pull complete
7ea47a67709e: Pull complete
778aebe6fb26: Pull complete
3b4b1e0b80ed: Pull complete
844ccc42fe76: Pull complete
eab01fe8ebf8: Pull complete
e5758d5381b1: Pull complete
a795f1f35522: Pull complete
67bc6388d1cd: Pull complete
89b55f4f3473: Pull complete
10886b20b4fc: Pull complete
Pulling radgrad (radgrad/radgrad:2.0.8)...
2.0.8: Pulling from radgrad/radgrad
f189db1b88b3: Pull complete
3d06cf2f1b5e: Pull complete
687ebdda822c: Pull complete
99119ca3f34e: Pull complete
e771d6006054: Pull complete
b0cc28d0be2c: Pull complete
9bbe77ca0944: Pull complete
75f7d70e2d07: Pull complete
f70d7ef53f76: Pull complete
596c5fb5e7e7: Pull complete
cafea2ea58df: Pull complete
```

## Verify installation

Invoke the `docker ps` command to verify that all RadGrad containers are running. It should look similar to this:

```shell
$ docker ps
  CONTAINER ID        IMAGE                   COMMAND                  CREATED             STATUS                        PORTS                        NAMES
  6d0666c48674        certbot/certbot         "/bin/sh -c 'trap ex…"   17 seconds ago      Up 16 seconds                 80/tcp, 443/tcp              radgrad-docker_certbot_1
  a5cb7edeaeff        radgrad/radgrad:2.0.0   "docker-entrypoint.s…"   19 seconds ago      Restarting (1) 1 second ago                                radgrad-docker_radgrad_1
  91e903641fa1        mongo:4.0.5             "docker-entrypoint.s…"   24 seconds ago      Up 19 seconds                 127.0.0.1:27017->27017/tcp   radgrad-mongo

```

In addition, you should also check the RadGrad service by opening up your web browser and going to http://production-server:8888.

## Update to a new release

To update to a new release, cd to the opq-docker directory on your production server and invoke:

```shell
$ git pull origin master
```

This updates the .env file to specify the new version of the RadGrad (or MongoDB) release.

To restart the services with the updated release, invoke:

```shell
$ ./docker-compose-run.sh
```

