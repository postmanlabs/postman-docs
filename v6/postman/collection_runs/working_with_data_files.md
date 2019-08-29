---
title: "Working with data files"
page_id: "working_with_data_files"
warning: false

---

Using data files is a powerful way to test the behavior of APIs with varying data in unexpected circumstances. We can think of data files as parameters for each iteration of a collection run.

Let’s walk through an example.

* [Getting started](#getting-started)
* [Working with the sample files](#working-with-the-sample-files)

## Getting started

Before we begin, download the following collection and data files we'll use in this example.

* [Collection.json](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58533790.json)
* [JSON](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58702589.json)
* [CSV](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58702574.csv)

### Importing sample collection files

To import the collection files in Postman, click the **Import** button in the header bar. In the **IMPORT** modal, select the sample files to upload. You can only import collection and environment files. We'll use data files like .JSON and .CSV for analysis.

**Note:** You cannot import data files; you can only select them at the start of a collection run.

[![import sample](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/working_with_datafiles/import_sample.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/working_with_datafiles/import_sample.png)

You should see your collection with a request you just imported in the sidebar as shown in the image below.

[![post request](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/working_with_datafiles/post_request.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/working_with_datafiles/post_request.png)

### Importing sample data files

To select data files, you should go to the collection runner. To learn more about running collections and how to get to the Collection Runner screen, see [Intro to Collection Runs](/docs/postman/collection_runs/intro_to_collection_runs/)

Once you get to the Collection Runner screen, the screen appears as illustrated below:

[![import data file](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/working_with_datafiles/collection_runner_open.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/working_with_datafiles/collection_runner_open.png)

See the red-circled highlighted area in the above screen. Use this option to select your data files.

## Working with the sample files

Here, we have a simple collection with a single POST request. If you open up this request, you'll see two variables used in the request, `path` (in the URL) & `value` in the request body.

Use these variables in the same way as environment variables. We'll supply the value to these variables using the environment and data variables.

When you open the test script, you'll see we're using some variables in the test script -`data` specifically, which isn't defined in the script itself.

The Postman Sandbox initializes the data variable from the CSV files that we'll select in the collection run.

[![using the data variable](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/working_with_datafiles/using_the_data_variable.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/working_with_datafiles/using_the_data_variable.png)

Let's investigate the data files first. We currently support JSON and CSV files. This examples talks only about .CSV data file.

Here's the CSV data file:

```bash
    path, value
    post, 1
    post, 2
    post, 3
    post, 4
```

In typical CSV fashion, the first row represents all variable names, and subsequent rows represent values for these variables for each iteration. For iteration 1, `path` has value `post`, and `value` is `1`. For the second iteration, `path` is still `post`, but `value` is `2`.

Note that you can only use one data file for one run.

Now that you understand how to construct data files, let's supply this data file to a Collection Run.

Click "Select File" in the Runner, and select one of these files. You can also preview what values each variable has in each iteration by clicking "Preview" next to the file name.

[![collection runner view](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/working_with_datafiles/collection_runner_view.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/working_with_data_files/collection_runner_view.png)

[![preview data](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/working_with_datafiles/preview_data.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/working_with_data_files/preview_data.png)

Let's run our collection now. You'll see that all tests pass now.

If you open up the request debug tooltip, and expand "Request Body", you'll see that the variable `{{value}}` was replaced by the value, as dictated by the data file.

Read more about [debugging requests](/docs/postman/collection_runs/debugging_a_collection_run/). In fact, for different iterations, this value is different. This way, we've thrown different kinds of data to our API and have ensured that it works correctly for each case.

[![request debug tooltip](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/working_with_datafiles/request_debug_tooltip.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/working_with_datafiles/request_debug_tooltip.png)

Let's also take a look at our test scripts once again. The variable `data` is a predefined variable that gets the values from the data file.

With each iteration, its value is updated with new data from our file. `data` is an object with all variables you defined in your file as its keys.

Since this API echoes back whatever is sent to it, we're asserting that the returned value from Echo is the same as the one dictated by our file.

You can use data variables in all places and in the exact way you can use environment variables, except in pre-request and test scripts.

---
For more information about collection runs, see:

* [Starting a collection run](/docs/postman/collection_runs/starting_a_collection_run/)
* [Using environments in collection runs](/docs/postman/collection_runs/using_environments_in_collection_runs/)
* [Running multiple iterations](/docs/postman/collection_runs/running_multiple_iterations/)
* [Building workflows](/docs/postman/collection_runs/building_workflows/)
* [Sharing a collection run](/docs/postman/collection_runs/sharing_a_collection_run/)
* [Debugging a collection run](/docs/postman/collection_runs/debugging_a_collection_run/)
* [Command line integration with Newman](/docs/postman/collection_runs/command_line_integration_with_newman/)
* [Integration with Jenkins](/docs/postman/collection_runs/integration_with_jenkins/)
* [Integration with Travis CI](/docs/postman/collection_runs/integration_with_travis/)
* [Newman with Docker](/docs/postman/collection_runs/newman_with_docker/)
