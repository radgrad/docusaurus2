---
title: Overview of the Data Model Pages
sidebar_label: Data Model
---

There are 16 data model pages.

 * Academic Terms
 * Academic Year Instances
 * Career Goals
 * Course Instances
 * Courses
 * Feeds
 * Interests
 * Interest Types
 * Opportunities
 * Opportunity Types
 * Reviews
 * Slugs
 * Teasers
 * Users
 * Verification Requests

Each page has 3 components, an add form, the list of items, and an update form. RadGrad displays only one form and the list of items at a time. Initially we display the add form and the list. When you select an item from the list and click the update button RadGrad displays the update form.

## Add Form

The add form allows you to add new documents. For example here's the Interests Add Form.
<img src="/img/user-guide/admin/data-model-interests-add.png" />

You can enter the new Interest's name, type and description. When you click add, RadGrad adds a new Interest. Interest names must be unique.

The next section of the data model page is the item list.

## Item List

The item list lists all the defined items.

Here is an example of the Interests item list. At the top of the list is the pagination control. You can move through the items in the collection and update the number of items shown. Each row in the list is an accordion. The title indicates the name of the item. If the item has a slug the title shows the slug in parentheses.

<img src="/img/user-guide/admin/data-model-interests-list.png" />

Clicking on an item opens the accordion.

<img src="/img/user-guide/admin/data-model-interests-open.png" />

If you want to delete the item, click the Delete button. To update the item click the Update button. Clicking the Update button opens the Update form.

## Update Form

The update form allows you to change some fields of the item. You can't update all the fields, e.g. Slugs.

<img src="/img/user-guide/admin/data-model-interests-update.png" />

After you make your changes, click the Update button to update the item. If you click Cancel, RadGrad closes the update form and reopens the add form.

**Note:** Retired items are not published to Advisors, Faculty, and Students.
