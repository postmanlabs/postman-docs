---
title: "Version Control for Collections"
page_id: "version_control_for_collections"
warning: false
---

Version control provides more control over collaborative flows by allowing users to work on different "forks" of the same collection. They can later merge and pull changes between these forks to keep the collections up to date with each other.

You can 'fork' a collection in a personal or a team workspace. To fork a collection, either the workspace must belong to you or you should be a member of a team workspace. In Postman, the fork whose changes you want to merge into a parent is the source, and the parent itself is the destination.

This section describes the following topics:

* [Forking a collection](#forking-a-collection)
* [Pulling changes](#pulling-changes)
* [Merging changes](#merging-changes)
* [Resolving conflicts](#resolving-conflicts)

## Forking a collection

You can fork a collection from the Postman app as well as Postman dashboard. To fork a collection, go to your Postman app, click (...) adjacent to a collection and select 'Create a Fork'. Specify a label for this fork, select a workspace and click 'Fork Collection'. Let's consider an example where HealthAPICheck collection belongs to a personal workspace. A fork of this is created in Team-Cobras workspace. The following screen illustrates this:

[![fork collection](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Forking_a_Collection.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Forking_a_Collection.gif)

**Note:** If there are any mocks or monitors associated with a collection, they will not be available with the forked collection. You will have to create the mocks and monitors again.  

## Pulling changes

After forking a collection, the parent collection may be updated by others. If that happens, your fork will no longer be the same as the parent. In such circumstances, Postman notifies you about this change and allows you to pull these changes. As discussed in the previous section, the HealthAPICheck collection is forked in Team-Cobras. This collection is now updated in the personal workspace making the forked and base collection out of sync. In this case, you may want to pull the changes. The following screen illustrates this:

[![pull changes](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Fork_Pull_Changes.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Fork_Pull_Changes.gif)

## Merging changes

It's easy to view changes, review them and then merge. This section describes how to merge changes made in your fork with the parent collection. Let's change the name of the forked collection in the above example to HealthAPICheck - Forked Collection which is part of Team-Cobras workspace.

The base collection - HealthAPICheck has four request R1, R2, R3, and R4. All of them are 'Get' requests. A copy of this collection now exists in Team-Cobras workspace. All four requests are updated in Team-Cobras workspace and those changes are merged in the base collection. The following screen illustrates this:

[![merging changes](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Forking_n_Merging.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Forking_n_Merging.gif)

When you attempt to merge the changes by clicking 'Merge all changes', Postman provides the following three options, as illustrated:

[![merge all changes](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Merge_All_Changes.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Merge_All_Changes.png)

The 'Confirm merge' dialog offers the following choices:

* **Merge changes:** Changes made in your fork will be merged into the parent.
* **Merge changes and update source:** Changes made in your fork will be merged into the parent and the fork is updated.
* **Merge changes and delete source:** Changes made in your fork will be merged into the parent and the fork is deleted.

Choose either of the options and click 'Merge'.

## Resolving conflicts

A conflict occurs in Postman when two or more users make different changes to the same request/folder/examples simultaneously. In such a scenario, Postman will not be able to decide which of these changes to retain.

When conflicts arise, Postman uses color legends to illustrate and help users take decisions. The following screen illustrates the color legends:

[![color legends](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Fork_UI_Convention.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Fork_UI_Convention.png)

As shown in the above screen, the source is displayed in Orange color which indicates the changes you made. The destination is shown in Blue color which indicates the changes made by someone else. Click *Use this* to make the selection to resolve the conflict.

**Note:** Clicking *Use this* button only makes the selection of your choice. You still need to merge the changes by clicking **Merge all changes** button and then making the selection thereafter.

This section illustrates how you can resolve conflicts when changes happen in more than a single workspace. The Request R2 gets changed in both the workspaces - personal and Team-Cobras. Postman notifies the conflict and prompts you to resolve them. The following screen illustrates this:

[![resolving conflicts](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Fork_Resolve_Conflicts.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Fork_Resolve_Conflicts.gif)
