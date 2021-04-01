---
title: Implementing Dynamic React Components using Meteor Methods
sidebar_label: React Components & Meteor Methods
---

## Problem

In most cases, React Components display database data using the Meteor [Publications and Subscriptions](https://guide.meteor.com/data-loading.html). The basic idea is that the component (or its parent page) subscribes to one or more RadGrad collections, which results in a local MiniMongo database being populated with data prior to the rendering of the component. The component accesses database data from MiniMongo.

This works most, but not all of the time.  For example, the "Terms and Conditions" page in RadGrad must display data that is located in a file on the server side, not in the database.  For another example, using the Pub/Sub model to implement the Profile Card mechanism could potentially result in thousands of documents being sent from the server to the client MiniMongo database, even though only a few (if any) of those documents will be used by a client.  In this latter case, the Pub/Sub model creates a scalability bottleneck.

## Solution

Meteor provides an elegant alternative to the Pub/Sub model of data transfer called [Meteor Methods](https://guide.meteor.com/methods.html). Meteor methods are essentially a remote procedure call system, which enable a client to request data from the server without the need to use MiniMongo.

The design problem is how to integrate Meteor Methods with React Functional Components. Since a Meteor Method is an asynchronous function call, we need a way to combine together the React rendering process with the asynchronous nature of Meteor Method calls. This page explains a simple and effective way to do it using the Terms and Conditions page as an example.

First, let's see an example of the Terms and Conditions page:

<img src="/img/patterns/terms-and-conditions-page.png" />

The text of this page is located in a markdown file in the `private/terms-and-conditions/` directory. No files in the `private/` directory can be directly accessed through the web; they can only be accessed by the server.

Here is the implementation of that page:

```javascript
const StudentTermsAndConditionsPage: React.FC = () => {
  const awaitingTerms = 'Waiting to receive terms and conditions from server...';
  const [terms, setTerms] = useState('');
  useEffect(() => {
    function fetchTerms() {
      getTermsAndConditions.callPromise({})
        .then(result => setTerms(result))
        .catch(error => setTerms(`Server Error: ${error}`));
    }
    // Only fetch terms if they haven't been fetched before.
    terms || fetchTerms();
  });

  return (
    <PageLayout id="student-terms-and-conditions-page" headerPaneTitle={headerPaneTitle} headerPaneBody={headerPaneBody}>
      <ReactMarkdownWithHtml linkTarget="_blank" allowDangerousHtml source={terms || awaitingTerms}/>
    </PageLayout>
  );
};

export default StudentTermsAndConditionsPage;
```

At a high level, this code does the following:

1. The page is retrieved and displayed in the client.
2. An asynchronous call is made to the server. The server loads the terms and conditions (T&C) text from a file.
3. The resulting T&C text (or an error message) is returned to the client and the page is re-rendered.

Implementing this requires the use of Meteor Methods along with the React useState() and useEffect() functions.

First, there is a Meteor Method called getTermsAndConditions. NOTE: Meteor methods run on both the client and server side.
When this method runs on the client side, we have it immediately returns the empty string. (This particular value is important.)
When this method runs on the server side, we have it try to load the T&C text and return it.

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

The useEffect construct accepts a function that is run each time the page is rendered.  This function checks the 'terms' variable, and returns immediately if the 'terms' variable is not the empty string. In the case that the terms variable is the empty string, then it invokes fetchTerms(), which invokes our Meteor Method. This Meteor Method will run immediately on the client side, but in this case it sets the 'terms' variable to the empty string, so that doesn't change the state and so no rendering is triggered.

Eventually, though, the promise will return, invoking either the then() or catch() chained function calls. Hopefully it's always the then() chain that gets executed, which sets the 'terms' variable to the contents of the file on the server side. Now the 'terms' variable is not the empty string, so when useEffect is called again after the page re-renders, it doesn't do call fetchTerms again.

The final part of the design is to render the markdown section of the page with either the 'terms' variable value (if it's not the empty string), or the value of the awaitingTerms variable.  We do this so that if it takes a while to get the result back from the server, the page will display "Waiting to receive terms and conditions...." while waiting.

## Fetching structured data

The Terms and Conditions page illustrates how to retrieve a simple string from the server. In most cases, however, your page will want to retrieve structured data in the form of an object or array.  Implementing this is only slightly more complicated, and is illustrated in the implementation of User Profiles.

Here is an implementation of the UserProfileCard component, with some irrelevant code omitted for clarity:

```javascript
const UserProfileCard: React.FC<UserProfileCardProps> = ({ username, fluid = true }) => {
  :
  const [data, setData] = useState<PublicProfileData>({});
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    function fetchData() {
      getPublicProfileData.callPromise({ username })
        .then(result => setData(result))
        .catch(error => { console.error(error); setData({});});
    }
    // Only fetch data if it hasn't been fetched before.
    if (!fetched) {
      fetchData();
      setFetched(true);
    }
  });
  return (
    <ProfileCard ... />
  );
};
```

The key changes are:
  * We implement a Meteor Method called getPublicProfileData which accesses the server-side database to retrieve data of interest.
  * The first occurrence of useState() holds the object returned from the Meteor Method call. Note the use of a Typescript generic to provide the type of the object.
  * The second occurrence of useState() provides a variable that enables us to call fetchData() exactly once, even though useEffect() will be called more than once.
  * We elect to not display a "retrieval" message in the Profile Card.
  * Errors are printed to the console.
