---
title: "Integration with Jenkins"
page_id: "integration_with_jenkins"
warning: false
tags:
  - "newman"

---

Postman contains a full-featured [testing sandbox](/docs/postman/scripts/postman_sandbox/) that lets you write and execute JavaScript based tests for your API. You can then hook up Postman with your build system using [Newman](/docs/postman/collection_runs/command_line_integration_with_newman/), the command line collection runner for Postman.

Newman allows you to run and test a Postman Collection. Newman and Jenkins are a perfect match. Let's review these topics to set up this operation.

* [Installation](#installation)
* [Run a collection in Postman](#run-a-collection-in-postman)
* [Run a collection using Newman](#run-a-collection-using-newman)
* [Set up Jenkins](#set-up-jenkins)
* [Troubleshooting](#troubleshooting)
* [Configure frequency of runs](#configure-frequency-of-runs)

**Note:** We are using Ubuntu as a target OS as in most cases your CI server would be running on a remote Linux machine.

## Installation

[Install Jenkins](https://jenkins.io/doc/book/installing/#debian-ubuntu).

Install NodeJS and npm. Newman is written in NodeJS and we distribute the official copy through npm. Install [nodejs and npm for Linux](https://docs.npmjs.com/getting-started/installing-node).

Install Newman globally, to set up Newman as a command line tool in Ubuntu.

```bash
$ npm install -g newman
```

## Run a collection in Postman

We assume you already have a Postman Collection with some tests. Run the collection in the Postman app. Here's an example of the output in Postman’s collection runner.

[![collection runner](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_1.png)](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_1.png)

Some of the tests are failing intentionally in the screenshot so we can show you the instructions for troubleshooting.

## Run a collection using Newman

Run this collection inside Newman, using the command below. If everything is set up nicely, you should see the output below.

[![terminal output from collection run](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_2.png)](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_2.png)

## Set up Jenkins

Jenkins exposes an interface at `http://localhost:8080`.

[![jenkins interface](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_3.png)](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_3.png)

Create a new job by clicking on the “New Item” link on the left sidebar > Select a “Freestyle Project” from the options > Name your project.

[![new Jenkins job](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_4.png)](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_4.png)

Add a build step in the project. The build step executes a Shell command.

[![execute shell command](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_5.png)](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_5.png)

Here is the command:

```bash
$ newman jenkins_demo.postman_collection --exitCode 1
```

Note here that we are using the Newman command parameter “exitCode” with the value `1`. This denotes that Newman is going to exit with this code that will tell Jenkins that everything did not go well.

Click the **Save** button to finish creating the project.

[![source code management](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_6.png)](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_6.png)

## Troubleshooting

Run this build test manually by clicking on the “Build Now” link in the sidebar.

[![run build](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_7.png)](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_7.png)

Jenkins indicates that the build has failed with a red dot in the title. We can check why with the console output from Newman.

[![build failed message](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_8.png)](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_8.png)

Click the “Console Output” link in the sidebar to see what Newman returned.

[![console output](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_9.png)](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_9.png)

Fix these tests inside Postman and then try again.

[![collection runner view](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_10.png)](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_10.png)

You can move on once you see green pass icons for all your tests like the screenshot above.

[![console output for all tests pass](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_11.png)](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_11.png)

Jenkins indicates that the build succeeded with a blue ball.

## Configure frequency of runs

To set up the frequency with which Jenkins runs Newman, click on “Configure project” in the main project window and then scroll down.=. The syntax for setting the frequency is `H/(30) * * * *`.

[![build triggers](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_12.png)](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_12.png)

**Note:** 30 can be replaced with another number.

Jenkins will now run Newman at your desired frequency and will tell you whether the build failed or succeeded. In a bigger setup, Newman will be part of your build process and probably not the entire process. You can set up notifications and customize Jenkins as per your needs.

You can use a wide variety of other configurations to make your collection more dynamic.

---
For more information about collection runs, see:

* [Starting a collection run](/docs/postman/collection_runs/starting_a_collection_run/)
* [Using environments in collection runs](/docs/postman/collection_runs/using_environments_in_collection_runs/)
* [Working with data files](/docs/postman/collection_runs/working_with_data_files/)
* [Running multiple iterations](/docs/postman/collection_runs/running_multiple_iterations/)
* [Building workflows](/docs/postman/collection_runs/building_workflows/)
* [Sharing a collection run](/docs/postman/collection_runs/sharing_a_collection_run/)
* [Debugging a collection run](/docs/postman/collection_runs/debugging_a_collection_run/)

* [Integration with Travis CI](/docs/postman/collection_runs/integration_with_travis/)
* [Newman with Docker](/docs/postman/collection_runs/newman_with_docker/)
