---
title: "Mocking with the Postman API"
order: 144
page_id: "mock_with_api"
search_keyword: "x-mock-response-code, x-mock-response-name, x-mock-response-id, x-mock-match-request-body, x-mock-match-request-headers"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: link
    name: "Intro to the Postman API"
    url: "/docs/postman/postman-api/intro-api/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Gear4Music"
    url: "https://www.postman.com/resources/case-studies/gear4music/"
  - type: link
    name: "Giant Machines"
    url: "https://www.postman.com/resources/case-studies/giant-machines/"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Mock responses in Postman by using Examples"
    url: "https://blog.postman.com/2017/05/17/mock-responses-in-postman-by-using-examples/"

warning: false
---

You can [mock a collection](/docs/postman/mock-servers/setting-up-mock/) directly from the Postman app. Additionally, you can create a mock using the Postman API. Let’s walk through this step by step.

## Set up a collection for mocking

In this example, we have a Collection `testAPI` with corresponding environment `testAPIEnv`.  Let's set up a mock service to enable your front-end team to simulate each endpoint in `testAPI` and view the various responses.

Navigate to every request in the Collection `testAPI` that you would like to include in this simulation, and [save responses](/docs/postman/sending-api-requests/responses/) with details about the response body, header or status codes that you would like to see returned by that endpoint. This example saves two responses with status codes of 200 and 401 for this particular request.  Once you save the desired responses, the Collection is ready for mocking.

**Note**: In addition to mocking a collection with a saved response, you can also [mock a request and response using examples](/docs/postman/collections/examples/).

[![saved responses](https://assets.postman.com/postman-docs/WS-mock-PM-API67.png)](https://assets.postman.com/postman-docs/WS-mock-PM-API67.png)

## Retrieve information needed for mock creation

Let's retrieve the `collectionId` of `testAPI` using the [Postman API](https://api.getpostman.com/). Get a list of all your Collections using the [GET All Collections endpoint](https://docs.api.getpostman.com/#3190c896-4216-a0a3-aa38-a041d0c2eb72). Search for the name of your Collection and retrieve the `uid` from the results, which will be used as the `collectionId` in the next step.

[![get collection id](https://assets.postman.com/postman-docs/WS-get-info-46.png)](https://assets.postman.com/postman-docs/WS-get-info-46.png)

You can also use the Postman app to retrieve the `collectionId`. Find the Collection in your app and hit `View Docs`. The `collectionId` is visible in the documentation url:

```text
https://documenter.getpostman.com/collection/view/{{collectionId}}
```

As an optional step, you can include an environment as a part of your simulation by retrieving the `environmentId` of `testAPIEnv` using the [Postman API](https://api.getpostman.com/). Get a list of all your environments using the [GET All Environments endpoint](https://docs.api.getpostman.com/#d26bd079-e3e1-aa08-7e21-66f55df99351). Search for the name of your environment and retrieve the `uid` from the results, which will be used as the `environmentId` in the next step.

[![get environment id](https://assets.postman.com/postman-docs/WS-get-info-46.png)](https://assets.postman.com/postman-docs/WS-get-info-46.png)

## Create a mock using the Postman API

Create a mock using the [`POST Create Mock` endpoint](https://docs.api.getpostman.com/#a54b358e-2686-bb4e-15c6-125b23776593) with the `collectionId` and `environmentId` you retrieved previously.

Mocks are accessible to the public by default. If you want the mock to only be available privately, include `"private": true`.

[![create mock](https://assets.postman.com/postman-docs/WS-creaste-mock34.png)](https://assets.postman.com/postman-docs/WS-creaste-mock34.png)

Verify that the mock has been created using the [GET All Mocks endpoint](https://docs.api.getpostman.com/#018b5d62-f6fc-f752-597e-c1eb4bb98d24), and your Collection is now ready to be simulated.

## Run the mock service

**Mock your Collection using the following url:**

```text
https://{{mockId}}.mock.pstmn.io/{{mockPath}}
```

* `mockId` is the `id` that you received upon creating the mock and can be retrieved using the [GET All Mocks endpoint](https://docs.api.getpostman.com/#018b5d62-f6fc-f752-597e-c1eb4bb98d24).
* `mockPath` is the path of your request that you’d like to mock, for example `api/response`.

**Add the request header(s):**

* Mock requests also accept another optional header, `x-mock-response-code`, which specifies which integer response code your returned response should match. For example, 500 will return only a 500 response. If this header is not provided, the closest match of any response code will be returned.
* Similarly, other optional headers like `x-mock-response-name` or `x-mock-response-id` allow you to further specify the exact response you want by the name or by the uid of the saved example respectively. You can get the example response uid by using the Postman API to [GET a Single Collection](https://docs.api.getpostman.com/#647806d5-492a-eded-1df6-6529b5dc685c) and searching for your example in the response. The uid has the syntax `<user-id>-<response-id>`. Without these optional headers, the mock will follow a [matching algorithm](/docs/postman/mock-servers/matching-algorithm/) to decide which example to return.
* Mock requests also accepts optional headers `x-mock-match-request-body` for request body matching and `x-mock-match-request-headers` for matching incoming mock request headers. You must set `x-mock-match-request-body` header to `true` to enable request body matching. To enable incoming mock request headers matching, you must ensure that `x-mock-match-request-headers` header is present in the request and its value is a comma separated string of header keys that you want to match against in the saved examples.

[![request headers](https://assets.postman.com/postman-docs/WS-run-mock40.png)](https://assets.postman.com/postman-docs/WS-run-mock40.png)

## Mock requests and responses with examples

In the previous example, a saved response was used to mock a collection. You can also [mock a request and response using examples](/docs/postman/collections/examples/) in Postman before sending the actual request or setting up a single endpoint to return the response. With examples, you can mock raw responses and save them. Then, you’ll be able to generate a mock endpoint for each of them using Postman’s mock service.
