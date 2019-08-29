---
title: "Intro to scripts"
page_id: "intro_to_scripts"
warning: false
---

## Scripts in Postman

Postman contains a powerful runtime based on Node.js that allows you to add dynamic behavior to requests and collections. This allows you to write test suites, build requests that can contain dynamic parameters, pass data between requests, and a lot more. You can add JavaScript code to execute during 2 events in the flow:

  1. Before a request is sent to the server, as a [pre-request script](/docs/postman/scripts/pre_request_scripts/) under the **Pre-request Script** tab.
  1. After a response is received, as a [test script](/docs/postman/scripts/test_scripts/) under the **Tests** tab.

[![test script](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Test_script1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-randomScripts2.png)

You can add pre-request and test scripts to a collection, a folder, a request within a collection, or a request not saved to a collection.

## Execution order of scripts

In Postman, the script execution order for a single request looks like this:

* A pre-request script associated with a request will execute before the request is sent
* A test script associated with a request will execute after the request is sent

[![workflow for single request](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/req-resp.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/req-resp.png)

For every request in a collection, scripts will execute in the following order:

* A pre-request script associated with a collection will run prior to every request in the collection.
* A pre-request script associated with a folder will run prior to every request in the folder.
* A test script associated with a collection will run after every request in the collection.
* A test script associated with a folder will run after after request in the folder.

[![workflow for request in collection](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/execOrder.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/execOrder.png)

For every request in a collection, the scripts will always run according to the following hierarchy: collection-level script (if any), folder-level script (if any), request-level script (if any). Note that this order of execution applies to both pre-request and test scripts.

For example, imagine you had the following collection structured with a single folder and two requests within the folder.

[![console log statement](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Test_script2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-console-log-statement.png)

If you created log statements in the pre-request and test script sections for the collection, folder, and requests, you would clearly see the execution order in the [Postman console](/docs/postman/sending_api_requests/debugging_and_logs/#network-calls-with-postman-console).

[![logs in console](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/logs-in-console.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/logs-in-console.png)

### How does this work?

Is this magic? No, it's the [Postman Sandbox](/docs/postman/scripts/postman_sandbox/). The Postman Sandbox is a JavaScript execution environment that is available to you while writing pre-request and test scripts for requests (both in Postman and Newman). Whatever code you write in these sections is executed in this sandbox.  

## Debugging scripts

Debugging scripts can be written under either the **Pre-request Script** tab or the **Tests** tab, with helpful messages logged in the [Postman Console](/docs/postman/sending_api_requests/debugging_and_logs/).
