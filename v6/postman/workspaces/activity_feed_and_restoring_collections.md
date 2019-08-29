---
title: "Activity feed and restoring collections"
page_id: "activity_feed_and_restoring_collections"
warning: false
---

**Note: Team Library is only available for versions 5.0 and below.**

An activity feed is a list of CUD (Create, Update, Delete) events that displays updates to a Postman collection in an interactive interface. You can use the activity feed to keep track of changes to your private and team collections by different users across the team.

The activity feed also lets you rollback a collection and restore it to any previous point in time.

## Types of activity feed

Postman tracks changes to collections and teams.

### Collection activity feed

To review the activity feed at the collection level in the Postman app, expand the arrow (&#9656;) next to the collection to view details. Under the **Activity** tab, review a chronological list of activities about the collection.

The activity feed displays who updated the collection, what the updates were, and when they were completed. For Postman Pro and Enterprise users, diffs are generated and displayed within the activity feed. Consecutive updates on the same session to the same entity are collated for readability.

[![activity feed for a collection](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/workspaces_activity.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/workspaces_activity.png)

Similarly, you can also review a collection's activity feed from the [Workspaces dashboard](https://app.getpostman.com/dashboard) after selecting a workspace and a collection.

### Workspace activity feed

You can also review the activity feed at the workspace level in the Postman app. Go to the status bar at the bottom of the Postman app and toggle over to the “Browse” view. Under the **Activity** tab, you can review the events that occurred within the workspace.

[![workspace activity feed](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/workspaces_activity2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/workspaces_activity2.png)

Similarly, you can also review the activity feed at the workspace level by selecting a workspace from the [Workspaces dashboard](https://app.getpostman.com/dashboard).

### Team activity feed

You can also review the activity feed at the Postman Pro or Enterprise team level. From the [Postman web view](https://app.getpostman.com), click the Team dropdown and then click your team's name. Under the **Activity** tab, you can review the events that occurred within your team.

### User activity feed

You can also review the activity feed at the user level in the Postman web view. Click your avatar in the top right, and select "Profile". Under the **Activity** tab, you can review the events that you completed.

## Breaking the event down

The activity feed captures different updates to collections.

These updates include CUD (Create, Update, Delete) operations on workspaces, collections, folders, and requests. A consolidated update to a request as seen below provides chronological updates to pinpoint the exact changes.

Postman Pro and Enterprise users can view diffs. Other users can track the "who" and "when" in the activity feeds, but not the "what" at this level of detail.

[![updates for CUD activities](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/event-breakdown.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/event-breakdown.png)

## Restoring collections

In the collection-level activity feed, Postman Pro and Enterprise users can restore their collections to a previous point in time.

Hovering over the activity displays a **Restore** link.

Click the **Restore** link to restore the collection to the point right _after_ this change was applied.

[![hover to display restore link](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/restore-collections.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/restore-collections.png)

At the top of the activity feed a confirmation indicates the collection has been restored.

[![restore confirmation message](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58927426.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58927426.png)

## Connecting to Slack, HipChat and other platforms

Postman Pro and Enterprise users can pipe the team's activity feed to a communication channel of your choice with the following integrations:

* [Postman Pro to Slack integration](/docs/postman_pro/integrations/slack/)
* [Postman Pro to HipChat integration](/docs/postman_pro/integrations/hipchat/)
* [Postman Pro to Microsoft Teams integration](/docs/postman_pro/integrations/microsoft_teams/)  
