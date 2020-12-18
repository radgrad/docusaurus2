---
title: How to update the data model UI
sidebar_label: Update the data model UI
---

There are several steps involved in adding a new DataModel item to the admin interface. These steps can be done in any order, but you may want to slowly build up the page and test it as you are adding the new DataModel item.

* Create a new admin DataModel route in `app/imports/startup/client/router.js`

  1. Export the name of your new route. For this example we are adding the UI for MentorAnswers. 

         export const adminDataModelMentorAnswersPageRouteName = 'Admin_DataModel_Mentor_Answers_Page';

  2. Add the route to the FlowRouter admin route group.

         adminRoutes.route('/datamodel/mentor-answers', {
           name: adminDataModelMentorAnswersPageRouteName,
           action() {
             BlazeLayout.render('Admin_Layout', { main: adminDataModelMentorAnswersPageRouteName });
           },
         });

* Update `app/imports/ui/components/admin/admin-datamodel-menu.html` to include a link to the DataModel Blaze Template page.

         <a class="{{isActiveRoute mentorAnswerRouteName}} item" href="{{pathFor mentorAnswerRouteName username=routeUserName}}">Mentor Answers</a>


* Update `app/imports/ui/components/admin/admin-datamodel-menu.js` helper to include a helper for the new route.

         mentorAnswerRouteName() {
           return RouteNames.adminDataModelMentorAnswersPageRouteName;
         },


* Create the DataModel Blaze Template page in `app/inports/ui/pages/admin`. The name of the page must be the same as the exported page route name. In this example, `Admin_DataModel_Mentor_Answers_Page`.  

  * The `Admin_DataModel_Mentor_Answers_Page.html` will look something like:
  
         <template name="Admin_DataModel_Mentor_Answers_Page">
         
           {{#if Template.subscriptionsReady}}
             {{#Admin_DataModel_Layout}}
               {{#if displayUpdateWidget}}
                 {{> Update_Mentor_Answer_Widget updateID=updateID}}
               {{else}}
                 {{> Add_Mentor_Answer_Widget }}
               {{/if}}
               {{> List_Mentor_Answers_Widget updateID=updateID}}
             {{/Admin_DataModel_Layout}}
           {{else}}
             {{> Loading message="Waiting for subscriptions."}}
           {{/if}}
         
         </template>

  * The `Admin_DataModel_Mentor_Answers_Page.js` will look something like:
  
         import { Template } from 'meteor/templating';
         import { ReactiveVar } from 'meteor/reactive-var';
         
         Template.Admin_DataModel_Mentor_Answers_Page.helpers({
           updateID() {
             return Template.instance().updateID;
           },
           displayUpdateWidget() {
             return Template.instance().updateID.get();
           },
         });
         
         Template.Admin_DataModel_Mentor_Answers_Page.onCreated(function adminDatamodelMentorAnswerPageOnCreated() {
           this.updateID = new ReactiveVar('');
         });


* Create the List_Mentor_Answer_Widget in `app/imports/ui/components/admin`.

* Create the Add_Mentor_Answer_Widget in `app/imports/ui/components/admin`.

* Create the Update_Mentor_Answer_Widget in `app/imports/ui/components/admin`.

