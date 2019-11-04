---
title: "Debugging a collection run"
order: 60
page_id: "debugging_a_collection_run"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Debugging and logs"
    url: "/docs/postman/sending-api-requests/debugging-and-logs/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "The Postman Console"
    url: "https://blog.getpostman.com/2016/08/26/the-postman-console/?_ga=2.234489944.754547870.1571851340-1454169035.1570491567"

warning: false
---

Sometimes your Collection tests fail—even when you expect them all to pass.

When failure occurs, you can debug your requests in two ways:

* [Debugging using the Request and Response body](#debugging-using-the-request-and-response-body)
* [Debugging using the Postman Console](#debugging-using-the-postman-console)

Let's explore debugging request in an example using the [Postman Echo collection](https://docs.postman-echo.com/).

To add Postman Echo to your Postman builder view, go to [Postman Echo](https://docs.postman-echo.com/).

Click the **Run in Postman** button on the top right side of the screen. The Postman Echo collection appears in the sidebar of your Postman builder.

In your Postman builder view, click the **Runner** button in the left side of the header bar.

In the Collection Runner, select "Postman Echo" and click the **Run Postman Echo** button. (You can also select the "Environment", "Iterations", "Delay" (time), "Log Repsonses", "Data", and "Persist Variables". But it's not necessary for this example.) The image below shows the results of the collection run.

[![collection runner view](https://assets.postman.com/postman-docs/58531976.png)](https://assets.postman.com/postman-docs/58531976.png)

In the `Delete Cookies` request, we expect a certain cookie to be returned by the server.

Postman Echo's [Cookies](https://docs.postman-echo.com/#37368024-f6a8-0f70-85fc-7e876cde9e33)endpoint returns whatever cookies are sent to it. It also sends a JSON representation of these in the response body. We're using this to check if a certain cookie was returned.

As you can see, this test is failing. Let's investigate why.

## Debugging using the Request and Response body

[![tooltip for request](https://assets.postman.com/postman-docs/58532000.png)](https://assets.postman.com/postman-docs/58532000.png)
[![collection runner view](https://assets.postman.com/postman-docs/58532254.png)](https://assets.postman.com/postman-docs/58532254.png)

As the test says, we're expecting a cookie named `foo1` to be returned as part of the response.

If you click on any request name in your collection run, you'll notice a tooltip appear. This tooltip has useful information about to your request, information you might need to figure out what went wrong.

Expanding the `Response Body` section, we can see clearly that the response does not contain the cookie we expect.

Moreover, when we expand the `Response Headers` section, we see that the cookie was not sent at all. We infer something must be wrong with the way Postman Echo handles cookies. We can now go ahead and patch this up in our API and try again.

Note that only response bodies less than 300KBs are attempted to be displayed. Your response headers and bodies are never synced for security reasons.

You can control which bodies show up in this tooltip by using the `Log responses` dropdown when [starting a collection run](/docs/postman/collection-runs/starting-a-collection-run/).

## Debugging using the Postman Console

Debugging using the Postman Console requires you to have the console open before you start your run.

For more information about the Postman Console, see [Debugging and logs](/docs/postman/sending-api-requests/debugging-and-logs/).

[![postman console view](https://assets.postman.com/postman-docs/58532402.png)](https://assets.postman.com/postman-docs/58532402.png)

The Postman Console records all requests and displays them in a list.

Let's find the request that's causing problems here and expand its response headers. Here too, we see that the Postman Echo endpoint did not return a cookie, and indicates why our test is failing. We can then infer that the endpoint is misbehaving and needs to be reviewed.

Any `console.log` you have in your test scripts also appears here, so you can log in the console if you're debugging a complex test script.

---
For more information about collection runs, see:

* [Starting a collection run](/docs/postman/collection-runs/starting-a-collection-run/)
* [Using environments in collection runs](/docs/postman/collection-runs/using-environments-in-collection-runs/)
* [Working with data files](/docs/postman/collection-runs/working-with-data-files/)
* [Running multiple iterations](/docs/postman/collection-runs/running-multiple-iterations/)
* [Building workflows](/docs/postman/collection-runs/building-workflows/)
* [Sharing a collection run](/docs/postman/collection-runs/sharing-a-collection-run/)
* [Command line integration with Newman](/docs/postman/collection-runs/command-line-integration-with-newman/)
* [Integration with Jenkins](/docs/postman/collection-runs/integration-with-jenkins/)
* [Integration with Travis CI](/docs/postman/collection-runs/integration-with-travis/)
* [Newman with Docker](/docs/postman/collection-runs/newman-with-docker/)
