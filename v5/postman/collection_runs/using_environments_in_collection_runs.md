---
title: "Using environments in collection runs"
page_id: "using_environments_in_collection_runs"
warning: false

---

Environments allow you to create robust requests that can be re-used. Read more about [using variables and environments](/docs/postman/environments_and_globals/variables/).

Environments can also be used in the Collection Runner. Let's look at an example collection, with one POST request that uses environment variables in its URL, body, and test script. Download the sample collection: [collection.json](https://assets.postman.com/postman-docs/usingEnvironments.postman_collection.json). 

[![sample collection](https://assets.postman.com/postman-docs/WS-runs_sample_collections.png)](https://assets.postman.com/postman-docs/WS-runs_sample_collections.png)

The test expects the value of `foo` in the response body to be equal to `bar`. Let us also assume that after some computation, we're resetting the value of this variable to `bar2`.

[![set environment variable](https://assets.postman.com/postman-docs/WS-runs_set_environment_variable2.png)](https://assets.postman.com/postman-docs/WS-runs_set_environment_variable2.png) 

To run this collection correctly in the Collection Runner, you need to supply it the corresponding environment. Download the sample environment: [environment.json](https://assets.postman.com/postman-docs/testEnv.postman_environment.json). In the Collection Runner, if we select our test environment from the environment dropdown on the left and run the collection, you'll see the tests pass. 

[![collection runner parameters](https://assets.postman.com/postman-docs/runs_collection_run.png)](https://assets.postman.com/postman-docs/runs_collection_run.png)  

If you switch back to the main Postman app window and check the value of the variable `foo`, you'll see that it is now `bar2`. 

[![collection runner results](https://assets.postman.com/postman-docs/58704076.png)](https://assets.postman.com/postman-docs/58704076.png)

This is because, by default, any variable changes in the environment (or globals) in the Collection Runner will be reflected in the main Postman app window since `Persist Variables` is checked in the options. In fact, if you run the collection once again, you'll see that it will now fail, since we changed the value of the variable `foo`. 

By default, `Persist Variables` is checked the first time you open the Collection Runner. If you do not want variables to be updated during the run, deselect the `Persist Variables` checkbox. In this case, think of it as the Collection Runner saving the initial state of the environment (and globals), and restoring it after the run is complete. This is useful when you reuse the same variables in your requests and want to run the same collection multiple times. This will also make sure that the environment (and globals) state is not affected by a collection run.

[![persist variables](https://assets.postman.com/postman-docs/runs_persist_variables.png)](https://assets.postman.com/postman-docs/runs_persist_variables.png)

##### Download the collection and environment used in this example:

   *   [collection.json](https://assets.postman.com/postman-docs/usingEnvironments.postman_collection.json)
   *   [environment.json](https://assets.postman.com/postman-docs/testEnv.postman_environment.json)
