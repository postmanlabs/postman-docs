---
title: "VictorOps"
order: 296
page_id: "victorops"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "https://learning.postman.com/docs/postman/collections/intro-to-collections"
  - type: link
    name: "Intro to Monitoring"
    url: "https://learning.postman.com/docs/postman/monitors/intro-monitors"
---

> __[Integrations are available on Postman Team, Business, and Enterprise plans.](https://www.getpostman.com/pricing)__

VictorOps is a real-time incident management platform that combines the power of people and data to handle incidents as they occur and prepare for the next one.

This integration allows you to configure [Postman Monitors](/docs/postman/monitors/intro-monitors/) to trigger incidents on VictorOps whenever it fails.

## Get the VictorOps API Key

Log in to your VictorOps account and go to the `Settings` tab. On the `Settings` page, select `Integrations` from the `Alert Behavior` dropdown.

[![log in to victorops](https://assets.postman.com/postman-docs/58842896.png)](https://assets.postman.com/postman-docs/58842896.png)

From the list of integrations, select the `REST Generic` Integration.

[![select REST Generic](https://assets.postman.com/postman-docs/58843113.png)](https://assets.postman.com/postman-docs/58843113.png)

If the integration is not already enabled, click the `Enable Integration` button.

[![enable integration](https://assets.postman.com/postman-docs/58843154.png)](https://assets.postman.com/postman-docs/58843154.png)

If the integration is enabled, you will see a URL which contains the API Key.

[![view API key](https://assets.postman.com/postman-docs/58843264.png)](https://assets.postman.com/postman-docs/58843264.png)

Copy the API Key and save it for later. You can also provide routing keys if you are using teams within VictorOps. Routing keys allow the creation of incidents to be directed towards a specific team, so that they get notified about a particular failure. To get the routing key, click on the `Alert Behavior` dropdown and select `Route Keys`.

[![make a note of keys](https://assets.postman.com/postman-docs/58842580.png)](https://assets.postman.com/postman-docs/58842580.png)

You can enter your own key and select a team for which the key is applicable.

[![enter key](https://assets.postman.com/postman-docs/58842547.png)](https://assets.postman.com/postman-docs/58842547.png)

## Configuring Postman Monitors

In the Integrations section of [your workspace](https://go.postman.co/workspaces), find VictorOps in the list of third party integrations.

Click the **View Details** button to see information about VictorOps and how you can configure Postman monitors to trigger incidents on VictorOps.

You can also click the **Configured Integrations** tab to set up other integrations, view available integrations for VictorOps, or view all integrations.

[![victorOps details](https://assets.postman.com/postman-docs/WS-victorOps-details-page.png)](https://assets.postman.com/postman-docs/WS-victorOps-details-page.png)

Click the **Add Integration** button to display the "Send Monitor Run Results" modal.

[![victorOps mon run](https://assets.postman.com/postman-docs/WS-victorOps-mon-run.png)](https://assets.postman.com/postman-docs/WS-victorOps-mon-run.png)

In the **Send Monitor Run Results** page:

* Select a monitor to send to VictorOps.
* Enter the VictorOps API key.
* Click "Advanced Options" if you want to add a VictorOps Routing Key.
* Click the **Add Integration** button.

You can send the results of multiple monitors to the same VictorOps collection.

## Incidents on VictorOps

An incident on VictorOps consists of the basic information of which monitor failed, with the number of errors and failed tests. It also provides a direct link to the failing monitor. This integration automatically acknowledges a triggered incident if the subsequent run succeeds.

[![victorops view](https://assets.postman.com/postman-docs/58843343.png)](https://assets.postman.com/postman-docs/58843343.png)
