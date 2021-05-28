---
title: React Checklist
sidebar_label: React
---

### RE-01: Components should be simple.

Components should do one thing.  If they are doing many things, then consider breaking them up into subcomponents.

### RE-03: No state updates in loops.

Are there state updates in loops?

### RE-04: Do not rename default exports.

When importing a component that is exported "by default", do not rename the component.  The code is more understandable if every component is always referenced by its original name.

In the case of React components that are wrapped with withTracker(), use the following approach to default export:

```
const Foo: ReactFC = () => {
  :
}

export default withTracker(() => {
  :
})(Foo);
```

In other words, do not declare a separate variable to hold the component returned by withTracker. Instead, just export the React component returned by the call to withTracker() directly.

### RE-05: Destructure props in component parameter.

Consider [destructuring props](https://medium.com/@lcriswell/destructuring-props-in-RE-b1c295005ce0). This makes the code clearer by identifying exactly which properties are of interest in the function signature.

### RE-06: Define typed constants in withTracker().

When using withTracker, define a (typed) const to compute each property, then put the properties in the return using object shorthand notation. For example:

```js
const StudentHomeIcePageContainer = withTracker(() => {
  const { username } = useParams();
  const studentID = Users.getProfile(username).userID; // TODO type this.
  const earnedICE: Ice = StudentProfiles.getEarnedICE(username);
  const projectedICE: Ice = StudentProfiles.getProjectedICE(username);
  const helpMessages = HelpMessages.findNonRetired({}); // TODO type this.
  const favoriteInterests: IFavoriteInterest[] = FavoriteInterests.findNonRetired({ userID: studentID });
  const courseInstances: ICourseInstance[] = CourseInstances.findNonRetired({ studentID });
  const opportunityInstances: IOpportunityInstance[] = OpportunityInstances.findNonRetired({ studentID });
  return {
    helpMessages,
    earnedICE,
    projectedICE,
    favoriteInterests,
    courseInstances,
    opportunityInstances,
  };
})(StudentIcePage);
```

### RE-07: Use React.CSSProperties to type style objects.

When passing an object as a style property, type it as "React.CSSProperties". That will detect misspellings of properties or unknown properties. For example:

```js
const whiteBG: React.CSSProperties = { backgroundColor: '#ffffff', width: '100%' };
```

### RE-08: Don't retrieve collection data inside render()

Some of our components get data from collections in the render method. This is not reactive. For example:

```typescript jsx
const AdvisorPageMenuWidget: React.FC = () => {
  const match = useRouteMatch();
  const { username } = useParams();
  const divStyle = { marginBottom: 30 };
  const profile: IAdvisorOrFacultyProfile = AdvisorProfiles.getProfile(username);
  let numMod = 0;
  numMod += Reviews.findNonRetired({ moderated: false }).length;
  let moderationLabel = 'Moderation';
  if (numMod > 0) {
    moderationLabel = `${moderationLabel} (${numMod})`;
  }
  let numRequests = 0;
  numRequests += VerificationRequests.findNonRetired({ status: 'Open' }).length;
```

```numMod``` and ```numRequests``` are not reactive.

### RE-09: Imported component names and file names should match

Many React components are exported "by default", which gives the importing client the ability to rename them in the file that they are used in.

The convention in RadGrad is to import a component with a name that matches the file name used to define the component. Let's look at a simple example:

```ts
// File: AdminAnalyticsNewsletterWidget.ts

const AdminAnalyticsNewsletterWidget: React.FC<IAdminAnalyticsNewsletterWidgetProps> = () => {
  :
  :
}

const AdminAnalyticsNewsletterWidgetContainer = connect(mapStateToProps, mapDispatchToProps)(AdminAnalyticsNewsletterWidget);
export default AdminAnalyticsNewsletterWidgetContainer;
```

In this case, we have a component (AdminAnalyticsNewsletterWidget), defined in a file called "AdminAnalyticsNewsletterWidget.ts", but the actual exported object is a wrapped version of the widget called AdminAnalyticsNewsletterWidgetContainer.

Our convention is to import this component in the following way:

```ts
import AdminAnalyticsNewsletterWidget from '../../components/admin/analytics/newsletter/AdminAnalyticsNewsletterWidget';
```

In other words, we name the imported component using the name associated with the file, and not the "containerized" name.


### RE-10: Avoid "Widget" and "Card" in component names

Many React components are named with "Widget". In most (all?) cases, adding "Widget" just increases the length of the name without adding value.

Check the 'ui/components' subdirectories for many components that should be renamed.

In addition, many component names contain the word "Card". Only use "Card" in a class name when it literally returns a single Semantic UI Card object.