---
title: "Intro to mock servers"
page_id: "intro_to_mock_servers"
warning: false
---


### What are mock servers?

Delays on the front- or back-end make it difficult for dependent teams to complete their work efficiently. Postman's mock servers can alleviate those delays in the development process. 

Before sending an actual request, front-end developers can create a mock server to simulate each endpoint and its corresponding response in a Postman Collection. Developers can view potential responses, without spinning up a back end.

### Why use mock servers?

Creating a [mock example](/docs/v6/postman/collections/examples){:target="_blank"} during the earliest phase of API development fosters clear communication among team members and aligns their expectations. 

As a result, all teams in the development process can work in parallel; and dependent teams experience fewer delays.

### Types of mock servers

Postman lets you create two types of mock servers: private and public.

**Private mock servers**

Private mock servers require users to add a Postman API key in the request header. `x-api-key:<your postman API key>`

If you create a private mock server, Postman Pro and Enterprise users can [share the underlying collection](/docs/v6/postman/team_library/sharing#sharing-collections){:target="_blank"} with the team or specific team members, and provide permissions to edit or view. 

If you are a paid user, your team members can use their Postman API keys to consume the mock. Team members can use the mock if they have permissions to access the underlying collection.

**Public mock servers**

Mock servers are public by default. Public mock servers are accessible to anyone. When you share a public mock server, users don’t need to add a Postman API key. 



For more information about mock servers, see:

* [Setting up a mock server](/docs/v6/postman/mock_servers/setting_up_mock){:target="_blank"}
* [Mocking with examples](/docs/v6/postman/mock_servers/mocking_with_examples){:target="_blank"}
* [Mocking with the Postman API](/docs/v6/postman/mock_servers/mock_with_api){:target="_blank"}
* [Matching algorithm (for mocks)](/docs/v6/postman/mock_servers/matching_algorithm){:target="_blank"}


