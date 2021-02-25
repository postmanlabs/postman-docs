---
title: "Using the Collection Runner"
order: 55
page_id: "intro_to_collection_runs"
search_keyword: "postman.setNextRequest, setNextRequest"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Running a collection"
    url: "https://www.youtube.com/watch?v=la0LqQwwKAA"
  - type: dynamic_blog
    name: "Related Blog Posts"
    blog_tag: "collections"
warning: false

---

The Collection Runner allows you to run sets of requests in a specified sequence. The Collection Runner will log your request test results, and your scripts can pass data between requests as well as altering the request workflow.

You can run collections against specific environments, and can pass data files into a run. Collection runs allow you to automate your API testing, and you can schedule runs using monitors. You can integrate collection runs to your CI/CD pipeline using Postman's CLI Newman.

[![Runner results](https://assets.postman.com/postman-docs/runner-overview-v8.jpg)](https://assets.postman.com/postman-docs/runner-overview-v8.jpg)

> You can run a collection in Postman, using Newman, or with a monitor.

## Contents

* [Starting a collection run](#starting-a-collection-run)
* [Running your collections](#running-your-collections)
* [Sharing collection runs](#sharing-collection-runs)
* [Automating collection runs](#automating-collection-runs)
* [Next steps](#next-steps)

## Starting a collection run

To run a collection, open a collection and click __Run__ on the overview tab.

[![Collection Run](https://assets.postman.com/postman-docs/collection-run-button-v8.jpg)](https://assets.postman.com/postman-docs/collection-run-button-v8.jpg)

You can also click __Runner__ at the bottom right of Postman and drag a collection over from __Collections__ or __History__ on the left.

<img alt="Run history" src="https://assets.postman.com/postman-docs/run-history-v8.jpg" width="350px"/>

By default your requests will run in the sequence they are listed in the collection, but you can click to the left of each one and drag to move it if you need to change the order of execution. You can also deselect an individual request by unchecking its box.

[![Runner request order](https://assets.postman.com/postman-docs/runner-order-v8.jpg)](https://assets.postman.com/postman-docs/runner-order-v8.jpg)

> You can alter the flow of execution from your request scripts using `setNextRequest` to [create workflows](/docs/running-collections/building-workflows/).

If you want your collection to run against an environment, make the environment active by selecting it from the drop-down list at the top right of Postman, or from __Environments__ on the left.

You can optionally choose config parameters for your collection run:

* The number of iterations for your collection run. You can also run collections multiple times against different data sets to [build workflows](/docs/running-collections/building-workflows/).
* An interval delay (milliseconds) between each request.
* A [data file](/docs/running-collections/working-with-data-files/) for the collection run.
* Saving responses to the log will allow you to review them but can affect performance.
* Persisting variables will mean that any variables updated by the run will remain changed after it. If you do not persist variables, changes will not be saved after the run completes. _Note that persisting variables in the collection run will update the current value only. If you have variables set to automatically persist in your Postman settings, each variable initial value will update to the current value after a run._
* If your requests use cookies, you can optionally disable them for a collection run.
* Saving cookies means that any values affected by requests during the run will remain after it completes.

## Running your collections

With your config complete, click __Run (collection name)__ to execute it. Postman will display your request executions and test results in realtime. To the right you will see a number for each iteration—click to select one. You will see an overview for each request, including its passed or failed tests—you can filter on each using the __Passed__ and __Failed__ tabs at the top.

Click a request name to access more data on what happened when it executed.

[![Runner results](https://assets.postman.com/postman-docs/runner-results-v8.jpg)](https://assets.postman.com/postman-docs/runner-results-v8.jpg)

If any tests in a request script fail during the collection run, it will be listed as failed—it will be listed as passed if all tests inside it pass.

[![Collection run fail](https://assets.postman.com/postman-docs/run-fail-v8.jpg)](https://assets.postman.com/postman-docs/run-fail-v8.jpg)

> If you check __Save responses__ when you start a collection run, you will see the responses in the run results.

For additional details such as viewing log statements, open the __Console__ from the bottom left of Postman.

[![Runner console](https://assets.postman.com/postman-docs/run-console-v8.jpg)](https://assets.postman.com/postman-docs/run-console-v8.jpg)

You can export test results and view the __Run Summary__ using the buttons at the top right.

[![Runner result summary](https://assets.postman.com/postman-docs/run-overview-v8.jpg)](https://assets.postman.com/postman-docs/run-overview-v8.jpg)

The summary also lists a column for each iteration of your collection run so that you can see test output for the whole run at a glance.

To navigate back click __Run Results__.

## Sharing collection runs

You can share the run results for a collection, by exporting them from the Collection Runner so that other people can analyze them.

To export a collection run, open it in the __Runner__ (using __History__ on the left if you don't still have the run open). Click __Export Results__ at the top right to download the run. Choose a location to save your downloaded collection run.

## Automating collection runs

In addition to using the Collection Runner in Postman, you can use collection runs in conjunction with other utilities in order to build automation into your API projects.

* The Postman command line interface [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/) allows you to run collections and build them into your development pipeline, responding to test outcomes to maintain your API performance.
* Adding a [monitor](/docs/designing-and-developing-your-api/monitoring-your-api/intro-monitors/) to your collection lets you schedule collection runs and stay informed of any issues.

## Next steps

You can use scripts to [build workflows](/docs/running-collections/building-workflows/) specifying conditional sequences for running the requests in your collections.
