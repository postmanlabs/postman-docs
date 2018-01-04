---
categories:
  - "postman"
  - "team_library"
title: "Activity Feed and restoring collections"
page_id: "activity_feed_and_restoring_collections"
warning: false
---

An activity feed is a list of events, displaying to the user in an interactive interface, updates to their Postman data. It is useful to keep track of changes made to your private and team collections by different users across the team. The activity feed also lets you rollback a collection, and restore it to any previous point in time. 

### Types of activity feed

Postman tracks changes made at 3 different levels: collection, team and user.

##### **Collection**

To review the activity feed at the collection level, expand the angle bracket (**>**) next to the collection name to open the collection details view. Under the **Activity** tab, review a chronological listing of activities affecting the collection. The activity feed displays who updated the collection, what the updates were, and when they were completed. Consecutive updates on the same session to the same entity are collated for readability.

[![activity feed for a collection](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/teamlib-activity-feed.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/teamlib-activity-feed.png)

##### **Team**

To review the activity feed at the Postman Pro or Enterprise team level, go to the **Activity Feed** tab within the **Team Library** view. Review a chronological listing of activities affecting all collections shared with the team. Like the feed at the collection level, the team activity feed displays who made changes, to what, and when it was completed.

[![team library feed](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/teamlib-activity-feed.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/teamlib-activity-feed.png)


You can also review the activity feed from the Dashboard. Log in to the [Postman Website](https://app.getpostman.com){:target="_blank"} and click the **Dashboard** button. The activity feed includes a list of changes to collections that you own and are subscribed to.

[![user activity feed](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/teamlib-feed-dashboard.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/teamlib-feed-dashboard.png)

### Breaking the event down

The activity feed captures different updates that are made to collections. This includes CRUD operations (Create, Read, Update, Delete) on collection, folders, and requests, among other activities.

[![updates for CRUD activities](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58927272.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58927272.png)

A consolidated update to a request, for example, looks like the screenshot above providing you with a diff view to pinpoint the exact changes. 

**Note**: Postman Pro and Enterprise users can view diffs. Other users will be able to track the "who" and "when" in the activity feeds, but not the "what" at this level of detail. 

### Restoring collections

Postman Pro and Enterprise users also have the ability within the collection-level activity feed to restore their collections to a point in time.

[![restore collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59058662.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59058662.png)

Hovering over the activity will display a **Restore** link. Clicking the **Restore** link will restore the collection to the point right _after_ this change was applied.

[![hover to display restore link](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59114317.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59114317.png)

And now the top of the activity feed displays the confirmation of restoring the collection.

[![restore confirmation message](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58927426.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58927426.png)

### Connecting to Slack, HipChat and other platforms

Postman Pro and Enterprise users can pipe the team's activity feed to a communication channel of your choosing with the following integrations:

   *   [Postman Pro to Slack integration](/docs/pro/integrations/slack)
   *   [Postman Pro to HipChat integration](/docs/pro/integrations/hipchat)
   *   [Postman Pro to Microsoft Teams integration](/docs/pro/integrations/microsoft_teams)  

### Upcoming additions to the activity feed

The activity feed will become even more powerful in the near future.  It’ll integrate with all our Postman Pro and Enterprise products and other features in the pipeline. We're going to soon add **Tagging** support. You'll be able to tag collections at a point in time, allowing easier referencing and ability to rollback, while also allowing you to set up Monitors and Documentation on tagged versions of the collection. These version control constructs will allow your team even more flexibility with your API code development within Postman Pro or Enterprise.
