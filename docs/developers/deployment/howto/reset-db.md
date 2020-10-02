---
title: Reset the database
---

It is often useful to restart RadGrad with a new database. This involves:

  1. Stopping the current RadGrad service.
  2. Dropping the MongoDB RadGrad database.
  3. Edit the settings.json file to point to the new database to load on startup.
  4. Update the settings in mup and restart the RadGrad service.

## Stop RadGrad

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

## Drop database

Second, drop the database by invoking this command:

```shell
ssh radgrad@radgrad2.ics.hawaii.edu 'docker exec mongodb mongo radgrad --eval "db.dropDatabase();"'
```

Sample invocation and results:

```shell
app/.deploy $ ssh radgrad@radgrad2.ics.hawaii.edu 'docker exec mongodb mongo radgrad --eval "db.dropDatabase();"'
MongoDB shell version v3.4.1
connecting to: mongodb://127.0.0.1:27017/radgrad
MongoDB server version: 3.4.1
{ "dropped" : "radgrad", "ok" : 1 }
```

## Edit settings

Third, edit the app/.deploy/settings.json file to specify the new database.

This usually involves changing the value of the field "databaseRestoreFileName".

## Restart with updated settings

Finally, invoke mup reconfig to reload the updated settings specifying the new database, and then restart RadGrad:

```shell
mup reconfig
```

Sample invocation and results:

```shell
app/.deploy $ mup reconfig

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







