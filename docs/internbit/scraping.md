---
title: Scraping (Spike Solutions)
sidebar_label: Scraping
---

One component of InternBit is a "scraper", an automated process that can collect appropriate information from a variety of Internship sites automatically. Because InternBit must be tightly integrated with RadGrad, and since RadGrad is implemented in Javascript, it is desirable that the scraper use Javascript as well. So, we will investigate JS scrapers first and only contemplate scrapers in other languages (such as Python) if we cannot succeed using JS.

## Spike solution problem specification 

Implementing a good scraper requires answering a number of research questions, including: (1) Which javascript library to use, (2) What sites must be successfully processed by InternBit, (3) What are the search terms required for each site in order to obtain good results, and (4) Is the search effective (or just possible) without providing login credentials?

### Which Javascript library?

Candidates include:

  * [Crawler](https://www.npmjs.com/package/crawler)
  * [Simple Crawler](https://www.npmjs.com/package/simplecrawler)
  * [Mechanize](https://www.npmjs.com/package/mechanize)
  * [Osmosis](https://www.npmjs.com/package/osmosis)
  * [Node-Scrapers](https://www.npmjs.com/package/node-scrapers)
  * [Tatooine](https://www.npmjs.com/package/tatooine)
  * [X-Ray](https://www.npmjs.com/package/x-ray)
  * [Headless Chrome Crawler](https://www.npmjs.com/package/headless-chrome-crawler)
  
### What sites to crawl?

Candidates include:

  * LinkedIn.com
  * Glassdoor.com
  * Google (search on "computer science internships near me" or whatever)
  * Internships.com
  * InternMatch.com, 
  * YouTern.com
  * Idealist.org
  * CoolWorks.com
  * Indeed.com
  * ZipRecruiter.com
  * SimplyHired.com
  * Careershift.com
  * USAJobs.gov
  * Experience.com
  * Handshake.com
  * StudentOpportunityCenter.com
  * NSF REU Site Directory
  
### What search parameters?

This is a complex question, since the answer depends upon two factors. First, each student has different skills and interests, which affects the parameter values.  A student interested in "data science" will want to search for that, while a student interested in "machine learning" will want to search for something different. But each site will have its own query language which also affects the way the search is done.  Searching in LinkedIn will be different from searching in Indeed.com or StudentOpportunityCenter.

Finally, what student should you use as your "test subject"? I suggest, for starters, use yourself!  Look at your RadGrad profile, extract your skills and interests from it, and then use that to drive your scraping queries.  You can use your own interests as an informal test of the efficiency of the process: can you build a scraper that returns results as good as you would have gotten by scraping the site by yourself?

### Are credentials required?

It might be that searching a site effectively requires the student to login (and potentially set up a profile). Can InternBit, given the student's credentials, login automatically, potentially set up any profile information, and then do the search.

## Implementation approach

There's two ways to approach the implementation of spike solutions. One approach is to pick a scraper, say "Osmosis", and then see how many sites you can crawl with it.  A second approach is to pick the most important two or three sites (say, LinkedIn, Indeed, and Google), and then figure out which scraper works best on them.  You can pick whichever way appeals to you more. (Overlap between developers is fine.)


### Repository name

You will create a new GitHub repository to hold each spike solution (you can either pick a scraper, then try to crawl a bunch of sites, or pick what you believe to be the most important sites, and play around with scrapers to see which ones work the best).

Each repository will have the following naming structure: internbit-scraper-(initials)-(scraper or sites). Let's say you are Aubrie and you want to play around with the Osmosis library. Then your repo would be named "internbit-scraper-au-osmosis". If you are Jenny and you want to explore StudentOpportunityCenter and NSF REU, then your repo would be named "internbit-scraper-jh-soc-reu". (Yes, abbreviations are permitted to prevent crazy long names.)

### Invoke as an npm script

Each system will be implemented as an npm script. So, running:

```
npm run scraper
```

will invoke the scraper script in the package.json file, which will run your system.  You should have a json file that contains parameters.  If you need to supply credentials, you could read them as command line arguments to avoid putting them into a json file that would be committed to github. For example:

```
npm run scraper philipmjohnson foo
```

might log me in to Linked In, if my username was philipmjohnson and my password was foo, which it isn't.

If you want a simple example of an npm script to get you started, here's the CSDL [package.json line](https://github.com/csdl/csdl.github.io/blob/src/src/package.json#L57) that invokes the [build-techreports.js file](https://github.com/csdl/csdl.github.io/blob/src/src/scripts/build-techreports.js). The first line is important. 

You may want to google on 'write npm scripts' to find all sorts of tutorials. 


