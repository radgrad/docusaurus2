---
title: Design Issues
---

We can significantly improve the utility of RadGrad to ICS students by integrating the InternAloha system.  Here are some of the design and implementation issues:

## InternAloha Design Issues

### The design of InternAloha requires "supervised" scraping

The nature of the internship database ecosystem (LinkedIn, GlassDoor, Chegg Internships, etc) requires the scraping process to be supervised by a developer. This is because:

  * Internship sites change their structure frequently, causing scrapers to break.
  * Several sites have mechanisms in place to make it difficult to perform automated scraping. We overcome this via "supervised" automated scraping.

Fortunately, we can provide useful and up to date results by running the scrapers a couple of times a month during the academic year (and less during the summer). The supervision process currently requires a couple of hours. So, providing supervised scraping is not an excessively onerous task.

### We need to improve the InternAloha scraping system

While the scraping system is currently good enough to support pilot studies, it is not yet suitable for public release for the following reasons:

* The scrapers for several important internship sites (GlassDoor, LinkedIn, Angellist) have bugs that prevent us from getting their listings.
* There are at least two important sites (Student Opportunity Center and 80000hours.org) which do not yet have InternAloha scrapers.

### Scraper Design Idea: investigate use of Chrome snippets for attended scrapers

It appears that certain sites can detect that we are using Puppeteer and thus throw up a very time-consuming set of recaptchas that we must manually solve. This makes the supervision process more time-consuming and aggravating.

As an alternative, it might be possible to:

* Login to the certain Internship sites normally, using your regular Chrome Browser.

* Invoke a "snippet" to perform the scraping rather than Puppeteer scripts. This might avoid recaptcha issues. See [6 snippets to keep in your Chrome DevTools](https://www.telerik.com/blogs/6-snippets-to-keep-in-your-chrome-devtools) and [Leverage chrome dev tools for dynamic web scraping](https://towardsdatascience.com/leverage-chrome-dev-tools-for-dynamic-web-scraping-2d3f7703ea4a), which also includes some helpful tips.

## RadGrad Design Issues

### Internships are a first-class entity

Currently, there is an OpportunityType called "internship", and there are a few Internships listed as Opportunities. As part of this integration, we should get rid of the internship OpportunityType and related Opportunities, and make Internships into a first class entity, similar to Interests, Career Goals, Courses, and Opportunities.

This is because Internships in InternAloha have a significantly different representation from Opportunities, so it doesn't make sense to try to represent both kinds of activities in a single entity.

Therefore, the integration process will involve creating a new Collection called Internship with appropriate schema, unit tests, and so forth.

We will eventually retire the Opportunities referring to Internships, and manually recreate them as needed as Internships.

### Internship Collection Schema Definition

Here is a preliminary specification of the Internship Collection Schema for review and improvement. This is an extension of the "canonical" representation of internship listings from InternAloha, with additional fields for use in RadGrad.

A "?" following the field name indicates that it is an optional field.

| Field | Type | Description |
| ----- | ---- | ----------- |
| urls | string[] | A list of URLs to the pages in the sites with a full description of this internship |
| position | string | The position name |
| description | string | Markdown format description |
| lastUploaded? | Date | Timestamp of the last time this internship was found through scraping. If the internship was added manually, then this field is absent or set to a falsy value. |
| missedUploads | Integer | A number used to indicate if the listing should be viewed as "expired" or "retired".  A value of 0-3 indicates the listing is "active". A value of 4-7 indicates it should be viewed as "expired".  A value of 8 or more indicates that it should be viewed as "retired".
| interests | string[] | A list of Interest slugIDs matching this description. |
| careerGoals | string[] | A list of Career Goal slugIDs matching this description |
| company? | string | The company |
| location? | object | An object containing location information. Format: { city?: string, state?: string, zip?: string } |
| contact? | string | Name, email, URL or other info of a contact person |
| posted? | string | The date this internship was posted. Should be YYYY-MM-DD format. Helps students determine how old it is. |
| due? | string | The deadline for applying for this internship. Should be YYYY-MM-DD format. Enables RadGrad to provide reminders. |
| guid | string | The globally unique ID. Useful for dump/restore, and for referencing an Internship document in other collections (such as the ProfileInternshipCollection. |

### Internship data import system

For now, we will continue to run the scrapers using InternAloha code and publish the resulting datafiles to GitHub.  As noted above, this is a supervised process.  We have affectionately dubbed the person who supervises the running of the scraper system the "Master of Scraping".

What will change in this integration is that the Master of Scraping will no longer be required to bring up the static InternAloha site (although they might still do it as a part of their QA activities). Instead (or in addition), they will tell the RadGrad Admin that new Internship data is available for upload, and the RadGrad Admin can then go to a "Manage Internships" page with an "Upload Data" button to perform the upload.

The Upload data button will:

**1. Upload all the json files produced by this run of InternAloha scrapers.**

Each json file contains an array of listings detected by a single scraper for a single Internship site. We will need to provide RadGrad with the list of URLs corresponding to these JSON files. This could be in settings.production.json, or (better) in a file in private/internaloha/scraper.urls.txt (one URL per line).

**2. Detect and consolidate duplicates.**

The Internship sites we are scraping are themselves scraping each other, so there will definitely be a significant number of duplicate listings in the upload. RadGrad will handle this by "consolidating" listings. This means that RadGrad will provide only a single entry for all of the duplicates, but the "urls" field will contain a list of all the site pages where this internship is listed.

**3. Assign Interests and Career Goals (if any). **

The InternAloha system currently parses the internship title and description and attempts to extract "skill" keywords that can be used by users to filter and search the set of listings.

For this integration with RadGrad, this parsing process will become the responsibility of the RadGrad upload system. The goal of the parsing is to identify matching Interests and Career Goals and assign these slugs to the listing.

Note that the InternAloha system's parsing code provides useful implementation approaches which can be adapted to our needs.  

**4. Detect "expired" and "retired" Internship listings.**

We must detect and manage "expired" Internships. These are Internships that were present at one or more Internship sites for a period of time, and but are no longer listed (typically because the Internship positions were filled and/or because the internship is now in progress). One way we can do this is by maintaining an optional field called "lastUploaded" with a timestamp, along with an integer field called "missedUploads".

Each time we upload an Internship listing, we check to see if it's already in the database (by looking for a duplicate).  If it's already in the database, then we update the lastUploaded timestamp and set missedUploads to 0.  After all listings are uploaded, we do a pass through all of the listings, checking for listings with a lastUploaded timestamp (indicating that the listing was scraped and not manually entered), and where the timestamp is not the current day.  If both of those are true, we increment the missedUploads field by 1.  Once missedUploads exceeds a certain threshold value (say, 4), this indicates that the listing is "expired".

We can't know for sure that an expired listing is truly gone, but this approach provides strong evidence. So, by default, the Internships page should show only the listings whose missedUploads field is less than 4. The page can include a radio button to toggle between "Only active" and "Active & Expired" if students want to see the listings that we think are probably no longer available.

Once missedUploads exceeds a second threshold (say, 8) this indicates that the listing is "retired". and it will no longer appear in the UI listings regardless of the setting of the toggle.

For manually managed listings, we can manually set missedUploads to 4 to indicate that the listing should be marked as expired, and to 8 to set it to retired.

For API consistency, the Internships.findNonRetired() method will return all non-expired and non-retired listings.


**5. Filter out non-useful Internship listings.**

The upload process should make the follow checks on listings to ensure they are useful:

* Ensure the urls field strings can be used to retrieve a page. We know from our pilot study of InternAloha that the scrapers sometimes list non-working URLs. Each time we do an upload, we should check all of the urls field strings to see that a GET on the URL string returns the 200 "OK success" status response code.  If it doesn't, we remove that URL from the urls field. If there are no remaining strings in the urls field after checking them, then we can set the missedUploads field to 8 in order to mark it as retired.

* Ensure that the listing includes at least one Interest and/or Career Goal. If the listing does not match at least one of the defined Interests and Career Goals, then it is not useful to RadGrad. In this case, we can set missedUploads to 8 to mark it as retired.

**6. Report on the results of the upload.**

This involves both a report on the number of listings uploaded and any problems encountered, as well as an updated version of the "trends" chart created for InternAloha that allows developers to see whether a scraper is suddenly producing a significantly different number of listings (or fields within a listing).  Such sudden changes can indicate that the scraper is "partially broken", i.e. it works well enough to generate listings, but is no longer parsing a single listing accurately.

### Internship listings will need an automatically generated GUID ("global unique ID").

To support dump/restore, and for cross-document referencing, many RadGrad collections require each document to have a GUID (globally unique ID). Typically, we implement this using the "Slug" mechanism.  Unfortunately, there are the following issues with using Slugs for Internships:

  * Slugs are usually manually defined by a user.  This won't work for Internships, where there are too many documents for manual slug definition.

  * There will be thousands of Internships. If each Internship defines a Slug, the size of the Slug collection will grow enormously, impacting on load time.

One solution is to not use Slugs as the GUID for Internships, but instead to implement a special-purpose, automatically generated, unique ID naming system. For example, `internship-<internship title>-<YYYY-MM-DD-HH-MM-SS-MSS>`, where:

* The "internship title" is the title field with spaces replaced by hyphens and all non-alphabetic, non-integer characters removed. We cannot count on the internship title to be unique.
* YYYY-MM-DD-HH-MM-SS-MSS is the moment in time that this new Internship document was defined. Since we expect Internship definition to take longer than a single millisecond, we believe that the combination of the internship title, along with timestamp, will guarantee that this ID is a unique string.

We will call this field "guid" (for globally unique ID).

### Manual Internship definition

Not all Internships that we will want to provide to RadGrad users will be known from scraping. There will be "one off" internships that we become aware of by email or other sources.

To support the integration of those internships into RadGrad, we will need to provide the ability to manually define new Internships just like we currently manually define new Opportunities.

The GUID will be automatically generated at time of creation.

The lastUpdated field is empty or missing, which indicates that this is a manually managed Internship.  Manually managed Internships can still be marked as expired or retired by setting the missedUploads field to an appropriate number.

### Manual Internship Editing

As part of the Admin Data Model menu, it will be possible for an Admin to edit Internship specifications. However, care must be taken since editing fields (like the title or description) could result in a duplicate listing not being identified.

### The "Internships" Explorer for students

The Student UI will include an Explorer for Internships. This Explorer will have a similar UI to the other explorers, in that it will have a summary (browser view) as well as a details page where you can see all of the information about the Internship and add it to your profile.

It differs from the current Explorers for Courses, Opportunities, Career Goals, and Interests, because the number of these entities range from a few dozen to a few hundred, while we expect there be at least a few thousand Internships.

So, the Internships Explorer Browser View will only list "matching" Internships for a student, where matching is based on their Interests and Career Goals.

Student can add "matching" Internships to their profile, and then plan to do them by adding them to their Degree Plan, just like they do for Courses and Opportunities.

Internships must be verified, just like Opportunities, in order for the student to earn the points associated with them.

### "Related Internships" page component

It might be nice for the details page for other entities to have a Related Internships component (similar to Related Courses and Related Opportunities).

A design problem with this component is that there is the potential for several hundred "related" Internships for a popular Interest (i.e. data science).  We can't simply display every single one the way we do for other entities.

One possibility is to cap the number of Internships to display in this component at 10, and if there are more than 10 matches, have the component title be "(Selected) Related Internships".

### Client-server communication issues

It is currently an open question about how the server will communicate with the client about Internship documents. On the one hand, we expect there to be between 2000 and 5000 active internships in the Internship collection. So, there is the potential for a significant one-time performance penalty if students simply subscribe to the entire collection (which is a reasonable strategy for other entities, which generally contain only a few dozen to a few hundred documents).

There are at least the following alternatives:

  * Use standard pub/sub anyway.  As noted above, this will probably cause a several second wait for every student upon login, regardless of whether they are interested in Internships. The benefit is that once the Internship collection is available locally, all subsequent UI display can happen quickly.

  * Use Meteor Methods. An alternative is to not have an Internship collection on the client side, and instead use Meteor Methods to retrieve Internship data as needed. This avoids the login overhead, at the cost of the Meteor Method overhead each time the student retrieves a page that wishes to display Internship data. These pages include: the Internship Browser View, Details View, the Degree Planner, Visibility, and any page that implements a "Related Internships" component,

  * Hybrd approach. It might be possible to subscribe to a smaller number of Internships, for example, the Internships matching the student's Career Goals and Interests. If this number is small, then we can avoid Meteor Methods for the Browser View, Details View, and Degree Planner. We would still need to use a Meteor Method to retrieve Internships associated with a Related Internships component.

An open design question is how to specify the ICE points for an Internship. We should have some sort of default ICE point specification (perhaps 25 Innovation and 25 Experience?  This is much higher than what we do now, but maybe we want to value Internships more highly?).

## Internships in RadGrad 3.0

RadGrad 3.0 will provide (among other things) a plugin system so that sites can enable or disable certain features. Internships will be a test case for this feature.
