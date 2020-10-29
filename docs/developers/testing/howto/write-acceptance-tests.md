---
title: How to write acceptance tests
sidebar_label: Write acceptance tests
---

We use [TestCafe](https://devexpress.github.io/testcafe/) a node.js tool to automate acceptance (i.e. end-to-end)  testing.


We use the Page Object Model to simplify acceptance test development.

## Running acceptance tests during development

To run acceptance tests while you are developing them, there are two steps. First, bring up an instance of RadGrad in one command shell with the development database fixture:

```
$ meteor npm run start
```

Then, create a second command shell, and invoke TestCafe in "development" mode:

```
$ meteor npm run test-acceptance-development
```

When you invoke TestCafe in this fashion, it will display a Chrome browser and you can watch the acceptance tests as they execute. This is very useful for seeing when and how your test fails.

## Running acceptance tests for continuous integration

For continuous integration, or for other "batch" command situations, it is inappropriate to have to run an instance of RadGrad in a separate command shell, and/or have Chrome windows popping up on your screen.

So, to simply run the acceptance tests "in background", and have a development version of RadGrad automatically instantiated and terminated, invoke the acceptance tests this way:

```
$ meteor npm run test-acceptance
```

## Structure of acceptance tests

:::note
More details on acceptance testing to come.
:::
