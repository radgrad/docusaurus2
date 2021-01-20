(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{240:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,b=p["".concat(i,".").concat(h)]||p[h]||d[h]||a;return r?n.a.createElement(b,s(s({ref:t},c),{},{components:r})):n.a.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var o=r(2),n=r(6),a=(r(0),r(240)),i={title:"User Interface Checklist",sidebar_label:"User Interface"},s={unversionedId:"developers/checklists/ui-checklist",id:"developers/checklists/ui-checklist",isDocsHomePage:!1,title:"User Interface Checklist",description:"The following checklist items are designed to support the review of a user interface on a page-by-page basis.",source:"@site/docs/developers/checklists/ui-checklist.md",slug:"/developers/checklists/ui-checklist",permalink:"/docs/developers/checklists/ui-checklist",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1610757238,sidebar_label:"User Interface",sidebar:"someSidebar",previous:{title:"Design Checklist",permalink:"/docs/developers/checklists/design-checklist"},next:{title:"Javascript, Typescript, and ESLint Checklist",permalink:"/docs/developers/checklists/js-ts-checklist"}},l=[{value:"UI-01: The &quot;goal&quot; of the page is clear.",id:"ui-01-the-goal-of-the-page-is-clear",children:[]},{value:"UI-02: The layout is appropriate at both desktop and mobile screen sizes.",id:"ui-02-the-layout-is-appropriate-at-both-desktop-and-mobile-screen-sizes",children:[]},{value:"UI=03: Links, buttons, and other controllers are obvious.",id:"ui03-links-buttons-and-other-controllers-are-obvious",children:[]},{value:"UI-04: Forms provide example values.",id:"ui-04-forms-provide-example-values",children:[]},{value:"UI-05: Requests for information or access should make the &quot;why&quot; available.",id:"ui-05-requests-for-information-or-access-should-make-the-why-available",children:[]},{value:"UI-06: The page loads acceptably quickly.",id:"ui-06-the-page-loads-acceptably-quickly",children:[]},{value:"UI-07: The console does not generate errors.",id:"ui-07-the-console-does-not-generate-errors",children:[]}],c={rightToc:l};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The following checklist items are designed to support the review of a user interface on a page-by-page basis."),Object(a.b)("h3",{id:"ui-01-the-goal-of-the-page-is-clear"},'UI-01: The "goal" of the page is clear.'),Object(a.b)("p",null,"Can you describe what the page is supposed to accomplish in one sentence?"),Object(a.b)("p",null,"Does the page provide sufficient information and/or controllers to accomplish the goal?"),Object(a.b)("h3",{id:"ui-02-the-layout-is-appropriate-at-both-desktop-and-mobile-screen-sizes"},"UI-02: The layout is appropriate at both desktop and mobile screen sizes."),Object(a.b)("p",null,'The organization of information on the page utilizes the "screen real estate" in an appropriate manner at both desktop and mobile sizes.'),Object(a.b)("p",null,"To check mobile size, there is ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.google.com/web/tools/chrome-devtools/device-mode"}),"device mode")," in Chrome Developer Tools to simulate various screen sizes."),Object(a.b)("h3",{id:"ui03-links-buttons-and-other-controllers-are-obvious"},"UI=03: Links, buttons, and other controllers are obvious."),Object(a.b)("p",null,'There should be no "easter eggs", i.e. things you have to hover over to see that they are interactive.'),Object(a.b)("h3",{id:"ui-04-forms-provide-example-values"},"UI-04: Forms provide example values."),Object(a.b)("p",null,"Form controllers should be annotated or documented with appropriate sample values."),Object(a.b)("h3",{id:"ui-05-requests-for-information-or-access-should-make-the-why-available"},'UI-05: Requests for information or access should make the "why" available.'),Object(a.b)("p",null,"When asking for information, consider if some explanation of why the information is being requested should be provided."),Object(a.b)("h3",{id:"ui-06-the-page-loads-acceptably-quickly"},"UI-06: The page loads acceptably quickly."),Object(a.b)("p",null,'Pages for "normal users" should load in less than 3 seconds. It is acceptable for admin users to wait longer under certain circumstances.'),Object(a.b)("h3",{id:"ui-07-the-console-does-not-generate-errors"},"UI-07: The console does not generate errors."),Object(a.b)("p",null,"When loading and/or interacting with the page with Chrome Developer Tools open, no errors should be generated."))}u.isMDXComponent=!0}}]);