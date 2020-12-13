---
title: React Checklist
sidebar_label: React
---

Best practices for React.

**REACT-01:** Are the components small?

**REACT-02:** Is the render method small? Minimize logic in the render method.

**REACT-03:** Are there state updates in loops?

**REACT-04:** When importing a component that is exported "by default", do not rename the component.  The code is more understandable if every component is always referenced by its original name.

**REACT-05:** Consider [destructuring props](https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0). This makes the code clearer by identifying exactly which properties are of interest in the function signature.

