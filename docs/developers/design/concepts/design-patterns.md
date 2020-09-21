---
title: Design Patterns
---
Here are some of the best practices we are using in RadGrad.

## Use exported constants instead of Strings

An example of this is in RadGrad2's redux directory. Each type is an exported constant.
```ts
// redux/student/degree-planner/types.ts
export const SELECT_COURSE = 'radgrad/student/degree-planner/SELECT_COURSE';
export const SELECT_COURSE_INSTANCE = 'radgrad/student/degree-planner/SELECT_COURSE_INSTANCE';

// redux/student/degree-planner/actions.ts
import * as TYPES from './types';

export const selectCourse = (courseID) => ({
  type: TYPES.SELECT_COURSE,
  payload: courseID,
});

export const selectCourseInstance = (courseInstanceID) => ({
  type: TYPES.SELECT_COURSE_INSTANCE,
  payload: courseInstanceID,
});

// redux/student/degree-planner/reducers.ts
import { combineReducers } from 'redux';
import * as TYPES from './types';

const initialState = {
  depInspector: {
    selectedCourseID: '',
    selectedCourseInstanceID: '',
    selectedOpportunityID: '',
    selectedOpportunityInstanceID: '',
  },
  depTab: {
    selectedTab: TYPES.SELECT_PLAN,
  },
};

function inspectorReducer(state: any = initialState, action) {
  // console.log('inspectorReducer', action, state);
  const depInspector = state.depInspector;
  switch (action.type) {
    case TYPES.SELECT_COURSE:
      return {
        ...state,
        depInspector: {
          ...depInspector,
          selectedCourseID: action.payload,
          selectedCourseInstanceID: '',
          selectedOpportunityID: '',
          selectedOpportunityInstanceID: '',
        },
      };
    case TYPES.SELECT_COURSE_INSTANCE:
      // console.log('select ci ', action);
      return {
        ...state,
        depInspector: {
          ...depInspector,
          selectedCourseID: '',
          selectedCourseInstanceID: action.payload,
          selectedOpportunityID: '',
          selectedOpportunityInstanceID: '',
        },
      };
   }
}
```
We are using the exported types instead of strings to ensure there are no typo errors.

## Publications and Subscriptions
The ```BaseCollection``` defines default ```publish``` and ```subscribe``` methods.
```ts
  /**
   * Default publication method for entities.
   * It publishes the entire collection.
   */
  public publish() {
    if (Meteor.isServer) {
      Meteor.publish(this.collectionName, () => this.collection.find());
    }
  }

  /**
   * Default subscription method for entities.
   * It subscribes to the entire collection.
   */
  public subscribe(userID = undefined) {
    if (Meteor.isClient) {
      return Meteor.subscribe(this.collectionName, userID);
    }
    return null;
  }
```
We publish and subscribe to the entire collection. In the ```subscribe``` method we return the handle to the subscription, so the client can wait till the subscription is ready. We use the optional ```userID``` parameter to support filtered collections such as the ```CourseInstanceCollection```: 
```ts
  /**
   * Depending on the logged in user publish only their CourseInstances. If
   * the user is in the Role.ADMIN then publish all CourseInstances.
   */
  public publish() {
    if (Meteor.isServer) {
      const instance = this;
      Meteor.publish(this.collectionName, function filterStudentID(studentID) {
        if (_.isNil(studentID)) {
          return this.ready();
        }
        const profile = Users.getProfile(studentID);
        if (profile.role === ROLE.ADMIN || Meteor.isAppTest) {
          return instance.collection.find();
        }
        return instance.collection.find({ studentID, retired: { $not: { $eq: true } } });
      });
      Meteor.publish(this.publicationNames.scoreboard, function publishCourseScoreboard() {
        ReactiveAggregate(this, instance.collection, [
          {
            $addFields: { courseTerm: { $concat: ['$courseID', ' ', '$termID'] } },
          },
          {
            $group: {
              _id: '$courseTerm',
              count: { $sum: 1 },
            },
          },
          { $project: { count: 1, termID: 1, courseID: 1 } },
        ], { clientCollection: CourseScoreboardName });
      });
    }
  }
```
When the client subscribes to the CourseInstanceCollection they can supply the userID to only get the Course Instances for that user.
```ts
handles.push(instanceSubs.subscribe(CourseInstances.getCollectionName(), userID));
```
If a client wants to subscribe to the Course Scoreboard, they use
```ts
handles.push(globalSubs.subscribe(CourseInstances.publicationNames.scoreboard));
```
