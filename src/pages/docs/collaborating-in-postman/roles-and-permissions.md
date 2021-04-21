---
title: "Defining roles"
order: 72
page_id: "roles_and_permissions"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Working with your team"
    url: "/docs/collaborating-in-postman/collaboration-intro/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Streamline access control with extended roles & permissions"
    url: "https://blog.postman.com/streamline-access-control-with-extended-roles-permissions/"
  - type: link
    name: "Manage large teams in Postman with workspaces, permissions & more"
    url: "https://blog.postman.com/postman-team-workspaces-and-permissions/"
---

> Certain team options are only available on **[Postman Team, Business, and Enterprise plans](https://www.postman.com/pricing)**. To see which roles are available on your plan, go to your **[web dashboard](https://go.postman.co/settings/team/roles)**.

In Postman you can assign roles and permissions to provide access control.

## Contents

* [Roles in Postman](#roles-in-postman)

    * [Team roles](#team-roles)

    * [Workspace roles](#workspace-roles)

    * [API roles](#api-roles)

    * [Collection roles](#collection-roles)

* [Managing roles and permissions](#managing-roles-and-permissions)

* [Roles FAQ](#roles-faq)

* [Next steps](#next-steps)

## Roles in Postman

As a team admin, you have the power to define Postman access at the team level. You can utilize Postman's role-based access control system to limit visibility of team resources, define your development workflow, and provide access to administrative personnel. Team members with the billing role can modify who else has billing roles at the team level.

Workspace admins can modify the admin and collaborator roles for the workspace. Editors of particular elements (APIs, collections, environments, monitors, and mock servers) can modify the editor and viewer role on the element.

With these roles, you and your teammates can manage access for each individual, or, if you are on a [Postman Enterprise plan](https://www.postman.com/pricing), for [groups](/docs/administration/managing-your-team/user-groups/).

### Team roles

You can [assign](/docs/administration/managing-your-team/managing-your-team/) one or more role types to team members: **Admin**, **Billing**, and **Developer**. If you are on a [Postman Business or Enterprise plan](https://www.postman.com/pricing), you will also have the option of assigning a **Community Manager**.

* **Admin**: manage team members and team settings
* **Billing**: manage team plan and payments
* **Developer**: access team resources and workspaces
* **Community Manager**: manage public visibility of workspaces and team profile (Business and Enterprise plans only)

Each user must have at least one role attached to them, and can hold multiple roles simultaneously.

Team roles provide high-level access control:

| Permission | Admin | Billing | Developer | Community Manager |
| --- |:---:| --- | --- | --- |
| Add users | &#x2714; | | |
| Remove users | &#x2714; | | |
| Manage team Admins and Developers | &#x2714; | | |
| Manage SSO | &#x2714; || |
| Manage custom domains  | &#x2714; | | |
| View audit logs  | &#x2714; | | | &#x2714;
| View usage data | &#x2714; | &#x2714; | &#x2714; | &#x2714;
| Manage Billing members | | &#x2714; | |
| Manage payment | | &#x2714; | | |
| Change plan  | | &#x2714; | |
| View shared APIs, collections, environments, mock servers and monitors | | | &#x2714; | &#x2714;
| View and create team workspaces | | | &#x2714; | &#x2714;
| Change visibility of workspaces to team or public | | | &#x2714;&ast; | &#x2714;
| Approve requests to change workspace visibility&ast;&ast; | | | | &#x2714;
| Enable public team profile | &#x2714; | | | &#x2714;

&ast; On Postman Team and Free plans, any developer can change visibility of workspaces

&ast;&ast; Enterprise and Business plans only

### Workspace roles

You can [assign](/docs/administration/managing-your-team/managing-your-team/) two role types in Postman workspaces: **Admin** and **Collaborator**.

* **Admin**: manage workspace details and members
* **Collaborator**: work on team resources in a workspace

The following roles control access at a workspace level:

| Action | Admin | Collaborator |
| --- | --- | --- |
| Create workspaces | &#x2714; | &#x2714; |
| Delete workspaces | &#x2714; | |
| Edit workspace details | &#x2714; | |
| Join and leave workspaces | &#x2714; | &#x2714; |
| Add members | &#x2714; | &#x2714; |
| Remove members | &#x2714; | |
| Manage workspace roles | &#x2714; | |
| Manage workspace visibility | &#x2714; | |
| Add and remove APIs, collections, and environments | &#x2714; | &#x2714; |
| Manage integrations | &#x2714; | &#x2714; |
| Add monitors and mock servers | &#x2714; | &#x2714; |

### API roles

You can [assign](/docs/administration/managing-your-team/managing-your-team/) two role types in Postman APIs: **Editor** and **Viewer**.

* **Editor**: edit APIs directly
* **Viewer**: view, fork, and export APIs

The following roles control access at an API level:

| APIs |   Editor   | Viewer |
| ---   |   ---     | ---   |
| Edit and delete APIs |  &#x2714;     |     |
| Manage roles on APIs  |  &#x2714;   |   |
| Share APIs  |   &#x2714;   | &#x2714;   |
| Comment on APIs |   &#x2714;   | &#x2714;   |
| Create new API versions |  &#x2714;   |    |
| Update schema |  &#x2714;   |    |
| Generate collections from the schema |   &#x2714;  | &#x2714;   |
| View reports for APIs |   &#x2714;  | &#x2714;   |
| Add and remove API environments |   &#x2714;  | &#x2714;   |
| Add and remove API documentation |   &#x2714;  | &#x2714;   |
| Add and remove API test suites, integration tests, and contract tests |   &#x2714;  | &#x2714;   |
| Add and remove API monitors |   &#x2714;  | &#x2714;   |
| Add and remove API mock servers |   &#x2714;  | &#x2714;   |

### Collection roles

You can [assign](/docs/administration/managing-your-team/managing-your-team/) two role types in Postman collections: **Editor** and **Viewer**.

* **Editor**: edit collections directly
* **Viewer**: view, fork, and export collections

The following roles control access at a collection level:

| Collections |  Editor  | Viewer |
| ---   |   ---     | ---   |
| Edit and delete collections |    &#x2714;   |     |
| Manage roles on collections  |  &#x2714;   |   |
| Export collections  |   &#x2714;   | &#x2714;   |
| Fork collections |   &#x2714;   | &#x2714;   |
| Merge forks on collections  |    &#x2714;     |    |
| Publish collection documentation and add to API Network  |   &#x2714;  |   |
| Share collections to a different workspace  |  &#x2714;  | &#x2714;   |
| Tag and restore collection versions   |  &#x2714;   |   |
| Add, edit, and delete mock servers  |    &#x2714;      |   |
| Add, edit, and delete monitors |    &#x2714;   |     |

## Managing roles and permissions

To manage team roles, see [Managing roles](/docs/administration/managing-your-team/managing-your-team/).

## Roles FAQ

* **Our only team member with billing/admin permissions left - what can I do?**  
Contact us via our [Support Center](https://support.getpostman.com/) for assistance.

* **I'm an admin, why can't I assign the billing role?**  
Billing roles can only be granted by a fellow team member with a billing role. If this is not possible, contact us via our [Support Center](https://support.getpostman.com/) for assistance.

* **Is there a "Super Admin" role?**  
A "Super Admin" role is being considered for development. You can track progress and upvote [this issue on GitHub](https://github.com/postmanlabs/postman-app-support/issues/6102) to show your support.

* **Our colleague left the organization, how can we access their collections?**  
You can remove a former colleague from your Postman team via your [dashboard](https://go.postman.co/team). When a collection owner is removed from your team, ownership of their shared collections is transferred to fellow team members and these collections will continue to exist in your Postman team.

* **What are "support" roles?**  
A support-only account is one that holds an admin and/or billing role, but is not a developer.
Teams can have up to two support-only accounts.

## Next steps

Learn more about [Working with your team](/docs/collaborating-in-postman/collaboration-intro/).
