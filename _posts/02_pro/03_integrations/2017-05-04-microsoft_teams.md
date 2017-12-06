---
categories:
  - "pro"
  - "integrations"
title: "Microsoft Teams"
page_id: "microsoft_teams"
tags: 
  - "pro"
warning: false
---

Microsoft Teams is a chat-based workspace that is available for all Microsoft Office 365 users. This integration allows you to get updates about what is happening in your team directly in Microsoft Teams.

Currently, we have two ways in which this integration can be configured.

### Configuring Microsoft Teams


1. In the [Integrations](https://app.getpostman.com/dashboard/integrations){:target="_blank"} page, select Microsoft Teams from a list of Postman’s 3rd party Integrations for Postman Pro users.

[![select ms_teams integration](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations-msTeam.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations-msTeam.png)



#### Add a team activity feed to Microsoft Teams
To add a team activity feed to Microsoft Teams:

1. Click the Add Integration button.
2. ADD REMAINING STEPS.


[![ms_teams activityFeed](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integration-msTeam-teamactivityfeed.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integration-msTeam-teamactivityfeed.png)



[![ms_teams configInt](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integration-msTeams-confIntegration.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integration-msTeams-confIntegration.png)



#### Send monitor run results in Microsoft Teams

To send monitor run results to Microsoft Teams:

1. Click the Add Integration button.
2. In the Monitor Run Results page, select the monitor you want to send to Microsoft Teams, and enter the notification URL.
3. Click the Add Integration button.

[![ms_teams monRun](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integration-msTeams-monRun.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integration-msTeams-monRun.png)



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















OLD STUFF

### Postman monitor run results

You can set up [Postman Monitors](/docs/postman/monitors/intro_monitors) on your collections which run on the cloud at a scheduled interval. This integration allows you to get notifications about your monitor runs right in Microsoft Teams.

### Postman team activity feed

The Postman [activity feed](/docs/postman/team_library/activity_feed_and_restoring_collections) is the place where you can view all the things taking place within your team. You can monitor the API development within your team and keep track of all the changes. This integration keeps you updated of all the changes in Microsoft Teams itself, so you don't have to go back to Postman to see the team's activity feed.




### Configure Postman

Log in to the Postman web view, and head to the [Postman Integrations page](https://app.getpostman.com/dashboard/integrations){:target="_blank"}. From the list of integrations, select the `Microsoft Teams` integration.

Click `Add` to connect your monitor to Microsoft Teams.

[![add integration](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58892023.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58892023.png)

Choose the monitor for which you want to configure this integration and enter the webhook URL that you got from Microsoft Teams.

[![select a monitor](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59032657.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59032657.png)

You can also specify the frequency of updates you want for monitor runs.

[![schedule frequency](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59033130.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59033130.png)

Similarly, follow these steps to set up a Microsoft Teams integration for the team activity feed.

### Messages in Microsoft Teams

Monitor run messages summarize the basic details of the run, if the run was successful or if it failed. Also, it provides direct links to that particular run and to the documentation for the collection.

[![microsoft teams view](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59034537.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59034537.png)

Similarly, the Team Activity message displays updates, who made the change and what it was.  

[![activity feed](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59034618.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59034618.png)
