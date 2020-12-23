---
title: Reference Guide
---

Each script has some minimal documentation made available by calling it with the --help parameter. The following sections include the output from these scripts at the time of writing. Run the command again for updated documentation if available.


### convert-dump

Converts a RadGrad1 database to RadGrad2 format. For more information, see [How to Convert a RadGrad1 database to RadGrad2](./howto/convert-data).

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

### download-bulk-star-json

Download data from STAR.  After this, use create-star-download to extract RadGrad data. For more information, see [How to update student STAR data](./howto/update-student-star-data).

```
$ node js/download-bulk-star-json.js --help
Usage: download-bulk-star-json [options]

Request user, password, and email info, then download STAR data. emails.txt must have student email addresses, one per line.

Options:
  -h, --help  display help for command
```

### create-star-download

Create RadGrad data from a STAR download file. For more information, see [How to update student STAR data](./howto/update-student-star-data).

```
$ node js/create-star-download.js --help
Usage: create-star-download [options] <starDataFile>

Parse a STAR data file and output a JSON string with RadGrad student and courseInstance data.

Arguments:
  starDataFile  A file containing STAR data produced by the download-bulk-start-json script.

Options:
  -h, --help    display help for command
```

### manage-fixture

A one-off script to parse a RadGrad fixture file. May contain useful code that can be adapted for future scripts.

```
$ node js/manage-fixture.js --help
Usage: manage-fixture [options] <fixtureFile>

Extract the academic years referenced in a fixture file. Print results to console.

Arguments:
  fixtureFile  A file containing RadGrad1 data.

Options:
  -h, --help   display help for command
```
### analyze-data-dump

A one-off script that was used to generate data for a publication on RadGrad1.  Could provide useful code for future offline analysis.

```
$ node js/analyze-data-dump.js --help
Usage: analyze-data-dump [options] <dumpfile>

Parse a RadGrad1 database dump file to generate statistics on student usage.

Arguments:
  dumpfile    A RadGrad1 database dump file

Options:
  -h, --help  display help for command
```





