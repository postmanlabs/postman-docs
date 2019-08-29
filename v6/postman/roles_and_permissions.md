---
title: "Roles and permissions"
page_id: "roles_and_permissions"
warning: false
---
Roles and permissions in Postman have been enhanced to provide a more robust access-control mechanism. In Postman v7, you access features through assigned roles that have their own set of user permissions. 

This chapter describes the following topics:

* [Understanding roles in Postman](#understanding-roles-in-postman)
* [List of roles and permissions](#list-of-roles-and-permissions)
* [Roles before and after](#roles-before-and-after)
* [Migrating to Postman v7](#migrating-to-postman-v7)


### Understanding roles in Postman

Permissions to perform certain tasks and/or operations are assigned to 
specific roles in Postman. For instance, Postman provides an admin-level role to help manage the permissions of Postman for the entire team. Likewise, Postman has other roles with specific permissions.  

The diagram below illustrates the roles in Postman: 

[![roles overview](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RBAC3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RBAC3.png)

The following is a brief outline of the main roles:

* **Collection viewer** can view, run, and share a collection. When a viewer shares a collection it carries the same viewer permissions to the viewer with whom it is shared. 
* **Collection editor** can manage a collection and controls the highest level administrative and security settings.
* **Workspace collaborator** can view all resources in the workspace, has add and remove privileges, can create history, and even add members.
* **Workspace admin** can edit workspace’s information like name, summary, settings, remove members and change workspace roles, and delete the workspace.
* **Team developer** can access some team resources (collections, environments, workspaces).
* **Team admin** can’t access team resources, can edit team details, settings and invite/remove team members.
* **Team billing** can’t access team resources, can access billing related things.


### List of roles and permissions 

Roles and permissions is not a new feature in Postman. In Postman v7 the roles have been enhanced to provide a fine-grained access management of its features. This sections clearly outlines the roles and permissions for collections, workspaces, and teams in a table format.

This section describes the following topics:

* [Collection roles](#collection-roles)
* [Workspace roles](#workspace-roles)
* [Team roles](#team-roles)

#### Collection roles

In Postman v7, collections have two roles - **Collection Viewer** and **Collection Editor**. The following table illustrates the roles and permissions of collections:  

| Collections |   Viewer   | Editor |
| ---   |   ---     | ---   |
| Add, edit, and delete mock servers  |         | &#9745;   |
| Add, edit, and delete monitors |       | &#9745;    |
| Edit and delete a collection |       | &#9745;    |
| Manage roles on collections  |     | &#9745;  |
| View and run collections  |     | &#9745;  |
| View and run collection runs  |   &#9745;    | &#9745;  |
| Export a collection  |   &#9745;   | &#9745;   |
| Fork a collection |   &#9745;   | &#9745;   |
| Merge forks on a collection  |  &#9745;   | &#9745;   |
| Publish collection documentation and add to API Network or Postman template  |      | &#9745;  |
| Share collection to a different workspace  |    | &#9745;   |
| Tag and restore collection versions   |    | &#9745;   |




#### Workspace roles

In Postman v7, workspaces have two roles - **Workspace Collaborator** and **Workspace Admin**. The following table illustrates the roles and permissions of workspaces:  

| Workspaces |   Collaborator   | Admin |
| ---   |   ---     | ---   |
| Add and remove collections, environments |  &#9745;        | &#9745;   |
| View, create, edit, and delete Collection runs, Header Presets, History, and Integrations |   &#9745;     | &#9745;    |
| Delete workspace|       | &#9745;    |
| Join and leave workspace |  &#9745;    | &#9745;  |
| Add mock servers and monitors  |   &#9745;    | &#9745;  |
| View workspace contents and data like name, summary, and settings |   &#9745;   | &#9745;   |
| Edit workspace details like - name, summary, and settings |     | &#9745;   |
| Add members |  &#9745;   | &#9745;   |
| Remove members  |      | &#9745;  |
| Manage roles and visibility of the workspace |    | &#9745;   |


#### Team roles

In Postman v7, teams have three roles - **Developer**, **Admin**, and **Billing**. The following table illustrates team's roles and permissions:  


| Teams | Developer | Admin | Billing |
| ---   |   ---     | ---   | ------- |
| Create and delete invitations  |         | &#9745;   |
| Edit team information and logo |       | &#9745;    |
| Manage team roles (except billing)|       | &#9745;    |
| Remove users from the team |     | &#9745;  |
| Manage custom domains  |      | &#9745;  |
| Manage authentication methods |      | &#9745;   |
| View monitoring usage data for all monitors created by the team|      | &#9745;   |
| View team audit logs  |    | &#9745;   | 
| Create and manage payment links  |    | &#9745;   | &#9745; 
| Use a purchase key  |    | &#9745;   | &#9745; 
| View all published collections in the team  | &#9745;    | &#9745;   |
| Manage billing details  |    | &#9745;   |
| Manage payment and payment methods |    | &#9745;   |
| Cancel and change team plan  |    | &#9745;   | &#9745; 
| Assign billing role  |    | &#9745;   | &#9745; 
| View collections, environments, mock servers and monitors visible to the team  |    | &#9745;   | &#9745; 
| View and create team workspaces |    | &#9745;   | &#9745; 
| View team activity feed  |    | &#9745;   | &#9745; 
| View team's custom domains and use them to publish documentation  |    | &#9745;   | &#9745; 


### Roles before and after

A user's role determines what they can and cannot do in Postman. Each role has a default set of permissions. The following section illustrates the roles prior to version 7 and post 7. The following lists the old roles and the newer ones feature-wise:

* Collections
  - *Can view* changed to **Collection Viewer**
  - *Can edit* changed to **Collection Editor**
* Workspace (No roles existed prior to version 7.0)
  - Workspace Collaborator
  - Workspace Admin
* Team
  - *User* changed to **Developer**
  - Admin 
  - Billing

  **Note:** In the Postman app UI, the right-click option *Modify team permissions* has changed to **Manage Roles**. Also note that the older set of roles applied till Postman app version 6.


### Migrating to Postman v7

To know more about migration-related information, please refer to [migrating to v7](/docs/postman_pro/managing_postman_pro/migrating_to_v7/) section.
