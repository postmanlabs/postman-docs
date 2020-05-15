---
title: "Starting a collection run"
order: 112
page_id: "starting_a_collection_run"
search_keyword: "postman.setNextRequest, setNextRequest"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "How to use the Postman collection runner"
    url: "https://www.youtube.com/watch?v=6XjOtI-FPHg"
  - type: link
    name: "How to use the collection runner"
    url: "https://www.youtube.com/watch?v=QqeTZf5x3Is"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Building a Restaurant Discover Service with Postman"
    url: "https://blog.postman.com/2017/07/19/building-a-restaurant-discovery-service-with-postman/"

warning: false

---

Collections are groups of requests that can be run together as a series of requests, against a corresponding environment.

You can use scripts to build integration test suites, pass data between API requests, and build workflows that mirror your actual use case of APIs.

## Customizing requests in collection runner

The collection runner allows for customizing the execution of requests in the following ways:

* **Order of execution**: The requests execute in the order they appear on the **Run order** pane of the collection runner. The execution can be reordered by dragging and dropping.

* **Selective execution**: Requests can be prevented from executing by disabling them using the preceeding check boxes in the **Run order** pane of the collection runner.

This topic describes how to configure collection run parameters for:

* [Collection or folder](#collection-or-folder)
* [Environment](#environment)
* [Iterations](#iterations)
* [Delay](#delay)
* [Log responses](#log-responses)
* [Data](#data)
* [Persist variables](#persist-variables)
* [Run collection without using stored cookies](#run-collection-without-using-stored-cookies)
* [Save cookies after collection run](#save-cookies-after-collection-run)

[![collection run parameters](https://assets.postman.com/postman-docs/starting_a_collection_run/collection_run_parameters.png)](https://assets.postman.com/postman-docs/starting_a_collection_run/collection_run_parameters.png)

## Collection or folder

The collection or folder you want to run.

When you run a collection, all requests in the collection are sent in the order they appear in the main app. As a result each folder is run, and each request inside the folder, is sequentially executed. When you select a folder, only that folder is executed and only requests inside the folder are sent. You can, however, change the order to more closely mirror your workflow when you use the `postman.setNextRequest()` method. You will also be able to use the collection runner for form-data request and binary file bodies containing files.  

To learn more about how to build a workflow, see [Building workflows](/docs/postman/collection-runs/building-workflows/).

## Environment

The environment to use when a collection runs.

To learn how to use environments in collection runs, see [Using environments in collection runs](/docs/postman/collection-runs/using-environments-in-collection-runs/).

## Iterations

The number of times the collection will run.

Sending different data in each iteration and setting a higher iteration counts usually ensures the stability of your APIs.

To learn how to run multiple iterations, see [Running multiple iterations](/docs/postman/collection-runs/running-multiple-iterations/).

## Delay

The interval (in milliseconds) between each request in a collection run.

## Log responses

Limits response logging when the collection runs.

By default, all responses are logged for debugging purposes. For large collections, you can change this setting to improve performance.

Here's more detail about default logging:

* For all requests, responses for all requests will be logged.
* For failed requests, only responses for requests with at least one failing test will be logged.
* For no requests, no responses will be logged.

To learn how to debug collection requests, see [Debugging a collection run](/docs/postman/collection-runs/debugging-a-collection-run/).

## Data

Supplies a data file to use for the collection run.

To learn more about how to use a date file for a collection run, see
[Working with data files](/docs/postman/collection-runs/working-with-data-files/).

## Persist variables

By default, any environment changes in the collection runner are not reflected in the request builder. Enabling this option saves the values of the variables at the end of the run, **overwriting previous values**.

To learn more about Keep variable values in a collection run, see [Using environments in collection runs](/docs/postman/collection-runs/using-environments-in-collection-runs/).

## Run collection without using stored cookies

A request from the collection may require cookies to run. Collection runner can allow/prevent the request from accessing the cookie by the **Run collection without using stored cookies** option. Enabling this allows collection runs without using cookies stored in the cookie manager.

## Save cookies after collection run

A request in the collection may create/update cookies during execution. The Collection runner provides an option to save the cookie to the cookie manager, **overwriting any existing cookie**. Enabling this saves the cookies for the session to the cookie manager.

---
For more information about collections runs, see:

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
