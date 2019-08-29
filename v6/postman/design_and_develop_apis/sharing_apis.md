---
title: "Sharing APIs and managing roles"
page_id: "sharing_apis"
warning: false
---

You can easily share your APIs with other members of your team on Postman - both in the app and in the [web dashboard](https://app.getpostman.com/dashboard). In Postman you share your collections or APIs to workspaces. To share an API with your team, you need to share the API to a shared workspace or share the workspace itself with the team and assign individual permissions to your team members by designating view (Viewer) or edit (Editor) permissions to them.

Let's say you created an API, added a collection as documentation and added another collection as a test suite. Now, you want to share this API to a workspace T1. When you share this API to workspace T1, the members of this workspace get access to only the shared elements attached to the API but not all the elements of the API. When you delete or remove the API from the workspace T1, the shared elements attached to the API can still be viewed by the members of workspace T1. You must remove them explicitly in order to remove access.

When you share the API with your team, team members can see the listing of the API's elements, like how many monitors or mocks are linked to the API, but they cannot access an element itself unless it is also shared with the team.

This topic covers:

* [Sharing APIs in the app](#sharing-apis-in-the-app)
* [Sharing APIs in the web dashboard](#sharing-apis-in-the-web-dashboard)

## Sharing APIs in the app

### In the sidebar

In the Postman app, select an API in the sidebar and click the ellipsis (...). Select **Share API**. The **Share API** screen appears, as illustrated below:  

[![api share sidebar](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Share1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Share1.png)

You share the API with a workspace and then assign roles to specific members in the workspace. Search for the workspace name in the top search bar and select the corresponding workspace and click **Save and Continue**. Your API is now shared in the selected workspace.

[![api manage roles](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Manage-Roles.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Manage-Roles.png)

In the above screen, you can manage the roles and permissions of that specific member. You can either assign an *Editor* role or a *Viewer* role. Click **Save Roles**.

## Sharing APIs in the web dashboard

In the [workspaces dashboard](https://app.getpostman.com/dashboard), click the **Share** button next to the API. The **Share API** button is shown in the below screen as indicated by the red arrow. The procedure, after clicking **Share API** is the same as the process within app. Refer to the section above **Sharing APIs in the app** for further information.

[![api share dashboard](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Share2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Share2.png)

___
For more information on APIs, see:

* [Managing APIs](/docs/postman/design_and_develop_apis/managing_apis/)
* [Managing API workflow](/docs/postman/design_and_develop_apis/the_api_workflow/)
* [Versioning an API](/docs/postman/design_and_develop_apis/versioning_an_api/)
* [Introduction to APIs](/docs/postman/design_and_develop_apis/introduction_to_apis/)
