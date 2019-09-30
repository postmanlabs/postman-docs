---
title: "HipChat"
page_id: "hipchat"
tags: 
  - "pro"
warning: false
---

HipChat is an instant messaging app built for businesses. The team chat tool lets you share files and discuss tasks in real-time with colleagues, project collaborators, and even clients through unlimited chat rooms.

This integration allows you to get real-time updates of what is happening in your Postman team. You can configure HipChat with Postman to monitor results, view a team’s activity feed, and use a HipChat Webhook URL.

## Configuring Postman with HipChat

1. In the [Integrations](https://go.postman.co/workspaces) page, find HipChat from a list of Postman’s 3rd party Integrations for Postman Pro users.

[![select hipchat integration](https://assets.postman.com/postman-docs/integrations-hipchat.png)](https://assets.postman.com/postman-docs/integrations-hipchat.png)

1. Click the **View Details** button to see information about HipChat.

[![select hipchat integration](https://assets.postman.com/postman-docs/WS-integrations-hipchat-confIntegrations.png)](https://assets.postman.com/postman-docs/WS-integrations-hipchat-confIntegrations.png)

You also can click the **Configured Integrations** tab to set up other integrations, view available integrations for HipChat, or view all integrations.

## Add a team activity feed to HipChat

The Team Activity Feed is where you can monitor your team’s API development and track changes. This integration updates you on all of your Collection edits in HipChat itself so you don’t have to go back into the Postman app to review your team’s activity.

To add a team activity feed to HipChat:

1. Click the **Add Integration** button.
1. In the **Team Activity Feed** page, enter your team's activity feed URL, and click the **Add Integration** button.

   [![activity_feed](https://assets.postman.com/postman-docs/WS-integrations-hipchat-teamactivityFeed.png)](https://assets.postman.com/postman-docs/WS-integrations-hipchat-teamactivityFeed.png)

   The **Configured Integrations** page appears with your team's activity feed.

   [![configured_integrations](https://assets.postman.com/postman-docs/WS-integrations-hipchat-configuredIntegrations.png)](https://assets.postman.com/postman-docs/WS-integrations-hipchat-configuredIntegrations.png)

## Send monitor run results to HipChat

You can set up monitors for your Postman Collections to run them at scheduled intervals in the cloud. This integration allows you to get notifications about your monitor runs in HipChat.

To send monitor run results to HipChat:

1. Click the **Add Integration** button.
1. In the **Monitor Run Results** page, select the monitor you want to send to HipChat, and enter the notification URL.
1. Click the **Add Integration** button.

  [![monitor run](https://assets.postman.com/postman-docs/WS-integrations-hipchat-monitorRun1.png)](https://assets.postman.com/postman-docs/WS-integrations-hipchat-monitorRun1.png)

   You can also configure advanced options to alert you when a monitor run completes or when three failures occur and the first monitor run following those failures completes successfully.

## Get the HipChat Webhook URL

1. Log in to [HipChat](https://www.hipchat.com/sign_in) and navigate to the room where you want Postman to send you messages.

1. Click the **Add Integration** button on the right sidebar.

   [![add hipchat integration](https://assets.postman.com/postman-docs/58856804.png)](https://assets.postman.com/postman-docs/58856804.png)

1. Select "Build your own Integration".

   [![build your own integration](https://assets.postman.com/postman-docs/58856838.png)](https://assets.postman.com/postman-docs/58856838.png)

1. Enter a name and click the **Create** button.

  [![create integration](https://assets.postman.com/postman-docs/58856857.png)](https://assets.postman.com/postman-docs/58856857.png)

1. Save the URL to use later and click the **Save** button.

  [![generate URL](https://assets.postman.com/postman-docs/58856916.png)](https://assets.postman.com/postman-docs/58856916.png)

## Viewing updates on HipChat

Monitor run results on HipChat are color-coded based on the result of the monitor run. It shows the basic metrics of the run and also provides a link to go directly to the monitor.

[![hipchat view](https://assets.postman.com/postman-docs/58857265.png)](https://assets.postman.com/postman-docs/58857265.png)

Similarly, the team activity feed integration consists of the links of the changed instance.

[![activity feed](https://assets.postman.com/postman-docs/hipchat-activity-feed2.png)](https://assets.postman.com/postman-docs/hipchat-activity-feed2.png)
