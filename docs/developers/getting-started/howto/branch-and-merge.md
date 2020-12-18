---
title: Branching and merging in RadGrad
sidebar_label: Branch and merge RadGrad
---

For RadGrad, we use Issue Driven Project Management, as discussed in the [Tech Stack](../tech-stack#issue-driven-project-management) chapter.

Here is a bit more detail on how the steps to use to branch and merge when doing RadGrad.

## Work on tasks specified by issues in branches

Work is organized into tasks, and each task is described in a GitHub issue. Work corresponding to a task/issue is done in a branch off master. The branch is named after its corresponding issue number. So, if you are working on a task described in [Issue 324](https://github.com/radgrad/radgrad2/issues/324), then that work is performed in a branch off of master called "issue-324".  For uniformity, please do not name the branch "324", or "ISSUE-324".  Please name it as the branch number, prefixed with "issue-".

## How to merge into master

Given that you are doing work in a branch off of master, the question then is how to successfully merge your results back into master when you finish the task. Here is the basic sequence of steps:

  1. Stop any running Meteor process (control-c)
  2. Merge current master branch into your branch.
  3. `meteor reset`
  4. `meteor npm run start` to do a manual "sanity check" and see if the system comes up normally after the merge. If not, fix any errors and/or ask for help.
  5. Stop the running Meteor process (control-c)
  6. `meteor npm run test-all`. Note that this normally takes about 10-15 minutes to run.  Ensure that all tests pass. If not, fix any errors and/or ask for help.
  7. Merge your branch into master.
  8. Wait 10-15 minutes, see if the [CI build](https://github.com/radgrad/radgrad2/actions) passes. If it does not, fix the errors and/or ask for help.
  9. Once the CI Build has passed successfully, send a message to the #radgrad2-chat channel on Discord starting with the text "Master Merge Alert" and followed by a brief message indicating what has changed.

## Updating your branch when master changed

Once someone has posted a message to #radgrad2-chat indicating that master has changed, what do you do?  Your first inclination might be to ignore the message, or put off dealing with it for a long time, but that's almost always a bad idea. Instead, the best approach is the following:

  1. Stop any running Meteor process (control-c).
  2. Create a "checkpoint" of your current state of development by committing your current changes to your branch. Push these changes to github as a safety mechanism (this creates a backup of your changes, and also makes your checkpoint easily available to other developers if joint debugging is later necessary). If the next step (merging from master) fails spectacularly for some reason, you can simply back up to your checkpointed commit and continue from there.
  3. Update your branch from the master branch.
  4. `meteor reset`
  5. `meteor npm run start` to do a manual "safety check" (as above)
  6. Run tests as indicated by the nature of the change to master. You can invoke `meteor npm run test-all` for complete security, or some subset of tests depending upon the nature of the change.
  7. Continue on with development

