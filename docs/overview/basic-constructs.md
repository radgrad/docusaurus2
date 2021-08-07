---
title: Basic Constructs
---

The RadGrad framework is designed around seven basic constructs: Interests, Career Goals, Courses, Opportunities, Degree Plans, ICE, and Levels.

## Interests

Interests represent a set of discipline-specific topics relevant to the degree experience.  In computer science, examples of Interests might include "blockchain", "big data", and "Java".

The Interests Explorer provides access to around 80 Interests in the current UHM/ICS RadGrad instance.  Here's an example page for a hypothetical student regarding the interest "algorithms":

![Interests](/img/overview/interests-explorer-algorithms.png)

Interests are a central construct in RadGrad that tie together all of the other constructs.  This page illustrates one aspect of their role, in that it shows the Career Goals, Courses, and Opportunities associated with that Interest.

Students who login to RadGrad can see more information, such as other students with similar Interests (who have opted-in to providing their Interests to other students in the system).


## Career Goals

Career Goals represent professional outcomes that a student can pursue through the degree experience. In computer science, example Career Goals include "Data Scientist", "Augmented Reality Engineer", and "Security Analyst".

The Career Goals Explorer provides access to around 20 Career Goals in the UHM/ICS RadGrad instance.  Here's an example page for a hypothetical student for the career goal "data scientist":

![Career Goals](/img/overview/career-goals-explorer-data-scientist.png)

Each Career Goal is associated with one or more Interests, and should be associated with at least one Course or  Opportunity (the system will notify Advisors and Faculty if there are Interests present which students have no ability to investigate further.)

Students who login to RadGrad can see more information, such as other students with similar Career Goals (who have opted-in to providing their Career Goals to other students in the system).


## Courses

Courses represent the curricular activities associated with the undergraduate academic unit. For the UHM/ICS RadGrad instance, approximately 40 courses are represented.

Here's an example page for a hypothetic student for the course ICS 331:

![Courses Explorer](/img/overview/courses-explorer-331.png)

Each Course is associated with Interests, Career Goals, and prerequisite Courses.

Students who login to RadGrad can see more information, such as reviews of the course written by students who have taken it previously.

## Opportunities

Opportunities represent extra-curricular activities that help a student progress toward one or more Career Goals and/or learn more about a specific Interest. The set of Opportunities are "curated" by faculty members to ensure quality and relevance. Example opportunities include: a local Hackathon, a summer internship at a local high tech company, and participation in a faculty member's research project.  Opportunities can also include online courses available through platforms like Coursera or edX, if the faculty have reviewed the offering and found it be useful and appropriate for their students.

The Opportunities Explorer provides access to around 80 Opportunities in the UHM/ICS RadGrad instance.  Here's an example page for the Opportunity "Hawaii Annual Code Challenge":

![Opportunities Explorer](/img/overview/opportunities-explorer-hacc.png)

Opportunities are associated with Interests, Career Goals, Courses, and other Opportunities.

Students who login to RadGrad can see additional information, such as other students participating in this Opportunity (who have opted-in to sharing this information), as well as reviews of the Opportunity written by students who have previously participated.

## Degree Plans

Each student has a Degree Plan, which is the set of Courses and Opportunities that a student has completed previously, is currently taking, or plans to complete in upcoming semesters.  By explicitly representing and planning out not just curricular but also extra-curricular activities, RadGrad can provide:

  1. A more **wholistic** view of the student's disciplinary experience (because disciplinary extra-curricular activities can make fundamental contributions to the educational process), and

  2. A more **cohesive** disciplinary experience (because RadGrad can use interests and career goals to guide students to compatible extra-curricular activities.

Here is an example degree plan page:

![Degree Plan](/img/overview/degree-plan-example-page.png)

RadGrad provides a mechanism to upload data on completed courses that can be extracted from institutional databases by qualified faculty and advisors.  This means that students do not have to manage the status of their previous courses: RadGrad can be updated each semester with this information to maintain accuracy. Only courses directly related to the degree program are tracked in RadGrad.

## myICE

myICE is a three component measure to track both progress and success within the degree program.  myICE is an acronym for its constituent measures, which are named Innovation, Competency, and Experience.  To be a well-prepared computer science graduate according to RadGrad, students must earn 100 I, C, and E points by the end of their degree program.

Typically, a student earns Competency points for completing Courses, and Innovation and Experience points for completing Opportunities. RadGrad admins are responsible for assigning the number of points earned for a given Course or Opportunity. For example, a student might earn 10 points for completing a course with a passing grade.  For Opportunities, a student might earn 15 Innovation points for a weekend hackathon, and 25 points for a summer-long internship.

Here is a portion of a page illustrating ICE points for a hypothetical student:

![Degree Plan](/img/overview/ice-example.png)

ICE points can be either "planned" or "verified".  You obtain "planned" points simply by adding a course or opportunity to your degree plan.  But to actually "earn" the points, a course or opportunity must be "verified".  Verification of course points is typically done by checking with the institution's credit management system. Verification of opportunities is done by admins or faculty.

## Levels

Levels are a RadGrad "game mechanic" that help students track progress through their degree program. Students start at Level 1 (Grey), and as they complete Courses and Opportunities and perform other actions in the system, they can potentially move all the way to Level 6 (Black).

Achievement of Levels depends on "verified", not self-reported activities.

We provide PDF files so that a department can print and provide the Advisor with small (2") laptop stickers. The Advisor can distribute them to a student each time he or she achieves a new RadGrad Level.

In addition to the physical laptop sticker, students within the system can opt-in to sharing their Level status with other students. In this case, the icon for their Level appears next to their name.

Students can check their Level and what is required to advance within the system. Here is the page for a hypothetical student:

![Level](/img/overview/level-page-example.png)

## The To Do List

Understanding how to best make use RadGrad's features is not obvious.  To help students learn to use the system, RadGrad provides a home page with a personalized "To Do" list containing high, medium, and low priority items based upon the state of the system and the student's previous use.

Here's an example To Do page for a hypothetical student:

![Level](/img/overview/to-do-page.png)

The To Do page is intended to provide "just in time" documentation and notifications for students that help them to focus on the best way to use the system at any point in time. While we provide supplemental video and written user documentation, we hope that the To Do list minimizes the need for students to use documentation in order to make effective use of the system.

The To Do page is not only available to students. We also implement a To Do page for Faculty, Advisors, and Admins to notify them of tasks at various priorities.





