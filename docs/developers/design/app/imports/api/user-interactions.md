---
title: User Interactions
---

## Motivation

To support the RadGrad research process, and to provide usability feedback to support improvements in design, RadGrad implements a feature called "User Interactions". The goal of User Interactions is to collect data about usage of the system and present it in the form of "behaviors".  User Interactions are not designed to support low-level analysis of user behavior, such as "what page is the user most likely to visit when they are on page X?".  Instead, they are designed to support high-level analysis of user behavior, such as "What percentage of users have 'completed' their degree plan (i.e. added enough courses and opportunities to eventually earn 100 Innovation, 100 Competency, and 100 Experience points)?"

## Basic mechanisms

User Interactions are implemented with the following mechanisms:

**The UserInteraction collection.** Each document in this collection records one "behavior" of a user, such as "Logging in" or "Visiting the Career Goal Explorer page". Each of these document is timestamped, but at the grain-size of a day (i.e. YYYY-MM-DD). So, the UserInteraction collection can tell you that a specific user visited a specific page on a specific day, but not how many times during the day they visited that page, nor what precise time during the day did that visit occur. This coarse-grained approach reduces the volume of the UserInteraction collection, and greatly simplifies collection and analysis, but of course limits the kinds of analyses that can be performed. We are comfortable with this trade-off.

**The UserInteraction Manager class.** The User Interaction Manager is a class which creates a singleton instance in the server. This instance provides methods to build an in-memory "snapshot" of the state of the system once a day, and compares the current day's snapshot to the previous day's snapshot in order to generate UserInteraction documents.

**The lastVisited field of User Profiles.** All user Profiles contain a field called "lastVisited", which stores the most recent date (in YYYY-MM-DD format) that the user visited each page in the system.  One purpose of this field is to support Checklist items that remind the user to perform certain actions if they have not visited a page in a long time. This field is also used by the User Interaction manager to see if a user has visited a given page on the current day, and if so, generate an appropriate UserInteraction document.

## Sessions

For the purpose of analysis, a user "session" is defined as "all pages visited during the period of a single calendar day". So, either a single day has a session for a given user, or it doesn't. The number of sessions for a given user in a given month is simply all of the days in that month in which the user visited at least one page.

:::caution Midnight crossing visits
Users who start to browse the system shortly before midnight, and then continue on past midnight, will have two sessions recorded for them instead of one. We will live with this edge case because "session detection" is a difficult problem in general and getting a more accurate count of the number of sessions is not important for our purposes. We are more concerned with trends in the number of sessions over time, and it is reasonable to expect that the number of "midnight-crossing visits" will be more or less equally distributed (and relatively infrequent.)
:::

## Behaviors

We want to classify low-level user interactions with the system into a small set of higher-level behaviors: Login, Change Outlook, Explore, Plan, Verify, Review, Level Up, Complete Plan, and Change Visibility.

Here's a table that indicates how each behavior is recognized by the system

| Behavior | New Approach |
| -------- | ---------------- |
| Login | Any page visited on a day implies a login behavior. Recorded via daily cron job, using lastVisited field of user profile.  |
| Change Outlook |  Changes to profile regarding Interests, Career Goals, Courses, or Opportunities. Recorded via daily cron job, using in-memory snapshot. |
| Explore | Visiting the corresponding explorer page. Recorded via cron job, using lastVisited field of user profile.  |
| Plan | Visiting the Degree Plan page. Recorded via daily cron job, using lastVisited field of user profile.  |
| Verify | Student submits a new verification request. Via daily cron job, using createdAt field of Verification Request collection. |
| Review | Student submits a review. Via daily cron job, using createdAt field of Review collection.  |
| LevelUp | Recorded via daily cron job, using in-memory snapshot.  |
| Complete Plan | Recorded via daily cron job, using in-memory snapshot.  |
| Change Visibility| Recorded via daily cron job, using in-memory snapshot.  |

The record of behaviors is stored in the UserInteraction collection.  Each document in the UserInteractionCollection contains four fields:
  * Username: the user email.
  * Type: an enumerated type indicating the behavior being recorded, from the above list.
  * TypeData: an array that can optionally contain additional information about the behavior.
  * Timestamp: indicates the day associated with this behavior.

## The daily cron job

Behaviors are recognized and recorded during the execution of a daily cron job.  This cron job runs shortly before midnight, and does the following:

  1. Checks the lastVisited field for each user and generates UserInteraction documents for that day if appropriate.
  2. Creates a snapshot for each user of aspects of their "state" for the current day, including their current level, degree plan, etc.
  3. When comparison of today's snapshot with yesterday's indicates a relevant change in state from the prior day, generate a UserInteraction document.

The cron job is called the "UserInteractionStateManager", and the in-memory data structure called the "UserInteractionSnapshot (UIS). The UIS data structure is built immediately upon system startup by traversing collections and building an object whose keys are usernames and whose associated values is an object. For example:

```
{ "johnson@hawaii.edu": {
    interests: list of Interest slugs in this user's profile.
    careerGoals: list of CareerGoal slugs in this user's profile.
    level: the current level for this user (1-6)
    degreePlanComplete: true if complete
  }
 "foo@hawaii.edu": { ... },
 "baz@hawaii.edu": { ... },
}
```

:::caution Design limitations of in-memory (non-persistent) snapshots
#### Data Loss

We acknowledge that using an in-memory data structure does create the possibility of data loss. Consider the following sequence of actions:

* The cron job crashes.
* A user, for example achieves a new level.
* The cron job starts up again, and initializes the snapshot with the user's new level.
* When the update occurs that night, the fact that the user achieved a new level is lost.

Data loss can only happen when the cron job crashes but the site stays up.  This seems quite unlikely, and the impact small enough in terms of data loss, that we will take that risk.

#### Spurious UserInteractions upon database dump and restore

Many UserInteractions are generated based upon checking the createdAt field of documents.  This works great and is easy to implement, but suffers from the following potential problem: if the database is dumped and then restored, a large number of spurious UserInteractions will be generated that first day because the createdAt field will reflect the day that the database is restored, not the day that the behavior actually occurred.

For the moment, we just recognize this as an analysis problem. One way to manage it is to restore the database close to midnight (so that there are minimal user interactions with the system), then disable the cron job until the next day. Other approaches could include ignoring all entries for a given day.
:::


