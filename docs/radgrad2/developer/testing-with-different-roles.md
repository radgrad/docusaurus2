---
title: Testing With Different Roles
sidebar_label: Testing With Different Roles
-------------------------------------------

## RadGrad Roles
There are six roles for accounts in the RadGrad system: Admin, Student, Faculty, Advisor, Mentor, and Alumni. Logging into RadGrad as any one of these roles will show you what RadGrad looks like and how it functions to users of that role. Certain methods of collections assert particular roles that are the only roles authorized to execute those methods (otherwise they throw an unauthorized error). Therefore, it is important while developing RadGrad that you are logged into the correct role to be able to manually test the functionality of your code behaves as expected to any role constraints.

## Admin Role
The only exception to role constraints are Admin accounts. All collections are published to Admin accounts and they should be allowed to execute any method from any collection. Logging into an Admin account takes you to its home page. At the bottom of the home page is a widget that shows all the users for a corresponding role. Clicking on any one of these accounts allows you to see RadGrad from the perspective of those accounts.

**NOTE: When you click on these accounts although you may be viewing RadGrad as a student as an example based on the URL (i.e., `localhost:3200/#/student/samplestudent@hawaii.edu/home`), you are still LOGGED IN as an Admin account. In other words, functionality that was originally restricted to students is no longer restricted due to the fact that Admins can execute any method from all collections.**

So if you want to test out Student pages, it's recommended that you actually log into a Student account and not through the Admin account.

## CAS Login (Student, Faculty, and Advisor)
Students, Faculty, and Advisors users login through the CAS system; however, the local development of RadGrad2 uses the test version of the UH CAS system. Unlike the live and real UH CAS system that students and faculty normally use, you must be added to the test CAS system manually if you were not already in it (ask to be added). Once added, you can login to your normal Student/Faculty/Advisor account with your UH email and password (if you are a Student, Faculty, Advisor, respectively) like you normally would on the real CAS system.

### Bypassing the CAS Login
**IMPORTANT: DO NOT commit the changes you made in the two files for this section of "Bypassing the CAS Login", you must undo them**

Clearly you can only login to your one UH account assigned to you using CAS, and you would not be able to test with the other two roles. An easy way to bypass this is modifying `define` method in `UserCollection.ts`


This can be done by commenting the entire `IF` code block (Line 68 - 79 in the image below) or just deleting the other two roles you cannot log into from the `IF` conditionals.

![usercollection-code.png](../../../static/img/radgrad2/developer/testing-with-different-roles/usercollection-code.png)

This makes it such that the Student, Faculty, and Advisor accounts are now created with a randomly generated password and can be logged into with those passwords rather than through the test CAS system. In order to generate and find the generated passwords, you must start with a clean Meteor using `meteor reset`. The first `meteor npm run start` after the reset initializes the database and will print out messages in your terminal console that contains the usernames and passwords for all the accounts whose passwords were randomly generated. Simply save at least one account for each role to be able to log into it for subsequent sessions. Note that doing `meteor reset` again will re-generate new passwords for those accounts.

Now modify the `<Dropdown.Item>`'s in `RadGradLoginButtons.tsx` (Lines 60, 61, and 63 from the image below) such that we replace `onClick={handleClick}` to `as={NavLink} to="/signin"` for the `id="student"`, `id="faculty"`, and `id="advisor"` similar to the `id="mentor"`.

![radgradloginbuttons-original.png](../../../static/img/radgrad2/developer/testing-with-different-roles/radgradloginbuttons-original.png)

## Mentor Login
We already generate random passwords when we create Mentor accounts in local RadGrad2 development. Similar to how you would find the generated passwords from the "Bypassing the CAS Login" section above, you need to start with a clean Meteor using `meteor reset`. The first `meteor npm run start` then initializes the database and prints out the generated passwords for Mentor profile accounts.

## Alumni Login
Currently RadGrad2 does expose any functionality to Alumni, so there isn't really a need to test and see RadGrad from the perspective of an Alumni.

## Two Users at the same time
If you want to be able to be logged into two different users, you can open up an incognito window and login the second user from that window. Note that browser extensions are disabled in incognito window, so you won't have access to React or Meteor extension tools in the incognito window.
