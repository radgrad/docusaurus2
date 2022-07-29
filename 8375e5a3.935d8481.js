(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(2),o=n(6),a=(n(0),n(345)),i={title:"Updating Entity Doc"},p={unversionedId:"developers/patterns/update-entity-doc",id:"developers/patterns/update-entity-doc",isDocsHomePage:!1,title:"Updating Entity Doc",description:"Problem",source:"@site/docs/developers/patterns/update-entity-doc.md",slug:"/developers/patterns/update-entity-doc",permalink:"/docs/developers/patterns/update-entity-doc",version:"current",lastUpdatedBy:"Cam Moore",lastUpdatedAt:1619572452},l=[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[{value:"Create the AutoForm SimpleSchema",id:"create-the-autoform-simpleschema",children:[]},{value:"Create a model based upon the entity",id:"create-a-model-based-upon-the-entity",children:[]},{value:"Create the AutoForm",id:"create-the-autoform",children:[]},{value:"Handle Form Submission",id:"handle-form-submission",children:[]}]}],s={rightToc:l};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"problem"},"Problem"),Object(a.b)("p",null,"We want a form for the user to update an entity in one of our Collections."),Object(a.b)("p",null,"Currently, we have several solutions: ",Object(a.b)("inlineCode",{parentName:"p"},"UpdateUserForm.tsx"),", ",Object(a.b)("inlineCode",{parentName:"p"},"EditReviewButton.tsx"),", ",Object(a.b)("inlineCode",{parentName:"p"},"EditStudentButton.tsx"),", etc."),Object(a.b)("p",null,"They all use different solutions to allow us to update the entities. Some work better than others. Some don't work at\nall."),Object(a.b)("h2",{id:"solution"},"Solution"),Object(a.b)("p",null,"We're going to demonstrate our solution using the ",Object(a.b)("inlineCode",{parentName:"p"},"EditOpportunityButton.tsx"),"\nThe button pops up a Modal dialog box."),Object(a.b)("img",{src:"/img/patterns/edit-opportunity-modal.png"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"EditOpportunityButton")," takes five parameters."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),"const EditOpportunityButton: React.FC<ManageOpportunityProps> = ({\n                                                                   opportunity,\n                                                                   opportunityTypes,\n                                                                   terms,\n                                                                   interests,\n                                                                   sponsors,\n                                                                 }) => {\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The opportunity to edit,"),Object(a.b)("li",{parentName:"ul"},"The different OpportunityTypes,"),Object(a.b)("li",{parentName:"ul"},"The AcademicTerms,"),Object(a.b)("li",{parentName:"ul"},"The different Interests, and"),Object(a.b)("li",{parentName:"ul"},"The available Sponsors. Sponsors are Faculty, Advisors, or Admins.")),Object(a.b)("h3",{id:"create-the-autoform-simpleschema"},"Create the AutoForm SimpleSchema"),Object(a.b)("p",null,"First, we need to create the allowed values for the SimpleSchema. We convert the opportunityTypes, terms, interests and\nsponsors into Strings that the user can select from."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),"  // Get the names for the AutoForm\nconst termNames = terms.map((term) => AcademicTerms.toString(term._id));\nconst sponsorNames = sponsors.map((sponsor) => Users.getFullName(sponsor.userID));\nconst interestNames = interests.map((interest) => interest.name);\nconst typeNames = OpportunityTypes.findNonRetired().map((type) => type.name);\n")),Object(a.b)("p",null,"Then we can create the SimpleSchema."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),"  const updateOpportunitySchema = new SimpleSchema({\n  name: { type: String, optional: true },\n  description: { type: String, optional: true },\n  opportunityType: { type: String, optional: true, allowedValues: typeNames },\n  sponsor: { type: String, optional: true, allowedValues: sponsorNames },\n  academicTerms: { type: Array, optional: true },\n  'academicTerms.$': { type: String, allowedValues: termNames },\n  interests: { type: Array, optional: true },\n  'interests.$': { type: String, allowedValues: interestNames },\n  timestamp: { type: Date, optional: true },\n  eventDate: { type: Date, optional: true },\n  ice: { type: iceSchema, optional: true },\n  picture: { type: String, optional: true },\n  retired: { type: Boolean, optional: true },\n});\nconst formSchema = new SimpleSchema2Bridge(updateOpportunitySchema);\n")),Object(a.b)("h3",{id:"create-a-model-based-upon-the-entity"},"Create a model based upon the entity"),Object(a.b)("p",null,"We create a model to populate the AutoForm."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),"  const model: OpportunityUpdate = opportunity;\n// update the model so that it can be used in the AutoForm\nmodel.interests = opportunity.interestIDs.map((id) => Interests.findDoc(id).name);\nmodel.academicTerms = opportunity.termIDs.map((id) => AcademicTerms.toString(id));\nmodel.sponsor = Users.getFullName(opportunity.sponsorID);\nmodel.opportunityType = OpportunityTypes.findDoc(opportunity.opportunityTypeID).name;\n")),Object(a.b)("h3",{id:"create-the-autoform"},"Create the AutoForm"),Object(a.b)("p",null,"Now we create the AutoForm."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),'<AutoForm model={model} schema={formSchema} onSubmit={(doc) => {\n  handleSubmit(doc);\n  setOpen(false);\n}}>\n  <TextField name="name" />\n  <Form.Group widths="equal">\n    <SelectField name="opportunityType" />\n    <SelectField name="sponsor" />\n  </Form.Group>\n  <LongTextField name="description" />\n  <Form.Group widths="equal">\n    <MultiSelectField name="academicTerms" />\n    <MultiSelectField name="interests" />\n  </Form.Group>\n  <DateField name="eventDate" />\n  <Form.Group widths="equal">\n    <NumField name="ice.i" />\n    <NumField name="ice.c" />\n    <NumField name="ice.e" />\n  </Form.Group>\n  <BoolField name="retired" />\n  <Form.Group widths="equal">\n    <Form.Input name="picture" value={pictureURL} onChange={handlePictureUrlChange} />\n    <Form.Button basic color="green" onClick={handleUploadPicture}>\n      Upload\n    </Form.Button>\n  </Form.Group>\n  <SubmitField />\n  <Button color=\'red\' onClick={() => setOpen(false)}>\n    Cancel\n  </Button>\n</AutoForm>\n')),Object(a.b)("h3",{id:"handle-form-submission"},"Handle Form Submission"))}c.isMDXComponent=!0},345:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?o.a.createElement(b,p(p({ref:t},s),{},{components:n})):o.a.createElement(b,p({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);