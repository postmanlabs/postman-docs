---
title: "Building workflows"
order: 114
page_id: "building_workflows"
search_keyword: "postman.setNextRequest, setNextRequest"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to scripts"
    url: "/docs/postman/scripts/intro-to-scripts/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Check for broken links on your website using a Postman Collection"
    url: "https://blog.postman.com/2017/06/23/check-for-broken-links-on-your-website-using-a-postman-collection/"

warning: false

---

When you start a collection run, all requests are run in the order you see them in the main app. So all requests are executed first, by order of the folder, and then any requests in the root of the collection.

However, you can override this behavior using a [built-in function](/docs/postman/scripts/branching-and-looping/) called `postman.setNextRequest()`. This function, as the name suggests, allows you to specify which request runs next.

Let's look at a sample collection to understand this function.

* [Getting started](#getting-started)
* [Basic workflow](#basic-workflow)
* [Advanced workflow](#advanced-workflow)

## Getting started

Before you start, download and [import](/docs/postman/collections/importing-and-exporting-data/#importing-postman-data) [collection.json](https://assets.postman.com/postman-docs/58793802.json) for the example we'll discuss in this topic.

## Basic workflow

If you run an example collection containing four requests directly, the collection runner runs all four requests in order.

[![setNextRequest in tests tab](https://assets.postman.com/postman-docs/Collection_Runs_pg23.png)](https://assets.postman.com/postman-docs/Collection_Runs_pg23.png)

[![collection runner view](https://assets.postman.com/postman-docs/58793861.png)](https://assets.postman.com/postman-docs/58793861.png)

Let's now add `postman.setNextRequest()` to Request 1's test script, as shown. `postman.setNextRequest()` is a function with one argument, which is the name or ID of the request you want to run next.

In the example, we're setting the next request to Request 4 in the test script for Request 1. So the execution jumps to Request 4 after Request 1 has completed. If you run the same collection now, you'll see that only two requests are run now.

[![setNextRequest with request name as parameter](https://assets.postman.com/postman-docs/Collection_Runs_pg24.png)](https://assets.postman.com/postman-docs/Collection_Runs_pg24.png)

[![collection runner view](https://assets.postman.com/postman-docs/58793875.png)](https://assets.postman.com/postman-docs/58793875.png)

Note that `postman.setNextRequest()` only works with the collection runner and Newman where the intent is to run a collection, as opposed to sending a single request.

## Advanced workflow

Once you're comfortable using `setNextRequest()`, you can progress to more advanced actions.

Since you are no longer restricted by the order in which you define your requests, you can jump around your collection, establish conditional logic, or skip unnecessary requests.

This [blog post](https://blog.postman.com/2016/11/09/generate-spotify-playlists-using-a-postman-collection/) explains how you can write a collection that will generate Spotify playlists for you based on your favorite musical artists.

Remember these two facts as you use this workflow:

* `postman.setNextRequest()` is always executed at the end of the current request. This means that if you put this function before other code blocks anywhere in pre-request or test script, these blocks will still execute.
* `postman.setNextRequest()` has a scope, which is the source of your collection run. If you run a collection, you can jump to any request in the collection (even requests inside folders, using the same syntax). However, if you run a folder, the scope of `postman.setNextRequest()` is limited to that folder. So you can jump to any request in this folder, but not ones that are outside of the folder. It includes requests inside other folders, and also root-level requests in the collection. To read more about [running collections or folders](/docs/postman/collection-runs/starting-a-collection-run/).

---
For more information on collection runs, see:

* [Starting a collection run](/docs/postman/collection-runs/starting-a-collection-run/)
* [Using environments in collection runs](/docs/postman/collection-runs/using-environments-in-collection-runs/)
* [Working with data files](/docs/postman/collection-runs/working-with-data-files/)
* [Running multiple iterations](/docs/postman/collection-runs/running-multiple-iterations/)
* [Building workflows](/docs/postman/collection-runs/building-workflows/)
* [Sharing a collection run](/docs/postman/collection-runs/sharing-a-collection-run/)
* [Debugging a collection run](/docs/postman/collection-runs/debugging-a-collection-run/)
* [Command line integration with Newman](/docs/postman/collection-runs/command-line-integration-with-newman/)
* [Integration with Jenkins](/docs/postman/collection-runs/integration-with-jenkins/)
* [Integration with Travis CI](/docs/postman/collection-runs/integration-with-travis/)
* [Newman with Docker](/docs/postman/collection-runs/newman-with-docker/)
