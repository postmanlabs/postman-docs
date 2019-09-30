---
title: "Starting a collection run"
page_id: "starting_a_collection_run"
warning: false

---

Collections are groups of requests that can be run together as a series of requests, against a corresponding environment. Using scripts, you can build integration test suites, pass data between API requests, and build workflows that mirror your actual use case of APIs.

Collections can be run within the Postman app using the collection runner, from the command line using Postman's [Newman](/docs/postman/collection_runs/command_line_integration_with_newman/) tool, or on scheduled intervals using [Postman Monitors](/docs/postman/monitors/intro_monitors/).

Running a collection is useful when you want to automate API testing. When you run a collection, you're essentially sending all requests in your collection one after another. Let's go over several parameters that you can configure for a collection run.

[![collection run parameters](https://assets.postman.com/postman-docs/collectionRunner.png)](https://assets.postman.com/postman-docs/collectionRunner.png)

##### **Collection / Folder**

This is the collection or folder that you want to run. When you run a collection, all requests in the collection are sent in the order in which they appear in the main app. This means each folder is run, and each request inside the folder, is sequentially executed. You can, however, change this order to more closely mirror your workflow by using the setNextRequest() method. Read more about [building workflows](/docs/postman/collection_runs/building_workflows/).

When you select a folder here, only that folder is executed, which means only requests inside the folder are sent.

##### **Environment**

This is the environment that will be used when the collection is run. Read more about [using environments in collection runs](/docs/postman/collection_runs/using_environments_in_collection_runs/).

##### **Iterations**

This is the number of times your collection will be run. Higher iteration counts are usually run to ensure stability of your APIs by sending different data in each iteration. Read more about [running multiple iterations](/docs/postman/collection_runs/running_multiple_iterations/).

##### **Delay**

This is the interval (in ms) between each request in your collection run.

##### **Log Responses**

This is used to limit response logging when the collection is run. By default, all responses are logged for debugging purposes, but for large collections, this can be changed to improve performance. Read more about [debugging collection requests](/docs/postman/collection_runs/debugging_a_collection_run/).

   *   For all requests, responses for all requests will be logged.
   *   For failed requests, only responses for requests with at least one failing test will be logged.
   *   For no requests, no responses will be logged.

##### **Data**

This is used to supply a data file to be used for the collection run. Read more about [data files](/docs/postman/collection_runs/working_with_data_files/).

##### **Persist variables**

By default, any environment changes in the collection runner are not reflected back in the request builder. Read more about [using environments in collection runs](/docs/postman/collection_runs/using_environments_in_collection_runs/).
