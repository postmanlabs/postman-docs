---
title: "Running a collection through Jenkins"
order: 360036847714
page_id: "Running-a-collection-through-Jenkins"
warning: false
---
Newman and Jenkins are a perfect match to run the collection and if you want to schedule a collection to run at specific time intervals. Below steps should help you achieve the same:


**Step 1:** Download and install Jenkins - [https://jenkins.io/download] (https://jenkins.io/download)

**Step 2:** Install NodeJS and npm. Newman is written in NodeJS and we distribute the official copy through npm. Install - [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm] (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

**Step 3:** After Jenkins is installed and ready, browse this link - [http://localhost:8080](http://localhost:8080) and login to your Jenkins with credentials. Please note, Jenkins by default start on port 8080.

**Step 4:** Create a new job by clicking on the “New Item” link on the left sidebar > Select a “Freestyle Project” from the options > Name your project.

![New Item](https://drive.google.com/open?id=1ibwagHFExOu9JjI9-Xt2YYNxSckujQNN)

![Enter Name](https://drive.google.com/open?id=1uakLdrQCD1AZeZqh3FZOOfUvAuCYKvVW)


 **Step 5**: Goto build section of the Jenkins job created- add build step ->execute shell and add your "Newman command to run a collection in execute shell command section. (for e.g. - # newman run test_collection.json) and apply and save.

![Execute](https://drive.google.com/open?id=1c5a72uAqZpgumFg0m5uYKnl9aMvcaQsE)

![Execute Shell](https://drive.google.com/file/d/13jn161MSctj7PJ2bklTpQlqhtVcGTF0I)

**Step 6**: Click on Build Now to run the collection.

![Build Now](https://drive.google.com/open?id=1Z73boV-AwGWYZ3X2bzQOXz9qeLkzuRZ7)

 **Step 7**:  Now go to the Build History section and click on the recent build, to check the console output for the latest collection run results.

![Build History](https://drive.google.com/open?id=135vuSx2k2sELZjy-MR6CzpzbdIxk0DkP)

![Console Output](https://drive.google.com/open?id=1AcAeBh7OPLaq4UtCY4ft19wyeIDplhZu)
