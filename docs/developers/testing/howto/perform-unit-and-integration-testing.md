---
title: How to perform unit and integration testing
sidebar_label: Perform unit and integration testing
---

RadGrad provides "unit" and "integration" tests. Both are designed to be run from the command line and useful for continuous integration.

Unit tests are tests that run only on the server side, and which focus on verifying that the RadGrad data model (i.e. the set of Collection classes) work as intended.

Integration tests are initiated from the client side, and test to ensure that client-server interactions work as intended. Currently, integration tests only check that Meteor method implementations function correctly. We do not yet have UI tests, such as tests that would be implemented using Selenium or some other browser driver.

We use the [Mocha](https://mochajs.org/) test runner and  [Chai Expect Assertions](http://chaijs.com/guide/styles/#expect). We follow recommendations from the [Meteor Guide Unit Testing Chapter](http://guide.meteor.com/testing.html#unit-testing).

Each collection class contains its tests in a "sibling" file. For example, unit tests for CourseCollection.js are located in [CourseCollection.test.js](https://github.com/radgrad/radgrad/blob/master/app/imports/api/course/CourseCollection.test.js). Its integration tests that focus on its Meteor Methods are located in [CourseCollection.app-test.js](https://github.com/radgrad/radgrad/blob/master/app/imports/api/course/CourseInstanceCollection.methods.app-test.js).

The test file names are important: Meteor wants unit tests to be in files with the suffix `test.js`, and integration tests to be in files with the suffix `app-test.js`.

Many tests require the database to be initialized with test values.  RadGrad provides "database fixture" files for this purpose. See the [DB fixture](docs/developers/testing/concepts/database-fixtures) chapter for more details.

## Unit testing

### Running the tests

To invoke the unit tests, use this command:

```
app$ meteor npm run test
```

This will implicitly run ESLint over the code base first, then run the unit tests (i.e. those files with a `test.js` suffix). Here's a sample invocation with some lines elided for brevity:


```
$ meteor npm run test

> radgrad@ pretest /Users/philipjohnson/github/radgrad/radgrad/app
> npm run lint

> radgrad@ lint /Users/philipjohnson/github/radgrad/radgrad/app
> eslint --quiet ./imports

> radgrad@ test /Users/philipjohnson/github/radgrad/radgrad/app
> TEST_BROWSER_DRIVER=nightmare meteor test --once --driver-package dispatch:mocha --no-release-check --port 3100

[[[[[ Tests ]]]]]                             

=> Started proxy.                             
=> Started MongoDB.                           
I20170829-15:08:14.714(-10)?                  
I20170829-15:08:14.796(-10)? --------------------------------
I20170829-15:08:14.800(-10)? ----- RUNNING SERVER TESTS -----
I20170829-15:08:14.801(-10)? --------------------------------
I20170829-15:08:14.804(-10)? 
I20170829-15:08:14.805(-10)?   CareerGoalCollection
I20170829-15:08:14.806(-10)? Kadira: completed instrumenting the app
=> Started your app.
=> App running at: http://localhost:3100/
I20170829-15:08:15.354(-10)? 
I20170829-15:08:15.368(-10)?     ✓ #define, #isDefined, #removeIt, #dumpOne, #restoreOne, #getSlug, #findNames (319ms)
I20170829-15:08:15.521(-10)?   CourseCollection
I20170829-15:08:15.734(-10)?     ✓ #define, #isDefined, #removeIt, #dumpOne, #restoreOne (199ms)
I20170829-15:08:15.810(-10)?     ✓ course shortname (74ms)
I20170829-15:08:15.886(-10)?   CourseInstanceCollection
I20170829-15:08:16.371(-10)?     ✓ #define, #isDefined, #removeIt, #dumpOne, #restoreOne (208ms)
I20170829-15:08:16.391(-10)?     ✓ #findCourseName, #toString
                :                       :                  :
                :                       :                  :
I20170829-15:08:32.692(-10)?   StudentProfileCollection
I20170829-15:08:32.831(-10)?     ✓ #define, #isDefined, #update, #removeIt, #dumpOne, #restoreOne (93ms)
I20170829-15:08:32.871(-10)?   VerificationRequestCollection
I20170829-15:08:33.121(-10)?     ✓ #define, #isDefined, #removeIt, #findOne, #toString, #dumpOne, #restoreOne (209ms)
I20170829-15:08:33.266(-10)?     ✓ #define using semester and opportunity (146ms)
I20170829-15:08:33.342(-10)?   80 passing (19s)
I20170829-15:08:33.342(-10)?   2 pending
I20170829-15:08:33.344(-10)? --------------------------------
I20170829-15:08:33.344(-10)? ----- RUNNING CLIENT TESTS -----
I20170829-15:08:33.345(-10)? --------------------------------
I20170829-15:08:36.031(-10)?   0 passing (1ms)
I20170829-15:08:36.048(-10)? [ERROR] There is no route for the path: /
I20170829-15:08:36.149(-10)? All tests finished!
I20170829-15:08:36.150(-10)? --------------------------------
I20170829-15:08:36.151(-10)? SERVER FAILURES: 0
I20170829-15:08:36.151(-10)? CLIENT FAILURES: 0
I20170829-15:08:36.152(-10)? --------------------------------
```

There should be no server or client failures listed. There will also be no client tests at all. In RadGrad, all unit tests occur on the server side.


#### Ubuntu running issue

On some linux installations, for example Ubuntu the tests might hang and never end. This is due to missing libraries that nightmare needs. To fix this issue run:
```
sudo apt-get install -y xvfb x11-xkb-utils xfonts-100dpi xfonts-75dpi xfonts-scalable xfonts-cyrillic x11-apps clang libdbus-1-dev libgtk2.0-dev libnotify-dev libgnome-keyring-dev libgconf2-dev libasound2-dev libcap-dev libcups2-dev libxtst-dev libxss1 libnss3-dev gcc-multilib g++-multilib
```
This will install xvfb and all of its dependencies.

To run a subset of the tests you can set the environment variable `MOCHA_GREP`. If `MOCHA_GREP` matches the name of the test as defined in the `describe` statement those tests will run.

#### Setting the MOCHA_GREP environment variable

##### Fish shell

```
$ env MOCHA_GREP="CourseCollection" meteor npm run test

> radgrad@ pretest /Users/philipjohnson/github/radgrad/radgrad/app
> npm run lint

> radgrad@ lint /Users/philipjohnson/github/radgrad/radgrad/app
> eslint --quiet ./imports

> radgrad@ test /Users/philipjohnson/github/radgrad/radgrad/app
> TEST_BROWSER_DRIVER=nightmare meteor test --once --driver-package dispatch:mocha --no-release-check --port 3100

[[[[[ Tests ]]]]]                             

=> Started proxy.                             
=> Started MongoDB.                           
I20170829-15:08:14.714(-10)?                  
I20170829-15:08:14.796(-10)? --------------------------------
I20170829-15:08:14.800(-10)? ----- RUNNING SERVER TESTS -----
I20170829-15:08:14.801(-10)? --------------------------------
I20170829-15:08:14.804(-10)? 
I20170829-15:08:15.521(-10)?   CourseCollection
I20170829-15:08:15.734(-10)?     ✓ #define, #isDefined, #removeIt, #dumpOne, #restoreOne (199ms)
I20170829-15:08:15.810(-10)?     ✓ course shortname (74ms)
I20170829-15:08:33.342(-10)?   2 passing (19s)
I20170829-15:08:33.344(-10)? --------------------------------
I20170829-15:08:33.344(-10)? ----- RUNNING CLIENT TESTS -----
I20170829-15:08:33.345(-10)? --------------------------------
I20170829-15:08:36.031(-10)?   0 passing (1ms)
I20170829-15:08:36.048(-10)? [ERROR] There is no route for the path: /
I20170829-15:08:36.149(-10)? All tests finished!
I20170829-15:08:36.150(-10)? --------------------------------
I20170829-15:08:36.151(-10)? SERVER FAILURES: 0
I20170829-15:08:36.151(-10)? CLIENT FAILURES: 0
I20170829-15:08:36.152(-10)? --------------------------------
```

##### Bash shell

```
$ export MOCHA_GREP="CourseCollection" 
$ meteor npm run test

> radgrad@ pretest /Users/philipjohnson/github/radgrad/radgrad/app
> npm run lint

> radgrad@ lint /Users/philipjohnson/github/radgrad/radgrad/app
> eslint --quiet ./imports

> radgrad@ test /Users/philipjohnson/github/radgrad/radgrad/app
> TEST_BROWSER_DRIVER=nightmare meteor test --once --driver-package dispatch:mocha --no-release-check --port 3100

[[[[[ Tests ]]]]]                             

=> Started proxy.                             
=> Started MongoDB.                           
I20170829-15:08:14.714(-10)?                  
I20170829-15:08:14.796(-10)? --------------------------------
I20170829-15:08:14.800(-10)? ----- RUNNING SERVER TESTS -----
I20170829-15:08:14.801(-10)? --------------------------------
I20170829-15:08:14.804(-10)? 
I20170829-15:08:15.521(-10)?   CourseCollection
I20170829-15:08:15.734(-10)?     ✓ #define, #isDefined, #removeIt, #dumpOne, #restoreOne (199ms)
I20170829-15:08:15.810(-10)?     ✓ course shortname (74ms)
I20170829-15:08:33.342(-10)?   2 passing (19s)
I20170829-15:08:33.344(-10)? --------------------------------
I20170829-15:08:33.344(-10)? ----- RUNNING CLIENT TESTS -----
I20170829-15:08:33.345(-10)? --------------------------------
I20170829-15:08:36.031(-10)?   0 passing (1ms)
I20170829-15:08:36.048(-10)? [ERROR] There is no route for the path: /
I20170829-15:08:36.149(-10)? All tests finished!
I20170829-15:08:36.150(-10)? --------------------------------
I20170829-15:08:36.151(-10)? SERVER FAILURES: 0
I20170829-15:08:36.151(-10)? CLIENT FAILURES: 0
I20170829-15:08:36.152(-10)? --------------------------------
```

##### Windows PowerShell

```
$ $Env:MOCHA_GREP="CourseCollection" 
$ meteor npm run test-win

> radgrad@ pretest C:\GitHub\radgrad\app
> npm run lint

> radgrad@ lint C:\GitHub\radgrad\app
> eslint --quiet ./imports

> radgrad@ test C:\GitHub\radgrad\app
> meteor test --once --driver-package dispatch:mocha --no-release-check --port 3100

[[[[[ Tests ]]]]]                             

=> Started proxy.                             
=> Started MongoDB.                           
I20170829-15:08:14.714(-10)?                  
I20170829-15:08:14.796(-10)? --------------------------------
I20170829-15:08:14.800(-10)? ----- RUNNING SERVER TESTS -----
I20170829-15:08:14.801(-10)? --------------------------------
I20170829-15:08:14.804(-10)? 
I20170829-15:08:15.521(-10)?   CourseCollection
I20170829-15:08:15.734(-10)?     ✓ #define, #isDefined, #removeIt, #dumpOne, #restoreOne (199ms)
I20170829-15:08:15.810(-10)?     ✓ course shortname (74ms)
I20170829-15:08:33.342(-10)?   2 passing (19s)
I20170829-15:08:33.344(-10)? --------------------------------
I20170829-15:08:33.344(-10)? ----- RUNNING CLIENT TESTS -----
I20170829-15:08:33.345(-10)? --------------------------------
I20170829-15:08:36.031(-10)?   0 passing (1ms)
I20170829-15:08:36.048(-10)? [ERROR] There is no route for the path: /
I20170829-15:08:36.149(-10)? All tests finished!
I20170829-15:08:36.150(-10)? --------------------------------
I20170829-15:08:36.151(-10)? SERVER FAILURES: 0
I20170829-15:08:36.151(-10)? CLIENT FAILURES: 0
I20170829-15:08:36.152(-10)? --------------------------------
```

### Structure for a Collection Unit Test

RadGrad collection have five required methods.

* **define**: Creates a new document in the collection. Returns the document's id.
* **update**: Updates a document in the collection.
* **removeIt**: Removes a document from the collection.
* **dumpOne**: Returns a JSON object suitable for defining the document.
* **checkIntegrity**: Checks each document in the collection for integrity. Returns an array of problems.

All of our unit test have a standard format. We ensure that, at a minimum, we test the five methods.

To help simplify the testing process, we create one or more functions to make a sample document for the collection. These functions are defined and exported in a file named Sample<Collection/>.ts. The SampleCourses.ts defines and exports three functions, `makeSampleCourse`, `makeSampleCourseInstance`, and `getRandomGrade`. We use these functions in other tests.

The standard format looks something like:

```ts
if (Meteor.isServer) {
  describe('<Name of the Collection/>', function testSuite() {
    before(function setup() {
      removeAllEntities(); // Always start with an empty database.
    });

    after(function teardown() {
      removeAllEntities(); // Clean up any residual documents.
    });
    it('Can define and removeIt', function test1(done) { // Test the define and removeIt methods
      this.timeout(5000);
      // Do the tests using fast check and or faker. 
      // Define a document in the collection. const docID = <Collection>.define({ definition object });
      // Check to see if the document is defined. expect(<Collection>.isDefined(docID)).to.be.true
      // Remove the document. <Collection>.removeIt(docID)
      // Check to see that the document isn't defined. expect(<Collection>.isDefined(docID)).to.be.false
      done();
    });

    it('Can define duplicates', function test2(done) { // Test if duplicate documents can be defined
      // Try to define two documents with the same contents.
      // If this is legal the the two document ids should be the same.
      // If not then the second define should throw an Exception.
      // This test should remove the document(s) it creates.
      done();
    });

    it('Can update', function test3(done) { // Test updating documents
      this.timeout(5000);
      // Create a sample document in the collection. const docID = makeSample<Collection Name>();
      // Use fast check assert and properties to create many updates.
      // Call update <Collection>.update(docID, { update data });
      // Get the updated document. <Collection>.findDoc(docID);
      // Check the document against the update data using expect.
      // Clean up the sample document. <Collection>.removeIt(docID);
      done();
    });

    it('Can dumpOne, removeIt, and restoreOne', function test4() { // Tests dumpOne and restoreOne
      // Create a sample document in the collection. let docID = makeSample<Collection Name>();
      // Get the original document. const original = <Collection>.findDoc(docID);
      // Create the dump object. const dumpObject = <Collection>.dumpOne(docID);
      // Remove the document. <Collection>.removeIt(docID);
      // Ensure it is not defined. expect(<Collection>.isDefined(docID)).to.be.false;
      // Restore the dump object. docID = <Collection>.restoreOne(dumpObject);
      // Ensure the document is defined. expect(<Collection>.isDefined(docID)).to.be.true;
      // Get the restored document. const restored = <Collection>.findDoc(docID);
      // Check the restored document verses the original document.
      // Don't clean up. We want the document for the next test.
    });

    it('Can checkIntegrity no errors', function test5() { // Tests checkIntegrity
      // Get the problems/errors. const errors = <Collection>.checkIntegrity();
      // If creating the sample document creates all the supporting documents then 
      // expect(errors.length).to.equal(0);
      // If not then 
      // When we call makeSampleCourse we don't create the courses for the prereqs
      // expect(errors.length).to.equal(course.prerequisites.length);
    });
  });
}
```
The above five tests ensure that our collection's basic functionality works. If you define other methods for your collection then you should create more tests after the base five. For example, the CourseCollection tests has additional tests.
```ts
    it('Can get slug for course', function test7() {
      const course = Courses.findOne({});
      const slug = Slugs.getNameFromID(course.slugID);
      const badSlug = faker.lorem.word();
      expect(Courses.findSlugByID(course._id)).to.equal(slug);
      expect(Courses.findSlugByID(course._id)).to.not.equal(badSlug);
    });

    it('Can detect if has interest', function test8() {
      const interestID = makeSampleInterest();
      const badInterestID = makeSampleInterest();
      const courseID = makeSampleCourse({ interestID });
      expect(Courses.hasInterest(courseID, interestID)).to.be.true;
      expect(Courses.hasInterest(courseID, badInterestID)).to.be.false;
    });
```

## Integration testing

Integration tests check that client-level code can interact with the server side appropriately.  To invoke the integration tests, run this command:

```
app$ meteor npm run test-app
```

This will run the integration tests (i.e. those files with a `test-app.js` suffix). Here's a sample invocation, again with some lines elided:

```
meteor npm run test-app

> radgrad@ test-app /Users/philipjohnson/github/radgrad/radgrad/app
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

You can reduce the number of tests that are run by using the `MOCHA_GREP` environment variable, as discussed above.


## Miscellaneous testing issues.

Here are a few issues regarding tests.

* Arrow function use with Mocha is discouraged. See [http://mochajs.org/#arrow-functions](http://mochajs.org/#arrow-functions).


