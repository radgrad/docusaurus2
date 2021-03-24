---
title: UI Visual Theme
---

## Problem

We want to provide a consistent visual look and feel (i.e. a "theme") in the RadGrad user interface, and be able to evolve that theme over time with a minimum amount of effort.

By visual look and feel, we mean colors, padding, margins, typography, buttons, links, and so forth.

To accomplish this, we need to centralize the definition of the RadGrad visual theme as much as possible, and ensure that all UI components refer to these centralized definitions when possible.

Currently, many UI components provide ad-hoc, one-off implementations of thematic elements. This makes it hard to achieve a consistent look and feel, and also makes it hard to evolve the UI theme over time.

## Tentative steps toward a solution

We have not figured out a definitive set of design patterns and/or best practices to solve this problem. This page documents our progress so far.

### Background and rational

RadGrad's UI is implemented using [Semantic UI React](https://react.semantic-ui.com/), along with a custom CSS theme based on a fork of  Semantic UI called [Fomantic UI](https://fomantic-ui.com/).

The rationale for this rather convoluted choice is that when RadGrad development first started, we evaluated Bootstrap, Semantic UI, Material, and other CSS frameworks and found that Semantic UI appeared to offer the best set of features for RadGrad.

When we switched to React for RadGrad 2, we then switched to the React integration of Semantic UI (Semantic UI/React).  However, around that time, the developer of Semantic UI stopped working on the system.  Eventually, a community effort was started to maintain Semantic UI until such time that the original developer could resume efforts.  This community fork is called Fomantic UI (I guess because it's a "faux" version of Semantic UI).  A principle design goal of Fomantic UI is backwards compatibility with Semantic UI.

Semantic UI provides the ability to develop custom themes that can override the default fonts, colors, sizes, and so forth. One impact of the lack of maintenance of Semantic UI is that the tool pipeline for building a custom theme has become out of date and difficult to run with modern releases of Node and NPM.

To enable us to easily continue development of a custom theme for RadGrad2, we have now switched to Fomantic UI. Our comfort with this decision is aided by the fact that the number of weekly NPM downloads of Fomantic UI is now greater than the number of weekly downloads of Semantic UI.

Our custom theme is maintained in the [RadGrad Fomantic UI GitHub Repo](https://github.com/radgrad/fomantic-ui).  For the most part, using Fomantic UI results in a file called semantic-ui.min.css which is a "drop in" replacement for the CSS file built by the original Semantic UI system.

:::note "For the most part" means "Not in all cases".

So far, we have discovered that Fomantic UI provides an up-to-date release of [Font Awesome](https://fontawesome.com/) icons, which is obviously a good thing.  But that means that there are small differences between the valid icon names listed in the [Semantic UI Icon Documentation](https://semantic-ui.com/elements/icon.html) and those in the [Fomantic UI Icon Documentation](https://fomantic-ui.com/elements/icon.html). So, when it comes to icon names, you should refer to the Fomantic UI documentation.

On the other hand, our use of Semantic UI/React means that "extended" features of Fomantic UI (such as [Slider](https://fomantic-ui.com/modules/slider.html) are not available to us, since Semantic UI/React only supports the original version of Semantic UI. This means that you can't simply refer to the Fomantic UI documentation in all cases and assume a feature is available.

There may be other "gotchas" that arise in future, which we will try to document in this chapter.
:::

### Overview of the theme implementation

As noted above, we maintain a portion our custom theme in our fomantic-ui repo.  Documention on how to install and build a custom theme, and then install it into RadGrad are provided in its [README.md](https://github.com/radgrad/fomantic-ui/blob/main/README.md) file. In general, this involves:

  * Overridding various typography, color, and other CSS definitions for individual components.
  * Running a script to generate a semantic-ui.css.min file.
  * Copying this file and other icon files into the RadGrad application directory tree.

In addition to defining colors and fonts, this repo currently defines many CSS selectors. See their definitions at:

  * [fomantic-ui/semantic/src/site/globals/site.overrides](https://github.com/radgrad/fomantic-ui/blob/main/semantic/src/site/globals/site.overrides)

The story does not stop there, however.  In addition to the custom Semantic/Fomantic theme, we also alter the CSS in several other places:

  * [app/client/style.css](https://github.com/radgrad/radgrad2/blob/master/app/client/style.css). This is the standard location for a CSS style file that is loaded by Meteor when the client starts up and provides additional "global" CSS definitions.

  * [app/imports/startup/client/startup.tsx](https://github.com/radgrad/radgrad2/blob/master/app/imports/startup/client/startup.tsx). This file contains a one liner to add a class to the body element in order to establish a custom background color for all pages. This is a special purpose hack needed to modify the body element in Meteor, and shouldn't be required for any other theme implementation.

In addition to these two places which provide "global" thematic definitions, we define and load CSS in several additional ways in order to provide more local customization.

  * Files like [ui/pages/student/style.css](https://github.com/radgrad/radgrad2/blob/master/app/imports/ui/pages/student/style.css) provide CSS customizations for a single page or pages. In this case, [ui/pages/student/StudentHomePage.tsx](https://github.com/radgrad/radgrad2/blob/master/app/imports/ui/pages/student/StudentHomePage.tsx).

  * Files like [ui/components/landing/utilities/landing-styles.ts](https://github.com/radgrad/radgrad2/blob/master/app/imports/ui/components/landing/utilities/landing-styles.ts) also provide CSS customizations, but using a Javascript object where the keys correspond to the CSS selectors and the values are an object with CSS properties and values in React format (i.e. "backgroundColor" rather than "background-color").  An example of how this representation for CSS is injected into components is in [ui/components/landing/LandingSection9.tsx](https://github.com/radgrad/radgrad2/blob/master/app/imports/ui/components/landing/LandingSection9.tsx).

  * File like [ui/components/student/StudentPageMenu.tsx](https://github.com/radgrad/radgrad2/blob/master/app/imports/ui/components/student/StudentPageMenu.tsx) illustrate a third way, which just uses the style parameter available in most Semantic UI/React components to provide CSS customizations.

### Issues with our current theme implementation

As shown above, we have five approaches to CSS theme implementation (not including the startup hack for background color):

#### 1. Global semantic-ui.min.css file

The benefit of this approach is that these CSS class definitions can refer to variables. So, we don't have to hard-code colors, fonts, in these CSS class definitions. If we want to change a color, we can change it in the single place where it is declared as a variable, and then all of its occurrences in CSS class definitions will be updated automatically.

The cost of this approach is that implementing a change requires us to rebuild the theme in its repo and install it into Meteor.

#### 2. Global Meteor style.css file

The benefit of this approach is ease of modification. To make a change, we just edit the file and re-run the system.

The cost is that we have to hard-code colors, sizes, etc. which might introduce inconsistencies.

#### 3. Local style.css file

The benefit of this approach is modularity and encapsulation.  The location of the file in the directory hierarchy implicitly defines its "scope".  The definitions are available only if imported by a component, injected by textual reference to CSS class.

The cost of this approach is the possibility of introducing local theme changes that are incompatible with the rest of the system.

#### 4. Local style.js file

The benefit of this approach is also modularity and encapsulation, as well as a more Javascript-y manner of use.

The cost is inconsistency with the "local style.css" approach.

#### 5. Local inline CSS

The benefit of this approach is even further modularity and encapsulation, plus conciseness for making "very small changes". Creating an additional style.css file might be overkill if all you want is a little padding.

The cost is, again, the potential for inconsistency and excessive use.








