---

title: "Slack Integration"
page_id: "slack_integration"
tags: 
  - "cloud"
warning: false
---

## Postman Pro to Slack Integration

In the Postman Pro to Slack Integration, there are 3 ways to connect to receive notifications from Postman.

### Team Activity Feed

The [Postman Team Activity Feed][0] is a real-time feed showing the creates, updates, subscriptions, and deletes performed across the shared Postman Collections in your team.

Using the Postman Pro to Slack Integration, you can pipe your team’s Activity Feed to a Slack channel of your choosing. This can help, for example, with tracking progress of a particular Postman Collection, or seeing development momentum within your team environment.

### Postman Search

This element of the Postman Pro to Slack Integration enables you to easily search across the names and descriptions of your shared Postman Collections, folders, requests, and responses, and then display results in any of your team or personal Slack channels.

After enabling this integration, a new slash command, `/postman`, will find its way into your team’s Slack global slash commands. Upon invoking a search, `/postman search [keyword(s)]`, the top ten search results will display in the current channel.

This is super useful when searching for particular requests, or trying to point a colleague to a set of Collections related to your current discussion.

### Monitor Results

Postman Monitors enable you to set up recurring runs of your Postman Collections at scheduled intervals. By using Postman Monitors, you can ensure that your systems are stable and your APIs are working as they should.

The Postman Monitor to Slack connection allows you to pipe any set of Monitoring run results to a pre-configured Slack channel. This provides extra visibility on your Monitor run results, right in Slack. Plus, you can add further Slack alerting and notifications, based on Monitor run results.

### Add the Slack Integration

From the [Integrations page][1], select the Slack Integration:

[![Slack Integration](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/slackINT.png)][2]

Click `Add` next to the Integration you’d like to activate:

[![Add Slack Integration](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/slack_add.png)][3]

Authenticate with Slack and if prompted, choose a Slack channel to post results to:

[![Slack Authorization](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/slack_auth.png)][4]

And you’re done!

[0]: https://blog.getpostman.com/2016/10/27/new-more-useful-activity-feed-in-postman-collections/
[1]: https://app.getpostman.com/dashboard/integrations
[2]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/slackINT.png
[3]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/slack_add.png
[4]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/slack_auth.png
