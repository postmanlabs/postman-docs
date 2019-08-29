---
title: "Set up integrations to receive alerts"
page_id: "integrations_for_alerts"
tags: 
  - "pro"
  - "enterprise"
warning: false
---

## Webhooks (Coming soon)

Postman Monitors enable you to set up recurring runs of your Postman Collections at scheduled intervals. But sometimes, you may have a use case where you need to run a monitor at a particular time. That's where the monitoring webhooks come in. Monitoring webhooks are a way to trigger a collection at a specific time with your own custom payload which can then be accessed in the collection. In this way, your collections can run independently of any environment and can solely rely on the incoming data in the request.

So how do they work? Webhooks will POST data to a URL when certain events are triggered. That data will then be accessible inside your collection in the [globals object](/docs/postman/environments_and_globals/manage_globals). You can then parse that data and use it in any way possible. Essentially, webhooks are the same as monitors but without a schedule. So, you can debug your webhooks in the same way as you [debug a monitor](/docs/postman/monitors/troubleshooting_monitors).

Currently, webhooks on a particular collection can only be created using the Postman API. In order to create a webhook, you can refer to the [Postman API](/docs/postman/postman_api/intro_api/).

### Accessing the request body in scripts

The request body of the webhook is available inside the `globals.previousRequest` object. In order to use it, first parse the `globals.previousRequest` object. The data sent to the webhook is available in the `data` parameter inside the parsed object.

The following snippet shows the same:

```js
var previousRequest = JSON.parse(globals.previousRequest),
    webhookRequestData = previousRequest.data;

// webhookRequestData contains the data sent to your webhook.
console.log(JSON.stringify(webhookRequestData));
```

Note: only JSON data is currently supported as the request body in the webhook.

### Sending output to another API

The data that is sent to the webhook can be used to trigger another API and define a logic based on the incoming data. For example, you could set up a monitoring webhook on your Github repository, so that based on the updates happening in your repository, you can trigger custom build pipelines and perform CI tests.
