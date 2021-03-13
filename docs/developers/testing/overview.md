---
title: Overview of RadGrad Testing
sidebar_label: Overview
---

Testing in RadGrad follows the guidelines in the [Meteor Testing Guide](https://guide.meteor.com/testing.html), which is worth reading if you are new to testing and/or Meteor. The Meteor Testing Guide begins with some testing basics, including the four canonical types of tests: Unit, Integration, Acceptance, and Load.  RadGrad currently provides support for the first three of those four kinds of tests.

## Unit tests

Unit tests focus on one small module of the application. In the context of RadGrad, unit tests are tests that run on the server-side only.  RadGrad unit tests generally focus on the data model and test code in the api/ directory.  To run the unit tests, you can invoke:

```
$ meteor npm run test-unit
```

## Integration tests

Integration tests focus on testing interactions between modules.  In the context of RadGrad, integration tests are tests that check the correct functioning of [Meteor Methods](https://guide.meteor.com/methods.html). Meteor Methods are essentially remote procedure calls from the client to the server, and so RadGrad integration tests exercise code on both the client and server side of the system. To run the integration tests, you can invoke:

```
$ meteor npm run test-integration
```

## Acceptance tests

Acceptance tests focus on testing the application as experienced by the end user. In the context of RadGrad, acceptance tests use [TestCafe](https://devexpress.github.io/testcafe/) to step through the user interface with the goal of assessing that all pages display, all links are valid, the default database contents appear to be retrieved correctly, and that forms enter and update information correctly. To run the acceptance tests, you can invoke:

```
$ meteor npm run test-acceptance
```

## Coding standard compliance checks

In addition to these three kinds of tests, there are two tools used to check for compliance with coding standards.

### ESLint

ESLint tests to see that many of our coding standards are enforced, as well as testing to see that certain design antipatterns are not present in the code.  To run this test, you  invoke:

```
$ meteor npm run lint
```

### Unimported

We also want to make sure that there is no "vestigial" code--i.e. code that is no longer invoked anywhere. To check this, we use the "unimported" package, invoked as:

```
$ meteor npm run unimported
```

## Variations

There are variations of these scripts to support various development situations, which are documented more completely in the [Testing Scripts Reference](./reference/testing-scripts).




