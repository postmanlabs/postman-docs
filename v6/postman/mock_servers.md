---
title: "Mock Servers"
page_id: "mock_servers"
warning: false
---

### Simulate a back end with Postman's mock servers

Throughout the development process, delays on the front end or back end can hold up dependent teams from completing their work efficiently.  

Using Postman's mock servers, front-end developers can simulate each endpoint in a Postman Collection (and corresponding environment) to view the potential responses, without actually spinning up a back end.

Front-end, back-end and API teams can now work in parallel, freeing up developers who were previously delayed as a result of these dependencies. Let’s walk through this step by step.

### Set up a collection for mocking

In this example, we have a Collection `testAPI` with corresponding environment `testAPIEnv`.  Let's set up a mock service to enable your front-end team to simulate each endpoint in `testAPI` and view the various responses.

Navigate to every request in the Collection `testAPI` that you would like to include in this simulation, and [save responses](/docs/postman/sending_api_requests/responses/) with details about the response body, header or status codes that you would like to see returned by that endpoint. In this example, we will save 2 responses with status codes of 200 and 401 for this particular request.  Once you save the desired responses, the Collection is ready for mocking.

**Note**: In addition to mocking a collection with a saved response, you can also [mock a request and response using examples](/docs/postman/collections/examples/).

[![saved responses](http://blog.getpostman.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-15-at-3.44.27-PM-1024x726.png)](http://blog.getpostman.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-15-at-3.44.27-PM.png)

### Retrieve information needed for mock creation

Let's retrieve the `collectionId` of `testAPI` using the [Postman API](https://api.getpostman.com/). Get a list of all your Collections using the [GET All Collections endpoint](https://docs.api.getpostman.com/#3190c896-4216-a0a3-aa38-a041d0c2eb72). Search for the name of your Collection and retrieve the `uid` from the results, which will be used as the `collectionId` in the next step.

[![get collection id](http://blog.getpostman.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-15-at-3.56.19-PM-1024x426.png)](http://blog.getpostman.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-15-at-3.56.19-PM.png) 

You can also use the Postman app to retrieve the `collectionId`. Find the Collection in your app and hit `View Docs`. The `collectionId` is visible in the documentation url: 

```
https://documenter.getpostman.com/collection/view/{{collectionId}}
``` 

As an optional step, you can include an environment as a part of your simulation by retrieving the `environmentId` of `testAPIEnv` using the [Postman API](https://api.getpostman.com/). Get a list of all your environments using the [GET All Environments endpoint](https://docs.api.getpostman.com/#d26bd079-e3e1-aa08-7e21-66f55df99351). Search for the name of your environment and retrieve the `uid` from the results, which will be used as the `environmentId` in the next step.

[![get environment id](http://blog.getpostman.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-15-at-3.59.04-PM-1024x431.png)](http://blog.getpostman.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-15-at-3.59.04-PM.png)

### Create a mock using the Postman API

Create a mock using the [POST Create Mock endpoint](https://docs.api.getpostman.com/#a54b358e-2686-bb4e-15c6-125b23776593) with the `collectionId` and `environmentId` you retrieved previously.

[![create mock](http://blog.getpostman.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-15-at-4.23.03-PM-1024x599.png)](http://blog.getpostman.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-15-at-4.23.03-PM.png)

Verify that the mock has been created using the [GET All Mocks endpoint](https://docs.api.getpostman.com/#018b5d62-f6fc-f752-597e-c1eb4bb98d24), and your Collection is now ready to be simulated.

### Run the mock service

**Mock your Collection using the following url:** 

```
https://{{mockId}}.mock.pstmn.io/{{mockPath}}
``` 

   *   `mockId` is the `id` that you received upon creating the mock and can be retrieved using the [GET All Mocks endpoint](https://docs.api.getpostman.com/#018b5d62-f6fc-f752-597e-c1eb4bb98d24).
   *   `mockPath` is the path of your request that you’d like to mock, for example `api/response`.

**Add the request header(s):**

   *   Mock requests require one mandatory header, `x-api-key`, which is your Postman API key for authentication. Don't have a Postman API key? [Create one here](https://app.getpostman.com/dashboard/integrations/pm_pro_api/list).
   *   Mock requests also accept another optional header, `x-mock-response-code`, which specifies which integer response code your returned response should match.  For example, 500 will return only a 500 response. If this header is not provided, the closest match of any response code will be returned.

[![request headers](http://blog.getpostman.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-15-at-4.27.58-PM-1024x615.png)](http://blog.getpostman.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-15-at-4.27.58-PM.png)

### Mock requests and responses with examples

In the previous example, we used a saved response to mock our collection. You can also [mock a request and response using examples](/docs/postman/collections/examples/) in Postman before sending the actual request or setting up a single endpoint to return the response. With examples, you can mock raw responses and save them. Then, you’ll be able to generate a mock endpoint for each of them using Postman’s mock service. 

### Free mock server calls with your Postman account

Your Postman account gives you a limited number of free mock server calls per month. You can check your usage limits through the [Postman API](https://docs.api.getpostman.com) or the [account usage page](https://go.pstmn.io/postman-account-limits).
