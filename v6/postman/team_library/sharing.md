---
title: "Sharing"
page_id: "sharing"
tags: 
  - "pro"
  - "enterprise"
warning: false
---

 **Note: Team Library is only available for versions 5.0 and below.**

Postman Pro and Enterprise users have access to a Team Library which lets you collaborate faster with your teammates. Team members can share collections and environments and see the activity feed in the Team Library. You can think of the Team Library as a way to organize your API infrastructure and make finding API documentation, workflows, and test suites easy.

Your Team Library should be the single source of truth about your APIs. It will let you see the state of your APIs in real time, or review historical versions and the latest updates.

**Note:** If you'd like to know more about workspaces, refer to the chapter [Introduction to Workspaces](/docs/postman/workspaces/intro_to_workspaces/).

[![team library](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59167045.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59167045.png)

The Team Library allows team members to subscribe to shared collections. When someone subscribes to a collection, they get a synced copy of this collection in their Postman app. If they have edit permissions for the collection, they can make changes which will be reflected in everyone else's collection copy too. Changes made to shared collections are visible under the [Activity Feed](/docs/postman/workspaces/activity_feed_and_restoring_collections/).

Shared environments work slightly differently. Through a shared environment, you can create and share a snapshot of a local environment. Users may have different environment variable values, so updates to these values are not synced between shared environments.

There are a number of enhancements coming up soon on [Postman's product roadmap](https://trello.com/b/4N7PnHAz/postman-roadmap-for-developers) that will impact workflows for teams wishing to 'sync' updates to their shared environment. In the meantime, here are some workarounds that rely on collections as the single source of truth for your APIs:

1. Run a pre-request script to validate the correctness of required environment keys and values. If any are missing, stop the workflow and throw an error.
1. Set environment variables in the first request of the collection, or a pre-request script.

## Sharing Collections

In addition to the [standard ways to share a collection](/docs/postman/collections/sharing_collections/), Postman Pro and Enterprise users can also share collections with their team or specific team members.

1. From the Collections tab in the sidebar, click on the ellipsis **(...)** next to the collection you would like to share, and select "Share".
1. Specify the team permissions by selecting "Can View" or "Can Edit" in the dropdown.  
    [![edit team permissions](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58787441.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58787441.png)
1. Postman also lets you manage access to a collection at an individual level. To do this, click the **Add Individual Permissions** link. Select a team member from the dropdown, or enter the username or email of the person you want to share with. Specify the individual's permissions by selecting "Can View" or "Can Edit" in the dropdown. You can give permissions to multiple people.  
    [![edit individual permissions](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58787572.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58787572.png)
1. Click the **Share** button to complete the process.
1. Go to the Team Library to view the full list of team collections.

## Sharing environments

In addition to the [standard way to share an environment](/docs/postman/environments_and_globals/manage_environments/#share-an-environment), Postman Pro and Enterprise users can also share an environment with their team.

1. From the gear icon in the upper right corner of the Postman app, select "Manage Environments", and click the orange **Share** button next to the environment you want to share.
1. You will have one last opportunity to hide any sensitive values like passwords and access tokens before sharing the environment. When someone else imports the environment, or accesses the shared template, they can input their own personal information within their own version of the template.  
    [![environment](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58787793.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58787793.png)
1. Click the **Share** button to complete the process.
1. Go to the Team Library to view the full list of shared team environments.
