---
title: Coding Standards
sidebar_label: Coding Standards
---

## ESLint

We aspire to conform to the [AirBnB ES6 Javascript Style Guide](http://airbnb.io/javascript/), and use [ESLint](http://eslint.org/) to enforce compliance as much as possible with these recommendations. 

You can run ESLint configured for AirBnB and Meteor from the command line as follows:

```
app$ meteor npm run lint
```

During active development, however, a much better way to enforce ESLint guidelines is to install ESLint into your editor. 
The [ICS 314 instructions on ESLint in IntelliJ](http://courses.ics.hawaii.edu/ics314f19/morea/coding-standards/experience-install-eslint.html) provides detailed instructions on run ESLint in IntelliJ.
 
 
## Naming conventions

Directories are all lowercase, hyphens separate words. For example, `degree-program`.

Typescript classes are named in camel-case. For example, `DegreeProgram`.

Meteor methods should be placed in their own file, typically in a directory containing the definition of the Collection that they operate on.  They should be named with the extension `methods.js`.


## JSDoc conventions

Only use JSDoc comments ```/**    */``` for things we want to put in the API documentation. Use regular comments  ```// ``` or ```/*   */``` for coding instructions.

Even though we are using Typescript, JSDoc does not understand Typescript so we have to supply the types of the parameters and return values to get good documentation. For example
```ts
  /**
   * Returns the number of documents in this collection.
   * @returns { Number } The number of elements in this collection.
   */
  public count(): number {
    return this.collection.find().count();
  }
```
generates
<img src="/img/radgrad2/developer/BaseCollection.count.png" width="100%"/>

## Testing conventions

All complex functions should have an associated unit test. 

Complex tests may need a DB fixture to be loaded in order to set up the DB state correctly.

Methods should have integration tests to ensure that client-server communication works properly. 

See the [Testing section](./developer-guide-testing) for more details.

## Import paths

There are two ways to specify import paths: absolute and relative.

Absolute:

```
import BaseInstanceCollection from '/imports/api/base/BaseInstanceCollection';
```

Relative:

```
import BaseInstanceCollection from '../base/BaseInstanceCollection';
```

Please use relative paths, because IntelliJ can perform completion and refactoring on relative paths but not absolute paths.

 
