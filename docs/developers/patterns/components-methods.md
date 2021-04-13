---
title: Implementing Dynamic React Components using Meteor Methods
sidebar_label: React Components & Meteor Methods
---

## Problem

In most cases, React Components display database data using the Meteor [Publications and Subscriptions](https://guide.meteor.com/data-loading.html). The basic idea is that the component (or its parent page) subscribes to one or more RadGrad collections, which results in a local MiniMongo database being populated with data prior to the rendering of the component. The component accesses database data from MiniMongo.

This works most, but not all of the time.  For example, the "Terms and Conditions" page in RadGrad must display data that is located in a file on the server side, not in the database.  For another example, using the Pub/Sub model to implement the Profile Card mechanism could potentially result in thousands of documents being sent from the server to the client MiniMongo database, even though only a few (if any) of those documents will be used by a client.  In this latter case, the Pub/Sub model creates a scalability bottleneck.

## Solution

Meteor provides an elegant alternative to the Pub/Sub model of data transfer called [Meteor Methods](https://guide.meteor.com/methods.html). Meteor methods are essentially a remote procedure call system, which enable a client to request data from the server without the need to use MiniMongo.

The design pattern discussed here involves the integration of Meteor Methods with React Functional Components. Since a Meteor Method is an asynchronous function call, we need a way to combine together the React rendering process with the asynchronous nature of Meteor Method calls. This page explains how to do it, using the Terms and Conditions page as an example:

First, let's see an example of the Terms and Conditions page:

<img src="/img/patterns/terms-and-conditions-page.png" />

The text of this page is located in a markdown file in the `private/terms-and-conditions/` directory. No files in the `private/` directory can be directly accessed through the web; they can only be accessed by the server.

Here is the implementation of that page:

```javascript
const StudentTermsAndConditionsPage: React.FC = () => {
  const [terms, setTerms] = useState('');
  const fetchTerms = () => {
    // console.log('check for infinite loop');
    getTermsAndConditions.callPromise({})
      .then(result => setTerms(result))
      .catch(error => setTerms(`Server Error: ${error}`));
  };
  useEffect(() => { fetchTerms(); }, [terms]);

  return (
    <PageLayout id="student-terms-and-conditions-page" headerPaneTitle={headerPaneTitle} headerPaneBody={headerPaneBody}>
      <ReactMarkdownWithHtml linkTarget="_blank" allowDangerousHtml source={terms}/>
    </PageLayout>
  );
};
```

At a high level, this code does the following:

1. The page is retrieved and displayed in the client.
2. An asynchronous call is made to the server. The server loads the terms and conditions (T&C) text from a file.
3. The resulting T&C text (or an error message) is returned to the client and the page is re-rendered.

Implementing this requires the use of Meteor Methods along with the React useState() and useEffect() functions.

First, there is a Meteor Method called getTermsAndConditions. NOTE: Meteor methods run on both the client and server side.
When this method runs on the client side, we have it immediately returns the empty string. When this method runs on the server side, we have it try to load the T&C text and return it.

Here's how getTermsAndConditions implements these behaviors:

```javascript
export const getTermsAndConditions = new ValidatedMethod({
  name: 'TermsAndConditions.getTermsAndConditions',
  mixins: [CallPromiseMixin],
  validate: null,
  run() {
    let terms = '';
    if (Meteor.isServer) {
      const fileName = Meteor.settings.termsAndConditionsFileName;
      if (fileName) {
        terms = Assets.getText(fileName);
      } else {
        terms = 'Terms unknown';
      }
    }
    return terms;
  },
});
```

Next, we use React's useState and useEffect hooks to invoke the Meteor Method and ensure that the page is re-rendered exactly once when the Method returns.

We use useState to create a state variable called 'terms', with initial value of the empty string. Note that whenever
the 'terms' variable changes value, the page will be re-rendered.

The useEffect construct accepts a function that is (by default) run each time the page is rendered, along with the specification of a "dependent" variable (terms).  Providing a dependent variable to useEffect() means that the function will only be run when the dependent variable has changed its value since the last invocation of useEffect().  This avoids the creation of an infinite loop. For more details, see [How to fix an infinite loop inside useEffect()](https://medium.com/@andrewmyint/infinite-loop-inside-useeffect-react-hooks-6748de62871).

Eventually the promise will return, invoking either the then() or catch() chained function calls. Hopefully it's always the then() chain that gets executed, which sets the 'terms' variable to the contents of the file on the server side. Since the value of terms has changed, the page will be rendered again.

## Fetching structured data and using a gate variable

The Terms and Conditions page illustrates how to retrieve a simple string from the server along with a dependent variable to control when useEffect() is invoked. In most cases, however, your page will want to retrieve structured data in the form of an object or array.  Implementing this is only slightly more complicated, and is illustrated in the implementation of User Profiles.

Here is an implementation of the UserProfileCard component, with some irrelevant code omitted for clarity:

```javascript
const UserProfileCard: React.FC<UserProfileCardProps> = ({ username, fluid = true }) => {
  :
   const [data, setData] = useState<PublicProfileData>({});
   const [fetched, setFetched] = useState(false);

   useEffect(() => {
     // console.log('check for infinite loop');
     const fetchData = () => {
       getPublicProfileData.callPromise({ username })
         .then(result => setData(result))
         .catch(error => { console.error(error); setData({});});
     };
     // Only fetch data if it hasn't been fetched before.
     if (!fetched) {
       fetchData();
       setFetched(true);
     }
   }, [fetched, username]);

  return (
    <ProfileCard ... />
  );
};
```

The key changes are:
  * We implement a Meteor Method called getPublicProfileData which accesses the server-side database to retrieve data of interest.
  * The data state variable holds the object returned from the Meteor Method call. Note the use of a Typescript generic to provide the type of the object.
  * We elect to not display a "retrieval" message in the Profile Card.
  * Errors are printed to the console.
  * We use a second state variable called "fetched" to determine whether to invoke fetchData along with dependent variables. Sometimes getting the dependent variable specification to be correct is tricky, and using this "gate variable" provides an additional level of control.

## Checking for infinite loops

One issue with useEffect() is that it can often lead to infinite loops in your code. For more explanation, please see see [How to fix an infinite loop inside useEffect()](https://medium.com/@andrewmyint/infinite-loop-inside-useeffect-react-hooks-6748de62871).  In the examples above, you can see a commented out line `// console.log('check for infinite loop');`.  This is useful during development to assess whether the code results in an infinite loop, which might not be immediately noticeable during display of the page.

When this line of code is uncommented, and there is an infinite loop, then the line will be printed repeatedly and the console will show that. Here is a snapshot during execution when an infinite loop is present:

<img src="/img/patterns/useEffect-infinite-loop.png" />

As you can see, that line has been printed 900 times so far!
