---
title: Reset the database
---

It is often useful to restart RadGrad with a new database. This involves:

  1. Stopping the current RadGrad service.
  2. Dropping the MongoDB RadGrad database.
  3. Edit the settings.json file to point to the new database to load on startup.
  4. Update the settings in mup and restart the RadGrad service.

## 1. Stop RadGrad

First, stop the RadGrad service:

```shell
mup stop
```

Sample invocation and results:

```shell
app/.deploy $ mup stop

Started TaskList: Stop Meteor
[radgrad2.ics.hawaii.edu] - Stop Meteor
[radgrad2.ics.hawaii.edu] - Stop Meteor: SUCCESS
```

## 2. Make backup of current database

:::warning
The following command, although taken straight from the meteor up documentation (http://meteor-up.com/docs.html#backup-and-restore), did not work for me:

```shell
ssh root@host "docker exec mongodb mongodump -d meteor --archive --gzip" > dump.gz
```

Where "root@host" is replaced by the one appropriate for your instance, such as "radgrad@radgrad2.ics.hawaii.edu" or "root@radgrad-comp-eng.design".
:::

So, to make a backup, you should login as an administration and use the "dump database" option.

## 3. Drop database

Next, drop the database by invoking this command:

```shell
ssh radgrad@radgrad2.ics.hawaii.edu 'docker exec mongodb mongo radgrad --eval "db.dropDatabase();"'
```

If you are not deploying the ICS instance of RadGrad, then you need to substitute a different user for `radgrad@radgrad2.ics.hawaii.edu` in the above command.

For example, in the case of the Computer Engineering instance, the user is `root@radgrad-comp-eng.design`.

In either case, you will be prompted for the associated password in order to complete the ssh login process and execute the drop database command.

Sample invocation and results:

```shell
app/.deploy $ ssh radgrad@radgrad2.ics.hawaii.edu 'docker exec mongodb mongo radgrad --eval "db.dropDatabase();"'
MongoDB shell version v3.4.1
connecting to: mongodb://127.0.0.1:27017/radgrad
MongoDB server version: 3.4.1
{ "dropped" : "radgrad", "ok" : 1 }
```

## 4. Edit settings

Presumably you are dropping the current database in order to load a new snapshot of the database.

To do this, edit the app/.deploy/settings.json file to specify the new database.

This usually involves changing the value of the field "databaseRestoreFileName".

## 5. Deploy with updated settings

Next, invoke mup deploy to rebuild and redeploy RadGrad.

```shell
mup deploy
```

Sample invocation and results:

```shell
app/.deploy $ $ mup deploy
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

app/.deploy $
```

## 6. Check status of deployment through logs

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
[radgrad2.ics.hawaii.edu]Defining admin radgrad@hawaii.edu with password JZiOl550tBtMuHz0UzNGZEC
[radgrad2.ics.hawaii.edu]Invoking loadDatabase
[radgrad2.ics.hawaii.edu]Monti APM: Successfully connected
```

## 7. Run mup logs, record new admin password!

:::important Record new admin password!
Note that when you start up the system with a new database, a new admin password will be generated and the log file will be the only place it is made available.  The log is only available until the next deploy of the system, so be sure to invoke `mup logs`, find the log message with the new admin password, and record it someplace safe.
:::







