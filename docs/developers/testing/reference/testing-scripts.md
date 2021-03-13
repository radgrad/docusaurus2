---
title: Testing scripts
---

This page documents all the NPM scripts associated with testing.

:::caution
RadGrad testing is not fully supported on the Windows platform. In particular, test-all will fail because the "unimported" command is not supported on Windows.

In addition, running test-acceptance may fail due to a timeout problem.

For Windows users, your best strategy is to run the following testing commands individually:

  * meteor npm run lint
  * meteor npm run test-unit
  * meteor npm run test-integration
  * meteor npm run test-acceptance-development

If all of those pass, then you ask a fellow developer on a Unix platform to run the unimported command on your branch. Or, if you're feeling lucky, just merge your changes into master and monitor the CI build on GitHub.
:::

## meteor npm run lint

This command checks the code according to our RadGrad ESLint guidelines.

Example invocation and output:

```shell
$ meteor npm run lint

> radgrad2@ lint /Users/philipjohnson/github/radgrad/radgrad2/app
> eslint --fix --quiet --ext .tsx --ext .ts ./imports

$
```

## meteor npm run unimported

This command checks to see if there is any unused components:

Example invocation and output:

```
$ meteor npm run unimported

> radgrad2@2.0.20 unimported /Users/philipjohnson/github/radgrad/radgrad2/app
> npx unimported

npx: installed 182 in 14.796s
✓ There don't seem to be any unimported files.
```

## meteor npm run test-unit

This command runs all of the unit (server-only) tests, unless MOCHA_GREP is set, in which case only the subset of unit tests matching the string in MOCHA_GREP are run.

Example (abbreviated) output:

```shell
 $ meteor npm run test-unit

> radgrad2@ test-unit /Users/philipjohnson/github/radgrad/radgrad2/app
> cross-env METEOR_NO_RELEASE_CHECK=1 TEST_BROWSER_DRIVER=puppeteer meteor test --once --driver-package meteortesting:mocha --port 3300

[[[[[ Tests ]]]]]

=> Started proxy.
=> Started MongoDB.
I20201002-14:54:53.821(-10)?
I20201002-14:54:53.880(-10)? --------------------------------
I20201002-14:54:53.880(-10)? ----- RUNNING SERVER TESTS -----
I20201002-14:54:53.881(-10)? --------------------------------
I20201002-14:54:53.881(-10)?
I20201002-14:54:53.881(-10)?
I20201002-14:54:53.881(-10)?
I20201002-14:54:53.881(-10)?   AcademicTermCollection
=> Started your app.

=> App running at: http://localhost:3300/
I20201002-14:54:55.385(-10)?     ✓ Can define and removeIt (1533ms)
I20201002-14:54:55.391(-10)?     ✓ Cannot define duplicates
I20201002-14:54:55.491(-10)?     ✓ Can update (100ms)
I20201002-14:54:55.505(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:54:55.507(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:54:55.512(-10)?     ✓ Can assertAcademicTerm
I20201002-14:54:55.521(-10)?     ✓ Can findIdBySlug
I20201002-14:54:55.533(-10)?     ✓ Can toString
I20201002-14:54:55.570(-10)?     ✓ Can get the right termNumber
I20201002-14:54:55.588(-10)?     ✓ Can getID
I20201002-14:54:55.597(-10)?     ✓ Can getShortName
I20201002-14:54:55.608(-10)?
I20201002-14:54:55.608(-10)?   AcademicTermUtilities
I20201002-14:54:55.689(-10)?     ✓ Can get nextAcademicTerm
I20201002-14:54:55.691(-10)?     ✓ Can get upComingTerms
I20201002-14:54:55.701(-10)?
I20201002-14:54:55.701(-10)?   IceSnapshotCollection
I20201002-14:54:56.136(-10)?     ✓ Can define and remove (345ms)
I20201002-14:54:56.138(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:54:56.148(-10)?
  :
  :
  :
I20201002-14:57:44.100(-10)?   237 passing (3m)
I20201002-14:57:44.100(-10)?   1 pending
I20201002-14:57:44.100(-10)?
I20201002-14:57:44.100(-10)?
I20201002-14:57:44.100(-10)? --------------------------------
I20201002-14:57:44.100(-10)? ----- RUNNING CLIENT TESTS -----
I20201002-14:57:44.100(-10)? --------------------------------
I20201002-14:57:46.837(-10)? HeadlessChrome/86.0.4240.0
W20201002-14:57:47.605(-10)? (STDERR)
W20201002-14:57:48.010(-10)? (STDERR) waitFor is deprecated and will be removed in a future release. See https://github.com/puppeteer/puppeteer/issues/6214 for details and how to migrate your code.
I20201002-14:57:48.013(-10)?   0 passing (0ms)
I20201002-14:57:48.079(-10)? All tests finished!
I20201002-14:57:48.079(-10)?
I20201002-14:57:48.080(-10)? --------------------------------
I20201002-14:57:48.080(-10)? SERVER FAILURES: 0
I20201002-14:57:48.080(-10)? CLIENT FAILURES: 0
I20201002-14:57:48.080(-10)? --------------------------------
~/g/r/r/app (master|✔) $
```

For more details, see [How to write unit tests](../howto/write-unit-tests).

## meteor npm test-integration

Runs all of the integration tests (i.e. tests of Meteor Methods), unless MOCHA_GREP is set, in which case only the subset of unit tests matching the string in MOCHA_GREP are run.

Example invocation and (abbreviated) output:

```shell
$ meteor npm run test-integration

> radgrad2@ test-integration /Users/philipjohnson/github/radgrad/radgrad2/app
> cross-env TEST_BROWSER_DRIVER=puppeteer meteor test --no-release-check --exclude-archs web.browser.legacy,web.cordova --full-app --once --driver-package meteortesting:mocha --port 3300

[[[[[ Tests ]]]]]

=> Started proxy.
=> Started MongoDB.
I20201028-15:13:13.490(-10)?
I20201028-15:13:13.528(-10)? --------------------------------
I20201028-15:13:13.538(-10)? --- RUNNING APP SERVER TESTS ---
I20201028-15:13:13.539(-10)? --------------------------------
I20201028-15:13:13.539(-10)?
I20201028-15:13:13.539(-10)?
I20201028-15:13:13.539(-10)?
I20201028-15:13:13.539(-10)?   0 passing (0ms)
I20201028-15:13:13.539(-10)?
I20201028-15:13:13.539(-10)?
I20201028-15:13:13.540(-10)? --------------------------------
I20201028-15:13:13.540(-10)? --- RUNNING APP CLIENT TESTS ---
I20201028-15:13:13.540(-10)? --------------------------------
I20201028-15:13:13.827(-10)? Monti APM: completed instrumenting the app
I20201028-15:13:13.829(-10)? Test mode. Database initialization disabled, current database cleared, rate limiting disabled.
I20201028-15:13:14.018(-10)? Defining admin radgrad@hawaii.edu with password foo
=> Started your app.

=> App running at: http://localhost:3300/
I20201028-15:13:14.063(-10)? HeadlessChrome/86.0.4240.0
W20201028-15:13:16.181(-10)? (STDERR)
I20201028-15:13:16.634(-10)? Download the React DevTools for a better development experience: https://fb.me/react-devtools
W20201028-15:13:18.383(-10)? (STDERR) Warning: "Responsive" component from Semantic UI React is deprecated and will be removed in the next major release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4008
I20201028-15:13:18.443(-10)?
I20201028-15:13:18.444(-10)?   UserInteractionCollection Meteor Methods
I20201028-15:13:18.509(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
W20201028-15:13:18.968(-10)? (STDERR) waitFor is deprecated and will be removed in a future release. See https://github.com/puppeteer/puppeteer/issues/6214 for details and how to migrate your code.
I20201028-15:13:19.080(-10)?     Loaded database/modular/abi.student.fixture.json: Defines student Abi Kealoha. Requires minimal.fixture.
I20201028-15:13:19.749(-10)?     ✓ Define Method (515ms)
I20201028-15:13:19.761(-10)?     ✓ Remove Method
I20201028-15:13:19.763(-10)?   CareerGoalCollection Meteor Methods
I20201028-15:13:19.791(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201028-15:13:20.042(-10)?     Loaded database/modular/abi.student.fixture.json: Defines student Abi Kealoha. Requires minimal.fixture.
I20201028-15:13:20.542(-10)?     ✓ Define Method (450ms)
I20201028-15:13:20.569(-10)?     ✓ Update Method
I20201028-15:13:20.599(-10)?     ✓ Remove Method
I20201028-15:13:20.600(-10)?   CourseCollection Meteor Methods
I20201028-15:13:20.632(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201028-15:13:20.894(-10)?     Loaded database/modular/abi.student.fixture.json: Defines student Abi Kealoha. Requires minimal.fixture.
I20201028-15:13:21.414(-10)?     ✓ Define Method (468ms)
I20201028-15:13:21.451(-10)?     ✓ Update Method
I20201028-15:13:21.806(-10)?     ✓ getFutureEnrollment Methods (353ms)
I20201028-15:13:21.842(-10)?     ✓ Remove Method
  :
  :
  :
I20201028-15:13:47.632(-10)?   61 passing (29s)
I20201028-15:13:47.740(-10)? All tests finished!
I20201028-15:13:47.741(-10)?
I20201028-15:13:47.742(-10)? --------------------------------
I20201028-15:13:47.742(-10)? APP SERVER FAILURES: 0
I20201028-15:13:47.742(-10)? APP CLIENT FAILURES: 0
I20201028-15:13:47.742(-10)? --------------------------------
~/g/r/r/app (master|✚2) $

```

For more details, see [How to write integration tests](../howto/write-integration-tests).

## meteor npm run test-acceptance-development

To run the acceptance tests in development mode, first bring up a development version of RadGrad by invoking `meteor npm run start`.

Then, in a separate command shell, run the acceptance tests as follows:

```shell
$ meteor npm run test-acceptance-development

> radgrad2@ test-acceptance-development /Users/philipjohnson/github/radgrad/radgrad2/app
> testcafe chrome tests/*.testcafe.js

 Running tests in:
 - Chrome 86.0.4240.111 / macOS 10.14.6

 RadGrad localhost test with default db
 ✓ Test that landing page shows up


 1 passed (13s)
$
```

Running the acceptance tests in development mode pops up a Chrome browser window so you can see the progress of the tests. This makes it much easier to debug your test code.

For more details, see [How to write acceptance tests](../howto/write-acceptance-tests).


## meteor npm run test-acceptance

This command runs the acceptance tests in "batch" or "continuous integration" mode.  You do not need to (and indeed cannot) start up an instance of RadGrad. No Chrome window will pop up.

Here is a sample invocation:

```shell
$ meteor npm run test-acceptance

> radgrad2@ test-acceptance /Users/philipjohnson/github/radgrad/radgrad2/app
> testcafe chrome:headless tests/*.testcafe.js -q --app "meteor npm run start"

 Running tests in:
 - Chrome 86.0.4240.111 / macOS 10.14.6

 RadGrad localhost test with default db
 ✓ Test that landing page shows up (unstable)


 1 passed (1m 11s)
~/g/r/r/app (master|✚2) $
```

## meteor npm run test-all

This command sequentially invokes lint, then test-unit, then test-integration, and finally test-acceptance.

As its name implies, it does all the testing.

:::caution
This commmand does not work on Windows, since it invokes npx unimported.
:::


