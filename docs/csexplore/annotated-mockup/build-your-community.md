---
title: Build Your Community
sidebar_label: Build Your Community
---

## Organizing Principle:
1. Teach High School students Computer Science and connect them with events, opportunities and groups to facilitate learning or professional development.

2. Raise funding to connect students learning success with donations to charity. Give students additional incentive by connecting their donations with an in-app mini game and in-app "prizes". 


## Pedagogical Goals:
1. Teach students about basic CS concepts and connect them with resources and curriculum's to learn from.

2. Inform students about possible career paths, in or around Computer Science.

3. Inform students about local and international charities. This would be best if we can find a variety of charities and organizations, so the students can find one which inspires them.

4. Connect students with local groups and activities to take part in. These can be both CS related or charitable or a combination of both.

5. Prepare students for college and a career connected to Computer Science, through mentorship tips and professional development modules.

## Walkthrough of the Mockup:

### Landing Page:
![alt text](/img/mockups/build-your-community/landing-page.png 'Landing Page')

The landing page before you log in shows a swipeable list of opportunities and upcoming events as an attempt to capture the students interest and have them register.

### Mini Game:
![alt text](/img/mockups/build-your-community/my-community1.png 'Virtual Community Mockups')

The game revolves around a virtual community you build with donations to real life charities. The more you donate to a specific charity or category of charity, the closer you get to earning a badge for that charity. Once a certain threshold is met, the badge is unlocked and in-turn unlocks an in-game character or item to add to your community. **In essence, the more you contribute to your real life community the more your virtual community grows.** We can add on to this by adding more game-like features. In one mockup page it shows a Community Stats page, in which the player can track what his community is good at and what its lacking in. In this case the players Food stat is low and so they would want to donate to some Sustainable Farming charity to earn a badge which would increase their food stat. 

The students here aren't actually donating anything but their time. We would need to solicit a sponsor or group of sponsors who would match the students efforts in CS related activities with real world dollars. We would determine a point system for course/activity/event the student takes part in and the points would correspond to money from the sponsor(say 100 points is equal to $1). 
If the mini-game is too hard to implement, I believe you can have a similar experience with just the points-for-charity earn-a-badge system. The only practical difference is the badges would just be virtual rewards and not correspond to anything else. 


### Feed / Homepage
Constantly updating feed of new courses, events, updates, messages etc. that match the students interests or are relevant to the student. Depending on how involved we make the mini game we can add mini game messages. Stuff like: "Your citizens need food! Earn a farming badge!" or "Customize your community!". 

![alt text](/img/mockups/build-your-community/Feed_Explorer.png 'Feed and Explorer Pages')

### Explorer
Explore different opportunities. View courses, events, groups, opportunities, internships etc. and filter by interests, newest / oldest. Homepage of explorer shows the most popular opportunities of each(courses, events, groups, internships) then links to dedicated pages for each. Some courses and opportunities would correspond to your skills page and visualize your progress in different technologies based on how far along you are and some would allow you to earn a badge for your participation.

### Badge / Charity Pages:
![alt text](/img/mockups/build-your-community/charity.png 'Charity Explorer Pages')

A collection of pages which show different charities to donate to. Connected to a group of pages where you can look at what badges you've earned and how you earned that badge, as well as how to earn other badges.

### Profile
![alt text](/img/mockups/build-your-community/profile_skills_mockup.png 'Profile and Skills Pages')

View and customize your user profile. See your interests, events you've attended / are signed up for, courses you've taken / are taking. See a scrollable list of your badges underneath your profile picture. Depending on user settings we can also use this page for sharing and let other users see it under things like: "People attending this Event", "Members of this Group"... 
Also see your skills and points page: a list of progress bars which show how far along you are in different skills you are learning.

### Learn More
A place to list additional resources and articles written or curated by us. Also has a mentorspace similar to Radgrad's mentor page, allowing approved mentors to post articles and allowing students to ask questions.



## Research Goals:
1. Demographics. What are the Demographics of those who use the app and how does that correspond to the other research questions here?

2. What opportunities engage students the most? Do students focus the most on courses, events, groups or mentorship?

3. Does a game-based system encourage students to participate more in CS opportunities? What aspects of the game are most engaging?

4. Does a charitable mindset encourage students to learn and participate more in their community? How does this compare to a self-interested motivational system?

5. Curriculum Evaluation. Which online curriculums do students like best?

6. How long and how often do students engage with the app. Does this taper off / increase after a certain time spent using it? Does this increase/decrease around certain events or seasons?


## What's Next?

1. Solicit Funding:
Contact local and international organizations and see if we can find one(or many...) who agree to contribute money for student engagement in our platform.

2. Connect with Charities:
Find one or many charities who would like to participate and see what kind of donation technologies they have set up to make the Sponsor->Student->Charity pipeline as easy as possible. It would be good to connect with something like [Friends of Hawaii](friendsofhawaii.org) who have a wide array of charities under their belt. Friends of Hawaii solicits funding from the private-sector and sends it through grants to a long list of their approved charities. Partnering with them or something similar would possibly solve the funding problem too.

3. Find a game engine / Graphic Design:
If we decide to make a full-fledged game. We would probably need to find a game engine to make building the game easier. The only game engine I know of that works directly with React Native is react-native-game-engine. If we want something else there's a lot of game engines that work with HTML5 or Javascript that we could run through a WebView.

4. Set up a curriculum:
Find online lesson plans and figure out a way to integrate them into the app with a reward plan. The simplest way is just link to them and have a student send a screenshot of their success for verification and points. I would not be surprised though if some of these online curriculums had an API that allowed one to connect and track users progress.

5. Research Tools: 
Find tools and techniques that allow you to track the metrics of your users. Just gathering simple stats like Age, Location, School on signup can do a lot for tracking the demographics of our users. But we also need to find or create a library that will track retention rates and the page hits.