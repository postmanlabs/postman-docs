---
title: "Datadog"
page_id: "datadog"
tags: 
  - "pro"
warning: false
---

Datadog is a monitoring service for cloud-scale applications. It combines data from servers, databases, tools, and services to present a unified view of an entire stack. This integration allows you to configure your Postman Monitors to send metrics to Datadog where you can visualize and compare them with other metrics.

Setting up a Datadog integration requires you to get an API key from Datadog and configure your Postman Monitors. After you set up the integration, you can view real-time alerts based on the results of your monitors.

### Retrieving your Datadog API Key

Log in to [Datadog](https://app.datadoghq.com/account/settings#api), and select "Integrations" in the header toolbar. 

An `API Key` is created for you automatically under the "APIs" tab. If you want, you can also create a key by specifying a name for it. 

Save the API Key to use later.

[![datadog integrations page](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58830948.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58830948.png)

### Configuring Postman Monitors

1. In the [Integrations](https://go.postman.co/workspaces) page, find Datadog in the list of Postman’s 3rd party Integrations for Postman Pro users.

[![datadog integrations page](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations_datadog2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations_datadog2.png)

<ol start="2">
  <li>
Click the <b>View Details</b> button to see information about Datadog and how it can provide real-time alerting based on the results of your Postman monitors.</li>
</ol>

You also can click the **Configured Integrations** tab to set up other integrations, view available integrations for Datadog, or view all integrations.

[![datadog integrations page](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-datadog-config.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-datadog-config.png)

<ol start="3">
  <li>
Click the <b>Add Integration</b> button to display the <b>Send Monitor Run Results</b> options.</li>
</ol>

[![datadog integrations add](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations_datadog_sendMonitor.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations_datadog_sendMonitor.png)

<ol start="4">
  <li>
To send your monitor metrics and events to Datadog:</li>
</ol>

* Select the monitor whose data you would like to send to Datadog.
* Enter a Datadog provided API key or generate an API key.
* Optionally indicate if you want to send events for completed runs or send metrics for each run.

<ol start="5">
  <li>
Click the <b>Add Integration</b> button.</li>
</ol>


### Viewing data in Datadog

As soon as your monitor runs, the data will start flowing into Datadog. 

[![view in datadog](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58831748.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58831748.png)

Once the data is present in Datadog, you can filter it based on the monitor name/uid, collection name/uid, user name/id, and even environment name/uid (if present). You can also combine different metrics to create a dashboard.

[![datadog filters](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58831776.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58831776.png)
