---
title: RadGrad2 Evaluation
sidebar_label: Evaluation
---

We believe that computer science must develop new and better ways to improve engagement (i.e. create wider interest in pursuing CS), retention (i.e. create mechanisms to improve the chance students, once pursuing a CS undergraduate degree, will complete it), and diversity (i.e. create ways to improve engagement and retention for women and underrepresented minorities).

The fundamental goal of the RadGrad Project is to provide students, faculty, and advisors with an alternative perspective on the undergraduate degree program---which traditionally boils down to a single kind of activity (coursework), and a single metric for success (grade point average). Our alternative perspective is called the Degree Experience, and it gives first class status to both curricular activities (courses) and extracurricular activities (discipline-oriented events, activities, clubs, etc.) To establish the first class status of extracurricular activities, the Degree Experience perspective replaces GPA as the single metric for success with a three component metric called ICE that assesses student development with respect to Innovation, Competency, and Experience. Each student's Degree Experience also includes a representation of their disciplinary interests and career goals that helps them assess the relevance of potential curricular and extracurricular activities. Finally, the Degree Experience perspective is voluntary. It complements but does not change any existing undergraduate degree requirements of a university.

## General Goals of RadGrad2

In no particular order these are the goals of RadGrad2:

* Improve the performance of RadGrad by using React and Typescript.
* Evaluate how well RadGrad improves engagement and retention.
* Support STEM departments other than ICS at UH Manoa. (future work)
* Support other Universities other than UH Manoa. (future work)

## Evaluating Performance

### Performance Goals

* 5 seconds for the initial load, full subscriptions.
* 2 seconds for any other load, e.g. switching between pages.

### Evaluation Mechanisms
These are some of the mechanisms we can use to improve performance.

#### High-level 
* Look at subscriptions. Are there better ways to manage the subscriptions? Load them all at the start, what we are doing right now. Or only subscribe to what you need for the page.

* Use the React Profiler to measure the performance of different components. https://blog.bitsrc.io/measure-performance-with-the-new-react-profiler-component-14d3801d232d. Do we have any slow components and can we improve their render times?

#### Low-level
* Look at the network traffic and see what is taking time.
* Compare RadGrad1 and RadGrad2 load times for similar databases.
* Use Performance Tab of Dev Tools

## Evaluating Engagement and Retention
In the RadGrad2 system, we currently monitor user activity and engagement with the system through user interactions. Notably, we can track which pages that students visit that gives us an overview of which pages are the most visited. This has given us some insight into which items in the explorers get visited the most and also gives a clue as to which areas in computer science students are most interested in. Particularly, this data showed which career goals, interests, courses, and opportunities were viewed the most. These page interactions can then be analyzed in the Admin Analytics pages, being able to see all of the interactions for each student. However, we had no aggregated display that showed the page interactions across all users that would make analysis easier and more insightful.

Page Interest Views is an analysis method that specifically tracks student interest in different career goals, interests, courses, and opportunities listed in the system. Along with the implementation of this method also comes with the implementation of new pages that all users of the system can use to view all the aggregated page interest views across all users. This data has opened the possibility of exploring the question of whether we can see emergent or upcoming trends of student interests in various fields of computer science.

### Evaluation of Page Interest Views
As we predict that most students will update their career goals, interests, courses, and opportunities by semester, evaluation of the effectiveness of this analysis technique can be done on a semester by semester basis. After each semester, through the page interest views scoreboard, we can filter all the snapshots from the start of the semester through the end of the semester. With this data:
* View which items in career goals, interests, courses, and opportunities are viewed the most
* Analyze any correlation between the courses offered that semester versus the increase or decrease of page interest views of career goals, interests, or opportunities related to those courses
* Analyze any correlation between the increase or decrease of page interest views versus their respective areas in the professional world

To view more long-term trends that might not necessarily be seen on a semester by semester basis, we can compare the analysis we did for a semester to the analysis done on a consecutive or previous semester(s). This allows us to see if there are trends of student interest that seem to happen every semester.


## Evaluating Support for Other Departments (Future Work)

* Develop documentation on how to create a fixture for another STEM department.
* Develop a fixture for another STEM department and document the process.

## Evaluating Support for Other Universities (Future Work)

* Create a standard for uploading data from the registrar. What does RadGrad need for getting student's academic data?

