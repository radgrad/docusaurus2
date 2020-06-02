---
title: Installation
sidebar_label: Installation
---

First, download and install [Meteor](https://www.meteor.com/). 

Second, download the RadGrad source code from [https://github.com/radgrad/radgrad2](https://github.com/radgrad/radgrad2).

Next, cd to the radgrad2/app/ directory and invoke npm:

```
app$ npm install
```

This will download and install the third-party libraries required to run this system.

To make sure the database starts from an empty state, run:

```
app$ meteor reset
```

To run the system, invoke this command:

```
app$ meteor npm run start
```

This will invoke the "start" script in [package.json](https://github.com/radgrad/radgrad2/blob/master/app/package.json), which initializes the database (if empty) with sample data.  Go to [http://localhost:3200](http://localhost:3200) to confirm that the system is running:


<img src="/img/radgrad2/developer/home-page.png" width="100%"/>
