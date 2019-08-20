---
title: "Sharing collections"
page_id: "sharing_collections"
warning: false

---

Postman enables you to share Collections in Workspaces from the Postman app and the [workspaces dashboard](https://app.getpostman.com/dashboard).

**Note:** Before you can upload or share a collection, you must sign in to your [Postman account](/docs/postman/launching_postman/postman_account/). However, you can share collections as a file without being signed in.

This topic covers:

* [Sharing collections in the app](#sharing-collections-in-the-app)
* [Sharing collections in the Dashboard](#sharing-collections-in-the-dashboard)
* [Sharing as a file](#sharing-as-a-file)
* [Modifying team permissions](#modifying-team-permissions)

## Sharing collections in the app

### In the sidebar

In the Postman app, select a collection in the sidebar and click the ellipsis **(...)** button.

Select "Share Collection".

The **SHARE COLLECTION** modal appears. It offers three ways to share a collection:

* Share in another workspace
* Embed
* Get Link

[![share sidebar](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Collection_Share-Sidebar.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Collection_Share-Sidebar.png)

## Sharing collections in another workspace

Select this option to share a collection to another workspace or with a workspace member. If shared to a team workspace, the collection will be visible to others in the team.

You can set team default permissions to either view-only or edit; only after sharing a collection. First, you share the collection and then assign a role. You also will be able to grant existing team members individual user permissions. Remember, the **Manage Roles** modal will not be available until the collection is shared.

**Note:** Refer to [Roles and permissions](/docs/postman_pro/managing_postman_pro/roles_and_permissions/) for more information on role-based user permissions.

[![in app collection sharing](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Collection_sharing_new.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Collection_sharing.png)

In the [workspaces dashboard](https://app.getpostman.com/dashboard), select a collection and then click the **Share** button. The collection is visible in your target workspace.

[![share collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-collection-dashboard.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-collection-dashboard.png)

## Sharing collections with the Embed or Run In Postman button

Select this option to embed a **[Run in Postman](/docs/postman_for_publishers/run_button/creating_run_button/)** button in your collection for your API documentation, website, or Github readme.

The **Run in Postman** button lets anyone import and run this collection with one click.

When you click the **Generate Code** button, you get a link that you can use for a dynamic or static button. You can also select the environment you want for the generated code.

The **Run in Postman** button shares the collection directly from Postman, so the collection is uploaded to Postman servers when you generate the embed code.

[![share embed-rip](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Collection_sharing_link.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Collection_sharing_link.png)

## Sharing collections with a link

Select this option to generate a shareable link for others to access your collections. You can manage a complete list of your collection links from your [workspaces dashboard](https://app.getpostman.com/dashboard).

[![share get link](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Collection_sharing_link2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Collection_sharing_link2.png)

### In the Browse view

In the bottom bar, select "Browse", and then select a collection

Click the **Share** button.

## Sharing collections in the Dashboard

In the [workspaces dashboard](https://app.getpostman.com/dashboard), select "Browse", and then select a collection.

Click the **Share** button.

## Sharing as a file

You can download collections as a JSON file to share with others, with or without signing in to your Postman account.

You can share collections anonymously, but we strongly recommend you sign in to your Postman account when uploading collections. When you're signed in, you can update your existing collection, make it public, or delete it later.

Learn more about [exporting and importing collections](/docs/postman/collections/data_formats/), and the differences between collection formats [v1 and v2](https://blog.getpostman.com/2015/06/05/travelogue-of-postman-collection-format-v2/).

## Modifying team permissions

You can share collections with your entire team or assign individual permissions for team members. You can designate view or edit permissions for the team only after sharing a collection. **Note**: For now, each collection's permission must be set individually by the collection editor. The default team permission is view-only.

To assign or manage roles in the Postman app, select a collection in the sidebar and click the ellipsis **(...)** button.

[![modify team permissions](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Manage_Roles.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Manage_Roles.png)

Select "Manage Roles".

In the **Manage Roles** modal, select the default team permission, add a user/team member, and assign the level of permission for the user. **Note**: Changes made in this modal modifies the permissions of the collection.

Click the **Save Changes** button to complete the process.

[![modify team permissions modal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Manage_Roles3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Manage_Roles3.png)
