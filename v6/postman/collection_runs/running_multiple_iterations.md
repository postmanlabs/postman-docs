---
title: "Running multiple iterations"
page_id: "running_multiple_iterations"
warning: false
---

This topic describes how to run multiple iterations of a Collection. It also describes:

* [Switching between iterations](#switching-between-iterations)
* [Using green and red filters](#using-green-and-red-filters)
* [Debugging with multiple iterations](#debugging-with-multiple-iterations)
* [Programmatically customize iteration data](#programmatically-customize-iteration-data)

Before we start, download the [collection. json](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59037885.json) file we'll use to explain multiple iterations.

The iterations of a collection run reflect how many times the collection will run. Here we have a collection run with five iterations.

[![collection runner](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/running_multiple_iterations/collection_runner.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/running_multiple_iterations/collection_runner.png)
[![collection runner results](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/running_multiple_iterations/collection_runner_results.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/running_multiple_iterations/collection_runner_results.png)

## Switching between iterations

To quickly jump between iterations, you can click one of the numbers on the right sidebar. Each number represents one iteration.

## Using green and red filters

The left sidebar contains three filters, which you can use to show all, passed, or failed tests. These filters are useful to help you quickly find bugs in your API.

[![collection runner filters](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/running_multiple_iterations/collection_runner_filters.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/running_multiple_iterations/collection_runner_filters.png)

## Debugging with multiple iterations

Working with multiple iterations can become tedious when switching between them to check for expected behavor. For this reason, there's a third screen in the collection runner, which is the Run Summary screen.

When a run is finished (or stopped), you can open up the Run Summary screen by clicking the orange **Run Summary** button.

[![run summary](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/running_multiple_iterations/run_summary.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/running_multiple_iterations/run_summary.png)

This screen is, as the name suggests, an overview of your run. Here, you can see each request, and its pass/fail status as a timeline.

A request is treated as Passed if all tests inside it pass. Similarly, if one or more tests fail, the request is marked as Failed.

The numbers in the header represent the current iteration. Now its easy to pinpoint the misbehaving test. Click on an iteration in the header for that iteration, so you can further investigate what might be wrong.

Iterations in the collection runner are 1-indexed with the first iteration beginning with a count of 1.

Note that this is different than the iteration count accessible programmatically in the [Postman sandbox](/docs/postman/scripts/postman_sandbox_api_reference/), which is 0-indexed with the first iteration beginning with a count of zero.

## Programmatically customize iteration data

To provide data for a collection run, the Collection runner provides a "Data file" option. However, if you want to access and manipulate that data in the collection runs, you will need to it programmatically through scripts. This can be done by the `pm.iterationData` object, which provides several methods to programmatically access and manipulate the data, allowing the access of iteration data during a collection run.

For a list of methods provided by the iterationData object, see: [pm.iterationData](/docs/postman/scripts/postman_sandbox_api_reference/)

---
For more information about collection runs, see:

* [Starting a collection run](/docs/postman/collection_runs/starting_a_collection_run/)
* [Using environments in collection runs](/docs/postman/collection_runs/using_environments_in_collection_runs/)
* [Working with data files](/docs/postman/collection_runs/working_with_data_files/)
* [Building workflows](/docs/postman/collection_runs/building_workflows/)
* [Sharing a collection run](/docs/postman/collection_runs/sharing_a_collection_run/)
* [Debugging a collection run](/docs/postman/collection_runs/debugging_a_collection_run/)
* [Command line integration with Newman](/docs/postman/collection_runs/command_line_integration_with_newman/)
* [Integration with Jenkins](/docs/postman/collection_runs/integration_with_jenkins/)
* [Integration with Travis CI](/docs/postman/collection_runs/integration_with_travis/)
* [Newman with Docker](/docs/postman/collection_runs/newman_with_docker/)
