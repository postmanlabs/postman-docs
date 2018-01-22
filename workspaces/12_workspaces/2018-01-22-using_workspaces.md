---
categories:
  - "postman"
  - "using_workspaces"
title: "Using Workspaces"
page_id: "using_workspaces"
warning: false

---
Create an entity in a workspace

Add to a workspace from an existing workspace

Delete a workspace

Join a workspace

Share in a workspace

Use workspace control for Enterprise accounts


### Creating an entity in a workspace

Creation will always happen in a specific workspace

### Adding to a workspace from an existing workspace

Every entity will have an additional "add to workspace" operation. On selecting this operation, the user will see a list of workspaces to add the entity to.

### Removing an entity from a workspace 
Removing an entity from any workspace will remove it from that workspace alone. "Remove" will remove an entity from that workspace alone. If the entity exists in any other workspace, they won't be affected. "Delete" will remove the entity from ALL workspaces.

### Deleting a workspace

Deleting a workspace will just remove the workspace as all items will still belong in any other workspace that they have been added to. This should avoid catastrophic cases where one or several items can be deleted by removing a workspace. 

### Joining a workspace

A user can join a workspace to work on collections, environments, monitors, mocks and integrations within it.

### Sharing in a workspace
Sharing in a workspace will be the same action as adding from a private workspace to a team, public or enterprise workspace. However, when an item is shared with a team, it will have an additional owner (the team). If an item is removed from the default workspace of a user, it will still remain in the team's default workspace and will have to be explicitly removed from the team by the team admin or someone with edit access.

### Using workspace control for Enterprise accounts

Visibility for only a few people
Control publishing to public workspaces
