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

[![bigpanda integrations](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations_bigPanda_details2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations_bigPanda_details2.png)

<ol start="2">
  <li>Click "Alerts REST API" and then click the <b>Integrate</b> button.</li>
</ol>

[![alerts REST API](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58834897.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58834897.png)

<ol start="3">
  <li>To generate the App key, enter a name for the integration and click the <b>Generate App Key</b> button.</li>
</ol>

[![generate app key](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigPanda_generateAppkey.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigPanda_generateAppkey.png)

The generated App Key displays.

[![results app key](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigPanda-appKey.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigPanda-appKey.png)

<ol start="4">
  <li>Save the generated App key and the API key for use later.
</li>
</ol>

### Configuring Postman monitors


1. In the **[Integrations](https://go.postman.co/workspaces)** page, find BigPanda from a list of Postman's 3rd party Integrations for Postman Pro users.

2. Click the **View Details** button to see information about BigPanda and how it can provide real-time alerting based on the results of your Postman monitors. 

You also can click the **Configured Integrations** tab to set up other integrations, view available integrations for BigPanda, or view all integrations.

3. Click the <b>Add Integration</b> button to display the <b>Send Monitor Run Results</b> modal.

4. In the **Send Monitor Run Results** page:

* Select a monitor to send to BigPanda.
* Enter the BigPanda app key.
* Enter the API token for the app.

You can send the results of multiple monitors to the same BigPanda collection.

### Viewing alerts in BigPanda

1. Click the **View Details** button to see information about BigPanda and how it can provide real-time alerting based on the results of your Postman monitors. 

You also can click the **Configured Integrations** tab to set up other integrations, view available integrations for BigPanda, or view all integrations.

2. Click the <b>Add Integration</b> button to display the <b>Send Monitor Run Results</b> box.

3. In the **Send Monitor Run Results** page:

* Select a monitor to send to BigPanda.
* Enter the BigPanda app key.
* Enter the API token for the app.

4. Click the **Add Integration** button. 

You can send the results of multiple monitors to the same BigPanda collection.

### Viewing alerts in BigPanda

BigPanda gives you real-time alerts based on the results of your Postman Monitors. If there was a failed test or if an error occurred during the run, an alert is created on BigPanda, which would then alert the user.

[![view in bigpanda](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58835364.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58835364.png)
