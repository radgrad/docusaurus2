---
title: settings.json
---

## Overview

Meteor supports the use of a settings file to store configuration setting. Meteor Chef provides a nice tutorial called [Making use of settings.json](https://blog.meteor.com/the-meteor-chef-making-use-of-settings-json-3ed5be2d0bad). If you are not familiar with settings files, this is a good place to start.

In RadGrad, the settings file is used to specify the data to be used to initialize the database (if the database is currently empty), certain RadGrad parameters (such as the point values for levels), and external service parameters and keys (such as for CAS, Cloudinary, MailGun, and Monti APM).

RadGrad supports separate settings files for development and deployment.  For development, the settings file in [config/settings.development.json](https://github.com/radgrad/radgrad2/blob/master/config/settings.development.json) is loaded when running the script [meteor npm run start](https://github.com/radgrad/radgrad2/blob/master/app/package.json#L6).

Sometimes, individual developers may wish to create their own settings.development.json files to facilitate their current development tasks. To support this, developers can create a (git ignored) top-level directory called "custom" and put their own modified version of settings.development.json inside it.  Then, [meteor npm run start-custom](https://github.com/radgrad/radgrad2/blob/master/app/package.json#L6) will invoke RadGrad with that settings file. Since the directory is git-ignored, no other developers will see this custom settings.development.json file, and so multiple developers can use that same start-custom command to get their own customized run-time configuration of RadGrad.

The settings file used for production is called settings.js, and is located in the [app/.deploy](https://github.com/radgrad/radgrad2/tree/master/app/.deploy).  The settings.js file used for production will contain credentials for external services, and so is git-ignored.  Contact Philip if you need to deploy to production so he can provide you with credential values.

## Settings file structure

In Meteor, all fields in the settings file are available on the server only, unless the field is a subfield of a top-level field called "public", in which case it is available on both the server and the client.  Here is a summary of the supported fields in RadGrad settings files.

### Public fields

The following table lists the public fields, which provides values that are available to the server and to the client:

| Public Field |  Description |
| -------------| ------------ |
cas | Client-side CAS settings for login
cloudinary | Credentials for Cloudinary image service
admin | Admin email address and how credentials are specified
level | Level criteria. <br/> *Why is this public?*
RadGrad | Various RadGrad settings. <br/>*Why are these public? Why have a "RadGrad" subsection?*
databaseRestoreFileName | File used to initialize empty database. <br/>*Why is this public?*
appLogging | *Is this still needed? Why is this public?*
fixUserInteractions | *Is this still needed? Why is this public?*

### Server-only fields

The following table lists the non-public fields, which are values available only to the server:

| Server-only Field | Description |
| ----------------- | ----------- |
cas | Server-side CAS configuration information. <br/>*Does this ever differ from public field values? If not, can we get rid of it?*
env | Environment variables, including MAIL_URL.
monti | Credentials for sending run-time data to Monti APM


