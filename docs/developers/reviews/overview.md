---
title: Overview of RadGrad Reviews
sidebar_label: Overview
---

## Motivation

Reviews in RadGrad serve several purposes:

  1. **Improve the quality of the RadGrad codebase.** We want to ensure that there are no obvious violations of Javascript/Typescript best practices (as we understand them at the time of the review).

  2. **Improve the consistency of the RadGrad codebase.** In some cases, are several competing "best practices", and so we want to ensure that the RadGrad codebase observes the same one in all places.

  3. **Provide a mechanism to onboard developers.** New developers might be new to RadGrad and somewhat inexperienced with JS, TS, React, and Semantic UI. RadGrad is a relatively large and somewhat complicated system.  It is unreasonable to expect developers to read through our documentation and instantly produce "perfect" code. Reviews are a way for more experienced RadGrad developers to help new developers come up to speed as quickly as possible.

  4. **Capture additional or modify existing best practices, design patterns, and anti-patterns.** Reviews are also the best time for developers to reconsider existing RadGrad coding and design standards, or propose new ones. This is because when you are doing a review, you are not trying to implement new functionality, and so your attention is focused on how existing code works and whether that is the most appropriate way to do it. Our existing best practices, design patterns, design anti-patterns and checklists are always a work in progress and always subject to modification as we learn more.

## Process

In a nutshell, RadGrad reviews have the following steps:

  1. **Initiation:** where the code to be reviewed is identified, and the review approach appropriate for the code is specified.
  2. **Preparation:**  where developers read the code and document issues of concern.
  3. **Meeting:** where developers meet to talk through the code and the issues they have found with it, and decide how to resolve the issues.
  4. **Resolution:** where one or more developers carry out the actions decided upon during the meeting. This can involve both changes to the code base as well as changes to checklists and other review documentation.
