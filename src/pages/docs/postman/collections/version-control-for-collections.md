---
title: "Version Control for Collections"
order: 46
page_id: "version_control_for_collections"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sharing Collections"
    url: "/docs/postman/collections/managing-collections/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Versioning APIs"
    url: "/docs/postman/design-and-develop-apis/versioning-an-api/"
---

You can use version control with your Postman collections, forking and merging using a standard pull request process. Version control allows you to collaborate with teammates, working on different forks of the same collection, updating forks from the parent collection, and merging changes when you're ready. You can tag collaborators to review pull requests and resolve conflicts to manage collection versions.

* [Forking a collection](#forking-a-collection)
* [Creating pull requests](#creating-pull-requests)
* [Merging changes](#merging-changes)
* [Pulling updates](#pulling-updates)
* [Reviewing pull requests](#reviewing-pull-requests)
* [Resolving conflicts](#resolving-conflicts)

## Forking a collection

You can fork a collection from the Postman app or the [web dashboard](https://go.postman.co/). To fork a collection in the Postman app, select the collection in the __Collections__ sidebar and click the __View more actions__ (__...__) button. Select __Create a Fork__.

<img src="https://assets.postman.com/postman-docs/create-collection-fork.jpg" alt="Create Fork" width="250px"/>

Enter a label for your fork, and select a workspace to save it to. Click __Fork collection__.

<img src="https://assets.postman.com/postman-docs/fork-name.jpg" alt="Create Fork" width="350px"/>

Your fork will be created in the selected workspace.

[![fork collection](https://assets.postman.com/postman-docs/Forking_a_Collection.gif)](https://assets.postman.com/postman-docs/Forking_a_Collection.gif)

> If there are any mocks or monitors associated with a collection, they will not be available with the forked collection. You will need to create mocks and monitors specifically for the fork if you need them.

## Creating pull requests

You can merge changes from a collection fork (the _source_) into the parent (the _destination_) using a pull request process, tagging reviewers who can comment on your changes and decide to merge or not. In the Postman app or web dashboard, open the menu for a collection and select __Create pull request__.

<img alt="Create Pull Request" src="https://assets.postman.com/postman-docs/create-collection-pull-request.jpg" width="250px"/>

You can overview the source, destination, and changes that will be included in the pull request.

![Pull Request Changes](https://assets.postman.com/postman-docs/pull-request-changes.jpg)

> If the parent collection has any changes since you last updated your fork, you can [pull those changes](#pulling-updates) before merging.

If there are any conflicts, they will be highlighted so that you can [resolve them](#resolving-conflicts).

If your pull request has no conflicts, you can go ahead and open it for review. Enter a title and description, and select up to three reviewers from the dropdown list. Reviewers will need edit access to the collection in order to merge your changes. Click __Create Pull Request__.

<img alt="Create Pull Request" src="https://assets.postman.com/postman-docs/pull-request-detail.jpg" width="350px"/>

Reviewers can [comment on your pull request or decide to merge](#reviewing-pull-requests) your changes into the parent collection.

## Merging changes

You can merge changes on a fork (the _source_) into the parent fork (the _destination_). It is recommended that you use the [pull request process](#creating-pull-requests) instead of merging straight away—which you can only do if you have edit access to the original collection. If you do not have permissions to edit the parent collection, you will need to [open a pull request](#creating-pull-requests) so that someone with edit access can merge your changes.

When you merge changes from a fork into its parent collection, you have a chance to review the "diff" first. Select __Merge changes__ on the fork in the Postman app or web dashboard.

Postman will display an overview of the changes you are attempting to merge.

![Merge Fork](https://assets.postman.com/postman-docs/merge-fork-collection.jpg)

> If the parent collection has any changes since you last updated your fork, you can [pull those changes](#pulling-updates) before merging.

If there are no [conflicts](#resolving-conflicts) you can review the changes and click __Merge all changes__ when you are ready.

<img src="https://assets.postman.com/postman-docs/merge-fork-options.jpg" alt="Merge Fork Options" width="300px"/>

You can merge all changes from the fork into the parent, merge into the parent and update the fork, or merge in the parent and delete the fork. Make a selection and click __Merge__.

## Pulling updates

You can keep your forked collections up to date with any changes in the parent, for example if another team member has merged changes into the parent collection.

To compare your fork to its parent, choose __Merge Changes__ in the forked collection (in the Postman app or web dashboard).

<img src="https://assets.postman.com/postman-docs/merge-fork-changes.jpg" alt="Merge Fork" width="250px"/>

Postman will warn you before you attempt to merge a fork whose parent has changed since you last updated it. Click __Pull Changes__ to update your fork with the changes in the parent collection.

![Update Fork](https://assets.postman.com/postman-docs/update-fork.jpg)

## Reviewing pull requests

If you're tagged as a reviewer on a pull request, you can view the changes, comment, and merge the forked collection into the parent (or decline the pull request) when you are ready.

You can see a list of pull request for any collection in the web dashboard __Pull Requests__ tab.

![Open Pull Request](https://assets.postman.com/postman-docs/open-pull-request-list.jpg)

Each pull request includes status, which will be `OPEN` for any that have not been merged or declined.

Select an open pull request from the list to review it. You can comment to have a discussion or request changes.

![Pull Request Comments](https://assets.postman.com/postman-docs/pull-request-comments.jpg)

You can choose to __Edit__ or __Decline__ the pull request.

If you are ready to merge, click __Approve and Merge__. [Choose a merge option](#merging-changes) and click __Merge__.

The pull request will be listed as merged in the Collection __Pull Requests__ list.

![Merged PR](https://assets.postman.com/postman-docs/merged-pull-request.jpg)

You can view the detail on any merged pull request by selecting it.

![Merged PR Detail](https://assets.postman.com/postman-docs/merged-pr-detail.jpg)

## Resolving conflicts

If you encounter conflicts when you attempt to merge a forked collection, you will need to decide how you want to resolve them before continuing. A conflict will occur when you are attempting to merge changes into a request, folder, or example that has changed since you updated your fork.

> Merge conflicts can involve changes in multiple workspaces.

![Merge Conflicts](https://assets.postman.com/postman-docs/merge-conflicts.jpg)

The __Source__ will indicate the changes on your fork, with the __Destination__ representing the changes on the parent branch. Click __Use this__ next to the version you want to include when you merge. When conflicts are resolved, the __Merge all changes__ or __Approve and Merge__ button will be enabled and you can [merge your fork](#merging-changes).

## Next steps

You can also use [version control on APIs](/docs/postman/design-and-develop-apis/versioning-an-api/) you design and build in Postman.
