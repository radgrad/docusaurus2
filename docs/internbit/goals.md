---
id: internbit-goals
title: InternBit Goals
sidebar_label: Goals
---

The InternBit project results from student feedback regarding our original implementation of "Internship" opportunities in RadGrad.  RadGrad can only provide information about a relatively small number of "curated" local internships, since each opportunity must be manually entered into the system by a faculty member, advisor, or administrator. After deployment, use, and evaluation of RadGrad during year one, we discovered that our current support for internships does not meet the needs of students, but could be augmented to provide a more scalable and efficient solution.

There are several significant barriers for undergraduates who wish to pursue internship programs.  First, there are many online sites providing information about internships, including: LinkedIn.com, Glassdoor.com, Internships.com, InternMatch.com, YouTern.com, Idealist.org, CoolWorks.com, Indeed.com, ZipRecruiter.com, SimplyHired.com, Careershift.com, USAJobs.gov, Experience.com, Handshake.com, StudentOpportunityCenter.com, and of course the NSF REU Site Directory.  Each of these vary in their filtering, search, and recommendation mechanisms. In addition to these online repositories, but just as important, there can be many high quality internships with local small businesses who simply contact the University directly.  For example, during the six months from September 2019 - February 2020, University of Hawaii computer science students received 35 emails regarding local internship opportunities from our departmental undergraduate mailing list.

This plethora of access points means that students complain about spending many fruitless hours searching for an internship that is compatible with their skills and interests. Ultimately, the internship search process is a constraint satisfaction problem: which internships is the student qualified for? Which ones reflect their interests? Which ones satisfy geographical or financial constraints?  Can the student complete the application prior to the deadline? Intriguingly, the internship search process can yield interesting information for future use, including a better understanding of what qualifications the student should acquire in order to qualify for an internship in the future.

An insight from the first year of the RadGrad project is that RadGrad already collects several key pieces of information about the student that can be useful to the internship search process: for example, their grade level, their approximate GPA, their interests, and (based on their courses and extracurricular activities) their skills (such as how many years of programming experience, their programming languages, etc).

The goals for this project include:

**Design and implement a crawler.** The crawler visits online internship sites, parse internship listings to extract key details such as application deadline, interest areas, and application requirements, and store these results. We expect to design custom parsing routines for each online site in order to take advantage of any structural consistencies in the presentation of internship information. We will develop a corpus of training pages that we will use to evaluate the parsing algorithms.

**Design and implement recommendation engine.** The recommendation engine queries the aggregated internship database using RadGrad data about a student and return relevant internship opportunities.

**Design and implement the company UI.** The company UI enables one-off entry of internships, such as those associated with local companies where the crawler approach is not appropriate.

**Design and implement student UI.** The student UI enables students to see the internship profile extracted from their RadGrad data, modify and correct it as necessary, and then request that the engine send them notifications of relevant internships as they become available. The student UI should also provide a way for students to give feedback on the quality of the recommendations, which can yield further information about issues with the parsing process.

**Design and implement evaluation.** We will investigate two primary research questions in this project: (1) Does InternBit improve the ability of students to find internships of interest?  We can test this hypothesis via an experiment where students first look for internships unaided by the system, then use the system to see if they uncover additional internships. The occurrence of either false positives or false negatives can provide insight into the capability of the system.  (2) Does InternBit change the behavior of students with respect to their degree experience? This is the more fundamental goal: by decreasing the ``friction'' for finding internships of interest, do students learn about requirements earlier in their degree program, and plan to acquire the necessary skills as part of their degree experience?



