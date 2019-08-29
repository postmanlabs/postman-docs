---
title: "Managing your team"
page_id: "managing_your_team"
tags: 
  - "pro"
warning: false

---

Postman's web [dashboard](https://app.getpostman.com/dashboard/teams) provides a number of ways to manage your team.

### Member roles 

Everyone in your team is a **member**. Each member has certain **roles**, which let them perform sets of actions.

Postman supports 3 member roles:

| Roles in Postman |   Permitted actions  |
| ---   |   ---     |
| **Admin**   |    Create and delete invitations  <br>  Edit team information and logo <br>  Remove users from the team <br> Manage team roles (except billing) <br> Manage custom domains <br> Manage authentication methods <br> View monitoring usage data for all monitors created by the team <br> View team audit logs <br> Create and manage payment links <br> Use a purchase key|
| **Billing**   |   Create and manage payment links <br>  Use a purchase key <br>  Manage billing details <br>  Manage payment and payment methods <br>  Cancel and change team plan <br>  Assign billing role  |
| **Developer**   |  View all published collections in the team <br> View collections, environments, mock servers, and monitors visible to the team  <br>  View and create team workspaces <br> View team activity feed <br>  View team's custom domanins and use them to publish documentation up monitors for collections <br>   |

Teams are only charged for developer roles. If your team size is 10, you can have up to 10 members with the developer role. Any of these 10 members can have admin or billing roles as well. 

Each team can have up to 2 support accounts (only have admin or billing rights, and are not paid for).

By default, members who set up the team for themselves will be granted all three roles. If you're purchasing Postman Pro for someone else, you'll receive an invite to join the team with a billing role.

### Managing roles

An admin can modify the roles of other team members (except billing) in the [Team page](https://go.postman.co/team). 
	
  [![manage settings](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/New_InviteUsers.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/New_InviteUsers.png)
	
When an admin clicks the **Manage Roles** button, a list of team members appears. The admin selects a user and clicks the button for the new role. In the image below, the admin would click the **Billing** button to assign that role to the user. Then the admin clicks the **Done** button on the top of the page to complete the process.

  [![manage settings](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/PRO-manageRoles.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/PRO-manageRoles.png)

Keep in mind a few restrictions:

   1.  Each team can have up to 2 support accounts. (Can only have admin or billing rights, and are not paid for)
   2.  Each member must have at least one role.
   3.  You cannot assign the user role to more members than your team has paid for.

### Invites

An invite is an invitation you send to people you want to add to a team. Only admins can manage invites.

#### Inviting members to a team in Dashboard
In the [Team page](https://go.postman.co/team), click the **Invite Users** button. 

Enter the email address of the user you want to invite, and click the **Invite Users** to complete the process.

 [![invite users](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/PRO-invite-users3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/PRO-invite-users3.png)

#### Inviting members to team Workspaces in Dashboard

In the Workspace page, click on the ellipsis icon in the upper right corner. Select "Manage Members" and enter the email address or username of the user you want to **(...)** invite under the "Members" section, then press enter. When you are done adding users, click **Save Changes**. **Note:** Adding users outside the team will invite them to join the team.

[![invite via Dashboard](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs6.1update/Screen+Shot+2018-05-09+at+5.23.20+PM.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs6.1update/Screen+Shot+2018-05-09+at+5.23.20+PM.png)

#### Inviting members to team Workspaces in the Native App
Under the Workspaces dropdown click on the ellipsis **(...)** icon that appears when hovering over a team workspace and select "Manage Members". If you are in **Browse** mode, the ellipsis **(...)** icon is located in the upper right corner of the Team Workspace page, similar to the Dashboard.

 [![invite via App](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs6.1update/Screen+Shot+2018-05-09+at+2.34.21+PM.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs6.1update/Screen+Shot+2018-05-09+at+2.34.21+PM.png)

Enter the email address or username of the user you want to invite under the "Invite Members" section, then click **Add**. When you are done adding users, click **Save Changes**. **Note:** Adding users outside the team will invite them to join the team.

[![invite via App Panel](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/emailinvitereshoot.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/emailinvitereshoot.png)

#### Canceling invitations

To revoke an invitation, click the "X" link next to each invitation. You can see how many available invitations remain. The available invitations will increase by 1 for every canceled invite for the user role.

### Changing team size

If you have no more paid slots and need to invite more users, see [Changing your plan](/docs/postman_pro/managing_postman_pro/changing_your_plan/).
