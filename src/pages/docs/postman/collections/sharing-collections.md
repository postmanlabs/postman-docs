---
title: "Sharing collections"
order: 43
page_id: "sharing_collections"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Healthwise"
    url: "https://www.postman.com/case-studies/healthwise.pdf"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Sharing Postman Collections"
    url: "https://www.youtube.com/watch?v=KMLaibEaf7Y"
  - type: link
    name: "How to Share Postman Collections"
    url: "https://www.youtube.com/watch?v=mVTsK6ZdY6c"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to Workspaces"
    url: "/docs/postman/workspaces/intro-to-workspaces/"

warning: false

---

Postman enables you to share Collections in Workspaces from the Postman app and the [workspaces dashboard](https://app.getpostman.com/dashboard).

**Note:** Before you can upload or share a collection, you must sign in to your [Postman account](/docs/postman/launching-postman/postman-account/). However, you can share collections as a file without being signed in.

This topic covers:

* [Sharing collections in the app](#sharing-collections-in-the-app)
* [Sharing collections with another workspace](#sharing-collections-with-another-workspace)
* [Sharing collections in the Dashboard](#sharing-collections-in-the-dashboard)
* [Sharing as a file](#sharing-as-a-file)
* [Modifying team permissions](#modifying-team-permissions)
* [Managing requests for access](#managing-requests-for-access)

## Sharing collections in the app

### In the sidebar

In the Postman app, select a collection in the sidebar and click the ellipsis **(...)** button.

Select "Share Collection".

The **SHARE COLLECTION** modal appears. It offers three ways to share a collection:

* Share in another workspace
* Embed
* Get Link

[![share sidebar](https://assets.postman.com/postman-docs/githubusercontent2.png)](https://assets.postman.com/postman-docs/githubusercontent2.png)

## Sharing collections with another workspace

Select this option to share a collection to another workspace or with a workspace member. If shared to a team workspace, the collection will be visible to others in the team.

You can set default permissions on a shared collection. You can assign a view-only or edit-only permission to the whole team, or you can grant individual user permissions to each team member. The **Manage Roles** modal will automatically appear at the end of the collection sharing process.

> Refer to [Roles and permissions](/docs/postman/collaboration/roles-and-permissions/#collection-roles) for more information on role-based user permissions.

In the **Share modal**, click **To a workspace** and select the workspace you want to share the collection with.

![in app collection sharing](https://assets.postman.com/postman-docs/Share+collection+to+workspace.jpg)

If you want to share the collection but keep it in the current workspace as well, click **Share collection**. If you want the collection to be removed from the current workspace after you share it, click **Share collection and remove from this workspace**. The default selection is **Share collection**.

> When you remove a collection from a workspace, all mocks, montitors, and integrations associated with it will also be removed.

![Adjust roles](https://assets.postman.com/postman-docs/Adjust+roles+with+shared+collections.jpg)

Select roles for collaborators in the workspace, and click **Save Roles**.

> If you want to restore a collection to a workspace it's  been removed from, share the collection again. If the collection is deleted and you need to restore access to it, you will need to [recover it](/docs/postman/collections/managing-collections/#recover-a-collection) first.

## Sharing collections with the Embed or Run In Postman button

Select this option to embed a **[Run in Postman](/docs/postman-for-publishers/run-in-postman/using-run-button/)** button in your collection for your API documentation, website, or Github readme.

The **Run in Postman** button lets anyone import and run this collection with one click.

When you click the **Generate Code** button, you get a link that you can use for a dynamic or static button. You can also select the environment you want for the generated code.

The **Run in Postman** button shares the collection directly from Postman, so the collection is uploaded to Postman servers when you generate the embed code.

[![share embed-rip](https://assets.postman.com/postman-docs/Collection_sharing_link.png)](https://assets.postman.com/postman-docs/Collection_sharing_link.png)

## Sharing collections with a link

Select this option to generate a shareable link for others to access your collections. You can manage a complete list of your collection links from your [workspaces dashboard](https://app.getpostman.com/dashboard).

[![share get link](https://assets.postman.com/postman-docs/Collection_sharing_link2.png)](https://assets.postman.com/postman-docs/Collection_sharing_link2.png)

### In the Browse view

In the bottom bar, select "Browse", and then select a collection

Click the **Share** button.

## Sharing collections in the Dashboard

In the [workspaces dashboard](https://app.getpostman.com/dashboard), select "Browse", and then select a collection.

Click the **Share** button.

## Sharing as a file

You can download collections as a JSON file to share with others, with or without signing in to your Postman account.

You can share collections anonymously, but it is strongly recommended that you sign in to your Postman account when uploading collections. When you're signed in, you can update your existing collection, make it public, or delete it later.

Learn more about [exporting and importing collections](/docs/postman/collections/importing-and-exporting-data/), and the differences between collection formats [v1 and v2](https://blog.postman.com/2015/06/05/travelogue-of-postman-collection-format-v2/).

## Modifying team permissions

You can share collections with your entire team or assign individual permissions for team members. You can designate view or edit permissions for the team only after sharing a collection. **Note**: For now, each collection's permission must be set individually by the collection editor. The default team permission is view-only.

To assign or manage roles in the Postman app, select a collection in the sidebar and click the ellipsis **(...)** button.

[![modify team permissions](https://assets.postman.com/postman-docs/Manage_Roles.png)](https://assets.postman.com/postman-docs/Manage_Roles.png)

Select "Manage Roles".

In the **Manage Roles** modal, select the default team permission, add a user/team member, and assign the level of permission for the user. **Note**: Changes made in this modal modifies the permissions of the collection.

Click the **Save Changes** button to complete the process.

[![modify team permissions modal](https://assets.postman.com/postman-docs/Manage_Roles3.png)](https://assets.postman.com/postman-docs/Manage_Roles3.png)

## Managing requests for access

Users can request access to a team member's personal collection or a private collection if they have a link to the collection.

To learn more about this feature, refer to the [Requesting access to collections](/docs/postman/collaboration/requesting-access-to-collections/) section.
