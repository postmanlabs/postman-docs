---
title: "Integration with Jenkins"
order: 120
page_id: "integration_with_jenkins"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Command line integration with Newman"
    url: "/docs/postman/collection-runs/command-line-integration-with-newman/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Sikka"
    url: "https://www.postman.com/resources/case-studies/sikka/"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "How to write powerful automated API tests with Postman, Newman and Jenkins"
    url: "https://blog.postman.com/2015/09/03/how-to-write-powerful-automated-api-tests-with-postman-newman-and-jenkins/"
  - type: link
    name: "Integrations: how Postman plays with some of your favorite tools"
    url: "https://blog.postman.com/2018/04/13/integrations-how-postman-plays-with-some-of-your-favorite-tools/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to the Postman API"
    url: "/docs/postman/postman-api/intro-api/"

warning: false
tags:
  - "newman"

---

Postman contains a full-featured [testing sandbox](/docs/postman/scripts/postman-sandbox/) that lets you write and execute JavaScript based tests for your API. You can then hook up Postman with your build system using [Newman](/docs/postman/collection-runs/command-line-integration-with-newman/), the command line collection runner for Postman.

Newman allows you to run and test a Postman Collection. Newman and Jenkins are a perfect match. Let's review these topics to set up this operation.

* [Installation](#installation)
* [Run a collection in Postman](#run-a-collection-in-postman)
* [Run a collection using Newman](#run-a-collection-using-newman)
* [Set up Jenkins](#set-up-jenkins)
* [Troubleshooting](#troubleshooting)
* [Configure frequency of runs](#configure-frequency-of-runs)

**Note:** This walkthrough uses Ubuntu as a target OS, as in most cases your CI server will be running on a remote Linux machine.

## Installation

[Install Jenkins](https://jenkins.io/doc/book/installing/#debian-ubuntu).

Install NodeJS and npm. Newman is written in NodeJS and the official copy is available through npm. Install [nodejs and npm for Linux](https://docs.npmjs.com/getting-started/installing-node).

Install Newman globally, to set up Newman as a command line tool in Ubuntu.

```bash
$ npm install -g newman
```

## Run a collection in Postman

These instructions assume you already have a Postman Collection with some tests. Run the collection in the Postman app. Here's an example of the output in Postman’s collection runner.

[![collection runner](https://assets.postman.com/postman-docs/integrating_with_jenkins_1.png)](https://assets.postman.com/postman-docs/integrating_with_jenkins_1.png)

Some of the tests are failing intentionally in the screenshot to demonstrate the troubleshooting process.

## Run a collection using Newman

Run this collection inside Newman, using the command below. If everything is set up nicely, you should see the output below.

[![terminal output from collection run](https://assets.postman.com/postman-docs/integrating_with_jenkins_2.png)](https://assets.postman.com/postman-docs/integrating_with_jenkins_2.png)

## Set up Jenkins

Jenkins exposes an interface at `http://localhost:8080`.

[![jenkins interface](https://assets.postman.com/postman-docs/integrating_with_jenkins_3.png)](https://assets.postman.com/postman-docs/integrating_with_jenkins_3.png)

Create a new job by clicking on the “New Item” link on the left sidebar > Select a “Freestyle Project” from the options > Name your project.

[![new Jenkins job](https://assets.postman.com/postman-docs/integrating_with_jenkins_4.png)](https://assets.postman.com/postman-docs/integrating_with_jenkins_4.png)

Add a build step in the project. The build step executes a Shell command.

[![execute shell command](https://assets.postman.com/postman-docs/integrating_with_jenkins_5.png)](https://assets.postman.com/postman-docs/integrating_with_jenkins_5.png)

Here is the command:

```bash
$ newman run jenkins_demo.postman_collection --suppress-exit-code 1
```

Note here that the Newman command parameter ”suppress-exit-code” uses the value `1`. This denotes that Newman is going to exit with this code that will tell Jenkins that everything did not go well.

Click the **Save** button to finish creating the project.

[![source code management](https://assets.postman.com/postman-docs/integrating_with_jenkins_6.png)](https://assets.postman.com/postman-docs/integrating_with_jenkins_6.png)

## Troubleshooting

Run this build test manually by clicking on the “Build Now” link in the sidebar.

[![run build](https://assets.postman.com/postman-docs/integrating_with_jenkins_7.png)](https://assets.postman.com/postman-docs/integrating_with_jenkins_7.png)

Jenkins indicates that the build has failed with a red dot in the title. You can check why with the console output from Newman.

[![build failed message](https://assets.postman.com/postman-docs/integrating_with_jenkins_8.png)](https://assets.postman.com/postman-docs/integrating_with_jenkins_8.png)

Click the “Console Output” link in the sidebar to see what Newman returned.

[![console output](https://assets.postman.com/postman-docs/integrating_with_jenkins_9.png)](https://assets.postman.com/postman-docs/integrating_with_jenkins_9.png)

Fix these tests inside Postman and then try again.

[![collection runner view](https://assets.postman.com/postman-docs/integrating_with_jenkins_10.png)](https://assets.postman.com/postman-docs/integrating_with_jenkins_10.png)

You can move on once you see green pass icons for all your tests like the screenshot above.

[![console output for all tests pass](https://assets.postman.com/postman-docs/integrating_with_jenkins_11.png)](https://assets.postman.com/postman-docs/integrating_with_jenkins_11.png)

Jenkins indicates that the build succeeded with a blue ball.

## Configure frequency of runs

To set up the frequency with which Jenkins runs Newman, click on “Configure project” in the main project window and then scroll down.=. The syntax for setting the frequency is `H/(30) * * * *`.

[![build triggers](https://assets.postman.com/postman-docs/integrating_with_jenkins_12.png)](https://assets.postman.com/postman-docs/integrating_with_jenkins_12.png)

**Note:** 30 can be replaced with another number.

Jenkins will now run Newman at your desired frequency and will tell you whether the build failed or succeeded. In a bigger setup, Newman will be part of your build process and probably not the entire process. You can set up notifications and customize Jenkins as per your needs.

You can use a wide variety of other configurations to make your collection more dynamic.

---
For more information about collection runs, see:

* [Starting a collection run](/docs/postman/collection-runs/starting-a-collection-run/)
* [Using environments in collection runs](/docs/postman/collection-runs/using-environments-in-collection-runs/)
* [Working with data files](/docs/postman/collection-runs/working-with-data-files/)
* [Running multiple iterations](/docs/postman/collection-runs/running-multiple-iterations/)
* [Building workflows](/docs/postman/collection-runs/building-workflows/)
* [Sharing a collection run](/docs/postman/collection-runs/sharing-a-collection-run/)
* [Debugging a collection run](/docs/postman/collection-runs/debugging-a-collection-run/)

* [Integration with Travis CI](/docs/postman/collection-runs/integration-with-travis/)
* [Newman with Docker](/docs/postman/collection-runs/newman-with-docker/)
