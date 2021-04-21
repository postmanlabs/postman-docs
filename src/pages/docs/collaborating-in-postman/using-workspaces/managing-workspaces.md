---
title: "Using and managing workspaces"
order: 77
page_id: "managing_workspaces"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Creating workspaces"
    url: "/docs/collaborating-in-postman/using-workspaces/creating-workspaces/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Giant Machines"
    url: "https://www.postman.com/resources/case-studies/giant-machines/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Viewing workspace activity"
    url: "/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/"
warning: false
---

You can share your Postman components with collaborators and organize your work using workspaces. To select a workspace, click the Workspaces dropdown at the top left of Postman.

<img alt="New Workspace" src="https://assets.postman.com/postman-docs/new-workspace-v8.jpg" width="400px"/>

You can [create workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/) in addition to the default personal and team workspaces.

## Contents

* [Accessing workspaces](#accessing-workspaces)
* [Sharing workspaces](#sharing-workspaces)
* [Joining workspaces](#joining-workspaces)
* [Adding elements to workspaces](#adding-elements-to-workspaces)
* [Removing elements from a workspace](#removing-elements-from-a-workspace)
* [Deleting a workspace](#deleting-a-workspace)
* [Managing workspace members](#managing-workspace-members)
* [Seeing who is in your workspace](#seeing-who-is-in-your-workspace)
* [Next steps](#next-steps)

## Accessing workspaces

You can access personal, team, and private workspaces using the workspace selector at the top of Postman.

To view and edit your workspace details (e.g. name, description), navigate to the workspace selector and hover over a workspace. Then, click ***...*** and select **View Details**.

<img alt="Default Workspace" src="https://assets.postman.com/postman-docs/create-workspace-dropdown.jpg" width="300px"/>

You can access public workspaces via the [**Workspaces** category in the API Network](https://www.postman.com/explore/workspaces).

[![Access Public Workspaces](https://assets.postman.com/postman-docs/access_public_workspaces.gif)](https://assets.postman.com/postman-docs/access_public_workspaces.gif)

## Sharing workspaces

You can share workspaces with collaborators by inviting them individually or via a [group](/docs/administration/managing-your-team/user-groups/). If you invite a collaborator to a personal workspace, Postman will convert it to a team workspace.

In Postman, you can convert your default __My Workspace__ to a team, private or public workspace. If you convert all your personal workspaces, we will create one new workspace where you can keep your collections, APIs, and environments and use it as your personal workspace. This means you will always have one personal workspace in Postman.

<img alt="Bootstrap workspace" src="https://assets.postman.com/postman-docs/bootstrap-workspace-v8.gif">

Open your workspace in Postman by selecting it from the workspace dropdown in the left. To add collaborators, click __Invite__ at the top right.

Add individuals you would like to invite to the workspace by email or by [group](/docs/administration/managing-your-team/user-groups/). Select access levels for the workspace and click __Send Invitations__.

<img alt="Invite users" src="https://assets.postman.com/postman-docs/invite-user-and-group-to-workspace.jpg"/>

When your collaborators accept the invite from the notification they receive, they will be able to access the workspace.

You can share a Public workspace by sharing its URL directly. To access the public profile URL, navigate to __Your Team__, then click __View Team Settings__.

[![Enable team profile](https://assets.postman.com/postman-docs/enable-team-profile.jpg)](https://assets.postman.com/postman-docs/enable-team-profile.jpg)

## Joining workspaces

In some cases you will join a workspace by following the link in an email / notification when a member of the workspace invites you. If you are part of a team in Postman, you can find workspaces to join. Open the workspaces drop-down from the control at the top of Postman in the left. Search for a workspace and select the workspace you want to join.

<img alt="Join Workspace Dropdown" src="https://assets.postman.com/postman-docs/join-workspace-dropdown-v8.jpg" width="350px">

Select the workspace, then click __Join Workspace__ at the top right.

<img alt="Join Workspace" src="https://assets.postman.com/postman-docs/join-workspace-v8.jpg"/>

Once you join the workspace, you can start creating collections, sending requests, visualizing your responses and even much more.

> To leave a public workspace, select the **...** on the right corner of the workspace overview and __Leave workspace__. Click __Leave__ to finalize leaving the workspace.

[![Leave workspace](https://assets.postman.com/postman-docs/leave-public-workspace.jpg)](https://assets.postman.com/postman-docs/leave-public-workspace.jpg)

## Adding elements to workspaces

You can add existing collections and environments to another workspace by sharing them.

To share a collection, open it via __Collections__ on the left-hand side, click **...** and choose __Share Collection__.

[![Collection share](https://assets.postman.com/postman-docs/share-a-collection.jpg)](https://assets.postman.com/postman-docs/share-a-collection.jpg)

To share an environment, open it via __Environments__ on the left-hand side, click **...** and choose __Share environment__.

<img alt="Share environment" src="https://assets.postman.com/postman-docs/share-env-manage-v8.jpg" width="600px"/>

Select the workspace you want to share to, and choose whether you also want to remove the element from its current workspace. Click __Share__.

<img alt="Share environment to workspace" src="https://assets.postman.com/postman-docs/share-environment-to-selected-workspace-v8.jpg" width="600px"/>

## Removing elements from a workspace

When you remove an element from a workspace, it is no longer visible in that particular workspace. The element is still available in any other workspace where it has been added.

> If you remove a collection from a workspace and are unable to locate it, you can recover it navigating to your [team collections](https://go.postman.co/team/elements?type=collection), or, if the collection was never shared, by navigating to your [personal collections](https://go.postman.co/me/collections). From there, you'll be able to re-share the item to the correct workspace.

From Postman, you can remove a collection from the sidebar. Click **...** to open the collection menu. Select __Remove from Workspace__ and confirm that you would like to remove the collection from the current workspace. The collection will no longer be visible in the workspace.

[![Remove collection from workspace](https://assets.postman.com/postman-docs/remove-collection-from-team-workspace.jpg)](https://assets.postman.com/postman-docs/remove-collection-from-team-workspace.jpg)

Also, you can remove an environment from the sidebar. Click **...** next to the environment menu. You can also click **...** next to the Share button in the Environment tab. Select __Remove from workspace__ and confirm that you would like to remove the environment from the current workspace. The environment will no longer be visible in the workspace.

<img alt="Remove environment from workspace" src="https://assets.postman.com/postman-docs/remove-env-from-workspace-v8.jpg" width="600px"/>

> Note that deleting an element is different to removing it. When you delete an element it is no longer available in any workspace. When you remove an element from a specific workspace, it will still be available in any other workspaces it was in.

## Deleting a workspace

When you delete a workspace, you erase its existence in Postman. Only the original creator of a workspace or a team admin can delete a workspace.

> "My Workspace" and "Team Workspace" are default workspaces created by Postman. They cannot be deleted, however they can be renamed.

To delete a workspace, go to the [Workspaces dashboard](https://app.getpostman.com/dashboard) and select a workspace.

Click the **...** on the right corner of the workspace overview, then select __Delete workspace__.

[![Delete workspace](https://assets.postman.com/postman-docs/delete-a-workspace.jpg)](https://assets.postman.com/postman-docs/delete-a-workspace.jpg)

Confirm that you wish to delete the workspace—it will no longer be available following this action.

> Public workspaces must have their visibility reverted in order to be deleted. If you try to delete a public workspace by clicking **...** on the right corner of the workspace overview, the option to delete will be greyed out.

## Managing workspace members

If you're a team administrator you can manage the members of your workspace, from the Dashboard Overview via the **Members** tab.

For a team workspace, you can add or remove any team member or [group](/docs/administration/managing-your-team/user-groups/) from the __Members__ section, selecting access permissions depending on your account level, and save your changes.

<img alt="Edit team workspace" src="https://assets.postman.com/postman-docs/edit-members-team-workspace-v8.jpg" width="350px">

Being an admin, you have the permission to add and remove any member from a public workspace. To add members to a public workspace, navigate to the __Members__ section, enter an email address, click __Add__ to the team, then __Save__.

<img alt="Add member" src="https://assets.postman.com/postman-docs/add-team-member.jpg" width="300px"/>

Another way to add workspace members is to click __Manage Team__ and select __Invite Users__.

<img alt="Manage team" src="https://assets.postman.com/postman-docs/manage-team-v8.jpg">

Enter an email address, click __Add__ to the team, then select __Send Invitations__. You can also generate a link and invite people to your team by sharing the link with them.

<img alt="Edit workspace" src="https://assets.postman.com/postman-docs/edit-members-v8.jpg" width="350px">

To remove any team member, click the trash icon near the person you want to remove, and select __Remove User From Team__.

<img alt="Remove member" src="https://assets.postman.com/postman-docs/remove-member-team-v8.jpg" width="350px">

## Seeing who is in your workspace

You can see all of the members of your workspace and keep track of who's working on your APIs at any given time. You can also make sure that all teammates who should be included in your workspace are there. The avatars of workspace members at the top of the screen in Postman are bright when a member is active, and muted when someone hasn't been active for fifteen to twenty seconds.

Hover over the avatars to see your teammates names.

<img alt="Active user" src="https://assets.postman.com/postman-docs/active-member-v8.jpg" width="250px"/>

> You can only see workspace members if you are also a member. To see member avatars, and to make your avatar visible to the team, [join the relevant workspace](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#joining-workspaces).

If more than three people belong to a workspace, the fourth avatar will be a number representing the remaining members. Click the number to see a list of all active and inactive users.

<img alt="Active user list" src="https://assets.postman.com/postman-docs/active-inactive-members-v8.jpg" width="300px"/>

The active and inactive user lists are collapsible.

<img alt="Active user list" src="https://assets.postman.com/postman-docs/collapse-member-list-v8.jpg" width="250px"/>

## Next steps

You can view recent [activity](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/) within a workspace to keep track with developments on your projects.
