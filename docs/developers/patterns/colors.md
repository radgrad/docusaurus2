---
title: Color themes and definitions
sidebar_label: Colors
---

## Problem

We want it to be easy to use colors correctly in RadGrad pages. This means it should be easy to:

  * Specify a color for a page (you shouldn't have to look up a hex string value).
  * Use a color consistently ("grey" should be the same throughout the system).
  * Change the "theme" (i.e. change the definition of "grey", and have that change reflected throughout the site).

## Solution

Well, there are actually two solutions.

### Semantic UI color definitions

We build a custom Semantic UI CSS file using our [Fomantic UI repository](https://github.com/radgrad/fomantic-ui).

In the [semantic/src/site/globals/site.variables](https://github.com/radgrad/fomantic-ui/blob/main/semantic/src/site/globals/site.variables) file, we define a palette in the following way:

```
/* Color Palette */
@radgrad-blue              : #53A78E;
@radgrad-green             : #6FBE44;
@radgrad-green-darken      : #38840F;
@radgrad-green-2           : #86CAB5;
@radgrad-green-2-darken    : #53A78E;
@radgrad-green-2-darken-1  : #1B7F61;
@radgrad-grey              : #696969;
@radgrad-grey-2            : #F7F7F7;
@radgrad-olive             : #38840F;
@radgrad-orange            : #DA7F4E;
@radgrad-pink              : #DDA1C3;
@radgrad-purple            : #952263;
@radgrad-red               : #CA4864;
@radgrad-white             : #FFFFFF;
@radgrad-yellow            : #CEB23F;
```

We then override the standard Semantic UI colors like this:

```
/* Inject the palette into the Semantic UI theme. */
@blue             : @radgrad-blue;
@green            : @radgrad-green;
@grey             : @radgrad-grey;
@lightblue        : @radgrad-green-2;
@lightgreen       : lighten(@radgrad-green, 5);
@olive            : @radgrad-olive;
@orange           : @radgrad-orange;
@pink             : @radgrad-pink;
@purple           : @radgrad-purple;
@red              : @radgrad-red;
@white            : @radgrad-white;
@yellow           : @radgrad-yellow;
```

As a result, for any Semantic UI React component that accepts a "color" parameter, you can supply, for example, "red", and you'll get the "radgrad-red" hex color value.

### Colors.ts

Overriding the Semantic UI theme is a great first step, but we often want to use a color in a React component, and these "@radgrad-red" definitions are not available within our Meteor system.

To allow access to these colors within React Components, we make a duplicate of these definitions in the [Colors.ts](https://github.com/radgrad/radgrad2/blob/master/app/imports/ui/utilities/Colors.ts) file. These definitions look like this:

```javascript
/*
 * Provide programmatic access to the colors defined in our Semantic UI Theme.
 * These definitions should be in sync with those found in:
 * https://github.com/radgrad/fomantic-ui/blob/main/semantic/src/site/globals/site.variables
 */
export const enum COLORS {
  BLUE =          '#53A78E',
  GREEN =         '#6FBE44',
  GREENDARKEN =   '#38840F',
  GREEN2 =        '#86CAB5',
  GREEN2DARKEN =  '#53A78E',
  GREEN2DARKEN1 = '#1B7F61',
  GREY =          '#696969',
  GREY2 =         '#F7F7F7',
  OLIVE =         '#38840F',
  ORANGE =        '#DA7F4E',
  PINK =          '#DDA1C3',
  PURPLE =        '#952263',
  RED =           '#CA4864',
  WHITE =         '#FFFFFF',
  YELLOW =        '#CEB23F',
}
```

## Managing the RadGrad color palette

The net of it is that if you want to define a new color for use in RadGrad, please update both the Semantic UI theme and the Colors.ts file.

Also, please avoid "one-off" colors.  Use the Theme, Luke.




