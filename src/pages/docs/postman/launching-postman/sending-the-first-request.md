---
title: "Sending the first request"
order: 2
page_id: "sending_the_first_request"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://getpostman.com/apps"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Big Commerce"
    url: "https://www.getpostman.com/case-studies/BigCommerce.pdf?_ga=2.139685109.754547870.1571851340-1454169035.1570491567"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman Cloud"
    url: "https://www.youtube.com/watch?v=ccdxr0oJR-I"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "It Starts with a Simple REST Client"
    url: "https://blog.getpostman.com/2016/10/06/it-starts-with-a-simple-rest-client-2/?_ga=2.162139258.754547870.1571851340-1454169035.1570491567"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests"

warning: false
---

An API request lets you contact a server with API endpoints that you want to reach and perform some action. Those actions are HTTP methods.

The most common methods are GET, POST, PUT, and DELETE. The names of the methods are self-explanatory. For example GET enables you to retrieve data from a server. POST enables you to add data to an existing file or resource in a server. PUT lets you replace an existing file or resource in a server. And DELETE lets you delete data from a server.

Postman makes sending API requests simple. Instead of testing your APIs through a command line or terminal, we offer an intuitive graphical interface that is quick to learn and rewarding to master.

As you can see in the image below, when you enter a request in Postman and click the **Send** button, the server receives your request and returns a response that Postman displays in the interface.

[![request and response illustration](https://assets.postman.com/postman-docs/anatomy-of-a-request.png)](https://assets.postman.com/postman-docs/anatomy-of-a-request.png)

## Sending a request

Now let's send our first API request!

Enter [`postman-echo.com/get`](https://docs.postman-echo.com/#078883ea-ac9e-842e-8f41-784b59a33722) into the URL field.

Click the **Send** button to send your request.  Note the JSON data response from the server.

[![request response](https://assets.postman.com/postman-docs/Request-repsonse.png)](https://assets.postman.com/postman-docs/Request-repsonse.png)

Notice that Postman adds [`postman-echo.com/get`](https://docs.postman-echo.com/#078883ea-ac9e-842e-8f41-784b59a33722) under the History tab of the sidebar. You can click the **Save** button to save a request to use later.

[![postman echo example](https://assets.postman.com/postman-docs/SaveRequest.png)](https://assets.postman.com/postman-docs/SaveRequest.png)

## Postman Echo

[`postman-echo.com`](https://docs.postman-echo.com/) is a sample API that Postman hosts for you to experiment with various types of requests. It returns the data that you send in the request as part of its response.

To learn more about Postman Echo, see the [documentation for this sample API](https://docs.postman-echo.com/).

---
For more information about requests, see:

* [Requests](/docs/postman/sending-api-requests/requests/)
* [Requests History](/docs/postman/sending-api-requests/history/)
* [Troubleshooting API requests](/docs/postman/sending-api-requests/troubleshooting-api-requests/)
* [Capturing HTTP requests](/docs/postman/sending-api-requests/capturing-http-requests/)
* [Making SOAP requests](/docs/postman/sending-api-requests/making-soap-requests/)
