---
title: "Viewing changelogs and restoring collections"
order: 185
page_id: "changelog_and_restoring_collections"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "SynapseFi"
    url: "https://www.postman.com/case-studies/SynapseFI.pdf"
  - type: link
    name: "Clarifai"
    url: "https://www.postman.com/case-studies/Clarifai.pdf"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "New, More Useful Activity Feed in Postman Collections"
    url: "https://blog.postman.com/2016/10/27/new-more-useful-activity-feed-in-postman-collections/"
  - type: section
    name: "Associated Topics"
  - type: link
    name: "Intro to Integrations"
    url: "/docs/integrations/intro-integrations/"

warning: false
---

Your Postman collections display a changelog for reviewing create, update, and delete events. You can use the changelog to keep track of any updates you and your collaborators make to your private and team collections. The changelog also lets you rollback a collection and restore it to any previous point in time. Postman also tracks activity within teams and accounts.

## Contents

* Viewing changes to a [collection](#viewing-the-collection-changelog), [workspace](#viewing-workspace-activity), [team](#viewing-team-activity), or [user account](#viewing-user-activity).
* [Restoring collections and folders](#restoring-collections-and-folders)
* [Exporting team activity](#exporting-team-activity-to-other-platforms)
* [Next steps](#next-steps)

## Viewing the collection changelog

To review the changelog for a collection in Postman, select the __Collections__ tab and click the arrow (&#9656;) next to the relevant collection to view its details. Select the __Changelog__ tab to see a chronological list of collection activities.

The changelog indicates the date of each update, the user who carried it out, what type of update they performed, and the time the change occurred. The changelog collates consecutive updates on the same session to the same entity for readability.

![Collection Changelog](https://assets.postman.com/postman-docs/collection-changelog.png)

With a Postman Team, Business, or Enterprise account, you can see generated diffs detailing changes to a collection.

![Changelog diffs](https://assets.postman.com/postman-docs/changelog-diff.png)

You can alternatively review a collection changelog from the [Workspaces dashboard](https://app.getpostman.com/dashboard) by selecting a workspace and collection.

## Viewing workspace activity

You can access the activity feed [from the Postman app](#accessing-the-activity-feed-from-the-postman-app) or the [web dashboard](#accessing-the-activity-feed-from-the-web-dashboard). The activity feed will show information on who added or removed collections, environments, or entities from the workspace as well as members joining and leaving the workspace. You can [filter this information](#filtering-the-activity-feed) directly within the activity feed.

You can also see who is actively working in your workspace at any time. The avatars of members currently active in the workspace will be brightly colored and displayed at the top of the screen of the Postman app and web Dashboard.

<img alt="Active user" src="https://assets.postman.com/postman-docs/Beesly+active+member.jpg" width="300px"/>

### Accessing the activity feed from the Postman app

To access the activity feed from the Postman app, toggle to the browse view by clicking **Browse** in the status bar at the bottom. Then, select the **Activity** tab to see the events that have occured within the workspace.

[![activity feed from postman app](https://assets.postman.com/postman-docs/activityfeedfrompostmanapp.gif)](https://assets.postman.com/postman-docs/activityfeedfrompostmanapp.gif)

### Accessing the activity feed from the web dashboard

You can also access the activity feed by logging in to the [web dashboard](https://app.getpostman.com/dashboard), navigating to the appropriate workspace, then selecting the **Activity** tab to see the events that have occured within the workspace.

[![activity feed from dashboard](https://assets.postman.com/postman-docs/activityfeedfromdashboard.gif)](https://assets.postman.com/postman-docs/activityfeedfromdashboard.gif)

### Filtering the activity feed

Filtering the activity feed allows you to display the relevant information directly instead of having to scroll through the feed. You can choose to filter by [user](#filtering-by-user) or by [entity](#filtering-by-entity) (Collections, Workspace, Environment).

To reset your search, click **Clear filters** at the top of the activity feed. You can also refresh the results by clicking **Refresh** at the top-right of the activity feed.

#### Filtering by user

Filtering by user will only display the actions the specified user carried out.
To filter by user, click **Filter by User** at the top of the activity feed and select the user(s). You can search for a specific user by typing their name in the search field. Once you have selected the user(s), click **Apply**.

> The user list will only show the users that are part of the workspace, not all team members.

[![activity feed filtering user](https://assets.postman.com/postman-docs/activityfeedfilteringuser.gif)](https://assets.postman.com/postman-docs/activityfeedfilteringuser.gif)

#### Filtering by entity

Filtering by entity will only display the actions carried out on the selected entity type. Available entities are `Workspace`, `API`, `Collection`, and `Environment`.
To filter by entity, click **Filter by Entity** at the top of the activity feed and select the entity or entities. You can search for a specific entity by typing its name in the search field. Once you have selected the entity or entities, click **Apply**.

> You can access the changelog of a specific collection by clicking **View Changelog** next to actions on collections.

[![activity feed filtering entity](https://assets.postman.com/postman-docs/activityfeedfilteringentity.gif)](https://assets.postman.com/postman-docs/activityfeedfilteringentity.gif)

## Viewing team activity

You can review the activity for a team with a Postman Team, Business, or Enterprise account. In the [Postman web app](https://app.getpostman.com), use the __Workspaces__ dropdown to select your team, then open the __Activity__ tab to view the events.

## Viewing user activity

You can review the activity for your own account in the [Postman web app](https://app.getpostman.com). Click your avatar in the top right, and select __Profile__—the __Activity__ tab will list your events.

## Restoring collections and folders

With a Postman Team, Business, or Enterprise account, you can use the changelog to restore a collection to a previous point in time. Click __Restore__ under a change to revert the collection to the point immediately _after_ the change was applied. The changelog will update and Postman will display a confirmation message indicating the time the collection has been restored to.

![Restore from Changelog](https://assets.postman.com/postman-docs/restore-changelog.png)

If you accidentally delete a folder, you can recover it by clicking __Restore__.

<img alt="Recover Folder" src="https://assets.postman.com/postman-docs/restore-folder.jpg" width="400px"/>

You may see a warning on any request tabs you have open that are affected by reverting the collection, for example indicating a conflict or deletion.

![Revert conflict](https://assets.postman.com/postman-docs/revert-conflict.png)

Postman will prompt you to resolve any conflicts that may cause you to lose unsaved data.

## Exporting team activity to other platforms

With a Postman Team, Business, or Enterprise account, you can pipe team activity feeds to external communication channels:

* [Slack integration](/docs/integrations/slack/)
* [HipChat integration](/docs/integrations/hipchat/)
* [Microsoft Teams integration](/docs/integrations/microsoft-teams/)  

## Next steps

For more on working with a team in Postman, see [collaboration](/docs/postman/collaboration/collaboration-intro/). To learn how to invite input on your API projects, see [sharing collections](/docs/postman/collections/sharing-collections/).
