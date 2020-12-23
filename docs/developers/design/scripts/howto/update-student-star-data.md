---
title: How to update students STAR data
sidebar_label: Update STAR data
---

## Updating Existing RadGrad Students

### Get the current list of student emails 
Login to RadGrad as administrator. Go to the Dump Database Page. ![Dump Database Page](/img/design/radgrad2/DumpDatabasePage.png) Click the `Get Student Emails` button. RadGrad will create a zip file of the student emails and download it. The name of the file is `radgrad-studentsYYYY-MM-DD-HH-mm-ss.zip`. Inside the zip file is a single file named `Students.txt`. It will contain all the student email on a separate line.

### Move the `Students.txt` file to the `scripts` directory

The following is the `.gitignore` file in the `scripts` directory.
```gitignore
emails*.txt
star*.json
alumni*.txt
*-private.json
RadGrad2-*.json
dist
js
```
Copy or move the downloaded file to the `/scripts` directory. Since we don't want to make the student emails, we must rename the file with the format `emails[key].txt`.

### Run the `download-bulk-star-json` script
**Note:** You must be on the CSDL network to gain access to the STAR data.

```shell
⋊> ~/R/r/scripts on master ◦ npm run tsc                                                                        10:56:40

> radgrad2-scripts@1.0.0 tsc /Users/carletonmoore/RadGrad/radgrad2/scripts
> tsc

⋊> ~/R/r/scripts on master ◦ node js/download-bulk-star-json.js                                                 10:56:51
? Enter your UH username: cmoore
? Enter your password: [hidden]
? Enter the emails list key: (e.g. emails{key}.txt 211f20
? Enter the number of emails per file:  20
Obtaining STAR data for 20 users. Results expected at 11:01 AM (in 3 minutes)
Obtaining STAR data for 20 users. Results expected at 11:01 AM (in 3 minutes)
Obtaining STAR data for 20 users. Results expected at 11:01 AM (in 3 minutes)
Obtaining STAR data for 20 users. Results expected at 11:01 AM (in 3 minutes)
Obtaining STAR data for 1 users. Results expected at 10:58 AM (in a few seconds)
⋊> ~/R/r/scripts on master ◦                                                                                    10:58:12
```
* I recommend you run the typescript compiler to ensure you have the latest version of the script. `npm run tsc`.
* Then run the `download-bulk-star-json` script. The script will ask for your UH username, password, the key for the emails file and how many emails to split the files into. I choose 20 in this example.
* The `download-bulk-star-json` creates two files for each of the emails files, an `alumni[key].txt` and `star[key].json`. The alumni files are our best guess at students that no longer have any STAR data, thus they are considered alumni. The star.json file holds the students STAR data as JSON objects.
```shell
⋊> ~/R/r/scripts on master ◦ ls -l alumni211*.txt                                                               11:05:27
-rw-r--r--  1 carletonmoore  staff  0 Oct  6 11:30 alumni211f20-1.txt
-rw-r--r--  1 carletonmoore  staff  0 Oct  6 11:29 alumni211f20-2.txt
-rw-r--r--  1 carletonmoore  staff  0 Oct  6 11:29 alumni211f20-3.txt
-rw-r--r--  1 carletonmoore  staff  0 Oct  6 11:29 alumni211f20-4.txt
-rw-r--r--  1 carletonmoore  staff  0 Oct  6 11:28 alumni211f20-5.txt
⋊> ~/R/r/scripts on master ◦ ls -l star211f20*.json                                                             11:07:53
-rw-r--r--  1 carletonmoore  staff  634224 Oct  6 11:30 star211f20-1.json
-rw-r--r--  1 carletonmoore  staff  545532 Oct  6 11:29 star211f20-2.json
-rw-r--r--  1 carletonmoore  staff  668177 Oct  6 11:29 star211f20-3.json
-rw-r--r--  1 carletonmoore  staff  505844 Oct  6 11:29 star211f20-4.json
-rw-r--r--  1 carletonmoore  staff       2 Oct  6 11:28 star211f20-5.json
⋊> ~/R/r/scripts on master ◦                                                                                    11:08:25
```
### Upload the STAR data

As Administrator, select an Advisor from the Administrator Home Page. ![Admin Home Page](/img/design/radgrad2/AdminHomePage.png)

Scroll to the bottom of the Advisor Home Page and select the `Bulk STAR Upload` tab. ![Bulk STAR Upload](/img/design/radgrad2/BulkStarUploadTab.png)

Click the `Choose file` button and choose one of the `star*.json` files. Then click the `LOAD BULK STAR DATA` button. Do this for each of the `star*.json` files.

## Adding New Students

The process to add students to RadGrad is very similar to the updating existing RadGrad students.

1. Get the list of student emails. Typically, we do this for ICS 211 students. We get the list of enrolled students from the instructor.

2. Create an `emails[key].txt` file. We normally use the key course and semester for the key (e.g. `emails211f20.txt`).

3. Then run the script and upload the `star*.json` files.