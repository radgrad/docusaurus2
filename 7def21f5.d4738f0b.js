(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{141:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(6),o=(r(0),r(240)),i={title:"Source Code Organization",sidebar_label:"Source code organization"},c={unversionedId:"archive/radgrad2/concepts/source-code-organization",id:"archive/radgrad2/concepts/source-code-organization",isDocsHomePage:!1,title:"Source Code Organization",description:"Directory Overview",source:"@site/docs/archive/radgrad2/concepts/source-code-organization.md",slug:"/archive/radgrad2/concepts/source-code-organization",permalink:"/docs/archive/radgrad2/concepts/source-code-organization",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1608253253,sidebar_label:"Source code organization"},s=[{value:"Directory Overview",id:"directory-overview",children:[]},{value:"radgrad2/app/",id:"radgrad2app",children:[{value:"radgrad2/app/imports",id:"radgrad2appimports",children:[]},{value:"radgrad2/app/imports/api",id:"radgrad2appimportsapi",children:[]},{value:"radgrad2/app/imports/redux",id:"radgrad2appimportsredux",children:[]},{value:"radgrad2/app/imports/startup",id:"radgrad2appimportsstartup",children:[]},{value:"radgrad2/app/typings",id:"radgrad2apptypings",children:[]},{value:"radgrad2/app/imports/ui",id:"radgrad2appimportsui",children:[]}]},{value:"<code>custom/</code> in RadGrad2",id:"custom-in-radgrad2",children:[]}],d={rightToc:s};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"directory-overview"},"Directory Overview"),Object(o.b)("p",null,"The RadGrad repository has the following top-level directories:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"radgrad2/\n        app/      # the application.\n        config/   # configuration files for development and deployment.\n        custom/   # directory for custom configurations and other untracked files.\n        scripts/  # directory for scripts to download STAR data and convert RadGrad1 data to RadGrad2 format.\n")),Object(o.b)("p",null,"Of these, the only directory with a complex substructure is app/. Let's look at that one:"),Object(o.b)("h2",{id:"radgrad2app"},"radgrad2/app/"),Object(o.b)("p",null,"The radgrad2/app/ directory layout is based on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://ics-software-engineering.github.io/meteor-application-template/"}),"meteor-application-template"),", which implements a set of conventions for file and directory naming and structure that conforms to suggestions from the Meteor Guide chapter on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://guide.meteor.com/structure.html"}),"Application Structure"),". "),Object(o.b)("p",null,"The most important organizational concept is that almost all of the application code is placed inside the imports/ directory, and the code inside the client/ and server/ directories are responsible for loading the code for the client and server sides, respectively."),Object(o.b)("p",null,"Here are the top-level directories in the app/ directory:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'app/\n   client/    # responsible for loading all client-side code from imports dir. \n   custom/    # directory to store custom implementations. Not stored in GitHub.            \n   imports/   # implementation code lives here.\n   private/   # contains database fixtures. "private" means not accessible via URL.\n   public/    # contains images and semantic ui theme files. "public" means accessible via URL.\n   server/    # responsible for loading all server-side code from imports dir.\n')),Object(o.b)("p",null,"Of these directories, the only directory with a complex substructure is imports/.  Let's now look at that one:"),Object(o.b)("h3",{id:"radgrad2appimports"},"radgrad2/app/imports"),Object(o.b)("p",null,"The imports/ directory contains five subdirectories:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"imports/\n       api/        # data model implementation\n       redux/      # redux state management\n       startup/    # system startup\n       typings/    # Typescript typing information\n       ui/         # client-side user interface code\n")),Object(o.b)("p",null,"Let's look at each in turn."),Object(o.b)("h3",{id:"radgrad2appimportsapi"},"radgrad2/app/imports/api"),Object(o.b)("p",null,'The api/ subdirectory provides the code for the RadGrad "data model". This code is generally loaded on both the client and server sides of the application.  See the Data Model section of this manual for detailed information on the data model. In this section, we will just briefly introduce the source organization.'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'api/ \n   academic-term # Academic Term representation code.\n   analytic/     # Email, user interactions, and ICE snapshot code. \n   base/         # Superclasses for collection classes.\n   career/       # Career goal code.\n   course/       # Course and course instance code.\n   degree-plan/  # Degree plan code.\n   favorite/     # Favorite academic plans, career goals, courses, interests, and opportunities.\n   feed/         # Code for the RadGrad "feed" widget.\n   feedback/     # Implementation of the Feedback (recommendation) facilities\n   help/         # RadGrad\'s page-level help system.\n   ice/          # Support for the ICE game mechanic\n   integrity/    # Code to ensure that the database is in a consistent state\n   interest/     # Interest code.\n   level/        # Implementation of RadGrad levels.\n   log/          # Code for logging user behavior.\n   mentor/       # Implement the Mentor Space questions and answers.\n   opportunity/  # Opportunity and opportunity instance code.\n   public-stats/ # Data that appears on landing page; login not required to see.\n   radgrad/      # Provides meta-data about set of collections and so forth.\n   review/       # Implement course and opportunity reviews.\n   role/         # Support for roles: student, faculty, advisor, mentor, admin \n   semester/     # Semester representation code.\n   slug/         # Slug representation code.\n   star/         # Support STAR data processing.\n   teaser/       # Teaser (video) representation code.\n   test/         # Facilitate testing.\n   user/         # Represent users and their profile data.\n   verification  # Support verification of opportunities. \n')),Object(o.b)("h3",{id:"radgrad2appimportsredux"},"radgrad2/app/imports/redux"),Object(o.b)("p",null,"The redux/ subdirectory contains code to manage the Redux state. It contains four subdirectories:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"redux/\n     admin/       # Redux state for the Admin pages and components.\n     advisor/     # Redux state for the Advisor pages and components.\n     shared/      # Redux state for shared pages and components.\n     student/     # Redux state for the Student pages and components.\n")),Object(o.b)("h3",{id:"radgrad2appimportsstartup"},"radgrad2/app/imports/startup"),Object(o.b)("p",null,"The startup/ subdirectory contains code that needs to be loaded immediately upon system startup. It contains three subdirectories:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"startup/\n       both/    # Accounts package configuration code that must run on both client and server.\n       client/  # Client-only code for logging, routing, sessions, and accounts.\n       server/  # Server-only code for accounts, logging, publications, and database loading.\n")),Object(o.b)("p",null,'Note that naming this directory does not automatically make this code loaded, much less loaded "first".  There are import\nstatements in client/ and server/ that are responsible for loading this code. '),Object(o.b)("h3",{id:"radgrad2apptypings"},"radgrad2/app/typings"),Object(o.b)("p",null,"The /typings directory has Typescript type files ",Object(o.b)("inlineCode",{parentName:"p"},"*.d.ts")," for the different packages we are using. The most important file is ",Object(o.b)("inlineCode",{parentName:"p"},"radgrad.d.ts"),". This file defines the types for RadGrad2."),Object(o.b)("h3",{id:"radgrad2appimportsui"},"radgrad2/app/imports/ui"),Object(o.b)("p",null,'The ui/ subdirectory contains all of the client-side code for implementing the user interface. We follow the recommended Meteor convention of using "layouts" to provide a standard organization for multiple pages, "pages" to indicate the contents of a page for which there is a URL, and "components" to indicate UI elements that are embedded within a page (and may exist on multiple pages).'),Object(o.b)("p",null,"So, the ui/ directory structure is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"ui/\n  components/    # widgets within a page.\n  layouts/       # organization for multiple pages.     \n  pages/         # URL-accessible page.\n  stylesheets/   # currently empty.\n  utilities/     # cross-cutting utility code for UI.\n")),Object(o.b)("p",null,'Within each of these directories are subdirectories. In many cases, the subdirectories reflect a division based on role. So, for example, there is a subdirectory called "advisor/" in each of the components, layouts, and pages/ directories. '),Object(o.b)("h2",{id:"custom-in-radgrad2"},Object(o.b)("inlineCode",{parentName:"h2"},"custom/")," in RadGrad2"),Object(o.b)("p",null,"In RadGrad2, we ignore any directories and files named ",Object(o.b)("inlineCode",{parentName:"p"},"custom")," that appear in the project. Being in the ",Object(o.b)("inlineCode",{parentName:"p"},".gitignore")," means that any file or directory matching that pattern can not be committed to the repository unless explicitly told otherwise. Thus, any files to be automatically kept out of the repository should be placed in a ",Object(o.b)("inlineCode",{parentName:"p"},"custom/")," directory anywhere in the project."))}p.isMDXComponent=!0},240:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=n.a.createContext({}),p=function(e){var t=n.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(r),m=a,b=l["".concat(i,".").concat(m)]||l[m]||u[m]||o;return r?n.a.createElement(b,c(c({ref:t},d),{},{components:r})):n.a.createElement(b,c({ref:t},d))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);