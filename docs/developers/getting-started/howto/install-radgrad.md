---
title: Install RadGrad
---

First, download and install [Meteor](https://www.meteor.com/). 

Second, download the RadGrad source code from [https://github.com/radgrad/radgrad2](https://github.com/radgrad/radgrad2).

Next, cd to the `radgrad2/app/` directory and invoke `meteor npm install`:

```
radgrad2/app $ meteor npm install
```

This will download and install the third-party libraries required to run this system. If you are not in the `app` directory and you run `meteor npm install`. You will see something like:
```shell script
radgrad2 $ meteor npm install
npm WARN saveError ENOENT: no such file or directory, open 'radgrad2\package.json'
npm WARN enoent ENOENT: no such file or directory, open 'radgrad2\package.json'
npm WARN radgrad2 No description
npm WARN radgrad2 No repository field.
npm WARN radgrad2 No README data
npm WARN radgrad2 No license field.

up to date in 0.426s
found 0 vulnerabilities

radgrad2 $
```

To make sure the database starts from an empty state, run:

```
radgrad2/app$ meteor reset
Project reset.
radgrad2/app $
```

To run the system, invoke this command:

```
radgrad2/app$ meteor npm run start

> radgrad2@ start radgrad2/app
> cross-env METEOR_NO_RELEASE_CHECK=1 meteor --settings ../config/settings.development.json --port 3200

[[[[[ radgrad2/app ]]]]]

=> Started proxy.
=> Started MongoDB.
I20200611-08:48:54.054(-10)? Defining admin radgrad@hawaii.edu with password foo
I20200611-08:48:54.136(-10)? Loading database from file database/snapshot/2020-01-24-11-37-22.json, dumped 5 months ago.
I20200611-08:48:54.137(-10)? Defining 29 AcademicTermCollection documents.
I20200611-08:48:54.641(-10)? Have 29 documents.
[snip]
I20200611-08:49:19.985(-10)? Defining 0 FavoriteOpportunityCollection documents.
I20200611-08:49:19.986(-10)? Have 0 documents.
I20200611-08:49:19.986(-10)? Finished loading database.
I20200611-08:49:25.023(-10) (packages\percolate_synced-cron.js:87) SyncedCron: Scheduled "Create/update Ice Snapshot for each student" next run @Fri Jun 12 2020 00:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
I20200611-08:49:25.025(-10) (packages\percolate_synced-cron.js:87) SyncedCron: Scheduled "Run the PublicStats.generateStats method" next run @Fri Jun 12 2020 00:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
I20200611-08:49:25.025(-10) (packages\percolate_synced-cron.js:87) SyncedCron: Scheduled "Run StudentParticipations.upsertEnrollmentData" next run @Fri Jun 12 2020 00:00:00 GMT-1000 (Hawaii-Aleutian Standard Time)
=> Started your app.

=> App running at: http://localhost:3200/
   Type Control-C twice to stop.

```

This will invoke the "start" script in [package.json](https://github.com/radgrad/radgrad2/blob/master/app/package.json), which initializes the database (if empty) with sample data.  Go to [http://localhost:3200](http://localhost:3200) to confirm that the system is running:


<img src="/img/radgrad2/developer/home-page.png" width="100%"/>
