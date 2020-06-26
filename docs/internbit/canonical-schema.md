---
title: Canonical Schema
sidebar_label: Canonical Schema
---

Each internship opportunity is represented as a JSON object. The following table provides a "canonical schema" defining the fields.

| Name | Type |  Description |
|:----|------|:--------------|
| position | String | Title of internship |
| company | String | Company Name |
| location | Object | { city: String, state: String, country: String, zip: String } |
| posted | Date | When the internship was posted |
| due | Date | Due date for applying |
| start | Date | Start date of internship |
| end | Date | End date of internship |
| compensation | String | "paid", "unpaid", "$20/hour", etc. |
| qualifications | String | What the applicant should have to apply. |
| url | URL | Link to posting with full details|
| skills | Array | Strings. At some point, the set of skills should be canonicalized |
| lastScraped | Date | Most recent discovery of this posting |
| description | String | Textual description of internship |

All of the fields are optional. If you can't determine a value, then omit the field.

The "Date" type indicates a string that can be passed to the Date constructor to return a Date object. Examples of possible Date strings include "2020-01-12", "December 17, 1995 03:24:00", and "1995-12-17T03:24:00".

Here is an example JSON object illustrating an internship opportunity using this representation:

```js
{
  "position": "Intern – Software Development/Computer Science",
  "company": "CCAM",
  "location": { "city": "Prince George", "state": "VA" },
  "posted": "2020-05-01",
  "due": "2020-08-09",
  "url": "https://www.internships.com/app/job/sam_3487135465?context=search",
  "qualifications": "Applicants must be U.S. citizens enrolled in an accredited school with a cumulative GPA of 3.0 or higher.",
  "lastScraped": "2020-06-01T09:28:56.321-10:00",
  "description": "The Software Development / Computer Science Intern will support CCAM’s research programs, helping to ensure that they are delivered on time and on budget to a high standard of quality. In this position you may develop software for embedded systems, and industrial controllers, and create communication interfaces and adapters for machines and robots."
}
```

Please store your JSON objects in a file following the naming convention ``[site name].canonical.data.json``. The file contents must be in a format amenable to JSON.parse().
