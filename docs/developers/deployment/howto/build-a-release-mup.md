---
title: Build and publish a new release of RadGrad
sidebar_label: Build a release
---

Eventually, we would like to implement continuous deployment of RadGrad. This would mean that when a developer makes a commit or merges a branch into master, the new master branch will be tested and automatically deployed to the production server.

For the time being, building and publishing a new release of RadGrad is a manual process consisting of two steps:

  1. Ensuring that the current version of RadGrad on your laptop is appropriate for release.
  2. Invoking mup deploy to push that version to the production server.

## Preparing a new release

The basic approach to preparing a new release is to ensure that all quality assurance checks pass.  Some of the current tests are as follows.

### ESLint

ESLint checks the code according to our RadGrad ESLint guidelines.

Currently this takes approximately about 45 seconds on my laptop.

```shell
meteor npm run lint
```

Example invocation and output:

```shell
app/ $ meteor npm run lint

> radgrad2@ lint /Users/philipjohnson/github/radgrad/radgrad2/app
> eslint --fix --quiet --ext .tsx --ext .ts ./imports

app/ $
```

### Unit Tests

You can run the server-side (unit tests) with the test-no-lint command.

Currently this takes about 4 minutes to run on my laptop.

```shell
meteor npm run test-no-lint
```

Sample invocation and output:

```shell
 $ meteor npm run test-no-lint

> radgrad2@ test-no-lint /Users/philipjohnson/github/radgrad/radgrad2/app
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
I20201002-14:54:56.148(-10)?   UserInteractionCollection
I20201002-14:54:56.515(-10)?     ✓ Can define and removeIt (346ms)
I20201002-14:54:56.519(-10)?     ✓ Cannot define duplicates
I20201002-14:54:56.711(-10)?     ✓ Can restoreOne then dumpOne (192ms)
I20201002-14:54:56.932(-10)?     ✓ Can checkIntegrity all errors (220ms)
I20201002-14:54:57.098(-10)?     ✓ Can removeUser (166ms)
I20201002-14:54:57.121(-10)?
I20201002-14:54:57.122(-10)?   CareerGoalCollection
I20201002-14:54:59.560(-10)?     ✓ Can define and removeIt (2426ms)
I20201002-14:54:59.584(-10)?     ✓ Can define duplicates
I20201002-14:54:59.601(-10)?     ✓ Can find names
I20201002-14:54:59.930(-10)?     ✓ Can update (329ms)
I20201002-14:54:59.951(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:54:59.952(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:54:59.956(-10)?     ✓ Can get Interest
I20201002-14:54:59.956(-10)?     ✓ findDoc(undefined) throws
I20201002-14:54:59.995(-10)?
I20201002-14:54:59.996(-10)?   CourseCollection
I20201002-14:55:01.905(-10)?     ✓ Can define and removeIt (1890ms)
I20201002-14:55:01.938(-10)?     ✓ Can define duplicates
I20201002-14:55:02.781(-10)?     ✓ Can update (843ms)
I20201002-14:55:02.814(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:55:02.817(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:55:02.820(-10)?     ✓ Can get slug for course
I20201002-14:55:02.838(-10)?     ✓ Can detect if has interest
I20201002-14:55:02.882(-10)?
I20201002-14:55:02.882(-10)?   CourseInstanceCollection
I20201002-14:55:03.819(-10)?     ✓ Can define and removeIt (918ms)
I20201002-14:55:03.890(-10)?     ✓ Cannot define duplicates (71ms)
I20201002-14:55:04.328(-10)?     ✓ Can update (438ms)
I20201002-14:55:04.475(-10)?     ✓ Can dumpOne, removeIt, and restoreOne (147ms)
I20201002-14:55:04.477(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:55:04.478(-10)?     ✓ Can removeUser
I20201002-14:55:04.536(-10)?     ✓ Can getCourseDoc, getCourseSlug, getAcademicTermDoc, getStudentDoc (57ms)
I20201002-14:55:04.552(-10)?
I20201002-14:55:04.552(-10)?   AcademicPlanCollection
I20201002-14:55:09.697(-10)?     ✓ Can define and removeIt (5137ms)
I20201002-14:55:09.751(-10)?     ✓ Can define duplicates (53ms)
I20201002-14:55:10.280(-10)?     ✓ Can update (529ms)
I20201002-14:55:10.390(-10)?     ✓ Can dumpOne, removeIt, and restoreOne (110ms)
I20201002-14:55:10.399(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:55:10.401(-10)?     ✓ Can get latest plans
I20201002-14:55:10.409(-10)?     ✓ Can checkIntegrity errors
I20201002-14:55:10.422(-10)?
I20201002-14:55:10.423(-10)?   AcademicPlanUtilities
I20201002-14:55:10.423(-10)?     ✓ getPlanChoices
I20201002-14:55:10.424(-10)?     ✓ isAcademicPlanValid
I20201002-14:55:10.424(-10)?     ✓ addChoiceToPlan
I20201002-14:55:10.424(-10)?     ✓ addDuplicateChoice
I20201002-14:55:10.424(-10)?
I20201002-14:55:10.424(-10)?   AcademicYearInstanceCollection
I20201002-14:55:12.612(-10)?     ✓ Can define and removeIt (2176ms)
I20201002-14:55:12.652(-10)?     ✓ Cannot define duplicates (40ms)
I20201002-14:55:14.496(-10)?     ✓ Can update (1844ms)
I20201002-14:55:14.521(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:55:14.523(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:55:14.525(-10)?     ✓ Can remove user
I20201002-14:55:14.536(-10)?
I20201002-14:55:14.536(-10)?   AcademicYearUtilities
I20201002-14:55:14.537(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201002-14:55:14.668(-10)?     Loaded database/modular/abi.student.fixture.json: Defines student Abi Kealoha. Requires minimal.fixture.
I20201002-14:55:14.772(-10)?     Loaded database/modular/extended.courses.interests.fixture.json: Extends minimal with remaining ICS/EE courses and interests.
I20201002-14:55:15.506(-10)?     Loaded database/modular/abi.courseinstances.fixture.json: Abi's course instances. Requires abi.user and extended.courses.interests.
I20201002-14:55:15.781(-10)?     ✓ #getStudentsCurrentAcademicTermNumber.
I20201002-14:55:15.784(-10)?     ✓ #getStudentTerms.
I20201002-14:55:15.813(-10)?
I20201002-14:55:15.814(-10)?   DesiredDegreeCollection
I20201002-14:55:16.750(-10)?     ✓ Can define and removeIt (921ms)
I20201002-14:55:16.761(-10)?     ✓ Cannot define duplicates
I20201002-14:55:16.924(-10)?     ✓ Can update (163ms)
I20201002-14:55:16.937(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:55:16.938(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:55:16.948(-10)?
I20201002-14:55:16.948(-10)?   PlanChoiceCollection
I20201002-14:55:17.737(-10)?     ✓ Can define and removeIt (781ms)
I20201002-14:55:17.741(-10)?     ✓ Can define duplicates
I20201002-14:55:17.852(-10)?     ✓ Can update (111ms)
I20201002-14:55:17.857(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:55:17.866(-10)?     ✓ Can checkIntegrity with errors
I20201002-14:55:17.867(-10)?     ✓ Can get toString
I20201002-14:55:17.867(-10)?     ✓ Can get choice type
I20201002-14:55:17.868(-10)?     ✓ Can check if course slug satisfies choice
I20201002-14:55:17.876(-10)?
I20201002-14:55:17.876(-10)?   PlanChoiceUtilities
I20201002-14:55:17.876(-10)?     ✓ #stripCounter
I20201002-14:55:17.876(-10)?     ✓ #is*Choice
I20201002-14:55:17.877(-10)?     ✓ #complexChoiceToArray
I20201002-14:55:17.877(-10)?     ✓ #buildCourseSlugName
I20201002-14:55:17.877(-10)?     ✓ #satisfiesPlanChoice
I20201002-14:55:17.878(-10)?     ✓ #getDepartment, #getDepartments
I20201002-14:55:17.878(-10)?     ✓ #compoundCombineChoices
I20201002-14:55:17.878(-10)?
I20201002-14:55:17.878(-10)?   PreferredChoice
I20201002-14:55:17.879(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201002-14:55:17.973(-10)?     Loaded database/modular/extended.courses.interests.fixture.json: Extends minimal with remaining ICS/EE courses and interests.
I20201002-14:55:18.776(-10)?     ✓ #hasPreferences, #getBestChoices, #getOrderedChoices
I20201002-14:55:18.795(-10)?
I20201002-14:55:18.795(-10)?   FavoriteAcademicPlanCollection
I20201002-14:55:18.973(-10)?     ✓ Can define and removeIt (98ms)
I20201002-14:55:18.979(-10)?     ✓ Cannot define duplicates
I20201002-14:55:19.098(-10)?     ✓ Can update (119ms)
I20201002-14:55:19.106(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:55:19.108(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:55:19.115(-10)?     ✓ Can get docs and slug
I20201002-14:55:19.149(-10)?
I20201002-14:55:19.149(-10)?   FavoriteCareerGoalCollection
I20201002-14:55:19.180(-10)?     ✓ Can define and removeIt
I20201002-14:55:19.189(-10)?     ✓ Cannot define duplicates
I20201002-14:55:19.301(-10)?     ✓ Can update (111ms)
I20201002-14:55:19.308(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:55:19.309(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:55:19.317(-10)?     ✓ Can get docs and slug
I20201002-14:55:19.326(-10)?
I20201002-14:55:19.327(-10)?   FavoriteCourseCollection
I20201002-14:55:19.409(-10)?     ✓ Can define and removeIt (40ms)
I20201002-14:55:19.415(-10)?     ✓ Cannot define duplicates
I20201002-14:55:19.526(-10)?     ✓ Can update (110ms)
I20201002-14:55:19.533(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:55:19.535(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:55:19.544(-10)?     ✓ Can get docs and slug
I20201002-14:55:19.553(-10)?
I20201002-14:55:19.553(-10)?   FavoriteInterestCollection
I20201002-14:55:19.590(-10)?     ✓ Can define and removeIt
I20201002-14:55:19.597(-10)?     ✓ Cannot define duplicates
I20201002-14:55:19.707(-10)?     ✓ Can update (110ms)
I20201002-14:55:19.715(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:55:19.717(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:55:19.724(-10)?     ✓ Can get docs and slug
I20201002-14:55:19.732(-10)?
I20201002-14:55:19.733(-10)?   FavoriteOpportunityCollection
I20201002-14:55:19.919(-10)?     ✓ Can define and removeIt (38ms)
I20201002-14:55:19.925(-10)?     ✓ Cannot define duplicates
I20201002-14:55:20.043(-10)?     ✓ Can update (118ms)
I20201002-14:55:20.052(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:55:20.053(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:55:20.061(-10)?     ✓ Can get docs and slug
I20201002-14:55:20.071(-10)?
I20201002-14:55:20.071(-10)?   FeedCollection
I20201002-14:55:23.740(-10)?     ✓ Can define and removeIt (3660ms)
I20201002-14:55:23.756(-10)?     ✓ Cannot define duplicates
I20201002-14:55:32.945(-10)?     ✓ Can update (9189ms)
I20201002-14:55:32.959(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:55:32.960(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:55:33.145(-10)?
I20201002-14:55:33.145(-10)?   FeedbackInstanceCollection
I20201002-14:55:34.863(-10)?     ✓ Can define and removeIt (1684ms)
I20201002-14:55:34.878(-10)?     ✓ Cannot define duplicates
I20201002-14:55:36.308(-10)?     ✓ Can update (1430ms)
I20201002-14:55:36.315(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:55:36.317(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:55:36.335(-10)?     ✓ Can clear
I20201002-14:55:36.360(-10)?
I20201002-14:55:36.360(-10)?   HelpMessageCollection
I20201002-14:55:36.717(-10)?     ✓ Can define and removeIt (338ms)
I20201002-14:55:36.720(-10)?     ✓ Cannot define duplicates
I20201002-14:55:36.869(-10)?     ✓ Can update (148ms)
I20201002-14:55:36.872(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:55:36.872(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:55:36.873(-10)?     ✓ Can get by RouteName
I20201002-14:55:36.882(-10)?
I20201002-14:55:36.882(-10)?   IceProcessor
I20201002-14:55:36.882(-10)?     ✓ Can check isICE and assertICE
I20201002-14:55:36.882(-10)?     ✓ Can makeCourseICE
I20201002-14:55:36.883(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201002-14:55:36.973(-10)?     Loaded database/modular/extended.courses.interests.fixture.json: Extends minimal with remaining ICS/EE courses and interests.
I20201002-14:55:37.685(-10)?     Loaded database/modular/abi.student.fixture.json: Defines student Abi Kealoha. Requires minimal.fixture.
I20201002-14:55:37.695(-10)?     Loaded database/modular/abi.courseinstances.fixture.json: Abi's course instances. Requires abi.user and extended.courses.interests.
I20201002-14:55:37.976(-10)?     ✓ Can getEarnedICE and getProjectedICE (1094ms)
I20201002-14:55:37.977(-10)?
I20201002-14:55:37.977(-10)?   InterestCollection
I20201002-14:55:39.294(-10)?     ✓ Can define and removeIt (1303ms)
I20201002-14:55:39.301(-10)?     ✓ Cannot define duplicates
I20201002-14:55:39.703(-10)?     ✓ Can update (402ms)
I20201002-14:55:39.716(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:55:39.717(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:55:39.732(-10)?
I20201002-14:55:39.733(-10)?   InterestTypeCollection
I20201002-14:55:40.642(-10)?     ✓ Can define and removeIt (895ms)
I20201002-14:55:40.646(-10)?     ✓ Cannot define duplicates
I20201002-14:55:40.764(-10)?     ✓ Can update (118ms)
I20201002-14:55:40.774(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:55:40.775(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:55:40.784(-10)?
I20201002-14:55:40.784(-10)?   LevelProcessor Tests
I20201002-14:55:40.807(-10)?     ✓ Level 1 Student
I20201002-14:55:40.807(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201002-14:55:40.889(-10)?     Loaded database/modular/extended.courses.interests.fixture.json: Extends minimal with remaining ICS/EE courses and interests.
I20201002-14:55:41.695(-10)?     Loaded database/modular/betty.student.fixture.json: Defines student Betty Keanu. Requires minimal.fixture.
I20201002-14:55:41.711(-10)?     Loaded database/modular/betty.level1.fixture.json: Betty's course instances for level 1. Requires betty.student and extended.courses.interests. [0,10,0]
I20201002-14:55:41.745(-10)?     ✓ Betty Level 1 (938ms)
I20201002-14:55:41.745(-10)?     Loaded database/modular/betty.level2.fixture.json: Betty's course instances for level 2. Requires betty.student, extended.courses.interests, betty.level1. [0,16,0]
I20201002-14:55:41.762(-10)?     ✓ Betty Level 2
I20201002-14:55:41.763(-10)?     Loaded database/modular/opportunities.fixture.json: Sample opportunities. Requires admin.user.
I20201002-14:55:41.807(-10)?     Loaded database/modular/extended.opportunities.fixture.json: Extended opportunities. Requires admin.user.
I20201002-14:55:42.254(-10)?     Loaded database/modular/betty.level3.fixture.json: Betty's course instances for level 3. Requires betty.student, extended.courses.interests, opportunities, betty.level1, betty.level2. [5,26,5] Spring-2015
I20201002-14:55:42.285(-10)?     ✓ Betty Level 3 (523ms)
I20201002-14:55:42.285(-10)?     Loaded database/modular/betty.level4.fixture.json: Betty's course instances for level 4. Requires betty.student, extended.courses.interests, opportunities, betty.level1, betty.level2, betty.level3. [30,36,35] Spring-2015
I20201002-14:55:42.699(-10)?     ✓ Betty Level 3 no picture (414ms)
I20201002-14:55:42.719(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201002-14:55:42.804(-10)?     Loaded database/modular/extended.courses.interests.fixture.json: Extends minimal with remaining ICS/EE courses and interests.
I20201002-14:55:43.475(-10)?     Loaded database/modular/betty.student.picture.fixture.json: Defines student Betty Keanu. Requires minimal.fixture.
I20201002-14:55:43.487(-10)?     Loaded database/modular/betty.level1.fixture.json: Betty's course instances for level 1. Requires betty.student and extended.courses.interests. [0,10,0]
I20201002-14:55:43.518(-10)?     Loaded database/modular/betty.level2.fixture.json: Betty's course instances for level 2. Requires betty.student, extended.courses.interests, betty.level1. [0,16,0]
I20201002-14:55:43.530(-10)?     Loaded database/modular/opportunities.fixture.json: Sample opportunities. Requires admin.user.
I20201002-14:55:43.572(-10)?     Loaded database/modular/extended.opportunities.fixture.json: Extended opportunities. Requires admin.user.
I20201002-14:55:44.013(-10)?     Loaded database/modular/betty.level3.fixture.json: Betty's course instances for level 3. Requires betty.student, extended.courses.interests, opportunities, betty.level1, betty.level2. [5,26,5] Spring-2015
I20201002-14:55:44.043(-10)?     Loaded database/modular/betty.level4.fixture.json: Betty's course instances for level 4. Requires betty.student, extended.courses.interests, opportunities, betty.level1, betty.level2, betty.level3. [30,36,35] Spring-2015
I20201002-14:55:44.472(-10)?     ✓ Betty Level 4 (1772ms)
I20201002-14:55:44.495(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201002-14:55:44.587(-10)?     Loaded database/modular/extended.courses.interests.fixture.json: Extends minimal with remaining ICS/EE courses and interests.
I20201002-14:55:45.311(-10)?     Loaded database/modular/betty.student.picture.fixture.json: Defines student Betty Keanu. Requires minimal.fixture.
I20201002-14:55:45.326(-10)?     Loaded database/modular/betty.level1.fixture.json: Betty's course instances for level 1. Requires betty.student and extended.courses.interests. [0,10,0]
I20201002-14:55:45.356(-10)?     Loaded database/modular/betty.level2.fixture.json: Betty's course instances for level 2. Requires betty.student, extended.courses.interests, betty.level1. [0,16,0]
I20201002-14:55:45.370(-10)?     Loaded database/modular/opportunities.fixture.json: Sample opportunities. Requires admin.user.
I20201002-14:55:45.412(-10)?     Loaded database/modular/extended.opportunities.fixture.json: Extended opportunities. Requires admin.user.
I20201002-14:55:45.880(-10)?     Loaded database/modular/betty.level3.fixture.json: Betty's course instances for level 3. Requires betty.student, extended.courses.interests, opportunities, betty.level1, betty.level2. [5,26,5] Spring-2015
I20201002-14:55:45.909(-10)?     Loaded database/modular/betty.level5.fixture.json: Betty's course instances for level 4. Requires betty.student, extended.courses.interests, opportunities, betty.level1, betty.level2, betty.level3. [30,36,35] Spring-2015
I20201002-14:55:46.435(-10)?     ✓ Betty Level 5 (1963ms)
I20201002-14:55:46.463(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201002-14:55:46.566(-10)?     Loaded database/modular/extended.courses.interests.fixture.json: Extends minimal with remaining ICS/EE courses and interests.
I20201002-14:55:47.325(-10)?     Loaded database/modular/betty.student.picture.fixture.json: Defines student Betty Keanu. Requires minimal.fixture.
I20201002-14:55:47.336(-10)?     Loaded database/modular/betty.level1.fixture.json: Betty's course instances for level 1. Requires betty.student and extended.courses.interests. [0,10,0]
I20201002-14:55:47.366(-10)?     Loaded database/modular/betty.level2.fixture.json: Betty's course instances for level 2. Requires betty.student, extended.courses.interests, betty.level1. [0,16,0]
I20201002-14:55:47.378(-10)?     Loaded database/modular/opportunities.fixture.json: Sample opportunities. Requires admin.user.
I20201002-14:55:47.419(-10)?     Loaded database/modular/extended.opportunities.fixture.json: Extended opportunities. Requires admin.user.
I20201002-14:55:47.918(-10)?     Loaded database/modular/betty.level3.fixture.json: Betty's course instances for level 3. Requires betty.student, extended.courses.interests, opportunities, betty.level1, betty.level2. [5,26,5] Spring-2015
I20201002-14:55:47.946(-10)?     Loaded database/modular/betty.level6.fixture.json: Betty's course instances for level 4. Requires betty.student, extended.courses.interests, opportunities, betty.level1, betty.level2, betty.level3. [30,36,35] Spring-2015
I20201002-14:55:48.421(-10)?     ✓ Betty Level 6 (1986ms)
I20201002-14:55:48.447(-10)?
I20201002-14:55:48.448(-10)?   AdvisorLogCollection
I20201002-14:55:48.859(-10)?     ✓ Can define and removeIt (334ms)
I20201002-14:55:48.963(-10)?     ✓ Can update (104ms)
I20201002-14:55:48.970(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:55:48.971(-10)?     ✓ Can check integrity no errors
I20201002-14:55:48.980(-10)?     ✓ Can getAdvisorDoc and getStudentDoc
I20201002-14:55:48.987(-10)?
I20201002-14:55:48.987(-10)?   MentorAnswerCollection
I20201002-14:55:49.058(-10)? Defining MENTOR mentor.Pinkie.Greenholt@gmail.com with password Wey3dGx
  :
I20201002-14:55:57.822(-10)? Defining MENTOR mentor.Hollis_Schultz@yahoo.com with password fe2LY4
I20201002-14:55:57.909(-10)? Defining MENTOR mentor.Lionel.Schuster43@hotmail.com with password D0EPeCNe
I20201002-14:55:57.996(-10)?     ✓ Can define and removeIt (8997ms)
I20201002-14:55:57.998(-10)? Defining MENTOR mentor.Zakary.Price@yahoo.com with password 8BI7XLB
I20201002-14:55:58.178(-10)?     ✓ Can update (182ms)
I20201002-14:55:58.187(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:55:58.188(-10)?     ✓ Can check integrity no errors
I20201002-14:55:58.192(-10)? Defining MENTOR mentor.Agnes_Dietrich@hotmail.com with password EJxmuh
I20201002-14:55:58.258(-10)? Defining MENTOR mentor.Dayton20@gmail.com with password UTDfnERN
I20201002-14:55:58.365(-10)?     ✓ Can removeQuestion and removeUser (176ms)
I20201002-14:55:58.397(-10)?
I20201002-14:55:58.398(-10)?   MentorQuestionCollection
I20201002-14:56:00.637(-10)?     ✓ Can define and removeIt (2214ms)
I20201002-14:56:00.786(-10)?     ✓ Can update (148ms)
I20201002-14:56:00.798(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:56:00.800(-10)?     ✓ Can check integrity no errors
I20201002-14:56:00.818(-10)?
I20201002-14:56:00.818(-10)?   OpportunityCollection
I20201002-14:56:05.196(-10)?     ✓ Can define and removeIt (4365ms)
I20201002-14:56:05.251(-10)?     ✓ Can define duplicates (55ms)
I20201002-14:56:08.080(-10)?     ✓ Can update (2829ms)
I20201002-14:56:08.149(-10)?     ✓ Can dumpOne, removeIt, and restoreOne (68ms)
I20201002-14:56:08.151(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:56:08.186(-10)?     ✓ Can getOpportunityTypeDoc and hasInterest
I20201002-14:56:08.301(-10)?
I20201002-14:56:08.301(-10)?   OpportunityInstanceCollection
I20201002-14:56:10.080(-10)?     ✓ Can define and removeIt (1763ms)
I20201002-14:56:10.187(-10)?     ✓ Cannot define duplicates (107ms)
I20201002-14:56:10.528(-10)?     ✓ Can update (341ms)
I20201002-14:56:10.582(-10)?     ✓ Can dumpOne, removeIt, and restoreOne (54ms)
I20201002-14:56:10.589(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:56:10.596(-10)?     ✓ Can getOpportunityDoc, getOpportunitySlug, getAcademicTermDoc, getStudentDoc
I20201002-14:56:10.600(-10)?     ✓ Can removeUser
I20201002-14:56:10.613(-10)?
I20201002-14:56:10.613(-10)?   OpportunityTypeCollection
I20201002-14:56:11.795(-10)?     ✓ Can define and removeIt (1167ms)
I20201002-14:56:11.803(-10)?     ✓ Cannot define duplicates
I20201002-14:56:11.943(-10)?     ✓ Can update (140ms)
I20201002-14:56:11.957(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:56:11.958(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:56:11.971(-10)?     ✓ Can findDocBySlug
I20201002-14:56:11.984(-10)?
I20201002-14:56:11.984(-10)?   PageInterestCollection
I20201002-14:56:12.322(-10)?     ✓ Can define and removeIt (305ms)
I20201002-14:56:12.326(-10)?     ✓ Cannot define duplicates
I20201002-14:56:12.349(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:56:12.353(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:56:12.367(-10)?
I20201002-14:56:12.368(-10)?   PageInterestsDailySnapshotCollection
I20201002-14:56:13.970(-10)?     ✓ Can define and removeIt (1589ms)
I20201002-14:56:13.976(-10)?     ✓ Cannot define duplicate snapshots with the same value for all its fields
I20201002-14:56:13.985(-10)?     ✓ Cannot define duplicate snapshots with the same values for all its fields created the same day
I20201002-14:56:13.995(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:56:14.035(-10)?     ✓ Can checkIntegrity no errors (40ms)
I20201002-14:56:14.044(-10)?
I20201002-14:56:14.044(-10)?   PublicStatsCollecion
I20201002-14:56:14.089(-10)?     ✓ #careerGoalsTotal, #careerGoalsList
I20201002-14:56:14.101(-10)?
I20201002-14:56:14.101(-10)?   ReviewCollection
I20201002-14:56:19.702(-10)?     ✓ Can define and removeIt (5591ms)
I20201002-14:56:19.761(-10)?     ✓ Can not define duplicates (59ms)
I20201002-14:56:20.022(-10)?     ✓ Can update (261ms)
I20201002-14:56:20.045(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:56:20.047(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:56:20.139(-10)?
I20201002-14:56:20.139(-10)?   Role
I20201002-14:56:20.141(-10)?     ✓ Test role definitions, isRole
I20201002-14:56:20.141(-10)?     ✓ assertRole
I20201002-14:56:20.141(-10)?
I20201002-14:56:20.142(-10)?   SlugCollection
I20201002-14:56:20.752(-10)?     ✓ Can define and removeIt (600ms)
I20201002-14:56:20.756(-10)?     ✓ Can not define duplicates
I20201002-14:56:20.762(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:56:20.762(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:56:20.763(-10)?     ✓ #isValidSlugName
I20201002-14:56:20.773(-10)?
I20201002-14:56:20.773(-10)?   StarProcessor
I20201002-14:56:20.782(-10)?     - #processStarCsvData
I20201002-14:56:20.784(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201002-14:56:20.900(-10)?     Loaded database/modular/extended.courses.interests.fixture.json: Extends minimal with remaining ICS/EE courses and interests.
I20201002-14:56:21.735(-10)?     Loaded database/modular/abi.student.fixture.json: Defines student Abi Kealoha. Requires minimal.fixture.
I20201002-14:56:21.835(-10)?     ✓ #processBulkStarJsonData (1053ms)
I20201002-14:56:21.849(-10)?
I20201002-14:56:21.850(-10)?   TeaserCollection
I20201002-14:56:24.330(-10)?     ✓ Can define and removeIt (2472ms)
I20201002-14:56:24.347(-10)?     ✓ Can not define duplicates
I20201002-14:56:25.868(-10)?     ✓ Can update (1521ms)
I20201002-14:56:25.879(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:56:25.881(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:56:25.967(-10)?
I20201002-14:56:25.968(-10)?   AdvisorProfileCollection
I20201002-14:56:30.834(-10)?     ✓ Can define and removeIt (4853ms)
I20201002-14:56:30.870(-10)?     ✓ Cannot define duplicates
I20201002-14:56:34.350(-10)?     ✓ Can update (3480ms)
I20201002-14:56:34.386(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:56:34.388(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:56:34.505(-10)?
I20201002-14:56:34.505(-10)?   FacultyProfileCollection
I20201002-14:56:39.681(-10)?     ✓ Can define and removeIt (5157ms)
I20201002-14:56:39.734(-10)?     ✓ Cannot define duplicates (53ms)
I20201002-14:56:43.543(-10)?     ✓ Can update (3809ms)
I20201002-14:56:43.589(-10)?     ✓ Can dumpOne, removeIt, and restoreOne (45ms)
I20201002-14:56:43.590(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:56:43.708(-10)?
I20201002-14:56:43.708(-10)?   MentorProfileCollection
I20201002-14:56:43.775(-10)? Defining MENTOR ligula with password 2rOUN0yk
  :
I20201002-14:56:54.690(-10)? Defining MENTOR ut with password d6Zqe4j2
I20201002-14:56:54.801(-10)? Defining MENTOR bibendum with password C4P0vF
I20201002-14:56:54.906(-10)? Defining MENTOR aliquam with password 13bsUCk
I20201002-14:56:54.991(-10)?     ✓ Can define and removeIt (11261ms)
I20201002-14:56:55.018(-10)? Defining MENTOR Karelle_Monahan with password se9bSYR
I20201002-14:56:55.096(-10)?     ✓ Cannot define duplicates (105ms)
I20201002-14:57:02.450(-10)?     ✓ Can update (7353ms)
I20201002-14:57:02.474(-10)? Defining MENTOR Karelle_Monahan with password J68NNN
I20201002-14:57:02.564(-10)?     ✓ Can dumpOne, removeIt, and restoreOne (114ms)
I20201002-14:57:02.566(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:57:02.715(-10)?
I20201002-14:57:02.715(-10)?   StudentProfileCollection
I20201002-14:57:26.483(-10)?     ✓ Can define and removeIt (23732ms)
I20201002-14:57:26.541(-10)?     ✓ Cannot define duplicates (58ms)
I20201002-14:57:34.848(-10)?     ✓ Can update (8307ms)
I20201002-14:57:34.911(-10)?     ✓ Can dumpOne, removeIt, and restoreOne (63ms)
I20201002-14:57:34.916(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:57:35.343(-10)?
I20201002-14:57:35.343(-10)?   VerificationRequestCollection
I20201002-14:57:43.838(-10)?     ✓ Can define and removeIt (8449ms)
I20201002-14:57:43.911(-10)?     ✓ Can define duplicates (72ms)
I20201002-14:57:43.991(-10)?     ✓ Can update (80ms)
I20201002-14:57:44.008(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-14:57:44.010(-10)?     ✓ Can checkIntegrity no errors
I20201002-14:57:44.019(-10)?     ✓ Can get documents from VR
I20201002-14:57:44.099(-10)?
I20201002-14:57:44.099(-10)?
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

### Method tests

You can use the test-app mechanism in Meteor to test client-server communication, primarily with methods.

Note that this also runs the ESLint checker.

```shell
meteor npm run test
```

Example invocation and output:

```shell
meteor npm run test

> radgrad2@ pretest /Users/philipjohnson/github/radgrad/radgrad2/app
> npm run lint


> radgrad2@ lint /Users/philipjohnson/github/radgrad/radgrad2/app
> eslint --fix --quiet --ext .tsx --ext .ts ./imports


> radgrad2@ test /Users/philipjohnson/github/radgrad/radgrad2/app
> cross-env METEOR_NO_RELEASE_CHECK=1 TEST_BROWSER_DRIVER=puppeteer meteor test --once --driver-package meteortesting:mocha --port 3300

[[[[[ Tests ]]]]]

=> Started proxy.
=> Started MongoDB.
I20201002-15:05:07.424(-10)?
I20201002-15:05:07.468(-10)? --------------------------------
I20201002-15:05:07.469(-10)? ----- RUNNING SERVER TESTS -----
I20201002-15:05:07.469(-10)? --------------------------------
I20201002-15:05:07.469(-10)?
I20201002-15:05:07.469(-10)?
I20201002-15:05:07.469(-10)?
I20201002-15:05:07.469(-10)?   AcademicTermCollection
=> Started your app.

=> App running at: http://localhost:3300/
I20201002-15:05:08.909(-10)?     ✓ Can define and removeIt (1455ms)
I20201002-15:05:08.915(-10)?     ✓ Cannot define duplicates
I20201002-15:05:09.006(-10)?     ✓ Can update (91ms)
I20201002-15:05:09.019(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:05:09.020(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:05:09.025(-10)?     ✓ Can assertAcademicTerm
I20201002-15:05:09.032(-10)?     ✓ Can findIdBySlug
I20201002-15:05:09.041(-10)?     ✓ Can toString
I20201002-15:05:09.073(-10)?     ✓ Can get the right termNumber
I20201002-15:05:09.091(-10)?     ✓ Can getID
I20201002-15:05:09.099(-10)?     ✓ Can getShortName
I20201002-15:05:09.110(-10)?
I20201002-15:05:09.110(-10)?   AcademicTermUtilities
I20201002-15:05:09.191(-10)?     ✓ Can get nextAcademicTerm
I20201002-15:05:09.194(-10)?     ✓ Can get upComingTerms
I20201002-15:05:09.204(-10)?
I20201002-15:05:09.204(-10)?   IceSnapshotCollection
I20201002-15:05:09.651(-10)?     ✓ Can define and remove (364ms)
I20201002-15:05:09.653(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:05:09.664(-10)?
I20201002-15:05:09.664(-10)?   UserInteractionCollection
I20201002-15:05:10.003(-10)?     ✓ Can define and removeIt (310ms)
I20201002-15:05:10.006(-10)?     ✓ Cannot define duplicates
I20201002-15:05:10.192(-10)?     ✓ Can restoreOne then dumpOne (185ms)
I20201002-15:05:10.416(-10)?     ✓ Can checkIntegrity all errors (223ms)
I20201002-15:05:10.526(-10)?     ✓ Can removeUser (109ms)
I20201002-15:05:10.546(-10)?
I20201002-15:05:10.547(-10)?   CareerGoalCollection
I20201002-15:05:12.705(-10)?     ✓ Can define and removeIt (2149ms)
I20201002-15:05:12.720(-10)?     ✓ Can define duplicates
I20201002-15:05:12.730(-10)?     ✓ Can find names
I20201002-15:05:13.011(-10)?     ✓ Can update (281ms)
I20201002-15:05:13.027(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:05:13.029(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:05:13.032(-10)?     ✓ Can get Interest
I20201002-15:05:13.032(-10)?     ✓ findDoc(undefined) throws
I20201002-15:05:13.068(-10)?
I20201002-15:05:13.069(-10)?   CourseCollection
I20201002-15:05:14.745(-10)?     ✓ Can define and removeIt (1660ms)
I20201002-15:05:14.772(-10)?     ✓ Can define duplicates
I20201002-15:05:15.540(-10)?     ✓ Can update (767ms)
I20201002-15:05:15.601(-10)?     ✓ Can dumpOne, removeIt, and restoreOne (60ms)
I20201002-15:05:15.607(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:05:15.609(-10)?     ✓ Can get slug for course
I20201002-15:05:15.627(-10)?     ✓ Can detect if has interest
I20201002-15:05:15.673(-10)?
I20201002-15:05:15.673(-10)?   CourseInstanceCollection
I20201002-15:05:16.518(-10)?     ✓ Can define and removeIt (830ms)
I20201002-15:05:16.585(-10)?     ✓ Cannot define duplicates (67ms)
I20201002-15:05:16.990(-10)?     ✓ Can update (405ms)
I20201002-15:05:17.023(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:05:17.025(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:05:17.027(-10)?     ✓ Can removeUser
I20201002-15:05:17.111(-10)?     ✓ Can getCourseDoc, getCourseSlug, getAcademicTermDoc, getStudentDoc (84ms)
I20201002-15:05:17.123(-10)?
I20201002-15:05:17.123(-10)?   AcademicPlanCollection
I20201002-15:05:21.827(-10)?     ✓ Can define and removeIt (4696ms)
I20201002-15:05:21.877(-10)?     ✓ Can define duplicates (50ms)
I20201002-15:05:22.357(-10)?     ✓ Can update (479ms)
I20201002-15:05:22.450(-10)?     ✓ Can dumpOne, removeIt, and restoreOne (93ms)
I20201002-15:05:22.459(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:05:22.461(-10)?     ✓ Can get latest plans
I20201002-15:05:22.469(-10)?     ✓ Can checkIntegrity errors
I20201002-15:05:22.481(-10)?
I20201002-15:05:22.481(-10)?   AcademicPlanUtilities
I20201002-15:05:22.482(-10)?     ✓ getPlanChoices
I20201002-15:05:22.482(-10)?     ✓ isAcademicPlanValid
I20201002-15:05:22.483(-10)?     ✓ addChoiceToPlan
I20201002-15:05:22.483(-10)?     ✓ addDuplicateChoice
I20201002-15:05:22.483(-10)?
I20201002-15:05:22.483(-10)?   AcademicYearInstanceCollection
I20201002-15:05:24.462(-10)?     ✓ Can define and removeIt (1967ms)
I20201002-15:05:24.498(-10)?     ✓ Cannot define duplicates
I20201002-15:05:26.290(-10)?     ✓ Can update (1792ms)
I20201002-15:05:26.314(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:05:26.316(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:05:26.317(-10)?     ✓ Can remove user
I20201002-15:05:26.327(-10)?
I20201002-15:05:26.327(-10)?   AcademicYearUtilities
I20201002-15:05:26.329(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201002-15:05:26.469(-10)?     Loaded database/modular/abi.student.fixture.json: Defines student Abi Kealoha. Requires minimal.fixture.
I20201002-15:05:26.563(-10)?     Loaded database/modular/extended.courses.interests.fixture.json: Extends minimal with remaining ICS/EE courses and interests.
I20201002-15:05:27.260(-10)?     Loaded database/modular/abi.courseinstances.fixture.json: Abi's course instances. Requires abi.user and extended.courses.interests.
I20201002-15:05:27.540(-10)?     ✓ #getStudentsCurrentAcademicTermNumber.
I20201002-15:05:27.543(-10)?     ✓ #getStudentTerms.
I20201002-15:05:27.564(-10)?
I20201002-15:05:27.564(-10)?   DesiredDegreeCollection
I20201002-15:05:28.415(-10)?     ✓ Can define and removeIt (836ms)
I20201002-15:05:28.425(-10)?     ✓ Cannot define duplicates
I20201002-15:05:28.581(-10)?     ✓ Can update (156ms)
I20201002-15:05:28.591(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:05:28.591(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:05:28.599(-10)?
I20201002-15:05:28.600(-10)?   PlanChoiceCollection
I20201002-15:05:29.289(-10)?     ✓ Can define and removeIt (683ms)
I20201002-15:05:29.292(-10)?     ✓ Can define duplicates
I20201002-15:05:29.395(-10)?     ✓ Can update (103ms)
I20201002-15:05:29.399(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:05:29.407(-10)?     ✓ Can checkIntegrity with errors
I20201002-15:05:29.407(-10)?     ✓ Can get toString
I20201002-15:05:29.407(-10)?     ✓ Can get choice type
I20201002-15:05:29.408(-10)?     ✓ Can check if course slug satisfies choice
I20201002-15:05:29.415(-10)?
I20201002-15:05:29.415(-10)?   PlanChoiceUtilities
I20201002-15:05:29.415(-10)?     ✓ #stripCounter
I20201002-15:05:29.415(-10)?     ✓ #is*Choice
I20201002-15:05:29.416(-10)?     ✓ #complexChoiceToArray
I20201002-15:05:29.416(-10)?     ✓ #buildCourseSlugName
I20201002-15:05:29.416(-10)?     ✓ #satisfiesPlanChoice
I20201002-15:05:29.417(-10)?     ✓ #getDepartment, #getDepartments
I20201002-15:05:29.417(-10)?     ✓ #compoundCombineChoices
I20201002-15:05:29.417(-10)?
I20201002-15:05:29.417(-10)?   PreferredChoice
I20201002-15:05:29.417(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201002-15:05:29.497(-10)?     Loaded database/modular/extended.courses.interests.fixture.json: Extends minimal with remaining ICS/EE courses and interests.
I20201002-15:05:30.266(-10)?     ✓ #hasPreferences, #getBestChoices, #getOrderedChoices
I20201002-15:05:30.299(-10)?
I20201002-15:05:30.300(-10)?   FavoriteAcademicPlanCollection
I20201002-15:05:30.444(-10)?     ✓ Can define and removeIt (42ms)
I20201002-15:05:30.451(-10)?     ✓ Cannot define duplicates
I20201002-15:05:30.558(-10)?     ✓ Can update (107ms)
I20201002-15:05:30.565(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:05:30.567(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:05:30.573(-10)?     ✓ Can get docs and slug
I20201002-15:05:30.581(-10)?
I20201002-15:05:30.581(-10)?   FavoriteCareerGoalCollection
I20201002-15:05:30.614(-10)?     ✓ Can define and removeIt
I20201002-15:05:30.620(-10)?     ✓ Cannot define duplicates
I20201002-15:05:30.721(-10)?     ✓ Can update (101ms)
I20201002-15:05:30.728(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:05:30.729(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:05:30.736(-10)?     ✓ Can get docs and slug
I20201002-15:05:30.744(-10)?
I20201002-15:05:30.744(-10)?   FavoriteCourseCollection
I20201002-15:05:30.855(-10)?     ✓ Can define and removeIt (48ms)
I20201002-15:05:30.862(-10)?     ✓ Cannot define duplicates
I20201002-15:05:30.976(-10)?     ✓ Can update (114ms)
I20201002-15:05:30.985(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:05:30.987(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:05:30.999(-10)?     ✓ Can get docs and slug
I20201002-15:05:31.014(-10)?
I20201002-15:05:31.014(-10)?   FavoriteInterestCollection
I20201002-15:05:31.058(-10)?     ✓ Can define and removeIt
I20201002-15:05:31.066(-10)?     ✓ Cannot define duplicates
I20201002-15:05:31.217(-10)?     ✓ Can update (130ms)
I20201002-15:05:31.217(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:05:31.218(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:05:31.221(-10)?     ✓ Can get docs and slug
I20201002-15:05:31.235(-10)?
I20201002-15:05:31.235(-10)?   FavoriteOpportunityCollection
I20201002-15:05:31.462(-10)?     ✓ Can define and removeIt (38ms)
I20201002-15:05:31.468(-10)?     ✓ Cannot define duplicates
I20201002-15:05:31.578(-10)?     ✓ Can update (110ms)
I20201002-15:05:31.585(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:05:31.586(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:05:31.592(-10)?     ✓ Can get docs and slug
I20201002-15:05:31.600(-10)?
I20201002-15:05:31.600(-10)?   FeedCollection
I20201002-15:05:35.150(-10)?     ✓ Can define and removeIt (3543ms)
I20201002-15:05:35.169(-10)?     ✓ Cannot define duplicates
I20201002-15:05:43.838(-10)?     ✓ Can update (8668ms)
I20201002-15:05:43.850(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:05:43.852(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:05:43.999(-10)?
I20201002-15:05:43.999(-10)?   FeedbackInstanceCollection
I20201002-15:05:45.545(-10)?     ✓ Can define and removeIt (1505ms)
I20201002-15:05:45.562(-10)?     ✓ Cannot define duplicates
I20201002-15:05:46.979(-10)?     ✓ Can update (1417ms)
I20201002-15:05:46.985(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:05:46.986(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:05:47.002(-10)?     ✓ Can clear
I20201002-15:05:47.026(-10)?
I20201002-15:05:47.026(-10)?   HelpMessageCollection
I20201002-15:05:47.394(-10)?     ✓ Can define and removeIt (347ms)
I20201002-15:05:47.397(-10)?     ✓ Cannot define duplicates
I20201002-15:05:47.556(-10)?     ✓ Can update (159ms)
I20201002-15:05:47.562(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:05:47.562(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:05:47.564(-10)?     ✓ Can get by RouteName
I20201002-15:05:47.576(-10)?
I20201002-15:05:47.577(-10)?   IceProcessor
I20201002-15:05:47.577(-10)?     ✓ Can check isICE and assertICE
I20201002-15:05:47.578(-10)?     ✓ Can makeCourseICE
I20201002-15:05:47.578(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201002-15:05:47.702(-10)?     Loaded database/modular/extended.courses.interests.fixture.json: Extends minimal with remaining ICS/EE courses and interests.
I20201002-15:05:48.445(-10)?     Loaded database/modular/abi.student.fixture.json: Defines student Abi Kealoha. Requires minimal.fixture.
I20201002-15:05:48.456(-10)?     Loaded database/modular/abi.courseinstances.fixture.json: Abi's course instances. Requires abi.user and extended.courses.interests.
I20201002-15:05:48.714(-10)?     ✓ Can getEarnedICE and getProjectedICE (1135ms)
I20201002-15:05:48.714(-10)?
I20201002-15:05:48.714(-10)?   InterestCollection
I20201002-15:05:49.729(-10)?     ✓ Can define and removeIt (1000ms)
I20201002-15:05:49.735(-10)?     ✓ Cannot define duplicates
I20201002-15:05:50.090(-10)?     ✓ Can update (355ms)
I20201002-15:05:50.103(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:05:50.104(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:05:50.119(-10)?
I20201002-15:05:50.119(-10)?   InterestTypeCollection
I20201002-15:05:50.965(-10)?     ✓ Can define and removeIt (833ms)
I20201002-15:05:50.968(-10)?     ✓ Cannot define duplicates
I20201002-15:05:51.079(-10)?     ✓ Can update (111ms)
I20201002-15:05:51.087(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:05:51.088(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:05:51.098(-10)?
I20201002-15:05:51.098(-10)?   LevelProcessor Tests
I20201002-15:05:51.117(-10)?     ✓ Level 1 Student
I20201002-15:05:51.118(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201002-15:05:51.197(-10)?     Loaded database/modular/extended.courses.interests.fixture.json: Extends minimal with remaining ICS/EE courses and interests.
I20201002-15:05:51.895(-10)?     Loaded database/modular/betty.student.fixture.json: Defines student Betty Keanu. Requires minimal.fixture.
I20201002-15:05:51.910(-10)?     Loaded database/modular/betty.level1.fixture.json: Betty's course instances for level 1. Requires betty.student and extended.courses.interests. [0,10,0]
I20201002-15:05:51.941(-10)?     ✓ Betty Level 1 (824ms)
I20201002-15:05:51.942(-10)?     Loaded database/modular/betty.level2.fixture.json: Betty's course instances for level 2. Requires betty.student, extended.courses.interests, betty.level1. [0,16,0]
I20201002-15:05:51.957(-10)?     ✓ Betty Level 2
I20201002-15:05:51.958(-10)?     Loaded database/modular/opportunities.fixture.json: Sample opportunities. Requires admin.user.
I20201002-15:05:52.000(-10)?     Loaded database/modular/extended.opportunities.fixture.json: Extended opportunities. Requires admin.user.
I20201002-15:05:52.443(-10)?     Loaded database/modular/betty.level3.fixture.json: Betty's course instances for level 3. Requires betty.student, extended.courses.interests, opportunities, betty.level1, betty.level2. [5,26,5] Spring-2015
I20201002-15:05:52.474(-10)?     ✓ Betty Level 3 (517ms)
I20201002-15:05:52.475(-10)?     Loaded database/modular/betty.level4.fixture.json: Betty's course instances for level 4. Requires betty.student, extended.courses.interests, opportunities, betty.level1, betty.level2, betty.level3. [30,36,35] Spring-2015
I20201002-15:05:52.904(-10)?     ✓ Betty Level 3 no picture (430ms)
I20201002-15:05:52.925(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201002-15:05:53.014(-10)?     Loaded database/modular/extended.courses.interests.fixture.json: Extends minimal with remaining ICS/EE courses and interests.
I20201002-15:05:53.706(-10)?     Loaded database/modular/betty.student.picture.fixture.json: Defines student Betty Keanu. Requires minimal.fixture.
I20201002-15:05:53.718(-10)?     Loaded database/modular/betty.level1.fixture.json: Betty's course instances for level 1. Requires betty.student and extended.courses.interests. [0,10,0]
I20201002-15:05:53.745(-10)?     Loaded database/modular/betty.level2.fixture.json: Betty's course instances for level 2. Requires betty.student, extended.courses.interests, betty.level1. [0,16,0]
I20201002-15:05:53.758(-10)?     Loaded database/modular/opportunities.fixture.json: Sample opportunities. Requires admin.user.
I20201002-15:05:53.798(-10)?     Loaded database/modular/extended.opportunities.fixture.json: Extended opportunities. Requires admin.user.
I20201002-15:05:54.239(-10)?     Loaded database/modular/betty.level3.fixture.json: Betty's course instances for level 3. Requires betty.student, extended.courses.interests, opportunities, betty.level1, betty.level2. [5,26,5] Spring-2015
I20201002-15:05:54.267(-10)?     Loaded database/modular/betty.level4.fixture.json: Betty's course instances for level 4. Requires betty.student, extended.courses.interests, opportunities, betty.level1, betty.level2, betty.level3. [30,36,35] Spring-2015
I20201002-15:05:54.685(-10)?     ✓ Betty Level 4 (1781ms)
I20201002-15:05:54.706(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201002-15:05:54.793(-10)?     Loaded database/modular/extended.courses.interests.fixture.json: Extends minimal with remaining ICS/EE courses and interests.
I20201002-15:05:55.500(-10)?     Loaded database/modular/betty.student.picture.fixture.json: Defines student Betty Keanu. Requires minimal.fixture.
I20201002-15:05:55.512(-10)?     Loaded database/modular/betty.level1.fixture.json: Betty's course instances for level 1. Requires betty.student and extended.courses.interests. [0,10,0]
I20201002-15:05:55.541(-10)?     Loaded database/modular/betty.level2.fixture.json: Betty's course instances for level 2. Requires betty.student, extended.courses.interests, betty.level1. [0,16,0]
I20201002-15:05:55.554(-10)?     Loaded database/modular/opportunities.fixture.json: Sample opportunities. Requires admin.user.
I20201002-15:05:55.595(-10)?     Loaded database/modular/extended.opportunities.fixture.json: Extended opportunities. Requires admin.user.
I20201002-15:05:56.033(-10)?     Loaded database/modular/betty.level3.fixture.json: Betty's course instances for level 3. Requires betty.student, extended.courses.interests, opportunities, betty.level1, betty.level2. [5,26,5] Spring-2015
I20201002-15:05:56.063(-10)?     Loaded database/modular/betty.level5.fixture.json: Betty's course instances for level 4. Requires betty.student, extended.courses.interests, opportunities, betty.level1, betty.level2, betty.level3. [30,36,35] Spring-2015
I20201002-15:05:56.601(-10)?     ✓ Betty Level 5 (1916ms)
I20201002-15:05:56.628(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201002-15:05:56.722(-10)?     Loaded database/modular/extended.courses.interests.fixture.json: Extends minimal with remaining ICS/EE courses and interests.
I20201002-15:05:57.416(-10)?     Loaded database/modular/betty.student.picture.fixture.json: Defines student Betty Keanu. Requires minimal.fixture.
I20201002-15:05:57.428(-10)?     Loaded database/modular/betty.level1.fixture.json: Betty's course instances for level 1. Requires betty.student and extended.courses.interests. [0,10,0]
I20201002-15:05:57.457(-10)?     Loaded database/modular/betty.level2.fixture.json: Betty's course instances for level 2. Requires betty.student, extended.courses.interests, betty.level1. [0,16,0]
I20201002-15:05:57.470(-10)?     Loaded database/modular/opportunities.fixture.json: Sample opportunities. Requires admin.user.
I20201002-15:05:57.511(-10)?     Loaded database/modular/extended.opportunities.fixture.json: Extended opportunities. Requires admin.user.
I20201002-15:05:57.960(-10)?     Loaded database/modular/betty.level3.fixture.json: Betty's course instances for level 3. Requires betty.student, extended.courses.interests, opportunities, betty.level1, betty.level2. [5,26,5] Spring-2015
I20201002-15:05:57.989(-10)?     Loaded database/modular/betty.level6.fixture.json: Betty's course instances for level 4. Requires betty.student, extended.courses.interests, opportunities, betty.level1, betty.level2, betty.level3. [30,36,35] Spring-2015
I20201002-15:05:58.469(-10)?     ✓ Betty Level 6 (1868ms)
I20201002-15:05:58.489(-10)?
I20201002-15:05:58.489(-10)?   AdvisorLogCollection
I20201002-15:05:58.925(-10)?     ✓ Can define and removeIt (339ms)
I20201002-15:05:59.030(-10)?     ✓ Can update (105ms)
I20201002-15:05:59.040(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:05:59.041(-10)?     ✓ Can check integrity no errors
I20201002-15:05:59.051(-10)?     ✓ Can getAdvisorDoc and getStudentDoc
I20201002-15:05:59.060(-10)?
I20201002-15:05:59.060(-10)?   MentorAnswerCollection
I20201002-15:05:59.126(-10)? Defining MENTOR mentor.Breana.Kovacek30@yahoo.com with password hu5qe9qf
  :
I20201002-15:06:07.894(-10)? Defining MENTOR mentor.Angie_Huel91@gmail.com with password oVOpiC
I20201002-15:06:07.981(-10)?     ✓ Can define and removeIt (8912ms)
I20201002-15:06:07.984(-10)? Defining MENTOR mentor.Rowan_Homenick25@gmail.com with password gIg0Q6b
I20201002-15:06:08.163(-10)?     ✓ Can update (182ms)
I20201002-15:06:08.173(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:06:08.174(-10)?     ✓ Can check integrity no errors
I20201002-15:06:08.177(-10)? Defining MENTOR mentor.Tyrese1@yahoo.com with password dhoqGSx5
I20201002-15:06:08.245(-10)? Defining MENTOR mentor.Richmond.Nikolaus49@hotmail.com with password ECqk4uz
I20201002-15:06:08.349(-10)?     ✓ Can removeQuestion and removeUser (173ms)
I20201002-15:06:08.379(-10)?
I20201002-15:06:08.379(-10)?   MentorQuestionCollection
I20201002-15:06:10.684(-10)?     ✓ Can define and removeIt (2278ms)
I20201002-15:06:10.821(-10)?     ✓ Can update (137ms)
I20201002-15:06:10.833(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:06:10.834(-10)?     ✓ Can check integrity no errors
I20201002-15:06:10.849(-10)?
I20201002-15:06:10.849(-10)?   OpportunityCollection
I20201002-15:06:14.825(-10)?     ✓ Can define and removeIt (3962ms)
I20201002-15:06:14.871(-10)?     ✓ Can define duplicates (46ms)
I20201002-15:06:17.679(-10)?     ✓ Can update (2804ms)
I20201002-15:06:17.752(-10)?     ✓ Can dumpOne, removeIt, and restoreOne (75ms)
I20201002-15:06:17.754(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:06:17.785(-10)?     ✓ Can getOpportunityTypeDoc and hasInterest
I20201002-15:06:17.897(-10)?
I20201002-15:06:17.897(-10)?   OpportunityInstanceCollection
I20201002-15:06:19.315(-10)?     ✓ Can define and removeIt (1400ms)
I20201002-15:06:19.405(-10)?     ✓ Cannot define duplicates (90ms)
I20201002-15:06:19.681(-10)?     ✓ Can update (276ms)
I20201002-15:06:19.821(-10)?     ✓ Can dumpOne, removeIt, and restoreOne (140ms)
I20201002-15:06:19.823(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:06:19.829(-10)?     ✓ Can getOpportunityDoc, getOpportunitySlug, getAcademicTermDoc, getStudentDoc
I20201002-15:06:19.831(-10)?     ✓ Can removeUser
I20201002-15:06:19.842(-10)?
I20201002-15:06:19.842(-10)?   OpportunityTypeCollection
I20201002-15:06:20.826(-10)?     ✓ Can define and removeIt (976ms)
I20201002-15:06:20.830(-10)?     ✓ Cannot define duplicates
I20201002-15:06:20.945(-10)?     ✓ Can update (114ms)
I20201002-15:06:20.955(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:06:20.956(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:06:20.965(-10)?     ✓ Can findDocBySlug
I20201002-15:06:20.975(-10)?
I20201002-15:06:20.975(-10)?   PageInterestCollection
I20201002-15:06:21.274(-10)?     ✓ Can define and removeIt (273ms)
I20201002-15:06:21.278(-10)?     ✓ Cannot define duplicates
I20201002-15:06:21.297(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:06:21.300(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:06:21.309(-10)?
I20201002-15:06:21.309(-10)?   PageInterestsDailySnapshotCollection
I20201002-15:06:22.686(-10)?     ✓ Can define and removeIt (1367ms)
I20201002-15:06:22.693(-10)?     ✓ Cannot define duplicate snapshots with the same value for all its fields
I20201002-15:06:22.702(-10)?     ✓ Cannot define duplicate snapshots with the same values for all its fields created the same day
I20201002-15:06:22.711(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:06:22.737(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:06:22.745(-10)?
I20201002-15:06:22.745(-10)?   PublicStatsCollecion
I20201002-15:06:22.789(-10)?     ✓ #careerGoalsTotal, #careerGoalsList
I20201002-15:06:22.801(-10)?
I20201002-15:06:22.801(-10)?   ReviewCollection
I20201002-15:06:27.743(-10)?     ✓ Can define and removeIt (4934ms)
I20201002-15:06:27.797(-10)?     ✓ Can not define duplicates (54ms)
I20201002-15:06:28.029(-10)?     ✓ Can update (231ms)
I20201002-15:06:28.050(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:06:28.051(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:06:28.126(-10)?
I20201002-15:06:28.127(-10)?   Role
I20201002-15:06:28.128(-10)?     ✓ Test role definitions, isRole
I20201002-15:06:28.133(-10)?     ✓ assertRole
I20201002-15:06:28.133(-10)?
I20201002-15:06:28.133(-10)?   SlugCollection
I20201002-15:06:28.674(-10)?     ✓ Can define and removeIt (532ms)
I20201002-15:06:28.677(-10)?     ✓ Can not define duplicates
I20201002-15:06:28.682(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:06:28.682(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:06:28.683(-10)?     ✓ #isValidSlugName
I20201002-15:06:28.692(-10)?
I20201002-15:06:28.692(-10)?   StarProcessor
I20201002-15:06:28.700(-10)?     - #processStarCsvData
I20201002-15:06:28.700(-10)?     Loaded database/modular/minimal.fixture.json: Sample definitions for basic entities.
I20201002-15:06:28.781(-10)?     Loaded database/modular/extended.courses.interests.fixture.json: Extends minimal with remaining ICS/EE courses and interests.
I20201002-15:06:29.492(-10)?     Loaded database/modular/abi.student.fixture.json: Defines student Abi Kealoha. Requires minimal.fixture.
I20201002-15:06:29.602(-10)?     ✓ #processBulkStarJsonData (902ms)
I20201002-15:06:29.620(-10)?
I20201002-15:06:29.620(-10)?   TeaserCollection
I20201002-15:06:31.836(-10)?     ✓ Can define and removeIt (2188ms)
I20201002-15:06:31.852(-10)?     ✓ Can not define duplicates
I20201002-15:06:33.498(-10)?     ✓ Can update (1646ms)
I20201002-15:06:33.512(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:06:33.514(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:06:33.596(-10)?
I20201002-15:06:33.596(-10)?   AdvisorProfileCollection
I20201002-15:06:38.552(-10)?     ✓ Can define and removeIt (4937ms)
I20201002-15:06:38.589(-10)?     ✓ Cannot define duplicates
I20201002-15:06:42.174(-10)?     ✓ Can update (3586ms)
I20201002-15:06:42.206(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:06:42.207(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:06:42.335(-10)?
I20201002-15:06:42.335(-10)?   FacultyProfileCollection
I20201002-15:06:47.478(-10)?     ✓ Can define and removeIt (5132ms)
I20201002-15:06:47.523(-10)?     ✓ Cannot define duplicates (45ms)
I20201002-15:06:51.066(-10)?     ✓ Can update (3543ms)
I20201002-15:06:51.097(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:06:51.098(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:06:51.218(-10)?
I20201002-15:06:51.218(-10)?   MentorProfileCollection
I20201002-15:06:51.280(-10)? Defining MENTOR blandit with password HczPft3
  :
I20201002-15:07:02.032(-10)? Defining MENTOR augue with password b6m90gv
I20201002-15:07:02.119(-10)?     ✓ Can define and removeIt (10877ms)
I20201002-15:07:02.142(-10)? Defining MENTOR Davion.OReilly19 with password DUAViBd
I20201002-15:07:02.217(-10)?     ✓ Cannot define duplicates (98ms)
I20201002-15:07:10.012(-10)?     ✓ Can update (7795ms)
I20201002-15:07:10.035(-10)? Defining MENTOR Davion.OReilly19 with password 5Cpueu
I20201002-15:07:10.124(-10)?     ✓ Can dumpOne, removeIt, and restoreOne (112ms)
I20201002-15:07:10.125(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:07:10.302(-10)?
I20201002-15:07:10.302(-10)?   StudentProfileCollection
I20201002-15:07:35.586(-10)?     ✓ Can define and removeIt (25215ms)
I20201002-15:07:35.648(-10)?     ✓ Cannot define duplicates (62ms)
I20201002-15:07:44.237(-10)?     ✓ Can update (8589ms)
I20201002-15:07:44.301(-10)?     ✓ Can dumpOne, removeIt, and restoreOne (64ms)
I20201002-15:07:44.304(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:07:44.748(-10)?
I20201002-15:07:44.748(-10)?   VerificationRequestCollection
I20201002-15:07:53.857(-10)?     ✓ Can define and removeIt (9048ms)
I20201002-15:07:53.935(-10)?     ✓ Can define duplicates (78ms)
I20201002-15:07:54.010(-10)?     ✓ Can update (74ms)
I20201002-15:07:54.027(-10)?     ✓ Can dumpOne, removeIt, and restoreOne
I20201002-15:07:54.029(-10)?     ✓ Can checkIntegrity no errors
I20201002-15:07:54.038(-10)?     ✓ Can get documents from VR
I20201002-15:07:54.124(-10)?
I20201002-15:07:54.125(-10)?
I20201002-15:07:54.125(-10)?   237 passing (3m)
I20201002-15:07:54.125(-10)?   1 pending
I20201002-15:07:54.125(-10)?
I20201002-15:07:54.125(-10)?
I20201002-15:07:54.125(-10)? --------------------------------
I20201002-15:07:54.125(-10)? ----- RUNNING CLIENT TESTS -----
I20201002-15:07:54.126(-10)? --------------------------------
I20201002-15:07:54.530(-10)? HeadlessChrome/86.0.4240.0
W20201002-15:07:55.278(-10)? (STDERR)
W20201002-15:07:55.675(-10)? (STDERR) waitFor is deprecated and will be removed in a future release. See https://github.com/puppeteer/puppeteer/issues/6214 for details and how to migrate your code.
I20201002-15:07:55.677(-10)?   0 passing (0ms)
I20201002-15:07:55.736(-10)? All tests finished!
I20201002-15:07:55.736(-10)?
I20201002-15:07:55.736(-10)? --------------------------------
I20201002-15:07:55.736(-10)? SERVER FAILURES: 0
I20201002-15:07:55.736(-10)? CLIENT FAILURES: 0
I20201002-15:07:55.737(-10)? --------------------------------
~/g/r/r/app (master|✔) $
```

### End-to-End Tests

Another form of testing is end-to-end.

```shell
meteor npm run test-e2e
```

Unfortunately, this does not work at present:

```shell
meteor npm run test-e2e

> radgrad2@ test-e2e /Users/philipjohnson/github/radgrad/radgrad2/app
> testcafe chrome:headless imports/ui/**/*.test-e2e.ts

 Running tests in:
 - Chrome 85.0.4183.121 / macOS 10.15.6

 Student Pages
 ✖ Menu Bars

   1) - Error in fixture.beforeEach hook -
      A request to "http://localhost:3200/" has failed.
      Use quarantine mode to perform additional attempts to execute this test.
      You can find troubleshooting information for this issue at "https://go.devexpress.com/TestCafe_FAQ_ARequestHasFailed.aspx".

      Error details:
      Failed to find a DNS-record for the resource at "http://localhost:3200/".

      Browser: Chrome 85.0.4183.121 / macOS 10.15.6

         29 |  studentMentorSpaceAskQuestionWidget,
         30 |  studentMentorSpaceMentorDirectoryWidget,
         31 |} from '../components/student/student-widget-names';
         32 |
         33 |export const adminLogin = async ({ email, password, browser }) => {
       > 34 |  await browser.click(Selector('div.ui.top.right.pointing.dropdown').child('div.text'));
         35 |  await browser.click(Selector('#admin'));
         36 |  await browser.typeText(Selector('input[name=email]'), email);
         37 |  await browser.typeText(Selector('input[name=password]'), password);
         38 |  await browser.click(Selector('div.field button.ui.button'));
         39 |};

         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:34:17)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:8:71)
         at __awaiter (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:4:12)
         at Object.exports.adminLogin (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:33:66)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:57:11)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:8:71)
         at __awaiter (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:4:12)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:56:38)


 ✖ Home Page

   1) - Error in fixture.beforeEach hook -
      A request to "http://localhost:3200/" has failed.
      Use quarantine mode to perform additional attempts to execute this test.
      You can find troubleshooting information for this issue at "https://go.devexpress.com/TestCafe_FAQ_ARequestHasFailed.aspx".

      Error details:
      Failed to find a DNS-record for the resource at "http://localhost:3200/".

      Browser: Chrome 85.0.4183.121 / macOS 10.15.6

         29 |  studentMentorSpaceAskQuestionWidget,
         30 |  studentMentorSpaceMentorDirectoryWidget,
         31 |} from '../components/student/student-widget-names';
         32 |
         33 |export const adminLogin = async ({ email, password, browser }) => {
       > 34 |  await browser.click(Selector('div.ui.top.right.pointing.dropdown').child('div.text'));
         35 |  await browser.click(Selector('#admin'));
         36 |  await browser.typeText(Selector('input[name=email]'), email);
         37 |  await browser.typeText(Selector('input[name=password]'), password);
         38 |  await browser.click(Selector('div.field button.ui.button'));
         39 |};

         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:34:17)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:8:71)
         at __awaiter (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:4:12)
         at Object.exports.adminLogin (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:33:66)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:57:11)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:8:71)
         at __awaiter (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:4:12)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:56:38)


 ✖ Explorer Page

   1) - Error in fixture.beforeEach hook -
      A request to "http://localhost:3200/" has failed.
      Use quarantine mode to perform additional attempts to execute this test.
      You can find troubleshooting information for this issue at "https://go.devexpress.com/TestCafe_FAQ_ARequestHasFailed.aspx".

      Error details:
      Failed to find a DNS-record for the resource at "http://localhost:3200/".

      Browser: Chrome 85.0.4183.121 / macOS 10.15.6

         29 |  studentMentorSpaceAskQuestionWidget,
         30 |  studentMentorSpaceMentorDirectoryWidget,
         31 |} from '../components/student/student-widget-names';
         32 |
         33 |export const adminLogin = async ({ email, password, browser }) => {
       > 34 |  await browser.click(Selector('div.ui.top.right.pointing.dropdown').child('div.text'));
         35 |  await browser.click(Selector('#admin'));
         36 |  await browser.typeText(Selector('input[name=email]'), email);
         37 |  await browser.typeText(Selector('input[name=password]'), password);
         38 |  await browser.click(Selector('div.field button.ui.button'));
         39 |};

         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:34:17)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:8:71)
         at __awaiter (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:4:12)
         at Object.exports.adminLogin (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:33:66)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:57:11)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:8:71)
         at __awaiter (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:4:12)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:56:38)


 ✖ DEP Page

   1) - Error in fixture.beforeEach hook -
      A request to "http://localhost:3200/" has failed.
      Use quarantine mode to perform additional attempts to execute this test.
      You can find troubleshooting information for this issue at "https://go.devexpress.com/TestCafe_FAQ_ARequestHasFailed.aspx".

      Error details:
      Failed to find a DNS-record for the resource at "http://localhost:3200/".

      Browser: Chrome 85.0.4183.121 / macOS 10.15.6

         29 |  studentMentorSpaceAskQuestionWidget,
         30 |  studentMentorSpaceMentorDirectoryWidget,
         31 |} from '../components/student/student-widget-names';
         32 |
         33 |export const adminLogin = async ({ email, password, browser }) => {
       > 34 |  await browser.click(Selector('div.ui.top.right.pointing.dropdown').child('div.text'));
         35 |  await browser.click(Selector('#admin'));
         36 |  await browser.typeText(Selector('input[name=email]'), email);
         37 |  await browser.typeText(Selector('input[name=password]'), password);
         38 |  await browser.click(Selector('div.field button.ui.button'));
         39 |};

         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:34:17)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:8:71)
         at __awaiter (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:4:12)
         at Object.exports.adminLogin (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:33:66)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:57:11)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:8:71)
         at __awaiter (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:4:12)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:56:38)


 ✖ Mentor Space Page

   1) - Error in fixture.beforeEach hook -
      A request to "http://localhost:3200/" has failed.
      Use quarantine mode to perform additional attempts to execute this test.
      You can find troubleshooting information for this issue at "https://go.devexpress.com/TestCafe_FAQ_ARequestHasFailed.aspx".

      Error details:
      Failed to find a DNS-record for the resource at "http://localhost:3200/".

      Browser: Chrome 85.0.4183.121 / macOS 10.15.6

         29 |  studentMentorSpaceAskQuestionWidget,
         30 |  studentMentorSpaceMentorDirectoryWidget,
         31 |} from '../components/student/student-widget-names';
         32 |
         33 |export const adminLogin = async ({ email, password, browser }) => {
       > 34 |  await browser.click(Selector('div.ui.top.right.pointing.dropdown').child('div.text'));
         35 |  await browser.click(Selector('#admin'));
         36 |  await browser.typeText(Selector('input[name=email]'), email);
         37 |  await browser.typeText(Selector('input[name=password]'), password);
         38 |  await browser.click(Selector('div.field button.ui.button'));
         39 |};

         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:34:17)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:8:71)
         at __awaiter (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:4:12)
         at Object.exports.adminLogin (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/test-helpers/e2e.ts:33:66)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:57:11)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:8:71)
         at __awaiter (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:4:12)
         at <anonymous> (/Users/philipjohnson/github/radgrad/radgrad2/app/imports/ui/pages/student/StudentPages.test-e2e.ts:56:38)



 5/5 failed (1s)
npm ERR! code ELIFECYCLE
npm ERR! errno 5
npm ERR! radgrad2@ test-e2e: `testcafe chrome:headless imports/ui/**/*.test-e2e.ts`
npm ERR! Exit status 5
npm ERR!
npm ERR! Failed at the radgrad2@ test-e2e script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/philipjohnson/.npm/_logs/2020-10-03T01_18_18_082Z-debug.log
```

## Deploying to production

Once you have completed quality assurance and have assured yourself that the code is ready for deployment, you can deploy as follows:

```shell
cd .deploy/
mup deploy
```

These commands assume that you have already setup your production environment.

