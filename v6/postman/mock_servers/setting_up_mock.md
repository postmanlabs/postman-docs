---
title: "Setting up a mock server"
page_id: "setting_up_mock"
warning: false
---

Before sending an actual request, front-end developers can create a mock server to simulate each endpoint and its corresponding response in a Postman Collection. Developers can view potential responses, without spinning up a back end.

You can create a mock in several ways:

* Using the **New** button
* From the Launch screen
* In the [Postman app using Examples](/docs/postman/mock_servers/mocking_with_examples/)
* Using the [Postman API](/docs/postman/mock_servers/mock_with_api/)

This topic only covers how to create a mock with the **New** button and the Launch screen. To learn how to create a mock with the [Postman app](/docs/postman/mock_servers/mocking_with_examples/) or the [Postman API](/docs/postman/mock_servers/mock_with_api/), click the corresponding link for detailed information.

## New button

In the header toolbar, click the **New** button.

[![new button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Header_Toolbar_New.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Header_Toolbar_New.png)

The Create New tab appears.

[![create screen](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Create_New_Tab_Updated.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Create_New_Tab_Updated.png)

**Note**: At the bottom, you can select "Show this window at launch" to indicate whether you want the Create New tab to display each time you open Postman.

Click "Mock Server".

Select if you want to mock a new API or an existing or team collection. If you create a new API to mock, you must select a request method and enter the request path, response code, and response body. If you use an existing or team collection to mock, you must select a collection from a list of existing or team collections.

[![config mock](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Create_New_Tab_Updated2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Create_New_Tab_Updated2.png)

After you select or create the request you want to mock, click the **Next** button.

In the Configure mock server tab, you must:

* Enter the name of the mock
* Specify a version tag
* Select an environment (optional).
* Indicate if you want to make this mock server private

**Note**: The number of calls made to mock servers might be limited by your Postman account. Check your [usage limits](https://go.postman.co/usage).

[![configTab mock](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Mock-Collection-Version1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Mock-Collection-Version1.png)

Click the **Create** button.

In the Next steps tab, see a list of suggested next steps to maximize the effectiveness of your mock server.

[![next mock](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-next-steps.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-next-steps.png)

## Launch screen

The "Create New" tab appears by default when you launch Postman.

Open the Postman app.

In the "Create New" tab, click "Mock Server".

Follow the steps in the previous **New** button section.

**Note**: At the bottom, you can select "Show this window at launch" to indicate whether you want the Create New tab to display each time you open Postman.

## Using HTTP access control for a mock

In addition to using the [Postman app](/docs/postman/mock_servers/mocking_with_examples/) to make requests to mock endpoints, you also can make those requests in a browser.

A web browser makes a cross-origin HTTP request when it requests a resource from a domain, protocol, or port that's different from its own.

[Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) is a standard that defines a way in which a browser and server can interact securely. In this case, we are referring to how a web browser interacts with the mock endpoints hosted on the Postman server.

CORS is enabled for Postman mock servers. As a result, you can stub your web apps with mocked data using the mock endpoints. So development or production web apps can make requests to the Postman mock endpoint you just created and receive an example response.

## Using free mock server calls

Your Postman account gives you a limited number of free mock server calls per month.

You can check your usage limits in the [Postman API](https://docs.api.getpostman.com) or in the [account usage page](https://go.pstmn.io/postman-account-limits).

## Further reading

For more information about mock servers, see:

* [Intro to mock servers](/docs/postman/mock_servers/intro_to_mock_servers/)
* [Mocking with examples](/docs/postman/mock_servers/mocking_with_examples/)
* [Mocking with the Postman API](/docs/postman/mock_servers/mock_with_api/)
* [Matching algorithm (for mocks)](/docs/postman/mock_servers/matching_algorithm/)
