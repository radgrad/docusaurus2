(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{240:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?a.a.createElement(m,o(o({ref:t},c),{},{components:n})):a.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(240)),s={title:"Entity-Relationship Model"},o={unversionedId:"developers/design/app/imports/api/entity-relationship-model",id:"developers/design/app/imports/api/entity-relationship-model",isDocsHomePage:!1,title:"Entity-Relationship Model",description:"The prior section illustrated the relationships between the data model entities in terms of class inheritance. That perspective reveals how code is shared.",source:"@site/docs/developers/design/app/imports/api/entity-relationship-model.md",slug:"/developers/design/app/imports/api/entity-relationship-model",permalink:"/docs/developers/design/app/imports/api/entity-relationship-model",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1608326513,sidebar:"someSidebar",previous:{title:"Class Hierarchy",permalink:"/docs/developers/design/app/imports/api/class-hierarchy"},next:{title:"Publications and Subscriptions",permalink:"/docs/developers/design/app/imports/api/pub-sub"}},l=[{value:"Users and Profiles",id:"users-and-profiles",children:[]},{value:"Courses",id:"courses",children:[]},{value:"Opportunities",id:"opportunities",children:[]},{value:"Interests",id:"interests",children:[]},{value:"Slugs",id:"slugs",children:[]},{value:"Other entities",id:"other-entities",children:[]}],c={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The prior section illustrated the relationships between the data model entities in terms of class inheritance. That perspective reveals how code is shared."),Object(i.b)("p",null,'This section documents the direct relationships between data model entities.  Depending upon your perspective, you might think of these references as "pointers", "foreign keys", or "references".  For example, each document in the CourseInstance collection needs to refer to a specific Academic Term in which the course instance occurs, a specific student who has/is/will be taking the course, and a specific Course. These references are implemented via fields in the CourseInstance document that hold the docID to a document in the other entity\'s collection. So, each CourseInstance document has the following fields (among others): AcademicTermID, StudentID, and CourseID.'),Object(i.b)("h2",{id:"users-and-profiles"},"Users and Profiles"),Object(i.b)("p",null,"One of the more complicated representations in RadGrad is a user. (This is unfortunate, but the following complicated representation is the simplest one we could come up with that works effectively.)"),Object(i.b)("img",{src:"/img/radgrad2/datamodel/UsersAndProfiles.png",width:"100%"}),Object(i.b)("p",null,"Each user in RadGrad is represented in two ways.  The first way is as a document in the Meteor Users collection.  Meteor provides a built-in accounts package which we use for authentication and authorization which provides this Users collection. So, in order for someone to be able to login to RadGrad, they must exist as an entry in the Users collection.   The Users collection has a very simple representation: each user has a username, which is their email address. In addition, each user has an email field, which is also their email address, and a roles field, which is managed by the standard Roles package. "),Object(i.b)("p",null,'RadGrad does not augment the documents in the User collection with all of the additional properties we need to know about users. Meteor does not recommend doing this, and after previous experience, we evolved to the current representation in which we keep a separate set of collections to manage the properties associated with users.  Each RadGrad user must fall into one of five roles: Student, Faculty, Mentor, Advisor, or Admin.  There is a "Profile" collection associated with each of the roles.'),Object(i.b)("p",null,"Because there are nine properties that every user has (username, firstName, lastName, role, picture, website, interestIDs, careerGoalIDs, and userID), RadGrad provides a class called BaseProfileCollection to manage these properties. This class is not shown in the above diagram. Instead, the four Profiles have the same initial nine properties.  The MentorProfile and StudentProfile have some additional properties. "),Object(i.b)("p",null,'The ERD in the illustration only shows the relationships for the common properties shared across all profiles, i.e. the "base" profile. As you can see, every profile has a link back to the corresponding document in the Users collection for this user, as well as references to their CareerGoals and Interests.  To find a profile given only the User document, you must search for the matching username in each of the four Profile collections. '),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," We are removing the Mentor role. Also we are changing the relationship between profiles and interests and career goals. We now have Favorite collections that map a user to an interest or career goal. "),Object(i.b)("h2",{id:"courses"},"Courses"),Object(i.b)("p",null,"RadGrad represents courses through two entities: Course and CourseInstance."),Object(i.b)("img",{src:"/img/radgrad2/datamodel/CoursesAndCourseInstances.png",width:"100%"}),"Course represents academic term and student-independent information about a course.",Object(i.b)("p",null,"CourseInstance represents the occurrence of a specific student taking a course for a specific academic term, either in the past, present, or future. If the CourseInstance is in the past, then typically it was created as a result of uploading STAR data, in which case both the fromRegistrar and verified booleans are set to true. A verified CourseInstance means that the student will earn ICE points. "),Object(i.b)("p",null,"CourseInstances in the present academic term or future academic term are typically created as a result of the student manipulating their degree plan. These CourseInstances have their fromRegistrar and verified booleans set to false.  "),Object(i.b)("h2",{id:"opportunities"},"Opportunities"),Object(i.b)("p",null,'In RadGrad, extracurricular events and activities are called "Opportunities", and are represented by three entities: Opportunity, OpportunityType, and OpportunityInstance. '),Object(i.b)("img",{src:"/img/radgrad2/datamodel/OpportunitiesOpportunityTypesAndOpportunityInstances.png",width:"100%"}),"OpportunityType specifies the kind of Opportunity: club, event, online course, etc.",Object(i.b)("p",null,'Opportunity represents the opportunity "in the abstract", specifying its description, sponsor (i.e the faculty member responsible for managing the description and verifying student participation), the ICE points, the academic terms it might be available, etc.'),Object(i.b)("p",null,'OpportunityInstance represents an "instantiation" of the Opportunity in a specific academic term for a specific student. It also duplicates the ICE points and the sponsorID from the Opportunity. This enables an instance to depart from its parent Opportunity with respect to these values, and also speeds lookup.'),Object(i.b)("h2",{id:"interests"},"Interests"),Object(i.b)("p",null,'The primary "connective tissue" in RadGrad is Interests. These are topical areas in the discipline. For computer science, example Interests might be "blockchain", "bioinformatics", "Java", and so forth. Interests are grouped together through the InterestType entity. Example InterestTypes might be "Club", "Research Project", etc. '),Object(i.b)("img",{src:"/img/radgrad2/datamodel/InterestsInterestTypesFavoriteInterests.png",width:"100%"}),Object(i.b)("p",null,"This diagram indicates that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All Users (represented by FavoriteInterest) have at least one Interest associated with them."),Object(i.b)("li",{parentName:"ul"},"All Courses, Opportunities, Career Goals, and Teasers have at least one Interest associated with them."),Object(i.b)("li",{parentName:"ul"},"Each Interest is associated with one and only one InterestType.")),Object(i.b)("p",null,"This representation enables RadGrad to associate entities based on Interests: the system can find Users with similar Interests, recommend Courses to Users based upon matching Interests, and so forth. "),Object(i.b)("h2",{id:"slugs"},"Slugs"),Object(i.b)("p",null,'"Slug" is a term commonly used in web application development to denote a unique string that can be used as part of a URL to identify a domain entity.  To facilitate their use in URLs, slugs are generally lower case, and consist only of letters, numbers, and hyphens or underscores. For example, in RadGrad, the slug for the "Software Engineering" Interest might be "software-engineering".'),Object(i.b)("p",null,"In RadGrad, both slugs and the 14 character MongoDB document IDs uniquely identify documents.  However, if you reset and reinitialize a RadGrad database, the document ID will be different, but its slug will stay the same."),Object(i.b)("p",null,"Slugs are used heavily in RadGrad when initializing the database from a fixture file in order to represent relationships between different entities without reference to their docID.  For example, here is an example invocation of the CareerGoals define method:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"CareerGoals.define({ name: 'Database Administrator',\n                     slug: 'database-administrator',\n                     description: 'Wrangler of SQL.',\n                     interests: ['application-development', 'software-engineering', 'databases'],\n                     moreInformation: 'http://www.bls.gov/ooh/database-administrators.htm' });\n")),Object(i.b)("p",null,'First, you can see that the slug "database-administrator" has been passed into the define method, so that this document can be referred to in future definitions by that string.'),Object(i.b)("p",null,'Second, the interests field contains an array of three slugs: "application-development", "software-engineering", "databases". Internally, the MongoDB document for this Database Administrator Career Goal will contain the 14 character document IDs for these interests, but we don\'t need to worry about that in the fixture file: we can just refer to the slugs. '),Object(i.b)("p",null,'RadGrad does not support forward referencing of Slugs. For example, when the above CareerGoal definition executes, if a Slug is referenced (such as "application-development") that is not defined, then an error is thrown. Thus, the order in which RadGrad data is loaded is important and there can be no circular dependencies among entity definitions.'),Object(i.b)("p",null,"Slugs form a unique namespace across all entities: you cannot use the same string to denote an Interest Slug and a CareerGoal slug, for example."),Object(i.b)("p",null,"Here is an ERD that illustrates which entities use Slugs:"),Object(i.b)("img",{src:"/img/radgrad2/datamodel/Slugs.png",width:"100%"}),Object(i.b)("h2",{id:"other-entities"},"Other entities"),Object(i.b)("p",null,"There are a variety of other entities that are more peripheral in the data model or have a sufficiently simple structure to not warrant their own section.  Here are the remaining entities:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"CareerGoal. Career goals enable RadGrad to identify appropriate combinations of curricular and extracurricular activities to prepare a student for their professional life after graduation. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Feed.  Feeds are a representation for recent events within RadGrad. It enables the user interface to display to all users the activities in the system: when courses and opportunities are defined, when new users join, when a user achieves a higher level, and so forth. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Help.  Help entities provide the text associated with the help dialog on each page.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"PublicStats.  Provides the publically available data shown on the landing page. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Review.  The review entities manage reviews of courses and opportunities.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Teaser.  The teaser entities manage the YouTube videos shown in the system.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"VerificationRequest.  Manages the verification requests and responses in the system for opportunities. "))))}p.isMDXComponent=!0}}]);