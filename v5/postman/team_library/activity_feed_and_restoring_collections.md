---
title: "Activity Feed and restoring collections"
page_id: "activity_feed_and_restoring_collections"
warning: false

---

 **NOTE**: **Team Library is only available for versions 5.0 and below.**

An activity feed is a list of events that displays updates to Postman data in an interactive interface. You can use the activity feed to keep track of changes to your private and team collections by different users across the team. 

The activity feed also lets you rollback a collection and restore it to any previous point in time. 

### Types of activity feed

Postman tracks changes to collections and teams.

##### **Collections**

To review the activity feed at the collection level, expand the angle bracket (**>**) next to the collection to view details.

Under the **Activity** tab, review a chronological list of activities about the collection. 

The activity feed displays who updated the collection, what the updates were, and when they were completed. 

Consecutive updates on the same session to the same entity are collated for readability.

[![activity feed for a collection](https://assets.postman.com/postman-docs/teamlib-activity-feed.png)](https://assets.postman.com/postman-docs/teamlib-activity-feed.png)

##### **Teams**

To review the activity feed at the Postman Pro or Enterprise team level, click the **Team Library** view and then select the **Activity Feed** tab. 

You can review a chronological list of activities about all collections shared with the team. Similar to the feed at the collection level, the team activity feed displays who updated the collection, what the updates were, and when they were completed.

[![team library feed](https://assets.postman.com/postman-docs/teamlib-activityfeed-view.png)](https://assets.postman.com/postman-docs/teamlib-activityfeed-view.png)

You can also review the activity feed from the Dashboard. 

Log in to the [Postman Website](https://app.getpostman.com) and click the **Dashboard** button. 

The activity feed includes a list of changes to collections that you own and are subscribed to.

[![user activity feed](https://assets.postman.com/postman-docs/teamlib-feed-dashboard.png)](https://assets.postman.com/postman-docs/teamlib-feed-dashboard.png)

### Breaking the event down

The activity feed captures different updates to collections. 

These updates include CRUD (Create, Read, Update, Delete) operations on collections, folders, and requests.

A consolidated update to a request as seen below provides a diffs view to pinpoint the exact changes. 

[![updates for CRUD activities](https://assets.postman.com/postman-docs/event-breakdown.png)](https://assets.postman.com/postman-docs/event-breakdown.png)

**Note**: Postman Pro and Enterprise users can view diffs. Other users can track the "who" and "when" in the activity feeds, but not the "what" at this level of detail. 

### Restoring collections

In the collection-level activity feed, Postman Pro and Enterprise users can restore their collections to a point in time.

Hovering over the activity displays a **Restore** link. 

Click the **Restore** link to restore the collection to the point right _after_ this change was applied.

[![hover to display restore link](https://assets.postman.com/postman-docs/restore-collections.png)](https://assets.postman.com/postman-docs/restore-collections.png)

At the top of the activity feed a confirmation indicates the collection has been restored.

[![restore confirmation message](https://assets.postman.com/postman-docs/58927426.png)](https://assets.postman.com/postman-docs/58927426.png)

### Connecting to Slack, HipChat and other platforms

Postman Pro and Enterprise users can pipe the team's activity feed to a communication channel of your choice with the following integrations:

   *   [Postman Pro to Slack integration](/docs/pro/integrations/slack)
   *   [Postman Pro to HipChat integration](/docs/pro/integrations/hipchat)
   *   [Postman Pro to Microsoft Teams integration](/docs/pro/integrations/microsoft_teams)  
