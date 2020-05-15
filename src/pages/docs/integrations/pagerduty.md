---
title: "PagerDuty"
order: 294
page_id: "pagerduty"
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

PagerDuty is a popular incident management solution that integrates with monitoring stacks for alerting, on-call scheduling, and automatic escalation of critical incidents.

You can configure this service to deliver alerts by text, email, call, or through iOS and Android apps.

You can use this integration to trigger incidents in PagerDuty based on your Postman Monitor results, helping your team investigate and resolve Collection run failures quickly.

## Retrieving your PagerDuty Integration Key

Create an account or use a preexisting one to log in to [PagerDuty](https://app.pagerduty.com/).  
In the header toolbar, click __Configuration__ and select __Services__. If you are creating a new service for this integration, click __Add New Service__.

[![pagerduty menu](https://assets.postman.com/postman-docs/pagerduty_menu.png)](https://assets.postman.com/postman-docs/pagerduty_menu.png)

Enter your Service Name and choose Postman as the Integration Type.

Click the __Add Service__ link at the bottom of the page to create a new service.

[![pagerduty service](https://assets.postman.com/postman-docs/pagerduty_service.png)](https://assets.postman.com/postman-docs/pagerduty_service.png)

 Save the PagerDuty Integration Key to use later.

[![pagerduty key](https://assets.postman.com/postman-docs/pagerduty_key.png)](https://assets.postman.com/postman-docs/pagerduty_key.png)

## Configuring Postman with PagerDuty

1. In the [Integrations](https://go.postman.co/workspaces) tab for your workspace, select PagerDuty from the list of third party integrations.

  [![select pagerduty integration](https://assets.postman.com/postman-docs/integrations-pagerduty1.png)](https://assets.postman.com/postman-docs/integrations-pagerduty1.png)

1. Click the **View Details** button to see information about PagerDuty.

   [![select pagerduty integration](https://assets.postman.com/postman-docs/WS-integrations-pagerduty-details.png)](https://assets.postman.com/postman-docs/WS-integrations-pagerduty-details.png)

   You can also click the **Configured Integrations** tab to set up other integrations, view available integrations for PagerDuty, or view all integrations.

## Add a team activity feed to PagerDuty

The Team Activity Feed is where you can track changes being made by your team members to shared Collections. With this integration you can stay updated about work being done in Postman while you’re away from the desktop app, either through your PagerDuty dashboard or through an alternative alert service you choose to set up.

To add a team activity feed to PagerDuty:

1. In the PagerDuty integration page, click the **Add Integration** button.
1. In the **Team Activity Feed** page, choose the Monitor you want to send to PagerDuty.
1. Enter your Pagerduty Integration Key and click the **Add Integration** button.

[![pagerduty monrun](https://assets.postman.com/postman-docs/WS-integrations-pagerduty-monrun.png)](https://assets.postman.com/postman-docs/WS-integrations-pagerduty-monrun.png)

## Viewing PagerDuty results

The PagerDuty console will continuously update to display any incidents that result from your Postman Monitors. If the selected Monitor fails, you’ll receive notifications on PagerDuty according to the formatting and business rules you’ve already set.

[![pagerduty results](https://assets.postman.com/postman-docs/pagerduty_results.png)](https://assets.postman.com/postman-docs/pagerduty_results.png)
