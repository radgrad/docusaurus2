---
title: Generate Demo Fixture
sidebar_label: Generate Demo Fixture
---

## How to generate a demo fixture file

### Download a current database dump from RadGrad

Login to RadGrad as administrator. Go to the Manage Database Page:

![Manage Database Page](/img/design/radgrad2/ManageDatabasePage.png)

Click the `Dump Database` button. RadGrad will create a zip file containing all the collections and download it. Unzip the file and copy/move the JSON file to the `scripts/radgrad-db/` directory. This directory is .gitignored so the student data will not be shared.

Edit the `"create-demo-fixture": "npm run tsc && node js/fixture-generator/demo-fixture-generator.js radgrad-db/2021-05-18-10-14-34.json data/userConfig1.json"` script in `scripts/package.json` to use the downloaded database.

### Edit the `userConfig1.json` file (optional)

You can edit the `data/userConfig1.json` file if you want to change the students or their plans.

The `userConfig1.json` file has two parts `studentProfiles` and `studentPlans`.
```json
{
  "studentProfiles": {
    "name": "StudentProfileCollection",
    "contents": []
  },
  "studentPlans": [
    {
      "username": "abi@hawaii.edu",
      "courses": [],
      "opportunities": [],
      "reviews": []
    }
  ]
}
```
The `StudentProfileCollection` defines five students:
 * `abi@hawaii.edu`
 * `alfred@hawaii.edu`
 * `betty@hawaii.edu`
 * `charley@hawaii.edu` Charley is a blank student with no interests or career goals.
 * `ella@hawaii.edu` Ella is an alumni.

The `studentPlans` is an array of plans for each student. The plan has four components

 1. `username` the name of the student.

 2. `courses` an array of course information. ```{
   "slug": "ics_111",
   "academicYearOffset": -2,
   "termNum": 0,
   "grade": "A"
   },``` 
    
  The `slug` is the course slug. The `academicYearOffset` is the number of years from the current year this course is in the plan. The `termNum` is the term in the year. For semester base systems 0 = 'Fall', 1 = 'Spring', 2 = 'Summer'. For quarter based systems 0 = 'Fall', 1 = 'Winter', 2 = 'Spring', 3 = 'Summer'. The `grade` is either the earned grade for courses in the past or the planned grade for future courses.

 3. `opportunities` an array of opportunity information. ```{
    "slug": "acm-manoa",
    "academicYearOffset": -1,
    "termNum": 1,
    "verified": true
    },``` 
    
  The `slug` is the opportunity slug. The `academicYearOffset` and `termNum` are the same as courses. `verified` indicates if the opportunity was verified.

 4. `reviews` an array of review information. ```{
    "academicYearOffset": -1,
    "termNum": 1,
    "reviewee": "ics_111",
    "rating": 5,
    "comments": "Lecture can be boring. Tests can be tricky... so pay attention and read the questions and answers twice before answering them. Lab is were all the fun is. If you're not an ICS major or don't like programing, you probably shouldn't take the course."
    },``` 
    
  The `academicYearOffset` and `termNum` are the same as above. The `reviewee` is the slug of the course or opportunity being reviewed. The `rating` is the rating and `comments` are the student's comments about the course or opportunity.

### Run the script

Cd into the `scripts` directory and run the script.
```bash
⋊> ~/R/r/scripts on issue-509 ⨯ npm run create-demo-fixture

> radgrad2-scripts@1.0.0 create-demo-fixture
> npm run tsc && node js/fixture-generator/demo-fixture-generator.js radgrad-db/2021-05-18-10-14-34.json data/userConfig1.json


> radgrad2-scripts@1.0.0 tsc
> tsc

generateDemoFixture radgrad-db/2021-05-18-10-14-34.json data/userConfig1.json
data/2021-05-29-10-10-26.json
⋊> ~/R/r/scripts on issue-509 ⨯
```
The new demo fixture is created in the `scripts/data` directory.
