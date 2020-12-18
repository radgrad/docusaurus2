---
title: Tech Stack
---

Here are the major components of the RadGrad tech stack, with reference materials and activities to help you come up to speed if necessary.

## IntelliJ IDEA editor

We require all developers in the RadGrad Project to use the IntelliJ IDEA editor.  Although you might prefer another editor, IntelliJ IDEA has a unique combination of features for Javascript, Typescript, and Meteor that make it better suited than any other editor for this project.

We understand that you might not like IntelliJ, but this is non-negotiable for participating in the RadGrad Project.  We have prior experience with students using other editors "on the sly", only to have them run into problems and difficulties that resulted directly from them not using IntelliJ.

For information on configuring IntelliJ for Meteor development, see:

  * [ICS 314: Install IntelliJ IDEA](http://courses.ics.hawaii.edu/ics314f19/morea/development-environments/experience-install-intellij-idea.html)

## Unix or Mac OS

It is problem-free to install and run Meteor on Unix or Mac OS.  It is a significant hassle (but not impossible) to install and run Meteor on Windows.  Even experienced Windows users sometimes find themselves struggling for weeks to get Meteor working without problems, while their counterparts on Unix or Mac are up and running in an hour.

If you must use Windows, one option is to use Windows 10 and then install [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10), then run Meteor within it. For more information on WSL and Meteor, see [Get up and running with Meteor in WSL2](https://dev.to/rickyeckhardt/get-up-and-running-with-meteor-in-wsl2-4cjc). For info on running IntelliJ within WSL, see [Install IntelliJ on WSL](https://github.com/lackovic/notes/tree/master/Windows/Windows%20Subsystem%20for%20Linux#install-intellij-idea).


## Javascript

Javascript (Typescript) is the primary language used for development.

For information on Javascript, please review the following:

   * [JS 1: Basics](http://courses.ics.hawaii.edu/ics314f20/modules/javascript-1/)
   * [JS 2: Object Orientation](http://courses.ics.hawaii.edu/ics314f20/modules/javascript-2/),
   * [JS 3: Functional Programming](http://courses.ics.hawaii.edu/ics314f20/modules/javascript-3/).

To assess your knowledge, you should be able to easily complete exercises such as:

  * [Jamba Juice 1](http://courses.ics.hawaii.edu/ics314f20/morea/javascript-2/experience-jamba-juice-1.html) (and subsequent)
  * [UH Degree Data Manipulation](http://courses.ics.hawaii.edu/ics314f20/morea/javascript-3/experience-underscore-2.html)

## Typescript

RadGrad is actually written in the Typescript superset of Javascript. To come up to speed in Typescript, we recommend:

  * [Typescript for Javascript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
  * [The Typescript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

To assess your knowledge, just jump into RadGrad.

## GitHub and GitHub Desktop

We use git and GitHub to manage the codebase.  If you are not familiar, please review:

  *  [Configuration Management](http://courses.ics.hawaii.edu/ics314f20/modules/configuration-management/)

Even if you consider yourself experienced with git, please use [GitHub Desktop](https://desktop.github.com/) for this project. GitHub Desktop will prevent you from doing embarrassing things.  It will be even more embarrassing if you do something embarrassing, and then we find out you ignored this instruction to use GitHub Desktop.

In the RadGrad project, we do not perform rebasing, or use submodules, or any git trickery.

To assess your knowledge, please use GitHub Desktop to clone the radgrad/radgrad2 repo to your local computer.

## Semantic UI

RadGrad uses the Semantic UI CSS framework in combination with React.  If you are not familiar, please review:

  * [Semantic UI](http://courses.ics.hawaii.edu/ics314f20/modules/ui-frameworks/)
  * [React](http://courses.ics.hawaii.edu/ics314f20/modules/react/)

To assess your knowledge, please complete an exercise such as:

  * [Island Snow in React](http://courses.ics.hawaii.edu/ics314f20/morea/react/experience-islandsnow-react.html)

## Issue Driven Project Management

We coordinate development using a process called Issue Driven Project Management (IDPM). To learn about it, please review:

  *  [Agile Project Management](http://courses.ics.hawaii.edu/ics314f20/modules/project-management/)

Note that IDPM constrains: (a) the way issues are defined, created, and managed; (b) the way branches are defined, named, and managed, and (c) the way group members partition work.

To assess your knowledge, please review the:

  * [Active RadGrad Project Boards](https://github.com/radgrad/radgrad2/projects)


## Meteor

By far the most complicated aspect of our tech stack is Meteor. If you have not used Meteor before, you have (at least) several weeks of background work to do to come up to speed prior to taking on RadGrad development.

Here is some background:

  * [Meteor 1](http://courses.ics.hawaii.edu/ics314f20/modules/meteor-1/)
  * [Meteor 2](http://courses.ics.hawaii.edu/ics314f20/modules/meteor-2/)
  * [Meteor 3](http://courses.ics.hawaii.edu/ics314f20/modules/meteor-3/).

The following materials are particularly important:

  * [Meteor: The Fundamentals (30 minutes)](http://courses.ics.hawaii.edu/ics314f20/morea/meteor-1/reading-screencast-meteor-fundamentals.html), which provides a high level overview of Meteor and what makes it different from other web application frameworks.

  * The [five screencasts associated with Meteor Application Template React (total 75 minutes)](https://ics-software-engineering.github.io/meteor-application-template-react/#screencasts) provide an overview of the basic structure of a Meteor application and best practices we employ.

  * The [35 minute screencast explaining meteor-example-form-react](https://ics-software-engineering.github.io/meteor-example-form-react/#screencast) explains how to use Uniforms and React to create forms and populate the database with user information.

  * The [two hours of screencasts explaining the BowFolios system](https://bowfolios.github.io/#walkthrough-videos) provides a more "real world" example of Meteor, although still much less complicated than RadGrad.

  * Finally, don't forget that the authoritative source on Meteor is the [Meteor Guide](https://guide.meteor.com/). It's worth spending an hour or two reading relevant sections of the Guide, including [Application Structure](https://guide.meteor.com/structure.html), [Collections and Schemas](https://guide.meteor.com/collections.html), [Publications and Data Loading](https://guide.meteor.com/data-loading.html), and [Methods](https://guide.meteor.com/methods.html).

To assess your knowledge, you should build the Digits system:

  * [Digits System (Six Experiences)](http://courses.ics.hawaii.edu/ics314f20/modules/meteor-3/)







