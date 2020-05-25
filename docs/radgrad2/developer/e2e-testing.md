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

## Run RadGrad2 with known database

