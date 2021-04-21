---
title: "Upgrading your team to the current version of Postman"
order: 140.1
page_id: "upgrading_to_v8"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Installing and updating"
    url: "/docs/getting-started/installation-and-updates/"

---
This section describes the steps to migrate your team to Postman v8.

## Migrating to Postman v8

[Postman v8](https://blog.postman.com/introducing-postman-desktop-app/) provides a consistent, improved API development experience. It offers [universal search](/docs/getting-started/navigating-postman/#universal-search) across all of Postman, including Public and Private API Networks, plus you can work on public workspaces directly through the desktop app. With v8, the Postman desktop app and [Postman on the web](https://community.postman.com/t/whats-new-in-postman-for-the-web/18203) are equally empowering—which one you use is a matter of preference for your workflows.

* [Upgrading to Postman v8](#upgrading-to-postman-v8)
    * [Upgrading to v8 as an individual](#upgrading-to-v8-as-an-individual)
    * [Upgrading to v8 as a team](#upgrading-to-v8-as-a-team)
* [Migrating from v6 to Postman v8](#migrating-from-v6-to-postman-v8)
    * [Migrating from v6 as an individual](#Migrating-from-v6-as-an-individual)
    * [Migrating from v6 as a team](#Migrating-from-v6-as-a-team)
* [Installing earlier versions of Postman](#installing-earlier-versions-of-Postman)
    * [Downloading Postman v7](#downloading-postman-v7)
    * [Downloading Postman v6](#downloading-postman-v6)

## Upgrading to Postman v8

### Upgrading to v8 as an individual

Non-team users can move from Postman v7 to v8 by updating the app via **Settings** > **Update** > **Download update**.

<img alt="Settings Update" src ="https://assets.postman.com/postman-docs/settings-update-v7-to-v8.jpg"/>

It is important to verify your work is synced to make sure no data is lost during the update. Click __Verify Sync__.

<img alt="Verify Sync modal" src ="https://assets.postman.com/postman-docs/verify-sync-before-updating-v8.jpg" width="450px"/>

Once your work is synced, you can update to Postman v8. Click __Update to v8__.

<img alt="Work in Sync modal" src ="https://assets.postman.com/postman-docs/sync-update-confirmed-v8.jpg" width="450px"/>

You will need to restart Postman to install the update. Click __Restart and Install Update__.

<img alt="Restart and install modal" src ="https://assets.postman.com/postman-docs/restart-and-install-update-v8.jpg" width="450px"/>

You can start using Postman v8 and access the new UI and features once the update is completed.

### Upgrading to v8 as a team

Team members on v7 can upgrade to v8 by updating the app via **Settings** > **Update** > **Download update**. You do not need an approval from an admin to upgrade from v7 to v8.

> If you are on a team and download Postman v8 while the rest of your team is using an older version of Postman v7, you will still be able to use v8—syncing and collaboration will not be affected.

## Migrating from v6 to Postman v8

Migration is required if team members are using Postman v6 or below. If you are a team user on v6 or below, you must migrate to Postman v8 to leverage access to [public workspaces](https://blog.postman.com/public-workspaces-why-we-created-them-what-you-can-do/) and [v8 features](https://blog.postman.com/introducing-postman-desktop-app/). If you remain on an older version of Postman, you will not be able to:

* Use role-based permissions which come with a fine-grained access management of some of Postman’s prominent features.

* Access new features and updates because new feature development will be based on [Postman v8](https://www.postman.com/downloads/release-notes/).

> Once your team migrates to Postman v7 or above, the native apps 5.x and 6.x versions and Chrome app 5.x versions will stop syncing. All [collaboration features](/docs/collaborating-in-postman/collaboration-intro/) will stop working and all members of the team need to update their apps to Postman v7 or above to continue collaborating.

**Note:** The migration decision is restricted to the team admin. If you are a Postman team member(non-admin) and are not on Postman v8, please contact your admin to migrate to Postman v8.

<img alt="non-admin user" src="https://assets.postman.com/postman-docs/non-admin-migrate-v8.jpg"/>

### Migrating from v6 as an individual

Non-team users can move from Postman v6 to v8 by updating the app via **Settings** > **Update** > Click **Download update**.

First, you need to update your Postman app from v6 to v7.36.5.

<img alt="Migrate v6 to v7.35.6" src="https://assets.postman.com/postman-docs/migrate-v6-to-v7.36.5.jpg"/>

Once the update is complete, you will be on Postman v7.36.5. This is the gateway version to update to v8. See [upgrading to v8](#upgrading-from-v7-to-v8) to update your app to Postman v8.

### Migrating from v6 as a team

If you are an admin, it is recommended you upgrade your team to v8 at your earliest convenience, however you must upgrade your team as a whole. Click **Migrate my team** to notify team members to upgrade their Postman app immediately, or opt to migrate your team later on.

<img alt="migrate to v8" src ="https://assets.postman.com/postman-docs/admin-migrate-v8.jpg"/>

Once your team has migrated to Postman v8, all users in the team would be notified, via email and banners within the app, that they need to update their app to Postman v8.

> If you are on a team and download Postman v7 or above while the rest of your team is using an older version of Postman v6 or below, you will not be able to use Postman v7 or above. [Download Postman v7](#downloading-postman-v7-app) or [download Postman v6](#downloading-postman-v6-app) to continue working with your team in the interim.

## Installing earlier versions of Postman

If you happen to be on Postman v8 or below and would like to downgrade to Postman v7 or below to continue working with a team that has not migrated yet, please download the earlier versions of Postman app from the links below.

### Downloading Postman v7

Please use the following links to download the latest Postman v7 version for your platform.

* [Download Postman v7 for macOS 64-bit](https://go.pstmn.io/dl-macos64-v7-latest)
* [Download Postman v7 for Windows 64-bit](https://go.pstmn.io/dl-win64-v7-latest)
* [Download Postman v7 for Windows 32-bit](https://go.pstmn.io/dl-win32-v7-latest)
* [Download Postman v7 for Linux 64-bit](https://go.pstmn.io/dl-linux64-v7-latest)

**Note:** If you are using Postman for Linux, and had installed the app via 'Ubuntu Software Center' or 'Snap Store', please use the following commands to switch to Postman v7.

```
sudo snap switch --channel=v7/stable postman
sudo snap refresh postman
```

### Downloading Postman v6

Please use the following links to download the latest Postman v6 version for your platform.

* [Download Postman v6 for macOS 64-bit](https://go.pstmn.io/dl-macos64-v6-latest)
* [Download Postman v6 for Windows 64-bit](https://go.pstmn.io/dl-win64-v6-latest)
* [Download Postman v6 for Windows 32-bit](https://go.pstmn.io/dl-win32-v6-latest)
* [Download Postman v6 for Linux 64-bit](https://go.pstmn.io/dl-linux64-v6-latest)
* [Download Postman v6 for Linux 32-bit](https://go.pstmn.io/dl-linux32-v6-latest)

**Note:** If you are using Postman for Linux, and had installed the app via 'Ubuntu Software Center' or 'Snap Store', please use the following commands to switch to Postman v6.

```
sudo snap switch --channel=v6/stable postman
sudo snap refresh postman
```

You can update your Postman v6 app to Postman v7, see [How to update your Postman app to v7](#migrating-from-v6-as-an-individual). Postman v7 would be available via auto-updates to all team users after the admin has successfully migrated the team.
