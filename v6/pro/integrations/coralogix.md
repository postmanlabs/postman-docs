---
title: "Coralogix"
page_id: "coralogix"
tags: 
  - "pro"
warning: false
---

Coralogix is a machine learning powered log analytics platform which drastically improves the delivery and maintenance process for software providers. This integration allows you to configure your Postman Monitors to send metrics to Coralogix where you can visualize and compare metrics.

Setting up a Coralogix integration requires you to get an API key from Coralogix and configure your Postman Monitors. After you set up the integration, you can view real-time alerts based on the results of your monitors.

## Retrieving your Coralogix Private Key

Log in to [Coralogix](https://dashboard.coralogix.com/#/login). The following screen appears:

[![coralogix settings](https://assets.postman.com/postman-docs/Coralogix_Settings.png)](https://assets.postman.com/postman-docs/Coralogix_Settings.png)

Click "Settings" to go to the following screen:

[![coralogix settings](https://assets.postman.com/postman-docs/Coralogix_Pvtkey1.png)](https://assets.postman.com/postman-docs/Coralogix_Pvtkey1.png)

Navigate to "Send your logs" tab and copy the private key for later use, as illustrated in the above screen (highlighted in red circle).

## Configuring Coralogix Integration

1. In the [Integrations](https://go.postman.co/workspaces) page, find Coralogix in the list of Postman’s 3rd party Integrations for Postman Pro and Enterprise users.

    [![coralogix integrations page](https://assets.postman.com/postman-docs/coralogix_viewdetails.png)](https://assets.postman.com/postman-docs/coralogix_viewdetails.png)

1. Click **View Details** to see information about Coralogix.

    You also can click the **Configured Integrations** tab to set up other integrations, view available integrations for Coralogix, or view all integrations.

    [![coralogix integrations page](https://assets.postman.com/postman-docs/coralogix_viewdetails2.png)](https://assets.postman.com/postman-docs/coralogix_viewdetails2.png)

1. Click **Add Integration** to display the **Send Monitor Run Results** options.

    [![coralogix integrations page](https://assets.postman.com/postman-docs/coralogix_viewdetails3.png)](https://assets.postman.com/postman-docs/coralogix_viewdetails3.png)

1. To send your monitor metrics and events to Coralogix:

    * Select the monitor whose data you would like to send to Coralogix.
    * Enter a Coralogix private key.
    * Optionally indicate if you want to send collection or environment details for each run.

1. Click **Add Integration**.

    Once you click *Add Integration*, the following screen appears to indicate the integration is configured:

    [![coralogix add integrations](https://assets.postman.com/postman-docs/coralogix_addintegration1.png)](https://assets.postman.com/postman-docs/coralogix_addintegration1.png)

    Now you can run the monitor and wait for a few seconds to analyse the metrics. The next section describes the procedure to view and analyze metrics.

## Analyzing metrics in Coralogix

Once the data starts flowing into Coralogix, you can view and analyze these metrics in the Coralogix dashboard, as illustrated in the screen below:

[![coralogix dashboard](https://assets.postman.com/postman-docs/coralogix_dashboard1.png)](https://assets.postman.com/postman-docs/coralogix_dashboard1.png)

Click 'logs' tab to a view a list of all logs. You can filter the services by name. As many services may be running in your system, you can filter by selecting Postman to view all coralogix logs for Postman. The schema appears, as illustrated below:

[![coralogix logs view](https://assets.postman.com/postman-docs/coralogix_schema1.png)](https://assets.postman.com/postman-docs/coralogix_schema1.png)
