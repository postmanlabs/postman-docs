---
title: "Building workflows"
page_id: "building_workflows"
warning: false

---

When you start a collection run, all requests are run in the order you see them in the main app. So all requests are executed first, by order of the folder, and then any requests in the root of the collection. 

However, you can override this behavior using a [built-in function](/docs/v6/postman/scripts/branching_and_looping){:target="_blank"} called `postman.setNextRequest()`. This function, as the name suggests, allows you to specify which request runs next. 

Let's look at a sample collection to understand this function.

* [Getting started](#getting-started)
* [Basic workflow](#basic-workflow)
* [Advanced workflow](#advanced-workflow)


### Getting started

Before you start, download and [import](/docs/v6/postman/collections/data_formats){:target="_blank"} [collection.json](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58793802.json) for the example we'll discuss in this topic.

### Basic workflow

Let's assume that we have a collection with four requests. If you run this collection directly, the collection runner runs all four requests in order.

[![setNextRequest in tests tab](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/setNextRequest.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/setNextRequest.png)

[![collection runner view](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58793861.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58793861.png)

Let's now add `postman.setNextRequest()` to Request 1's test script, as shown. `postman.setNextRequest()` is a function with one argument, which is the name or ID of the request you want to run next. 

In the example, we're setting the next request to Request 4 in the test script for Request 1. So the execution jumps to Request 4 after Request 1 has completed. If we run the same collection now, you'll see that only two requests are run now.

[![setNextRequest with request name as parameter](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-building-workflows1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-building-workflows1.png)

[![collection runner view](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58793875.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58793875.png)

Note that `postman.setNextRequest()` only works with the collection runner and Newman where the intent is to run a collection, as opposed to sending a single request.

### Advanced workflow

Now that we have a good understanding of how `setNextRequest()` works, we can perform advanced actions. 

Since you are no longer restricted by the order in which you define your requests, you can jump around your collection, establish conditional logic, or skip unnecessary requests. 

This [blog post](http://blog.getpostman.com/2016/11/09/generate-spotify-playlists-using-a-postman-collection/){:target="_blank"} explains how you can write a collection that will generate Spotify playlists for you based on your favorite musical artists.

Remember these two facts as you use this workflow:

   *   `postman.setNextRequest()` is always executed at the end of the current script. If you put this fuction before other code blocks, these blocks will still execute.
   
   *   `postman.setNextRequest()` has a scope, which is the source of your collection run. If you run a collection, you can jump to any request in the collection (even requests inside folders, using the same syntax). However, if you run a folder, the scope of `postman.setNextRequest()` is limited to that folder. So you can jump to any request in this folder, but not ones that are outside of the folder. It includes requests inside other folders, and also root-level requests in the collection. To read more about [running collections or folders](/docs/v6/postman/collection_runs/starting_a_collection_run){:target="_blank"}.
  
  <br>
  <br>
  
  For more information about collection runs, see:
   
* [Starting a collection run](/docs/v6/postman/collection_runs/starting_a_collection_run){:target="_blank"}
* [Using environments in collection runs](/docs/v6/postman/collection_runs/using_environments_in_collection_runs){:target="_blank"}
* [Working with data files](/docs/v6/postman/collection_runs/working_with_data_files){:target="_blank"}
* [Running multiple iterations](/docs/v6/postman/collection_runs/running_multiple_iterations){:target="_blank"}
* [Sharing a collection run](/docs/v6/postman/collection_runs/sharing_a_collection_run){:target="_blank"}
* [Debugging a collection run](/docs/v6/postman/collection_runs/debugging_a_collection_run){:target="_blank"}
* [Command line integration with Newman](/docs/v6/postman/collection_runs/command_line_integration_with_newman){:target="_blank"}
* [Integration with Jenkins](/docs/v6/postman/collection_runs/integration_with_jenkins){:target="_blank"}
* [Integration with Travis CI](/docs/v6/postman/collection_runs/integration_with_travis){:target="_blank"}
* [Newman with Docker](/docs/v6/postman/collection_runs/newman_with_docker){:target="_blank"}
   
