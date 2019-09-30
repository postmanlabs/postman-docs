---
title: "Sending the first request"
page_id: "sending_the_first_request"
warning: false

---

Let's send our first API request! 

*   Enter [`postman-echo.com/get`](https://docs.postman-echo.com/#078883ea-ac9e-842e-8f41-784b59a33722) into the URL field. 
*   Hit the **Send** button to send your request, and you will see the server response at the bottom with some JSON data. Notice that Postman has added [`postman-echo.com/get`](https://docs.postman-echo.com/#078883ea-ac9e-842e-8f41-784b59a33722) under the **History** tab of the sidebar. 

[![postman echo example](https://assets.postman.com/postman-docs/WS-first-request.png)](https://assets.postman.com/postman-docs/WS-first-request.png)

### How does this work?

Let's map the process with a simple illustration below:

[![request and response illustration](https://assets.postman.com/postman-docs/1-What+is+a+Request%402x.png)](https://assets.postman.com/postman-docs/1-What+is+a+Request%402x.png)

1.  Enter your request details (URL: `postman-echo.com/get`) in Postman, and hit the **Send** button.
2.  The request is received by the API server (postman-echo.com), and it returns a response.
3.  The response is received by Postman, and the response is visualized in the interface.

### Postman Echo

[`postman-echo.com`](https://docs.postman-echo.com/) is a sample API that Postman hosts for you to experiment with various types of requests. It returns the data that you send in the request as part of its response.

Import this sample collection and refer to [documentation for this sample API](https://docs.postman-echo.com/).
