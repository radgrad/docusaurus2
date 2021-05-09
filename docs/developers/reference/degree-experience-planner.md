---
title: Degree Experience Planner Reference Guide
sidebar_label: Degree Experience Planner
---

The following is a quick reference to the StudentDegreePlannerPage.

## Sticky State

We are using three `StickyState` variables to share state across the Degree Experience Planner components. The three state names are defined in the `DegreePlannerStateNames` enum.

```typescript jsx
export enum DegreePlannerStateNames {
  selectedCiID = 'Planner.selectedCiID',
  selectedOiID = 'Planner.selectedOiID',
  selectedProfileTab = 'Planner.selectedProfileTab',
}
```
### StudentDegreePlannerPage

The [`StudentDegreePlannerPage.tsx`](https://github.com/radgrad/radgrad2/blob/master/app/imports/ui/pages/student/StudentDegreePlannerPage.tsx) just uses the set methods. It doesn't actually care what the state values are.
```typescript jsx
  const [, setSelectedCiID] = useStickyState(DegreePlannerStateNames.selectedCiID, '');
  const [, setSelectedOiID] = useStickyState(DegreePlannerStateNames.selectedOiID, '');
  const [, setSelectedProfileTab] = useStickyState(DegreePlannerStateNames.selectedProfileTab, '');
```
We pass these set methods are passed into the `onDragEnd` method by using a higher order method.
```typescript jsx
const onDragEnd = (onDragEndProps) => (result) => {
  const { match, setSelectedCiID, setSelectedOiID, setSelectedProfileTab } = onDragEndProps;
...
}
```
We use the `setSelectedCiID`, `setSelectedOiID`, and `setSelectedProfileTab` in the onDragEnd method to tell the `TabbedProfileEntries.tsx` what to display.

### DegreeExperiencePlanner

The [`DegreeExperiencePlanner`](https://github.com/radgrad/radgrad2/blob/master/app/imports/ui/components/student/degree-planner/DegreeExperiencePlanner.tsx) also uses the StickyState set methods to tell the [`TabbedProfileEntries`](https://github.com/radgrad/radgrad2/blob/master/app/imports/ui/components/student/degree-planner/TabbedProfileEntries.tsx) what is selected.
```typescript jsx
  const [, setSelectedCiID] = useStickyState(DegreePlannerStateNames.selectedCiID, '');
  const [, setSelectedOiID] = useStickyState(DegreePlannerStateNames.selectedOiID, '');
  const [, setSelectedProfileTab] = useStickyState(DegreePlannerStateNames.selectedProfileTab, '');
```

### TabbedProfileEntries

The `TabbedProfileEntries` defines the names of the individual tabs in an exported enum `TabbedProfileEntryNames`.
```typescript jsx
export enum TabbedProfileEntryNames {
  profileCourses = 'PROFILE_COURSES',
  profileOpportunities = 'PROFILE_OPPORTUNITIES',
  profileDetails = 'PROFILE_DETAILS',
}
```
It only cares about the selected tab state.
```typescript jsx
  const [selectedTab, setSelectedTab] = useStickyState(DegreePlannerStateNames.selectedProfileTab, TabbedProfileEntryNames.profileOpportunities);
```
When the student clicks on a tab we use the `setSelectedTab` method to update the selectedTab.

### DepDetailsCard

Uses the `selectedCourse` and `selectedOpportunity` state to decide what to show.
```typescript jsx
  const [selectedCourse] = useStickyState(DegreePlannerStateNames.selectedCiID, '');
  const [selectedOpportunity] = useStickyState(DegreePlannerStateNames.selectedOiID, '');
  const courseP = selectedCourse !== '';
  ...
  return courseP ? <DetailCourseCard instance={instance as CourseInstance} /> : <DetailOpportunityCard instance={instance as OpportunityInstance} verificationRequests={verificationRequests} />;
```

## Drag and Drop

We are using [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) for our drag and drop needs.

### StudentDegreePlannerPage

The [`StudentDegreePlannerPage`](https://github.com/radgrad/radgrad2/blob/master/app/imports/ui/pages/student/StudentDegreePlannerPage.tsx) wraps the entire page in a `DragDropContext`.
```typescript jsx
return (
  <DragDropContext onDragEnd={onDragEnd(onDragEndProps)}>
    ...
  </DragDropContext>
);
```
The `onDragEnd` is our higher order function that passes in the sticky state set methods. By wrapping the entire page in the `DragDropContext`, we can drag items between the different components on the page. The `onDragEnd` method handles all the drop events. It stops the students from doing incorrect things to their degree plan. It creates the CourseInstances and OpportunityInstances on a valid drop. See [onDragEnd](https://github.com/radgrad/radgrad2/blob/4cfa592af7f2207d6b3ef44c789fe3ffbc14f0a4/app/imports/ui/pages/student/StudentDegreePlannerPage.tsx#L57-L181) for the current code.

### AcademicTermView

The [`AcademicTermView`](https://github.com/radgrad/radgrad2/blob/master/app/imports/ui/components/student/degree-planner/AcademicTermView.tsx) defines the `Droppable` that allow students to drop course or opportunities into an academic term.
```typescript jsx
<Droppable droppableId={`${termSlug}`}>
  {(provided, snapshot) => (
    <div ref={provided.innerRef} style={getDroppableListStyle(snapshot.isDraggingOver)}>
      {courseInstancesToShow.map((ci, index) => (
        <DraggableCourseInstancePill key={ci._id} instance={ci} index={index} inPast={inPast}
                                     handleClickCourseInstance={handleClickCourseInstance} />
      ))}
      {opportunityInstancesToShow.map((oi, index) => (
        <DraggableOpportunityInstancePill key={oi._id} instance={oi}
                                          index={courseInstancesToShow.length + index}
                                          handleClickOpportunityInstance={handleClickOpportunityInstance} />
      ))}
      {provided.placeholder}
      <Icon name="plus circle" color="grey" /> Drag Here
    </div>
  )}
</Droppable>
```

### DraggableCourseInstancePill and DraggableOpportunityInstancePill

The [DraggableCourseInstancePill](https://github.com/radgrad/radgrad2/blob/master/app/imports/ui/components/student/degree-planner/DraggableCourseInstancePill.tsx) and [DraggableOpportunityInstancePill](https://github.com/radgrad/radgrad2/blob/master/app/imports/ui/components/student/degree-planner/DraggableOpportunityInstancePill.tsx) define the `Draggable` elements.
```typescript jsx
<Draggable key={instance._id} draggableId={instance._id} index={index}>
  {(prov, snap) => (
    <div ref={prov.innerRef} {...prov.draggableProps} {...prov.dragHandleProps} style={getDraggablePillStyle(snap.isDragging, prov.draggableProps.style)}>
      <Grid>
        <Grid.Row style={{ paddingTop: 7, paddingBottom: 7 }}>
          <Grid.Column width={13} onClick={handleClick(instance, handleClickCourseInstance)}>
            <NamePill name={instance.note} />
          </Grid.Column>
          <Grid.Column width={2}>{inPast ? '' : <RemoveItWidget collectionName="CourseInstanceCollection" id={instance._id} name={getName(instance)} courseNumber={instance.note} />}</Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )}
</Draggable>
```
