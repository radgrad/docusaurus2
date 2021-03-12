---
title: settings.json
---

## Overview

RadGrad uses a [Meteor settings file](https://docs.meteor.com/api/core.html#Meteor-settings) to specify important credentials and configuration settings. The radgrad/config directory contains a [settings.development.json](https://github.com/radgrad/radgrad2/blob/master/config/settings.development.json) with example settings for developers. The radgrad/app/.deploy directory contains a [settings.sample.json](https://github.com/radgrad/radgrad2/blob/master/app/.deploy/settings.sample.json) file with example settings for production deployments.

Here is a recent version of settings.development.json:

```
{
  "cas": { "baseUrl": "https://cas-test.its.hawaii.edu/cas/", "autoClose": true },
  "databaseRestoreFileName": "database/snapshot/2021-02-27-09-22-37.json",
  "termsAndConditionsFileName": "terms-and-conditions/terms-and-conditions.ics.md",
  "env": { "MAIL_URL": "smtps://changeme:changeme@smtp.mailgun.org:465" },

  "public": {
    "cas": {"loginUrl": "https://cas-test.its.hawaii.edu/cas/login", "serviceParam": "service", "popupWidth": 810, "popupHeight": 610 },
    "development": true,
    "cloudinary": { "cloud_name": "radgrad", "upload_preset": "CHANGEME" },
    "level": {
      "six": { "plannedICE": { "i": 100, "c": 100, "e": 100 }, "earnedICE": {"i": 100, "c": 100, "e": 100}, "reviews": 6 },
      "five": { "plannedICE": { "i": 100, "c": 100, "e": 100 }, "earnedICE": { "i": 80, "c": 80, "e": 80 }, "reviews": 1 },
      "four": { "plannedICE": {"i": 100, "c": 100, "e": 100}, "earnedICE": {"i": 30, "c": 36, "e": 30}, "reviews": 0},
      "three": {"plannedICE": {"i": 0, "c": 0, "e": 0}, "earnedICE": {"i": 1, "c": 24, "e": 1}, "reviews": 0 },
      "two": {"plannedICE": {"i": 0, "c": 0, "e": 0}, "earnedICE": {"i": 0, "c": 12, "e": 0}, "reviews": 0 }
    },
    "quarterSystem": false,
    "adminProfile": { "username": "radgrad@hawaii.edu", "firstName": "RadGrad", "lastName": "Admin" },
    "emailDomain": "hawaii.edu",
    "newsletterFrom": "RadGrad Administrator <donotreply@mail.gun.radgrad.org>",
    "tagline": "Developing awesome computer scientists, **one** graduate at a time.",
    "landingSubject": "Computer science",
    "instanceName": "UHM/ICS",
    "userGuideURL": "https://www.radgrad.org/docs/users/"
  }
}
```

Per the Meteor implementation, all fields not inside the "public" field are available only on the server side. Fields inside the "public" field are available on both client and server side. So, the first four fields in the above example are only available on the client side, while the remaining are available on both client and server side.

## Server-only settings

### cas

The University of Hawaii RadGrad instances must support CAS authentication in order for users to login using their UH credentials (which also authenticates them as UH personnel.)

The server-side "cas" field provides the url to the CAS server. There are two possible values (at UH):
  * "https://cas-test.its.hawaii.edu/cas/" (during development)
  * "https://authn.hawaii.edu/cas/" (for production).

Note that use of the production CAS server requires you to first contact ITS and have them add the URL to your RadGrad instances as an authorized site from which to request CAS authentication.

The test CAS server can be used by anyone, but not all UH logins are supported. You may need to contact ITS to ask them to synchronize logins of interest to the test server.

### databaseFileRestoreName

When RadGrad starts up, it checks to see if its database is empty. If so, it will try to load a fixture file containing definitions for collections and documents from the file path specified by the databaseFileRestoreName variable.

Note that various checks are made while loading the file, and if this load is unsuccessful, then an error is printed to the console.

This file path is relative to the radgrad2/app/private directory.

### termsAndConditionsFileName

It is useful for all users to sign a terms and conditions agreement for RadGrad. We recognize that appropriate terms and conditions could vary among sites, and so this field provides a path a file containing the terms and conditions to be displayed.

This file path is relative to the radgrad2/app/private directory.

### env

This provides a set of fields with environment variables to be set on the server-side prior to running the server.

Currently, the only environment variable needed by RadGrad is MAIL_URL. This is used by Meteor to send email, such as the Newsletter.

For more information on MAIL_URL, see the [Meteor Email API documentation](https://docs.meteor.com/api/email.html).

## Client and Server settings

These settings are available on both the client and server sides of the system.

### cas

This field contains settings to support CAS popup in the client browser. As before, there are two relevant settings (for UH CAS authentication):

  * "https://cas-test.its.hawaii.edu/cas/login" (during development)
  * "https://authn.hawaii.edu/cas/login" (for production)

### development

This field should be set to "true" or "false".  If true, then a default password is specified for all users. This is obviously only for local development purposes.

If you are deploying to a public site, then development should be set to "false".  This will enable the regular authentication mechanisms (such as CAS).  It also means that the RadGrad admin password will be randomly generated each time the database is initialized from scratch and printed to the console.

### cloudinary

RadGrad uses Cloudinary to upload, resize, compress, store, and serve profile pictures. This field contains the Cloudinary credentials.

### level

This field contains settings used to determine the thresholds for students to achieve the six levels in RadGrad.

### quarterSystem

RadGrad supports both a semester system and a quarter system. Set quarterSystem to "false" to enable semester-based academic years.

### admin Profile

This field specifies the email address of the admin user.

### emailDomain

This attribute does not appear to be used any longer.

### newsletterFrom

This attribute is used to fill out the From: field in newsletter emails.

### tagline

This attribute is used to indicate the tagline on the landing page.

### landingSubject

This attribute is used to indicate the subject area on the landing page.

### instanceName

This attribute is used to indicate the instance name on the landing page.

### userGuideURL

This attribute provides a URL to the User Guide for this instance of RadGrad. At present, there is only one User Guide that is shared across all instances.

