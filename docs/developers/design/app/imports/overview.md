---
title: Overview of imports/
sidebar_label: Overview
---

The `imports/` directory is the primary location for the RadGrad2 Meteor application code.

## Directory overview

<img src="/img/design/radgrad2/imports.png" />

The imports/ directory contains the following subdirectories:

`api/`: Holds code that defines the "data model" in the form of a set of MongoDB collections. Note that most of this code is "isomorphic": it is designed to be loaded and run on both the client and server sides of the system. In other words, we use the same code to access data on the server side (stored in documents in a MongoDB database server process) as well as to access data on the client-side (stored in documents in the "MiniMongo" database running inside the client browser process.)

`redux/`: Holds the React Redux actions and reducers.

`startup/`: Holds code that is run at startup time.

`typings/`: Holds Typescript definitions for various functions and objects that are used in multiple places throughout the system.

`ui/`: Holds React components that define the user interface.

