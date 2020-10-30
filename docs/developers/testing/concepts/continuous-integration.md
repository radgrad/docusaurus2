---
title: Continuous Integration
sidebar_label: Continuous Integration
---

![ci-badge](https://github.com/radgrad/radgrad2/workflows/ci-radgrad/badge.svg)

RadGrad  uses [GitHub Actions](https://docs.github.com/en/free-pro-team@latest/actions) to automatically run ESLint, unit tests, integration tests, and acceptance tests each time a commit is made to the master branch.

You can see the results of all recent "workflows" at [https://github.com/radgrad/radgrad2/actions](https://github.com/radgrad/radgrad2/actions).

The workflow definition file is quite simple and is located at
[.github/workflows/ci.yml](https://github.com/radgrad/radgrad2/blob/master/.github/workflows/ci.yml).
