---
title: Javascript, Typescript, CSS, and ESLint Checklist
sidebar_label: JS, TS, CSS, and ESLint
---

Javascript, Typescript, CSS, and ESLint best practices.

## Javascript

### JS-01: Name classes, components, files, and directories appropriately.

Classes should be pascalcase starting with a capital letter.
  * Example: CourseInstance

React components should be pascalcase starting with a capital letter.
  * Example: AcademicView

Functions and arrow functions should be camelcase starting with a lowercase letter.
  * Example: findUser

Filenames for classes and React components should follow the rules for the classes or components.
  * Example: AcademicView.tsx

Filenames for helpers should be lowercase with dashes between words. These files should be in a utilities directory.
  * Example: ui/pages/utilities/explorer-helpers.ts

Directory names are lowercase with dashes between words.
  * Example: ui/components/students/item-view

### JS-03: Use the spread operator when appropriate.

Can you use the spread operator?

### JS-04: Use object deconstruction when appropriate.

Can you use object deconstruction?

### JS-05: Use arrow functions when appropriate.

Can you use arrow functions? Note that arrow functions are normally better, except in Mocha tests.

### JS-06: Avoid lodash map, filter, etc.

ES6 includes many of the lodash functions (i.e. map, forEach, filter). Use the built-in function rather than the lodash version when available.

### JS-07: Avoid console.logs.

Console.log is useful for certain situations in development. All debugging console.log statements should be commented out in master.

### JS-08: Use JSDoc (TSDoc) comments appropriately.

When a comment starts with '/**', it will be processed by JSDoc (or TSDoc). Please ensure those comments are appropriate for inclusion.

### JS-09: When objects do not have many fields, use one line layout, not one line per field

Consider code like this:

```
  "level": {
      "six": {
        "plannedICE":
          {
            "i": 100,
            "c": 100,
            "e": 100
            },
        "earnedICE":
          {
            "i": 100,
            "c": 100,
            "e": 100
          },
          "reviews": 6
       },
      "five": {
        "plannedICE":
          {
          "i": 100,
          "c": 100,
          "e": 100
          },
          "earnedICE":
          {
            "i": 80,
            "c": 80,
            "e": 80
          },
          "reviews": 1
        },
      :
      :
      :
```

It is MUCH easier to read and understand when laid out like this:

```
  "level": {
      "six": { "plannedICE": { "i": 100, "c": 100, "e": 100 }, "earnedICE": {"i": 100, "c": 100, "e": 100}, "reviews": 6 },
      "five": { "plannedICE": { "i": 100, "c": 100, "e": 100 }, "earnedICE": { "i": 80, "c": 80, "e": 80 }, "reviews": 1 },
      "four": { "plannedICE": {"i": 100, "c": 100, "e": 100}, "earnedICE": {"i": 30, "c": 36, "e": 30}, "reviews": 0},
      "three": {"plannedICE": {"i": 0, "c": 0, "e": 0}, "earnedICE": {"i": 1, "c": 24, "e": 1}, "reviews": 0 },
      "two": {"plannedICE": {"i": 0, "c": 0, "e": 0}, "earnedICE": {"i": 0, "c": 12, "e": 0}, "reviews": 0 }
    },
```

We want to layout the code on the page in a way that makes it easiest to comprehend. Too many newlines results in too little code being shown in any one window of text, requiring lots of scrolling to get the "big picture".


## Typescript

### TS-01: Avoid any.

Can we change the type `any` to something more specific?

### TS-O2: Use React.FC().

Use the React.FC type parameterized with the props to express the type of a React component?

## CSS

### CSS-01: Use local style.css files when appropriate.

Meteor automatically loads the style.css file found in the app/client directory on startup.  This means you do not need to explicitly import this file into your react components.

Please use the app/client/style.css file only for "global" definitions, i.e. CSS selectors that apply across the entire UI.

If you want to define CSS that applies to just one page or component, consider creating a "local" style.css file in that page or component's directory. You can import that file explicitly with:

```
import './style.css';
```

Note that the file must be named "style.css" to avoid errors!

## ESLint

### ESLINT-01: No errors, avoid warnings.

Are there ESLint errors or warnings that should be removed?

### ESLINT-02: Consider modifying our standards.

Based upon your review of code, should we be modifying the set of ESLint rules?


