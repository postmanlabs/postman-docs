---
title: "Migrating data between teams"
order: 128
page_id: "team-merge"
warning: false
contextual_links:
  - type: section
    name: "Next Steps"
  - type: link
    name: "Configuring SSO"
    url: "/docs/administration/sso/admin-sso/"
  - type: link
    name: "Managing your team"
    url: "/docs/administration/managing-your-team/managing-your-team/"
  - type: link
    name: "Manage Large Teams in Postman with Workspaces, Permissions, and Version Control"
    url: "/docs/administration/sso/admin-sso/"

---

Team migration is required when you consolidate one or more Postman teams into a single (typically company-authorized) account. There are several reasons for having a company-authorized Postman account (or team) including security, the ability for a company to better oversee its intellectual property, and to give users the benefit of a robust paid plan.

Team migration can occur in different ways depending on your needs and preferred outcomes.

## Contents

* [Who can perform team migration](#who-can-perform-team-migration)
* [Before you start migrating](#before-you-start-migrating)
* [Migrating your data](#migrating-your-data)
    * [Choosing centralized migration](#choosing-centralized-migration)
    * [Choosing distributed migration](#choosing-distributed-migration)
    * [Performing centralized migration](#performing-centralized-migration)
    * [Performing distributed migration](#performing-distributed-migration)
* [Migration FAQs](#migration-faqs)
* [Next steps](#next-steps)

## Who can perform team migration

* All plan types (Free, Team, Business, and Enterprise)
* [Team admins and team developers](/docs/collaborating-in-postman/roles-and-permissions/#team-roles)
* Information Technology / System Administrator for [Single Sign-On provisioning](/docs/administration/sso/intro-sso/) (available to [Business and Enterprise plans](https://www.postman.com/pricing/))

## Before you start migrating

* Make sure you understand [role-based access control](/docs/collaborating-in-postman/roles-and-permissions/) at a [team](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), [workspace](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles), and [collection](/docs/collaborating-in-postman/roles-and-permissions/#collection-roles) level.
* Determine what type of [export option](#migrating-your-data) is right for your company.
* Understand [what data is and is not exported](#migrating-your-data) in a [data-dump](/docs/getting-started/importing-and-exporting-data/#exporting-data-dumps).
* [Read the migration FAQs](#migration-faqs).

## Migrating your data

You can choose either [centralized](#centralized-migration) or [distributed](#distributed-migration) migration to export your team data.

> As a precautionary measure prior to migrating data, admins and team members are strongly encouraged to perform a [JSON data dump backup through a bulk export](/docs/getting-started/importing-and-exporting-data/#exporting-data-dumps).

### Choosing centralized migration

You can only choose centralized migration with an **Admin** account.

With centralized migration, you will export a large JSON file of collections, environments, globals, and header presets.

You can bulk export your admin personal workspaces or your personal workspaces plus the workspaces of any team you have joined.

You ___should___ choose centralized migration if the following conditions apply:

* Your organization prefers to have one person perform the migration.

You should ___not___ choose distributed migration if your organization relies on the following:

* Postman-published documentation–URLs would need to be republished from your new team instance.
* Mocks and monitors—you would need to recreate these.
* Your team members have a lot of important content in their personal workspaces that must be transferred.

See [performing centralized migration](#performing-centralized-migration) to choose this option.

### Choosing distributed migration

You can carry out distributed migration with any type of Postman account.

You can export your personal workspace and shared workspaces for any team you have joined and can choose to only export collections from a specific workspace. See [exporting data](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#exporting-postman-data) for detail.

If you have an individual account and are not part of a team, but want to maintain your current account while migrating company data to an authorized team, you can [export specific data](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#exporting-postman-data) or [export a dump of all data](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#exporting-data-dumps).

If you have a personal account and want to disable it and join an authorized team, you can accept the team invite and all personal Postman data will be transferred to to your new team automatically.

You ___should___ choose distributed migration if the following conditions apply:

* Your organization has workspaces that have dedicated workspace admins with numerous collections.
    * Workspace admins can export any relevant collections and environments into the new team workspace.
* You are a single user and want to disable your existing account or move company data from personal account to the authorized team.

> Recreating mocks, monitors, and documentation on the new team may be carried out by those who are responsible for maintaining it.

You should ___not___ choose distributed migration if your organization is unable to do the following:

* Determine ownership of workspaces, collections, and other data that may be important and would otherwise be lost if no one takes responsibility for migrating it.
* Create the necessary communication channels that would allow you to understand when everyone has migrated.

See [performing distributed migration](#performing-distributed-migration) to choose this option.

### Performing centralized migration

* The appointed admin on the old team should inherit ownership of all shared collections. To do this they can [join the existing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#joining-workspaces).
    * Data from team workspaces you have not joined will not be present in the export.
    * By default, the person who imports a collection or environment is automatically assigned the Editor role (see more about [roles](/docs/collaborating-in-postman/roles-and-permissions/)). Everyone else on the team will be assigned as Viewer.
* [Export all data](#what-data-is-exported-in-a-large-JSON-file-data-dump?) at once via a [JSON data dump](/docs/getting-started/importing-and-exporting-data/#exporting-data-dumps).
* The appointed admin can then [re-import into the new team](/docs/getting-started/importing-and-exporting-data/#importing-data-into-postman).
    * All collections included in the data dump will be imported into your currently selected workspace.
* When your new team is ready for team members to join, the admin on the new team can send invitations to all other team members. The invite link will prompt them to leave their current team to join the new team.
* At this point, you can [re-share and organize collections into team workspaces](/docs/collaborating-in-postman/sharing/#sharing-to-workspaces) as you see fit.
* Once the last team member and data from your old team have migrated to your new one, your old team will disable and you can begin [collaborating](https://www.youtube.com/watch?v=0hPUzjM-Cc8).

### Performing distributed migration

* Your team members should export their collections and environments prior to moving to your new team. You can use this as an opportunity to clean up and reorganize your workspaces.
* Team members can join your new team and re-import collections and environments into their respective team workspaces, creating new workspaces where necessary.
    * By default, the person who imports a collection or environment is automatically assigned the Editor role (see more about [roles](/docs/collaborating-in-postman/roles-and-permissions/)). Everyone else on the team will be assigned as a Viewer.
* Once the last team member and data from your old team have migrated to your new one, your old team will automatically disable and you can begin [collaborating](https://www.youtube.com/watch?v=0hPUzjM-Cc8).
    * If you change your old team email to a non-company domain email (for example Gmail, Yahoo, etc), your old team will continue indefinitely. You can keep a personal account with your current data and use a work email for a work account. Keeping both accounts in use can help when you migrate data.
    * Please keep in mind items that will need to be recreated (monitors, mocks, etc).

## Migration FAQs

* **I'm on a free account, what happens to my personal collections once I join a new team?**
As long as you are synced to the Postman cloud, the organizational structure of your personal workspace (collections and environments) will be carried over into the new team. Anything that has been shared to a team workspace will remain with the old team after you leave, meaning you will lose access to it. If you experience any issues when joining a new team [contact Postman support](https://www.postman.com/support/).

* **Can I be on two teams at once?**
No, each account can be on one Postman team at a time. Multi-team collaboration and guest accounts are on [Postman's roadmap](https://trello.com/b/4N7PnHAz/postman-roadmap-for-developers).

* **What happens to published documentation from my previous team?**
Your previous links will break since the old team is disabled. New documentation URLs will need to be generated when collections are [republished from your new team pages](/docs/publishing-your-api/publishing-your-docs/). If you are [publishing to a custom domain](/docs/publishing-your-api/custom-doc-domains/), unpublish and remove the domain from your original team in order to add it to your new team and republish.

* **What happens to the old team once everyone leaves?**
Once the last person has left, the team is automatically disabled. If there is only one admin remaining on the team, they will automatically inherit all the team workspaces data (collections and environments) and can perform the bulk export.

* **Will my monitors / mocks transfer over?**
No, you will need to [recreate any monitors](/docs/designing-and-developing-your-api/monitoring-your-api/setting-up-monitor/) and [mocks](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) in your new team.

* **What data is exported in a large JSON file data-dump?**
All collections in your personal workspace and any workspaces that you have joined, in addition to environments, globals, and header presets, are included when you [export a data-dump](/docs/getting-started/importing-and-exporting-data/#exporting-data-dumps).

* **What data does NOT get exported?** You will need to [reassign roles (workspace, collection, and environment level)](/docs/collaborating-in-postman/roles-and-permissions/), [recreate workspaces](/docs/collaborating-in-postman/collaboration-intro/#creating-a-new-workspace-from-the-menu), [recreate monitors](/docs/designing-and-developing-your-api/monitoring-your-api/setting-up-monitor/), [recreate mocks](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/), [re-import API schemas](/docs/getting-started/importing-and-exporting-data/#importing-api-specifications), and [republish documentation from your new team pages](/docs/publishing-your-api/publishing-your-docs/).

> Reach out to [Postman support](https://www.postman.com/support/) if you have any questions or run into any issues setting up Postman for your team.

## Next Steps

[Configure SSO](/docs/administration/sso/admin-sso/) if you are subscribed to a Postman Business or Enterprise plan.

Learn how to [manage your team roles, invite team members to workspaces, and adjust your team size](/docs/administration/managing-your-team/managing-your-team/).
