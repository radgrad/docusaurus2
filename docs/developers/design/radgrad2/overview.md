---
title: Overview of the radgrad2 repository
sidebar_label: Overview
---

The RadGrad2 repository contains the source code for the RadGrad2 Meteor application, as well as a set of scripts used for data manipulation.

It is available at [https://github.com/radgrad/radgrad2](https://github.com/radgrad/radgrad2).

You will need to ask a RadGrad administrator for write permissions to this repository in order to start development.

## Directory overview

<img src="/img/design/radgrad2/radgrad2-repo.png" />

The radgrad2 repository contains the following top-level directories:

`.github/`: contains issue and review templates, and the github actions to perform continuous integration.

`app/`: the Meteor application source code.

`archive/`: a kind of "Trash": a place for developers to stash files that they are pretty sure (but not *completely* sure) they will never need again.  Occasionally we will garbage collect and delete files from this directory.

`config/`: contains settings files that are read in by the RadGrad Meteor application upon startup.

`scripts/`: contains scripts for retrieving data from STAR, converting data from RadGrad1 to RadGrad2, and so forth.

In many respects, the radgrad2 repository has a similar organization to [meteor-application-template-react](https://ics-software-engineering.github.io/meteor-application-template-react/). If you are not already familiar with this system, it will be helpful to watch [its screencasts](https://ics-software-engineering.github.io/meteor-application-template-react/#screencasts).

