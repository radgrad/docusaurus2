---
title: Code Review Checklist
sidebar_label: Checklist
---

Some example checklist items for React and Typescript.

### Naming
 * Do filenames have consistent casing and extensions?
 * Do variables/functions/modules have consistent casing?
 * Do variables/functions/modules have descriptive names?

### Code
 * Look for blocks of code  with more than a few lines of code that look similar. Is it possible to refactor to reduce duplication?
 * Look for “too smart” and over-engineered code. Can it be simplified?
 * Are there multiple if/else blocks?  
 * Is there unused/unreachable code?
 * Is there commented out code?
 * Are there unnecessary comments? Comments that describe the _how_.
 * Are there missing comments? Comments that describe the _why_.
 * Can we change the type any to something more specific?

### ES6
 * Can you use the spread operator?
 * Can you use object deconstruction?
 * Is there consistent use of arrow functions?
 * Is there ES6 use of functions that lodash provides?

### ESLint
 * Are there any lint errors?
 * Are there console.logs? Are they needed?

### React
 * Are the components small?
 * Is the render method small? Minimize logic in the render method.
 * Are there state updates in loops?

### Maintainability
 * Is the code readable? Code should be self-explanatory. Get a feel of story reading, while going through the code.
 * Is the code easy to test? 
 * Is the code easy to debug?

### Reusability
 * Is the code DRY (Do not Repeat Yourself)? The same code should not be repeated more than twice.
 * Are there reusable services, functions and components?

