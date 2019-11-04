---
title: "Setting up a mock server"
order: 81
page_id: "setting_up_mock"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Fake APIs for Real Developers"
    url: "https://www.youtube.com/watch?v=fgtDZPOPzLU"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Simulate a back end with Postman's mock service"
    url: "https://blog.getpostman.com/2017/03/16/simulate-a-back-end-with-postmans-mock-service/?_ga=2.199962472.754547870.1571851340-1454169035.1570491567"
  - type: link
    name: "Team collaboration with Postman mock servers"
    url: "https://blog.getpostman.com/2017/09/20/team-collaboration-with-postman-mock-servers/?_ga=2.132882632.754547870.1571851340-1454169035.1570491567"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Test scripts"
    url: "/docs/postman/scripts/test-scripts/"

warning: false
---

[Mock Servers](/docs/postman/mock-servers/intro-to-mock-servers) in Postman let you simulate APIs. You can create mock servers from the Postman app, from the web dasboard and using the Postman API. You will need a Postman account to set up a mock server.

Mocks in Postman are tied to a collection. Postman matches requests and generates responses for mocks from the Examples in the requests of a collection. You can create a mock server even if you don't have an existing collection.

## In-app

You can create a mock in several ways in the Postman app:

* Using the **New** button
* From the Launch screen
* Using [Examples in an existing collection](/docs/postman/mock-servers/mocking-with-examples)

### New button

The video below runs you through the step of creating a mock server from the "New" button in the Postman app.

![Mock creation flow using New button](https://assets.postman.com/postman-docs/mock-creation-app-cnx.gif)

Here are the steps you need to follow:

![Start by clicking the New button](https://assets.postman.com/postman-docs/mock-cnx-new-button.png)

In the header toolbar, click the **New** button. It is located in the top-left of the Postman app. Click "Mock Server" in the "Create New" tab.

![Choose "Mock Server" from the dialog box](https://assets.postman.com/postman-docs/mock-cnx-modal.png)

Select if you want to mock a new API or an existing collection. If you create a new API to mock, you have to select a request method and enter the request path, response code, and response body. If you use an existing collection to mock, you must select a collection from a list of existing or team collections.

![Set request path and response body](https://assets.postman.com/postman-docs/mock-cnx-config.png)

After you select or create the request you want to mock, click the **Next** button.

In the "Set up the mock server" tab, you can fill in mock server specific information:

![Set mock server configuration](https://assets.postman.com/postman-docs/mock-cnx-config-continued.png)

1. Enter the name of the mock
2. Select an environment (optional)
3. Select the checkbox if you want to make the mock server private
4. Select the checkbox if you want to save the mock server URL as an environment variable
5. Click "Next" to continue

**Note**: The number of calls made to mock servers may be limited by your Postman account. Check your [usage limits](https://go.postman.co/usage).

In the Next steps tab, see a list of suggested next steps to maximize the effectiveness of your mock server.

![Next steps after mock is created](https://assets.postman.com/postman-docs/mock-cnx-next-steps.png)

### Launch screen

The "Create New" tab appears by default when you launch Postman.

Open the Postman app.

In the "Create New" tab, click "Mock Server".

Follow the steps in the previous section.

**Note**: At the bottom, you can select "Show this window at launch" to indicate whether you want the Create New tab to display each time you open Postman.

## In web dashboard

You can create a mock server from the Web dashboard with existing collections and environments. To do that, login to your [Postman team dashboard](https://go.postman.co), navigate to your workspace by clicking on your workspace name. In the workspace dashboard, click on the "Mock servers" tab.

![Mock servers web dashboard](https://assets.postman.com/postman-docs/mock-web-dashboard.png)

Click on the button to create new mock server, and you will see the mock server configuration screen. Set the relevant configuration.

![Mock servers web dashboard configuration](https://assets.postman.com/postman-docs/mock-web-config.png)

1. Enter the name of the mock
2. Select a collection to mock
3. Select a version tag of the collection to use for the mock. Leave it to "CURRENT" if you want to the mock server to use the latest version of your collection
4. Select an environment to use with the mock (optional)
5. Select the checkbox if you want to make the mock server private
6. Click "Create Mock Server" to create the mock and go back to the "Mock servers" dashboard

## Using HTTP access control for a mock

In addition to using the [Postman app](/docs/postman/mock-servers/mocking-with-examples/) to make requests to mock endpoints, you also can make those requests in a browser.

A web browser makes a cross-origin HTTP request when it requests a resource from a domain, protocol, or port that's different from its own.

[Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access-control-CORS) is a standard that defines a way in which a browser and server can interact securely. In this case, we are referring to how a web browser interacts with the mock endpoints hosted on the Postman server.

CORS is enabled for Postman mock servers. As a result, you can stub your web apps with mocked data using the mock endpoints. So development or production web apps can make requests to the Postman mock endpoint you just created and receive an example response.

## Using free mock server calls

Your Postman account gives you a limited number of free mock server calls per month.

You can check your usage limits in the [Postman API](https://docs.api.getpostman.com) or in the [account usage page](https://go.pstmn.io/postman-account-limits).

## Editing Mock Servers

You can edit existing Mock Servers in Postman since version `7.7.0`. These are the properties of a Mock Server that can be updated through the Postman app and web dashboard:

* Name of the Mock Server
* Version tag of the underlying collection
* Environment associated with the Mock Server
* Make the Mock Server private or public

![Postman Mock Server edit options](https://assets.postman.com/postman-docs/mocks/mock-edit-modal.png)

There are three ways you can edit a mock server. You can either edit a Mock Server from the Collection pane, through the Mock Server listing in Browse mode, or through the web dashboard of your Workspace's Mock Servers section.

Editing Mocks in Build mode:

![Postman Mock Server edit in Build mode](https://assets.postman.com/postman-docs/mocks/mock-edit-build.png)

Editing Mocks in Browse mode:

![Postman Mock Server edit in Browse mode](https://assets.postman.com/postman-docs/mocks/mock-edit-browse.png)

Editing Mocks from the Web Dashboard:

![Postman Mock Server edit in Build mode](https://assets.postman.com/postman-docs/mocks/mock-edit-web-dashboard.png)

## Further reading

For more information about mock servers, see:

* [Intro to mock servers](/docs/postman/mock-servers/intro-to-mock-servers/)
* [Mocking with examples](/docs/postman/mock-servers/mocking-with-examples/)
* [Mocking with the Postman API](/docs/postman/mock-servers/mock-with-api/)
* [Matching algorithm (for mocks)](/docs/postman/mock-servers/matching-algorithm/)
