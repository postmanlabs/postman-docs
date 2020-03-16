---
title: "Why are my Postman API calls not working?"
order: 3
page_id: "why-are-my-postman-api-calls-not-working"
warning: false
---
The [Postman API](https://learning.postman.com/docs/postman/postman-api/intro-api/) requires you to authenticate all requests with an [API Key](https://learning.postman.com/docs/postman/postman-api/intro-api/#generating-a-postman-api-key). This needs to be added to your request in the form of a `X-API-Key` header. The Postman API documentation page has more info on [authentication](https://docs.api.getpostman.com/#authentication).

If you're still getting an error, you could have reached your rate-limit of **60 requests per minute**. You can confirm this by checking the `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset` headers in the API response. More information on rate-limiting can be found in the [Postman API documentation page](https://documenter.getpostman.com/view/631643/JsLs/?version=latest#rate-limits).
