---
title: "BigPanda"
page_id: "bigpanda"
tags: 
  - "pro"
warning: false

---

BigPanda is an IT systems management platform that aggregates and correlates IT alerts to create high-level IT incidents. It directs all alerts to a single place with different connected services.

Setting up a BigPanda integration requires you to get an API key and configure Postman monitors. 


After you set up the integration, you can view real-time alerts based on the results of your Postman monitors.


### Retrieving the BigPanda API key

1. Log in to your [BigPanda](https://bigpanda.io/) account and select "Integrations" in the header toolbar, then click the **New Integration** button.

[![bigpanda integrations](https://assets.postman.com/postman-docs/bigPanda-integrations.png)](https://assets.postman.com/postman-docs/bigPanda-integrations.png)

<ol start="2">
  <li>Click "Alerts REST API" and then click the <b>Integrate</b> button.</li>
</ol>

[![alerts REST API](https://assets.postman.com/postman-docs/58834897.png)](https://assets.postman.com/postman-docs/58834897.png)

<ol start="3">
  <li>To generate the App key, enter a name for the integration and click the <b>Generate App Key</b> button.</li>
</ol>

[![generate app key](https://assets.postman.com/postman-docs/bigPanda_generateAppkey.png)](https://assets.postman.com/postman-docs/bigPanda_generateAppkey.png)

The generated App Key displays.

[![results app key](https://assets.postman.com/postman-docs/bigPanda-appKey.png)](https://assets.postman.com/postman-docs/bigPanda-appKey.png)

<ol start="4">
  <li>Save the generated App key and the API key for use later.
</li>
</ol>

### Configuring Postman monitors


1. In the **[Integrations](https://go.postman.co/workspaces)** page, find BigPanda from a list of Postman's 3rd party Integrations for Postman Pro users.

2. Click the **View Details** button to see information about BigPanda and how it can provide real-time alerting based on the results of your Postman monitors. 

You also can click the **Configured Integrations** tab to set up other integrations, view available integrations for BigPanda, or view all integrations.

[![bigpanda integrations](https://assets.postman.com/postman-docs/integrations_bigPanda_details2.png)](https://assets.postman.com/postman-docs/integrations_bigPanda_details2.png)

<ol start="3">
  <li>Click the <b>Add Integration</b> button to display the <b>Send Monitor Run Results</b> modal. 
</li>
</ol>

[![bigpanda integrations](https://assets.postman.com/postman-docs/integrations_BigPanda_sendMonitor1.png)](https://assets.postman.com/postman-docs/integrations_BigPanda_sendMonitor1.png)

<ol start="4">
  <li>
In the <b>Send Monitor Run Results</b> page: 
</li>
</ol>

* Select a monitor to send to BigPanda.
* Enter the BigPanda app key.
* Enter the API token for the app.

<ol start="5">
  <li>
    Click the <b>Add Integration</b> button. 
</li>
</ol>


You can send the results of multiple monitors to the same BigPanda collection.

### Viewing alerts in BigPanda

<ol start="1">
  <li>Click the <b>View Details</b> button to see information about BigPanda and how it can provide real-time alerting based on the results of your Postman monitors. 
</li>
</ol>

You also can click the **Configured Integrations** tab to set up other integrations, view available integrations for BigPanda, or view all integrations.

[![bigpanda integrations](https://assets.postman.com/postman-docs/integrations_bigPanda_details2.png)](https://assets.postman.com/postman-docs/integrations_bigPanda_details2.png)

<ol start="2">
  <li>Click the <b>Add Integration</b> button to display the <b>Send Monitor Run Results</b> box. 
</li>
</ol>

[![bigpanda integrations](https://assets.postman.com/postman-docs/integrations_BigPanda_sendMonitor1.png)](https://assets.postman.com/postman-docs/integrations_BigPanda_sendMonitor1.png)

<ol start="3">
  <li>
In the <b>Send Monitor Run Results</b> page: 
</li>
</ol>

* Select a monitor to send to BigPanda.
* Enter the BigPanda app key.
* Enter the API token for the app.


<ol start="4">
  <li>
    Click the <b>Add Integration</b> button. 
</li>
</ol>


You can send the results of multiple monitors to the same BigPanda collection.

### Viewing alerts in BigPanda

BigPanda gives you real-time alerts based on the results of your Postman Monitors. If there was a failed test or if an error occurred during the run, an alert is created on BigPanda, which would then alert the user.

[![view in bigpanda](https://assets.postman.com/postman-docs/58835364.png)](https://assets.postman.com/postman-docs/58835364.png)
