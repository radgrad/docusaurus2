---
id: docusaurus
title: Docusaurus
sidebar_label: Docusaurus
---

This website is built using [Docusaurus 2](https://v2.docusaurus.io/).

### Developer privileges

To do development on this site, you must have commit/push privileges to radgrad/radgrad.github.io and radgrad/docusaurus2 repositories on GitHub.  You can obtain those privileges from Philip Johnson.

Note: there are two repos: docusaurus (which holds the sources used to build the current radgrad.org site), and docusaurus2 (which holds the sources to build this site.)

### Installation

Download the sources, install NPM, then run:
```
$ npm install
```

### Local Development

To start up a local version of the website with automatic rebuilding on changes, run:

```
$ npm run start
```

### Deployment

First, set GIT_USER to your GitHub user name. Then, to build and deploy the site to jci-fellows.github.io, invoke:

```
$ npm run deploy
```

Note that this command does not commit your changes to the radgrad/docusaurus2 repository, so be sure to push those changes as well.
