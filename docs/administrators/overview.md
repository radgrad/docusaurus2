---
title: Sustainability Plan
---

## Motivation

Once a RadGrad instance has been implemented and deployed into a Department on a trial basis, one must determine what, if any, positive impact the system has on the students, faculty, and advisors.  Following this, the Department must decide whether or not to allocate the resources required to maintain this positive impact into the future. 

## RadGrad's impact

In AY 2021-2022, we performed an evaluation of RadGrad to assess its impact on students, faculty, and advisors.  A pre-publication draft of our findings is available [here](/docs/radgrad-2022.pdf). In this section, we will briefly overview these findings. Please consult the publication draft for details of our approach. 

Our evaluation study drew participants from four stakeholder groups:

1. *Early stage students.*  This stakeholder group consisted of students in the first, second, or third semester of the degree program during Academic Year 2021-2022.  Out of 475 students in this group, 187 participated, for a response rate of 39%. The participating students provided data to us in the form of essays in response to the prompt, "Please provide a short 2-3 paragraph reflection on your experience with RadGrad." We received and analyzed approximately 100 pages of essay material for this stakeholder group.

2. *Recent graduates.*  This stakeholder group consisted of students who completed the degree during in Fall 2021 or Spring 2022. Out of 107 students in this group, 23 participated, for a response rate of 21%. The participating graduates completed an online survey that asked them about their experience with RadGrad. 

3. *Faculty.* This stakeholder group consisted of faculty in the degree program, excluding the two Professors who are researchers in this project.  Out of 21 faculty in this group, 10 participated, for a response rate of 47%. The participating faculty completed an online survey that asked them about their experience with RadGrad.

4. Advisors. This stakeholder group consisted of the two academic advisors in the degree program.  Both participated, for a response rate of 100%. The participating advisors completed an online survey that asked them about their experience with RadGrad. 

Analysis of student data provides evidence for the following assertions about RadGrad:

#### RadGrad provides useful information.

Approximately three out of four essays included text that supported the assertion that RadGrad provides useful information. Here is an essay excerpt that touches on many of the features mentioned by students:

> "After spending about an hour going through RadGrad, I learned a lot more about courses, opportunities, and possible career interests. These are all things I hear older people talking about, but I never spend a lot of time thinking about them myself. I just let STAR tell me what classes to take, say I’ll think about opportunities later, and tell people I don’t know what I want to do in the future. RadGrad forced me to actually think about the classes I’m going to be taking. RadGrad also showed me opportunities available to me and made me choose some. RadGrad also made me choose computer science related jobs and see what common interests they share. Overall, in the hour or two I spent working on my RadGrad profile, I learned a lot about future classes, opportunities I can take advantage of, and several possible career choices."

#### RadGrad Explorers are useful

RadGrad provides Explorers for Interests, Career Goals, Courses, and Opportunities.  Once again, approximately three out of four essays included text providing evidence for the utility of Explorers. For example:

> "I thought that it was cool that they suggested some careers and extra-curriculars based on your interests and career goals."

> "At times I have felt rudderless, not knowing the correct classes to take for my degree plan. However, RadGrad reveals many different options with in-depth descriptions, allowing me to make an informed decision to further my degree path."

#### RadGrad broadens student perspectives on computer science

Approximately 60% of essays indicated a broadening of perspective about computer science.  For example:

> "When I used to think about computer science, I would have a mental image of thousands of lines of code for some tech company to use in their newest product, for example a router, but I never realized how computer science could be used in so many non-technical fields. As someone who has always been extremely interested in social issues, I was really interested to hear about some of the applications and opportunities people are working on."

> "But what really impressed me was the career goals and courses. The career goals opened my eyes to the multitude of possibilities that ICS is capable of. Many of these career paths were unknown to me till that moment. I actually found a decent amount of careers that I wouldn’t mind exploring better."

Some essays also indicated that RadGrad could have an impact on engagement and retention. For example:

> "My first time I had to come to class I felt so lost and unsure of where I was going. I also did not know any of the clubs that are offered or the various opportunities that are available to us. Radgrad has helped me to get a better understanding of the different opportunities."

> "At that time, I was still on the edge of whether or not I wanted to commit to pursuing a degree in computer science. Therefore, seeing this website at that time helped me to see what kind of interests I had matched up with the courses or opportunities out there. At that time, it also helped take some of the uneasiness off my shoulders because I thought that going into computer science means there are only careers related to coding. I gained new insight into how much of a variety computer science can offer."

> "Seeing all of the opportunities available reminded me that I don't need to learn these things on my own--that there are tons of people at this University who are learning as well as can help me learn. Seeing all the opportunities on RadGrad has definitely made me feel a lot better and motivated to learn Computer Science."

#### RadGrad helps create communities of practice

Approximately 30% of the essays contained text providing evidence that students found RadGrad useful in identifying communities of practice of interest to them. For example:

> "Personally, I found the idea of discovering others with similar interests the most useful. I feel the most trouble I have is with networking and it was really cool to see some people I've seen in my classes with similar interests."

> "I always wanted to join a certain community and develop interaction skills with like-minded students. RadGrad provides me a various of communities that I can join and it makes a lot easier to see what community is the best fit for me."

The journal article provides much more information on the strengths and weaknesses of RadGrad. For example, faculty were mostly unengaged with the system, while advisors were enthusiastic.  But the evaluation did provide fairly strong evidence that RadGrad has a positive impact on students, as the above essay excerpts indicate.

## Sustainability requirements

Given that there is evidence that RadGrad makes an impact, the next question is, "What is required to keep RadGrad going?" Here are the primary recurrent tasks involved in maintaining a RadGrad installation, along with a "role" to identify the people who would carry out the task. 

#### Manage student data (System Administrator)

At the beginning of each semester, all new RadGrad student users must be identified (typically, new RadGrad users will be enrolled in either ICS 111 or 211), and their STAR data, along with the STAR data for all existing RadGrad student users, must be uploaded into RadGrad.  This serves several functions:

1. Each RadGrad instance is a "private" community.  It is not the case that anyone with a UH account can enter the ICS RadGrad instance. We use enrollment information from lower level ICS courses to identify those students who should be given access to the ICS RadGrad. (Of course, we can manually register other students on a case-by-case basis).

2. STAR data is used by RadGrad to determine the courses completed by each student. This lowers the overhead of using RadGrad for these students, since they don't have to copy-and-paste this information from STAR. (Verified course completion data is also important for RadGrad game mechanics).

3. STAR data helps the RadGrad system administrator determine which students have graduated and thus should be moved to "alumni" status.

#### GC old data (System Administrator)

RadGrad has been deployed in some form in our department for almost five years now, and we have discovered that there must be periodic "garbage collection" of user data.  In the current design, there is little benefit to students of having 5 or 10 year old student data in the system, and there is a cost in terms of a decreased signal-to-noise ratio. So, once a year, the RadGrad System Administrator must run scripts to identify old users and purge them from the system.

#### Backups, bug fixing, security updates, library management (System Administrator)

The software infrastructure that RadGrad is based upon is constantly evolving, and as a result, there is periodic, mostly unpredictable, requirements for the RadGrad system administrator to update libraries, fix bugs, make backups, and carry out other software-related issues. 

#### Content curation (Faculty Administrator)

RadGrad has four primary kinds of content: Interests, Career Goals, Courses, and Opportunities. All of this content must be reviewed on an annual basis to ensure that it is up to date.  For example, several students have noted that some of the links in the system are broken. Out of the four categories of content, Interests and Career Goals changes rather slowly, Courses change somewhat faster, and Opportunity content changes significantly on a year-to-year basis. 

RadGrad is designed under the assumption that a subject matter expert (normally a faculty member) will be responsible for making sure that content is kept up to date. 

#### Opportunity verification (Faculty Administrator and/or ICS Advisors)

In order to "earn" myICE points for having carried out an Opportunity, students must submit a "Verification Request". This triggers an email to the "owner" of the Opportunity, who must then login to the system and either accept or decline the student's request. This is a rather low overhead activity, but someone needs to do it. 

#### New student onboarding (ICS 111, 211, 314 Faculty)

We have found that the best way to get students introduced to RadGrad is via an assignment in each of these three classes which asks them to complete the [RadGrad New Student Tutorial](../users/new-student/overview) and write a short essay about their experiences. This can be either a required assignment, or else an optional assignment that earns a small amount of extra credit.

So far, faculty teaching these courses have been amenable to this request.  We created a [template assignment](ics111-assignment-template) to simplify this process. 

#### Integration of RadGrad into advising process (ICS Advisors)

Our case study provided evidence that the RadGrad onboarding experience proved useful to students and broadened their perspective on computer science. It also showed that advisors are enthusiastic about RadGrad and find it useful in the advising process.

ICS Advisors also distribute laptop stickers when students achieve new Levels.

This must continue as part of a sustainabilty plan.

#### Integration of RadGrad into other parts of the undergraduate curriculum and research (ICS Faculty)

One of the weaknesses identified by the case study is a relative lack of engagement by faculty with RadGrad. This impacts on students, because if they don't see evidence of faculty awareness of or engagement with RadGrad, then they become unsure of the value of the system.

There are a few ways for faculty to engage with RadGrad beyond the onboarding assignment in ICS 111, 211, and 314:

* Provide one or more Opportunities in RadGrad related to the faculty member's research.  (In some cases, it appears that faculty do not do this because they do not want undergraduates involved in their research, which is a separate issue.)

* Find ways in their courses to direct students to RadGrad. For example, in a course on AI, a faculty member could advocate that students get involved with AI-related Opportunities in RadGrad.

#### Peer promotion of RadGrad (RadGrad Street Team)

In prior years, we organized a "street team" of undergraduates who helped raise awareness of RadGrad. We believe this can be a valuable mechanism to help RadGrad make the most positive impact possible.

One semester, we organized a RadGrad t-shirt design contest and provided free t-shirts to all students who achieved a certain Level in RadGrad.

Maintaining a street team probably involves contact between the RadGrad Faculty Administrator and a student club like ACM Manoa to request this support. It is unclear what kind of incentives would be required (if any) for a Street Team to actually allocate time and effort to RadGrad promotion.

## A proposal for RadGrad sustainability in AY 2022-2023

The previous section detailed the tasks involved with sustaining a RadGrad installation. For the past four years, these roles have been carried out by personnel on the NSF RadGrad project grant.  However, that grant ends in Fall 2022, and so continued use of RadGrad within ICS will necessitate a different structure.  

Here's one way forward for the next academic year in ICS:

#### RadGrad System Administrator

As detailed above, the RadGrad System Administrator has a great deal of responsibility.  Cam Moore has taken on this role for the past several years, and received summer salary from the NSF grant as compensation. 

For AY 2022-2023, I propose that Cam continue in this role, but that he receive a one course reduction for the academic year as compensation for this significant administrative burden in service to the undergraduate program. 

Specific responsibilities:
* Maintain RadGrad code base.
* Maintain student user base.

#### RadGrad Faculty Administrator

For the past several years, Philip Johnson has served in the role of Faculty Administrator and has thus been the primary maintainer of content.  However, he is currently on sabbatical. 

For AY 2022-2023, I propose that that either the Chair and/or Associate Chair take on this role.  This is also a great way for them to keep up to date with community activities relevant to the undergraduate degree experience.

Alternatively, the Chair or Associate Chair could find another faculty member to take on this responsibility.

Specific responsibilities:
* Review and update all content (Interests, Career Goals, Courses, Opportunities)
* Opportunity Verification
* Contact with student clubs re: RadGrad Street Team (see below)
* Request RadGrad onboarding as part of ICS 111, 211, and 314 (see below)

#### ICS 111, 211, and 314 Faculty

For AY 2022-2023, it would be best if the Chair and/or Associate Chair contacted the instructors of ICS 111, 211, and 314 to request their participation in the RadGrad onboarding process. 

Shifting this responsibility to the Chair or Associate Chair signals to faculty that RadGrad has become a departmental project, as opposed to a research project of a couple of faculty.

Specific responsibilities:
* Provide a RadGrad onboarding assignment as part of the course curriculum

#### ICS Advisors

The ICS Advisors seem ready to continue and/or increase their use of RadGrad.  What is necessary, though, is to ensure that all other parts of the sustainability plan are in place so that there is a system for them to use.

Specific responsibilities:
* Refer to RadGrad in advising meetings.
* Refer to RadGrad in monthly newsletters.
* Perform Opportunity verification as required.

#### ICS Faculty

Obtaining buy-in from ICS Faculty as a whole is complicated and may not be possible.  If all other parts of the sustainability plan can be put in place, then (at the very least) RadGrad should continue to have a positive impact on the undergraduate degree experience.

Specific responsibilities:
* Include Opportunities related to research projects
* Find ways to promote RadGrad within undergraduate courses

#### RadGrad Street Team

To create a functioning RadGrad Street Team will require (at least) some contact between the RadGrad Faculty Administrator and one or more undergraduate student organizations (i.e. ACM Manoa, UHM-SWITCH, etc.). I do not know if additional incentives would be required.

Like ICS Faculty involvement, a street team would certainly be helpful, but might not be necessary for RadGrad to have a positive impact on the undergraduate degree experience.

Specific responsibilities:
* Find ways to promote RadGrad.
