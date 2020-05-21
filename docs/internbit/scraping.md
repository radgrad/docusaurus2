---
title: Scraping (Spike Solutions)
sidebar_label: Scraping
---

One component of InternBit is a "crawler", an automated process that can collect appropriate information from a variety of Internship sites automatically. Because InternBit must be tightly integrated with RadGrad, and since RadGrad is implemented in Javascript, it is desirable that the crawler use Javascript as well. So, we will investigate JS crawlers first and only contemplate crawlers in other languages (such as Python) if we cannot succeed using JS.  

## Spike solution problem specification 

Implementing a good crawler requires answering a number of research questions:

1. What is the appropriate Javascript library for web crawling?  Candidates include:

  * [Crawler](https://www.npmjs.com/package/crawler)
  * [Simple Crawler](https://www.npmjs.com/package/simplecrawler)
  * [Mechanize](https://www.npmjs.com/package/mechanize)
  * [Osmosis](https://www.npmjs.com/package/osmosis)
  * [Node-Scrapers](https://www.npmjs.com/package/node-scrapers)
  * [Tatooine](https://www.npmjs.com/package/tatooine)
  * [X-Ray](https://www.npmjs.com/package/x-ray)
  * [Headless Chrome Crawler](https://www.npmjs.com/package/headless-chrome-crawler)
  
2. What sites can we crawl? Candidates include:

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
  
3. What parameters must be provided to obtain appropriate results? 

This is a complex question, since the answer depends upon two factors. First, each student has different skills and interests, which affects the parameter values.  A student interested in "data science" will want to search for that, while a student interested in "machine learning" will want to search for something different. But each site will have its own query language which also affects the way the search is done.  Searching in LinkedIn will be different from searching in Indeed.com or StudentOpportunityCenter.

Finally, what student should you use as your "test subject"? I suggest, for starters, use yourself!  Look at your RadGrad profile, extract your skills and interests from it, and then use that to drive your scraping queries.  You can use your own interests as an informal test of the efficiency of the process: can you build a scraper that returns results as good as you would have gotten by scraping the site by yourself?

4. Are credentials required? 

It might be that searching a site effectively requires the student to login (and potentially set up a profile). Can InternBit, given the student's credentials, login automatically, potentially set up any profile information, and then do the search.

5. What is the best way to search the space of crawler-site combinations? 

One approach is to pick a crawler, say "Osmosis", and then see how many sites you can crawl with it. 

A second approach is to pick the most important two or three sites (say, LinkedIn, Indeed, and Google), and then figure out which crawler works best on them.  

## Implementation approach

### Repository name
You will create a repository to hold each spike solution (you can either pick a crawler, then try to crawl a bunch of sites, or pick what you believe to be the most important sites, and play around with crawlers to see which ones work the best). 

Each repository will have the following naming structure: internbit-crawler-(initials)-(crawler or sites). Let's say you are Aubrie and you want to play around with the Osmosis library. Then your repo would be named "internbit-crawler-au-osmosis". If you are Jenny and you want to explore StudentOpportunityCenter and NSF REU, then your repo would be named "internbit-crawler-jh-soc-reu". (Yes, abbreviations are permitted to prevent crazy long names.)

### Invoke as an npm script

Each system will be implemented as an npm script. So, running:

```
npm run crawler
```

will invoke the crawler script in the package.json file, which will run your system.  You should have a json file that contains parameters.  If you need to supply credentials, you could read them as command line arguments to avoid putting them into a json file that would be committed to github. For example:

```
npm run crawler philipmmjohnson foo
```

might log me in to Linked In, if my password was foo, which it isn't.

If you want a simple example of an npm script to get you started, here's the CSDL [package.json line](https://github.com/csdl/csdl.github.io/blob/src/src/package.json#L57) that invokes the [build-techreports.js file](https://github.com/csdl/csdl.github.io/blob/src/src/scripts/build-techreports.js). The first line is important. 

You may want to google on 'write npm scripts' to find all sorts of tutorials. 


### Assign the issue to yourself

There is 


