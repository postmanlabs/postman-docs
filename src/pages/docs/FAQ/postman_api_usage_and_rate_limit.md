---
title: "Postman API Usage and Rate Limit"
order: 360026236734
page_id: "postman_api_usage_and_rate_limit"
warning: false
---

### Postman API Usage and Rate Limit

**Rate Limits**

Postman API has a rate limit of **sixty(60) request per minute**. This means that a user can make a maximum of 60 requests per minute to any of the endpoints. The API rate limits are applied at a per-key basis in unit time.

When a user hit the rate maximum limit, the user will receive a response similar to the following JSON, with a status code of 429 Too Many Requests.

{  

  "error": {  

    "name": "rateLimitError",  

    "message": "Rate Limit exceeded. Please retry at 1465452702843"  

  }  

}

**503 Error**

When a user receives a 503 response from our servers, it implies that we have hit an unexpected spike in API access traffic and would usually be operational within the next 5 minutes. If the outage persists, the user should contact us.

{  

  "error": {  

    "name": "503 service unavailable",  

    "message": "The server is currently not available (because it is overloaded or down for maintenance) Generally this is a temporary state"  

  }  

}
