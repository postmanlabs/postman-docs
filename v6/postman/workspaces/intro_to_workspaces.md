---
title: "Intro to Workspaces"
page_id: "intro_to_workspaces"
warning: false
---

## What is a workspace?

A workspace is a _view_ of all the Postman things you've come to use: [collections](/docs/postman/collections/intro_to_collections/), [environments](/docs/postman/environments_and_globals/intro_to_environments_and_globals/), [mocks](/docs/postman/mock_servers/intro_to_mock_servers/), [monitors](/docs/postman/monitors/intro_monitors/), and more. Individuals can organize their work in personal workspaces and teams can collaborate in team workspaces.

[![WS_mainScreen-basicMenu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Workspaces_Mainscreen.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Workspaces_Mainscreen.png)

Regardless of the type of workspace, you can share elements in multiple workspaces at the same time. Workspace elements include collections, monitors, mocks, environments, and integrations.

## Personal workspaces

Personal workspaces are visible only to you. If you don't have a Postman account, you can have only one personal workspace. If you do have an account, you can [create an unlimited number of workspaces](/docs/postman/workspaces/creating_workspaces/).

## Team workspaces

Team workspaces are available to Postman users. Every team has one default team workspace, and can create an unlimited number of workspaces.

[![WS-mainScreen-teamMenu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Workspaces_Mainscreen3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Workspaces_Mainscreen3.png)

As a Postman user, you can create team workspaces for ongoing development or short-term collaborations. You can share a collection to other workspaces. A Postman Collection shared with team members is visible to all members of your Postman team with a default read-only access. If you have the appropriate permissions for the collection, you can edit and update the collection in any workspace where it exists.

## Private workspaces

For Postman Enterprise teams, private workspaces are team workspaces only visible to the user who creates the workspace and team members who have been invited to join the workspace. Private workspaces are a way for Postman Enterprise teams to restrict access to collections, environments, mocks, and monitors that are relevant only to a particular audience.

## Why use workspaces?

### Personal organization

If your personal workspace is getting cluttered, create a new workspace to mirror your personal workflow in a more granular fashion.

### Team organization

Similarly, create new workspaces to mirror your team’s workflow. These can be permanent workspaces aligned by function, product or project, or partner as mentioned above. These can also be temporary workspaces for temporary projects and activities.

### Source of Truth

Teams need a single source of truth for their APIs, and workspaces can give a team or sub-team confidence that they’re working off the latest versions of their Postman collections, and know that their changes are being synced in real time.

### Team permissions

Team workspaces are read-only by default. You control the edit and view permissions for collections and all of their associated elements by giving edit capabilities to the entire team or only specified individuals on your team.

### Discovery

It’s a common scenario that someone will be working on something that the broader team knows nothing about. If there are collections shared in a common workspace, this allows all team members to understand the scope of a project and see those elements more clearly.

### Up-to-date Activity Feed

View an activity feed of CUD (Create, Update, Delete) operations within a collection. Stay on top of who updated a collection, what the updates were, and when they were completed.

### Real time debugging with History

When team members join a workspace, even the request history is a shared entity. Everyone who is part of that workspace can see the most recent requests sent, and observe the behavior in their own instances of Postman in real time. Previously, you might have discovered the bug, exported a cURL request from Postman, sent it over for someone else to load it up in their own instance of Postman.
