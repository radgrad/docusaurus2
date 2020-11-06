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

## Goal of acceptance testing

In RadGrad2, the goal of acceptance testing is to assess "availability", which is defined operationally as follows:

  * All pages (and their internal components) display successfully. This verifies that there are no fatal errors in the implementation of the UI component code. It does not verify that what is displayed is correct under all circumstances.

  * All pages that should display data from the database, when initialized with the default development data, should have non-empty results.  This verifies that data can be retrieved from the database and displayed. It does not verify that the correct dataset has been retrieved under all circumstances.

  * All user input mechanisms (i.e. forms) work for at least one set of legal inputs. This verifies that data can be added and retrieved from the database. It does not verify that forms work under all conditions.

The goal of assessing "availability" is motivated by the following considerations:

  * We want to increase the velocity of development by helping developers quickly assess whether or not their changes had a dramatic "ripple" effect, particularly when doing UI development. If all acceptance tests pass, then developers know that their changes did not produce fatal errors anywhere in the user interface.

  * With a small development resources, we do not want the development and maintenance of tests to consume too much of our development team's time and energy.

  * Since the user interface and functionality of the system is in flux, we want to reduce the "test maintainance" burden as much as possible. We don't want small UI changes to require acceptance test code modification.

## Page Object Model

Acceptance tests are designed using the "Page Object Model".  This means that each page, and in some cases component, will have a corresponding Javascript class that is responsible for providing methods to manipulate the UI components on that page.

Here is a simple example of a RadGrad class supporting acceptance testing according to the Page Object Model:

```js
import { Selector } from 'testcafe';
import { NavBar } from './navbar.component';

const navBar = new NavBar();

export class SigninPage {
  constructor() {
    this.pageId = '#signin-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Fills out and submits the form to signin, then checks to see that login was successful. */
  async signin(testController, credentials) {
    await this.isDisplayed(testController);
    await testController.typeText('#signin-form-email', credentials.username);
    await testController.typeText('#signin-form-password', credentials.password);
    await testController.click('#signin-form-submit');
    await navBar.isLoggedIn(testController, credentials.username);
  }
}
```

This class illustrates some common design patterns for acceptance testing using the Page Object Model in RadGrad:

  * A constructor along with an isDisplayed() method that defines an HTML ID that can be used to identify whether or not the page is currently visible. Acceptance tests will typically use HTML IDs to select elements of a page, though this is not required.

  * HTML IDs have naming standards.  Most pages should have a top-level ID that can be used in acceptance testing to assess whether the correct page is being displayed (and, more importantly, that no fatal error has occurred while attempting to display it). This ID has the default structure of the page name, followed by "-page". For example, "signin-page". For forms on a page, the ID should consist of the page name, followed by "-form-", followed by the field name.  For example, "signin-form-email".


