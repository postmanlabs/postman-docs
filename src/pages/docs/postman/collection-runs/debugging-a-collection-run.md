---
title: "Debugging a collection run"
order: 118
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
    url: "https://blog.postman.com/2016/08/26/the-postman-console/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "New console features in Postman v7.10"
    url: "https://www.youtube.com/watch?v=XCfSYT9g0BU"

warning: false
---

Sometimes your Collection tests fail — even when you expect them all to pass.

When failure occurs, you can debug your requests in two ways:

- [Debugging using the Request and Response body](#debugging-using-the-request-and-response-body)
- [Debugging using the Postman console](#debugging-using-the-postman-console)

You can explore debugging an example request in the [Postman Echo collection](https://docs.postman-echo.com/). Go to [Postman Echo](https://docs.postman-echo.com/), and click the **Run in Postman** button to import this collection into the Postman app.

In Postman, click the **Runner** button on the left side of the header to open the **Collection Runner** window.

Select the "Postman Echo" collection and click the **Run Postman Echo** button. The image below shows the results of the collection run.

[![collection runner view](https://assets.postman.com/postman-docs/58531976.png)](https://assets.postman.com/postman-docs/58531976.png)

In the `Delete Cookies` request, a certain cookie is expected to be returned by the server since the Postman Echo [Cookies](https://docs.postman-echo.com/#37368024-f6a8-0f70-85fc-7e876cde9e33) endpoint returns whatever cookies are sent to it.

As you can see, this test is failing. Read on to investigate further.

## Debugging using the Request and Response body

In this test, a cookie named `foo1` is expected to be returned as part of the response.

Click on any request name in your collection run results to display a tooltip. This tooltip contains information about your request and response to help you figure out what went wrong.

Expand the **Response Body** section, to see the response does not contain the expected cookie expect.

[![tooltip for request](https://assets.postman.com/postman-docs/58532000.png)](https://assets.postman.com/postman-docs/58532000.png)

Moreover, expand the **Response Headers** section to see the cookie was not sent at all. Something must be wrong with the way Postman Echo handles cookies. Now you can go ahead and patch this up in your API and try again.

[![collection runner view](https://assets.postman.com/postman-docs/58532254.png)](https://assets.postman.com/postman-docs/58532254.png)

You can control which bodies display in the tooltip by updating your preference in the **Log Responses** dropdown when [starting a collection run](/docs/postman/collection-runs/starting-a-collection-run/). Note that only response bodies less than 300KBs will be displayed. Your response headers and bodies are never synced with your Postman account for privacy reasons.

## Debugging using the Postman Console

The [Postman console](/docs/postman/sending-api-requests/debugging-and-logs/) records and displays all network requests and user log statements.

Find the request that's causing problems here by expanding its response headers. Here too, the Postman Echo endpoint did not return a cookie, and indicates why the test is failing. You can then infer that the endpoint is misbehaving and needs to be reviewed.

[![postman console view](https://assets.postman.com/postman-docs/58532402.png)](https://assets.postman.com/postman-docs/58532402.png)

Learn more about [debugging with the Postman console](/docs/postman/sending-api-requests/debugging-and-logs/).
