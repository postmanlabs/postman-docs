---
title: "Postman API"
order: 146
page_id: "intro_api"
search_keyword: "postman-api-key, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Continuous Integration"
    url: "/docs/running-collections/using-newman-cli/continuous-integration/"

warning: false

---

The [Postman API](https://docs.api.getpostman.com/) endpoints to help you integrate Postman within your development toolchain.

You can add new collections, update existing collections, update environments, and add and run monitors directly through the API. This enables you to programmatically access data stored in your Postman account.

You can get started with the API via the **Run in Postman** button at the top of the [Postman API documentation](https://docs.api.getpostman.com/) and use the Postman app to send requests.

You will need an [API key](#generating-a-postman-api-key) to access the Postman API.

> The Postman API is [rate limited](#rate-limits).

## Generating a Postman API key

You need a valid API Key to send requests to the Postman API endpoints.

You can generate an API Key directly from your [Postman API Keys page](https://go.postman.co/settings/me/api-keys) or by navigating to the [web dashboard](https://app.getpostman.com/).

Navigate to the [web dashboard](https://app.getpostman.com/). Select a workspace and open __Integrations__. Locate the Postman API and click __View Details__.

![Workspace Integrations](https://assets.postman.com/postman-docs/workspace-integrations-api.jpg)

If you do not have any keys yet you will be prompted to create one. Click __Generate API Key__.

<img alt="Generate API Key" src="https://assets.postman.com/postman-docs/generate-api-key.jpg" width="500px"/>

Enter a name for your key and click __Generate API Key__.

<img src="https://assets.postman.com/postman-docs/api-key-name.jpg" width="300px" alt="API Key Name"/>

Copy your key and click __Close__.

<img src="https://assets.postman.com/postman-docs/copy-api-key.jpg" width="300px" alt="API Key Name"/>

Once you have keys generated you can manage them within your workspace.

![Workspace Keys](https://assets.postman.com/postman-docs/api-keys-overview.jpg)

Use __API Key Settings__ to specify expiration periods for your keys.

<img src="https://assets.postman.com/postman-docs/api-key-expire.jpg" width="300px" alt="API Key Expires"/>

### Authentication

You will need to authenticate your requests to the Postman API by sending your API Key in the `X-Api-Key` header of every request you make.

Your API Key provides access to any Postman data you have permissions for.

You can store your API key in an [environment variable](/docs/sending-requests/managing-environments/)—if you name it `postman-api-key` the Postman API collection will use it automatically

## Rate Limits

API access rate limits are applied at a per-key basis in unit time.

Access to the API using a key is limited to **60 requests per minute**. Every API response includes the following set of headers to identify the status of your consumption.

| Header                | Description   |
| ---                   | ---           |
| `X-RateLimit-Limit`   | The maximum number of requests that the consumer is permitted to make per minute. |
| `X-RateLimit-Remaining`| The number of requests remaining in the current rate limit window. |
| `X-RateLimit-Reset`   | The time at which the current rate limit window resets in UTC epoch seconds. |

### Free API calls with your Postman account

Your Postman account gives you a limited number of free Postman API calls per month. You can check your usage limits through the [Postman API](https://docs.api.getpostman.com) itself or the [account usage page](https://go.pstmn.io/postman-account-limits).

## Next steps

You can [combine the Postman API with Newman](/docs/running-collections/using-newman-cli/continuous-integration/) to integrate Postman with your CI/CD workflow.
