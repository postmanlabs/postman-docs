---
title: "Working with your team"
order: 71
page_id: "collaboration"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Team collaboration with Postman"
    url: "https://www.youtube.com/watch?v=8tLvvQ-3Nx0"
  - type: link
    name: "Scaling Team Collaboration at Atlassian"
    url : https://www.youtube.com/watch?v=wYBZrdukack
  - type: section
    name: "Next Steps"
  - type: link
    name: "Creating workspaces"
    url: "/docs/collaborating-in-postman/using-workspaces/creating-workspaces/"
  - type: link
    name: "Your private API network"
    url: "/docs/collaborating-in-postman/adding-private-network/"

---
> Free collaboration is available in version 6.2 and above.

Postman allows all users to collaborate with their teams through Team Workspaces. Using this feature, you can easily collaborate and share your collections, environments, integrations, history, mocks, monitors, and more.

Postman will alert you with notifications when activities occur within your team and workspace. You can view and opt in or out notifications by selecting your avatar in the upper-right corner of Postman and clicking **Notification Preferences**.

> Each account can be on one Postman team at a time. Multi-team collaboration and guest accounts are [on Postman's roadmap](https://trello.com/b/4N7PnHAz/postman-roadmap-for-developers).

## Contents

* [Working with team workspaces](#working-with-team-workspaces)

    * [Inviting a team member to a personal workspace](#inviting-a-team-member-to-a-personal-workspace)

    * [Creating a new workspace](#creating-a-new-workspace-from-the-menu)

* [Team discovery](#team-discovery)

    * [Making your team discoverable](#making-your-team-discoverable)

    * [Finding teams within your organization](#finding-teams-within-your-organization)

* [Leaving a team](#leaving-a-team)

* [Usage limit](#usage-limit)

    * [How archiving works](#how-archiving-works)

    * [Recovering archived collections](#recovering-your-archived-collections)

* [Next steps](#next-steps)

## Working with team workspaces

Create a Team Workspace by inviting a team member to join a personal workspace or create a new one.

> Postman creates a default Team Workspace. You cannot delete this workspace but you can rename it.

### Inviting a team member to a personal workspace

In Postman, select **Invite**.

[![Invite button](https://assets.postman.com/postman-docs/invite-button-v8.jpg)](https://assets.postman.com/postman-docs/invite-button-v8.jpg)

Enter the email address of the individual you would like to invite to your team workspace or the [group](/docs/administration/managing-your-team/user-groups/) name, then click **Add** > **Send Invitations**.

<img alt="Invite users" src="https://assets.postman.com/postman-docs/invite-user-and-group-to-workspace.jpg"/>

The individual or group will be added to the team once they accept their invitation.

You can also use the **Copy Invite Link** and send it to people you would like to join your workspace.

> "My Workspace" is a default workspace created by Postman. This workspace is different from other personal workspaces as it cannot be shared with anyone. It cannot be deleted, however it can be renamed. When you invite a teammate to join another personal workspace, Postman converts it into a team workspace.

All members of your workspace will have avatars displayed at the top of Postman. If the avatar is brightly colored, that person is active in the workspace at that time. Hover over an avatar to see the names of the people in your workspace.

![Active member](https://assets.postman.com/postman-docs/Beesly+active+member.jpg)

### Creating a new workspace from the menu

Select your current workspace in Postman to open the workspace menu, then click **+ New Workspace**.

[![New workspace](https://assets.postman.com/postman-docs/create-new-workspace-v8.jpg)](https://assets.postman.com/postman-docs/create-new-workspace-v8.jpg)

Specify a workspace name and summary. For a team workspace, add collaborators by entering their email addresses, then define their [workspace roles](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles).

[![Team workspace](https://assets.postman.com/postman-docs/create-team-workspace.jpg)](https://assets.postman.com/postman-docs/create-team-workspace.jpg)

## Team discovery

Enabling team discovery encourages collaboration and eases the onboarding process by allowing users accessing Postman with their company email address to request to join pre-existing teams within their organization.

### Making your team discoverable

You can enable team discovery in the dashboard by selecting **Team** > **Settings**, or in the app by selecting **Team** > **Team Settings** > **Team Discovery**. You will receive an email notification once you enable team discovery option.

[![Team Discovery Setup](https://assets.postman.com/postman-docs/team-discovery-question.jpg)](https://assets.postman.com/postman-docs/team-discovery-question.jpg)

You can optionally add a question for pending team members to provide information when they request to join the team, for any details that will help when approving requests. Enter your question and click __Save Question__—anyone requesting to join the team will be prompted with the question.

> If you do not specify a question, team members can still add a note when they ask to join.

You will receive a notification when anyone makes a request to join the team, including their answer to any question you set, or an optional note.

[![Team Request Approval](https://assets.postman.com/postman-docs/admin-team-join-requests.jpg)](https://assets.postman.com/postman-docs/admin-team-join-requests.jpg)

### Finding teams within your organization

When you log in to the Postman web dashboard using a verified email address for your company or organization, you can see available teams to join by selecting your avatar > **Your Team**. You will also be prompted with available teams when you first sign into your Postman account with a verified address.

[![Choose Team](https://assets.postman.com/postman-docs/join-team-from-list.jpg)](https://assets.postman.com/postman-docs/join-team-from-list.jpg)

You will see a list of available teams within your org. Select a team, answer the question set by the team admin if there is one (otherwise you can add an optional note), and click **Request to join**.

<img alt="Team Join Question" src="https://assets.postman.com/postman-docs/team-join-question-entry.jpg" width="400px"/>

The team administrator will receive a notification that you’ve asked to join the team. Once they approve your request, you will be able to access the team and collaborate on API projects within it.

## Leaving a team

You can leave a Postman team by navigating to your [Postman Dashboard](https://go.postman.co/workspaces), selecting your avatar in the top-right corner, and clicking **Your Team**. Click **Leave Team**.

<img src="https://assets.postman.com/postman-docs/your-team.jpg" alt="Leave team" width="600px"/>

If you are the last member to leave your team, you will have the option to transfer collections to a personal workspace.

<img src="https://assets.postman.com/postman-docs/leave-and-delete-team.jpg" alt="Leave and delete team" width="500px"/>

> If you are invited to a new team and you are the last in your current team, all team data will be transferred to your personal default workspace.

## Usage limit

You can check your usage limits within Postman. Free users can select the drop-down menu to the right of **Upgrade** in the app. Paid users can access the menu by selecting a team name.

The usage menu allows you to review limits for APIs, shared requests and history, mocks, monitors, and public documentation. Click **Resource Usage** to view your usage period.

[![usage info](https://assets.postman.com/postman-docs/Screen%20Shot%202019-11-11 at%205.38.16%20PM.png)](https://assets.postman.com/postman-docs/Screen%20Shot%202019-11-11%20at%205.38.16%20PM.png)

### How archiving works

 Postman archives collections when a free team's collaboration exceeds usage limits. Archived collections cannot be collaborated on, however they are still accessible to users. You will receive an in-app notification when a collection is archived.

[![archived message](https://assets.postman.com/postman-docs/Screen%20Shot%202019-11-11%20at%205.44.36%20PM.png)](https://assets.postman.com/postman-docs/Screen%20Shot%202019-11-11%20at%205.44.36%20PM.png)

Postman chooses which collection(s) to archive based on last edit date. The collections that have gone the longest without a revision will be archived in order to bring your team within usage limits.

Postman indicates the number of archived collections at the bottom of the left sidebar.

[![archived message](https://assets.postman.com/postman-docs/ArchiveMsg2.png)](https://assets.postman.com/postman-docs/ArchiveMsg2.png)

### Recovering your archived collections

To recover archived collections, select **Archived Collections**.

You will then be directed to your dashboard, where you can click **Download your data** > **Request data export** > **Request an archive**.
[![export data1](https://assets.postman.com/postman-docs/Recovering_ArchivedCol1.png)](https://assets.postman.com/postman-docs/Recovering_ArchivedCol1.png)

You will then be able to select **Download** to retrieve your archived data.

[![Download Data](https://assets.postman.com/postman-docs/Download_Data1.png)](https://assets.postman.com/postman-docs/Download_Data1.png)

> The `archive.json` inside the downloaded ZIP archive is not a Postman collection that can be imported; it is simply an index of files present in the archive. A collections folder contains all the files that can be imported.

Alternatively, you can download your archived data directly within Postman. To learn how, refer to [Settings](/docs/getting-started/settings/).

## Next steps

For a more in-depth introduction to workspaces and how they can help organize your API development, check out [Creating Workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/).

To see how you can share the APIs that your teams use internally, check out [Your private API Network](/docs/collaborating-in-postman/adding-private-network/).
