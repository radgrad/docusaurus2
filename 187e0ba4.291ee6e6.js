(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{345:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),b=i,u=c["".concat(s,".").concat(b)]||c[b]||h[b]||r;return n?a.a.createElement(u,l(l({ref:t},p),{},{components:n})):a.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=b;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return d}));var i=n(2),a=n(6),r=(n(0),n(345)),s={title:"Design Issues for InternAloha Integration",sidebar_label:"Design Issues"},l={unversionedId:"developers/internaloha/design-issues",id:"developers/internaloha/design-issues",isDocsHomePage:!1,title:"Design Issues for InternAloha Integration",description:"We can significantly improve the utility of RadGrad to ICS students by integrating the InternAloha system.  Here are some of the design and implementation issues:",source:"@site/docs/developers/internaloha/design-issues.md",slug:"/developers/internaloha/design-issues",permalink:"/docs/developers/internaloha/design-issues",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1623345493,sidebar_label:"Design Issues",sidebar:"mainSidebar",previous:{title:"Oveview of the InternAloha integration project",permalink:"/docs/developers/internaloha/overview"},next:{title:"Current Import Process",permalink:"/docs/developers/internaloha/import-process"}},o=[{value:"InternAloha Design Issues",id:"internaloha-design-issues",children:[{value:"The design of InternAloha requires &quot;supervised&quot; scraping",id:"the-design-of-internaloha-requires-supervised-scraping",children:[]},{value:"We need to improve the InternAloha scraping system",id:"we-need-to-improve-the-internaloha-scraping-system",children:[]},{value:"Scraper Design Idea: investigate use of Chrome snippets for attended scrapers",id:"scraper-design-idea-investigate-use-of-chrome-snippets-for-attended-scrapers",children:[]}]},{value:"RadGrad Design Issues",id:"radgrad-design-issues",children:[{value:"Internships are a first-class entity",id:"internships-are-a-first-class-entity",children:[]},{value:"Internship Collection Schema Definition",id:"internship-collection-schema-definition",children:[]},{value:"Internship data import system",id:"internship-data-import-system",children:[]},{value:"Internship listings will need an automatically generated GUID (&quot;global unique ID&quot;).",id:"internship-listings-will-need-an-automatically-generated-guid-global-unique-id",children:[]},{value:"Manual Internship definition",id:"manual-internship-definition",children:[]},{value:"Manual Internship Editing",id:"manual-internship-editing",children:[]},{value:"The &quot;Internships&quot; Explorer for students",id:"the-internships-explorer-for-students",children:[]},{value:"&quot;Related Internships&quot; page component",id:"related-internships-page-component",children:[]},{value:"Client-server communication issues",id:"client-server-communication-issues",children:[]}]},{value:"Implementation Plan",id:"implementation-plan",children:[]},{value:"RadGrad 3.0: Internships as plugin",id:"radgrad-30-internships-as-plugin",children:[]}],p={rightToc:o};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"We can significantly improve the utility of RadGrad to ICS students by integrating the InternAloha system.  Here are some of the design and implementation issues:"),Object(r.b)("h2",{id:"internaloha-design-issues"},"InternAloha Design Issues"),Object(r.b)("h3",{id:"the-design-of-internaloha-requires-supervised-scraping"},'The design of InternAloha requires "supervised" scraping'),Object(r.b)("p",null,"The nature of the internship database ecosystem (LinkedIn, GlassDoor, Chegg Internships, etc) requires the scraping process to be supervised by a developer. This is because:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Internship sites change their structure frequently, causing scrapers to break."),Object(r.b)("li",{parentName:"ul"},'Several sites have mechanisms in place to make it difficult to perform automated scraping. We overcome this via "supervised" automated scraping.')),Object(r.b)("p",null,"Fortunately, we can provide useful and up to date results by running the scrapers a couple of times a month during the academic year (and less during the summer). The supervision process currently requires a couple of hours. So, providing supervised scraping is not an excessively onerous task."),Object(r.b)("h3",{id:"we-need-to-improve-the-internaloha-scraping-system"},"We need to improve the InternAloha scraping system"),Object(r.b)("p",null,"While the scraping system is currently good enough to support pilot studies, it is not yet suitable for public release for the following reasons:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The scrapers for several important internship sites (GlassDoor, LinkedIn, Angellist) have bugs that prevent us from getting their listings."),Object(r.b)("li",{parentName:"ul"},"There are at least two important sites (Student Opportunity Center and 80000hours.org) which do not yet have InternAloha scrapers.")),Object(r.b)("h3",{id:"scraper-design-idea-investigate-use-of-chrome-snippets-for-attended-scrapers"},"Scraper Design Idea: investigate use of Chrome snippets for attended scrapers"),Object(r.b)("p",null,"It appears that certain sites can detect that we are using Puppeteer and thus throw up a very time-consuming set of recaptchas that we must manually solve. This makes the supervision process more time-consuming and aggravating."),Object(r.b)("p",null,"As an alternative, it might be possible to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Login to the certain Internship sites normally, using your regular Chrome Browser.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Invoke a "snippet" to perform the scraping rather than Puppeteer scripts. This might avoid recaptcha issues. See ',Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.telerik.com/blogs/6-snippets-to-keep-in-your-chrome-devtools"}),"6 snippets to keep in your Chrome DevTools")," and ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://towardsdatascience.com/leverage-chrome-dev-tools-for-dynamic-web-scraping-2d3f7703ea4a"}),"Leverage chrome dev tools for dynamic web scraping"),", which also includes some helpful tips."))),Object(r.b)("h2",{id:"radgrad-design-issues"},"RadGrad Design Issues"),Object(r.b)("h3",{id:"internships-are-a-first-class-entity"},"Internships are a first-class entity"),Object(r.b)("p",null,'Currently, there is an OpportunityType called "internship", and there are a few Internships listed as Opportunities. As part of this integration, we should get rid of the internship OpportunityType and related Opportunities, and make Internships into a first class entity, similar to Interests, Career Goals, Courses, and Opportunities.'),Object(r.b)("p",null,"This is because Internships in InternAloha have a significantly different representation from Opportunities, so it doesn't make sense to try to represent both kinds of activities in a single entity."),Object(r.b)("p",null,"Therefore, the integration process will involve creating a new Collection called Internship with appropriate schema, unit tests, and so forth."),Object(r.b)("p",null,"We will eventually retire the Opportunities referring to Internships, and manually recreate them as needed as Internships."),Object(r.b)("h3",{id:"internship-collection-schema-definition"},"Internship Collection Schema Definition"),Object(r.b)("p",null,'Here is a preliminary specification of the Internship Collection Schema for review and improvement. This is an extension of the "canonical" representation of internship listings from InternAloha, with additional fields for use in RadGrad.'),Object(r.b)("p",null,'A "?" following the field name indicates that it is an optional field.'),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"urls"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"A list of URLs to the pages in the sites with a full description of this internship")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"position"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"The position name")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"description"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Markdown format description")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"lastUploaded?"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Date"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Timestamp of the last time this internship was found through scraping. If the internship was added manually, then this field is absent or set to a falsy value.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"missedUploads"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Integer"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),'A number used to indicate if the listing should be viewed as "expired" or "retired".  A value of 0-3 indicates the listing is "active". A value of 4-7 indicates it should be viewed as "expired".  A value of 8 or more indicates that it should be viewed as "retired".')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"interests"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"A list of Interest slugIDs matching this description.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"careerGoals"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"A list of Career Goal slugIDs matching this description")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"company?"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"The company")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"location?"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"object"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"An object containing location information. Format: { city?: string, state?: string, zip?: string }")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"contact?"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Name, email, URL or other info of a contact person")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"posted?"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"The date this internship was posted. Should be YYYY-MM-DD format. Helps students determine how old it is.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"due?"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"The deadline for applying for this internship. Should be YYYY-MM-DD format. Enables RadGrad to provide reminders.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"guid"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"The globally unique ID. Useful for dump/restore, and for referencing an Internship document in other collections (such as the ProfileInternshipCollection.")))),Object(r.b)("h3",{id:"internship-data-import-system"},"Internship data import system"),Object(r.b)("p",null,'For now, we will continue to run the scrapers using InternAloha code and publish the resulting datafiles to GitHub.  As noted above, this is a supervised process.  We have affectionately dubbed the person who supervises the running of the scraper system the "Master of Scraping".'),Object(r.b)("p",null,'What will change in this integration is that the Master of Scraping will no longer be required to bring up the static InternAloha site (although they might still do it as a part of their QA activities). Instead (or in addition), they will tell the RadGrad Admin that new Internship data is available for upload, and the RadGrad Admin can then go to a "Manage Internships" page with an "Upload Data" button to perform the upload.'),Object(r.b)("p",null,"The Upload data button will:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"1. Upload all the json files produced by this run of InternAloha scrapers.")),Object(r.b)("p",null,"Each json file contains an array of listings detected by a single scraper for a single Internship site. We will need to provide RadGrad with the list of URLs corresponding to these JSON files. This could be in settings.production.json, or (better) in a file in private/internaloha/scraper.urls.txt (one URL per line)."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2. Detect and consolidate duplicates.")),Object(r.b)("p",null,'The Internship sites we are scraping are themselves scraping each other, so there will definitely be a significant number of duplicate listings in the upload. RadGrad will handle this by "consolidating" listings. This means that RadGrad will provide only a single entry for all of the duplicates, but the "urls" field will contain a list of all the site pages where this internship is listed.'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"3. Assign Interests and Career Goals (if any). ")),Object(r.b)("p",null,'The InternAloha system currently parses the internship title and description and attempts to extract "skill" keywords that can be used by users to filter and search the set of listings.'),Object(r.b)("p",null,"For this integration with RadGrad, this parsing process will become the responsibility of the RadGrad upload system. The goal of the parsing is to identify matching Interests and Career Goals and assign these slugs to the listing."),Object(r.b)("p",null,"Note that the InternAloha system's parsing code provides useful implementation approaches which can be adapted to our needs."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},'4. Detect "expired" and "retired" Internship listings.')),Object(r.b)("p",null,'We must detect and manage "expired" Internships. These are Internships that were present at one or more Internship sites for a period of time, and but are no longer listed (typically because the Internship positions were filled and/or because the internship is now in progress). One way we can do this is by maintaining an optional field called "lastUploaded" with a timestamp, along with an integer field called "missedUploads".'),Object(r.b)("p",null,"Each time we upload an Internship listing, we check to see if it's already in the database (by looking for a duplicate).  If it's already in the database, then we update the lastUploaded timestamp and set missedUploads to 0.  After all listings are uploaded, we do a pass through all of the listings, checking for listings with a lastUploaded timestamp (indicating that the listing was scraped and not manually entered), and where the timestamp is not the current day.  If both of those are true, we increment the missedUploads field by 1.  Once missedUploads exceeds a certain threshold value (say, 4), this indicates that the listing is \"expired\"."),Object(r.b)("p",null,'We can\'t know for sure that an expired listing is truly gone, but this approach provides strong evidence. So, by default, the Internships page should show only the listings whose missedUploads field is less than 4. The page can include a radio button to toggle between "Only active" and "Active & Expired" if students want to see the listings that we think are probably no longer available.'),Object(r.b)("p",null,'Once missedUploads exceeds a second threshold (say, 8) this indicates that the listing is "retired". and it will no longer appear in the UI listings regardless of the setting of the toggle.'),Object(r.b)("p",null,"For manually managed listings, we can manually set missedUploads to 4 to indicate that the listing should be marked as expired, and to 8 to set it to retired."),Object(r.b)("p",null,"For API consistency, the Internships.findNonRetired() method will return all non-expired and non-retired listings."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"5. Filter out non-useful Internship listings.")),Object(r.b)("p",null,"The upload process should make the follow checks on listings to ensure they are useful:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Ensure the urls field strings can be used to retrieve a page. We know from our pilot study of InternAloha that the scrapers sometimes list non-working URLs. Each time we do an upload, we should check all of the urls field strings to see that a GET on the URL string returns the 200 "OK success" status response code.  If it doesn\'t, we remove that URL from the urls field. If there are no remaining strings in the urls field after checking them, then we can set the missedUploads field to 8 in order to mark it as retired.')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Ensure that the listing includes at least one Interest and/or Career Goal. If the listing does not match at least one of the defined Interests and Career Goals, then it is not useful to RadGrad. In this case, we can set missedUploads to 8 to mark it as retired."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"6. Report on the results of the upload.")),Object(r.b)("p",null,'This involves both a report on the number of listings uploaded and any problems encountered, as well as an updated version of the "trends" chart created for InternAloha that allows developers to see whether a scraper is suddenly producing a significantly different number of listings (or fields within a listing).  Such sudden changes can indicate that the scraper is "partially broken", i.e. it works well enough to generate listings, but is no longer parsing a single listing accurately.'),Object(r.b)("h3",{id:"internship-listings-will-need-an-automatically-generated-guid-global-unique-id"},'Internship listings will need an automatically generated GUID ("global unique ID").'),Object(r.b)("p",null,'To support dump/restore, and for cross-document referencing, many RadGrad collections require each document to have a GUID (globally unique ID). Typically, we implement this using the "Slug" mechanism.  Unfortunately, there are the following issues with using Slugs for Internships:'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Slugs are usually manually defined by a user.  This won't work for Internships, where there are too many documents for manual slug definition.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"There will be thousands of Internships. If each Internship defines a Slug, the size of the Slug collection will grow enormously, impacting on load time."))),Object(r.b)("p",null,"One solution is to not use Slugs as the GUID for Internships, but instead to implement a special-purpose, automatically generated, unique ID naming system. For example, ",Object(r.b)("inlineCode",{parentName:"p"},"internship-<internship title>-<YYYY-MM-DD-HH-MM-SS-MSS>"),", where:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'The "internship title" is the title field with spaces replaced by hyphens and all non-alphabetic, non-integer characters removed. We cannot count on the internship title to be unique.'),Object(r.b)("li",{parentName:"ul"},"YYYY-MM-DD-HH-MM-SS-MSS is the moment in time that this new Internship document was defined. Since we expect Internship definition to take longer than a single millisecond, we believe that the combination of the internship title, along with timestamp, will guarantee that this ID is a unique string.")),Object(r.b)("p",null,'We will call this field "guid" (for globally unique ID).'),Object(r.b)("h3",{id:"manual-internship-definition"},"Manual Internship definition"),Object(r.b)("p",null,'Not all Internships that we will want to provide to RadGrad users will be known from scraping. There will be "one off" internships that we become aware of by email or other sources.'),Object(r.b)("p",null,"To support the integration of those internships into RadGrad, we will need to provide the ability to manually define new Internships just like we currently manually define new Opportunities."),Object(r.b)("p",null,"The GUID will be automatically generated at time of creation."),Object(r.b)("p",null,"The lastUpdated field is empty or missing, which indicates that this is a manually managed Internship.  Manually managed Internships can still be marked as expired or retired by setting the missedUploads field to an appropriate number."),Object(r.b)("h3",{id:"manual-internship-editing"},"Manual Internship Editing"),Object(r.b)("p",null,"As part of the Admin Data Model menu, it will be possible for an Admin to edit Internship specifications. However, care must be taken since editing fields (like the title or description) could result in a duplicate listing not being identified."),Object(r.b)("h3",{id:"the-internships-explorer-for-students"},'The "Internships" Explorer for students'),Object(r.b)("p",null,"The Student UI will include an Explorer for Internships. This Explorer will have a similar UI to the other explorers, in that it will have a summary (browser view) as well as a details page where you can see all of the information about the Internship and add it to your profile."),Object(r.b)("p",null,"It differs from the current Explorers for Courses, Opportunities, Career Goals, and Interests, because the number of these entities range from a few dozen to a few hundred, while we expect there be at least a few thousand Internships."),Object(r.b)("p",null,'So, the Internships Explorer Browser View will only list "matching" Internships for a student, where matching is based on their Interests and Career Goals.'),Object(r.b)("p",null,'Student can add "matching" Internships to their profile, and then plan to do them by adding them to their Degree Plan, just like they do for Courses and Opportunities.'),Object(r.b)("p",null,"Internships must be verified, just like Opportunities, in order for the student to earn the points associated with them."),Object(r.b)("h3",{id:"related-internships-page-component"},'"Related Internships" page component'),Object(r.b)("p",null,"It might be nice for the details page for other entities to have a Related Internships component (similar to Related Courses and Related Opportunities)."),Object(r.b)("p",null,'A design problem with this component is that there is the potential for several hundred "related" Internships for a popular Interest (i.e. data science).  We can\'t simply display every single one the way we do for other entities.'),Object(r.b)("p",null,'One possibility is to cap the number of Internships to display in this component at 10, and if there are more than 10 matches, have the component title be "(Selected) Related Internships".'),Object(r.b)("h3",{id:"client-server-communication-issues"},"Client-server communication issues"),Object(r.b)("p",null,"It is currently an open question about how the server will communicate with the client about Internship documents. On the one hand, we expect there to be between 2000 and 5000 active internships in the Internship collection. So, there is the potential for a significant one-time performance penalty if students simply subscribe to the entire collection (which is a reasonable strategy for other entities, which generally contain only a few dozen to a few hundred documents)."),Object(r.b)("p",null,"There are at least the following alternatives:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Use standard pub/sub anyway.  As noted above, this will probably cause a several second wait for every student upon login, regardless of whether they are interested in Internships. The benefit is that once the Internship collection is available locally, all subsequent UI display can happen quickly.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Use Meteor Methods. An alternative is to not have an Internship collection on the client side, and instead use Meteor Methods to retrieve Internship data as needed. This avoids the login overhead, at the cost of the Meteor Method overhead each time the student retrieves a page that wishes to display Internship data. These pages include: the Internship Browser View, Details View, the Degree Planner, Visibility, and any page that implements a "Related Internships" component,')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Hybrd approach. It might be possible to subscribe to a smaller number of Internships, for example, the Internships matching the student's Career Goals and Interests. If this number is small, then we can avoid Meteor Methods for the Browser View, Details View, and Degree Planner. We would still need to use a Meteor Method to retrieve Internships associated with a Related Internships component."))),Object(r.b)("p",null,"An open design question is how to specify the ICE points for an Internship. We should have some sort of default ICE point specification (perhaps 25 Innovation and 25 Experience?  This is much higher than what we do now, but maybe we want to value Internships more highly?)."),Object(r.b)("h2",{id:"implementation-plan"},"Implementation Plan"),Object(r.b)("p",null,"Here is a rough plan for implementation:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Implement improvements to scraping system (debug current scrapers, implement new ones).")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Implement Internship collection. This involves creation of the Collection, and associated unit tests.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Implement data import system.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Implement Internship Explorer.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Implement ability to add Internships to profile. Includes ability to make Internships in profile visible or not visible to others.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Implement ability to add Internships to Degree Plan. Includes update to ICE points.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Implement Internship verification. Includes update to ICE points.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Implement manual internship management (addition, editing, Admin-level data model editor).")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Implement Internship reviews.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Implement related internships component."))),Object(r.b)("h2",{id:"radgrad-30-internships-as-plugin"},"RadGrad 3.0: Internships as plugin"),Object(r.b)("p",null,"RadGrad 3.0 will provide (among other things) a plugin system so that sites can enable or disable certain features. Internships will be a test case for this feature."))}d.isMDXComponent=!0}}]);