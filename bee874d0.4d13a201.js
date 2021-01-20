(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{198:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return d}));var a=r(2),n=r(6),o=(r(0),r(240)),i={title:"Overview of RadGrad2's design",sidebar_label:"Overview"},c={unversionedId:"developers/design/overview",id:"developers/design/overview",isDocsHomePage:!1,title:"Overview of RadGrad2's design",description:"This chapter provides documentation on the design of RadGrad.",source:"@site/docs/developers/design/overview.md",slug:"/developers/design/overview",permalink:"/docs/developers/design/overview",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1608404248,sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"How to branch and merge in RadGrad",permalink:"/docs/developers/getting-started/howto/branch-and-merge"},next:{title:"Overview of app/",permalink:"/docs/developers/design/app/overview"}},s=[{value:"The radgrad2 repository",id:"the-radgrad2-repository",children:[{value:"Directory overview",id:"directory-overview",children:[]}]}],l={rightToc:s};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This chapter provides documentation on the design of RadGrad."),Object(o.b)("p",null,"RadGrad is rather complex. We have decided to organize this chapter in a manner that parallels the directory organization of the radgrad2 respository.  This has the following advantages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If you are looking for documentation about a design aspect associated with a specific place in the source code, then it is likely to be found in this chapter at the same location.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Reading through this chapter is similar to a guided tour through the source code.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"As you read through the sections, if there is no subsection corresponding to a subdirectory, then it is likely there is not yet any documentation available for those design elements."))),Object(o.b)("p",null,'However, there are design elements that are "cross-cutting" and do not fall neatly into a single subdirectory location.  For example, tests are located both throughout the api/ directory hierarchy in addition to the top-level tests/ directory. So, we have a top-level chapter called "Testing" to cover this design concept. Other cross-cutting concerns are Reviews, Deployment, and Documentation, so we\'ve elevated them to their own top-level chapters.'),Object(o.b)("p",null,"If you run into trouble trying to understand a feature of RadGrad, contact an experienced developer as this may indicate the need for additional documentation."),Object(o.b)("h2",{id:"the-radgrad2-repository"},"The radgrad2 repository"),Object(o.b)("p",null,"The RadGrad2 repository contains the source code for the RadGrad2 Meteor application, as well as a set of scripts used for data manipulation."),Object(o.b)("p",null,"It is available at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2"}),"https://github.com/radgrad/radgrad2"),"."),Object(o.b)("p",null,'You will need to ask a RadGrad administrator for write permissions to this repository in order to start development. Note: we do not use the "fork and pull-request" model of development. Instead, all RadGrad developers commit directly to the radgrad2 repo. We use a "branch and merge" model of development called "Issue Driven Project Management".  For details, please see the ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../getting-started/tech-stack#issue-driven-project-management"}),"Tech Stack")," chapter."),Object(o.b)("h3",{id:"directory-overview"},"Directory overview"),Object(o.b)("img",{src:"/img/design/radgrad2/radgrad2-repo.png"}),Object(o.b)("p",null,"The radgrad2 repository contains the following top-level directories:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},".github/"),": contains issue and review templates, and the github actions to perform continuous integration."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"app/"),": the Meteor application source code."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"archive/"),': a kind of "Trash": a place for developers to stash files that they are pretty sure (but not ',Object(o.b)("em",{parentName:"p"},"completely")," sure) they will never need again.  Occasionally we will garbage collect and delete files from this directory."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"config/"),": contains settings files that are read in by the RadGrad Meteor application upon startup."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"scripts/"),": contains scripts for retrieving data from STAR, converting data from RadGrad1 to RadGrad2, and so forth."),Object(o.b)("p",null,"In many respects, the radgrad2 repository has a similar organization to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://ics-software-engineering.github.io/meteor-application-template-react/"}),"meteor-application-template-react"),". If you are not already familiar with this system, it will be helpful to watch ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://ics-software-engineering.github.io/meteor-application-template-react/#screencasts"}),"its screencasts"),"."))}d.isMDXComponent=!0},240:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),b=a,h=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return r?n.a.createElement(h,c(c({ref:t},l),{},{components:r})):n.a.createElement(h,c({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);