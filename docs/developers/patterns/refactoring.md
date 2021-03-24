---
title: Spike solutions and refactoring
---

## Problem

A solution to some design problem involves the creation of multiple files, each including many of lines of code that are "almost" identical. Let's call the copies "cloned" code.

Two problems with many files that are almost the same are:
  * If a bug is discovered in the cloned code, every instance of the clone must be individually fixed.
  * If a design change is desired, then every instance of the cloned code must be individually fixed.

## Solution

While reviewing a section of UI code, Philip came across a set of almost a dozen files, each of which shared a great deal of duplicate code.  Reducing this duplication involved several related strategies, including

  * Use classes to define and enforce structural similarities
  * Refactor to reduce code duplication
  * Separate presentation for content using React components

To aid developers in understanding how these techniques are combined in practice, he created this 27 minute walkthrough video. This [critically acclaimed :smile:](https://forums.meteor.com/t/drying-out-react-code/55459) video is recommended viewing for all new RadGrad developers.

import YouTube from 'react-youtube-embed'

<YouTube id="EifpOf8ivo0"/>


