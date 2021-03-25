---
title: Entity Labels
---

## Problem

We need a consistent way to visually represent the five principle RadGrad entities: Career Goals, Interests, Courses, Opportunities, and Users.

We also want to make it easy for designers to incorporate these entities into page designs, and to allow us to evolve this representation and have the updates reflected across the site.

## Solution: CareerGoalLabel, InterestLabel, CourseLabel, OpportunityLabel

To represent these four entities, we have created a set of four components called CareerGoalLabel, InterestLabel, CourseLabel, and OpportunityLabel. Invoking them renders a label containing the name of the entity with an appropriate icon. Clicking them takes the user to the corresponding details page.  If a userID is provided, then the default color (grey) is replaced by green if the entity is in the user's profile.

Here are some examples of their invocation:

```javascript
import CareerGoalLabel from '../../components/shared/label/CareerGoalLabel';
import InterestLabel from '../../components/shared/label/InterestLabel';
import CourseLabel from '../../components/shared/label/CourseLabel';
import OpportunityLabel from '../../components/shared/label/OpportunityLabel';
  :
  :
<CareerGoalLabel slug='software-developer' userID={profile.userID}/>
<InterestLabel slug='algorithms' userID={profile.userID}/>
<CourseLabel slug='ics_101' userID={profile.userID}/>
<OpportunityLabel slug='hawaii-hacker-hours' userID={profile.userID}/>

<OpportunityLabel slug='acm-manoa'/>

<CareerGoalLabel slug='robotics-engineer' userID={profile.userID} size='small' />

<CareerGoalLabel slug='robotics-engineer' userID={profile.userID} style={{width: '50%'}} />
```

And here is what they look like:

<img src="/img/patterns/entity-label-examples.png" />

Some key design properties of these components:

  * The only required parameter is the slug for the entity.
  * All labels are also links to the corresponding details page.
  * If you provide the optional userID, then the label will be colored green if it's in the user's profile, grey if not.
  * The optional size parameter can be used to adjust the size of the label. Use the Semantic UI size strings ("tiny", "small", etc.)
  * Use the optional style parameter to adjust the width. For example, if you have a grid with columns, you can use `width: '100%'` to make the label stretch the width of the column.

## Solution: UserLabel

(Documentation on labels for users will be forthcoming once their implementation is complete.)

