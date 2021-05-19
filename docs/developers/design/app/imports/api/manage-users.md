---
title: How to manage users
sidebar_label: Manage users
---

RadGrad implements a user management scheme that combines two constructs: the Meteor User collection as well as a set of "Profile" collections that provide the specific information required for the role associated with a user. See the [Users and Profiles](/docs/developers/design/concepts/entity-relationship-model#users-and-profiles) section for more information on the representation of users and profiles.

## Usernames

In RadGrad, Meteor usernames are email addresses, such as "radgrad@hawaii.edu". This avoids situations such as creating a username like "foo" for a mentor and later finding that we need to support a student with email address foo@hawaii.edu. 

Slugs are created for each username (email address).  This is the way we guarantee that usernames are unique. Use of email addresses for users prevents certain types of collisions. For example, creating an opportunity named "java" and then later needing to define a student whose UH account is "java". 

The username is embedded in URLs, for example: http://radgrad.ics.hawaii.edu/admin/radgrad@hawaii.edu/home.   

## Authentication

In the current instance of RadGrad (http://radgrad.ics.hawaii.edu), Students, Faculty, and Advisors must login through UH CAS with their @hawaii.edu account.

The single admin account logs in through Meteor Accounts, and the username and email associated with it are provided in the settings.json file.  

As noted above, the set of usernames must be globally unique. You can't have a student whose username is "joe@hawaii.edu" who authenticates via CAS and a mentor whose username is also "joe@hawaii.edu" who authenticates via Meteor accounts. The SlugCollection will fail when trying to define the profile for the second joe@hawaii.edu.

## Passwords

No plain-text passwords are stored in JSON data or in ProfileCollections.   

Students, Faculty, and Advisors use CAS to login, so lack of password field is no problem.

In the settings file, we provide a flag which sets the password to something simple for development purposes only.

## Role Migration

There are two common forms of role migration:

  * Student to Alumni.  The student profile collection will have an optional field called isAlumni. If present and truthy, then this student is an alumni and their role will be set to ROLE.ALUMNI.  For now, that means: (a) the user cannot login to RadGrad, and (b) that user will not appear in listings of students.  This just gives us a way to preserve their data while not cluttering up the social network with departed students.

## Email reassignment

The approach documented in this page does not currently address email reassignment. If ITS reuses an email address owned by a prior UH student to a new student, then that person can see the old person's profile. Unless they have been made an alumni, and then they can't login.  This is hopefully rare enough that we can deal with it on a case-by-case basis.

## Referencing user and profile IDs in the code

In the data model as a whole, references within collection documents to users always refer to docIDs within the Meteor.users collection.  Note that the user's email address is defined as both the account name and the email in the Meteor.users collection.

Profile docIDs are never stored as "foreign keys" in other collections.  

As a result, you might see fields or variables named userID, studentID, adminID, sponsorID, facultyID, etc.  None of these refer to the profile.  They always refer to either the Meteor.users docID or to the user's account name (a.k.a. email address).



