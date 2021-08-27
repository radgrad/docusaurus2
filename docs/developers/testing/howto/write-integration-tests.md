---
title: How to write integration tests
sidebar_label: Write integration tests
---

Integration tests are initiated from the client side, and test to ensure that client-server interactions work as intended. Currently, integration tests only check that Meteor method implementations function correctly.

Each collection class contains its tests in a "sibling" file. Integration tests for the CourseCollection class are located in [CourseCollection.app-test.js](https://github.com/radgrad/radgrad2/blob/master/app/imports/api/course/CourseCollection.methods.app-test.ts).

The test file names are important: Meteor wants integration tests to be in files with the suffix `app-test.js`.

Many tests require the database to be initialized with test values.  RadGrad provides "database fixture" files for this purpose. See the [DB fixture](../concepts/database-fixtures) chapter for more details.

## Running all integration tests

To run all the integration tests, run this command:

```
$ meteor npm run test-integration
```

This will run the integration tests (i.e. those files with a `test-app.js` suffix). Here's a sample invocation, again with some lines elided:

```
$ meteor npm run test-integration

> radgrad@ test-integration /Users/philipjohnson/github/radgrad/radgrad/app
> METEOR_NO_RELEASE_CHECK=1 TEST_BROWSER_DRIVER=nightmare meteor test --full-app --once --driver-package dispatch:mocha --port 3100
[[[[[ Tests ]]]]]
=> Started proxy.
=> Started MongoDB.
I20170829-15:22:11.926(-10)? --------------------------------
I20170829-15:22:11.934(-10)? ----- RUNNING SERVER TESTS -----
I20170829-15:22:11.935(-10)? --------------------------------
I20170829-15:22:11.937(-10)?   0 passing (0ms)
I20170829-15:22:11.939(-10)? --------------------------------
I20170829-15:22:11.939(-10)? ----- RUNNING CLIENT TESTS -----
I20170829-15:22:11.940(-10)? --------------------------------
I20170829-15:22:11.969(-10)? Kadira: completed instrumenting the app
I20170829-15:22:11.970(-10)? Test mode. Database initialization disabled, current database cleared, rate limiting disabled.
=> Started your app.
=> App running at: http://localhost:3100/
I20170829-15:22:14.691(-10)?   CareerGoalCollection Meteor Methods
I20170829-15:22:14.773(-10)?     Loaded database/testing/minimal.fixture.json: Sample definitions for basic entities.
I20170829-15:22:15.310(-10)?     Loaded database/testing/abi.student.fixture.json: Defines student Abi Kealoha. Requires minimal.fixture.
I20170829-15:22:15.379(-10)?     Loaded database/testing/extended.courses.interests.fixture.json: Extends minimal with remaining ICS/EE courses and interests.
I20170829-15:22:16.508(-10)?     Loaded database/testing/academicplan.fixture.json: Defines Academic Plans. Requires extended.courses.interests.
I20170829-15:22:16.746(-10)?     Loaded database/testing/abi.courseinstances.fixture.json: Abi's course instances. Requires abi.user and extended.courses.interests.
I20170829-15:22:17.793(-10)?     ✓ Define Method (594ms)
I20170829-15:22:17.817(-10)?     ✓ Update Method
I20170829-15:22:17.849(-10)?     ✓ Remove Method
          :                                :                     :
          :                                :                     :
I20170829-15:22:36.396(-10)?   VerificationRequestCollection Meteor Methods
I20170829-15:22:36.466(-10)?     Loaded database/testing/minimal.fixture.json: Sample definitions for basic entities.
I20170829-15:22:36.606(-10)?     Loaded database/testing/abi.student.fixture.json: Defines student Abi Kealoha. Requires minimal.fixture.
I20170829-15:22:36.626(-10)?     Loaded database/testing/opportunities.fixture.json: Sample opportunities. Requires admin.user.
I20170829-15:22:37.443(-10)?     ✓ ProcessVerificationEvent Method (693ms)
I20170829-15:22:37.446(-10)?   60 passing (23s)
I20170829-15:22:37.446(-10)?   3 pending
I20170829-15:22:37.611(-10)? All tests finished!
I20170829-15:22:37.612(-10)? --------------------------------
I20170829-15:22:37.612(-10)? SERVER FAILURES: 0
I20170829-15:22:37.613(-10)? CLIENT FAILURES: 0
I20170829-15:22:37.614(-10)? --------------------------------
```

As you can see, in contrast to unit tests, no server-only tests were invoked.

## Run a subset of integration tests

To run a subset of the tests you can set the environment variable `MOCHA_GREP`. If `MOCHA_GREP` matches the name of the test as defined in the `describe` statement those tests will run.

### MacOS and Linux

For example:

```
$ export MOCHA_GREP="CourseCollection"
$ meteor npm run test-integration

> radgrad2@ test-integration /Users/philipjohnson/github/radgrad/radgrad2/app
> cross-env TEST_BROWSER_DRIVER=puppeteer meteor test --no-release-check --exclude-archs web.browser.legacy,web.cordova --full-app --once --driver-package meteortesting:mocha --port 3300

[[[[[ Tests ]]]]]

=> Started proxy.
=> Started MongoDB.
I20201028-14:38:56.775(-10)?
I20201028-14:38:56.814(-10)? --------------------------------
I20201028-14:38:56.815(-10)? --- RUNNING APP SERVER TESTS ---
I20201028-14:38:56.815(-10)? --------------------------------
I20201028-14:38:56.815(-10)?
I20201028-14:38:56.815(-10)?
I20201028-14:38:56.815(-10)?
I20201028-14:38:56.816(-10)?   0 passing (0ms)
I20201028-14:38:56.816(-10)?
I20201028-14:38:56.816(-10)?
I20201028-14:38:56.816(-10)? --------------------------------
I20201028-14:38:56.816(-10)? --- RUNNING APP CLIENT TESTS ---
I20201028-14:38:56.816(-10)? --------------------------------
I20201028-14:38:57.102(-10)? Monti APM: completed instrumenting the app
I20201028-14:38:57.103(-10)? Test mode. Database initialization disabled, current database cleared, rate limiting disabled.
I20201028-14:38:57.293(-10)? Defining admin radgrad@hawaii.edu with password foo
=> Started your app.

=> App running at: http://localhost:3300/
I20201028-14:38:57.431(-10)? HeadlessChrome/86.0.4240.0
W20201028-14:38:58.841(-10)? (STDERR)
I20201028-14:38:59.354(-10)? Download the React DevTools for a better development experience: https://fb.me/react-devtools
W20201028-14:39:01.133(-10)? (STDERR) Warning: "Responsive" component from Semantic UI React is deprecated and will be removed in the next major release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4008
I20201028-14:39:01.196(-10)?
I20201028-14:39:01.196(-10)?   CourseCollection Meteor Methods
I20201028-14:39:01.253(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
W20201028-14:39:01.546(-10)? (STDERR) waitFor is deprecated and will be removed in a future release. See https://github.com/puppeteer/puppeteer/issues/6214 for details and how to migrate your code.
I20201028-14:39:01.805(-10)?     Loaded database/modular/abi.student.fixture.json: Defines student Abi Kealoha. Requires minimal.fixture.
I20201028-14:39:02.512(-10)?     ✓ Define Method (539ms)
I20201028-14:39:02.550(-10)?     ✓ Update Method
I20201028-14:39:02.875(-10)?     ✓ getFutureEnrollment Methods (324ms)
I20201028-14:39:02.908(-10)?     ✓ Remove Method
I20201028-14:39:02.909(-10)?   FavoriteCourseCollection
I20201028-14:39:02.938(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201028-14:39:03.211(-10)?     Loaded database/modular/abi.student.fixture.json: Defines student Abi Kealoha. Requires minimal.fixture.
I20201028-14:39:03.713(-10)?     ✓ #define, #update, #removeIt Methods (461ms)
I20201028-14:39:03.715(-10)?   5 passing (3s)
I20201028-14:39:03.809(-10)? All tests finished!
I20201028-14:39:03.809(-10)?
I20201028-14:39:03.809(-10)? --------------------------------
I20201028-14:39:03.810(-10)? APP SERVER FAILURES: 0
I20201028-14:39:03.810(-10)? APP CLIENT FAILURES: 0
I20201028-14:39:03.810(-10)? --------------------------------
$

```

### Windows
```
$ $Env:MOCHA_GREP="CourseCollection"
$ meteor npm run test-integration

> radgrad2@ test-integration /Users/philipjohnson/github/radgrad/radgrad2/app
> cross-env TEST_BROWSER_DRIVER=puppeteer meteor test --no-release-check --exclude-archs web.browser.legacy,web.cordova --full-app --once --driver-package meteortesting:mocha --port 3300

[[[[[ Tests ]]]]]

=> Started proxy.
=> Started MongoDB.
I20201028-14:38:56.775(-10)?
I20201028-14:38:56.814(-10)? --------------------------------
I20201028-14:38:56.815(-10)? --- RUNNING APP SERVER TESTS ---
I20201028-14:38:56.815(-10)? --------------------------------
I20201028-14:38:56.815(-10)?
I20201028-14:38:56.815(-10)?
I20201028-14:38:56.815(-10)?
I20201028-14:38:56.816(-10)?   0 passing (0ms)
I20201028-14:38:56.816(-10)?
I20201028-14:38:56.816(-10)?
I20201028-14:38:56.816(-10)? --------------------------------
I20201028-14:38:56.816(-10)? --- RUNNING APP CLIENT TESTS ---
I20201028-14:38:56.816(-10)? --------------------------------
I20201028-14:38:57.102(-10)? Monti APM: completed instrumenting the app
I20201028-14:38:57.103(-10)? Test mode. Database initialization disabled, current database cleared, rate limiting disabled.
I20201028-14:38:57.293(-10)? Defining admin radgrad@hawaii.edu with password foo
=> Started your app.

=> App running at: http://localhost:3300/
I20201028-14:38:57.431(-10)? HeadlessChrome/86.0.4240.0
W20201028-14:38:58.841(-10)? (STDERR)
I20201028-14:38:59.354(-10)? Download the React DevTools for a better development experience: https://fb.me/react-devtools
W20201028-14:39:01.133(-10)? (STDERR) Warning: "Responsive" component from Semantic UI React is deprecated and will be removed in the next major release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4008
I20201028-14:39:01.196(-10)?
I20201028-14:39:01.196(-10)?   CourseCollection Meteor Methods
I20201028-14:39:01.253(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
W20201028-14:39:01.546(-10)? (STDERR) waitFor is deprecated and will be removed in a future release. See https://github.com/puppeteer/puppeteer/issues/6214 for details and how to migrate your code.
I20201028-14:39:01.805(-10)?     Loaded database/modular/abi.student.fixture.json: Defines student Abi Kealoha. Requires minimal.fixture.
I20201028-14:39:02.512(-10)?     ✓ Define Method (539ms)
I20201028-14:39:02.550(-10)?     ✓ Update Method
I20201028-14:39:02.875(-10)?     ✓ getFutureEnrollment Methods (324ms)
I20201028-14:39:02.908(-10)?     ✓ Remove Method
I20201028-14:39:02.909(-10)?   FavoriteCourseCollection
I20201028-14:39:02.938(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201028-14:39:03.211(-10)?     Loaded database/modular/abi.student.fixture.json: Defines student Abi Kealoha. Requires minimal.fixture.
I20201028-14:39:03.713(-10)?     ✓ #define, #update, #removeIt Methods (461ms)
I20201028-14:39:03.715(-10)?   5 passing (3s)
I20201028-14:39:03.809(-10)? All tests finished!
I20201028-14:39:03.809(-10)?
I20201028-14:39:03.809(-10)? --------------------------------
I20201028-14:39:03.810(-10)? APP SERVER FAILURES: 0
I20201028-14:39:03.810(-10)? APP CLIENT FAILURES: 0
I20201028-14:39:03.810(-10)? --------------------------------
$

```

