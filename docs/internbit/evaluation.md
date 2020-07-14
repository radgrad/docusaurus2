---
title: InternBit Evaluation
sidebar_label: Evaluation
---

### What we are Trying to Evaluate

#### Backend Evaluation
* Does InternBit get data from all of the relevant sites for CS students?
* For each site monitored by InternBit, does it get all of the interesting listings?
* How good is the parsing of each site monitored by InternBit? Does it find all of the canonical
 fields (when available)?

#### Frontend (User Experience)
* Can InternBit lower the time required for students to search for internships, and create a
higher success rate for students seeking internships?
* Do students find that InternBit improves the internship search process? If so, how? If not, why
 not? How could InternBit provide more support for the internship search process?
* Do students find the InternBit easy to navigate? What could be improved? 
* Does the information regarding student internships from InternBit provide valuable feedback
 towards the ICS program at UH?
 
### How are are Going to Evaluate


[User Requirement Analysis: Baseline Measurement of the Current Problems faced by students](https://docs.google.com/forms/d/e/1FAIpQLSdR4z_CDx0nhLrzvTZ8yRSuPi-IO3cuZsVdRk5rxfSM8BTBbg/viewform)


#### Backend Evaluation:
We can compare pre-parsing vs. post-parsing data by showing them in the table: The two will be compared to see if it can find most, if not all of the canonical fields (when available).

**Scraping**

| Site        | Num Entries | Position | Company | Contact | Location | Posted | Due | Start | End | Compensation | Qualifications | Skills | Description |
|-------------|-------------|----------|---------|---------|----------|--------|-----|-------|-----|--------------|----------------|--------|-------------|
| simplyHired | 42          | 100%     | 100%    | 0%      | 100%     | 100%   | 0%  | 0%    | 0%  | 0%           | 0%             | 0% | 100%        |
| NSF-REU     | 89          | 100%     | 0%      | 100%    | 100%     | 0%     | 0%  | 0%    | 0%  | 0%           | 0%             | 100%   | 0%          |

**After Parsing**

| Site        | Num Entries | Position | Company | Contact | Location | Posted | Due | Start | End | Compensation | Qualifications | Skills | Description |
|-------------|-------------|----------|---------|---------|----------|--------|-----|-------|-----|--------------|----------------|--------|-------------|
| simplyHired | 42          | 100%     | 100%    | 0%      | 100%     | 100%   | 0%  | 0%    | 0%  | 0%           | 0%             | 88.37% | 100%        |
| NSF-REU     | 89          | 100%     | 0%      | 100%    | 100%     | 0%     | 0%  | 0%    | 0%  | 0%           | 0%             | 100%   | 0%          |

#### Frontend (User Experience) Evaluation
Survey:
* Meant to assess feelings / attitudes towards the site
* Survey Advisory Board (before student evaluations)
* Survey Students prior to On boarding (See intuitively if the site navigation makes sense)
* Survey Students using [User Requirement Analysis](https://docs.google.com/forms/d/e/1FAIpQLSdR4z_CDx0nhLrzvTZ8yRSuPi-IO3cuZsVdRk5rxfSM8BTBbg/viewform) (linked above, but add in the option of
 InternBit)

Survey Questions (Students):
* What aspects of the site did you like the most? (open)
* What aspects of the site were confusing? (open)
* How would you improve this site? (open)
* Would you recommend using this site to others? (Yes/No)
* Are there any features that you would like to implement? (open)
* Compared to other internship sites, how would you compare InternBit? (Open)
* Are there any other sites that you use to find internships that InternBit does not get data from
? (open)
* What is your estimate of the ratio of interesting vs uninteresting listings pulled from each
 site? (open)
* Do you feel that the recommended internships are helpful? (open)

Survey Questions (Faculty):
* Assesses faculty opinion of InternBit 
* Do you think the information provided by InternBit is valuable? 
* Does InternBit provide information that helps assess whether students are qualified/feel
 qualified for internships?
* Do you feel that InternBit recommends internships that students are qualified for? 
* Are there any improvements that could be made to assess the skill level of students?
