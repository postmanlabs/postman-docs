---
title: "Microsoft Teams"
page_id: "microsoft_teams"
tags: 
  - "pro"
warning: false
---

Microsoft Teams is a chat-based workspace that is available for all Microsoft Office 365 users. This integration allows you to get updates about what is happening in your team directly in Microsoft Teams.

Currently, we have two ways in which this integration can be configured.

### Configuring Microsoft Teams


1. In the [Integrations](https://go.postman.co/workspaces) page, find Microsoft Teams from a list of Postman’s 3rd party Integrations for Postman Pro users.

[![select ms_teams integration](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-msTeam.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-msTeam.png)


#### Add a team activity feed to Microsoft Teams
To add a team activity feed to Microsoft Teams:

1. Click the **Add Integration** button.
2. In the **Team Activity Feed** page, enter your team's activity feed to Microsoft Teams.

[![ms_teams activityFeed](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integration-msTeam-teamactivityfeed.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integration-msTeam-teamactivityfeed.png)

<ol start="3">
  <li>Click the <b>Add Integration</b> button to see your team's activity feed in the "Configured Integrations" view.</li>
</ol>

[![ms_teams configInt](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integration-msTeams-confIntegration.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integration-msTeams-confIntegration.png)

#### Send monitor run results in Microsoft Teams

To send monitor run results to Microsoft Teams:

1. Click the **Add Integration** button.
2. In the **Monitor Run Results** page, select the monitor you want to send to Microsoft Teams, and enter the notification URL.

[![ms_teams monRun](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integration-msTeams-monRun.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integration-msTeams-monRun.png)

<ol start="3">
  <li>Click the <b>Add Integration</b> button to see your monitors in the "Configured Integrations" view. You can also click the "Advanced Options" link to indicate if you want notifications when all monitor runs are completed, or if you want notifications for three monitor run failures and then the first successful monitor run.</li>
</ol>

[![ms_teams monRun](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-microsoft-teams-monitorruns.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-microsoft-teams-monitorruns.png)



### Get the Microsoft Teams webhook URL

Log in to your Microsoft Teams account. Create a new channel, or go to an already existing channel, where you want to set up this integration.

[![select channel](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59031183.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59031183.png)

Click on the `...` on the right side of the channel name and select `Connectors` from the dropdown list.

[![select connectors](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59031299.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59031299.png)

Select the `Incoming Webhook` connector from the list of available connectors.

[![select incoming webhook](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59031428.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59031428.png)

Enter a name to identify this webhook later. You can also add an image which will be visible whenever a message is posted using this webhook. Click `Create`.

[![enter a name](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59031665.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59031665.png)

This will generate a webhook URL which can then be used to post messages to this channel. Copy this webhook and save it for later.

[![generate webhook URL](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59032020.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59032020.png)


### Messages in Microsoft Teams

Monitor run messages summarize the basic details of the run, if the run was successful or if it failed. Also, it provides direct links to that particular run and to the documentation for the collection.

[![microsoft teams view](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59034537.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59034537.png)

Similarly, the Team Activity message displays updates, who made the change and what it was.  

[![activity feed](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59034618.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59034618.png)
