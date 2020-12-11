---
title: Design Checklist
sidebar_label: Design
---

Practices concerning the high-level design of functions that is not specific to React, Typescript, or Javascript.

**Design-01:**  Are there blocks of code with more than a few lines of code that look similar? Is it possible to refactor to reduce duplication?

**Design-02:** Are there multiple, deeply nested if/else blocks?

**Design-03:** Is there unused/unreachable code?

**Design-04:** Is there a large amount of commented out code?

**Design-05:** Are there unnecessary comments? Comments that describe the _how_?

**Design-06:** Are there missing comments? Comments that should describe the _why_?

**Design-07:** Is the code readable? Code should be self-explanatory. Do you get a feeling a reading a story as you go through the code?

**Design-08:** Is the code DRY (i.e. conforms to the Agile Maxim of "Do not Repeat Yourself")? The same code should not be repeated more than twice.

**Design-09:**  Are there reusable services, functions and components that are not made available for reuse?

