---
title: "Debugging a collection run"
page_id: "debugging_a_collection_run"
warning: false

---

Oftentimes, things don't go according to plan and your collection tests will fail even when you expect them all to pass. When this happens, there are two ways you can debug your requests.

In this example, we're running the [Postman Echo collection](https://docs.postman-echo.com/).

[![collection runner view](https://assets.postman.com/postman-docs/58531976.png)](https://assets.postman.com/postman-docs/58531976.png)

In the `Delete Cookies` request, we expect a certain cookie to be returned by the server, and this is what the test checks as well. Postman Echo's [Cookies](https://docs.postman-echo.com/#37368024-f6a8-0f70-85fc-7e876cde9e33) endpoint returns whatever cookies are sent to it. It also sends a JSON representation of these in the response body. This is what we're using to check if a certain cookie was returned.

As we can see, this test is failing. Let's investigate why.

### Debugging using the Request & Response body

[![tooltip for request](https://assets.postman.com/postman-docs/58532000.png)](https://assets.postman.com/postman-docs/58532000.png)
[![collection runner view](https://assets.postman.com/postman-docs/58532254.png)](https://assets.postman.com/postman-docs/58532254.png)

As the test says, we're expecting a cookie named `foo1` to be returned as part of the response. 

If you click on any request name in your collection run, you'll notice a tooltip appear. This has useful information pertaining to your request, information you might need when figuring out what went wrong. Expanding the `Response Body` section, we can see clearly that the response does not contain the cookie we expect. Moreover, upon expanding the `Response Headers` section, we see that the cookie was not sent at all. We infer that something must be wrong with the way Postman Echo handles cookies. We can now go ahead and patch this up in our API and try again.

Note that only response bodies less than 300KBs are attempted to be displayed. Your response headers and bodies are never synced for security reasons.  
You can control which bodies show up in this tooltip by using the `Log responses` dropdown when [starting a collection run](/docs/postman/collection_runs/starting_a_collection_run/).

### Debugging using the Postman Console

Debugging using the Postman Console requires you to have the console open before you start your run. You can read about the [Postman Console](/docs/postman/sending_api_requests/debugging_and_logs/).

[![postman console view](https://assets.postman.com/postman-docs/58532402.png)](https://assets.postman.com/postman-docs/58532402.png)

The Postman Console will record all requests and display them in a list.

Let's find the request that's causing problems here and expand its response headers. Here too, we see that the Postman Echo endpoint did not return a cookie. This must be why our test is failing. We can then infer that the endpoint is misbehaving and needs to be looked at.

Any `console.log`s that you have in your test scripts will also appear here, so you can log things in the console if you're debugging a complex test script. 
