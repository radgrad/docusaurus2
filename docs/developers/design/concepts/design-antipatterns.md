---
title: Design Anti-Patterns
---

## Circular imports

Currently, we have many circular imports in RadGrad2.

## Use of Strings to identify things

* User Interactions

## Hiding the properties in React Components

There are a lot of React Components in RadGrad2. We have code that looks like:

```typescript jsx
interface ISecondMenuProps {
  menuItems: IMenuItem[];
  numItems: SemanticWIDTHS;
}

const SecondMenu = (props: ISecondMenuProps) => { ... }

```

This hides the values in props and doesn't have the correct return type for the SecondMenu component. We should rewrite the code to look like:

```typescript jsx
interface ISecondMenuProps {
  menuItems: IMenuItem[];
  numItems: SemanticWIDTHS;
}

const SecondMenu: React.FC<ISecondMenuProps> = ({ menuItems, numItems }) => { ... }
```
Intellij IDEA can infer the types of menuItems and numItems. It makes the code look cleaner and less confusing.
