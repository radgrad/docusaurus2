---
title: Docker management
---

Here are some helpful commands for Docker management

## Bring all services down

If you need to bring all services down for any reason, just change into the top-level directory (where the `docker-compose.yml` file is), and invoke `docker-compose down`:

```shell
$ docker-compose down
Removing radgrad-docker_radgrad_1 ... done
Removing radgrad-docker_mongo_1   ... done
Removing network radgrad-docker_default
```
## Bring all services up

To bring all services up, just invoke the `docker-compose-run.sh` script:

```shell
$ ./docker-compose-run.sh
Creating network "radgrad-docker_default" with the default driver
Creating radgrad-docker_mongo_1           ... done
Creating radgrad-docker_radgrad_1 ... done
```

## Update a single service

We will occasionally make new releases of RadGrad or need a new release of MongoDB.

On your production system, change into the `radgrad-docker` directory and pull the latest files by invoking:

```shell
git pull origin master
```

Then, redeploy RadGrad with the latest changes by invoking the `docker-compose-run.sh` script:

```shell
$ ./docker-compose-run.sh
radgrad-docker_mongo_1 is up-to-date
Recreating radgrad-docker_radgrad_1 ... done
```
## Prune containers and images

As noted in the [Docker chapter on prune unused Docker objects](https://docs.docker.com/config/pruning/), when you install new Docker images, the old ones are not automatically deleted. Over time, unused and out of date Docker objects can consume significant amounts of disk space.

To determine if you have unused Docker containers, you can run the `docker ps -a` command, which lists both running and stopped containers. Here is a sample run of that command:

```shell
$ docker ps -a
CONTAINER ID        IMAGE                                      COMMAND                  CREATED             STATUS              PORTS                                                                                                                                                                       NAMES
a14bc92c53a1        openpowerquality/health:1.0.1              "python3 -u health.py"   3 hours ago         Up 3 hours                                                                                                                                                                                      opq-docker_health_1
714ce76b75bb        openpowerquality/mauka:1.0.7               "python3 mauka/opq_m…"   3 hours ago         Up 3 hours          8911/tcp, 9881/tcp, 9884/tcp, 0.0.0.0:9882-9883->9882-9883/tcp, 9899/tcp, 0.0.0.0:12000->12000/tcp                                                                          opq-docker_mauka_1
c9044a3a2089        certbot/certbot                            "/bin/sh -c 'trap ex…"   3 days ago          Up 3 days           80/tcp, 443/tcp                                                                                                                                                             opq-docker_certbot_1
95e159b49a64        nginx:1.15-alpine                          "/bin/sh -c 'while :…"   3 days ago          Up 3 days           0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp                                                                                                                                    opq-docker_nginx_1
402fe9b16200        openpowerquality/makai:1.0.6               "/bin/bash /build/bi…"   3 days ago          Up 13 hours         0.0.0.0:8194->8194/tcp, 0.0.0.0:8196->8196/tcp, 127.0.0.1:8080->8080/tcp, 127.0.0.1:9884->9884/tcp, 127.0.0.1:9899->9899/tcp, 0.0.0.0:9880-9881->9880-9881/tcp, 10000/tcp   opq-docker_makai_1
741fe724f9ac        openpowerquality/view:1.0.1                "node main.js"           3 days ago          Up 3 days           80/tcp, 0.0.0.0:8888->8888/tcp                                                                                                                                              opq-docker_view_1
00e9a674810e        mongo:4.0.5                                "docker-entrypoint.s…"   3 days ago          Up 3 days           127.0.0.1:27017->27017/tcp                                                                                                                                                  opq-mongo
e1cc09f69510        openpowerquality/box-update-server:1.0.3   "python3 box_update_…"   3 days ago          Up 3 days           0.0.0.0:8151->8151/tcp                                                                                                                                                      opq-docker_boxupdateserver_1
```

In this sample output, all containers are current and running. Should you discover stopped and out-of-date containers, you can run the following commands to get rid of both out of date containers and images.

To prune containers:

```shell
$ docker container prune
WARNING! This will remove all stopped containers.
Are you sure you want to continue? [y/N] y
Total reclaimed space: 0B
```

To prune images:

```shell
$ docker image prune -a
  WARNING! This will remove all images without at least one container associated to them.
  Are you sure you want to continue? [y/N] y
  Deleted Images:
  untagged: mongo:latest
  untagged: mongo@sha256:c4fe6705e1dffb91d3fdb4f2c00f58a5ce9b82dd010bce33e250d320518047b5
  deleted: sha256:a3abd47e8d61c923dd1561ad3720af4d948627c524a53d321c2a5bd6f6467060
  deleted: sha256:9c04aae8ecf33b57edf8893881b42d7483a4ef19e871ed9687fbe40468ede99e
  deleted: sha256:eb8c65e58c7f29789466d3d88b4961b98a4674bb0b892745d22cda11c8ce79b2
  deleted: sha256:be8087eddc5150dbd849a4ba7870ddf01125130e0b4f700a363f0b079553fa64
  untagged: bak-mongo:latest

  Total reclaimed space: 394.4MB
```
