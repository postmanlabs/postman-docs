---
title: "Running multiple iterations"
page_id: "running_multiple_iterations"
warning: false
---

This topic describes how to run multiple iterations of a Collection. It also describes:

* [Switching between iterations](#switching-between-iterations)
* [Using green and red filters](#using-green-and-red-filters)
* [Debugging with multiple iterations](#debugging-with-multiple-iterations)
* [Customizing iteration data](#customizing-iteration-data)

Before we start, download the [collection. json](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59037885.json) file we'll use to explain multiple iterations.

The iterations of a collection run reflect how many times the collection will run. Here we have a collection run with five iterations.

[![collection runner](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Collection_Runs_pg22.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Collection_Runs_pg22.png)
[![collection runner results](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039058.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039058.png)

## Switching between iterations

To quickly jump between iterations, you can click one of the numbers on the right sidebar. Each number represents one iteration.

## Using green and red filters

The left sidebar contains three filters, which you can use to show all, passed, or failed tests. These filters are useful to help you quickly find bugs in your API.

[![collection runner filters](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039741.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039741.png)

## Debugging with multiple iterations

Working with multiple iterations can become tedious when switching between them to check for expected behavor. For this reason, there's a third screen in the collection runner, which is the Run Summary screen.

When a run is finished (or stopped), you can open up the Run Summary screen by clicking the orange **Run Summary** button.

[![run summary](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039072.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59039072.png)

This screen is, as the name suggests, an overview of your run. Here, you can see each request, and its pass/fail status as a timeline.

A request is treated as Passed if all tests inside it pass. Similarly, if one or more tests fail, the request is marked as Failed.

The numbers in the header represent the current iteration. Now its easy to pinpoint the misbehaving test. Click on an iteration in the header for that iteration, so you can further investigate what might be wrong.

Iterations in the collection runner are 1-indexed with the first iteration beginning with a count of 1.

Note that this is different than the iteration count accessible programmatically in the [Postman sandbox](/docs/v6/postman/scripts/postman_sandbox_api_reference), which is 0-indexed with the first iteration beginning with a count of zero.

## Programmatically customize iteration data

The data for a particular iteration can be accessed by `pm.iterationData` object, which provides a number of methods to programmatically access and manipulate the data related to that iteration. Following is a list of methods:

`addLayer(list: VariableList)`: Add a list of variables to iteration data.

`clear()`: Clears the iteration data.

`get(key: string)`: Get the value of a variable.

`has(variableName: string)`: Checks if variable with the specified name exists in iteration data.

`set(key: string, value: any, type: string)`: Set the name,value and type of a variable.

`syncVariablesFrom(obj: {[key: string]: VariableDefinition}, track?: boolean, prune?: boolean)`:
Get variables from an object, if successful returns an object containing the variables otherwise it returns undefind.

`syncVariablesTo(obj?: {[key: string]: VariableDefinition})`: Set the iteration data value (variable name and its definition) to an object. Returns the object with values set.

`toJSON()`: Convert the iteration data to JSON.

`toObject(excludeDisabled: boolean, caseSensitive: boolean)`: Convert the iteration data to a plain javascript object.

`unset(key: string)`: Unsets the value of a variable.

`variables()`: Returns an object containing variables and their descriptions.

`static isVariableScope(obj: any)`: checks if the specified iteration data object exists.

For usage of the above methods, see: [pm.iterationData](/Users/postman/postman-docs/v6/postman/scripts/postman_sandbox_api_reference.md)

---
For more information about collection runs, see:

* [Starting a collection run](/docs/v6/postman/collection_runs/starting_a_collection_run)
* [Using environments in collection runs](/docs/v6/postman/collection_runs/using_environments_in_collection_runs)
* [Working with data files](/docs/v6/postman/collection_runs/working_with_data_files)
* [Building workflows](/docs/v6/postman/collection_runs/building_workflows)
* [Sharing a collection run](/docs/v6/postman/collection_runs/sharing_a_collection_run)
* [Debugging a collection run](/docs/v6/postman/collection_runs/debugging_a_collection_run)
* [Command line integration with Newman](/docs/v6/postman/collection_runs/command_line_integration_with_newman)
* [Integration with Jenkins](/docs/v6/postman/collection_runs/integration_with_jenkins)
* [Integration with Travis CI](/docs/v6/postman/collection_runs/integration_with_travis)
* [Newman with Docker](/docs/v6/postman/collection_runs/newman_with_docker)
