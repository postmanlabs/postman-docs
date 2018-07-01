---
title: "Sharing collections"
page_id: "sharing_collections"
warning: false

---

Postman enables you to share Collections in Workspaces from the Postman app and the [workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}. 

**Note**: Before you can upload or share a collection, you must sign in to your [Postman account](/docs/v6/postman/launching_postman/postman_account){:target="_blank"}. However, you can share collections as a file without being signed in.

This topic covers:
* [Sharing collections in the app](#sharing-collections-in-the-app)
* [Sharing collections in the Dashboard](#sharing-collections-in-the-dashboard)
* [Sharing as a file](#sharing-as-a-file)
* [Modifying team permissions](#modifying-team-permissions)

### Sharing collections in the app

**In the sidebar**

In the Postman app, select a collection in the sidebar and click the ellipsis **(...)** button.

Select "Share Collection". 

The **SHARE COLLECTION** modal appears. It offers three ways to share a collection:

* Share in another workspace
* Embed 
* Get Link

[![share sidebar](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-collection-sidebar.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-collection-sidebar.png)

**Sharing collections in another workspace**

Select this option to add a collection to another workspace. If added to a team workspace, the collection will be visible to others on the team. 

Admins can set team default permissions to either view only or edit. They are also able to grant existing team members individual user permissions.
[![in app collection sharing](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs6.1update/Screen+Shot+2018-05-09+at+7.06.05+PM.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs6.1update/Screen+Shot+2018-05-09+at+7.06.05+PM.png)

In the [workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}, select a collection and then click the **Share** button. The collection is visible in your target workspace. 

[![share collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-collection-dashboard.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-collection-dashboard.png)

**Sharing collections with the Embed or Run In Postman button**

Select this option to embed a **[Run in Postman](/docs/v6/postman_for_publishers/run_button/creating_run_button){:target="_blank"}** button in your collection for your API documentation, website, or Github readme. 

The **Run in Postman** button lets anyone import and run this collection with one click. 

When you click the **Generate    Code** button, you get a link that you can use for a dynamic or static button. You can also select the environment you want for the generated code.

The **Run in Postman** button shares the collection directly from Postman, so the collection is uploaded to Postman servers when you generate the embed code.

[![share embed-rip](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-embed-a-collection.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-embed-a-collection.png)

**Sharing collections with a link**

Select this option to generate a shareable link for others to access your collections. You can manage a complete list of your collection links from your [workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}.

[![share get link](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-getLink-collections.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-getLink-collections.png)

**In the Browse view**

In the bottom bar, select "Browse", and then select a collection

Click the **Share** button.

### Sharing collections in the Dashboard

In the [workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}, select "Browse", and then select a collection. 

Click the **Share** button.

### Sharing as a file

You can download collections as a JSON file to share with others, with or without signing in to your Postman account. 

You can share collections anonymously, but we strongly recommend you sign in to your Postman account when uploading collections. When you're signed in, you can update your existing collection, make it public, or delete it later.

Learn more about [exporting and importing collections](/docs/v6/postman/collections/data_formats){:target="_blank"}, and the differences between collection formats [v1 and v2](http://blog.getpostman.com/2015/06/05/travelogue-of-postman-collection-format-v2/){:target="_blank"}.

### Modifying team permissions

You can share collections with your entire team or assign individual permissions for team members. Team admins can designate view or edit permissions for your team. **Note**: You must be a team admin to modify team permissions.

To assign or modify team permissions in the Postman app, select a collection in the sidebar and click the ellipsis **(...)** button.

[![modify team permissions](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/modify-permissions2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/modify-permissions2.png)

Select "Modify permissions".

In the **MODIFY PERMISSIONS** modal, select the default team permission, add the email address of the user, and assign the level of permission for the user. **Note**: Changes made in this modal modifies the permissions of the collection. 

Click the **Save Changes** button to complete the process.

[![modify team permissions modal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/modify-permissions-modal.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/modify-permissions-modal.png)
