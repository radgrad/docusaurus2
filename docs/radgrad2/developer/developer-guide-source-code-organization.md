---
id: developer-guide-source-code-organization
title: Source Code Organization
sidebar_label: Source code organization
---

## Directory Overview

The RadGrad repository has the following top-level directories:

```
radgrad2/
        app/      # the application.
        config/   # configuration files for development and deployment.
        custom/   # directory for custom configurations and other untracked files.
        scripts/  # directory for scripts to download STAR data and convert RadGrad1 data to RadGrad2 format.
```

Of these, the only directory with a complex substructure is app/. Let's look at that one:

## radgrad2/app/

The radgrad2/app/ directory layout is based on [meteor-application-template](http://ics-software-engineering.github.io/meteor-application-template/), which implements a set of conventions for file and directory naming and structure that conforms to suggestions from the Meteor Guide chapter on [Application Structure](http://guide.meteor.com/structure.html). 

The most important organizational concept is that almost all of the application code is placed inside the imports/ directory, and the code inside the client/ and server/ directories are responsible for loading the code for the client and server sides, respectively.

Here are the top-level directories in the app/ directory:

```
app/
   client/    # responsible for loading all client-side code from imports dir. 
   custom/    # directory to store custom implementations. Not stored in GitHub.            
   imports/   # implementation code lives here.
   private/   # contains database fixtures. "private" means not accessible via URL.
   public/    # contains images and semantic ui theme files. "public" means accessible via URL.
   server/    # responsible for loading all server-side code from imports dir.
```
Of these directories, the only directory with a complex substructure is imports/.  Let's now look at that one:

### radgrad2/app/imports

The imports/ directory contains three subdirectories:

```
imports/
       api/        # data model implementation
       redux/      # redux state management
       startup/    # system startup
       typings/    # Typescript typing information
       ui/         # client-side user interface code
```

Let's look at each in turn.

### radgrad2/app/imports/api

The api/ subdirectory provides the code for the RadGrad "data model". This code is generally loaded on both the client and server sides of the application.  See the Data Model section of this manual for detailed information on the data model. In this section, we will just briefly introduce the source organization.

```
api/ 
   academic-term # Academic Term representation code.
   analytic/     # Email, user interactions, and ICE snapshot code. 
   base/         # Superclasses for collection classes.
   career/       # Career goal code.
   course/       # Course and course instance code.
   degree-plan/  # Degree plan code.
   favorite/     # Favorite academic plans, career goals, courses, interests, and opportunities.
   feed/         # Code for the RadGrad "feed" widget.
   feedback/     # Implementation of the Feedback (recommendation) facilities
   help/         # RadGrad's page-level help system.
   ice/          # Support for the ICE game mechanic
   integrity/    # Code to ensure that the database is in a consistent state
   interest/     # Interest code.
   level/        # Implementation of RadGrad levels.
   log/          # Code for logging user behavior.
   mentor/       # Implement the Mentor Space questions and answers.
   opportunity/  # Opportunity and opportunity instance code.
   public-stats/ # Data that appears on landing page; login not required to see.
   radgrad/      # Provides meta-data about set of collections and so forth.
   review/       # Implement course and opportunity reviews.
   role/         # Support for roles: student, faculty, advisor, mentor, admin 
   semester/     # Semester representation code.
   slug/         # Slug representation code.
   star/         # Support STAR data processing.
   teaser/       # Teaser (video) representation code.
   test/         # Facilitate testing.
   user/         # Represent users and their profile data.
   verification  # Support verification of opportunities. 
```

### radgrad2/app/imports/redux

The redux/ subdirectory contains code to manage the Redux state. It contains four subdirectories:

```
redux/
     admin/       # Redux state for the Admin pages and components.
     advisor/     # Redux state for the Advisor pages and components.
     shared/      # Redux state for shared pages and components.
     student/     # Redux state for the Student pages and components.
```

### radgrad2/app/imports/startup

The startup/ subdirectory contains code that needs to be loaded immediately upon system startup. It contains three subdirectories:

```
startup/
       both/    # Accounts package configuration code that must run on both client and server.
       client/  # Client-only code for logging, routing, sessions, and accounts.
       server/  # Server-only code for accounts, logging, publications, and database loading.
```

Note that naming this directory does not automatically make this code loaded, much less loaded "first".  There are import
statements in client/ and server/ that are responsible for loading this code. 

### radgrad2/app/typings

The /typings directory has Typescript type files `*.d.ts` for the different packages we are using. The most important file is `radgrad.d.ts`. This file defines the types for RadGrad2.

### radgrad2/app/imports/ui

The ui/ subdirectory contains all of the client-side code for implementing the user interface. We follow the recommended Meteor convention of using "layouts" to provide a standard organization for multiple pages, "pages" to indicate the contents of a page for which there is a URL, and "components" to indicate UI elements that are embedded within a page (and may exist on multiple pages).

So, the ui/ directory structure is:

```
ui/
  components/    # widgets within a page.
  layouts/       # organization for multiple pages.     
  pages/         # URL-accessible page.
  stylesheets/   # currently empty.
  utilities/     # cross-cutting utility code for UI.
```

Within each of these directories are subdirectories. In many cases, the subdirectories reflect a division based on role. So, for example, there is a subdirectory called "advisor/" in each of the components, layouts, and pages/ directories. 

## `custom/` in RadGrad2

In RadGrad2, we ignore any directories and files named `custom` that appear in the project. Being in the `.gitignore` means that any file or directory matching that pattern can not be committed to the repository unless explicitly told otherwise. Thus, any files to be automatically kept out of the repository should be placed in a `custom/` directory anywhere in the project.
