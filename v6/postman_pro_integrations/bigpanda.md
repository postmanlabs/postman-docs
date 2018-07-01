---

title: "BigPanda Integration"
page_id: "bigpanda"
tags: 
  - "cloud"
warning: false
---

BigPanda is an IT systems management platform that aggregates and correlates IT alerts to create high-level IT incidents. It allows different services to be connected to have a single place where all the alerts can be directed to.

**Retrieve BigPanda App and API Key**

Go to BigPanda and log in to your account. Head over to the Integrations section.

[![BigPanda integrations](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigpanda_integrations.png)][0]

Click on `New Integration`, and select `Alerts REST API`.

[![BigPanda Alerts REST](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigpanda_REST.png)][1]

To generate the App Key, enter the name of the integration as anything you want.

[![BigPanda generate app key](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigpanda_generate.png)][2]

Make a note of the generated App Key and the API Key.

[![BigPanda app and API key](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigpanda_keys.png)][3]

**Configure Postman Monitors**

Log in to the Postman web view, and head to the [Postman Integrations page][4]. From the list of integrations, select the `BigPanda` integration.

[![Postman BigPanda integrations](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigpanda_pm_integrations.png)][5]

Click on the `Add` button.

[![Postman BigPanda add](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigpanda_pm_add.png)][6]

Choose the monitor for which you want receive alerts. Enter the App Key and the API Key that you generated with BigPanda earlier.

[![Postman BigPanda info](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigpanda_pm_info.png)][7]

**How your alerts appear in BigPanda**

BigPanda gives you real-time alerting based on the results of your Postman Monitors. If there was a failed test or if an error occurred during the run, an alert would be created on BigPanda which would then alert the user.

[![BigPanda alerts](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigpanda_alerts.png)][8]

[0]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigpanda_integrations.png
[1]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigpanda_REST.png
[2]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigpanda_generate.png
[3]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigpanda_keys.png
[4]: https://app.getpostman.com/dashboard/integrations
[5]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigpanda_pm_integrations.png
[6]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigpanda_pm_add.png
[7]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigpanda_pm_info.png
[8]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/bigpanda_alerts.png
