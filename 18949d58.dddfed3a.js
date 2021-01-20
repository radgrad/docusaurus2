(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{240:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,m=u["".concat(s,".").concat(b)]||u[b]||h[b]||i;return a?r.a.createElement(m,o(o({ref:t},l),{},{components:a})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},71:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(240)),s={title:"Scraping (Spike Solutions)",sidebar_label:"Scraping"},o={unversionedId:"archive/internbit/scraping",id:"archive/internbit/scraping",isDocsHomePage:!1,title:"Scraping (Spike Solutions)",description:'One component of InternBit is a "scraper", an automated process that can collect appropriate information from a variety of Internship sites automatically. Because InternBit must be tightly integrated with RadGrad, and since RadGrad is implemented in Javascript, it is desirable that the scraper use Javascript as well. So, we will investigate JS scrapers first and only contemplate scrapers in other languages (such as Python) if we cannot succeed using JS.',source:"@site/docs/archive/internbit/scraping.md",slug:"/archive/internbit/scraping",permalink:"/docs/archive/internbit/scraping",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1600485794,sidebar_label:"Scraping",sidebar:"someSidebar",previous:{title:"InternBit Resources",permalink:"/docs/archive/internbit/resources"},next:{title:"InternBit Needs Assessment",permalink:"/docs/archive/internbit/needs-assessment"}},c=[{value:"Spike solution problem specification",id:"spike-solution-problem-specification",children:[{value:"Which Javascript library?",id:"which-javascript-library",children:[]},{value:"What sites to crawl?",id:"what-sites-to-crawl",children:[]},{value:"What search parameters?",id:"what-search-parameters",children:[]},{value:"Are credentials required?",id:"are-credentials-required",children:[]},{value:"Is there an API?",id:"is-there-an-api",children:[]}]},{value:"Implementation approach",id:"implementation-approach",children:[{value:"Repository name",id:"repository-name",children:[]},{value:"Invoke as an npm script",id:"invoke-as-an-npm-script",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'One component of InternBit is a "scraper", an automated process that can collect appropriate information from a variety of Internship sites automatically. Because InternBit must be tightly integrated with RadGrad, and since RadGrad is implemented in Javascript, it is desirable that the scraper use Javascript as well. So, we will investigate JS scrapers first and only contemplate scrapers in other languages (such as Python) if we cannot succeed using JS.'),Object(i.b)("h2",{id:"spike-solution-problem-specification"},"Spike solution problem specification"),Object(i.b)("p",null,"Implementing a good scraper requires answering a number of research questions, including: (1) Which javascript library to use, (2) What sites must be successfully processed by InternBit, (3) What are the search terms required for each site in order to obtain good results, and (4) Is the search effective (or just possible) without providing login credentials?"),Object(i.b)("h3",{id:"which-javascript-library"},"Which Javascript library?"),Object(i.b)("p",null,"Candidates include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/crawler"}),"Crawler")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/simplecrawler"}),"Simple Crawler")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/mechanize"}),"Mechanize")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/osmosis"}),"Osmosis")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/node-scrapers"}),"Node-Scrapers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/tatooine"}),"Tatooine")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/x-ray"}),"X-Ray")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/headless-chrome-crawler"}),"Headless Chrome Crawler"))),Object(i.b)("h3",{id:"what-sites-to-crawl"},"What sites to crawl?"),Object(i.b)("p",null,"Candidates include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"LinkedIn.com"),Object(i.b)("li",{parentName:"ul"},"Glassdoor.com"),Object(i.b)("li",{parentName:"ul"},'Google (search on "computer science internships near me" or whatever)'),Object(i.b)("li",{parentName:"ul"},"Internships.com"),Object(i.b)("li",{parentName:"ul"},"InternMatch.com, "),Object(i.b)("li",{parentName:"ul"},"YouTern.com"),Object(i.b)("li",{parentName:"ul"},"Idealist.org"),Object(i.b)("li",{parentName:"ul"},"CoolWorks.com"),Object(i.b)("li",{parentName:"ul"},"Indeed.com"),Object(i.b)("li",{parentName:"ul"},"ZipRecruiter.com"),Object(i.b)("li",{parentName:"ul"},"SimplyHired.com"),Object(i.b)("li",{parentName:"ul"},"Careershift.com"),Object(i.b)("li",{parentName:"ul"},"USAJobs.gov"),Object(i.b)("li",{parentName:"ul"},"Experience.com"),Object(i.b)("li",{parentName:"ul"},"Handshake.com"),Object(i.b)("li",{parentName:"ul"},"StudentOpportunityCenter.com"),Object(i.b)("li",{parentName:"ul"},"NSF REU Site Directory")),Object(i.b)("p",null,"It's important to scrape as many of these sites as we can, because if we only scrape one or two, then students might wonder what the benefit of InternBit actually is--they could just do that manually themselves. A significant value-added of InternBit would come from it scraping as many Internship databases as possible, so students would be spared the time of trying all of the different ones.  Even if one site has many duplicates of others, we do not know if that might change in the future. And even if there's just a couple of non-duplicate internships, those might be the good ones for at least some students. "),Object(i.b)("h3",{id:"what-search-parameters"},"What search parameters?"),Object(i.b)("p",null,'This is a complex question, since the answer depends upon two factors. First, each student has different skills and interests, which affects the parameter values.  A student interested in "data science" will want to search for that, while a student interested in "machine learning" will want to search for something different. But each site will have its own query language which also affects the way the search is done.  Searching in LinkedIn will be different from searching in Indeed.com or StudentOpportunityCenter.'),Object(i.b)("p",null,'Finally, what student should you use as your "test subject"? I suggest, for starters, use yourself!  Look at your RadGrad profile, extract your skills and interests from it, and then use that to drive your scraping queries.  You can use your own interests as an informal test of the efficiency of the process: can you build a scraper that returns results as good as you would have gotten by scraping the site by yourself?'),Object(i.b)("h3",{id:"are-credentials-required"},"Are credentials required?"),Object(i.b)("p",null,"It might be that searching a site effectively requires the student to login (and potentially set up a profile). Can InternBit, given the student's credentials, login automatically, potentially set up any profile information, and then do the search."),Object(i.b)("h3",{id:"is-there-an-api"},"Is there an API?"),Object(i.b)("p",null,"Some sites (Chegg and Indeed?) provide a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://restfulapi.net/"}),"REST API")," which avoids the need to scrape the HTML of the site to extract the information. If an API is available for a site, definitely use it instead of scraping!   "),Object(i.b)("p",null,"It looks like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/superagent"}),"superagent")," is the best Javascript package for performing API calls. Please try it if you want to process a site that has an API."),Object(i.b)("h2",{id:"implementation-approach"},"Implementation approach"),Object(i.b)("p",null,'There\'s two ways to approach the implementation of spike solutions. One approach is to pick a scraper, say "Osmosis", and then see how many sites you can crawl with it.  A second approach is to pick the most important two or three sites (say, LinkedIn, Indeed, and Google), and then figure out which scraper works best on them.  You can pick whichever way appeals to you more. (Overlap between developers is fine.)'),Object(i.b)("h3",{id:"repository-name"},"Repository name"),Object(i.b)("p",null,"You will create a new GitHub repository to hold each spike solution (you can either pick a scraper, then try to crawl a bunch of sites, or pick what you believe to be the most important sites, and play around with scrapers to see which ones work the best)."),Object(i.b)("p",null,'Each repository will have the following naming structure: internbit-scraper-(initials)-(scraper or sites). Let\'s say you are Aubrie and you want to play around with the Osmosis library. Then your repo would be named "internbit-scraper-au-osmosis". If you are Jenny and you want to explore StudentOpportunityCenter and NSF REU, then your repo would be named "internbit-scraper-jh-soc-reu". (Yes, abbreviations are permitted to prevent crazy long names.)'),Object(i.b)("h3",{id:"invoke-as-an-npm-script"},"Invoke as an npm script"),Object(i.b)("p",null,"Each system will be implemented as an npm script. So, running:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"npm run scraper\n")),Object(i.b)("p",null,"will invoke the scraper script in the package.json file, which will run your system.  You should have a json file that contains parameters.  If you need to supply credentials, you could read them as command line arguments to avoid putting them into a json file that would be committed to github. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"npm run scraper philipmjohnson foo\n")),Object(i.b)("p",null,"might log me in to Linked In, if my username was philipmjohnson and my password was foo, which it isn't."),Object(i.b)("p",null,"If you want a simple example of an npm script to get you started, here's the CSDL ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/csdl/csdl.github.io/blob/src/src/package.json#L57"}),"package.json line")," that invokes the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/csdl/csdl.github.io/blob/src/src/scripts/build-techreports.js"}),"build-techreports.js file"),". The first line is important. "),Object(i.b)("p",null,"You may want to google on 'write npm scripts' to find all sorts of tutorials. "))}p.isMDXComponent=!0}}]);