---
title: "Matching algorithm"
order: 84
page_id: "matching_algorithm"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"

warning: false
---

Using the Postman mock service requires the following: a collection with requests, a mock server, and saved request examples. You can save as many examples to a collection as you please, and the mock server will return these examples predictably. But how exactly does the mock decide which example to return?

## Matching algorithm for mocks

To begin, let’s start with an example.

[![create mock diagram](https://assets.postman.com/postman-docs/create_mock.jpg)](https://assets.postman.com/postman-docs/create_mock.jpg)

When a mock is created using either the Postman API or the Postman app, a call is made to the Postman servers that associates a particular collection (and environment if you choose one) with a newly created mock. The collection `C1` that we just mocked is now associated with the new mock `M1`.

[![show mock diagram](https://assets.postman.com/postman-docs/show_mock.jpg)](https://assets.postman.com/postman-docs/show_mock.jpg)

When we use the mock `M1` via the mock URL `https://M1.mock.pstmn.io` in the Postman app, the mock service will retrieve all saved examples from the Postman servers for that particular collection before it begins the matching process.

[![use mock diagram](https://assets.postman.com/postman-docs/use_mock.jpg)](https://assets.postman.com/postman-docs/use_mock.jpg)

Now that the mock service has all the saved examples for the current collection, it will now iteratively pair the incoming request with the closest matching example.

The incoming request can have several configurable variables, such as `requestMethod` and `mockPath`. The `requestMethod` variable corresponds to any valid HTTP request method (e.g. `GET`, `POST`,`PUT`, `PATCH`, `DELETE`, etc.), and the `mockPath` refers to any valid string path (e.g. `/`, `/test`, `/test/path`, `/test/path/1`).

Other optional headers like `x-mock-response-name` or `x-mock-response-id` allow you to further specify the example to be returned by the name or by the uid of the saved example respectively. You can get the example response uid by using the Postman API to [GET a Single Collection](https://docs.api.getpostman.com/#647806d5-492a-eded-1df6-6529b5dc685c) and searching for your example in the response. The uid has the syntax `<user_id>-<response_id>`.

[![mock configurable](https://assets.postman.com/postman-docs/mock_configurable.png)](https://assets.postman.com/postman-docs/mock_configurable.png)

Keeping these various configurable elements in mind, let’s take a look at the matching algorithm logic.

1. **Properly formatted responses**

   Any responses that are not in the expected format are removed from the matching process.

2. **HTTP method**

   Any responses that are not the same HTTP method type are removed from the matching process. For example: if the mock request you sent was `POST` to `https://M1.mock.pstmn.io/test`, all saved examples whose method type is not `POST` will be disregarded.

3. **Filter by URL**

   The matching process will now examine each saved example, and iterate over every possibility. Compare the `mockPath` of the input URL with that of the saved example. If the input URL was `https://M1.mock.pstmn.io/test` and the example currently being examined had a URL of `https://google.com/help`, the mock service would compare `/test` with `/help`. While comparing URLs, a step-by-step matching is conducted. Each consecutive step that the matching algorithm traverses reduces the matching threshold of the current example response.

   For example:

   * Try to match the input path with the example path exactly as it is. The max value is set as the matching threshold.
   * Try to strip trailing slashes and match the input path with the example path. The threshold is reduced by a certain value, `n`.
   * Try to additionally lowercase the input path and the example path The threshold is reduced by a greater value, `n + m`.
   * Try to additionally strip out alphanumeric ids from the input path and the example path. The threshold is reduced further, `n + 2m`.
   * If all steps fail, this saved example is not an eligible response.

4. **Wildcards**

    All unresolved variables in an example’s requests, that don’t exist in the mock server’s associated environment, are treated as  wildcard variables. Wildcard variables act as capture groups for dynamic URL segments. You will find this useful if some segments of the API’s URL map to resource identifiers, like user IDs, usernames, or filename.

    For example, let’s say you are mocking an endpoint that returns a user profile by ID. It takes in the user ID from the URL and returns the user ID in the response as well. So, on calling `GET {{url}}/users/{{userId}}`, the endpoint is supposed to return:

    ```json
    {
      "id": 2,
      "name": "Carol"
    }
    ```

    To match a request like this in your mock, you can now use a variable in the request URL of your example. You do not need to hardcode values in the example. Instead, you can match any request sent to your mock server that match the pattern `GET /users/<userId>`. You will just have to replace the dynamic segments

    Wildcard matching is only applicable to entire URL path segments.  So, the same example, `GET {{url}}/users/{{userId}}` can serve `GET /users/1`, `GET /users/100` or even `GET /users/carol`. But, it will not match `GET /users/foo/bar`.

    You can use the same variables in the example’s response to use their captured values. Taking the same example, you can add a request body for the same example like this:

    ```js
    {
      "id": {{userId}},
      "name": "Carol"
    }
    ```

    This will pass the value captured from the wildcard segment with the same variable name into the response.

5. **Response code**

   If the `x-mock-response-code` header is explicitly provided, filter out all examples that do not have a matching response code.

6. **Highest threshold value**

   Sort the remaining filtered responses in descending order and return the response with the highest threshold value.

And there we have it! This is how the mock service finds and returns the appropriate response to a mock request.
