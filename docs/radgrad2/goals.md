---
title: RadGrad2 Goals
sidebar_label: Goals
---
RadGrad2 is a reimplementation of the RadGrad system (which we'll refer to here as "RadGrad1"). It is intended to provide an improved design and implementation, and to remove technical debt present in RadGrad1. Some of the goals are:

### 1. The code is easier to understand.

RadGrad1 was a "spike solution" which we used to learn about the domain. As a result, we cut corners, cut-and-pasted code, and implemented other "quick and dirty" hacks.  RadGrad2 should build on the fact that we now have a better understanding of the application domain.  React and Typescript should help us to make the system easier to understand.  To assess this, we can compare the documentation associated with RadGrad2 to that associated with RadGrad1.   A big win would be to extract most system documentation automatically via a system like ESDoc that is both React and Typescript-aware.

We don't need to document every single method and function in order to make RadGrad2 easier to understand. It would be best if we could have "just enough" documentation---i.e. good high-level documentation that shows how the components work together and what design patterns we are using, along with low-level documentation in places where we want future developers to understand a subtle aspect of the implementation.

### 2. The code is cleaner.

In RadGrad1, there was a lot of duplicate code, and a significant number of functions with a complicated type signature.

RadGrad2 should fix this. Duplicate code should be refactored away, and TypeScript can be used to simplify the type signature associated with functions.

### 3. Not all features of RadGrad1 are in RadGrad2.

Some features of RadGrad1 have become very complicated and difficult to understand and maintain, such as the Degree Planner. Other features of RadGrad1 have not been used, such as MentorSpace.

RadGrad2 **should not** reimplement everything in RadGrad1.

### 4. RadGrad2 is more reliable.

One way to assess reliability is through the absence of run-time errors in production. RadGrad1 produced thousands of run-time errors, with unknown impact on the user experience. With any luck, RadGrad2 will have little to no run-time errors.

Another important way to improve reliability is through a carefully curated set of tests that can help developers understand how the system works and that fail when the developer violates a design pattern or otherwise implements a feature with an undesirable side-effect.

### 5. The UI implementation is simpler.

One of the biggest design problems with RadGrad1 is the use of Blaze, which led to complicated (and sometimes duplicated) UI code.

RadGrad2 uses React, which creates an opportunity to significantly reduce the UI code, simplify it, and make it easier to modify and extend.

### 6. RadGrad2 is more performant.

RadGrad1 is slow.  Page loads for students can require 5 to 10 seconds, or potentially even more.  This does not make sense, given the relatively small amount of data required by students to display each page.

RadGrad2 can be made more performant by the following process:

  1. Implement a script that exercises a deployed version of the system with a realistic database. This script requires credentials to login as a student, and then performs a small set of common UI actions (displaying pages, searching for data, etc) and logs the number of seconds required.  Run the script with a single user (to assess the no-load condition), and then with (say) 50 users (to assess a moderate-load condition).  Acceptable performance is under two second page display times for both no-load and moderate-load conditions.

  2. Use Application Performance Monitoring (APM) tools such as are available with Galaxy to determine where time is spent and to determine what changes are required to the code base to provide acceptable performance. Another option is [React Profiler](https://blog.bitsrc.io/measure-performance-with-the-new-react-profiler-component-14d3801d232d).

### 7. RadGrad2 is easy to tailor to the needs of other organizations.

A major five year NSF grant now in submission proposes to use RadGrad. We can start now to structure RadGrad2 in such a way as to make it easier to tailor for this new application domain.

In addition, we should identify places where RadGrad1 built in ICS-specific functionality (such as the Banner upload capability) and refactor the code to make it easier to replace for other organizations.



