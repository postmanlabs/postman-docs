---
categories:
  - "postman"
  - "mock_servers"
title: "Setting up a mock server"
page_id: "setting_up_mock"
warning: false
---

Teams who are dependent on front- or back-end development often suffer delays in the development process. As a result, it is difficult for those dependent teams to complete their work efficiently.  

However, Postman's mock servers alleviates those problems. Mock servers enable front-end developers to simulate each endpoint in a Postman Collection and the corresponding environment. They can view potential responses without spinning up a back end. With mock servers, teams can work in parallel, eliminating delays for dependent teams.

### Setting up the mock

Developers can mock a request and response in Postman before they send the actual request or set up a single endpoint to return the response. 

Establishing an [example](/docs/postman/collections/examples){:target="_blank"} in the earliest phase of API development requires clear communication, which is instrumental in aligning expectations among team members. When communication is clear and expectations are aligned, developers and testers can start more quickly, with fewer delays.


You can create a mock by using the: 

  * **New** button
  *  Launch modal 

  
You can also create a mock using the **Postman app** and **Postman Pro API**. Each provides detailed steps on how to use it.

* [Postman app](/docs/postman/mock_servers/mocking_with_examples){:target="_blank"} 
* [Postman Pro API](/docs/postman/mock_servers/mock_with_api){:target="_blank"}


After you create the mock, Postman Pro and Enterprise users can [share the underlying collection](/docs/postman/team_library/sharing#sharing-collections){:target="_blank"} with the team or specific team members, and provide permissions to edit or view.


#### Creating a mock with the New button

1. In the header toolbar, click the **New** button.

[![new button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)

The "Create New" modal appears.
[![create screen](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_new_screen.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_new_screen.png)

**Note**: At the bottom of the modal you can select "Show this window at launch" to indicate whether you want the "Create New" modal to display each time you open Postman.

<ol start="2">
  <li>Click "Mock Server".</li>
</ol>

[![create mock](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_mock.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_mock.png)

<ol start="3">
  <li>In the "Create a mock server" modal, you can create a mock server for a "New API", "My Collections", and "Team Library".</li>
</ol>

   * New API
     
     * Enter a request path, status code, response code, and click the **Next** button.
     * Enter the mock server name, indicate whether you want the mock server to be private, and then click the **Create** button.
     
     The "Next Steps" modal appears with information about the mock server and provides suggestions about next steps.
    
   * My Collections
   
     * Select a collection.
     * Select an environment, indicate whether you want the mock server to be private, and then click the **Create** button.
     
     The "Next Steps" modal appears with information about the mock server and provides suggestions about next steps.
     
   * Team Library
   
     * Select a shared collection.
     * Select an environment and then click the **Create** button.
     
     The "Next Steps" modal appears with information about the mock server and provides suggestions about next steps.
     
#### Creating a mock using the launch screen

The "Create New" modal appears by default when you launch Postman. 

At the bottom of the screen you can select "Show this window at launch" to indicate whether you want the "Create New" modal to display each time you open Postman.

1. Open Postman.
2. In the "Create New" modal, click "Mock Server".
3. Follow step 3 in the previous **New** button section. 

### Using HTTP access control (CORS) for a mock

In addition to using the [Postman app](/docs/postman/mock_servers/mocking_with_examples){:target="_blank"} to make requests to mock endpoints, you also can make those requests in a browser.

A web browser makes a cross-origin HTTP request when it requests a resource from a domain, protocol, or port that's different from its own. 

For security reasons, [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS){:target="_blank"} is a standard that defines a way in which a browser and server can interact securely. In this case, we are referring to how a web browser interacts with the mock endpoints hosted on the Postman server.

CORS is enabled for Postman mock servers. As a result, you can stub your web apps with mocked data using the mock endpoints. So development or production web apps can make requests to the Postman mock endpoint you just created and receive an example response.

### Using free mock server calls with your Postman account

Your Postman account gives you a limited number of free mock server calls per month. 

You can check your usage limits in the [Postman Pro API](https://docs.api.getpostman.com){:target="_blank"} or in the [account usage page](https://go.pstmn.io/postman-account-limits){:target="_blank"}.
