---
title: "Using environments in collection runs"
order: 113
page_id: "using_environments_in_collection_runs"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Variables"
    url: "/docs/postman/variables-and-environments/variables/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Ping Identity"
    url: "https://www.postman.com/resources/case-studies/pingidentity/"
  - type: link
    name: "AMC Theatres"
    url: "https://www.postman.com/resources/case-studies/amc-theatres/"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Generate Spotify Playlists using a Postman Collection"
    url: "https://blog.postman.com/2016/11/09/generate-spotify-playlists-using-a-postman-collection/"

warning: false
---

Environments enables you to create robust requests that you can reuse. For more information about using variables and environments, see [Variables](/docs/postman/variables-and-environments/variables/). You also can use environments in the Collection Runner.

Let's look at an example collection with one POST request that uses environment variables in its URL, body, and test script.

* [Getting started](#getting-started)
* [Running the sample collection](#running-the-sample-collection)

## Getting started

### Downloading sample file

To begin, download the [sample collection](https://assets.postman.com/postman-docs/usingEnvironments.postman_collection.json).

### Importing sample file

To import the sample in Postman, click the **Import** button in the header bar. In the **IMPORT** modal, select the sample JSON file to upload it.

[![import sample](https://assets.postman.com/postman-docs/using_environment_in_collection_runs/import_sample.png)](https://assets.postman.com/postman-docs/using_environment_in_collection_runs/import_sample.png)

The sample file displays in Postman as `postman-echo.com/{{path}}` in the sidebar.

[![sample collection](https://assets.postman.com/postman-docs/using_environment_in_collection_runs/sample_collection.png)](https://assets.postman.com/postman-docs/using_environment_in_collection_runs/sample_collection.png)

The test expects the value of `foo` in the response body to be equal to `bar`. Let us also assume that after some computation, we're resetting the value of this variable to `bar2`.

[![set environment variable](https://assets.postman.com/postman-docs/using_environment_in_collection_runs/set_environment_variable.png)](https://assets.postman.com/postman-docs/using_environment_in_collection_runs/set_environment_variable.png)

## Running the sample collection

### Downloading the sample environment

To run this collection correctly in the Collection Runner, you must supply the corresponding environment.

Download the [sample environment JSON file](https://assets.postman.com/postman-docs/testEnv.postman_environment.json).

### Configuring the Collection Runner

In the Collection Runner, select the test environment from the environment dropdown on the left and run the collection. You'll see the tests pass.

[![collection runner parameters](https://assets.postman.com/postman-docs/using_environment_in_collection_runs/collection_runner_parameters.png)](https://assets.postman.com/postman-docs/using_environment_in_collection_runs/collection_runner_parameters.png)  

If you switch back to the main Postman app window and check the value of the variable `foo`, you'll see that it is now `bar2`.

By default, any variable changes in the environment (or globals) in the Collection Runner shows in the main Postman app window because `Persist Variables` is checked in the options. If you run the collection once again, you'll see that it now fails, since you changed the value of the variable `foo`.

[![collection runner results](https://assets.postman.com/postman-docs/using_environment_in_collection_runs/collection_runner_results.png)](https://assets.postman.com/postman-docs/using_environment_in_collection_runs/collection_runner_results.png)

By default, `Keep variable values` is checked the first time you open the Collection Runner. If you do not want variables to be updated during the run, deselect the `Keep variable values` checkbox.

In this case, think of it as the Collection Runner saving the initial state of the environment (and globals), and restoring it after the run is complete. This action is useful when you reuse the same variables in your requests and want to run the same collection multiple times. It ensures the environment (and globals) state is not affected by a collection run.

[![keep variables](https://assets.postman.com/postman-docs/using_environment_in_collection_runs/keep_variables.png)](https://assets.postman.com/postman-docs/using_environment_in_collection_runs/keep_variables.png)

When you run a collection, Postman takes a layered approach in updating your current and initial values to protect your data. There are two options –  ‘Keep variable values’ and ‘Automatically persist variable values’ that work in tandem with your variables to keep them the way you want. The behavior of these variables depends a lot on the way you set these two options in your settings. For a general understanding of inter-dependency of these settings, you may refer to the following flow chart.

[![keep vars](https://assets.postman.com/postman-docs/Flow-Chart.png)](https://assets.postman.com/postman-docs/Flow-Chart.png)

After running your collection, Postman first checks the setting ‘Keep variable values’. If it is off, it will not make any change to the variable values. If it is on Postman updates your current values. Once Postman updates the current values, it will still check if Auto-Persist is on/off. If this option is off, Postman will not persist the current value to the initial value. If this option is ‘on’, it will update the initial values.

---
For more information about collection runs, see:

* [Starting a collection run](/docs/postman/collection-runs/starting-a-collection-run/)
* [Working with data files](/docs/postman/collection-runs/working-with-data-files/)
* [Running multiple iterations](/docs/postman/collection-runs/running-multiple-iterations/)
* [Building workflows](/docs/postman/collection-runs/building-workflows/)
* [Sharing a collection run](/docs/postman/collection-runs/sharing-a-collection-run/)
* [Debugging a collection run](/docs/postman/collection-runs/debugging-a-collection-run/)
* [Command line integration with Newman](/docs/postman/collection-runs/command-line-integration-with-newman/)
* [Integration with Jenkins](/docs/postman/collection-runs/integration-with-jenkins/)
* [Integration with Travis CI](/docs/postman/collection-runs/integration-with-travis/)
* [Newman with Docker](/docs/postman/collection-runs/newman-with-docker/)
