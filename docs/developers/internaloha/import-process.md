---
title: Current Import Process
sidebar_label: Import Process
---

RadGrad administrators can use the Manage Internships page to import internships from InterAloha.

![](/img/internships/manage-internships.png)

The 'Delete Internships' button removes all the currently defined internship documents.

The 'Upload Internships' button starts the process of getting the internships from InternAloha.
1. We increment the missed upload count for each defined internship. (This might be obsolete)
2. We start the process of getting the internships by calling `processInternAlohaInternships`. `processInternAlohaInternships` is located in `imports/api/internship/import/process-canonical.ts`.
   1. We get all the internships by looping over the internAlohaUrls in `settings.ics.development.json` file.
   2. We then loop over all the internships:
      * removing any HTML from the description
      * adding interests based upon the Interest Keyword mappings. See the `imports/api/interest/InterestKeywordCollection.ts`.
      * updating the internship location.
   3. Then we filter out any internships without any interests.
   4. Then we collapse the duplicate internships we find from different sites into a single internship with multiple URLs.
   5. We then add a GUID to the internship. Our GUIDs are of the format `internship-${internship.company}_${internship.position}_${internship.description.length}`. This might be redundant because the `Internship.define` method ignores the GUID.
   6. Then we create a map `interestsMap` of Interest slugs to array of internships with that interest.
   7. We loop until we get the `Meteor.settings.public.internshipCountLimit.import` internships.
      * In the loop we loop over each of the interests in `interestsMap` adding the first internship to the list of internships. We ignore duplicates and if we've used all the internships for an interest we move on to the next interest.
3. We set the list of internships to define to the results.

The 'Define Internships' button starts the process of looping over the imported internships and calling `defineMethod` for the InternshipCollection. If there are duplicate GUIDs, there will be fewer than `Meteor.settings.public.internshipCountLimit.import` defined internships.
