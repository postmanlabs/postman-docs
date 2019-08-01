---
title: "Starting a collection run"
page_id: "starting_a_collection_run"
warning: false

---

Collections are groups of requests that can be run together as a series of requests, against a corresponding environment. 

You can use scripts to build integration test suites, pass data between API requests, and build workflows that mirror your actual use case of APIs.

This topic describes how to configure collection run parameters for:
* [Collection or folder](#collection-or-folder)
* [Environment](#environment)
* [Iterations](#iterations)
* [Delay](#delay)
* [Log responses](#log-responses)
* [Data](#data)
* [Persist variables](#persist-variables)


[![collection run parameters](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Collection_Runs_pg1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Collection_Runs_pg1.png)

### Collection or folder

The collection or folder you want to run. 



When you run a collection, all requests in the collection are sent in the order they appear in the main app. As a result each folder is run, and each request inside the folder, is sequentially executed. When you select a folder, only that folder is executed and only requests inside the folder are sent. You can, however, change the order to more closely mirror your workflow when you use the `postman.setNextRequest()` method. You will also be able to use the collection runner for form-data request and binary file bodies containing files.  


To learn more about how to build a workflow, see [Building workflows](/docs/v6/postman/collection_runs/building_workflows).

### Environment

The environment to use when a collection runs. 

To learn how to use environments in collection runs, see [Using environments in collection runs](/docs/v6/postman/collection_runs/using_environments_in_collection_runs).

### Iterations

The number of times the collection will run. 

Sending different data in each iteration and setting a higher iteration counts usually ensures the stability of your APIs.

To learn how to run multiple iterations, see [Running multiple iterations](/docs/v6/postman/collection_runs/running_multiple_iterations).

### Delay

The interval (in milliseconds) between each request in a collection run.

### Log responses

Limits response logging when the collection runs. 

By default, all responses are logged for debugging purposes. For large collections, you can change this setting to improve performance. 

Here's more detail about default logging:

   *   For all requests, responses for all requests will be logged.
   *   For failed requests, only responses for requests with at least one failing test will be logged.
   *   For no requests, no responses will be logged.
   
   
To learn how to debug collection requests, see [Debugging a collection run](/docs/v6/postman/collection_runs/debugging_a_collection_run).

### Data

Supplies a data file to use for the collection run.

To learn more about how to use a date file for a collection run, see
[Working with data files](/docs/v6/postman/collection_runs/working_with_data_files).


### Persist variables

By default, any environment changes in the collection runner are not reflected in the request builder. 

To learn more about persist variables in a collection run, see [Using environments in collection runs](/docs/v6/postman/collection_runs/using_environments_in_collection_runs). 

<br>
<br>

For more information about collections runs, see:

* [Using environments in collection runs](/docs/v6/postman/collection_runs/using_environments_in_collection_runs)
* [Working with data files](/docs/v6/postman/collection_runs/working_with_data_files)
* [Running multiple iterations](/docs/v6/postman/collection_runs/running_multiple_iterations)
* [Building workflows](/docs/v6/postman/collection_runs/building_workflows)
* [Sharing a collection run](/docs/v6/postman/collection_runs/sharing_a_collection_run)
* [Debugging a collection run](/docs/v6/postman/collection_runs/debugging_a_collection_run)
* [Command line integration with Newman](/docs/v6/postman/collection_runs/command_line_integration_with_newman)
* [Integration with Jenkins](/docs/v6/postman/collection_runs/integration_with_jenkins)
* [Integration with Travis CI](/docs/v6/postman/collection_runs/integration_with_travis)
* [Newman with Docker](/docs/v6/postman/collection_runs/newman_with_docker)

