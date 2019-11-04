---
title: 'Managing APIs'
order: 89
page_id: 'managing_apis'
warning: false
---

APIs reside in your workspace, just like your collections. This section walks you through how you can create, read, update, and delete APIs in Postman:

- [Creating an API](#creating-an-api)
- [Opening and viewing an API](#opening-and-viewing-an-API)
- [Renaming an API](#renaming-an-api)
- [Deleting an API](#deleting-an-api)
- [Removing an API from a workspace](#removing-an-api-from-a-workspace)
- [Commenting on APIs](#commenting-on-apis)

## Creating an API

You can create an API in the workspace from the sidebar in the Postman app and from the workspaces dashboard. To create an API in the Postman app when no APIs exist in the current workspace, click **Create an API** button in the sidebar, as illustrated in a red circle in the following screen:

[![api create4](https://assets.postman.com/postman-docs/API-Create4.png)](https://assets.postman.com/postman-docs/API-Create4.png)

If you already have created APIs in your workspace, click '+' in the sidebar, as indicated by the red arrow in the above screen. The following tab opens:

[![api create2](https://assets.postman.com/postman-docs/API-Create1.png)](https://assets.postman.com/postman-docs/API-Create1.png)

Specify a name for your API.

**Note:** You can create an API only when you are signed in and online.

Alternatively, you can also create an API from your workspace in the web dashboard as illustrated in the following screen:

[![api create3](https://assets.postman.com/postman-docs/API-Create3.png)](https://assets.postman.com/postman-docs/API-Create3.png)

Navigate to the APIs tab and click **Create an API** button, shown in a red circle in the above screen. The following screen opens.

[![api create4](https://assets.postman.com/postman-docs/API-Create4-Dashboard.png)](https://assets.postman.com/postman-docs/API-Create3-Dashboard.png)

Specify a name for your API and click the '&#9745;' adjacent to the name. Your API is created.

You can create different API versions from a specific version of your API. For more information on this, refer to the section [Creating API versions](/docs/postman/design-and-develop-apis/versioning-an-api/).

**Note:** Free users can create up to three APIs, Pro users up to 10, and Enterprise users up to 100.

## Opening and viewing an API

In the sidebar, click the API you want to open. If there are multiple versions of the API, Postman automatically opens the most recently created.

[![open and view api](https://assets.postman.com/postman-docs/API-Open-and-View1.png)](https://assets.postman.com/postman-docs/API-Open-and-View1.png)

Using the above interface, you can navigate and view various elements related to an API like mocks, monitors, documentation, and so on.

## Renaming an API

To rename an API, select the API in the sidebar. On the top right corner, click the ellipsis (...), as indicated by the red arrow below:

[![api create3](https://assets.postman.com/postman-docs/API-Rename1.png)](https://assets.postman.com/postman-docs/API-Rename1.png)

Specify a new name and press enter.

You can also rename the versions associated with your APIs. For more information on this, refer to the section [Renaming API version tags](/docs/postman/design-and-develop-apis/versioning-an-api/).

## Deleting an API

Click the ellipsis (...) next to the API, and select **Delete API**, as indicated by the red arrow in the following screen:

[![api delete](https://assets.postman.com/postman-docs/API-Delete1.png)](https://assets.postman.com/postman-docs/API-Delete1.png)

A delete confirmation message appears:

[![api delete2](https://assets.postman.com/postman-docs/API-Delete2.png)](https://assets.postman.com/postman-docs/API-Delete2.png)

When you delete an API, the collections, monitors, mocks, and environments linked to it are not deleted. For a more detailed understanding on this topic, refer to [Sharing APIs](/docs/postman/design-and-develop-apis/sharing-apis/)

You can also delete specific versions of your APIs. For more information on this, refer to the section [Deleting an API version](/docs/postman/design-and-develop-apis/versioning-an-api/).

## Removing an API from a workspace

From the Postman app, you can remove an API from the sidebar. Click the ellipsis (...) next to the API you would like to remove, select **Remove from workspace** and confirm that you would like to remove the API from the current workspace. The API will no longer be visible in the workspace.

When you remove an API from a workspace, the collections, monitors, mocks, and environments linked to it are not removed. For a more detailed understanding on this topic, refer to [Sharing APIs](/docs/postman/design-and-develop-apis/sharing-apis/).

You will be able to perform all these user actions even from the dashboard, as illustrated in the screen below:

[![api create5](https://assets.postman.com/postman-docs/API-Create5-Dashboard.png)](https://assets.postman.com/postman-docs/API-Create5-Dashboard.png)

## Commenting on APIs

You can comment on your APIs the same way as you do on your collections. For more information on this, refer to [Commenting on Collections](/docs/postman/collections/commenting-on-collections/)

## Schema changelog

Postman v7.10 onwards,  you can see a changelog for API schemas by clicking on the  “View changelog” button in the “Design” tab of the API.

![Click on the "View Changelog" button](https://assets.postman.com/postman-docs/schema-changelog-button.png)

The “Schema changelog” pane shows a list of all changes made to the API schema, with the most recent change on top. You can click on each entry to expand and show the entire changeset.

![The Schema Changelog pane](https://assets.postman.com/postman-docs/schema-changelog-pane.png)

You can also restore the schema to an older changeset by clicking the “Restore” link under each changelog entry. Restoring any changeset other than the most recent one creates a new entry in the changelog. Restoring that change is similar to undoing a merge.

![A changelog entry is created when restoring older changes](https://assets.postman.com/postman-docs/schema-changelog-merge.png)

---
For more information on APIs, see:

- [Sharing an API](/docs/postman/design-and-develop-apis/sharing-apis/)
- [Managing API workflow](/docs/postman/design-and-develop-apis/the-api-workflow/)
- [Versioning an API](/docs/postman/design-and-develop-apis/versioning-an-api/)
- [Introduction to APIs](/docs/postman/design-and-develop-apis/introduction-to-apis/)
