---
title: How to work on issues in RadGrad
sidebar_label: Work on issues
---

For RadGrad, we use Issue Driven Project Management (IDPM), as discussed in the [Tech Stack](../tech-stack#issue-driven-project-management) chapter.

Here is a bit more detail on the standard process for completing tasks.

## Create a branch off master to hold your work

Following the standard IDPM process, you should create a branch off master to hold your code. This branch should be named "isssue-xxx", where "xxx" is replaced by the issue number.

## Keep your branch up to date with master

As you work on your task, you may see messages in the #radgrad2-chat channel with the title "Master Merge Alert". This is a signal from another developer that the master branch has been updated.

When this happens, you should immediately update your branch from master. Here is the sequence of steps to take:

  1. Stop any running Meteor process (control-c).
  2. Create a "checkpoint" of your current state of development by committing your current changes to your branch. Push these changes to github as a safety mechanism (this creates a backup of your changes, and also makes your checkpoint easily available to other developers if joint debugging is later necessary). If the next step (merging from master) fails spectacularly for some reason, you can simply back up to your checkpointed commit and continue from there.
  3. Update your branch from the master branch.
  4. `meteor reset`
  5. `meteor npm run start` to do a manual "safety check" (as above)
  6. Run tests as indicated by the nature of the change to master. You can invoke `meteor npm run test-all` for complete security, or some subset of tests depending upon the nature of the change.
  7. Continue on with development

## Close your issue when you are finished

Once you have finished your task, you need to merge your changes into master, make sure that your merge does not break the build, and communicate to the rest of the team that you have merged into master. Here's the steps in detail:

### Merge master into your branch (if necessary)

  1. Stop any running Meteor process (control-c)
  2. Merge current master branch into your branch (if any changes)
  3. `meteor reset`
  4. `meteor npm run start` to do a manual "sanity check" and see if the system comes up normally after the merge. If not, fix any errors and/or ask for help.

### Run all tests

  5. Stop the running Meteor process (control-c)
  6. `meteor npm run test-all`. Note that this normally takes about 10-15 minutes to run.  Ensure that all tests pass. If not, fix any errors and/or ask for help.

### Check for vestigial code, move it to archive/ directory

Sometimes as a result of development, there are files that are no longer used.  An easy way to check for this is to run `meteor npm run unimported`. Here is an example run illustrating how it can find "vestigial" files:

```
$ meteor npm run unimported

> radgrad2@2.0.10 unimported /Users/philipjohnson/github/radgrad/radgrad2/app
> npx unimported

npx: installed 200 in 6.625s

       summary               unimported v1.5.0
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
       entry file 1        : client/main.ts
       entry file 2        : server/main.ts

       unresolved imports  : 0
       unused dependencies : 0
       unimported files    : 4


─────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
     │ 4 unimported files
─────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   1 │ imports/ui/components/shared/community-radgrad-videos/CommunityRadGradVideosWidget.tsx
   2 │ imports/ui/components/shared/community-users/CommunityFeedItem.tsx
   3 │ imports/ui/components/shared/community-users/CommunityFeedWidget.tsx
   4 │ imports/ui/components/shared/community-users/CommunityUsersWidget.tsx
─────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
```

When you find files that are no longer used, please create a subdirectory in the radgrad2/archive/ directory, and copy them over there before deleting from the app/ area.

To avoid IntelliJ errors in the archive/ directory, you mark the archive/ directory as "excluded" (select the archive/ directory in the Project Pane, then right click, select "Mark directory as", then select "Excluded").

### Merge into master, wait for CI results

  7. Commit and push your branch one last time (if any changes.)
  8. Switch to the master branch, then merge your branch into it.
  9. Push the updated master branch to GitHub.
  10. Wait around 10 minutes, see if the [CI build](https://github.com/radgrad/radgrad2/actions) passes. If it does not, fix the errors and/or ask for help.

### Send message to Discord

  11. Once the CI Build passes successfully, send a message to the #radgrad2-chat channel on Discord starting with the text "Master Merge Alert" and followed by a brief message indicating what has changed.



