---
title: Entity-Relationship Model
---

The prior section illustrated the relationships between the data model entities in terms of class inheritance. That perspective reveals how code is shared.

This section documents the direct relationships between data model entities.  Depending upon your perspective, you might think of these references as "pointers", "foreign keys", or "references".  For example, each document in the CourseInstance collection needs to refer to a specific Academic Term in which the course instance occurs, a specific student who has/is/will be taking the course, and a specific Course. These references are implemented via fields in the CourseInstance document that hold the docID to a document in the other entity's collection. So, each CourseInstance document has the following fields (among others): AcademicTermID, StudentID, and CourseID.

## Users and Profiles 

One of the more complicated representations in RadGrad is a user. (This is unfortunate, but the following complicated representation is the simplest one we could come up with that works effectively.)

<img src="/img/radgrad2/datamodel/UsersAndProfiles.png" width="100%"/> 

Each user in RadGrad is represented in two ways.  The first way is as a document in the Meteor Users collection.  Meteor provides a built-in accounts package which we use for authentication and authorization which provides this Users collection. So, in order for someone to be able to login to RadGrad, they must exist as an entry in the Users collection.   The Users collection has a very simple representation: each user has a username, which is their email address. In addition, each user has an email field, which is also their email address, and a roles field, which is managed by the standard Roles package. 

RadGrad does not augment the documents in the User collection with all of the additional properties we need to know about users. Meteor does not recommend doing this, and after previous experience, we evolved to the current representation in which we keep a separate set of collections to manage the properties associated with users.  Each RadGrad user must fall into one of five roles: Student, Faculty, Mentor, Advisor, or Admin.  There is a "Profile" collection associated with each of the roles.

Because there are nine properties that every user has (username, firstName, lastName, role, picture, website, interestIDs, careerGoalIDs, and userID), RadGrad provides a class called BaseProfileCollection to manage these properties. This class is not shown in the above diagram. Instead, the four Profiles have the same initial nine properties.  The MentorProfile and StudentProfile have some additional properties. 

The ERD in the illustration only shows the relationships for the common properties shared across all profiles, i.e. the "base" profile. As you can see, every profile has a link back to the corresponding document in the Users collection for this user, as well as references to their CareerGoals and Interests.  To find a profile given only the User document, you must search for the matching username in each of the four Profile collections. 

**Note:** We are removing the Mentor role. Also we are changing the relationship between profiles and interests and career goals. We now have Favorite collections that map a user to an interest or career goal. 

## Courses 

RadGrad represents courses through two entities: Course and CourseInstance.

<img src="/img/radgrad2/datamodel/CoursesAndCourseInstances.png" width="100%"/> 
 
Course represents academic term and student-independent information about a course. 

CourseInstance represents the occurrence of a specific student taking a course for a specific academic term, either in the past, present, or future. If the CourseInstance is in the past, then typically it was created as a result of uploading STAR data, in which case both the fromRegistrar and verified booleans are set to true. A verified CourseInstance means that the student will earn ICE points. 

CourseInstances in the present academic term or future academic term are typically created as a result of the student manipulating their degree plan. These CourseInstances have their fromRegistrar and verified booleans set to false.  

## Opportunities 

In RadGrad, extracurricular events and activities are called "Opportunities", and are represented by three entities: Opportunity, OpportunityType, and OpportunityInstance. 

<img src="/img/radgrad2/datamodel/OpportunitiesOpportunityTypesAndOpportunityInstances.png" width="100%"/> 
 
OpportunityType specifies the kind of Opportunity: club, event, online course, etc.

Opportunity represents the opportunity "in the abstract", specifying its description, sponsor (i.e the faculty member responsible for managing the description and verifying student participation), the ICE points, the academic terms it might be available, etc.

OpportunityInstance represents an "instantiation" of the Opportunity in a specific academic term for a specific student. It also duplicates the ICE points and the sponsorID from the Opportunity. This enables an instance to depart from its parent Opportunity with respect to these values, and also speeds lookup.

## Interests 

The primary "connective tissue" in RadGrad is Interests. These are topical areas in the discipline. For computer science, example Interests might be "blockchain", "bioinformatics", "Java", and so forth. Interests are grouped together through the InterestType entity. Example InterestTypes might be "Club", "Research Project", etc. 

<img src="/img/radgrad2/datamodel/InterestsInterestTypesFavoriteInterests.png" width="100%"/> 

This diagram indicates that:
 
  * All Users (represented by FavoriteInterest) have at least one Interest associated with them.
  * All Courses, Opportunities, Career Goals, and Teasers have at least one Interest associated with them.
  * Each Interest is associated with one and only one InterestType.

This representation enables RadGrad to associate entities based on Interests: the system can find Users with similar Interests, recommend Courses to Users based upon matching Interests, and so forth. 

## Slugs 

"Slug" is a term commonly used in web application development to denote a unique string that can be used as part of a URL to identify a domain entity.  To facilitate their use in URLs, slugs are generally lower case, and consist only of letters, numbers, and hyphens or underscores. For example, in RadGrad, the slug for the "Software Engineering" Interest might be "software-engineering".

In RadGrad, both slugs and the 14 character MongoDB document IDs uniquely identify documents.  However, if you reset and reinitialize a RadGrad database, the document ID will be different, but its slug will stay the same.

Slugs are used heavily in RadGrad when initializing the database from a fixture file in order to represent relationships between different entities without reference to their docID.  For example, here is an example invocation of the CareerGoals define method:

```
CareerGoals.define({ name: 'Database Administrator',
                     slug: 'database-administrator',
                     description: 'Wrangler of SQL.',
                     interests: ['application-development', 'software-engineering', 'databases'],
                     moreInformation: 'http://www.bls.gov/ooh/database-administrators.htm' });
```

First, you can see that the slug "database-administrator" has been passed into the define method, so that this document can be referred to in future definitions by that string.

Second, the interests field contains an array of three slugs: "application-development", "software-engineering", "databases". Internally, the MongoDB document for this Database Administrator Career Goal will contain the 14 character document IDs for these interests, but we don't need to worry about that in the fixture file: we can just refer to the slugs. 

RadGrad does not support forward referencing of Slugs. For example, when the above CareerGoal definition executes, if a Slug is referenced (such as "application-development") that is not defined, then an error is thrown. Thus, the order in which RadGrad data is loaded is important and there can be no circular dependencies among entity definitions.

Slugs form a unique namespace across all entities: you cannot use the same string to denote an Interest Slug and a CareerGoal slug, for example.

Here is an ERD that illustrates which entities use Slugs:

<img src="/img/radgrad2/datamodel/Slugs.png" width="100%"/>

## Other entities 

There are a variety of other entities that are more peripheral in the data model or have a sufficiently simple structure to not warrant their own section.  Here are several of the remaining entities:

  * CareerGoal. Career goals enable RadGrad to identify appropriate combinations of curricular and extracurricular activities to prepare a student for their professional life after graduation. 

  * PublicStats.  Provides the publically available data shown on the landing page. 
  
  * Review.  The review entities manage reviews of courses and opportunities.
  
  * Teaser.  The teaser entities manage the YouTube videos shown in the system.
  
  * VerificationRequest.  Manages the verification requests and responses in the system for opportunities. 



 










