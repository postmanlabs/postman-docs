---
title: "Building workflows"
page_id: "building_workflows"
warning: false

---

##### Download the collection used in this example:
 
   * [collection.json](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58793802.json)

### Basic usage

When you start a collection run, all requests are run in the order you see them in the main app. 

All requests inside are executed first, by order of the folder they are in, and then any requests that are in the root of the collection. 

However, you can override this behavior using a [built-in function](/docs/v6/postman/scripts/branching_and_looping){:target="_blank"} called `postman.setNextRequest()`.

`postman.setNextRequest()`, as the name suggests, allows you to specify which request runs next. Let's look at a sample collection to understand `postman.setNextRequest()` better. 

Suppose we have a collection with four requests. If you run this collection directly, the collection runner will run all four requests in order.

[![setNextRequest in tests tab](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/setNextRequest.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/setNextRequest.png)

[![collection runner view](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58793861.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58793861.png)

Let's now add `postman.setNextRequest()` to Request 1's test script, as shown. 

`postman.setNextRequest()` is a function with one argument, which is the name or ID of the request you want to run next. 

In the example, we're setting the next request to Request 4 in the test script for Request 1. So the execution jumps to Request 4 after Request 1 has completed. If we run the same collection now, you'll see that only two requests are run now.

[![setNextRequest with request name as parameter](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-building-workflows1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-building-workflows1.png)

[![collection runner view](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58793875.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58793875.png)

**Note**: If you want to run a collection and not send a single request, then `postman.setNextRequest()` only works with the collection runner and Newman.

### Advanced usage

Now that we have a good understanding of how `postman.setNextRequest()` works, we can do some pretty advanced stuff with it. Since you are no longer restricted by the order in which you define your requests, you can jump around your collection, establish conditional logic, or skip unnecessary requests. 

This [blog post](http://blog.getpostman.com/2016/11/09/generate-spotify-playlists-using-a-postman-collection/){:target="_blank"} explains how you can write a collection that will generate Spotify playlists for you based on your favorite musical artists.

There are some gotchas to keep in mind:

   *   `postman.setNextRequest()` is always executed at the end of the current script. This means that if you put `postman.setNextRequest()` before other code blocks, these blocks will still be executed.

   *   `postman.setNextRequest()` has a scope, which is the source of your collection run. This means that if you run a collection, you can jump to any request in the collection (even requests inside folders, using the same syntax). However, if you run a folder, the scope of `postman.setNextRequest()` is limited to that folder. This means that you can jump to any request within this folder, but not ones that are outside of the folder. This includes requests inside other folders, and also root-level requests in the collection. Read more about [running collections or folders](/docs/v6/postman/collection_runs/starting_a_collection_run){:target="_blank"}.
