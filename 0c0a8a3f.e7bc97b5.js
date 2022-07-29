(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{345:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?a.a.createElement(b,c(c({ref:t},d),{},{components:n})):a.a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(345)),i={title:"How to convert a RadGrad1 database to RadGrad2",sidebar_label:"Convert RadGrad1 data to RadGrad2"},c={unversionedId:"developers/design/scripts/howto/convert-data",id:"developers/design/scripts/howto/convert-data",isDocsHomePage:!1,title:"How to convert a RadGrad1 database to RadGrad2",description:"This convert script converts a RadGrad1 dump to RadGrad2 format.  This involves the following:",source:"@site/docs/developers/design/scripts/howto/convert-data.md",slug:"/developers/design/scripts/howto/convert-data",permalink:"/docs/developers/design/scripts/howto/convert-data",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1608766016,sidebar_label:"Convert RadGrad1 data to RadGrad2",sidebar:"mainSidebar",previous:{title:"How to update student STAR data",permalink:"/docs/developers/design/scripts/howto/update-student-star-data"},next:{title:"Generate Demo Fixture",permalink:"/docs/developers/design/scripts/howto/generate-demo-fixture"}},s=[],d={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This convert script converts a RadGrad1 dump to RadGrad2 format.  This involves the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"slight structural modifications to certain collections"),Object(o.b)("li",{parentName:"ul"},"deletion of several collections no longer used in RadGrad2."),Object(o.b)("li",{parentName:"ul"},"definition of several (empty) collections newly available in RadGrad2."),Object(o.b)("li",{parentName:"ul"},"Initialization of the UserInteractionCollection to zero documents.")),Object(o.b)("p",null,"To use this script, do the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Create three directories named "custom" so that their contents won\'t be uploaded to github (all directories named custom are gitignored):'),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"radgrad2/scripts/data/custom"),Object(o.b)("li",{parentName:"ul"},"radgrad2/app/private/database/custom"),Object(o.b)("li",{parentName:"ul"},"radgrad2/custom"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Download a dump file from RadGrad1 into radgrad2/scripts/data/custom. Let's call it 2020-11-01.json.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Edit scripts/package.json so that the "convert" script references the RadGrad1 data file name and then outputs the converted RadGrad2 file name into the radgrad2/app/private/database/custom directory.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Put a copy of config/settings.development.json into radgrad2/custom, and edit the databaseRestoreFileName field to refer to the converted RadGrad2 file name."))),Object(o.b)("p",null,"Now you are ready to run (or re-run) the conversion script.  First, invoke ",Object(o.b)("inlineCode",{parentName:"p"},"npm run convert")," to recompile the script and then invoke it on your RadGrad1 file and produce the RadGrad2 database:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ npm run convert\n\n> radgrad2-scripts@1.0.0 convert /Users/philipjohnson/github/radgrad/radgrad2/scripts\n> npm run tsc && node js/convert-dump.js data/custom/2019-11-01-08-42-13.json ../app/private/database/custom/convert-test.json\n\n\n> radgrad2-scripts@1.0.0 tsc /Users/philipjohnson/github/radgrad/radgrad2/scripts\n> tsc\n\nConvert Dump: data/custom/2019-11-01-08-42-13.json --\x3e ../app/private/database/custom/convert-test.json\n")),Object(o.b)("p",null,"To test the conversion, in a separate console, cd to the radgrad2/app directory, and invoke ",Object(o.b)("inlineCode",{parentName:"p"},"meteor reset; meteor npm run start-custom"),". This will clean the development DB, and invoke your custom settings file that specifies the location of your converted DB:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ meteor reset; meteor npm run start-custom\nProject reset.\n\n> radgrad2@ start-custom /Users/philipjohnson/github/radgrad/radgrad2/app\n> meteor --no-release-check --exclude-archs web.browser.legacy,web.cordova --settings ../custom/settings.development.json --port 3200\n\n[[[[[ ~/github/radgrad/radgrad2/app ]]]]]\n\n=> Started proxy.\n=> Started MongoDB.\nI20201221-17:05:01.091(-10)? Monti APM: completed instrumenting the app\nI20201221-17:05:01.345(-10)? Defining ADMIN radgrad@hawaii.edu with password foo\nI20201221-17:05:01.377(-10)? Loading database from file database/custom/convert-test.json, dumped Invalid date.\nI20201221-17:05:01.479(-10)? Defining 104 AcademicTermCollection documents.\nI20201221-17:05:02.256(-10)? Have 104 documents.\nI20201221-17:05:02.256(-10)? Defining 53 HelpMessageCollection documents.\nI20201221-17:05:02.452(-10)? Have 53 documents.\nI20201221-17:05:02.453(-10)? Defining 3 InterestTypeCollection documents.\nI20201221-17:05:02.633(-10)? Have 3 documents.\nI20201221-17:05:02.633(-10)? Defining 78 InterestCollection documents.\nI20201221-17:05:03.240(-10)? Have 78 documents.\nI20201221-17:05:03.240(-10)? Defining 18 CareerGoalCollection documents.\nI20201221-17:05:03.658(-10)? Have 18 documents.\nI20201221-17:05:03.658(-10)? Defining 22 AcademicPlanCollection documents.\nI20201221-17:05:04.618(-10)? Have 22 documents.\nI20201221-17:05:04.619(-10)? Defining 0 AdminProfileCollection documents.\nI20201221-17:05:04.619(-10)? Have 1 documents.\n :\n :\nI20201221-17:10:50.050(-10)? Defining 179 FavoriteOpportunityCollection documents.\nI20201221-17:10:50.704(-10)? Have 179 documents.\nI20201221-17:10:50.705(-10)? Finished loading database.\n")),Object(o.b)("p",null,"The above tests to ensure that the database loaded successfully."))}l.isMDXComponent=!0}}]);