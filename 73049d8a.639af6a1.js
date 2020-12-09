(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{113:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),i=r(6),a=(r(0),r(200)),o={title:"Code Review Checklist",sidebar_label:"Checklist"},c={unversionedId:"developers/reviews/reference/review-checklist",id:"developers/reviews/reference/review-checklist",isDocsHomePage:!1,title:"Code Review Checklist",description:"Some example checklist items for React and Typescript.",source:"@site/docs/developers/reviews/reference/review-checklist.md",slug:"/developers/reviews/reference/review-checklist",permalink:"/docs/developers/reviews/reference/review-checklist",version:"current",sidebar_label:"Checklist",sidebar:"someSidebar",previous:{title:"How to Conduct a Review",permalink:"/docs/developers/reviews/howto/conduct-a-review"},next:{title:"Overview of RadGrad Testing",permalink:"/docs/developers/testing/overview"}},l=[{value:"Naming",id:"naming",children:[]},{value:"Code",id:"code",children:[]},{value:"ES6",id:"es6",children:[]},{value:"ESLint",id:"eslint",children:[]},{value:"React",id:"react",children:[]},{value:"Maintainability",id:"maintainability",children:[]},{value:"Reusability",id:"reusability",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Some example checklist items for React and Typescript."),Object(a.b)("h3",{id:"naming"},"Naming"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Do filenames have consistent casing and extensions?"),Object(a.b)("li",{parentName:"ul"},"Do variables/functions/modules have consistent casing?"),Object(a.b)("li",{parentName:"ul"},"Do variables/functions/modules have descriptive names?")),Object(a.b)("h3",{id:"code"},"Code"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Look for blocks of code  with more than a few lines of code that look similar. Is it possible to refactor to reduce duplication?"),Object(a.b)("li",{parentName:"ul"},"Look for \u201ctoo smart\u201d and over-engineered code. Can it be simplified?"),Object(a.b)("li",{parentName:"ul"},"Are there multiple if/else blocks?  "),Object(a.b)("li",{parentName:"ul"},"Is there unused/unreachable code?"),Object(a.b)("li",{parentName:"ul"},"Is there commented out code?"),Object(a.b)("li",{parentName:"ul"},"Are there unnecessary comments? Comments that describe the ",Object(a.b)("em",{parentName:"li"},"how"),"."),Object(a.b)("li",{parentName:"ul"},"Are there missing comments? Comments that describe the ",Object(a.b)("em",{parentName:"li"},"why"),"."),Object(a.b)("li",{parentName:"ul"},"Can we change the type any to something more specific?")),Object(a.b)("h3",{id:"es6"},"ES6"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Can you use the spread operator?"),Object(a.b)("li",{parentName:"ul"},"Can you use object deconstruction?"),Object(a.b)("li",{parentName:"ul"},"Is there consistent use of arrow functions?"),Object(a.b)("li",{parentName:"ul"},"Is there ES6 use of functions that lodash provides?")),Object(a.b)("h3",{id:"eslint"},"ESLint"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Are there any lint errors?"),Object(a.b)("li",{parentName:"ul"},"Are there console.logs? Are they needed?")),Object(a.b)("h3",{id:"react"},"React"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Are the components small?"),Object(a.b)("li",{parentName:"ul"},"Is the render method small? Minimize logic in the render method."),Object(a.b)("li",{parentName:"ul"},"Are there state updates in loops?")),Object(a.b)("h3",{id:"maintainability"},"Maintainability"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Is the code readable? Code should be self-explanatory. Get a feel of story reading, while going through the code."),Object(a.b)("li",{parentName:"ul"},"Is the code easy to test? "),Object(a.b)("li",{parentName:"ul"},"Is the code easy to debug?")),Object(a.b)("h3",{id:"reusability"},"Reusability"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Is the code DRY (Do not Repeat Yourself)? The same code should not be repeated more than twice."),Object(a.b)("li",{parentName:"ul"},"Are there reusable services, functions and components?")))}u.isMDXComponent=!0},200:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(r),p=n,m=b["".concat(o,".").concat(p)]||b[p]||d[p]||a;return r?i.a.createElement(m,c(c({ref:t},s),{},{components:r})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);