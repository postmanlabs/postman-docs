---
title: "Syncing"
order: 8
page_id: "syncing"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://getpostman.com/apps"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "HotelBeds"
    url: "https://www.postman.com/case-studies/Hotelbeds.pdf"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman Cloud"
    url: "https://www.youtube.com/watch?v=ccdxr0oJR-I"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Backup and Sync your Postman Collections on GitHub"
    url: "https://blog.postman.com/2017/03/10/backup-and-sync-your-postman-collections-on-github/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Sending your first request"
    url: "/docs/postman/launching-postman/sending-the-first-request"

warning: false

---

## What is Syncing?

Syncing makes all your Postman data available when you're signed in to your Postman account.

Changes, such as edits, additions, or deletions, sync across all devices that are linked to your account.

These entities can sync with the server and be saved to the cloud:

* Collections
* Folders
* Requests
* Responses
* Header Presets
* Environments
* Environment variables
* Global variables
* Collection run results
* Workspaces
* History

## How do I Sync between computers?

Install the [Postman app](https://www.postman.com/downloads/) and sign in with the same email address or username on all your devices.

If you forget your username or password, you can recover your username and reset your password when you click the links near the signin prompt.

Once you log in to Postman app, your data gets synced across all devices. Postman automatically ensures your data is the same no matter from where you access. No further settings are required.

**Note:** Postman restricts parallel usage to three apps per account.

### States

If your app is in sync with the server, the icon to the left of your name in the top navigation appears orange, and displays **IN SYNC**.

If a sync operation is underway, it displays **SYNCING**.

If you are not signed in to the app, you see **OFFLINE**.

When you open the app or if your connection drops, it displays **CONNECTING** before it starts to sync.

[![sync icon in header](https://assets.postman.com/postman-docs/Sync-Screen.png)](https://assets.postman.com/postman-docs/Sync-Screen.png)

> You may occasionally experience sync conflicts between your app and the Postman servers, particularly when you work as part of a team: [Postman will prompt you to resolve any conflicts that occur](/docs/postman/workspaces/conflicts/)

## Sign Out

If you choose to sign out, Postman deletes your data from the local instance of the app.

Don’t worry, Postman restores all your data from the cloud when you sign in, and enables other users to use the app without your data clashing.

When you reload the app, Postman automatically retrieves the most recent and up-to-date version of your collections.

**Note:** If you don't intend to sync, you must export your data and then signout. However, if you need to delete already synced data, then you must delete your account. Note that you must leave the team first in order for you to delete your account. If you are a member of a team, click [here](https://go.postman.co/settings/me/team) to exit the team.  

## Deleting your Postman account

If you have a Postman account and are not part of a Postman team, you can [delete your account](https://go.postman.co/settings/me).

Otherwise, you can contact us at [help@postman.com](mailto:help@postman.com).

[![delete account](https://assets.postman.com/postman-docs/WS-syncing-deleteAccount.png)](https://assets.postman.com/postman-docs/WS-syncing-deleteAccount.png)
