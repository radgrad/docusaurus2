---
title: How to Conduct a Review
sidebar_label: Conduct a Review
---

Here is our current process for performing a RadGrad review.

## 1. Initiation Phase

This phase sets up a review. It begins with a developer identifying some code to be reviewed.  The amount of code to be reviewed should be small enough that developers can review it in an hour or two maxiumum.

The developer then creates a new issue to describe the review task. The issue is named "Review: (Subject)", where "(Subject)" describes the page or file or collections etc to be reviewed.

The body of the issue contains the following:

  * The files and/or user interface pages to be reviewed.
  * The checklists to be used.
  * The date and time of the review meeting.
  * Any high-level goals for the review. Perhaps the developer is concerned about some specific issue with the code.

After creating the issue, the developer should then create a branch called "issue-XXX", where XXX is the issue number. (This is just like our normal issue/branch naming convention.) It is helpful to edit the issue to provide links to the files under review within that new branch.

Once the issue and branch are set up, then the issue can be moved to "In progress" on the Project Board, and developers can be assigned to that issue.  Unlike other tasks, reviews are normally assigned to most or all of the RadGrad developers.

## 2. Preparation Phase

During the preparation phase, developers go through the code and/or user interface pages and look for issues according to the checklists and/or developer provided instructions.

Developers record their issues in a private text document that is not shared with others.  This enables everyone to review the code without preconceived notions from seeing other developer's issues.

Documenting an issue involves specifying the file (or UI page), the line number, a checklist item ID, and potentially some short text to provide additional clarification if necessary.

The preparation phase generally lasts from three days to a week, depending upon what else is going on. As noted above, we don't expect developers to spend more than an hour or so on preparation.

## 3. Meeting Phase

The meeting begins with each developer adding a comment to the issue, which is a copy-and-paste of their private notes developed during the preparation phase. This is the first time that the entire group sees each other's comments.

The review meeting involves going through each of the comments and deciding how to resolve them. This can happen in a number of ways: existing comments could be edited, or a new comment could be created that documents the proposed resolutions.

At the conclusion of the meeting, one or more developers are tasked with performing "Resolution" activities, which can involve changes to the code base or to the RadGrad documentation.

## 4. Resolution Phase

Developers fix the code and/or documentation. When completed, the issue is closed.
