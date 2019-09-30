---
title: "Working with data files"
page_id: "working_with_data_files"
warning: false

---

Data files are extremely powerful ways to test your APIs with varying data to check if they behave properly under unexpected circumstances.

We can think of data files are parameters for each iteration of a collection run. Let's walk through an example.

##### Download the collection and data files used in this example:

   *   [Collection.json](https://assets.postman.com/postman-docs/58533790.json)
   *   [JSON](https://assets.postman.com/postman-docs/58702589.json), [CSV](https://assets.postman.com/postman-docs/58702574.csv)

[![post request](https://assets.postman.com/postman-docs/WS-working-with-data-1.png)](https://assets.postman.com/postman-docs/WS-working-with-data-1.png)

Here, we have a simple collection with a single POST request. If you open up this request, you'll see two variables used in the request, `path` (in the URL) & `value` (in the request body). These are used just like environment variables. We will supply the value to these variables using a JSON / CSV file. On opening the test script, you'll see we're using some variables in the test script -`data` specifically. This isn't defined in the script itself. The Postman Sandbox initializes the data variable from the JSON/CSV file that we will select in the collection run.

[![using the data variable](https://assets.postman.com/postman-docs/WS-working-with-data-files-2.png)](https://assets.postman.com/postman-docs/WS-working-with-data-files-2.png)

Let's investigate the data files first. We currently support JSON & CSV files.

The JSON data file looks like this:

```json
    [{
      "path": "post",
      "value": "1"
    }, {
      "path": "post",
      "value": "2"
    }, {
      "path": "post",
      "value": "3"
    }, {
      "path": "post",
      "value": "4"
    }]
```

This is an array of objects. Each object represents the variable values for one iteration. Each member of this object represents a variable. In this way, in the first iteration, the variable called `path` will have the value `post`, and the variable `value` will have the value `1`. Similarly, in the second iteration, `path` will still be `post` and `value` will be `2`. In this example, the variable `path` does not change it's value over iterations, but `value` does. This is totally up to you.

The data file can also be a CSV. The example CSV looks like this:

```
    path, value
    post, 1
    post, 2
    post, 3
    post, 4
```

In typical CSV fashion, the first row represents all variable names, and subsequent rows represent values for these variables for each iteration. For iteration 1, `path` has value `post`, and `value` is `1`. For the second iteration, `path` is still `post`, but `value` is `2`.

Do note that you can only use one data file for one run.

Now that you understand how to construct data files, let's supply this data file to a Collection Run. Click `Select File` in the Runner, and select one of these files. You can also preview what values each variable has in each iteration by clicking on `Preview` next to the file name.

[![collection runner view](https://assets.postman.com/postman-docs/58702694.png)](https://assets.postman.com/postman-docs/58702694.png)             

[![preview data](https://assets.postman.com/postman-docs/58703253.png)](https://assets.postman.com/postman-docs/58703253.png)

Let's run our collection now. You'll see that all tests pass now. If you open up the request debug tooltip, and expand `Request Body`, you'll see that the variable `{{value}}` was replaced by the value, as dictated by the data file. Read more about [debugging requests](/docs/postman/collection_runs/debugging_a_collection_run/). In fact, for different iterations, this value is different. This way, we've thrown different kinds of data to our API and have ensured that it works correctly for each case.

[![request debug tooltip](https://assets.postman.com/postman-docs/58702708.png)](https://assets.postman.com/postman-docs/58702708.png)

Let's also take a look at our test scripts once again. The variable `data` is a predefined variable that gets the values from the data file. With each iteration, it's value is updated with new data from our file. `data` is an object with all variables you defined in your file as it's keys. Since this API echoes back whatever is sent to it, we're asserting that the returned value from Echo is the same as the one dictated by our file.

Data variables can be used in all places that environment variables can be used, in the exact same way, except in pre-request & test scripts.
