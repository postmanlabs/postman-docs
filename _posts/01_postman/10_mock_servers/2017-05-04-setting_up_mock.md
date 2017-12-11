---
categories:
  - "postman"
  - "mock_servers"
title: "Setting up a mock server"
page_id: "setting_up_mock"
warning: false
---

### Simulate a back end with Postman's mock servers

Delays on the front- or back-end makes it difficult for dependent teams to complete their work efficiently. Postman's mock servers can alleviate delays in the development process. 

Front-end developers can create a mock server to simulate each endpoint and its corresponding environment in a Postman Collection. They can view potential responses, without spinning up a back end.

Creating mock[examples](/docs/postman/collections/examples){:target="_blank"} during the earliest phase of API development fosters clear communication between team members and aligns their expectations. Now all the development teams can work in parallel; and dependent teams experience fewer delays.


### Setting up the mock 

You can create a mock in several ways: 
* [Postman app](/docs/postman/mock_servers/mocking_with_examples){:target="_blank"}
* [Postman Pro API](/docs/postman/mock_servers/mock_with_api){:target="_blank"}
* **New** button.
* Using the launch screen. 
  
Once the mock has been created, Postman Pro and Enterprise users can share the mock with their team for review and collaboration. This is accomplished by [sharing the underlying collection](/docs/postman/team_library/sharing#sharing-collections) with the team or specific team members, providing permissions to edit or view.


#### Creating a mock with the New button

In the header toolbar, click the **New** button.

[![new button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)

The "Create New" screen appears.
[![create screen](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_new_screen.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_new_screen.png)

**Note**: At the bottom of the screen you can select "Show this window at launch" to indicate whether you want the "Create New" screen to display each time you open Postman.

Click "Mock Server".

[![create mock](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_mock.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_mock.png)


In the "Create API Documentation" screen, you can create documentation for a "New API", "My Collections", and "Team Library". 
   * New API
     
     Enter a request path, status code, response code and click the **Next** button.
     Enter the mock server name, indicate if you want the mock server to be private, and click the **Create** button.
     The Next Steps screen appears with information about the mock server and provides suggestions about next steps.
   * My Collections
   
     Select a collection.
     Select an environment, indicate if you want the mock server to be private, and click the **Create** button.
     The "Next Steps" screen appears with information about the mock server and provides suggestions about next steps.
   * Team Library
   
     Select a shared collection.
     Select an environment, and click the **Create** button.
     The "Next Steps" screen appears with information about the mock server and provides suggestions about next steps.
     
#### Creating a mock using the launch screen

The "Create New" screen appears by default when you launch Postman. At the bottom of the screen you can select "Show this window at launch" to indicate whether you want the "Create New" screen to display each time you open Postman.

1. Open Postman.
2. In the "Create New" screen, click "Mock Server".
3. Follow step 3 in previous **New** button section. 

### HTTP access control (CORS)

Not only can you make requests to mock endpoints using the Postman app, you can also rely on a mock using a browser. A web browser makes a cross-origin HTTP request when requesting a resource from a domain, protocol, or port that's different from its own. For security reasons, [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS){:target="_blank"} is a standard that defines a way in which a browser and server can interact securely. In this case, we are referring to how a web browser interacts with the mock endpoints hosted on the Postman server.

CORS is enabled for Postman mock servers which means you can stub your web apps with mocked data using the mock endpoints. In other words, development or production web apps can make requests to the Postman mock endpoint you just created and receive an example response.

### Free mock server calls with your Postman account

Your Postman account gives you a limited number of free mock server calls per month. You can check your usage limits through the [Postman Pro API](https://docs.api.getpostman.com) or the [account usage page](https://go.pstmn.io/postman-account-limits).
