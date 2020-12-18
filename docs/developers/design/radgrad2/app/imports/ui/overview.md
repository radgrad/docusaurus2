---
title: Overview of ui/
sidebar_label: Overview
---

The `ui/` directory holds the React components that implement the user interface for RadGrad2.

## Directory overview

<img src="/img/design/radgrad2/ui.png" />


The layouts/, pages/, and components/, subdirectories contain presentational code files.

There are also utilities/ subdirectories whch contain behavioral code files. The RadGrad2 code base contains a significant amount of "presentational" code (i.e. files that export a React Component), as well as a significant amount of shared "behavioral" code (i.e. files that export variables and functions used by other presentational and/or behavioral code). This is a positive effect of the effort made to reduce code cloning. To distinguish these files more clearly at an architectural level, they are segregated into different subdirectories.

Behavioral code files are located as close as possible to their span of application. The location of a code file in the ui/ subdirectory tree structure should provide useful information about its "span of application".  Locate a code file as far down in the subdirectory tree as possible, so that it is clear from its location what parts of the code base might refer to it, as well as what parts of the code base do not refer to it.  This might mean that code files migrate "up" the subdirectory tree over time as they are found to be more generally applicable. That's OK.  It also means that if a file of code accumulates some exported code that is used quite generally, and other exported code that is used in very limited contexts, then it might be appropriate to split the code into two different files, placed at different points in the subdirectory tree.

Behavioral code relevant to a single directory is located in a subdirectory called utilities/.  For example, the directory ui/pages/admin contains a large number of presentational code files exporting React components, along with a single file of utilities called "datamodel-utilities.ts". Assuming that this file contains code used only by the components in ui/pages/admin, then conforming to the guidelines requires creating a new subdirectory /ui/pages/admin/utilities, and putting that file in it.  You might want to just call it "datamodel.ts", since the directory name now clearly indicates that it is utility code.
