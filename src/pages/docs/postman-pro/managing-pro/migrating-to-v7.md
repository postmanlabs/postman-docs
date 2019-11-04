---
title: "Migrating to Postman v7"
order: 108
page_id: "migrating_to_v7"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Installation and updates"
    url: "https://learning.getpostman.com/docs/postman/launching-postman/installation-and-updates/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Postman v7.2 Supports GraphQL"
    url: "https://blog.getpostman.com/2019/06/18/postman-v7-2-supports-graphql/?_ga=2.171965984.1078379737.1571761632-963694147.1565912089"
  - type: link
    name: "Introducing Interceptor Integration for Native Postman Apps (v7.2)"
    url: "https://blog.getpostman.com/2019/06/24/introducing-interceptor-integration-for-native-postman-apps/?_ga=2.171965984.1078379737.1571761632-963694147.1565912089"
  - type: link
    name: "Postman 7.1: Create APIs directly within the Postman App"
    url: "https://blog.getpostman.com/2019/05/17/postman-7-1-create-apis-directly-within-the-postman-app/?_ga=2.184358566.1078379737.1571761632-963694147.1565912089"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to Integrations"
    url: "https://learning.getpostman.com/docs/postman-pro/integrations/intro-integrations/"

---

This section describes the steps/flow to migrate to Postman v7.

**Note**: Non-team users can move to Postman v7 by updating the app via **Settings > Update > Check for Updates**, without worrying about the steps described in this section.

This section describes the following topics:

* [Why migrate?](#why-migrate)
* [How to migrate](#how-to-migrate)

## Why migrate?

If you are a team user, you must migrate to Postman v7 to leverage fine-grained role-based access of Postman’s features. If you stay back on the older version of Postman app, you will not be able to:

* Use role-based permissions which come with a fine-grained access management of some of Postman’s prominent features.

* Access new features and updates because new feature development will be based on Postman v7.

**Note:** Once your team migrates to Postman v7, the native apps 5.x and 6.x versions and Chrome app 5.x versions will stop syncing and all collaboration features will stop working and all members of the team need to update to their apps to Postman v7 to continue collaborating.

## How to migrate?

This section illustrates the possible user flows and guides you through the migration process. Role-based access is a team feature. To use this feature, the entire team must be on Postman v7.

**Note:** The migration decision is restricted to the team Administrators. If you are a Postman team member and are not on Postman v7, please contact your Administrator to migrate to Postman v7.

The next section explains the following scenarios:

* [Team on Postman version 5/6](#team-on-postman-version-5/6)
* [Team user on Postman v7](#team-user-on-postman-v7)

### Team on Postman version 5/6

If you are an admin, you can go to the [Postman dashboard](https://go.postman.co/settings/team/roles) and migrate to Postman v7.

[![migration to v7](https://assets.postman.com/postman-docs/Migrate2.png)](https://assets.postman.com/postman-docs/Migrate2.png)

Click **Migrate my team to v7** and Postman takes care of the next steps for you and your team.

Once your team has migrated to Postman v7, all users in the team would be notified, via email and banners within the app, that they need to update their app to Postman v7.

#### Updating app to Postman v7 after migration

You can update your Postman v6 app to Postman v7, via **Settings > Update > Check for Updates**. Postman v7 would be available via auto-updates to all team users after the admin has successfully migrated the team.

**Note:** If you are using Postman for Linux, and had installed the app via 'Ubuntu Software Center' or 'Snap Store', you will not be able to update the app via the steps explained above. Please use the following commands to update your app via the terminal:

```
sudo snap switch --channel=latest/stable postman
sudo snap refresh postman
```

### Team user on Postman v7

If you are in a team and download Postman v7 when the entire team is on an older version, you will not be able to migrate to Postman v7. Postman displays a message saying you can’t access features on this version of Postman app until the team migrates to Postman v7. If you happen to be on Postman v7 and would like to downgrade to Postman v6 to continue working with a team that has not migrated yet, please download the latest Postman v6 app from the links below.

## Download latest Postman v6 app

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
