(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{240:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=d(n),p=r,f=h["".concat(i,".").concat(p)]||h[p]||u[p]||a;return n?o.a.createElement(f,s(s({ref:t},l),{},{components:n})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(6),a=(n(0),n(240)),i={title:"How to maintain data integrity",sidebar_label:"Maintain data integrity"},s={unversionedId:"archive/radgrad2/howto/maintain-data-integrity",id:"archive/radgrad2/howto/maintain-data-integrity",isDocsHomePage:!1,title:"How to maintain data integrity",description:"Compared to relational database systems, MongoDB has very little support for ensuring the integrity of data models. For example, CareerGoal documents contain a slugID field that should contain the docID of a document in the Slug collection, and an interestIDs field that contains a list of docIDs of documents in the Interest collection.  Now, if we were using a relational database system, the system itself would ensure that the integrity of these relationships between CareerGoals, Slugs, and Interests are satisfied (in other words, that those docIDs do point to entities in the correct collection). In contrast, in MongoDB, those field values are basically just strings, and it is left up to the developer to ensure that those strings are in fact docIDs in the appropriate collections.",source:"@site/docs/archive/radgrad2/howto/maintain-data-integrity.md",slug:"/archive/radgrad2/howto/maintain-data-integrity",permalink:"/docs/archive/radgrad2/howto/maintain-data-integrity",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1608326109,sidebar_label:"Maintain data integrity"},c=[],l={rightToc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Compared to relational database systems, MongoDB has very little support for ensuring the integrity of data models. For example, CareerGoal documents contain a slugID field that should contain the docID of a document in the Slug collection, and an interestIDs field that contains a list of docIDs of documents in the Interest collection.  Now, if we were using a relational database system, the system itself would ensure that the integrity of these relationships between CareerGoals, Slugs, and Interests are satisfied (in other words, that those docIDs do point to entities in the correct collection). In contrast, in MongoDB, those field values are basically just strings, and it is left up to the developer to ensure that those strings are in fact docIDs in the appropriate collections."),Object(a.b)("p",null,'This looseness in MongoDB was sufficiently scary that we decided to build an "Integrity Checking" mechanism into RadGrad.  The idea is that each class in the data model should define a method called "checkIntegrity()", which is responsible for checking every document in its associated collection to ensure that fields have the correct kind of value. The method returns an array, which, if empty, indicates that there are no integrity issues with the documents in the collection at this point in time.  If the array is non-empty, then it contains one or more strings that provide information about the integrity problem(s) detected in the collection.'),Object(a.b)("p",null,"Here, for example, is the checkIntegrity method for the CareerGoal class, which checks to make sure that the slugID field contains a docID for a Slug document, and that if the interestIDs field is non-empty, then its elements are docIDs of documents in the Interest collection: "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"})," /**\n   * Returns an array of strings, each one representing an integrity problem with this collection.\n   * Returns an empty array if no problems were found.\n   * Checks slugID and interestIDs.\n   * @returns {Array} A (possibly empty) array of strings indicating integrity issues.\n   */\n  checkIntegrity() {\n    const problems = [];\n    this.find().forEach(doc => {\n      if (!Slugs.isDefined(doc.slugID)) {\n        problems.push(`Bad slugID: ${doc.slugID}`);\n      }\n      _.forEach(doc.interestIDs, interestID => {\n        if (!Interests.isDefined(interestID)) {\n          problems.push(`Bad interestID: ${interestID}`);\n        }\n      });\n    });\n    return problems;\n  }\n")),Object(a.b)("p",null,'You can invoke the Integrity Checking system manually from the Administrator account. Here\'s what happens after pressing the "Check Integrity" button:'),Object(a.b)("img",{src:"/img/radgrad2/datamodel/CheckIntegrity.png",width:"100%"}),Object(a.b)("p",null,"Because Meteor maintains a MongoDB database on both the client and server sides, the Integrity Checker runs twice, once on the client and once on the server, and reports both results. It is useful to note that if you subscribe to a subset of the database, it is possible to find integrity problems on the client side but not on the server side. For example, you might subscribe to a User document that contains a field with InterestIDs without subscribing to the Interest collection in a way that does not replicate one or more of those InterestIDs to the client.   "),Object(a.b)("p",null,"The Integrity Checking mechanism also runs automatically on startup to ensure that database integrity is satisfied. If problems are found, they are reported to the server console."))}d.isMDXComponent=!0}}]);