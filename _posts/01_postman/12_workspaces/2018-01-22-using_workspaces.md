---
categories:
  - "postman"
  - "workspaces"
title: "Using Workspaces"
page_id: "using_workspaces"
warning: false
---


Workspaces is an easy and efficient way to collaborate with a group of users to develop and test APIs. You can either organize your work in personal Workspaces or work with others in team Workspaces. Postman designed a set of features that unleashes the power and versatiltity of using Workspaces.

Here you'll learn how to perform actions on Workspaces and how to use Workspaces to work with Postman elements.

**Performing actions in Workspaces**

* [Deleting Workspaces](#deleting-workspaces)

* [Editing descriptions in Workspaces](#editing-descriptions-in-workspaces)

* [Joining Workspaces](#joining-workspaces)

* [Leaving Workspaces](#leaving-workspaces)

* [Managing members of team Workspaces](#managing-members-of-team-workspaces)

* [Renaming Workspaces](#renaming-workspaces)

* [Sharing Workspaces](#sharing-workspaces)

* [Viewing details of Workspaces](#viewing-details-of-workspaces)


**Using Workspaces with Postman elements**

* [Adding collections and environments from another Workspace](#adding-collections-and-environments-from-another-workspace)  
* [Publishing collections](#publishing-collections)

* [Removing elements from Workspaces](#removing-elements-from-workspaces)

* [Sharing collections and environments in Workspaces](#sharing-collections-and-environments-in-Workspaces)







### Adding collections and environments from another Workspace

You can add collections or environments from one Workspace to another personal or team Workspace. 

In the [Workplaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}, select a Workspace and click the **Add to workspace** button. The personal Workspaces view appears by default. Click "Team" to add collections or environments to team Workspaces.

[![add to workspaces](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-personal.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-personal.png)

In the Add to this Workspace page, select the source Workspace that contains the collection or environment you want to add to the target Workspace. Then click "Collection" or "Environment" and select the element(s) you want.

[![another workspace](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-add-another-workspace.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-add-another-workspace.png)

Click the **Add to this Workspace** button. The element(s) appear in your list of collections or environments in the target Workspace.

[![elements list](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-add-WS-results-list.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-add-WS-results-list.png)

### Removing elements from Workspaces

When you remove a Workspace, it is no longer visible in that particular Workspace. The element is still available in any other Workspace where it exists. 

You can remove an element from a Workspace in the Postman app sidebar, or in the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}.

#### Removing collections from a Workspace in the sidebar

In the Postman app, select a collection and click the ***Ellipsis (...)*** button.

Click "Remove from Workspace". The collection is no longer visible in the Workspace. 

[![remove sidebar](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-remove-WS-via-sidebar.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-remove-WS-via-sidebar.png)

#### Removing elements from a Workspace in the dashboard

In the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}, click an element. In this example, we click "Collections".

Click the ***Ellipsis (...)*** button in the element you want to remove and select "Remove from workspace". The Workspace is no longer visible in the Workspace.

[![remove dashboard](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-publish-or-removepWS.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-publish-or-removepWS.png)

### Deleting Workspaces 

When you delete a Workspace or a Workspace element, you erase its existence in Postman. 

**Deleting Workspaces in the Dashboard**

To delete a Workspace, go to the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"} and select a personal or team Workspace. In this example, we select a team Workspace to delete.

Click the ***Ellipsis (...)*** button for the Workspace you want to delete and select "Delete".

[![delete workspace menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-team.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-team.png)

In "Delete Workspace", click the **Delete** button. Remember when you delete a Workspace, it is gone forever!

[![delete workspace](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-delete_WS.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-delete_WS.png)

**Deleting elements in the Dashboard**

To delete a Workspace element, go to the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"} and click a personal or team Workspace. 

Click the ***Ellipsis (...)*** button for the Workspace element you want to delete and select "Delete".


**Deleting elements in the Postman app**

To delete an element in a Workspace, go to the status bar at the bottom of the screen and click the "Build" menu.


[![build menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-build-menu1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-build-menu1.png)

Select "Browse" and select an element view: Collections, Environments, Monitors, Mocks, or Integrations view. The Collection view appears by default.

Click the ***Ellipsis (...)*** button for the Workspace element you want to delete and select "Delete".


### Joining Workspaces

A user can join a Workspace to work on collections, environments, monitors, mocks, and integrations. Let's see how.

**Joining Workspaces from the Postman app**

In the Postman app, click a Workspace in the header bar, which is "Neutrino level dectection" in this example.

Select "Team" and select a Workspace to join under WORKSPACES YOU CAN JOIN.

[![join ws menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-join-WS-mainScreen-menu.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-join-WS-mainScreen-menu.png)

In the Collections view, click the **Join** button.

[![join two](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-join-second-step.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-join-second-step.png)

In the confirmation message, click the **Start Building** button to complete the process.

[![join three](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-join-third-step1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-join-third-step1.png)

**Joining Workspaces from the Dashboard**

You can join a Workspace from the Dashboard.

Go to the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"} and select team Workspaces.

Scroll down to "Workspaces you can join" and click the **Join** button next to the Workspace you want to join.


### Sharing Workspaces

Postman lets you share your personal Workspaces with other users.

**Sharing Workspaces in the Dashboard**

In the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}, select a personal Workspace you want to share. Next, click the ***Ellipsis (...)*** button and select "Share".

[![](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-personal.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-personal.png)

In "Share a personal workspace", select the users with whom you want to share the Workspace from the "Members" dropdown menu.

[![share personal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-personal-WS.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-personal-WS.png)

Click the **Share this workplace** button.  Your shared Workspace appears in team Workspaces.

**Sharing Workspaces from the Postman app**

To share a Workspace, go to the status bar at the bottom of the screen and click the "Build" menu.

Select "Browse" and click the Share button to share a collection, environment, monitor, mock, or integration to share.


### Sharing collections and environments in Workspaces 

Postman enables you to share your collections and environments in Workspaces from the Postman app and the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}. 

#### Sharing collections in the app

##### Sharing collections in the sidebar

In the Postman app, select a collection in the sidebar and click the ***Ellipsis (...)*** button.

Select "Share Collection". The **SHARE COLLECTION** modal appears. It offers three ways to share a collection: "Share in another workspace", "Embed", and "Get Link".

[![share sidebar](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-collection-sidebar.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-collection-sidebar.png)

* Sharing collections in another Workspace

Select this option to add a collection to a team Workspace. The collection is visible to the team.

In the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}, select a collection and then clcik the **Share** button. The collection is visible in your target Workspace.

[![share collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-collection-dashboard.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-collection-dashboard.png)

* Sharing collections with the Embed or Run In Postman button

Select this option to embed a **[Run in Postman](/docs/postman_for_publishers/run_button/creating_run_button){:target="_blank"}** button in your collection for your API documentation, website, or Github readme. 

The **Run in Postman** button lets anyone import and run this collection with one click. When you click the **Generate Code** button, you get a link that you can use for a dynamic or static button. You can also select the environment you want for the generated code.

The **Run in Postman** button shares the collection directly from Postman, so the collection is uploaded to Postman servers when you generate the embed code

[![share embed-rip](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-embed-a-collection.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-embed-a-collection.png)

* Sharing collections with a link

Select this option to generate a shareable link for others to access your collections. You can manage a complete list of your collection links from your [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}.

[![share get link](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-getLink-collections.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-getLink-collections.png)

###### Sharing collections from the Build menu

In the Postman app, click the **Build** menu in the status bar at the bottom of the screen.

Select "Browse", and then select a collection. 

Click the **Share** button.

#### Sharing collections in the dashboard

In the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}, select "Browse", and then select a collection. 

Click the **Share** button.

#### Sharing environments in the app

###### Sharing environments from the Build menu

In the Postman app, click the **Build** menu in the status bar at the bottom of the screen.

Select "Browse", and then select an environment. 

Click the **Share** button.


#### Sharing environments in the dashboard

In the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}, select "Browse", and then select an environment. 

Click the **Share** button.



**Sharing environments to Workspaces**

In the Collections view, select the collection you want to share, and click the **Share** button.

[![share elements](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-elements-dashboard.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-elements-dashboard.png)

In "Share this collection", select the Workspace of which you want to share this collection, and click the **Share** button.

[![share elements-collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-elements-collection.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-elements-collection.png)

### Viewing details of Workspaces

You can view the details of your personal or team Workspaces.

In the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}, select a personal or team Workspace.

[![view details](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-team.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-team.png)

#### Viewing details of personal Workspaces

To view the details of your personal Workspaces, select "View Details" from the ***Ellipsis (...)*** button menu.

[![details personal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-view-details-personal.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-view-details-personal.png)

#### Viewing details of team Workspaces 

To view the details of your team Workspaces, select "View Details" from the ***Ellipsis (...)*** button menu.

[![details team](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-team-view-details.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-team-view-details.png)

### Renaming Workspaces

You can rename your personal or team Workspaces.

In the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}, select a personal or team Workspace and click the ***Ellipsis (...)*** button. 

#### Renaming personal Workspaces 

To rename your personal Workspaces, select "Rename" from the ***Ellipsis (...)*** button menu. Then enter the new name for the Workspace in the "Name" field and save your changes.

[![rename personal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-edit-workspace-details-personal.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-edit-workspace-details-personal.png)

#### Renaming team Workspaces 

To rename your team Workspaces, select "Rename" from the ***Ellipsis (...)*** button menu. Then enter the new name for the Workspace in the "Name" field and save your changes. You must have admin privileges to modify team settings.

[![rename team](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-edit-WS-details-team.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-edit-WS-details-team.png)

### Publishing collections

Postman enables you to [publish your collection](/docs/postman/api_documentation/intro_to_api_documentation){:target="_blank"} and make it availabe to anyone with the published link.

To publish a Workspace collection, go to the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"} and click a personal or team Workspace.

In the Collections view, click the ***Ellipsis (...)*** button and select "Publish".

[![pub workspace](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-publish-or-removepWS.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-publish-or-removepWS.png)

In "Publish Collection", select the:

* Environment
  
  The collection's public documentation contains the shared environment.

* Custom domain
  
  The selected domain contains the published domain.

* Custom styling options
  
  You can determine the color of the top bar, right side bar, and the highlight.

[![pub workspace2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-publish-collection.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-publish-collection.png)

Click the **Publish Collection** button. Postman generates API documentation for your collections automatically in real-time. 

### Leaving Workspaces

Postman allows you to leave a team Workspace. To leave a team Workspace, select a team Workspace, click the ***Ellipsis (...)*** button, and select "Leave".

In "Delete Workspace", click the **Leave workspace** button.  You can no longer work or add collections and environments to the Workspace.

[![leave workspaces](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-leave-WS-team.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-leave-WS-team.png)

### Editing descriptions in Workspaces

You can edit descriptions for personal and team Workspaces. In this example, we use a personal Workspace.

In the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"}, select a Workspace, click the ***Ellipsis (...)*** button, and select "Edit Description".

[![edit descr1](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-personal.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-personal.png)

In "Edit workspace details", enter a new description in the "Summary" text box and save your changes.

[![edit descr2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-edit-workspace-details-personal.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-edit-workspace-details-personal.png)


### Managing members of team Workspaces

When you need to manage the members of your team Workspace, go the [Workspaces dashboard](https://app.getpostman.com/dashboard){:target="_blank"} and select the "Team" view.

[![edit descr2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-team.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-elipsis-menu-team.png)

Click the ***Ellipsis (...)*** button and select "Manage Members".

In "Edit workspace details", add or remove team members in the "Members" dropdown menu and save your changes.

[![edit descr team](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-edit-WS-details-team.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-edit-WS-details-team.png)






