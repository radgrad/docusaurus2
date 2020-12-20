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

> radgrad2-scrips@1.0.0 tsc /Users/philipjohnson/github/radgrad/radgrad2/scripts
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

## Script documentation

Each script has some minimal documentation made available by calling it with the --help parameter. For reference purposes, here is the output from these scripts at the time of writing. Run the command again for updated documentation if available.

### analyze-data-dump

```
$ node js/analyze-data-dump.js --help
Usage: analyze-data-dump [options] <dumpfile>

Parse a RadGrad1 database dump file to generate statistics on student usage.

Arguments:
  dumpfile    A RadGrad1 database dump file

Options:
  -h, --help  display help for command
```

### convert-dump

```
$ node js/convert-dump.js --help
Usage: convert-dump [options] <radgrad1DumpFile> <outFileName>

Parse a RadGrad1 dump file and create a new one in RadGrad2 format.

Arguments:
  radgrad1DumpFile  A pre-existing RadGrad1 database dump file
  outFileName       The name of the RadGrad2 database dump file to be created

Options:
  -h, --help        display help for command
```

### create-star-download

```
$ node js/create-star-download.js --help
Usage: create-star-download [options] <starDataFile>

Parse a STAR data file and output a JSON string with RadGrad student and courseInstance data.

Arguments:
  starDataFile  A file containing STAR data produced by the download-bulk-start-json script.

Options:
  -h, --help    display help for command
```

### download-bulk-star-json

```
$ node js/download-bulk-star-json.js --help
Usage: download-bulk-star-json [options]

Request user, password, and email info, then download STAR data. emails.txt must have student email addresses, one per line.

Options:
  -h, --help  display help for command
```

### manage-fixture

```
$ node js/manage-fixture.js --help
Usage: manage-fixture [options] <fixtureFile>

Extract the academic years referenced in a fixture file. Print results to console.

Arguments:
  fixtureFile  A file containing RadGrad1 data.

Options:
  -h, --help   display help for command
```





