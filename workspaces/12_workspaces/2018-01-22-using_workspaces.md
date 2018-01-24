---
categories:
  - "postman"
  - "using_workspaces"
title: "Using Workspaces"
page_id: "using_workspaces"
warning: false
---


Here is a list of tasks you can perform in Workspaces:

* [Create an entity in a Workspace](#createEntity)

* [Add to a Workspace from an existing Workspace](#add)

* [Delete a Workspace](#delete)

* [Join a Workspace](#join)

* [Share in a Workspace](#share)

* [Restore windows in a Workspace](#restore)

? Use Workspace control for Enterprise accounts




<h3 id="createEntity">Creating an entity in a workspace</h3>

Creation will always happen in a specific workspace

<h3 id="add">Adding to a workspace from an existing workspace</h3>

Every entity will have an additional "add to workspace" operation. On selecting this operation, the user will see a list of workspaces to add the entity to.

<h3 id="remove">Removing an entity from a workspace</h3>

Removing an entity from any workspace will remove it from that workspace alone. "Remove" will remove an entity from that workspace alone. If the entity exists in any other workspace, they won't be affected. "Delete" will remove the entity from ALL workspaces.

<h3 id="delete">Deleting a workspace</h3>

Deleting a workspace will just remove the workspace as all items will still belong in any other workspace that they have been added to. This should avoid catastrophic cases where one or several items can be deleted by removing a workspace. 

<h3 id="join">Joining a workspace</h3>

A user can join a workspace to work on collections, environments, monitors, mocks and integrations within it.

#<h3 id="share">Sharing in a workspace</h3>

Sharing in a workspace will be the same action as adding from a private workspace to a team, public or enterprise workspace. However, when an item is shared with a team, it will have an additional owner (the team). If an item is removed from the default workspace of a user, it will still remain in the team's default workspace and will have to be explicitly removed from the team by the team admin or someone with edit access.

<h3 id="restore">Restoring windows in a Workspace</h3>

Text goes here.








### ? Using workspace control for Enterprise accounts

Visibility for only a few people
Control publishing to public workspaces
