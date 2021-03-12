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

ES6 includes many of the lodash functions. Use the built-in function rather than the lodash version when possible.

### JS-07: Avoid console.logs.

Console.log is useful for certain situations in development. All console.log statements should be commented out in master.

### JS-08: Use JSDoc (TSDoc) comments appropriately.

When a comment starts with '/**', it will be processed by JSDoc (or TSDoc). Please ensure those comments are appropriate for inclusion.

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


