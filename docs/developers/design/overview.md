---
title: Overview of RadGrad2's design
sidebar_label: Overview
---

This chapter provides documentation on the design of RadGrad.

RadGrad is rather complex. We have decided to organize this chapter in a manner that parallels the directory organization of the radgrad2 respository.  This has the following advantages:

 * If you are looking for documentation about a design aspect associated with a specific place in the source code, then it is likely to be found in this chapter at the same location.

 * Reading through this chapter is similar to a guided tour through the source code.

 * As you read through the sections, if there is no subsection corresponding to a subdirectory, then it is likely there is not yet any documentation available for those design elements.

However, there are design elements that are "cross-cutting" and do not fall neatly into a single subdirectory location.  For example, tests are located both throughout the api/ directory hierarchy in addition to the top-level tests/ directory. So, we have a top-level chapter called "Testing" to cover this design concept. Other cross-cutting concerns are Reviews, Deployment, and Documentation, so we've elevated them to their own top-level chapters.

If you run into trouble trying to understand a feature of RadGrad, contact an experienced developer as this may indicate the need for additional documentation.

## The radgrad2 repository

The RadGrad2 repository contains the source code for the RadGrad2 Meteor application, as well as a set of scripts used for data manipulation.

It is available at [https://github.com/radgrad/radgrad2](https://github.com/radgrad/radgrad2).

You will need to ask a RadGrad administrator for write permissions to this repository in order to start development.

### Directory overview

<img src="/img/design/radgrad2/radgrad2-repo.png" />

The radgrad2 repository contains the following top-level directories:

`.github/`: contains issue and review templates, and the github actions to perform continuous integration.

`app/`: the Meteor application source code.

`archive/`: a kind of "Trash": a place for developers to stash files that they are pretty sure (but not *completely* sure) they will never need again.  Occasionally we will garbage collect and delete files from this directory.

`config/`: contains settings files that are read in by the RadGrad Meteor application upon startup.

`scripts/`: contains scripts for retrieving data from STAR, converting data from RadGrad1 to RadGrad2, and so forth.

In many respects, the radgrad2 repository has a similar organization to [meteor-application-template-react](https://ics-software-engineering.github.io/meteor-application-template-react/). If you are not already familiar with this system, it will be helpful to watch [its screencasts](https://ics-software-engineering.github.io/meteor-application-template-react/#screencasts).

