---

title: "VictorOps Integration"
page_id: "victorops"
tags: 
  - "cloud"
warning: false
---

VictorOps is a real-time incident management platform that combines the power of people and data to embolden DevOps teams so they can handle incidents as they occur and prepare for the next one. This integration allows you to configure Postman Monitors to trigger incidents on VictorOps whenever it fails.

**Get the VictorOps API Key**

Log in to your VictorOps account and go to the `Settings` tab. On the `Settings` page, select `Integrations` from the `Alert Behavior` dropdown.

[![VictorOps integrations]()][0]

From the list of integrations, select the `REST Generic` Integration.

[![VictorOps REST](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/victor_REST.png)][1]

If the integration is not already enabled, click the `Enable Integration` button. 

[![VictorOps enable]()][2]

If the integration is enabled, you will see a URL which contains the API Key.

[![VictorOps API key](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/victor_API.png)][3]

Copy the API Key and save it for later. You can also provide routing keys if you are using teams within VictorOps. Routing keys allow the creation of incidents to be directed towards a specific team, so that they get notified about a particular failure. To get the routing key, click on the `Alert Behavior` dropdown and select `Route Keys`.

[![VictorOps route key]()][4]

You can enter your own key and select a team for which the key is applicable.

[![VictorOps routing]()][5]

**Configuring Postman Monitors**

Log in to the Postman web view, and head to the [Postman Integrations page][6]. From the list of integrations, select the `VictorOps` integration.

[![VictorOps Postman integrations]()][7]

Click on the `Add` button.

[![VictorOps Postman add]()][8]

Select the monitor for which you want to be alerted. Enter the API Key you got from VictorOps.

[![VictorOps Postman info]()][9]

Additionally, you can also configure a routing key if you want to alert a specific team.

[![VictorOps Postman routing]()][10]

**Incidents on VictorOps**

An incident on VictorOps consists of the basic information of which monitor failed, with the number of errors and failed tests. It also provides a direct link to the failing monitor. This integration automatically acknowledges a triggered incident if the subsequent run succeeds. 

[![VictorOps alerts]()][11]

[0]: t
[1]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/victor_REST.png
[2]: t
[3]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/victor_API.png
[4]: t
[5]: t
[6]: https://app.getpostman.com/dashboard/integrations
[7]: t
[8]: t
[9]: t
[10]: t
[11]: t
