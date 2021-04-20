---
title: Meteor Methods Best Practices
sidebar_label: Meteor Methods
---

## Problem

Getting Meteor Methods to work correctly is not always straightforward.

## Solution

Here are some best practices to help you implement new Meteor Methods quickly and correctly.

### Ensure your method is defined in the server

If you create a new file to hold your Meteor Method implementation, you need to ensure that this file is imported in order to enable the Meteor server to find it.

Our best practice is to import Meteor Method files in imports/startup/server/index.ts.

### Make your code run on the server-side only

Meteor Methods are always invoked on both the client and server side. In many/most cases, running RadGrad Methods on the client-side result in extraneous errors.

The best practice is to enclose the body of your Method Method in a conditional that checks to see that the code is running on the server side:

```
if (Meteor.isServer) {
   // Your code goes here
}
```

If you are getting strange errors related to collections not finding documents, it might be because of your Method Code running on the client side.

