---
title: "Datadog"
order: 286
page_id: "datadog"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "https://learning.postman.com/docs/postman/collections/intro-to-collections"
---

> __[Integrations are available on Postman Team, Business, and Enterprise plans.](https://www.getpostman.com/pricing)__

Datadog is a monitoring service for cloud-scale applications. It combines data from servers, databases, tools, and services to present a unified view of an entire stack. This integration allows you to configure your Postman Monitors to send metrics to Datadog where you can visualize and compare them with other metrics.

Setting up a Datadog integration requires you to get an API key from Datadog and configure your Postman Monitors. After you set up the integration, you can view real-time alerts based on the results of your monitors.

## Retrieving your Datadog API Key

Log in to [Datadog](https://app.datadoghq.com/account/settings#api) and select __Integrations__ in the header toolbar.

An `API Key` is created for you automatically under the "APIs" tab. If you want, you can also create a key by specifying a name for it.

Save the API Key to use later.

[![datadog integrations page](https://assets.postman.com/postman-docs/58830948.png)](https://assets.postman.com/postman-docs/58830948.png)

## Configuring Postman Monitors

1. In the [Integrations](https://go.postman.co/workspaces) tab for your workspace, select Datadog from the list of third party integrations.

    [![datadog integrations page](https://assets.postman.com/postman-docs/integrations_datadog2.png)](https://assets.postman.com/postman-docs/integrations_datadog2.png)

1. Click the **View Details** button to see information about Datadog and how it can provide real-time alerting based on the results of your Postman monitors.

    You can also click the **Configured Integrations** tab to set up other integrations, view available integrations for Datadog, or view all integrations.

    [![datadog integrations page](https://assets.postman.com/postman-docs/WS-datadog-config.png)](https://assets.postman.com/postman-docs/WS-datadog-config.png)

1. Click the **Add Integration** button to display the **Send Monitor Run Results** options.

    [![datadog integrations add](https://assets.postman.com/postman-docs/integrations_datadog_sendMonitor.png)](https://assets.postman.com/postman-docs/integrations_datadog_sendMonitor.png)

1. To send your monitor metrics and events to Datadog:

    * Select the monitor whose data you would like to send to Datadog.
    * Enter a Datadog provided API key or generate an API key.
    * Optionally indicate if you want to send events for completed runs or send metrics for each run.

1. Click the **Add Integration** button.

## Viewing data in Datadog

As soon as your monitor runs, the data will start flowing into Datadog.

[![view in datadog](https://assets.postman.com/postman-docs/58831748.png)](https://assets.postman.com/postman-docs/58831748.png)

Once the data is present in Datadog, you can filter it based on the monitor name/uid, collection name/uid, user name/id, and even environment name/uid (if present). You can also combine different metrics to create a dashboard.

[![datadog filters](https://assets.postman.com/postman-docs/58831776.png)](https://assets.postman.com/postman-docs/58831776.png)
