---
title: "Custom Webhooks"
page_id: "custom_webhooks"
tags: 
  - "pro"
warning: false
---

Postman provides custom webhook integration which enables you to automate workflows between your favorite apps and services to get notifications, synchronize files, collect data, and more. It offers many services with predefined flows available for easy implementation.

You can configure a custom webhook with Postman to send events such as - monitoring run results, viewing team and collection-specific activity feeds, and backing up Postman Collections. Webhooks require a few configuration options before you can make use of them. We'll go through each of these settings below.


### Configuring Custom Webhook URL

1. In the [Integrations](https://go.postman.co/workspaces) page, find Webhooks from a list of Postman’s 3rd party integrations for Postman Pro and Enterprise users.

[![custom_webhook](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/webhooks_view1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/webhooks_view1.png)  

Click **View Details** to go to the Webhooks main interface. You can also click **Configured Integrations** tab to set up other integrations, view available integrations for Custom Webhooks, or view all configured integrations. 

[![webhooks_view2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/webhooks_view2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/webhooks_view2.png)  


### Back up your Postman Collections
It’s important to back up your Postman Collections for safekeeping. Custom webhook helps you do this with any service you use like Box (a cloud-based storage solution).

To back up your Postman Collections in Custom webhooks:

1. Click **Add Integration**.
2. In the **Backup your Postman Collections** page:
   * Enter any name
   * Select the collection.
   * Enter the Webhook URL.
3. Click **Add Integration**.


[![webhooks collections1](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/webhooks_collections1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/webhooks_collections1.png)

Once integration is done, you can view the completed integrations in the Configured Integrations tab, as illustrated below:

[![configured integrations](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Configured_integrations.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Configured_integrations.png)

##### **Backup Collections**

The following is a schema for Backup Collections:
```
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "definitions": {},
  "id": "http://example.com/example.json",
  "properties": {
    "collection": {
      "id": "/properties/collection",
      "properties": {},
      "type": "object"
    }
  },
  "type": "object"
}
```

#### Send collection activity feed to Custom Webhooks
The activity feed is where you can view all of the changes being made to your Postman Collection by your teammates. Integrating with Webhooks gives you the freedom to connect with email services like Outlook, Gmail, or a custom SMTP service.

To send collection activity feed to Custom webhooks:

1. Click **Add Integration**.
2. In the **Collection Activity Feed** page, enter the webhook URL to send team updates to this specific URL.
3. Click **Add Integration**.

### Send Monitor run results to Custom Webhooks
Postman Monitors allows you to run your collections on a schedule without any manual intervention. With the Custom webhooks, you can use those results by connecting to other available services.

To send monitor run results to Custom Webhooks:

1. Click **Add Integration**.
2. In the **Monitor Run Results** page, select the monitor you want to send to Custom webhooks. 
3. Click **Add Integration**.

[![webhook_mon_runs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/webhooks_monitors1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/webhooks_monitors1.png) 

You can also configure advanced options to alert you when a monitor run completes or when three failures occur and the first monitor run after those failures completes successfully.

And you’re done! Your integration has been set up successfully. Now, whenever a monitor would run, results would be posted to the webhook. 

##### **Monitor Run Results** 

The following is a schema for Monitor Run Results:

```
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "definitions": {},
  "id": "http://example.com/example.json",
  "properties": {
    "collection_name": {
      "id": "/properties/collection_name",
      "type": "string"
    },
    "collection_uid": {
      "id": "/properties/collection_uid",
      "type": "string"
    },
    "environment_name": {
      "id": "/properties/environment_name",
      "type": "string"
    },
    "environment_uid": {
      "id": "/properties/environment_uid",
      "type": "string"
    },
    "metrics": {
      "id": "/properties/metrics",
      "properties": {
        "errors": 
          "id": "/properties/metrics/properties/errors",
          "type": "integer"
        },
        "failedTests": {
          "id": "/properties/metrics/properties/failedTests",
          "type": "integer"
        },
        "passedTests": {
          "id": "/properties/metrics/properties/passedTests",
          "type": "integer"
        },
        "requestCount": {
          "id": "/properties/metrics/properties/requestCount",
          "type": "integer"
        },
        "totalLatency": {
          "id": "/properties/metrics/properties/totalLatency",
          "type": "integer"
        },
        "warnings": {
          "id": "/properties/metrics/properties/warnings",
          "type": "integer"
        }
      },
      "type": "object"
    },
    "monitor_name": {
      "id": "/properties/monitor_name",
      "type": "string"
    },
    "monitor_uid": {
      "id": "/properties/monitor_uid",
      "type": "string"
    },
    "user_id": {
      "id": "/properties/user_id",
      "type": "string"
    },
    "user_name": {
      "id": "/properties/user_name",
      "type": "string"
    }
  },
  "type": "object"
}
```

### Send a team activity feed to Custom Webhooks
The activity feed is where you can track changes made to your collections and within your team. Integrating with Webhooks gives you the freedom to connect with many services. 

To send a team activity feed to Custom webhook:

1. Click the **Add Integration** button.
2. In the **Team Activity Feed** page, enter the webhook URL to send team updates to this specific URL.
3. Click the **Add Integration** button.

[![custom webhook](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-msFlow-teamactivityfeed.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-msFlow-teamactivityfeed.png)


##### **Team Activity**
The following is a schema for Team Activity:

```
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "definitions": {},
  "id": "http://example.com/example.json",
  "properties": {
    "action": {
      "id": "/properties/action",
      "type": "string"
    },
    "collection_name": {
      "id": "/properties/collection_name",
      "type": "string"
    },
    "collection_uid": {
      "id": "/properties/collection_uid",
      "type": "string"
    },
    "message": {
      "id": "/properties/message",
      "type": "string"
    },
    "model": {
      "id": "/properties/model",
      "type": "string"
    },
    "model_name": {
      "id": "/properties/model_name",
      "type": "string"
    },
    "model_uid": {
      "id": "/properties/model_uid",
      "type": "string"
    },
    "user_id": {
      "id": "/properties/user_id",
      "type": "string"
    },
    "user_name": {
      "id": "/properties/user_name",
      "type": "string"
    }
  },
  "type": "object"
}
```