---
title: "Setting up a monitor"
order: 162
page_id: "setting_up_monitor"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API monitoring with Postman"
    url: "https://www.youtube.com/watch?v=3nOP_TYTuA8"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "How to monitor Postman Collections with APImetrics"
    url: "https://blog.postman.com/2019/10/22/how-to-use-postman-apimetrics/"
  - type: link
    name: "Using a Postman monitor to water my plants"
    url: "https://blog.postman.com/2017/11/08/using-a-postman-monitor-to-water-my-plants/"

warning: false
---

Postman Monitoring offers a number of configuration options when creating a monitor, allowing you to seamlessly integrate it into your team's API development workflow.

## Contents

* [Creating a monitor](#creating-a-monitor)

    * [Creating a monitor from Launchpad](#creating-a-monitor-from-launchpad)

    * [Creating a monitor with the + New button](#creating-a-monitor-with-the--new-button)

    * [Creating a monitor via a collection](#creating-a-monitor-via-a-collection)

    * [Creating a monitor from history](#creating-a-monitor-from-history)

    * [Creating a monitor in the web dashboard](#creating-a-monitor-in-the-web-dashboard)

    * [Creating a monitor with the Postman API](#creating-a-monitor-with-the-postman-api)

    * [The basics when creating a monitor](#the-basics-when-creating-a-monitor)

* [Configuring a monitor](#configuring-a-monitor)

    * [Scheduling monitors](#scheduling-monitors)

    * [Adding regions](#adding-regions)

    * [Using static IP](#using-static-ip)

    * [Updating email preferences](#updating-email-preferences)

    * [Using retry on failure](#using-retry-on-failure)

    * [Adding request timeouts](#adding-request-timeouts)

    * [Adding delays between requests](#adding-delays-between-requests)

    * [Managing redirect behavior](#managing-redirect-behavior)

    * [Disabling SSL validation](#disabling-ssl-validation)

* [Next steps](#next-steps)

## Creating a monitor

You can create a Postman monitor using a number of flows both in and outside of the Postman app:

### Creating a monitor from Launchpad

Launchpad is automatically enabled in the Postman app (to disable, click the wrench icon > **Settings**). To create a monitor, select **... View More** > **Create a monitor**.

### Creating a monitor with the + New button

In the Postman app, click **New** [![new button](https://assets.postman.com/postman-docs/newbutton1.png)](https://assets.postman.com/postman-docs/newbutton1.png) > **Monitor**.

### Creating a monitor via a collection

* **&#x25B6; button**: In the Postman app, hover over your collection and click the arrow button **&#x25B6;** > **Monitors** > **Create a monitor** or **+ Add monitor** (if you have an existing monitor).

* **... button**: In the Postman app, hover over your collection and select **...** > **Monitor Collection**.

### Creating a monitor from history

In the Postman app, select **History**, hover over your request, click **...** > **Monitor Request**.

### Creating a monitor in the web dashboard:

* **Workspace**: In your [**web dashboard**](https://app.getpostman.com/), click into your workspace > **Monitors** > **Monitor a collection**.

* **Collection**: In your [**web dashboard**](https://app.getpostman.com/), click into your workspace > **Collections** > select your collection > **...** > **Monitor Collection**. Alternatively, you can click to open your collection > **Monitors** > **Add Monitor**.

### Creating a monitor with the Postman API

You can create a monitor with a POST request to the Postman API. Visit the [API docs](https://docs.api.getpostman.com/) > **Monitors** > **Create Monitor** to learn how to do so.

### The basics when creating a monitor

You will need to give your new monitor a name and designate the collection you would like it to run, as well as the version. You can also add an environment here if you would like your monitor to use one.

![Create monitor page](https://assets.postman.com/postman-docs/create-monitor-1.jpg)

> Postman maintains ceiling limits on various team and user actions, including monitor creation. For more information, see [Usage limits](/docs/postman/monitors/intro-monitors/#usage-limits).

From here, you can determine how you'd like to configure your monitor.

## Configuring a monitor

You can utilize a number of custom configuration options provided by Postman monitoring.

### Scheduling monitors

You can configure your monitor to run as often as you would like, automatically. This could be up to every five minutes for a status page or a basic check once a week on your endpoints.

> Frequency affects how quickly your monitoring usage compounds. To learn more about usage limits and overages, see [Pricing](/docs/postman/monitors/intro-monitors/#pricing).

### Adding regions

You can allow Postman to auto-select a region for your monitor or you can opt to select your regions manually. Postman offers multiple regions to choose from, enabling you to accurately track uptime and reliability on a global scale, without the need to procure your own regional servers.

> Servers in each selected region will run your monitor according to your schedule, counting towards your [monitoring usage](/docs/postman/monitors/intro-monitors/#viewing-monitor-usage).

### Using static IP

Static IPs are available on Postman Business and Enterprise plans. This option allows you to securely monitor private APIs using a direct channel to Postman.

### Updating email preferences

You will receive daily and weekly summaries of your active monitors in the app and via email.

[![monitor summary](https://assets.postman.com/postman-docs/monitor-summary-1.jpg)](https://assets.postman.com/postman-docs/monitor-summary-1.jpg)

You can opt out of daily and/or weekly summaries by navigating to your [web dashboard](https://app.getpostman.com/), selecting your avatar in the upper-right corner, and clicking **Notification Preferences**.

When creating or editing a monitor, you can choose to receive email notifications for run failures and errors under **Show Additional Preferences**. You can define up to five recipients and configure when you would like to stop failure notifications for consecutive run failures.

> Once the number of consecutive failures exceeds your defined notification limit, Postman will wait until your run succeeds to notify you. By default this limit is three.

You can find detailed information on your monitor results by navigating to your [web dashboard](https://go.postman.co/), selecting a workspace > **Monitors**.

> You can also utilize [Postman integrations](https://learning.postman.com/docs/integrations/intro-integrations/) to send monitor data and configure notifications using your desired platform, such as [Slack](https://learning.postman.com/docs/integrations/slack/) or [Datadog](https://learning.postman.com/docs/integrations/datadog/).

### Using retry on failure

You have the option to **Retry if run fails**. If this is enabled and a failure occurs during a run, Postman will automatically rerun the failed request to avoid false alarms due to transient issues. Postman will still log the initial failure, but will only notify you if the run continues to fail.

> If you choose to enable this option, it will affect your monitoring usage and the resulting billing. For example, if a collection of three requests fails on the first request, but retries successfully, the run will count as four total requests.

### Adding request timeouts

You can configure a **Request timeout** if you'd like to make sure all of your requests run within a certain amount of time. By default, requests do not have a timeout value, however each monitor run has a timeout of five minutes. It is not possible to configure this at the request level.

> Request timeout may not exceed five minutes (300000ms).

### Adding delays between requests

You can add a **Delay between requests** to your monitor. This will insert a delay between all requests in your collection. To configure this for individual requests, you can add a delay in your [pre-request or test scripts](/docs/postman/scripts/intro-to-scripts/) with setTimeout().

> Delay between requests may not exceed five minutes (300000 ms), however note that five minutes is also the maximum run time for a monitor.

### Managing redirect behavior

You can use **Don't follow redirects** to reject URL redirection for requests run via a monitor.

### Disabling SSL validation

You can **Disable SSL validation** if you are using self-signed certicates to stop validations of SSL certificates. For more information, see [Certificates](/docs/postman/sending-api-requests/certificates/). To troubleshoot, see [Troubleshooting Self-signed SSL Certificate Issues](https://blog.postman.com/2019/07/17/self-signed-ssl-certificate-troubleshooting/).

## Next steps

Learn how to set up [integrations](/docs/integrations/intro-integrations/) for your monitoring results, and [how to monitor your APIs and websites](/docs/postman/monitors/monitoring-apis-websites/).
