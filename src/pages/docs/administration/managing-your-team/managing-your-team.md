---
title: "Managing your team"
order: 121
page_id: "managing_your_team"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Manage Large Teams in Postman with Workspaces, Permissions, and Version Control"
    url: "https://blog.postman.com/postman-team-workspaces-and-permissions/"

---

> __[Certain team options are only available on Postman Team, Business, and Enterprise plans.](https://www.postman.com/pricing)__

Postman provides a number of ways to manage your team.

## Contents

* [Member roles](#member-roles)
    * [Managing roles](#managing-roles)
* [Invites](#invites)
    * [Inviting to a team](#inviting-to-a-team)
    * [Inviting to team workspaces](#inviting-to-team-workspaces)
    * [Canceling invitations](#canceling-invitations)
* [Changing team size](#changing-team-size)
* [Next steps](#next-steps)

## Member roles

Everyone in your team is a member. Each member has certain roles, which allow them to perform various actions. These can be granted directly to users individually, or via [groups](/docs/administration/managing-your-team/user-groups/). To learn more, visit [Roles and Permissions](/docs/collaborating-in-postman/roles-and-permissions/).

### Managing roles

An admin can modify the roles of other team members individually by navigating to [Team](https://go.postman.co/team) > **Manage Roles**.

An admin can manage which team members have **Admin** and **Developer** roles. If you are on a Postman Business or Enterprise plan, an admin will also have the option of assigning a **Community Manager**.

Only a team member with the billing role can grant the **Billing** role to or remove it from other team members.

Click a role next to the corresponding member to assign and unassign roles, then **Save**.

<img alt="Manage team roles" src="https://assets.postman.com/postman-docs/manage-team-abdcm.jpg"/>

Each team member must have a minimum of one role assigned to them. Note that only team members with a billing role will be able to give other users that designation.

Teams may have two support accounts at no additional cost. Support accounts are defined as members with only admin and/or billing roles.

> Roles can also be assigned via [groups](/docs/administration/managing-your-team/user-groups/#editing-team-roles-for-a-user-group).

## Invites

Invitations are sent to individuals you opt to add to your Postman team. Only admins are able to send, delete, and resend these. However, other members of the team can request to invite members to the team. These requests must be approved by an admin. Once approved, an invite will be sent to the individual.

To allow Postman users from your company to request to join your team, [enable team discovery](/docs/collaborating-in-postman/collaboration-intro/#making-your-team-discoverable).

### Inviting to a team

Navigate to [Manage Team](https://go.postman.co/team) and select **Invite Users**. Enter the email address of the individual you would like to invite, click **Add**, then **Send invitations**.

Alternatively, you can invite users to your team via links. To do so, select **Get Link**.

<img alt="Invite users to team" src="https://assets.postman.com/postman-docs/invite-users-to-team.jpg" width="350px"/>

### Inviting to team workspaces

In a workspace, select **Invite** in the upper-right corner. Enter the name of the individuals or groups you'd like to add to the workspace, then **Send Invitations**.

> Inviting users to a workspace will add them to your Postman team if they are not already members.

<img alt="Invite users" src="https://assets.postman.com/postman-docs/invite-user-and-group-to-workspace.jpg"/>

> You can also invite individuals to a workspace by navigating to the workspace **Overview** tab, then **Sharing** in the lower-right corner.

### Canceling invitations

To revoke an invitation, navigate to [Manage Team](https://go.postman.co/team). Hover over the individual in question, then click the corresponding trash can symbol.

## Changing team size

To change your team size, see [Changing your plan](/docs/administration/billing/#changing-your-plan).

## Next steps

To find information on billing, see [Managing your billing](/docs/administration/billing/).

Learn more about the various roles that can be granted to your team members in [Roles and Permissions](/docs/collaborating-in-postman/roles-and-permissions/).
