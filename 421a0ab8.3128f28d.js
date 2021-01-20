(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{106:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(2),o=r(6),i=(r(0),r(240)),a={title:"How to perform testing with different roles",sidebar_label:"Perform testing with different roles"},s={unversionedId:"developers/testing/howto/perform-testing-with-different-roles",id:"developers/testing/howto/perform-testing-with-different-roles",isDocsHomePage:!1,title:"How to perform testing with different roles",description:"RadGrad Roles",source:"@site/docs/developers/testing/howto/perform-testing-with-different-roles.md",slug:"/developers/testing/howto/perform-testing-with-different-roles",permalink:"/docs/developers/testing/howto/perform-testing-with-different-roles",version:"current",lastUpdatedBy:"Cam Moore",lastUpdatedAt:1604862609,sidebar_label:"Perform testing with different roles",sidebar:"someSidebar",previous:{title:"How to write acceptance tests",permalink:"/docs/developers/testing/howto/write-acceptance-tests"},next:{title:"Testing scripts",permalink:"/docs/developers/testing/reference/testing-scripts"}},l=[{value:"RadGrad Roles",id:"radgrad-roles",children:[]}],c={rightToc:l};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"radgrad-roles"},"RadGrad Roles"),Object(i.b)("p",null,"There are five roles for accounts in the RadGrad system: Admin, Student, Faculty, Advisor, and Alumni. Logging into RadGrad as any one of these roles will show you what RadGrad looks like and how it functions to users of that role. Certain methods of collections assert particular roles that are the only roles authorized to execute those methods (otherwise they throw an unauthorized error). Therefore, it is important while developing RadGrad that you are logged into the correct role to be able to manually test the functionality of your code behaves as expected to any role constraints."),Object(i.b)("p",null,"Normally, Admin logs in using the Meteor accounts system, while Students, Faculty, Advisors, and Alumni login using CAS authentication."),Object(i.b)("p",null,"For testing purposes, if Meteor.settings.public.development is true, then when the database is initialized, all users are created with default credentials and using the Meteor accounts system."))}d.isMDXComponent=!0},240:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),f=n,h=u["".concat(a,".").concat(f)]||u[f]||p[f]||i;return r?o.a.createElement(h,s(s({ref:t},c),{},{components:r})):o.a.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);