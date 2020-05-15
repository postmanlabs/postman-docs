---
title: "Slack"
order: 295
page_id: "slack"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "https://learning.postman.com/docs/postman/collections/intro-to-collections"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Updated: Using Variables in Postman Requests & Collections"
    url: "https://www.youtube.com/watch?v=X_CEYzhjCnI&t=24s"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Librarian: building a serverless slack app using Postman and Airtable"
    url: "https://blog.postman.com/2017/12/21/librarian-building-a-serverless-slack-app-using-postman-and-airtable/"
---

> __[Integrations are available on Postman Team, Business, and Enterprise plans.](https://www.getpostman.com/pricing)__

The Postman to Slack integration enables you to receive notifications for the Team Activity Feed, Postman Search, and Monitor Run Results.

## Configuring Postman with Slack

In the [Integrations](https://go.postman.co/workspaces) tab for your workspace, select the Slack integration.

[![select slack integration](https://assets.postman.com/postman-docs/integrations-slack1.png)](
https://assets.postman.com/postman-docs/integrations-slack1.png)

Click the **View Details** button to start your Integration for Slack.

You can also click the **Configured Integrations** tab to set up other integrations, view available integrations for Slack, or view all integrations.

[![add slack](https://assets.postman.com/postman-docs/WS-integrations-slack-details.png)](https://assets.postman.com/postman-docs/WS-integrations-slack-details.png)

## Add an Activity Feed to Slack

In the **Slack Details** page, click the **Add Integration** button for Team Activity Feed.

In the **Team Activity Feed** page, click the **Authorize** button.

[![authorize slack](https://assets.postman.com/postman-docs/WS-integrations-slack-teamactivityfeed.png)](https://assets.postman.com/postman-docs/WS-integrations-slack-teamactivityfeed.png)

In the **Slack sign in to your workspace** page, enter your workspace’s Slack URL, and click the **Continue** button.

[![signin slack](https://assets.postman.com/postman-docs/WS-integrations-slack-signin.png)](https://assets.postman.com/postman-docs/WS-integrations-slack-signin.png)

In the **Sign in to Postman** page, enter your email address and password and click the **Sign In** button.

[![company_slack](https://assets.postman.com/postman-docs/WS-integrations-slack-signin-company.png)](https://assets.postman.com/postman-docs/WS-integrations-slack-signin-company.png)

In the **Select channel** page, select the channel where you want to post and click the **Authorize** button.

[![auth_slack](https://assets.postman.com/postman-docs/WS-integrations-slack-identity.png)](https://assets.postman.com/postman-docs/WS-integrations-slack-identity.png)

The team activity appears in the **Configured Integrations** page.

[![configured_slack](https://assets.postman.com/postman-docs/WS-integrations-slack-configured.png)](https://assets.postman.com/postman-docs/WS-integrations-slack-configured.png)

## Search Postman team data on Slack

In the **Slack Details** page, click the **Add Integration** button for Postman Search.

In the **Postman Search** page, click the **Authorize** button.

[![configured_slack](https://assets.postman.com/postman-docs/WS-integrations-slack-postmansearch.png)](https://assets.postman.com/postman-docs/WS-integrations-slack-postmansearch.png)

In the **Confirm your identity on Postman** page, click the **Authorize** button.

[![oath_postman](https://assets.postman.com/postman-docs/WS-integrations-slack-oath.png)](https://assets.postman.com/postman-docs/WS-integrations-slack-oath.png)

## Send your Monitor Run Results to Slack

In the **Slack Details** page, click the **Add Integration** button for Monitor Run Results.

In the **Monitor Run Results** page, click the **Authorize** button.

[![monitorResults_slack](https://assets.postman.com/postman-docs/WS-resultsSlack-monitorRun1.png)](https://assets.postman.com/postman-docs/WS-resultsSlack-monitorRun1.png)

In the **Confirm your identity on Postman** page, select the Slack channel your want to post to and click the **Authorize** button.

[![confirm_slack](https://assets.postman.com/postman-docs/WS-slack-confirm-identity.png)](https://assets.postman.com/postman-docs/WS-slack-confirm-identity.png)

In the **Monitor Run Results to Slack** page:

* Select the monitor results to send to Slack.
* Enter the URL for the Slack Webhook.
* Enter the Slack channel.

You can click the Advanced Options link to indicate if you want notifications for all completed monitor runs, or notifications for three failed monitor runs and then the first successful monitor run.

[![slack monitor-run2](https://assets.postman.com/postman-docs/WS-resultsSlack-monitorRun1.png)](https://assets.postman.com/postman-docs/WS-resultsSlack-monitorRun1.png)

Click the **Add Integration** button to see the monitor in the "Configured Integrations" view.
