---
title: "Microsoft Flow"
page_id: "microsoft_flow"
tags: 
  - "pro"
warning: false
---

Microsoft Flow enables you to automate workflows between your favorite apps and services to get notifications, synchronize files, collect data, and more. It offers over 140 services with predefined flows available for easy implementation.

You can configure Microsoft Flow with Postman to monitor run results, view team and collection-specific activity feeds, backup your Postman Collections, and use a Microsoft Flow Webhook URL.

### Congfiguring Microsoft Flow

1. In the [Integrations](https://go.postman.co/workspaces) page, find Microsoft Flow from a list of Postman’s 3rd party Integrations for Postman Pro users.

[![microsoft_flow](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations-microsoftFlow.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations-microsoftFlow.png)  

Click the **View Details** button to see information about HipChat.

You also can click the **Configured Integrations** tab to set up other integrations, view available integrations for Microsoft Flow, or view all integrations.

[![microsoft_conf](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-microsoftFlow-confIntegr.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-microsoftFlow-confIntegr.png)  


#### Add a team activity feed to Microsoft Flow
The activity feed is where you can track changes made to your collections and within your team. Integrating with Flow gives you the freedom to connect email services like Outlook, Gmail, or a custom SMTP service. You also have the option to set up Twilio to text you when updates are made to your feed.

To add a team activity feed to Microsoft Flow:

1. Click the **Add Integration** button.
2. In the **Team Activity Feed** page, enter the Webhook URL to send team updates to this specific URL.
3. Click the **Add Integration** button.

[![microsoft_team_activity](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-msFlow-teamactivityfeed.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-msFlow-teamactivityfeed.png) 

#### Back up your Postman Collections in Microsoft Flow
It’s important to back up your Postman Collections for safekeeping. Microsoft Flow helps you do this with services like Box (a cloud-based storage solution), but you can also use it to backup to your custom DB2 instance.

To back up your Postman Collections in Microsoft Flow:

1. Click the **Add Integration** button.
2. In the **Backup your Postman Collections** page:
* Select the collection.
* Enter the notification URL.
* Enter an identifier for this integration.
3. Click the **Add Integration** button.


[![microsoft_flow_backup](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integration-msFlow-backupcollections.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integration-msFlow-backupcollections.png)

#### See collection activity feed in Microsoft Flow
The activity feed is where you can view all of the changes being made to your Postman Collection by your teammates. Integrating with Flow gives you the freedom to connect email services like Outlook, Gmail, or a custom SMTP service. You also have the option to set up Twilio to text you when updates are made to your feed.

To see collection activity feed in Microsoft Flow:

1. Click the **Add Integration** button.
2. In the **Team Activity Feed** page, enter the Webhook URL to send team updates to this specific URL.
3. Click the **Add Integration** button.

#### Send Monitor run results in Microsoft Flow
Postman Monitors allows you to run your collections on a schedule without any manual intervention. With the Microsoft Flow integration, you can use those results by connecting to other available services.

To send monitor run results to Microsoft Flow:

1. Click the **Add Integration** button.
2. In the **Monitor Run Results** page, select the monitor you want to send to Microsoft Flow. 
3. Click the **Add Integration** button.

[![microsoft_mon_runs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-microsoftFlow-monitorrunresults1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-microsoftFlow-monitorrunresults1.png) 

You can also configure advanced options to alert you when a monitor run completes or when three failures occur and the first monitor run after those failures completes successfully.

And you’re done! Your integration has been set up successfully. Now, whenever a monitor would run, you would get a notification something like this on your Flow mobile app.

[![see notifications](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58858362.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58858362.png)

#### Get the Microsoft Flows webhook URL

Log in to [Microsoft Flow](https://flow.microsoft.com/), and go to `My Flows`. Select `Create from Blank` in the top-right corner. 

[![create connector](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58858272.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58858272.png)  

To add the first step, type `request` in the search bar, and select `Request / Response - Request` from the `Triggers` list.

[![select trigger](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58858278.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58858278.png)  

For different types of integrations, the JSON schema varies. The following shows which schema to use for each one.

##### **Monitor Run Results**

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

##### **Collection and Team Activity Feed**

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

##### **Backup Collections**

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

[![request](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58858289.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58858289.png)

Once that is done, click on `New Step → Add an Action` and configure your specific service. For this demo, let's connect your Postman Monitor to the Microsoft Flow mobile app. So, on every Monitor run, you will receive an in-app notification in the Microsoft Flow mobile app. Select `Notifications` from the list of services and choose the `Send me a mobile notification` action.

[![add action](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58858298.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58858298.png)

[![notifications](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58858309.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58858309.png)  

You can customize the text notifications by choosing your wording and adding content derived from your Postman Monitor run results.

[![enter text](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58858318.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58858318.png)  

Once this is done, click on `Create Flow` on the top-right corner. Once your flow has been created, you will be needing the webhook URL generated by Flow. To obtain that, click on the `Request` trigger and you will find your generated webhook URL.

[![generated webhook URL](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58858329.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58858329.png)

