(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{148:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(6),o=(r(0),r(240)),i={title:"How to run the npm start scripts",sidebar_label:"Run start scripts"},s={unversionedId:"developers/getting-started/howto/run-scripts",id:"developers/getting-started/howto/run-scripts",isDocsHomePage:!1,title:"How to run the npm start scripts",description:"We use a variety NPM scripts for development. They are defined in the RadGrad2 package.json file.",source:"@site/docs/developers/getting-started/howto/run-scripts.md",slug:"/developers/getting-started/howto/run-scripts",permalink:"/docs/developers/getting-started/howto/run-scripts",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1608766016,sidebar_label:"Run start scripts",sidebar:"someSidebar",previous:{title:"How to install RadGrad",permalink:"/docs/developers/getting-started/howto/install-radgrad"},next:{title:"How to branch and merge in RadGrad",permalink:"/docs/developers/getting-started/howto/branch-and-merge"}},c=[{value:"start",id:"start",children:[]},{value:"start-custom",id:"start-custom",children:[]},{value:"Scripts for testing",id:"scripts-for-testing",children:[]}],p={rightToc:c};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We use a variety NPM scripts for development. They are defined in the RadGrad2 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2/blob/master/app/package.json"}),"package.json")," file."),Object(o.b)("p",null,"There are two scripts for running RadGrad: start and start-custom.\nBoth are invoked with ",Object(o.b)("inlineCode",{parentName:"p"},"meteor npm run"),"."),Object(o.b)("h2",{id:"start"},"start"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"meteor npm run start")," is the standard command to invoke RadGrad in development mode.  This configures the system using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad2/blob/master/config/settings.development.json"}),"settings.development.json")," annd runs it on port 3200."),Object(o.b)("h2",{id:"start-custom"},"start-custom"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"meteor npm run start-custom")," is the same as the above, but allows you to use a customized configuration file that is ignored in commits to the repository. In order to to make use of this command, there is some set-up required:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If ",Object(o.b)("inlineCode",{parentName:"p"},"radgrad/custom/")," does not exist, create it")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Copy ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/radgrad/radgrad/blob/master/config/settings.development.json"}),"settings.development.json")," into it"))),Object(o.b)("p",null,"You can now edit ",Object(o.b)("inlineCode",{parentName:"p"},"custom/settings.development.json")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"meteor npm run start-custom")," command will use that configuration."),Object(o.b)("p",null,"Please be aware that if you want to use custom Assets in your configuration (e.g. a custom ",Object(o.b)("inlineCode",{parentName:"p"},"databaseRestoreFileName"),"), you will need to place the custom file into ",Object(o.b)("inlineCode",{parentName:"p"},"app/private/")," due to the way Meteor loads assets. If you wish to exclude the custom asset from commits to the repository, place it into a ",Object(o.b)("inlineCode",{parentName:"p"},"custom/")," directory anywhere in ",Object(o.b)("inlineCode",{parentName:"p"},"app/private/"),". For more information on the ",Object(o.b)("inlineCode",{parentName:"p"},"custom/")," convention, see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/developers/getting-started/concepts/source-code-organization"}),"source code organization"),"."),Object(o.b)("h2",{id:"scripts-for-testing"},"Scripts for testing"),Object(o.b)("p",null,"There are a variety of additional scripts for testing. Their documentation is available ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../testing/reference/testing-scripts"}),"here"),"."))}d.isMDXComponent=!0},240:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(r),b=n,m=l["".concat(i,".").concat(b)]||l[b]||u[b]||o;return r?a.a.createElement(m,s(s({ref:t},p),{},{components:r})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);