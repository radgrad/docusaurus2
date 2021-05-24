---
title: Summer 2021 Project Goals
---

Our goals for Summer 2021 are the following

## 1. Perform role-specific pilot studies for the ICS instance

Our first task is to implement and improve RadGrad to the point that it will be useful to perform a pilot study of the student, faculty, and advisor user interfaces.

For the student role, we are lucky to have already performed a pre-pilot study using summer interns, who identified a significant number of issues.  These issues have been converted to tasks and so, upon their completion, we will be ready to perform a pilot study for the student role. This will involve a guided exploration of the RadGrad user interface with 5 UH students who have already volunteered.

For the faculty and advisor role, we still need to review and ready those user interfaces.  The faculty pilot study will involve three ICS faculty, and the advisor pilot study will involve one advisor.

These pilot studies are intended to surface usability and functionality issues that must be addressed prior to public release.

Everyone will focus on these tasks.

## 2. Review and improve entity content

Some of the Interests, Career Goals, Opportunities, and Courses are "stale". We need to do a complete editing pass over this "content" to bring it up to date.

Philip will focus on this task.

## 3. Matriculate (i.e. delete) old user content

Some users and user-generated content (reviews, course instances, opportunity instances, etc) are over two years old and should be deleted from the system.

Cam will focus on this task.

## 4. Integrate InternAloha.

We can significantly improve the utility of RadGrad to ICS students by integrating the InternAloha system.  This involves the following:

* Address current bugs in InternAloha scrapers (GlassDoor, LinkedIn, Angellist).
* Complete scrapers for Student Opportunity Center and 80000hours.org.
* Improve usability of "attended" scrapers: investigate running them within chrome as a "snippet". See [6 snippets to keep in your Chrome DevTools](https://www.telerik.com/blogs/6-snippets-to-keep-in-your-chrome-devtools) and [Leverage chrome dev tools for dynamic web scraping](https://towardsdatascience.com/leverage-chrome-dev-tools-for-dynamic-web-scraping-2d3f7703ea4a), which also includes some helpful tips.
* Build a "data import" system. For now, we will continue to run the scrapers using InternAloha and publish the datafiles to GitHub. What will change is that RadGrad will run a once-a-day cron job to read in those files and update (if necessary) its internal representation of Internships.
* Build UI for InternAloha in RadGrad using a simple "hook" system to conditionally load those classes.
* Build a way to manually define Internships. This will be similar to the way we define Opportunities, but will involve fields specific to our Internship representation.

Andre and one other to-be-determined developer will focus on this task.

## 5. Ultimate goal: Create public release for ICS students

With any luck, by August 15, we will be ready to re-launch RadGrad in the ICS Department.  This launch will provide us with additional valuable information that we can use to develop a pilot study of the Comp-Eng instance during the Fall semester, for public release in January, 2020.

