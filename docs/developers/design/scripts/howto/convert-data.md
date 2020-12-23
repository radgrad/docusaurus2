---
title: How to convert a RadGrad1 database to RadGrad2
sidebar_label: Convert RadGrad1 data to RadGrad2
---

This convert script converts a RadGrad1 dump to RadGrad2 format.  This involves the following:

* slight structural modifications to certain collections
* deletion of several collections no longer used in RadGrad2.
* definition of several (empty) collections newly available in RadGrad2.
* Initialization of the UserInteractionCollection to zero documents.

To use this script, do the following:

* Create three directories named "custom" so that their contents won't be uploaded to github (all directories named custom are gitignored):
    * radgrad2/scripts/data/custom
    * radgrad2/app/private/database/custom
    * radgrad2/custom

* Download a dump file from RadGrad1 into radgrad2/scripts/data/custom. Let's call it 2020-11-01.json.

* Edit scripts/package.json so that the "convert" script references the RadGrad1 data file name and then outputs the converted RadGrad2 file name into the radgrad2/app/private/database/custom directory.

* Put a copy of config/settings.development.json into radgrad2/custom, and edit the databaseRestoreFileName field to refer to the converted RadGrad2 file name.

Now you are ready to run (or re-run) the conversion script.  First, invoke `npm run convert` to recompile the script and then invoke it on your RadGrad1 file and produce the RadGrad2 database:

```
$ npm run convert

> radgrad2-scripts@1.0.0 convert /Users/philipjohnson/github/radgrad/radgrad2/scripts
> npm run tsc && node js/convert-dump.js data/custom/2019-11-01-08-42-13.json ../app/private/database/custom/convert-test.json


> radgrad2-scripts@1.0.0 tsc /Users/philipjohnson/github/radgrad/radgrad2/scripts
> tsc

Convert Dump: data/custom/2019-11-01-08-42-13.json --> ../app/private/database/custom/convert-test.json
```

To test the conversion, in a separate console, cd to the radgrad2/app directory, and invoke `meteor reset; meteor npm run start-custom`. This will clean the development DB, and invoke your custom settings file that specifies the location of your converted DB:

```
$ meteor reset; meteor npm run start-custom
Project reset.

> radgrad2@ start-custom /Users/philipjohnson/github/radgrad/radgrad2/app
> meteor --no-release-check --exclude-archs web.browser.legacy,web.cordova --settings ../custom/settings.development.json --port 3200

[[[[[ ~/github/radgrad/radgrad2/app ]]]]]

=> Started proxy.
=> Started MongoDB.
I20201221-17:05:01.091(-10)? Monti APM: completed instrumenting the app
I20201221-17:05:01.345(-10)? Defining ADMIN radgrad@hawaii.edu with password foo
I20201221-17:05:01.377(-10)? Loading database from file database/custom/convert-test.json, dumped Invalid date.
I20201221-17:05:01.479(-10)? Defining 104 AcademicTermCollection documents.
I20201221-17:05:02.256(-10)? Have 104 documents.
I20201221-17:05:02.256(-10)? Defining 53 HelpMessageCollection documents.
I20201221-17:05:02.452(-10)? Have 53 documents.
I20201221-17:05:02.453(-10)? Defining 3 InterestTypeCollection documents.
I20201221-17:05:02.633(-10)? Have 3 documents.
I20201221-17:05:02.633(-10)? Defining 78 InterestCollection documents.
I20201221-17:05:03.240(-10)? Have 78 documents.
I20201221-17:05:03.240(-10)? Defining 18 CareerGoalCollection documents.
I20201221-17:05:03.658(-10)? Have 18 documents.
I20201221-17:05:03.658(-10)? Defining 22 AcademicPlanCollection documents.
I20201221-17:05:04.618(-10)? Have 22 documents.
I20201221-17:05:04.619(-10)? Defining 0 AdminProfileCollection documents.
I20201221-17:05:04.619(-10)? Have 1 documents.
 :
 :
I20201221-17:10:50.050(-10)? Defining 179 FavoriteOpportunityCollection documents.
I20201221-17:10:50.704(-10)? Have 179 documents.
I20201221-17:10:50.705(-10)? Finished loading database.
```

The above tests to ensure that the database loaded successfully.