---
title: "Intro to Workspaces"
order: 181
page_id: "intro_to_workspaces"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Team collaboration with Postman"
    url: "https://www.youtube.com/watch?v=8tLvvQ-3Nx0"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Workspaces! What are they good for?"
    url: "https://blog.postman.com/2018/04/07/workspaces-the-biggest-thing-to-hit-postman-this-month/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Variables"
    url: "/docs/postman/variables-and-environments/variables/"
  - type: link
    name: "Intro to scripts"
    url: "/docs/postman/scripts/intro-to-scripts/"

warning: false
---

A workspace is a -view- of all the Postman things you've come to use: [collections](/docs/postman/collections/intro-to-collections/), [environments](/docs/postman/variables-and-environments/variables/), [mocks](/docs/postman/mock-servers/intro-to-mock-servers/), [monitors](/docs/postman/monitors/intro-monitors/), and more. Individuals can organize their work in personal workspaces and teams can collaborate in team workspaces.

[![WS_mainScreen-basicMenu](https://assets.postman.com/postman-docs/Workspaces_Mainscreen.png)](https://assets.postman.com/postman-docs/Workspaces_Mainscreen.png)

Regardless of the type of workspace, you can share elements in multiple workspaces at the same time. Workspace elements include collections, monitors, mocks, environments, and integrations.

## Contents

* [Personal workspaces](#personal-workspaces)
* [Team workspaces](#team-workspaces)
* [Private workspaces](#private-workspaces)
* [Seeing who is in your workspace](#seeing-who-is-in-your-workspace)
* [Why use workspaces](#why-use-workspaces)

## Personal workspaces

Personal workspaces are visible only to you. If you don't have a Postman account, you can have only one personal workspace. If you do have an account, you can [create an unlimited number of workspaces](/docs/postman/workspaces/creating-workspaces/).

## Team workspaces

Team workspaces are available to Postman users. Every team has one default team workspace, and can create an unlimited number of workspaces.

[![WS-mainScreen-teamMenu](https://assets.postman.com/postman-docs/Workspaces_Mainscreen3.png)](https://assets.postman.com/postman-docs/Workspaces_Mainscreen3.png)

As a Postman user, you can create team workspaces for ongoing development or short-term collaborations. You can share a collection to other workspaces. A Postman Collection shared with team members is visible to all members of your Postman team with a default read-only access. If you have the appropriate permissions for the collection, you can edit and update the collection in any workspace where it exists.

## Private workspaces

For Postman Business and Enterprise teams, private workspaces are team workspaces that are only visible to the user who creates the workspace and team members who have been invited to join it. Private workspaces are a way for teams to restrict access to collections, environments, mocks, and monitors that are relevant only to a particular audience.

## Seeing who is in your workspace

You can see all of the members of your workspace and keep track of who's working on your APIs at any given time. You can also make sure that all teammates who should be included in your workspace are there. The avatars of all workspace members will be displayed at the top of the screen in the Postman app and on the web Dashboard.

* **Bright avatars**: These are people who are currently active in the workspace.
* **Muted avatars**: These are inactive members of the workspace. If a user isn't active for fifteen to twenty seconds, their avatar moves to the inactive state.

Hover over the avatars to see your teammates names.

<img alt="Active user" src="https://assets.postman.com/postman-docs/Beesly+active+member.jpg" width="350px"/>

>You can only see workspace members if you are also a member. To see member avatars, and to make your avatar visible to the team, [join the relevant workspace](/docs/postman/workspaces/using-workspaces/#joining-a-workspace).

 If more than three people belong to a workspace, the fourth avatar will be a number representing the remaining members. Click the number to see a list of all active and inactive users.

<img alt="Active user list" src="https://assets.postman.com/postman-docs/Active+members+Stanely+open+list.jpg" width="400px"/>

The active and inactive user lists are collapsible. You can see all of your active and inactive teammates in both the Postman app and the web Dashboard.  

<img alt="Active user list" src="https://assets.postman.com/postman-docs/Stanely+collapsed+list+w%3Aborder.jpg" width="400px"/>

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
