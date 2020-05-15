---
title: "Working with data files"
order: 117
page_id: "working_with_data_files"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collection runs"
    url: "/docs/postman/collection-runs/intro-to-collection-runs/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Looping through a data file in the Postman Collection Runner"
    url: "https://blog.postman.com/2018/04/11/looping-through-a-data-file-in-the-postman-collection-runner/"
  - type: link
    name: "Read and write to REST-enabled databases"
    url: "https://blog.postman.com/2018/02/09/read-and-write-to-rest-enabled-databases/"
  - type: link
    name: "Write to your local file system using a Postman Collection"
    url: "https://blog.postman.com/2017/09/01/write-to-your-local-file-system-using-a-postman-collection/"

warning: false

---

You can use data files to pass Postman sets of values to use in a collection run. By selecting a JSON or CSV data file in the Collection Runner, you can test your requests with multiple different values as part of a single run.

## Running collections with data files

When you [initiate a collection run](/docs/postman/collection-runs/starting-a-collection-run/) you will see an option to select a data file. Click __Runner__ at the top left of the Postman app. Select your collection, and click __Select File__ next to __Data__.

![Setup Collection Run](https://assets.postman.com/postman-docs/data-file-run-setup.png)

Select your data file. You will see an option to __Preview__ the data in the file before starting the run.

![Data File Preview](https://assets.postman.com/postman-docs/data-file-preview.png)

Click __Run using data files__ to begin the run with the values from the file.

> * You can try out the steps in this page by first importing [the sample collection](https://assets.postman.com/postman-docs/58533790.json)—download and import it into Postman using the __Import__ button at the top left of the app.
> ![Import Collection](https://assets.postman.com/postman-docs/collection-import-file.png)
> * In the Collection Runner, choose the collection you imported. Download [the sample data file](https://assets.postman.com/postman-docs/58702589.json) and select it in the __Runner__ also.
> * Note that the sample collection contains a `POST` request which uses a `path` variable in the URL. This path variable is specified in each record in the data file. The request also uses a `value` variable in the body which is also pulled from the data file for each iteration. _The example request is to the [Postman Echo API](https://docs.postman-echo.com/), a learning resource that returns the data you send it._

The Collection Runner will run the collection requests for each iteration in the data file. The output you see will indicate the results for any tests you have defined in your collection requests.

![Tests](https://assets.postman.com/postman-docs/data-file-tests-tab.png)

Click a request in the Collection Runner __Run Results__ to see more detail on its data.

![Collection Run Results](https://assets.postman.com/postman-docs/data-file-collection-run.png)

Any data you have defined in the requests will be used when the collection runs, and your request data can reference values defined in the data file.

![Data File Value](https://assets.postman.com/postman-docs/request-body-data-run.png)

## Accessing data file values

You can reference values defined in the data file throughout your requests, however to access them in scripts, you need to use a different technique. To use values from the data file in your __Tests__ or __Pre-request Script__ code, use the `iterationData`, which provides access to the current data file record being used to run the request.

```js
//get the 'value' field from the data file for this request run
pm.iterationData.get("value")
```

See the [Sandbox Reference](/docs/postman/scripts/postman-sandbox-api-reference/#pmiterationdata) for more on what you can do with iteration data.

## Next steps

To continue learning to leverage collection runs, check out the following resources:

* [Running multiple iterations](https://learning.postman.com/docs/postman/collection-runs/running-multiple-iterations/)
* [Using environments in collection runs](/docs/postman/collection-runs/using-environments-in-collection-runs/)
* [Building workflows](/docs/postman/collection-runs/building-workflows/)
* [Sharing a collection run](/docs/postman/collection-runs/sharing-a-collection-run/)
* [Debugging a collection run](/docs/postman/collection-runs/debugging-a-collection-run/)
* [Command line integration with Newman](/docs/postman/collection-runs/command-line-integration-with-newman/)
