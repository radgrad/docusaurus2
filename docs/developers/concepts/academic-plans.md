---
title: Academic Plans
---

The University of Hawaii, Manoa's ICS Department has many different academic plans. Each year they are updated. Different academic plans have different number of courses per semester. Some of the choices students can make are complicated. For example, one of the choices is `Either ICS 312 or ICS 331 or Either ICS 313 or ICS 361 or ICS 355`.

To represent these and other academic plan choices we created a flexible and complicated mechanism for representing Academic Plans. The following image shows the Update Academic Plan widget in the Admin datamodel page.

<img src="/img/radgrad2/developer/update-academic-plan.png" width="100%"/>

Academic plans have:
 
  * a name (the name of the academic plan),
  * a slug (a unique identifier),
  * an effective semester (the semester the plan went into affect),
  * an associated degree (the degree the plan satisfies, B.A. or B.S.),
  * a description (the description of the plan),
  * a courses per semester (a list of integers either 12 for a 4 year plan or 15 for a 5 year plan),
  * a course list (a list of the course choices),
  * and a retired flag.

The courses per semester list starts with the Fall semester, then Spring semester and lastly Summer semester. We support both the traditional 4 year plans and the Bachelors and Masters 5 year plan.

The course list is where we define the course choices. Each choice ends with a dash then number (e.g.`-1`). The number indicates how many times the choice is in the plan. For some choices they appear multiple times in the plan. The number allows RadGrad it determine if the student has satisfied the plan. For example if the student needs to take four ICS 400+ course the choices would look like `ics_400+-1, ics_400+-1, ics_400+-3, ics_400+-4`.

There are three different types of course choices, single course, simple choice between single courses, and complex choices between simple choices.

  * **Single Course Choice:** The choice is just the slug for the course followed by the count `ics_111-1`. Take ICS 111.
  * **Simple Choice Between Courses:** The choice is slugs with commas between the choices `ics_313,ics_361-1`. Take ICS 313 or ICS 361.
  * **Complex Choices:** The choice wraps choices in parentheses separated by commas `(ics_312,ics_331),(ics_313,ics_361),ics_355-1`. Take either ICS 312 or ICS 331 or either ICS 313 or ICS 361 or take ICS 355.

**Note:** Course slugs must be of the format &lt;dept&gt;_&lt;number&gt;

The number of choices in the choice list should be the total of all the courses per semester.

