---
title: Sticky State
---

## Problem

We want certain state variables to be available across components and to not lose their value when the user navigates back and forth between pages in the application.

Currently, we implement this behavior using redux.  Using redux is pretty complicated.

## Solution

We now have an abstraction called "Sticky State".  It is used in the same manner as useState(), which declares a state variable whose value is not "sticky".

For example, to create a non-sticky state variable, you use the useState() hook:

```
  :
const [checkState, setCheckState] = useState(true);
const handleChange = (e, { checked }) => setCheckState(checked);
const checkStateValue = checkState ? 'Checked' : 'Not Checked';
  :
```

To create a "sticky" state variable, you just use useStickyState():

```
  :
const [checkState, setCheckState] = useStickyState('SandboxStickyState', true);
const handleChange = (e, { checked }) => setCheckState(checked);
const checkStateValue = checkState ? 'Checked' : 'Not Checked';
  :
```

Unlike useState(), useStickyState() requires a string ID to be provided in addition to the initial value. This is cool, because it allows you to access the same state variable in any component in the application just by using the same invocation of useStickyState().

## Example

An interactive example of the use of useStickyState() is available in the stickystate sandbox page:

<img src="/img/patterns/sticky-state.png" />

Source code for this sandbox example is available [in the sandbox/ directory](https://github.com/radgrad/radgrad2/tree/master/app/imports/ui/pages/sandbox).