---
title: Update to a new major release of Mongo
sidebar_label: Update Mongo
---

In February, 2022, Meteor released a new version (2.6) that necessitated upgrading to a new major version of Mongo (5.0) from our current version (3.1.4).  This was basically impossible to do in an incremental fashion, so we were forced to make a backup of the database, reinstall Mongo from scratch, and redeploy and reinitialize the database. 

This process was sufficiently complicated that it seems useful to document how to do this in case a similar situation occurs in future.

## Make a backup of the database

Login as admin, and use the database management page to download a JSON file containing a dump of the database. 

This is necessary because you will need to delete the deployed database as part of the upgrade procedure.

## Update mup to the latest release

Make sure you are running the latest release of mup:

```
$ npm install mup -g
```

## Shut down the production system

Invoke the following to shutdown the application and MongoDB:

```
$ mup stop
$ mup mongo stop
```

## Delete the MongoDB installation

In the current case, we had to update MongoDB from 3.2 to 5.0.  This was too much of a jump, so the only path was to completely delete the MongoDB installation:

```
$ ssh <user@radgrad-server>
$ rm -rf /opt/mongodb
$ rm -rf /var/lib/mongodb
```

## Redeploy

Edit your settings.json file's "databaseRestoreFileName" field to point to your backup copy of the database.

Edit the mup.js file to specify the appropriate version of MongoDB.

Run the following to redeploy:

```
$ mup setup
$ mup deploy
```

Occasionally `mup setup` will fail. Try one more time, it might succeed on the second try.

Since you are redeploying the database, you will get a new admin password. Be sure to save it when it is printed to the console.