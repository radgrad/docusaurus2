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
@radgrad-black             : #000000;
@radgrad-blue              : #53A78E;
@radgrad-blue-2            : #26407C;
@radgrad-brown             : #AB6634;
@radgrad-green             : #6FBE44;
@radgrad-green-darken      : #38840F;
@radgrad-green-2           : #86CAB5;
@radgrad-green-2-darken    : #53A78E;
@radgrad-green-2-darken-1  : #1B7F61;
@radgrad-green-3           : #80AD27;
@radgrad-grey              : #696969;
@radgrad-grey-2            : #F7F7F7;
@radgrad-grey-3            : #EEEEEE;
@radgrad-olive             : #38840F;
@radgrad-orange            : #DA7F4E;
@radgrad-pink              : #DDA1C3;
@radgrad-purple            : #952263;
@radgrad-red               : #CA4864;
@radgrad-teal              : #00CCCB;
@radgrad-violet            : #62487C;
@radgrad-white             : #FFFFFF;
@radgrad-yellow            : #CEB23F;
```

We then override the standard Semantic UI colors like this:

```
/* Inject the palette into the Semantic UI theme. */
@black            : @radgrad-black;
@blue             : @radgrad-blue;
@brown            : @radgrad-brown;
@green            : @radgrad-green;
@grey             : @radgrad-grey;
@lightblue        : @radgrad-green-2;
@lightgreen       : lighten(@radgrad-green, 5);
@olive            : @radgrad-olive;
@orange           : @radgrad-orange;
@pink             : @radgrad-pink;
@purple           : @radgrad-purple;
@red              : @radgrad-red;
@teal             : @radgrad-teal;
@violet           : @radgrad-violet;
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
  BLACK =         '#000000',
  BLUE =          '#53A78E',
  BLUE2 =         '#26407C',
  BROWN =         '#AB6634',
  GREEN =         '#6FBE44',
  GREENDARKEN =   '#38840F',
  GREEN2 =        '#86CAB5',
  GREEN2DARKEN =  '#53A78E',
  GREEN2DARKEN1 = '#1B7F61',
  GREEN3 =        '#80AD27',
  GREY =          '#696969',
  GREY2 =         '#F7F7F7',
  GREY3 =         '#EEEEEE',
  OLIVE =         '#38840F',
  ORANGE =        '#DA7F4E',
  PINK =          '#DDA1C3',
  PURPLE =        '#952263',
  RED =           '#CA4864',
  TEAL =          '#00CCCB',
  VIOLET =        '#62487C',
  WHITE =         '#FFFFFF',
  YELLOW =        '#CEB23F',
}
```

## The Palette

export const Highlight = ({children, color}) => ( <div style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: 'white',
      fontWeight: '700',
      padding: '0.2rem',
      margin: '0.2rem',
    }}> {children} ({color})</div> );


<Highlight color="#000000">Black</Highlight>
<Highlight color="#53A78E">Blue</Highlight>
<Highlight color="#26407C">Blue2</Highlight>
<Highlight color="#AB6634">Brown</Highlight>
<Highlight color="#6FBE44">Green</Highlight>
<Highlight color="#38840F">Green Darken</Highlight>
<Highlight color="#86CAB5">Green2</Highlight>
<Highlight color="#53A78E">Green2 Darken</Highlight>
<Highlight color="#1B7F61">Green2 Darken 1</Highlight>
<Highlight color="#80AD27">Green3</Highlight>
<Highlight color="#696969">Grey</Highlight>
<Highlight color="#F7F7F7">Grey2</Highlight>
<Highlight color="#EEEEEE">Grey3</Highlight>
<Highlight color="#38840F">Olive</Highlight>
<Highlight color="#DA7F4E">Orange</Highlight>
<Highlight color="#DDA1C3">Pink</Highlight>
<Highlight color="#952263">Purple</Highlight>
<Highlight color="#CA4864">Red</Highlight>
<Highlight color="#00CCCB">Teal</Highlight>
<Highlight color="#62487C">Violet</Highlight>
<Highlight color="#CEB23F">Yellow</Highlight>


## Managing the RadGrad color palette

The net of it is that if you want to define a new color for use in RadGrad, you usually need to update three files:

  1. The Semantic UI site.variables file.
  2. The Colors.ts file.
  3. This file!

Finally, please avoid "one-off" colors, and please avoid using hex strings directly in the code.   Use the Theme, Luke.




