---
title: UI Architecture Review
---

## The original vision (RadGrad1)

The original vision for the UI architecture in RadGrad1 was to organize the entire UI around three top-level directories:

  * layouts/ implements the top-level, site-wide organization and the routing of URLs to pages.
  * pages/ implements pages, which are identified through a menu at the top of the page and/or a side-bar menu on the left-hand side of the page.
  * components/ implements the various "widgets" that appear in pages.

For example:

<img src="/img/design/ui-architecture-review/ui-directory-ideal.png" width="25%"/>

In addition to this top-level organization, each of these subdirectories can have separate areas to segregate components specific to RadGrad roles (student, advisor, mentor, etc.).  This is because RadGrad provides different user interfaces depending upon the role. For example:

<img src="/img/design/ui-architecture-review/pages-subdirectories.png" width="25%"/>

As you can see, in addition to subdirectories for roles, there can also be subdirectories for "shared" UI components that would appear in the user interfaces for more than one role. In addition, the Landing page became complicated enough to warrant its own dedicated subdirectory.

While this top-level architectural organization was mostly adhered to in RadGrad1, an emphasis on rapid protyping of new behaviors coupled with a lack of commitment to refactoring meant that the RadGrad1 code base started to accumulate a significant amount of "cloned code".  As time went on, this cloned code added significant overhead to development: changing a user interface element or behavior might require finding and editing several copies of its implementation scattered among the various "role" subdirectories.  Bugs could be found and removed from one copy, yet remain in other copies located elsewhere in the code base.

One of the goals of RadGrad2 was to eliminate the presence of cloned code by creating more "generic" components that could be instantiated with parameters to adapt them to various contexts within the user interface. However, this has created new problems.

## The current reality (RadGrad2)

A cursory inspection of the RadGrad2 user interface code base reveals a significant amount of disorganization:

  * A top-level division of UI code into layout, pages, and components is not longer present. For example, "page" code now appears under the top-level "components" directory.

  * There appears to be "vestigial" UI code left over from RadGrad1 that is no longer used due to an in-progress redesign of the UI for RadGrad2.

  * Refactoring of cloned code from RadGrad1 produced a significant amount of "generic" code, but different developers made different choices about where to place this code, perhaps due to the lack of any architectural guidelines.

In attempting to write acceptance tests, I found the current level of disorganization severe enough that I had significant problems figuring out the location of the React components used to render pages in the Student interface. That's just crazy.

The goal of this page is to document some of the issues I've discovered so far and present some recommendations for discussion.

## Proposed RadGrad2 architectural guidelines

The next section details some problems I've discovered so far, along with some proposed recommendations.  Before presenting them, it seems useful to present my idea for a revised set of architectural guidelines more compatible with the nature of the RadGrad2 code base:

  * **layouts/, pages/, components/, and shared/ subdirectories contain presentational code files. utilities/ subdirectories contain behavioral code files.** The RadGrad2 code base contains a significant amount of "presentational" code (i.e. files that export a React Component), as well as a significant amount of shared "behavioral" code (i.e. files that export variables and functions used by other presentational and/or behavioral code). This is a positive effect of the effort made to reduce code cloning. To distinguish these files more clearly at an architectural level, they should be segregated into different subdirectories.

  * **Behavioral code files are located as close as possible to their span of application.** The location of a code file in the ui/ subdirectory tree structure should provide useful information about its "span of application".  Locate a code file as far down in the subdirectory tree as possible, so that it is clear from its location what parts of the code base might refer to it, as well as what parts of the code base do not refer to it.  This might mean that code files migrate "up" the subdirectory tree over time as they are found to be more generally applicable. That's OK.  It also means that if a file of code accumulates some exported code that is used quite generally, and other exported code that is used in very limited contexts, then it might be appropriate to split the code into two different files, placed at different points in the subdirectory tree.

  * **Behavioral code relevant to a single directory is located in a subdirectory called utilities/.**  For example, the directory ui/pages/admin contains a large number of presentational code files exporting React components, along with a single file of utilities called "datamodel-utilities.ts". Assuming that this file contains code used only by the components in ui/pages/admin, then conforming to the guidelines requires creating a new subdirectory /ui/pages/admin/utilities, and putting that file in it.  You might want to just call it "datamodel.ts", since the directory name now clearly indicates that it is utility code.

  * **Observe the RadGrad1 architectural guideline:  /ui/layouts/ contains only layout-related code. /ui/components contains only component code. And so forth.**  As we will see below, this guideline is not currently followed in the RadGrad2 code base.

  * **Move unused UI code to radgrad2/archive.**  The UI redesign of RadGrad2 means there is now some old UI code that is no longer called. Move that out of the ui/ directory and into the top-level archive directory.

  * **Don't name components "Card".** This was a mistake from RadGrad1.  In RadGrad2, there are components named "Card" that don't even use cards. Moving forward, let's avoid embedding UI design elements (Card, Table, etc.) into the name of component and file.  One exception is "Menu", which is OK to embed into the name, because that indicates the function of the component (as well as being a design element).

Now let's look at some examples of problems I've discovered in RadGrad2, along with proposed recommendations in keeping with these new architectural guidelines.

## Problems and recommendations

### 1. Problem: the ui/shared/ directory.

The ui/ directory currently contains a shared/ directory containing a single file:

<img src="/img/design/ui-architecture-review/ui-directory.png" width="35%"/>

The code in description-pair-helpers.ts is imported in code located within the components/ directory, but is not used across all of layouts/, pages/, and components/, which would justify its placement at the top-level.

**Recommendation:**

  * Move description-pair-helpers.ts into a utilities/ subdirectory located close to its usages.
  * Remove the shared/ directory.

### 2. Problem: the layouts/ directory contains non-layout code.

The layouts directory, in addition to the App.tsx file containing the global layout, now contains both a shared/ and student/ directories containin "behavioral" code (in this case, high order component implementations):

<img src="/img/design/ui-architecture-review/layouts-directory.png" width="40%"/>

**Recommendation:**

  * Create a ui/layouts/utilities/ subdirectory, and put GlobalSubscriptionsHOC.tsx, InstanceSubscriptionsHOC.tsx, and PageTrackerHOC.tsx into it, because these functions are only used by App.tsx.

  * Move the other behavioral code to a utilities/ directory appropriately located in the ui/ directory tree.

### 3. Problem: App.tsx imports code from "distant" locations

App.tsx contains two problematic imports:

```js
import { routes } from '../../startup/client/routes-config';
import { getUsername } from '../components/shared/RouterHelperFunctions';
```

**Recommendation:**

  * Move routes-config.ts to /ui/layouts/utilities, since it is only used in App.tsx.

  * The function getUserName is used in ui/layouts, ui/pages, and ui/components. So, this function is a candidate for a file located in /ui/utilities. A closer look is needed to see if the entire RouterHelperFunctions.tsx should be moved to ui/utilities, or if some of its exported functions are very specific and should be located in a different utilities/ subdirectory closer to their only use.

### 4. Use subdirectory organization consistently.

The ui/components/admin (and other) subdirectories don't have a consistent internal organization. While some components are organized into subdirectories according to the page they are located on, others aren't. This is inconsistent, and thus confusing to developers:

An example of part of the ui/components/admin subdirectory, showing both directories and files:

<img src="/img/design/ui-architecture-review/ui-components-admin.png" width="40%"/>

On the other hand, the ui/components/advisor subdirectory has no internal organization by page:

<img src="/img/design/ui-architecture-review/ui-components-advisor.png" width="40%"/>

On the third hand, the ui/components/shared subdirectory goes back to a combination:

<img src="/img/design/ui-architecture-review/ui-components-shared.png" width="40%"/>

**Recommendation:**

  * Use subdirectories consistently throughout the ui/components/ subdirectory tree. This means the files in ui/components/admin will be moved into new or existing subdirectories corresponding to the page that they appear on. A similar refactoring should take place for ui/components/advisor, ui/components/alumni, ui/components/faculty, ui/components/student, and ui/components/shared.

### 5. Problem: "Hanna" UI code improperly located in ui/ directory.

Aljon Preza was the original UI designer for RadGrad1. In RadGrad2, Hanna Park has assumed principle UI designer duties. She has so far redesigned some, but not all of the system. I'm going to call the UI code designed by Aljon the "Aljon" code, and the UI code designed by Hanna the "Hanna" code.

When attempting to write acceptance tests for the "Opportunities" page in the student UI, which is Hanna code, I found it very difficult to find!  It turns out that is located in:

`ui/pages/shared/CardExplorerOpportunitiesPage.tsx`

This is not a "shared" page: it is specific to the student UI.

**Recommendation:**

  * Move components out of ui/pages/shared and to their appropriate place.

### 6. Problem: ui/ directory contains "vestigial" Aljon UI code

The move to the Hanna UI means that there is now code in the ui/ directory written by Aljon that is no longer used.

  * Move Aljon code that is made obsolete by Hanna code to the radgrad2/archive directory.

### 7. Problem: UI code improperly labeled as "Card" when there are no cards in it.

The previous problem used as its example a React Component called "CardExplorerOpportunitiesPage".  However, it does not involve "Cards"!

(I think the use of "Card" in the component name is a holdover from the early days of RadGrad1, when we had some pages with simple tables and decided to experiment with a new, "Card"-based UI approach. Unfortunately, now everything is called a "Card" regardless of whether or not it even uses Semantic UI Cards in its implementation.)

**Recommendation:**

  * Remove "Card" from UI component names. Particularly those that don't actually use that interface design idea.

