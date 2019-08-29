---
title: "Activity Feed and restoring collections"
page_id: "activity_feed_and_restoring_collections"
warning: false
---

 **Note: Team Library is only available for versions 5.0 and below.**

An activity feed is a list of events that displays updates to Postman data in an interactive interface. You can use the activity feed to keep track of changes to your private and team collections by different users across the team.

The activity feed also lets you rollback a collection and restore it to any previous point in time.

## Types of activity feed

Postman tracks changes to collections and teams.

### Collections

To review the activity feed at the collection level, expand the arrow (&#9656;) next to the collection to view details.

Under the **Activity** tab, review a chronological list of activities about the collection.

The activity feed displays who updated the collection, what the updates were, and when they were completed.

Consecutive updates on the same session to the same entity are collated for readability.

[![activity feed for a collection](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/teamlib-activity-feed.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/teamlib-activity-feed.png)

### Teams

To review the activity feed at the Postman Pro or Enterprise team level, click the **Team Library** view and then select the **Activity Feed** tab.

You can review a chronological list of activities about all collections shared with the team. Similar to the feed at the collection level, the team activity feed displays who updated the collection, what the updates were, and when they were completed.

[![team library feed](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/teamlib-activityfeed-view.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/teamlib-activityfeed-view.png)

You can also review the activity feed from the Dashboard.

In the [Postman website](https://www.getpostman.com/), click the **Dashboard** button to open your [Workspace](https://app.getpostman.com).

To see the activity feed, click a collection. Then under the header bar, click "Activity".

The activity feed presents a list of changes to collections that you own and are subscribed to.

[![user activity feed](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/teamlib-feed-dashboard.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/teamlib-feed-dashboard.png)

## Breaking the event down

The activity feed captures different updates to collections.

These updates include CUD (Create, Update, Delete) operations on collections, folders, and requests.

A consolidated update to a request as seen below provides a diffs view to pinpoint the exact changes.

[![updates for CRUD activities](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/event-breakdown.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/event-breakdown.png)

**Note**: Postman Pro and Enterprise users can view diffs. Other users can track the "who" and "when" in the activity feeds, but not the "what" at this level of detail.

## Restoring collections

In the collection-level activity feed, Postman Pro and Enterprise users can restore their collections to a point in time.

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
