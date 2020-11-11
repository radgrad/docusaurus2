---
title: UI Architecture Review
---

The user interface for RadGrad1 was designed to provide a high level architecture through the following subdirectories of the imports/ui/ directory:

  * layouts/ implements the top-level, site-wide organization (i.e. header, page, footer)
  * pages/ implements the section of the page between the header and the footer.
  * components/ implements the various "widgets" that together comprise a page.

In addition, there were a few other general architectural principles:

  * When appropriate, create subdirectories for each role. So, for example, the pages/ and components/ directories had subdirectories for admin/, advisor/, alumni/, etc.  There can also be a shared/ subdirectory for components that serve multiple roles.

  * Try to locate "helper" code in the directory tree close to where it is used.

For a variety of reasons, RadGrad2's code has become quite disorganized.  The goal of this page is to identify some of the organizational problems and provide recommendations for improvement.

## The ui/ directory contains an extra subdirectory shared/

The ui/ directory now contains a shared/ directory containing a single file:

<img src="/img/design/ui-architecture/ui-directory.png" width="50%"/>

The code in description-pair-helpers.ts is imported in various components, but is not used across all of layouts/, pages/, and components/, which would justify its placement here.

Recommendation: move description-pair-helpers.ts to a location "closer" to its usages.

## The layouts/ directory contains non-layout code.

The layouts directory, in addition to the App.tsx file containing the global layout, now contains a shared/ and a student/ directory contains high order component implementations:

<img src="/img/design/ui-architecture/layouts-directory.png" width="50%"/>

Yet if we look in the App.tsx code, we find other directories that top-level UI code are located:

```js
import { routes } from '../../startup/client/routes-config';
import withGlobalSubscription from './shared/GlobalSubscriptionsHOC';
import withInstanceSubscriptions from './shared/InstanceSubscriptionsHOC';
import { getUsername } from '../components/shared/RouterHelperFunctions';
```

So, it appears that there are currently four separate places that top-level UI code is placed in support of layout:

  1. imports/ui/layouts/shared
  2. imports/ui/layouts/student
  3. imports/ui/components/shared
  4. imports/startup/client

Recommendations:

  * If routing information is only used by the top-level layout, then let's put it in the layouts directory, close to its only use. Don't put it over in startup/client.

  * Subscriptions are used at the page-level and the layout level, so don't put them in the layouts/ directory. It might make



## Reorganize "Hanna" UI code locations; remove "Aljon" UI code when no longer used.

Aljon Preza was the original UI designer for RadGrad1. In RadGrad2, Hanna Park has assumed principle UI designer duties. She has so far redesigned some, but not all of the system.

The problem is that Hanna did not appear to want to remove Aljon's code, perhaps because she was worried that we would not accept her changes, and so she added her code to new directories.  Since we are not going to revert back to Aljon's code, we need to refactor the system to remove Aljon's code and place Hanna's code in appropriate locations to make the UI architecture easier to understand.


