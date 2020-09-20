---
title: Basic Constructs
---

The RadGrad framework is designed around seven basic constructs: Interests, Career Goals, Courses, Opportunities, Degree Plans, ICE, and Levels.

## Interests

Interests represent a set of discipline-specific topics relevant to the degree experience.  In computer science, examples of Interests might include "blockchain", "big data", and "Java".

The [Interests Explorer](https://radgrad.ics.hawaii.edu/explorer/interests/) provides access to around 80 Interests in the current RadGrad release.  Here's an example page for the interest "algorithms":

![Interests](/img/overview/interests-explorer-algorithms.png)

As you will see, Interests are the construct in RadGrad that ties together all of the other constructs.  This page illustrates one aspect of that, by listing the Courses and Opportunities associated with the "algorithms" interest.

## Career Goals

Career Goals represent professional outcomes that a student can pursue through the degree experience. In computer science, example Career Goals include "Data Scientist", "Augmented Reality Engineer", and "Security Analyst".

The [Career Goals Explorer](https://radgrad.ics.hawaii.edu/explorer/career-goals/) provides access to around 20 Career Goals in the current RadGrad release.  Here's an example page for the career goal "data scientist":

![Career Goals](/img/overview/career-goals-explorer-data-scientist.png)

Each Career Goal is associated with one or more interests. These are listed as green tiles underneath the Career Goal name on this page.  The Data Scientist career goal is associated with the Algorithms, Data Science, Databases, Machine Learning, and Research interests.

## Courses

Courses represent the curricular activities associated with the undergraduate academic unit. For the University of Hawaii computer science department, approximately 40 courses are represented.

The [Courses Explorer](https://radgrad.ics.hawaii.edu/explorer/courses/) provides access to around 40 Courses in the current RadGrad release.  Here's an example page for the course "ICS 331":

![Courses Explorer](/img/overview/courses-explorer-321.png)

Each Course is also associated with Interests. In the case of ICS 331, they are Computer Architecture, Hardware, and Application Development.

If you are a registered user of RadGrad and can login, then you can see reviews of the course written by students who have taken it previously.

## Opportunities

Opportunities represent extra-curricular activities that help a student progress toward one or more Career Goals and/or learn more about a specific Interest. The set of Opportunities are "curated" by faculty members to ensure quality and relevance. Example opportunities include: a local Hackathon, a summer internship at a local high tech company, and participation in a faculty member's research project.  Opportunities can also include online courses available through platforms like Coursera or edX, if the faculty have reviewed the offering and found it be useful and appropriate for their students.

The [Opportunities Explorer](https://radgrad.ics.hawaii.edu/explorer/opportunities/) provides access to around 80 Opportunities in the current RadGrad release.  Here's an example page for the Opportunity "Hawaii Annual Code Challenge":

![Opportunities Explorer](/img/overview/opportunities-explorer-hacc.png)

Once again, Opportunities are associated with Interests. In the case of HACC, the Interests are: Application Development, Civic Engagement, Data Mining, Data Science, Data Visualization, Social Computing, Sustainability, and Web Development.

## Degree Plans

Each student has a Degree Plan, which is the set of Courses and Opportunities that a student has completed previously, is currently taking, or plans to complete in upcoming semesters.  By explicitly representing and planning out curricular and extra-curricular activities, RadGrad can provide a more wholistic view of the student's disciplinary experience, not just their classroom activities.

## ICE

ICE is a three component measure to track both progress and success within the degree program.  ICE is an acronym for its constituent measures, which are named Innovation, Competency, and Experience.  To be a well-prepared computer science graduate according to RadGrad, students must earn 100 points in each of the three measures by the end of their degree program. Typically, a student earns Competency points for completing Courses, and Innovation and Experience points for completing Opportunities. RadGrad admins are responsible for assigning the number of points earned for a given Course or Opportunity. For example, in the RadGrad deployment for the UHM computer science department, a student earns 6 points for a B in a Course, and 10 points for an A. For Opportunities, for example, students earn 15 Innovation points for a weekend hackathon, and up to 25 points for a summer-long internship.

## Levels

Levels respond to the need we identified during our pilot studies for RadGrad participation to have a physical manifestation. Students want to know who else is using the system, and what progress they have made so far, without having to login to the system. After several rounds of design, we decided on the use of laptop stickers with a custom RadGrad design, with a color scheme representing a six stage progression from zero ICE points to 300 points across all three categories. Our beta tests have shown that RadGrad levels and their physical manifestation as laptop stickers are an appealing and useful way to students to form communities around their degree experience plans. Students immediately put the sticker on their laptop and told us that they find it interesting to see who else has one and what color it is. Each student's level is also displayed in their navbar to the left of their ICE points once they login to RadGrad. The sample student illustrated in Figure \ref{fig:radgrad} is at Level 3 (Green).