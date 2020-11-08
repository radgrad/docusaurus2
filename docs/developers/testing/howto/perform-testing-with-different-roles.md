---
title: How to perform testing with different roles
sidebar_label: Perform testing with different roles
---

## RadGrad Roles

There are five roles for accounts in the RadGrad system: Admin, Student, Faculty, Advisor, and Alumni. Logging into RadGrad as any one of these roles will show you what RadGrad looks like and how it functions to users of that role. Certain methods of collections assert particular roles that are the only roles authorized to execute those methods (otherwise they throw an unauthorized error). Therefore, it is important while developing RadGrad that you are logged into the correct role to be able to manually test the functionality of your code behaves as expected to any role constraints.

Normally, Admin logs in using the Meteor accounts system, while Students, Faculty, Advisors, and Alumni login using CAS authentication.

For testing purposes, if Meteor.settings.public.development is true, then when the database is initialized, all users are created with default credentials and using the Meteor accounts system.
