---
title: "BigPanda"
order: 284
page_id: "bigpanda"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "https://learning.postman.com/docs/postman/collections/intro-to-collections"
---

> __[Integrations are available on Postman Team, Business, and Enterprise plans.](https://www.getpostman.com/pricing)__

BigPanda is an IT systems management platform that aggregates and correlates IT alerts to create high-level IT incidents. It directs all alerts to a single place with different connected services.

Setting up a BigPanda integration requires you to get an API key and configure Postman monitors.

After you set up the integration, you can view real-time alerts based on the results of your Postman monitors.

## Retrieving the BigPanda API key

1. Log in to your [BigPanda](https://bigpanda.io/) account and select "Integrations" in the header toolbar, then click the **New Integration** button.

[![bigpanda integrations](https://assets.postman.com/postman-docs/WS-integrations_bigPanda_details2.png)](https://assets.postman.com/postman-docs/WS-integrations_bigPanda_details2.png)

1. Click "Alerts REST API" and then click the **Integrate** button.

   [![alerts REST API](https://assets.postman.com/postman-docs/58834897.png)](https://assets.postman.com/postman-docs/58834897.png)

1. To generate the App key, enter a name for the integration and click the **Generate App Key** button.

    [![generate app key](https://assets.postman.com/postman-docs/bigPanda_generateAppkey.png)](https://assets.postman.com/postman-docs/bigPanda_generateAppkey.png)

    The generated App Key displays.

    [![results app key](https://assets.postman.com/postman-docs/bigPanda-appKey.png)](https://assets.postman.com/postman-docs/bigPanda-appKey.png)

1. Save the generated App key and the API key for use later.

## Configuring Postman monitors

1. In the **[Integrations](https://go.postman.co/workspaces)** tab for your workspace, select BigPanda from the list of third party integrations.

1. Click the **View Details** button to see information about BigPanda and how it can provide real-time alerting based on the results of your Postman monitors.

    You can also click the **Configured Integrations** tab to set up other integrations, view available integrations for BigPanda, or view all integrations.

1. Click the **Add Integration** button to display the **Send Monitor Run Results** modal.

1. In the **Send Monitor Run Results** page:

* Select a monitor to send to BigPanda.
* Enter the BigPanda app key.
* Enter the API token for the app.

You can send the results of multiple monitors to the same BigPanda collection.

## Viewing alerts in BigPanda

1. Click the **View Details** button to see information about BigPanda and how it can provide real-time alerting based on the results of your Postman monitors.

    You also can click the **Configured Integrations** tab to set up other integrations, view available integrations for BigPanda, or view all integrations.

1. Click the **Add Integration** button to display the **Send Monitor Run Results** box.

1. In the **Send Monitor Run Results** page:

    * Select a monitor to send to BigPanda.
    * Enter the BigPanda app key.
    * Enter the API token for the app.

1. Click the **Add Integration** button.

You can send the results of multiple monitors to the same BigPanda collection.

BigPanda gives you real-time alerts based on the results of your Postman Monitors. If there was a failed test or if an error occurred during the run, an alert is created on BigPanda, which would then alert the user.

[![view in bigpanda](https://assets.postman.com/postman-docs/58835364.png)](https://assets.postman.com/postman-docs/58835364.png)
