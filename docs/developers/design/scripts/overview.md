---
title: Overview of scripts/
sidebar_label: Overview
---

The `scripts/` directory contains supplemental programs for interfacing data to RadGrad. This chapter explains how to install and run these scripts.

## Directory overview

<img src="/img/design/radgrad2/scripts.png" />

## ts/

The scripts/ directory contains a subdirectory called ts/, which contains the actual code for performing various tasks:

<img src="/img/design/radgrad2/scripts-ts.png" />

## data/

There is also a directory called data/, where some sample data sets (not containing any student PII) are available:

<img src="/img/design/radgrad2/scripts-data.png" />


## Installation

To set up the scripts directory, first run `npm install`:

```sh
scripts/ $ npm install

> node@14.4.0 preinstall /Users/philipjohnson/github/radgrad/radgrad2/scripts/node_modules/node
> node installArchSpecificPackage

+ node-darwin-x64@14.4.0
added 1 package in 4.352s
found 0 vulnerabilities


> core-js-pure@3.6.5 postinstall /Users/philipjohnson/github/radgrad/radgrad2/scripts/node_modules/core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)

added 465 packages from 280 contributors and audited 466 packages in 10.75s

38 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

$
```

Now run `npm run tsc` to compile the Typescript files into Javascript and place them into a new, gitignored directory called js/:

```sh
$ npm run tsc

> radgrad2-scripts@1.0.0 tsc /Users/philipjohnson/github/radgrad/radgrad2/scripts
> tsc

$
```

Here is the contents of the js/ directory built by running the tsc script:

<img src="/img/design/radgrad2/scripts-js.png" />


## Running scripts

To invoke a script, invoke node, passing the appropriate script from the js/ directory and perhaps any required arguments.  For example:

```sh
$ node js/analyze-data-dump.js data/RadGrad1-clean.json
Student, Session Count, Session Lengths, Shortest, Longest, Total Time, Average

$
```

The above script does not do produce results for this sample data file because the data file does not contain student data. However, this example does show that the script can be invoked and return some results without error.
