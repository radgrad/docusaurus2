---
title: mup commands
---

Here are some useful commands for managing a RadGrad installation using mup.

All of these commands assume you are in the app/.deploy directory.

## Stop RadGrad

To stop the RadGrad service without stopping Mongo, invoke mup stop:

```shell
app/.deploy $ mup stop

Started TaskList: Stop Meteor
[radgrad2.ics.hawaii.edu] - Stop Meteor
[radgrad2.ics.hawaii.edu] - Stop Meteor: SUCCESS
app/.deploy $
```

## Start RadGrad

To start the RadGrad service after it's been stopped, invoke mup start:

```shell
app/.deploy $ mup start

Started TaskList: Start Meteor
[radgrad2.ics.hawaii.edu] - Start Meteor
[radgrad2.ics.hawaii.edu] - Start Meteor: SUCCESS
[radgrad2.ics.hawaii.edu] - Verifying Deployment
[radgrad2.ics.hawaii.edu] - Verifying Deployment: SUCCESS
app/.deploy $
```

## List containers

To see the status of your deployment containers, use ssh in conjunction with the docker ps command:

```shell
app/.deploy $ ssh radgrad@radgrad2.ics.hawaii.edu 'docker ps'
CONTAINER ID        IMAGE                                    COMMAND                  CREATED             STATUS              PORTS                                      NAMES
ccf9e956152d        mup-radgrad:latest                       "/bin/sh -c 'exec $M…"   2 minutes ago       Up 2 minutes        80/tcp, 3000/tcp                           radgrad
65f89656e468        jrcs/letsencrypt-nginx-proxy-companion   "/bin/bash /app/entr…"   20 hours ago        Up 20 hours                                                    mup-nginx-proxy-letsencrypt
6ad914fdbeb3        jwilder/nginx-proxy                      "/app/docker-entrypo…"   20 hours ago        Up 20 hours         0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp   mup-nginx-proxy
7627b9bca4e2        mongo:3.4.1                              "/entrypoint.sh mong…"   45 hours ago        Up 45 hours         127.0.0.1:27017->27017/tcp                 mongodb
~/
app/.deploy $
```

This also lists the names of the containers: radgrad, mongodb, mup-nginx-proxy-letsencrypt, and mup-nginx-proxy.

## Logs

To see logs, use ssh in conjunction with the [docker logs](https://docs.docker.com/engine/reference/commandline/logs/) command. For example:

```shell
$ ssh radgrad@radgrad2.ics.hawaii.edu 'docker logs --tail 5  mongodb'
2020-10-02T20:08:20.276+0000 I NETWORK  [conn97] received client metadata from 172.17.0.5:41808 conn97: { driver: { name: "nodejs", version: "3.6.2" }, os: { type: "Linux", name: "linux", architecture: "x64", version: "4.15.0-118-generic" }, platform: "'Node.js v12.16.1, LE (legacy)" }
2020-10-02T20:08:20.477+0000 I NETWORK  [thread1] connection accepted from 172.17.0.5:41810 #98 (5 connections now open)
2020-10-02T20:08:20.477+0000 I NETWORK  [conn98] received client metadata from 172.17.0.5:41810 conn98: { driver: { name: "nodejs", version: "3.6.2" }, os: { type: "Linux", name: "linux", architecture: "x64", version: "4.15.0-118-generic" }, platform: "'Node.js v12.16.1, LE (legacy)" }
2020-10-02T20:08:20.479+0000 I NETWORK  [thread1] connection accepted from 172.17.0.5:41812 #99 (6 connections now open)
2020-10-02T20:08:20.481+0000 I NETWORK  [conn99] received client metadata from 172.17.0.5:41812 conn99: { driver: { name: "nodejs", version: "3.6.2" }, os: { type: "Linux", name: "linux", architecture: "x64", version: "4.15.0-118-generic" }, platform: "'Node.js v12.16.1, LE (legacy)" }
```
## Update settings

If you want to restart RadGrad with a changed settings.json or mup.js file, here's how to do it:

```shell
$ mup stop
$ mup reconfig
$ mup start
```

## List collections

To see a list of all collections in the RadGrad database:

```shell
$ ssh radgrad@radgrad2.ics.hawaii.edu 'docker exec mongodb mongo radgrad --eval "printjson(db.getCollectionNames())"'
MongoDB shell version v3.4.1
connecting to: mongodb://127.0.0.1:27017/radgrad
MongoDB server version: 3.4.1
[
	"AcademicPlanCollection",
	"AcademicTermCollection",
	"AcademicYearInstanceCollection",
	"AdminProfileCollection",
	"AdvisorLogCollection",
	"AdvisorProfileCollection",
	"CareerGoalCollection",
	"CourseCollection",
	"CourseInstanceCollection",
	"DesiredDegreeCollection",
	"FacultyProfileCollection",
	"FavoriteAcademicPlanCollection",
	"FavoriteCareerGoalCollection",
	"FavoriteInterestCollection",
	"FeedCollection",
	"FeedbackInstanceCollection",
	"HelpMessageCollection",
	"IceSnapshotCollection",
	"InterestCollection",
	"InterestTypeCollection",
	"MentorAnswerCollection",
	"MentorProfileCollection",
	"MentorQuestionCollection",
	"OpportunityCollection",
	"OpportunityInstanceCollection",
	"OpportunityTypeCollection",
	"PageInterestCollection",
	"PageInterestsDailySnapshotCollection",
	"PlanChoiceCollection",
	"PublicStatsCollection",
	"ReviewCollection",
	"SlugCollection",
	"StudentParticipationCollectionCollection",
	"StudentProfileCollection",
	"TeaserCollection",
	"UserInteractionCollection",
	"VerificationRequestCollection",
	"cronHistory",
	"meteor_accounts_loginServiceConfiguration",
	"role-assignment",
	"roles",
	"users"
]
$
```

## Drop all collections

Needs testing.  Stop radgrad first.

```shell
mongo [database] --eval "db.getCollectionNames().forEach(function(n){db[n].remove()});"

```



