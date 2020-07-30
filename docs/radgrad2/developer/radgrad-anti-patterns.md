---
title: RadGrad Anti-Patterns
sidebar_label: RadGrad Anti-patterns
---

## Anti-Patterns in RadGrad1

### Too many or unused helpers
RadGrad1 uses Blaze as the rendering engine. In many of our Blaze templates we have unused helper methods. Meteor runs all the helper methods even though they are not used in the HTML template.

### Use of Strings to identify things

* Publication and Subscription
* User Interactions


## Anti-Patterns in RadGrad2

### Circular imports
Currently, we have many circular imports in RadGrad2.

### Use of Strings to identify things

* Publication and Subscription
* User Interactions
