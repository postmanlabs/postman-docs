---
title: "Intro to collection runs"
order: 53
page_id: "intro_to_collection_runs"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Keep track of GitHub issues using a Postman collection"
    url: "https://blog.getpostman.com/2017/08/15/keep-track-of-github-issues-using-a-postman-collection/?_ga=2.132983240.754547870.1571851340-1454169035.1570491567"
  - type: link
    name: "Postman's New Collection Runner"
    url: "https://blog.getpostman.com/2016/11/22/postmans-new-collection-runner/?_ga=2.132983240.754547870.1571851340-1454169035.1570491567"

warning: false

---

Collections are groups of requests that can be run together as a series of requests, against a corresponding environment.

Running a collection is useful when you want to automate API testing. When you run a collection, you send all requests in your collection one after another.

When you use scripts, you can build integration test suites, pass data between API requests, and build workflows that mirror your actual use case of APIs.

[![collection run parameters](https://assets.postman.com/postman-docs/Collection_Runs_pg1.png)](https://assets.postman.com/postman-docs/Collection_Runs_pg1.png)

To run collections, you can use:

* Postman app collection runner in the header bar.

[![runner button](https://assets.postman.com/postman-docs/Runner-button2.png)](https://assets.postman.com/postman-docs/Runner-button2.png)

* [Newman](/docs/postman/collection-runs/command-line-integration-with-newman/) command line tool.

* [Postman Monitors](/docs/postman/monitors/intro-monitors/) to run collections in scheduled intervals.

---
For more information about collection runs, see:

* [Starting a collection run](/docs/postman/collection-runs/starting-a-collection-run/)
* [Using environments in collection runs](/docs/postman/collection-runs/using-environments-in-collection-runs/)
* [Working with data files](/docs/postman/collection-runs/working-with-data-files/)
* [Running multiple iterations](/docs/postman/collection-runs/running-multiple-iterations/)
* [Building workflows](/docs/postman/collection-runs/building-workflows/)
* [Sharing a collection run](/docs/postman/collection-runs/sharing-a-collection-run/)
* [Debugging a collection run](/docs/postman/collection-runs/debugging-a-collection-run/)
* [Command line integration with Newman](/docs/postman/collection-runs/command-line-integration-with-newman/)
* [Integration with Jenkins](/docs/postman/collection-runs/integration-with-jenkins/)
* [Integration with Travis CI](/docs/postman/collection-runs/integration-with-travis/)
* [Newman with Docker](/docs/postman/collection-runs/newman-with-docker/)
