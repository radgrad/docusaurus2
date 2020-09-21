---
title: Pub-Sub Caching
sidebar_label: Pub-Sub Caching
---

The client and server in traditional web applications communicate using a "request-response" design pattern. RadGrad is implemented using Meteor, which uses a different communication design pattern called "publish-subscribe" (often abbreviated to "pub-sub").  The basic difference between the two patterns is that with request-response, the client must always make an explicit request to "pull" data from the server, while publish-subscribe enables the server to "push" data to the client. For details on the way Meteor implements pub-sub, please see the [Meteor Guide chapter on Publications and data loading](https://guide.meteor.com/data-loading.html).

The point of this section is to note that the default approach to pub-sub in Meteor is on a page-by-page loading basis. In other words, each time a client visits a page, as part of the page loading process, the client creates one or more subscriptions representing all of the data needed for that page, which the server then sends to the client.  Each time the client leaves a page, all current subscriptions are terminated and the associated data is discarded from the client.

The advantage of the default approach is simplicity and minimization of the data held by the client at any given time. The disadvantage is that if two pages involve the exact same set of subscriptions, and the client navigates from one of these pages to the other, then the default approach results in data being sent to the client for first page, then discarded when the client leaves that page, only to have the server resend the exact same data to the client when the second page is loaded.

Upon deploying RadGrad for the first time, we discovered that page were loading slowly and that much of this latency was due to the overhead of subscribing and unsubscribing each time the client visited a new page.  To solve this problem, RadGrad leverages the [MeteorHacks SubsManager](https://github.com/kadirahq/subs-manager) package, which provides the ability to cache subscription data on the client side. 

Our implementation of subscription caching is accomplished by three global templates:

  * with-global-subscriptions ([html](https://github.com/radgrad/radgrad/blob/master/app/imports/ui/layouts/shared/with-global-subscriptions.html), [js](https://github.com/radgrad/radgrad/blob/master/app/imports/ui/layouts/shared/with-global-subscriptions.js)) creates cached subscriptions to approximately 20 RadGrad collections. These are collections that are frequently used by most users on most pages, and so it makes sense to just subscribe to them as soon as any user logs in and cache those subscriptions across all pages. 
  
  * with-instance-subscriptions ([html](https://github.com/radgrad/radgrad/blob/master/app/imports/ui/layouts/shared/with-instance-subscriptions.html), [js](https://github.com/radgrad/radgrad/blob/master/app/imports/ui/layouts/shared/with-instance-subscriptions.js)) creates cached subscriptions to data specific to a given user which is used across multiple pages, such as their course or opportunity instances.  
  
  * with-advisor-subscriptions ([html](https://github.com/radgrad/radgrad/blob/master/app/imports/ui/layouts/shared/with-advisor-subscriptions.html), [js](https://github.com/radgrad/radgrad/blob/master/app/imports/ui/layouts/shared/with-advisor-subscriptions.js)) creates cached subscriptions for data used only by the advisor (i.e. plan choices).

### Update Summer 2019

To improve performance for the Students, Faculty, Mentors, and Advisors, we are going to change the `with-instance-subscriptions`. We want to only get the instances for the user as defined by the route. The following is an example of doing it the right way.

    instanceSubs.subscribe(AcademicYearInstances.getPublicationName(), getUserIdFromRoute());
    instanceSubs.subscribe(CourseInstances.getPublicationName(), getUserIdFromRoute());
    instanceSubs.subscribe(OpportunityInstances.getPublicationName(), getUserIdFromRoute());

We pass in the userID from the route. This allows the student to subscribe to only their instances, while the advisor will only get the instances for the pages they visit. Remember advisors can view student pages.
