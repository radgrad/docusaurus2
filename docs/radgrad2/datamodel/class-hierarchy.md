---
title: Class Hierarchy
sidebar_label: Class Hierarchy
---

Recall that every MongoDB collection is encapsulated by a Javascript class with the same name. 

As we implemented this encapsulation, we observed that there was common functionality that could be abstracted out into a set of four superclasses:

  * *BaseCollection*.  All classes (with the single exception of the UserCollection class) inherit either directly or indirectly from BaseCollection. This class provides the methods and fields used to manage a MongoDB collection that are common across RadGrad.
  
  * *BaseTypeCollection*.  This class extends BaseCollection with methods to support MongoDB collections that specify "types" in RadGrad.  Currently, there are two such types: InterestTypes and OpportunityTypes.
  
  * *BaseSlugCollection*.  This class extends BaseCollection with methods to support the MongoDB collections whose documents must include a "slug". For more details, see the section on [slugs](entity-relationship-model#slugs).
  
  * *BaseProfileCollection*.  This class extends BaseSlugCollection with the methods common to the implementation of the collections to support RadGrad roles: AdvisorProfileCollection, FacultyProfileCollection, MentorProfileCollection, and StudentProfileCollection.

Here is the resulting class hierarchy:

<img src="/img/radgrad2/datamodel/CollectionsClassHierarchy.png" width="100%"/>

There is one exceptional class: UserCollection, which does not inherit from any of the Base classes.  This is because the UserCollection class encapsulates a "special" MongoDB collection managed by the Meteor.Accounts package. The behavior of this collection is sufficiently different from regular user-defined collections that we did not feel it was appropriate to make it a subclass of any other class. 

All collections that extend BaseCollection are required to implement five methods:

1. **define**: The `define` method creates a document in the collection. It returns the `_id` of the resulting document. The `define` method takes and object as its one parameter. The values in the object that refer to other documents should use [slugs](entity-relationship-model#slugs). This supports the loading from a database fixture. For example the `CourseInstances` define method looks like 
```ts
CourseInstances.define({ academicTerm: 'Spring-2016',
                         course: 'ics_311',
                         verified: false,
                         fromRegistrar: false,
                         grade: 'B',
                         note: '',
                         student: 'joesmith@hawaii.edu',
                         creditHrs: 3 });
```
The course, academicTerm, and student are slugs that refer to a Course, AcademicTerm, and StudentProfile.

2. **update**: The `update` method supports changing certain fields of a document. Some fields are immutable by design. The `update` method takes two parameters, the docID or slug that identifies which document to update, and an object containing the fields to change. For example the `CourseInstances` update method allows you to change the academicTerm, verified, fromRegistrar, grade, creditHrs, note, ice and retired fields. Once you define a CourseInstance the student and course are fixed. All the fields are optional.

3. **removeIt**: The `removeIt` method removes a single document from the collection. This may have side affects depending on the relationships between collections. The method takes one parameter, the docID or slug, that defines which document to remove. The `removeIt` method may throw a Meteor exception if there are other documents refering to it. For example the `Courses.removeIt` method checks for CourseInstances.
```ts
  removeIt(instance) {
    const docID = this.getID(instance);
    // Check that this is not referenced by any Course Instance.
    CourseInstances.find().map((courseInstance) => {
      if (courseInstance.courseID === docID) {
        throw new Meteor.Error(`Course ${instance} is referenced by a course instance ${courseInstance}.`);
      }
      return true;
    });
    // OK to delete. First remove any Feeds that reference this course.
    Feeds.find({ courseID: docID }).map((feed) => Feeds.removeIt(feed._id));
    // Now remove the Course.
    return super.removeIt(docID);
  }
```
Notice any `Feeds` that refer to the removed course are also removed.

4. **dumpOne**: The `dumpOne` method creates a JSON object representing the document. RadGrad uses the dump object to restore the document. Restoring an object is calling define using the dump object. This means that the dump object should have slugs not IDs. The `dumpOne` method has one parameter the docID to dump. For example the `CourseInstances.dumpOne` looks like:
```ts
  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const academicTerm = AcademicTerms.findSlugByID(doc.termID);
    const course = Courses.findSlugByID(doc.courseID);
    const note = doc.note;
    const verified = doc.verified;
    const creditHrs = doc.creditHrs;
    const grade = doc.grade;
    const fromRegistrar = doc.fromRegistrar;
    const student = Users.getProfile(doc.studentID).username;
    const retired = doc.retired;
    return { academicTerm, course, note, verified, fromRegistrar, creditHrs, grade, student, retired };
  }
```

5. **checkIntegrity**: The `checkIntegrity` method checks all the collection's documents ensuring that any ids refer to documents in other collections. The method returns an array of any errors/problems. If the id doesn't refer to another document then a message is pushed onto the returned array. Here's the `CourseInstances.checkIntegrity` method:
```ts
  checkIntegrity() {
    const problems = [];
    this.find().forEach((doc) => {
      if (!AcademicTerms.isDefined(doc.termID)) {
        problems.push(`Bad termID: ${doc.termID}`);
      }
      if (!Courses.isDefined(doc.courseID)) {
        problems.push(`Bad courseID: ${doc.courseID}`);
      }
      if (!Users.isDefined(doc.studentID)) {
        problems.push(`Bad studentID: ${doc.studentID}`);
      }
    });
    return problems;
  }
``` 
