---
title: Build the domain model
sidebar_label: Domain model
---

A fundamental benefit of RadGrad is its "domain model": the set of interconnected Interests, Career Goals, Opportunities, Courses, and (potentially) Internships.   (Note that the RadGrad "domain model" is a subset of the RadGrad "data model". The latter includes many other entities, including users, reviews, course and opportunity instances, and so forth.)

The first step of the needs assessment process is to sketch out a RadGrad domain model for your discipline.  We recommend doing this in a simple spreadsheet, which minimizes the technology overhead but is still adequate to help you determine if your domain model is sufficiently complicated to warrant the development of a RadGrad instance for your students.

## Requirements for a viable RadGrad domain model

The characteristics of a domain model that indicate that a RadGrad instance might be beneficial include:

  * *The domain model reveals a substantial number of Interests, Career Goals, and Opportunities.*  For example, the RadGrad instance for UHM/ICS has approximately 80 Interests, 20 career goals, and 50 Opportunities.

  * *The domain model contains substantial interconnection between Interests/Career Goals and Courses/Opportunities.* If your domain model has lots of Interests and Career Goals, but there's no way for a student to pursue most of them through Courses or extracurricular activities (i.e. Opportunities), then RadGrad won't be helpful.   Similarly, if a substantial number of Courses and Opportunities have no associated Interests/Career Goals, then RadGrad can't help students "discover" these courses and opportunities by adding Interests and Career Goals to their profile.

  * *The domain model presents a variety of viable "paths" through the degree experience.* RadGrad is useful when it can help students design a "custom" degree experience that enables them to focus their activities on courses and opportunities that reflect their interests and career goals.  If your discipline doesn't allow for a variety of paths (for example, there are a set of required courses and opportunities that every student must experience, and that do not leave any additional time for other degree-relevant activities), then RadGrad might not be a good fit.

## Sketch your domain model

We recommend that you start by sketching out your domain model using [this Google spreadsheet](https://docs.google.com/spreadsheets/d/1bOEzA_YCXXmTI5l5FmMbpiqmt0fM_XOYrBAoGbj0Q7k/edit?usp=sharing). This spreadsheet contains a sample of the UHM/ICS domain model and can serve as a template. It contains four tabs at the bottom: Interests, Career Goals, Courses, and Opportunities.  Here's the template spreadsheet with the Interests tab selected:

<img src="/img/needs-assessment/domain-model-interests.png" />

As you will see, the template does not present the complete domain model for UHM/ICS (you can see the RadGrad UHM/ICS instance for that), but rather just a couple of examples for each entity type.

The goal of this activity is to "sketch" your domain model, not to come up with the "complete" domain model.  "Sketch" means building a domain model representation that is sufficient to demonstrate "viability" as discussed above.  So, if your sketch contains 20 Interests, 15 Career Goals, and 35 Opportunities that are all highly interconnected and represent many interesting paths through the degree experience, then that suffices to demonstrate viability and proceed to the next step of this needs assessment even if you know that your complete domain model will have many more.

On the other hand, you might find that you simply can't come up with enough interconnected Opportunities and Interests (say) to demonstrate viability.  If that's the case, then you might want to engage other students, faculty, and advisors to see if you're missing things.  If, after consultation, you still can't create a viable sketch for a domain model, then this outcome indicates (rather cheaply and quickly) that RadGrad might not be a good fit with your discipline.


### Interests

For a definition of Interests, see the [Basic Constructs](../../overview/basic-constructs) chapter.

The template provides three examples of Interests: Algorithms, Social Computing, and Quantum Computing:

<img src="/img/needs-assessment/domain-model-interests.png" />

When defining Interests for your domain model sketch, you want to have examples of both well-established, traditional areas as well as the latest emerging areas.  One interesting feature of this template is that it includes an Interest, "Quantum Computing", for which there are no Career Goals, Courses, or Opportunities.  A few emergent areas like this in your sketch are fine, in fact, they can enable you to assess student interest in an emerging area as a motivation for developing curriculum.  However, it should be the case that most Interests should have at least one Course or Opportunity.

### Career Goals

For a definition of Career Goals, see the [Basic Constructs](../../overview/basic-constructs) chapter.

The template provides examples of two Career Goals: AI/ML Engineer and DevOps Engineer:

<img src="/img/needs-assessment/domain-model-careers.png" />

Note that the template asks you to specify the Interests associated with this Career Goal, even though the Interest tab asked you the same thing (in the opposite direction).  **Don't worry about making your sketch internally consistent!**  The goal of the sketch is simply help you brainstorm interconnections.  As you define Career Goals, you might well come up with additional Interests.  That's fine.  If you feel there is value to updating the Interests tab, then do it. If you don't, then don't.

You can see that this page of the template helped "discover" some new Interests ("Application Development"). That's a natural outcome of looking at your domain from several perspectives.

### Courses

For a definition of Courses, see the [Basic Constructs](../../overview/basic-constructs) chapter.

The template provides examples of two Courses: ICS 428 and ICS 369:

<img src="/img/needs-assessment/domain-model-courses.png" />

Most disciplines have 50 to 100 courses.  It can be very time-consuming to enter all of the courses. We don't recommend that you do it.  Instead, skip over the lower-level introductory courses and focus on the 10-20 upper level courses that are popular and frequently offered. Those should be enough to help assess the viability of your domain model.

Again, you don't have to make your sketch internally consistent: you may come up with new Interests and/or Opportunities as you think about Courses. You can add them to these other categories or not.

### Opportunities

For a definition of Opportunities, see the [Basic Constructs](../../overview/basic-constructs) chapter.

The template provides examples of two Opportunities: ACM ICPC and Sadowski Lab:

<img src="/img/needs-assessment/domain-model-opportunities.png" />

Opportunities are typically the most difficult entity to populate.  Nevertheless, if you cannot come up with a significant number of relevant Opportunities, then it will be difficult to provide a convincing, viable sketch of your domain model.

This is a good time to contact faculty members to see who is running a research lab that can support undergraduate involvement. One important function of RadGrad is to provide an easy way for students to connect with faculty for research activities. Undergraduate research involvement is a strong predictor of a successful undergraduate degree experience.

That said, another strong predictor is engagement with local community programs. So, this is also a good time to explore local Opportunities related to your discipline and make contact.

## Assess your sketch for viability

Once you've built your template with a preliminary set of Interests, Career Goals, Courses, and Opportunities, review it for viability.

You might also discover "holes": an entity that is not related to other entities.  You might want to confer with others to determine if that's just a gap in your own knowledge, or a true gap in your discipline.

The RadGrad research team is happy to confer with you if you want our perspective.

Once you feel comfortable that your sketch indicates a viable domain model, it's time to create a pilot instance.





