---
title: "Mocking with examples"
page_id: "mocking_with_examples"
warning: false

---

Let's take a deep dive into how [mock servers](/docs/postman/mock_servers/setting_up_mock/) and [examples](/docs/postman/collections/examples/) work together, and how you can integrate them into your workflow for a more enhanced API experience with Postman.

1. Sending a request (R1)
2. Saving the request (R1) to a collection (C1)
3. Saving the request R1's response as an example (P1)
4. Creating a mock (M1) for the collection (C1)
5. Sending a request using the mock server (M1)

### Setting up some basics

Before we get into the details of mocking, let’s start with setting up some basics required for mocks to work:

##### **Step 1: Sending a request (R1)**
  
  From the Postman app, send a `GET` request to the URL `https://postman-echo.com/get?test=123`. This request hits the [Postman Echo](https://docs.postman-echo.com/#078883ea-ac9e-842e-8f41-784b59a33722) service which you can use to test out your REST clients and make sample API calls.
  
  The resulting response can be seen on the right, and a record of this request will now be visible in your [history](/docs/postman/sending_api_requests/responses/) on the left.
  
  [![sending request](https://assets.postman.com/postman-docs/WS-anuhyaMock1.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock1.png)

##### **Step 2: Saving the request (R1) to a collection (C1)**
  
  Hit the **Save** button to open the **SAVE REQUEST** modal. [Collections](/docs/postman/collections/creating_collections/) are simply groups of requests that can be connected together to create APIs and workflows.
  
  [![save request button](https://assets.postman.com/postman-docs/WS-anuhyaMock2-1.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock2-1.png)
  
  You can save a request to an existing collection, or save it to a new collection.  Let's create our new collection called `C1`. 
  
  [![save request modal](https://assets.postman.com/postman-docs/anuhyaMock3.png)](https://assets.postman.com/postman-docs/anuhyaMock3.png)
  
  Collection `C1` will now be accessible in the **Collections** tab in the application. We can do all sorts of things within the collection details view: [viewing API documentation](/docs/postman/api_documentation/viewing_documentation/), [mocking a collection](/docs/postman/mock_servers/setting_up_mock/), [monitoring a collection](/docs/postman/monitors/setting_up_monitor/), or [running the collection](/docs/postman/collection_runs/starting_a_collection_run/).

  [![collection tab](https://assets.postman.com/postman-docs/WS-anuhyaMock4.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock4.png)
  
##### **Step 3: Saving the request R1's response as an example (P1)**

  Now, let's save an example response from the request we just sent by hitting the **Save Response** button.
  
  [![save response button](https://assets.postman.com/postman-docs/WS-anuhyaMock5.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock5.png)
  
  This takes us to the **Examples** screen which can be used to save the request response as an example. Let's call this example `P1`.
  
  [![examples screen](https://assets.postman.com/postman-docs/WS-anuhyaMock6.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock6.png)
  
  Enter a name for this example.  The request method, URL, and status code are crucial in determining which responses will be returned by the mock we will create. Verify these elements are all as desired, and hit the **Save Example** button. Hit the back arrow in the top left to return to the request builder, and we can now see the example we created in the top right, added to the request.

  [![see example](https://assets.postman.com/postman-docs/WS-anuhyaMock7.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock7.png)

### Mocking with examples

In the previous steps, we prepared the collection, request, and example response necessary for us to get started with mocking. So let’s continue with the next steps.
  
##### **Step 4: Creating a mock (M1) for the collection (C1)**

  There are two ways to create a mock for our collection: 1) using the Postman app and 2) [using the Postman API](/docs/postman/mock_servers/mock_with_api/). In this example, we will mock a collection using the Postman app.
  
  From the Postman app, click on the right angle bracket (**>**) next to the collection you wish to mock to expand the collection details view. 
  
  [![mock in collection details view](https://assets.postman.com/postman-docs/WS-anuhyaMock10.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock10.png)
  
  Under the **Mocks** tab, click the **Add a mock** link to open the **MOCK COLLECTION** modal. Here, you can choose a corresponding environment to include in your mock. 
  
  We are not using any environment variables in our single saved example (P1), therefore we are going to go ahead and create a mock with `No Environment` chosen. It’s important to note that if your saved example has an environment variable in the URL, for example, {% raw %}`{{base_url}}/my/path`{% endraw %} and you do not provide the corresponding environment when creating the mock, trying to mock that particular request will not work. 
  
  Mocks are accessible to the public by default. If you check the box making the mock server private, Postman Pro and Enterprise users can [share the underlying collection](/docs/postman/team_library/sharing/#sharing-collections) with the team or specific team members, and provide permissions to edit or view.
  
  [![mock collection modal](https://assets.postman.com/postman-docs/anuhyaMock9.png)](https://assets.postman.com/postman-docs/anuhyaMock9.png)
  
  Once you mock the collection, it will be visible under the `Mocks` tab of the collection details view. You can also see the mock URL we will need for the next step.
  
##### **Step 5: Sending a request using the mock server (M1)**

  Now that we have created our mock `M1`, let's try sending a request to this mock endpoint. Copy the mock URL from the mock we created in the previous step, and paste it into a new request, with an undefined path in this case `https://b75a340e-4268-4b20-8f5f-3cfc8f37cec6.mock.pstmn.io`. 
  
  For private mocks, an additional step is required. Under the **Headers** tab of this new request, add the `x-api-key` header, with the value of your [Postman API key](https://app.getpostman.com/dashboard/integrations/pm_pro_api/list).
  
  [![send a request to mock server](https://assets.postman.com/postman-docs/WS-anuhyaMock8.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock8.png)
  
  Sending a request to this mock endpoint with an undefined path returns an error. As you can see, there is no matching saved example with the path `''` and the request method `GET`. Responses returned by the mock service are entirely dependent on your saved examples and the included URL and request method type. 
  
  [![mock request not found error](https://assets.postman.com/postman-docs/WS-anuhyaMock11.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock11.png)
  
  We do, however, have a saved example with the path `/get` and the request method `GET`. So sending a `GET` request to the URL `https://b75a340e-4268-4b20-8f5f-3cfc8f37cec6.mock.pstmn.io/get` will return the proper response we are looking for.

  [![mock response](https://assets.postman.com/postman-docs/WS-anuhyaMock12.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock12.png)

##### **Adding more examples**
  
  To further illustrate how responses from the mock service are entirely dependent on your saved examples, let's try adding another example to this collection. We'll repeat steps 1 to 3 of saving the request to a collection and saving the response as an example, with a new URL `https://postman-echo.com/test`.
  
  [![second example](https://assets.postman.com/postman-docs/WS-anuhyaMock13.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock13.png)

  Sending a `GET` request to `https://postman-echo.com/test` returns a 404 error which we will then save as another example. Our collection `C1` now has two requests and two saved examples:
  
  * `GET` > `/get`
  * `GET` > `/test/`
  
  Mocking the `/test` mock path also gives us our expected 404 response.
  
  [![404 example](https://assets.postman.com/postman-docs/WS-anuhyaMock14.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock14.png)

  Your examples might vary depending on the URL endpoint, request method type, or status code. If you have multiple examples saved to the same mock, you can choose to save each example under a unique URL endpoint like we saw in this example with `/get` and `/test`. Alternatively, if you have saved examples with different response status codes, you can send an authenticated request to the mock endpoint along with the `x-mock-response-code` header specifying which specifies which integer response code your returned response should match.
  
  Learn more about the [matching algorithm](/docs/postman/mock_servers/matching_algorithm/) for mocks.

And we're done! We have walked through how to create a collection, save requests, save examples, create a mock, and use a mock.
