---
title: Manage UI state with Redux
sidebar_label: Manage UI state
---

## State

In React, temporary state is managed using simple [state management tools](https://reactjs.org/docs/state-and-lifecycle.html) that provide excellent functionality. However, there comes a point where application state can get complex enough that these tools are no longer sufficient for managing it. This is where Redux comes in. 

[Redux](https://redux.js.org/introduction/getting-started) is a state management library that attempts to make state mutations predictable by imposing [certain restrictions](https://redux.js.org/introduction/three-principles) on how and when updates can happen. This allows for a much more complex state to exist in an app because the restrictions create a workflow that provides clarity and vision to the life of the application state. 

## React State vs. Redux State

### Local vs. Global
Now, with both of these tools at our disposal, it can be unclear [when to use React's state or Redux's state](https://spin.atomicobject.com/2017/06/07/react-state-vs-redux-state/). A simple rule-of-thumb is to **use React state for things that only matter at a local level and use Redux for things that matter at a global level.** 

Things like toggles for UIs and the input for form fields are good use cases for React state. However, if a component needs to know the element a user clicked on in a completely different component, this would be a good use case for Redux state. One exception to this is if state needs to be shared between a parent and child component—in this case, passing React state through props is sufficient for this scenario. When you start passing the state more than once, though, you will want to consider switching to Redux state.

### Short-term vs. Medium-term

Another indicator when to use React or Redux for state is persistence. **Use React state for short-term data and Redux for medium-term data.** For long-term data, use a database or other hardware storage.

If you don't care about the data anymore after switching pages, then it can be considered short-term data. Scenarios here are characters in a text field, data in a form, elements currently selected, or transitory states (e.g. isWorking, isDone).

When you need to remember data as a user navigates through different pages in the app, it can be considered medium-term data. Usually, anything you want to remember throughout a session falls under this category. For example, if you have a feature that may require constant flipping between multiple pages, you would want UI states and input fields to be saved so that the user does not have to re-configure or re-type anything as they use the app. A user exploring multiple search results on a query or multiple entries in a list illustrates this scenario well, especially if each result or entry has the possibility of leading the user to a separate page.

### Complex State Mutations
Another indicator of when to use React state vs. Redux state is the complexity of state mutations. In this project, you will not have to worry about this scenario for the most part. This is because Meteor handles a lot of the most complex tasks that normally you would have to deal with yourself. Due to features like Tracker and Minimongo, most of the state you deal with will be UI-related. Should you find your state changes to be overly complex without fitting into one of the previous categories, you may want to consult with a team member or mentor that has experience in handling RadGrad2's state for a simpler solution.

## Redux in RadGrad2

So you've decided to implement a feature's state in Redux. Before moving forward, it is necessary to have a basic understanding of the following:
* JavaScript
* [Redux's Three Principles](https://redux.js.org/introduction/three-principles) and the elements of Redux described [here](https://redux.js.org/basics/basic-tutorial)
  * If you are having trouble understanding the parts of Redux, see [this simple example](https://dev.to/hemanth/explain-redux-like-im-five)

Experience using Redux is helpful but not necessary to follow along.

Implementing Redux in a feature has two main parts:
1) Defining the state and the actions that will change it
2) Connecting the components that need state access to the global store and previously defined actions

This article will focus mainly on the former but still touch lightly on the latter.

## Building State Management Elements
In RadGrad2, we organize our Redux state according to the [Re-ducks pattern](https://drive.google.com/open?id=1d9lROHs3DLr3fj-vvpl_HymuABfdSV4t). This means that we still have all the basic elements of Redux—actions, reducers, and store—but we organize them into directories according to feature. Also, due to the nature of pages in this project, we consider the terms *feature* and *page* interchangeable. In RadGrad2, this basically means **each role has its own directory of features, and each feature has a folder which houses all of the state management functionality of that feature**.

After first considering what you want your feature's state structure and actions to look like, the basic steps to implementing the state management elements are:
1) Create the feature folder
2) Implement the actions
3) Implement the state structure and reducers
4) Connect your feature folder to the global store through propagating index.ts files

We will go through each step in detail, after which you should be ready to connect your new state to your feature's components.

### Create the feature folder
Before you write any code, you will need a folder to put it in. The first thing you should be aware of is our naming conventions for the folders:
1) directory names use lower [kebab-case](https://en.toolpage.org/tool/kebabcase#ToolContainerRight), a.k.a. hyphen-case
2) feature folders in `redux/` are named the same as the corresponding page
3) feature folders are placed in folders named after the corresponding roles
   * Note: features shared across multiple roles typically go in the `shared/` folder

If the feature folder does not exist, create one in the corresponding role folder. If the role folder does not exist, create one in `redux/`. The file location should look something like this:
```
.../redux/role-name/new-feature/
```

### Implement the actions
#### Action types
In the feature folder, define and export action types as string constants in a `/types.ts` file. The naming conventions are as follows:
1) Action types are named in UPPER_[SNAKE_CASE](https://en.wikipedia.org/wiki/Snake_case)
2) The action type values are strings of the same name prefixed with `app/role/feature`. The prefix follows the folder naming convention.
   * Example: `radgrad/admin/data-model/SET_STUDENTS_SHOW_COUNT`

A typical `/types.ts` would look like the following:

```typescript
export const CHECK_INTEGRITY_WORKING = 'radgrad/admin/database/CHECK_INTEGRITY_WORKING';
export const CHECK_INTEGRITY_DONE = 'radgrad/admin/database/CHECK_INTEGRITY_DONE';
export const DUMP_DATABASE_WORKING = 'radgrad/admin/database/DUMP_DATABASE_WORKING';
export const DUMP_DATABASE_DONE = 'radgrad/admin/database/DUMP_DATABASE_DONE';

```
---
#### Tip:
You can use regex with find & replace to streamline the process of defining these constants. Write the action types that you want to define in their proper format, with a line feed after each:
```typescript
AN_ACTION_TYPE
ANOTHER_ACTION_TYPE
// Don't forget the line feed for the last type
```
In your `find` field, enter:
```regexp
(.*?)[\n]
```
Ensure that the `regex` option is checked.
in your `replace` field, enter:
```regexp
export default $1 = 'radgrad/ROLE/FEATURE/$1';\n
``` 
Be sure to replace `ROLE` and `FEATURE` with the corresponding values for your implementation.

You can preview the results and, if satisfactory, `replace all`:
```typescript
export default AN_ACTION_TYPE = 'radgrad/my-role/my-feature/AN_ACTION_TYPE';
export default ANOTHER_ACTION_TYPE = 'radgrad/my-role/my-feature/ANOTHER_ACTION_TYPE';

```

---

#### Action creators
After the action types are defined, you can import them in `/actions.ts` to define and export all your action creators. In RadGrad2, we use the type/payload structure where an action creator returns an object with the action type and some optional payload information that helps facilitate the action. A typical `/actions.ts` would look like the following:
```typescript
import * as TYPES from './types';

export const selectCourse = (courseID) => ({
  type: TYPES.SELECT_COURSE,
  payload: courseID,
});

export const selectCourseInstance = (courseInstanceID) => ({
  type: TYPES.SELECT_COURSE_INSTANCE,
  payload: courseInstanceID,
});

export const selectOpportunity = (opportunityID) => ({
  type: TYPES.SELECT_OPPORTUNITY,
  payload: opportunityID,
});

export const selectOpportunityInstance = (opportunityInstanceID) => ({
  type: TYPES.SELECT_OPPORTUNITY_INSTANCE,
  payload: opportunityInstanceID,
});

export const selectPlanTab = () => ({
  type: TYPES.SELECT_PLAN,
  selectedTab: TYPES.SELECT_PLAN,
});

export const selectInspectorTab = () => ({
  type: TYPES.SELECT_INSPECTOR,
  selectedTab: TYPES.SELECT_INSPECTOR,
});

```

### Implement the state structure and reducers
Here, we define the initial state and reducers for our feature, and `export default` a single function called `reducer`. Due to the way `combineReducers()` works, we only need to worry about the state structure of the feature we are working on. In that way, the initial state definition also serves to model the local state structure. This makes use of a **typescript interface** optional—it would serve mostly as a code-completion helper.

If you need a refresher on the elements of a reducer, see [here](https://redux.js.org/basics/reducers).

A typical `/reducers.ts` would look like the following:
```typescript
import * as TYPES from './types';

const initialState = {
  checkIntegrity: false,
  dumpDatabase: false,
};

function reducer(state: any = initialState, action) {
  switch (action.type) {
    case TYPES.CHECK_INTEGRITY_WORKING:
      return {
        ...state,
        checkIntegrity: true,
      };
    case TYPES.CHECK_INTEGRITY_DONE:
      return {
        ...state,
        checkIntegrity: false,
      };
    case TYPES.DUMP_DATABASE_WORKING:
      return {
        ...state,
        dumpDatabase: true,
      };
    case TYPES.DUMP_DATABASE_DONE:
      return {
        ...state,
        dumpDatabase: false,
      };
    default:
      return state;
  }
}

export default reducer;

```

### Connecting everything through index.ts
Here is where the specifics come together. The naming conventions make things easy to follow and reduce mental overhead. In `/index.ts`, you will import the reducer and export it as default. You will also import all your actions as `featureActions` and export them. There may be times that you need to export other things from your feature—this is where you do that. The purpose of this is to make any imports concerning a feature happen at the top level (i.e. `role/feature`).

The typical `/index.ts` will look like this:
```typescript
import reducer from './reducers';
import * as cloudinaryActions from './actions';

export { cloudinaryActions };

export default reducer;

```

If you created a `role/` folder for your feature because it didn't previously exist, you will need to place an `/index.ts` in there as well. This will import all the features, call `combineReducers()` on them, and then `export default` that reducer with the corresponding role as its name. Here is an example:
```typescript
import { combineReducers } from 'redux';
import dataModel from './data-model';
import database from './database';
import analytics from './analytics';

const admin = combineReducers({
  dataModel,
  database,
  analytics,
});

export default admin;

```
If the file already exists, then simply add your new feature to the imports and the object in `combineReducers()`.

Finally, if you created a new `/index.ts` because the role directory did not previously exist, you will need to import that in the `redux/store.ts` file:
```typescript
import { createStore, combineReducers } from 'redux';
import admin from './admin';
import advisor from './advisor';
import shared from './shared';
import student from './student';
import newRole from './newRole';

/* global window */

const rootReducer = combineReducers({
  admin,
  advisor,
  shared,
  student,
  newRole,
});

...
```

## Using Redux State in Components
After all Redux state management elements have been defined, you will be able to access them in components using `connect()`. This will allow you to read or change the state through component props. The two main things we will cover are **reading state** and **dispatching actions** (i.e. changing state).

### Reading State
To read Redux state in a component, you will need to do it through props. Since we are using typescript, you will first need to add the prop to your component interface:
```typescript
interface IMyComponentProps {
  aPropertyInState: string;
}
```
Then, you call `mapStateToProps()` to map specified parts of the global store to your props:
```typescript
const mapStateToProps = (state) => ({
  aPropertyInState: state.role.feature.somePropertyDefinedInRedux,
});
```
To complete the connection, wrap your component with `connect()` and pass your `mapStateToProps` object as the first parameter:
```typescript
import { connect } from 'react-redux';

...

export default connect(mapStateToProps)(MyComponent);

```
At this point, your component has access to the global store and you can use the props in your component like any other:
```typescript
const getStateProperty = () => this.props.aPropertyInState;
```

### Dispatching Actions
To change the global state in any way, you will need to `dispatch()` an action that we previously defined in Redux. While there are multiple ways to do this, in RadGrad2 it is recommended to use `mapDispatchToProps()` to allow you to access dispatches through props and abstract `dispatch()` calls out of internal component code.

As in [Reading State](#reading-state), you need to first add the prop to your component interface:
```typescript
interface IMyComponentProps {
  anActionToDispatch: (string) => any;
}
```
Then, you call `mapDispatchToProps()` to dispatch and map imported actions to your props:
```typescript
import { featureActions } from '../../../redux/some-role/some-feature';

const mapDispatchToProps = (dispatch) => ({
    anActionToDispatch: (somePayload: string) => dispatch(featureActions.someActionDefinedInRedux(somePayload)),
});
```
To complete the connection, wrap your component with `connect()` and pass your `mapDispatchToProps` object as the second parameter:
```typescript
import { connect } from 'react-redux';

...

export default connect(null, mapDispatchToProps)(MyComponent);

```
At this point, your component has access to the dispatcher and actions. You can use the props in your component like any other:
```typescript
const setName = (newName: string) => this.props.anActionToDispatch(newName);
```

### `connect()`, Advanced Topics, and Further Reading
This was a very simple explanation of how to use `connect()`, but your specific situation could be far more complex. It is recommended to take a look at the [documentation](https://react-redux.js.org/api/connect) to see the scope of `connect()` and its elements. There are more in-depth guides there if you would like to really get to know idiomatic Redux on your software-development journey. For a deeper understanding of Redux in general, there are [more resources](https://redux.js.org/introduction/learning-resources) on many other topics as well. Whatever you do, though, keep *coding*. You don't have to write perfect code *right now*—the main thing is whatever you make just *works*!

