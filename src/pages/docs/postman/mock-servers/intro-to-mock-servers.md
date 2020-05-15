---
title: "Intro to mock servers"
order: 141
page_id: "intro_to_mock_servers"
search_keyword: "x-api-key"
warning: false
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
---

## What are mock servers

Delays on the front-end or back-end make it difficult for dependent teams to complete their work efficiently. Postman's mock servers can alleviate those delays in the development process.

Before sending an actual request, front-end developers can create a mock server to simulate each endpoint and its corresponding response in a Postman Collection. Developers can view potential responses, without spinning up a back end.

## Why use mock servers

Creating a [mock example](/docs/postman/collections/examples/) during the earliest phase of API development fosters clear communication among team members and aligns their expectations.

As a result, all teams in the development process can work in parallel; and dependent teams experience fewer delays.

## Types of mock servers

Postman lets you create two types of mock servers: private and public.

### Private mock servers

Private mock servers require users to add a Postman API key in the request header `x-api-key`, like: `x-api-key:<your postman API key>`.

If you create a private mock server, users can [share the underlying collection](/docs/postman/workspaces/using-workspaces#sharing-collections-and-environments-in-workspaces) with the team or specific team members, and provide permissions to edit or view. Your team members can use their Postman API keys to consume the mock. Team members can use the mock if they have permissions to access the underlying collection.

### Public mock servers

Mock servers are public by default. Public mock servers are accessible to anyone. When you share a public mock server, users don’t need to add a Postman API key.

## Further reading

For more information about mock servers, see:

* [Setting up a mock server](/docs/postman/mock-servers/setting-up-mock/)
* [Mocking with examples](/docs/postman/mock-servers/mocking-with-examples/)
* [Mocking with the Postman API](/docs/postman/mock-servers/mock-with-api/)
* [Matching algorithm (for mocks)](/docs/postman/mock-servers/matching-algorithm/)
