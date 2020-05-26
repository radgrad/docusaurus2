---
title: End-to-End Testing
sidebar_label: e2e Testing
---
In RadGrad2 we are using [TestCafe](https://devexpress.github.io/testcafe/) a node.js tool to automate end-to-end web testing. We added `testcafe` as a dev dependency in the [package.json](https://github.com/radgrad/radgrad2/blob/master/app/package.json#L114) file.

## Identifying UI 'components'

To test the RadGrad2 app we need to be able to select the UI components. We've created ids for each of the components we want to test. We define and export the ids so there aren't typo errors. The exported ids are in a typescript file named `e2e-names.ts`. The directory structure will look like:
```
app/
   ui/
     components/
               admin/
                    e2e-names.ts
                    e2e-selectors.ts
               advisor/
                      e2e-names.ts
                      e2e-selectors.ts
               faculty/
                      e2e-names.ts
                      e2e-selectors.ts
               mentor/
                     e2e-names.ts
                     e2e-selectors.ts
               shared/
                     e2e-names.ts
                     e2e-selectors.ts
               student/
                      e2e-names.ts
                      e2e-selectors.ts
     pages/
          admin/
               e2e-names.ts
               e2e-selectors.ts
          advisor/
                 e2e-names.ts
                 e2e-selectors.ts
          faculty/
                 e2e-names.ts
                 e2e-selectors.ts
          mentor/
                e2e-names.ts
                e2e-selectors.ts
          shared/
                e2e-names.ts
                e2e-selectors.ts
          student/
                 e2e-names.ts
                 e2e-selectors.ts
```
 
 
 For example:
```tsx
// In ui/components/shared/e2e-names.ts
export const helpPanelWidget = 'helpPanelWidget';
...

// In HelpPanelWidget.tsx
...
  return (helpMessage) ? (
    <Grid.Column id={`${helpPanelWidget}`}>
...
``` 
Now we have a way of accessing the `HelpPanelWidget` using TestCafe selectors. For example, we defined two `HelpPanelWidget` selectors.
 * One for the title, so we can check for correct titles.
 * Two for the accordion, so we can open it and check for correct contents, then close it.
 
These selectors are exported from a file named `e2e-selectors.ts`.
 
```ts
// In ui/components/shared/e2e-selectors.ts
import { helpPanelWidget } from './e2e-names';
...
export const helpTitleSelector = Selector(`#${helpPanelWidget} .ui.floating.info.message .title`);
export const helpAccordionSelector = Selector(`#${helpPanelWidget} .ui.floating.info.message`).child('.accordion');
```

Currently, we don't have end-to-end tests for all the pages, widgets, and components. Hopefully, we will continue to write the missing end-to-end tests.

## Writing TestCafe tests

### Adding a new UI 'component' id
When we want add a new test for a component, we need to do several things.

  1. Create an id for the component if it doesn't already have one. Ids are the camelcase names for the component. For example, the id for the FilterCourseWidget is `filterCourseWidget`. We export the id from the `e2e-names.ts` file in the directory of the component.
```ts
// In ui/components/shared/e2e-names.ts
export const courseFilterWidget = 'courseFilterWidget';
```
  
  2. Add the id to the component.
```tsx
// In ui/components/shared/CourseFilterWidget.tsx
import { courseFilterWidget } from './e2e-names';
...
  return (
    <div id={courseFilterWidget}>
...
```
  
  3. Create one or more TestCafe selectors for the component. We export the selector from the `e2e-selectors.ts` file in the same directory as the component.
```ts
// In ui/components/shared/e2e-selectors.ts
import { courseFilterWidget } from './e2e-names';
...
export const courseFilterWidgetChoicesSelector = Selector('.ui.radio.checkbox');
export const courseFilterWidgetAllChoiceSelector = courseFilterWidgetChoicesSelector.withText('All');
export const courseFilterWidget300PlusChoiceSelector = courseFilterWidgetChoicesSelector.withText('300+');
export const courseFilterWidget400PlusChoiceSelector = courseFilterWidgetChoicesSelector.withText('400+');
export const courseFilterWidget600PlusChoiceSelector = courseFilterWidgetChoicesSelector.withText('600+');

```

  4. Use the selectors in a test.
```ts
test('Course Explorer Page Filter', async (browser: any) => {
  await browser.click('#abi'); // choose student Abigail
  await browser.click(student2ndMenuExplorerPageSelector); // go to the Explorer page
  await browser.click(selectExplorerMenuSelector); // got to open the menu before selecting the choice
  await browser.click(coursesExplorerSelector); // go to the Course Explorer
  await browser.expect(cardExplorerWidgetTitleSelector.textContent).contains('COURSES');
  await browser.click(courseFilterWidget300PlusChoiceSelector); // select the 300+ courses
  await browser.expect(cardExplorerWidgetCardSelector.nth(1).child('.content').child('.header').textContent).contains('Machine-Level'); // ensure the second card is 312
  await browser.click(courseFilterWidget400PlusChoiceSelector); // select the 400+
  await browser.expect(cardExplorerWidgetCardSelector.nth(1).child('.content').child('.header').textContent).contains('ICS 419'); // check the correct class
  await browser.click(courseFilterWidget600PlusChoiceSelector); // select 600+
  await browser.expect(cardExplorerWidgetCardSelector.count).eql(0); // there are no 600+ courses for Abi
  await browser.click(courseFilterWidgetAllChoiceSelector); // select All filter
  await browser.expect(cardExplorerWidgetCardSelector.nth(1).child('.content').child('.header').textContent).contains('ICS 101'); // check the right course
});
```
## Run RadGrad2 with known database

