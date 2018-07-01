---
title: "Running multiple iterations"
page_id: "running_multiple_iterations"
warning: false
---

This topic describes how to run multiple iterations of a Collection. It also describes:

* [Switching between iterations](#switching-between-iterations)
* [Using green and red filters](#using-green-and-red-filters)
* [Debugging with multiple iterations](#debugging-with-multiple-iterations)

Before we start, download the [collection. json](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59037885.json) file we'll use to explain multiple iterations.

The iterations of a collection run reflect how many times the collection will run. Here we have a collection run with five iterations.

[![collection runner](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039044.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039044.png)
[![collection runner results](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039058.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039058.png)

### Switching between iterations

To quickly jump between iterations, you can click one of the numbers on the right sidebar. Each number represents one iteration.

### Using green and red filters

The left sidebar contains three filters, which you can use to show all, passed, or failed tests. These filters are useful to help you quickly find bugs in your API.

[![collection runner filters](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039741.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039741.png)

### Debugging with multiple iterations

Working with multiple iterations can become tedious when switching between them to check for expected behavor. For this reason, there's a third screen in the collection runner, which is the Run Summary screen. 

When a run is finished (or stopped), you can open up the Run Summary screen by clicking the orange **Run Summary** button.

[![run summary](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039072.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039072.png)

This screen is, as the name suggests, an overview of your run. Here, you can see each request, and its pass/fail status as a timeline. 

A request is treated as Passed if all tests inside it pass. Similarly, if one or more tests fail, the request is marked as Failed.

The numbers in the header represent the current iteration. Now its easy to pinpoint the misbehaving test. Click on an iteration in the header for that iteration, so you can further investigate what might be wrong. 

Iterations in the collection runner are 1-indexed with the first iteration beginning with a count of 1. 

Note that this is different than the iteration count accessible programmatically in the [Postman sandbox](/docs/v6/postman/scripts/postman_sandbox_api_reference){:target="_blank"}, which is 0-indexed with the first iteration beginning with a count of zero.
<br>
<br>

For more information about collection runs, see:

* [Starting a collection run](/docs/v6/postman/collection_runs/starting_a_collection_run){:target="_blank"}
* [Using environments in collection runs](/docs/v6/postman/collection_runs/using_environments_in_collection_runs){:target="_blank"}
* [Working with data files](/docs/v6/postman/collection_runs/working_with_data_files){:target="_blank"}
* [Building workflows](/docs/v6/postman/collection_runs/building_workflows){:target="_blank"}
* [Sharing a collection run](/docs/v6/postman/collection_runs/sharing_a_collection_run){:target="_blank"}
* [Debugging a collection run](/docs/v6/postman/collection_runs/debugging_a_collection_run){:target="_blank"}
* [Command line integration with Newman](/docs/v6/postman/collection_runs/command_line_integration_with_newman){:target="_blank"}
* [Integration with Jenkins](/docs/v6/postman/collection_runs/integration_with_jenkins){:target="_blank"}
* [Integration with Travis CI](/docs/v6/postman/collection_runs/integration_with_travis){:target="_blank"}
* [Newman with Docker](/docs/v6/postman/collection_runs/newman_with_docker){:target="_blank"}

