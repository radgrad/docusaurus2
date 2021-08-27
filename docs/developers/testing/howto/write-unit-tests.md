---
title: How to write unit tests
sidebar_label: Write unit tests
---

Unit tests are tests that run only on the server side, and which focus on verifying that the RadGrad data model (i.e. the set of Collection classes in the api/ directory) work as intended.


To write unit tests, we use the [Mocha](https://mochajs.org/) test runner and  [Chai Expect Assertions](http://chaijs.com/guide/styles/#expect). We follow recommendations from the [Meteor Guide Unit Testing Chapter](http://guide.meteor.com/testing.html#unit-testing).

Each collection class contains its tests in a "sibling" file. For example, unit tests for CourseCollection.js are located in [CourseCollection.test.js](https://github.com/radgrad/radgrad/blob/master/app/imports/api/course/CourseCollection.test.js).

The test file names are important: Meteor wants unit tests to be in files with the suffix `test.js`.

Many tests require the database to be initialized with test values.  RadGrad provides "database fixture" files for this purpose. See the [DB fixture](../concepts/database-fixtures) chapter for more details.

## Running all unit tests

To invoke all of the unit tests, use this command:

```
$ meteor npm run test-unit
```

Here's what an abbreviated, sample output looks like:

```
$ meteor npm run test

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

There should be no server or client failures listed. Indeed, there will also be no client tests at all. In RadGrad, all unit tests occur on the server side.


## Run a subset of unit tests

To run a subset of the tests you can set the environment variable `MOCHA_GREP`. If `MOCHA_GREP` matches the name of the test as defined in the `describe` statement those tests will run.

### MacOS and Linux

For example:

```
$ export MOCHA_GREP="CourseCollection"
$ meteor npm run test-unit

> radgrad@ test-unit /Users/philipjohnson/github/radgrad/radgrad/app
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

### Windows
```
$ $Env:MOCHA_GREP="CourseCollection"
$ meteor npm run test-unit

> radgrad@ test-unit /Users/philipjohnson/github/radgrad/radgrad/app
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


## Default structure of a unit test

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

