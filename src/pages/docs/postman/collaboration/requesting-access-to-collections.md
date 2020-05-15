---
title: "Requesting access"
order: 64
page_id: "requesting-access-to-collections"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sharing Collections"
    url: "/docs/postman/collections/sharing-collections/"
  - type: link
    name: "Collection Roles"
    url: "/docs/postman/collaboration/roles-and-permissions/#collection-roles"

warning: false

---

You can request edit access to a team member's personal or private collection / API. You will need a link to the API or collection, or access to it in Postman. When you submit a request, the owner will receive a notification prompting them to choose whether to grant you the role.

> The Viewer role is available depending on your [Postman plan](https://www.postman.com/pricing).

- [Requesting access to collections](#requesting-access-to-collections)
    - [Requesting viewer role on a collection](#requesting-viewer-role-on-a-collection)
    - [Requesting editor role on a collection](#requesting-editor-role-on-a-collection)
- [Requesting access to APIs](#requesting-access-to-apis)
    - [Requesting viewer role on an API](#requesting-viewer-role-on-an-api)
    - [Requesting editor role on an API](#requesting-editor-role-on-an-api)
- [Approving requests for access](#approving-requests-for-access)

## Requesting access to collections

You can request viewer or editor role on a collection.

### Requesting viewer role on a collection

You can request viewer access to a team member's personal collection or a private collection in your team if you have a link to the collection.

1. Open the collection link in the browser or the Postman app.

2. Click **Request Access**.
![https://assets.postman.com/postman-docs/access-blocked.png](https://assets.postman.com/postman-docs/access-blocked.png)

3. Select a person to send your request to, a [role](/docs/postman/collaboration/roles-and-permissions/#collection-roles), and one of your workspaces to add the collection to once access is granted.
![https://assets.postman.com/postman-docs/request-access.png](https://assets.postman.com/postman-docs/request-access.png)

4. Complete your request by clicking **Request Access**.

This will trigger an email to the person you requested access from. When they approve your request, you will be notified by email. Your request will expire in 15 days, but you can make additional requests on the same collection after that period.

### Requesting editor role on a collection

There might be collections that you can view but not edit. These collections have a lock icon next to the collection name.

<img src="https://assets.postman.com/postman-docs/collection-lock.png" width="300px">

You can request the Editor role on this collection:

1. Click the ellipsis icon (...) next to the collection name in the sidebar to open the following menu and choose **Manage Roles**.
<img src="https://assets.postman.com/postman-docs/collection-context-menu.png" width="300px">

2. Click **Request Access** in the modal.
![https://assets.postman.com/postman-docs/manage-roles-blocked.png](https://assets.postman.com/postman-docs/manage-roles-blocked.png)

3. Select a person to send the request to and select the __Editor__ [role](/docs/postman/collaboration/roles-and-permissions/#collection-roles) from the __Role__ dropdown list.
![https://assets.postman.com/postman-docs/request-additional-access.png](https://assets.postman.com/postman-docs/request-additional-access.png)

4. Complete your request by clicking **Request Access**.

This will trigger an email to the person you requested access from. When they approve your request, you will be notified by email. Your request will expire in 15 days, but you can make additional requests on the same collection after that period.

## Requesting access to APIs

You can request viewer or editor role on an API.

### Requesting viewer role on an API

You can request viewer access to a team member's personal API or a private API in your team if you have a link to the API.

1. Open the API link in your browser.

2. Click **Request Access**.
![https://assets.postman.com/postman-docs/requestaccess1.png](https://assets.postman.com/postman-docs/requestaccess1.png)

3. Select a person to send your request to, a [role](/docs/postman/collaboration/roles-and-permissions/), and one of your workspaces to add the API to once access is granted.

4. Complete your request by clicking **Request Access**.

![https://assets.postman.com/postman-docs/requestaccess2.gif](https://assets.postman.com/postman-docs/requestaccess2.gif)

This will trigger an email to the person you requested access from. When they approve your request, you will be notified by email. Your request will expire in 15 days, but you can make additional requests on the same API after that period.

### Requesting editor role on an API

There might be APIs that you can view in your team workspace but can't edit. These APIs have a lock icon next to the API name.

<img src="https://assets.postman.com/postman-docs/requestingeditorroleonanapi.png" width="300px">

You can request the Editor role on this API:

1. Click the ellipsis icon (...) next to the API name in the sidebar to open the following menu and choose **Manage Roles**.

2. Click **Request Access** in the modal.

3. Select a person to send the request to and select the __Editor__ [role](/docs/postman/collaboration/roles-and-permissions/) from the __Role__ dropdown list.

4. Complete your request by clicking **Request Access**.

![https://assets.postman.com/postman-docs/requestaccesstocollections.gif](https://assets.postman.com/postman-docs/requestaccesstocollections.gif)

This will trigger an email to the person you requested access from. When they approve your request, you will be notified by email. Your request will expire in 15 days, but you can make additional requests on the same API after that period.

### Approving requests for access

Your team members can request access from you in the following cases:

1. If your team members have the link to a personal collection or API, they won't be able to view it, but they will be able to see the name and request access to it.

2. If you have the Editor role on a collection or API that is shared, a team member who has the Viewer role will be able to request an additional role from you.

> The Viewer role is available depending on your [Postman plan](https://www.postman.com/pricing).

You will receive an email detailing the request for access.
![https://assets.postman.com/postman-docs/requestdetailemail.png](https://assets.postman.com/postman-docs/requestdetailemail.png)

Click **Approve Request** if you want to grant access to the collection or API. If you do not wish to give access, you can ignore the request. A request for access will expire in 15 days.

To learn more about how you can collaborate with your team in Postman, see [Collaborating in Postman](https://learning.postman.com/docs/postman/collaboration/collaboration-intro/).
