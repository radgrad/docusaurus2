---
title: Updating Entity Doc
---

## Problem

We want a form for the user to update an entity in one of our Collections.

Currently, we have several solutions: `UpdateUserForm.tsx`, `EditReviewButton.tsx`, `EditStudentButton.tsx`, etc.

They all use different solutions to allow us to update the entities. Some work better than others. Some don't work at
all.

## Solution

We're going to demonstrate our solution using the `EditOpportunityButton.tsx`
The button pops up a Modal dialog box.

<img src="/img/patterns/edit-opportunity-modal.png" />

The `EditOpportunityButton` takes five parameters.

```typescript jsx
const EditOpportunityButton: React.FC<ManageOpportunityProps> = ({
                                                                   opportunity,
                                                                   opportunityTypes,
                                                                   terms,
                                                                   interests,
                                                                   sponsors,
                                                                 }) => {
```

* The opportunity to edit,
* The different OpportunityTypes,
* The AcademicTerms,
* The different Interests, and
* The available Sponsors. Sponsors are Faculty, Advisors, or Admins.

### Create the AutoForm SimpleSchema

First, we need to create the allowed values for the SimpleSchema. We convert the opportunityTypes, terms, interests and
sponsors into Strings that the user can select from.

```typescript jsx
  // Get the names for the AutoForm
const termNames = terms.map((term) => AcademicTerms.toString(term._id));
const sponsorNames = sponsors.map((sponsor) => Users.getFullName(sponsor.userID));
const interestNames = interests.map((interest) => interest.name);
const typeNames = OpportunityTypes.findNonRetired().map((type) => type.name);
```

Then we can create the SimpleSchema.

```typescript jsx
  const updateOpportunitySchema = new SimpleSchema({
  name: { type: String, optional: true },
  description: { type: String, optional: true },
  opportunityType: { type: String, optional: true, allowedValues: typeNames },
  sponsor: { type: String, optional: true, allowedValues: sponsorNames },
  academicTerms: { type: Array, optional: true },
  'academicTerms.$': { type: String, allowedValues: termNames },
  interests: { type: Array, optional: true },
  'interests.$': { type: String, allowedValues: interestNames },
  timestamp: { type: Date, optional: true },
  eventDate: { type: Date, optional: true },
  ice: { type: iceSchema, optional: true },
  picture: { type: String, optional: true },
  retired: { type: Boolean, optional: true },
});
const formSchema = new SimpleSchema2Bridge(updateOpportunitySchema);
```

### Create a model based upon the entity

We create a model to populate the AutoForm.

```typescript jsx
  const model: OpportunityUpdate = opportunity;
// update the model so that it can be used in the AutoForm
model.interests = opportunity.interestIDs.map((id) => Interests.findDoc(id).name);
model.academicTerms = opportunity.termIDs.map((id) => AcademicTerms.toString(id));
model.sponsor = Users.getFullName(opportunity.sponsorID);
model.opportunityType = OpportunityTypes.findDoc(opportunity.opportunityTypeID).name;
```

### Create the AutoForm

Now we create the AutoForm.

```typescript jsx
<AutoForm model={model} schema={formSchema} onSubmit={(doc) => {
  handleSubmit(doc);
  setOpen(false);
}}>
  <TextField name="name" />
  <Form.Group widths="equal">
    <SelectField name="opportunityType" />
    <SelectField name="sponsor" />
  </Form.Group>
  <LongTextField name="description" />
  <Form.Group widths="equal">
    <MultiSelectField name="academicTerms" />
    <MultiSelectField name="interests" />
  </Form.Group>
  <DateField name="eventDate" />
  <Form.Group widths="equal">
    <NumField name="ice.i" />
    <NumField name="ice.c" />
    <NumField name="ice.e" />
  </Form.Group>
  <BoolField name="retired" />
  <Form.Group widths="equal">
    <Form.Input name="picture" value={pictureURL} onChange={handlePictureUrlChange} />
    <Form.Button basic color="green" onClick={handleUploadPicture}>
      Upload
    </Form.Button>
  </Form.Group>
  <SubmitField />
  <Button color='red' onClick={() => setOpen(false)}>
    Cancel
  </Button>
</AutoForm>
```

### Handle Form Submission
