---
title: The RadGrad Sandbox
sidebar_label: The Sandbox
---

## Problem

RadGrad developers need a place to build, evaluate, and show example uses of new UI components without impacting on pages intended for RadGrad users.

## Solution

The RadGrad "Sandbox" is a directory located in ui/pages/sandbox containing "developer-only" pages. These pages are not accessable from menus; instead, you must type in the URL in manually in order to access them.

Creating a sandbox page requires two steps:

First, add your page to the ui/pages/sandbox directory. You could start by making a copy of an existing sandbox page so that you get the header set up.  A minimal sandbox page might look like this:

```javascript
import React from 'react';
import PageLayout from '../PageLayout';

const headerPaneTitle = 'SandBox: Segment Design';
const headerPaneBody = 'Examples of RadGradSegment. (April, 2021)';
const headerPaneImage = 'header-sandbox.png';

const SandBoxExamplePage: React.FC = () => (
  <PageLayout id="sandbox-example-page" headerPaneTitle={headerPaneTitle} headerPaneBody={headerPaneBody} headerPaneImage={headerPaneImage}>

    Example stuff goes here.

  </PageLayout>
);

export default SandBoxSegmentPage;
```

Second, define a route to your page in ui/layouts/utilities/routes-config.ts. You will have to choose a role (or roles) associated with the Sandbox page. The initial sandbox pages require the user to be a student.

Scroll to the bottom of this file to see some existing sandbox page routes. For example:

```javascript
 STUDENT: [
    { path: `/${URL_ROLES.STUDENT}/${USERNAME}/${COMMUNITY}`, component: CommunityPage },
       :
    // The following routes display sandbox pages under the student role.
    { path: `/${URL_ROLES.STUDENT}/${USERNAME}/sandbox/labels`, component: SandboxLabelPage },
    { path: `/${URL_ROLES.STUDENT}/${USERNAME}/sandbox/segments`, component: SandBoxSegmentPage },
  ],
```

Unless there's a compelling reason, you might as well add your page to the student role.

## Pages

Here is a brief overview of existing Sandbox pages:

### SandboxLabelPage

This page provides examples of how to use RadGrad entity labels, and how they look when rendered:

<img src="/img/patterns/sandbox-labels.png" />

The source code for this page is [SandboxLabelPage.tsx](https://github.com/radgrad/radgrad2/blob/master/app/imports/ui/pages/sandbox/SandboxLabelPage.tsx).

### SandboxSegmentPage

This page provides examples of how to use the RadGradSegment, RadGradHeader, and RadGradHeaderOptions components:

<img src="/img/patterns/sandbox-segments.png" />

The source code for this page is [SandboxSegmentPage.tsx](https://github.com/radgrad/radgrad2/blob/master/app/imports/ui/pages/sandbox/SandBoxSegmentPage.tsx).





