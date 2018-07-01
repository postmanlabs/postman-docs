---

title: "Datadog Integration"
page_id: "datadog"
tags: 
  - "cloud"
warning: false
---

**Send Postman Monitors run metrics and events to Datadog**

Datadog is a monitoring service for cloud-scale applications, bringing together data from servers, databases, tools, and services to present a unified view of an entire stack. This integration allows you to configure your Postman Monitors to send metrics to Datadog where you can visualize and compare with other metrics.

**Retrieve your Datadog API Key**

Log in to Datadog, and head to the [Datadog Integrations page][0]. An `API Key` will be created for you automatically under the `APIs` tab. If you want, you can also create one by specifying a name for it. Make a note of the API Key for later.

[![Datadog API key](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/datadogAPIkey.png)][1]

**Configure Postman Monitors**

Log in to the Postman web view, and head to the [Postman Integrations page][2]. From the list of integrations, select the `Datadog` integration.

[![Datadog integrations](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/datadogIntegrations.png)][3]

Click `Add` to connect your monitor to Datadog.

[![Datadog add](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/datadogAdd.png)][4]

Enter the Datadog API Key that you generated earlier, and select the Postman monitor for which you want the metrics and events to be sent.

[![Datadog info](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/datadogInfo.png)][5]

Under the `Advanced Options`, you can choose to send only metrics or events for each run.

[![Datadog advanced](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/datadogAdvanced.png)][6]

**How your data appears in Datadog**

As soon as your monitor runs, the data will start flowing into Datadog. 

[![Datadog data](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/datadogData.png)][7]

Once the data is present in Datadog, you can filter it based on the monitor name/uid, collection name/uid, user name/id, and even environment name/uid (if present). You can combine different metrics to create a dashboard.

[![Datadog dashboard](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/datadogDashboard.png)][8]


[0]: https://app.datadoghq.com/account/settings#api
[1]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/datadogAPIkey.png
[2]: https://app.getpostman.com/dashboard/integrations
[3]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/datadogIntegrations.png
[4]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/datadogAdd.png
[5]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/datadogInfo.png
[6]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/datadogAdvanced.png
[7]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/datadogData.png
[8]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/datadogDashboard.png
