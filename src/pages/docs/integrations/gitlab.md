---
title: "GitLab"
order: 289
page_id: "gitlab"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "https://learning.postman.com/docs/postman/collections/intro-to-collections"
---

> __[Integrations are available on Postman Team, Business, and Enterprise plans.](https://www.getpostman.com/pricing)__

Back up and synchronize your Postman Collections on GitLab (an open source Git repository manager) and on any of your custom domains. Your Collections are all tucked in safe and sound with the latest Postman to GitLab integration.

Setting up a GitLab integration requires you to get a GitLab Personal Access Token and configure how you would like to back up your collections.

## Generating a GitLab Personal Access Token

Log in to [GitLab](https://gitlab.com/).

If you don’t already have a Personal Access Token from GitLab, [generate a new one](https://gitlab.com/profile/personal_access_tokens).  

Save the generated token to use later.

[![gitlab create token](https://assets.postman.com/postman-docs/gitlab_create.png)](https://assets.postman.com/postman-docs/gitlab_create.png)

[![gitlab token](https://assets.postman.com/postman-docs/gitlab_token2.png)](https://assets.postman.com/postman-docs/gitlab_token2.png)

## Configuring a backup for Postman Collections in GitLab

1. In the [Integrations](https://go.postman.co/workspaces) tab for your workspace, select GitLab from the list of third party integrations.

    [![select gitlab integration](https://assets.postman.com/postman-docs/integrations-gitlab1.png)](https://assets.postman.com/postman-docs/integrations-gitlab1.png)

1. Click **View Details** to see information about GitLab and how it can back up your Postman Collections to your GitLab projects or self-hosted domains.

    **Note:** You can also click the **Configured Integrations** tab to set up other integrations, view available integrations for Gitlab, or view all integrations.

    [![gitlab add](https://assets.postman.com/postman-docs/Gitlab_Main_Backup_Page.png)](https://assets.postman.com/postman-docs/Gitlab_Main_Backup_Page.png)

    The above screen provides you the following two options:

    * [Backup your Postman Collections to GitLab](#backup-your-postman-collections-to-GitLab)
    * [Backup your Postman Collections to GitLab on a custom domain](#backup-your-postman-collections-to-gitlab-on-a-custom-domain)

## Backup your Postman Collections to GitLab

1. Click the **Add Integration** button to enter your Gitlab token to start the integration.

    [![gitlab add](https://assets.postman.com/postman-docs/GitLab_Add1.png)](https://assets.postman.com/postman-docs/GitLab_Add1.png)

1. Enter your GitLab Personal Access Token and click **Proceed**.

1. In the **Backup your Postman Collections** page, choose an existing Postman Collection and your GitLab Project,  enter a filename for your backup.

1. Click the **Add Integration** button.
Your Collection is pushed to your GitLab project under the filename that you specified and saved as a single JSON file.

    Now every change that is saved to your Postman Collection automatically commits changes to your GitLab project in real time. Your Collections and code can exist in the same repository.

   [![backup](https://assets.postman.com/postman-docs/WS-integrations-gitlab-backupPostToken2.png)](https://assets.postman.com/postman-docs/WS-integrations-gitlab-backupPostToken2.png)

    In "Advanced Options" you can enter a custom directory name or leave "Postman Collections" as the default. You can specify a branch for commit or the default branch of the repository will be used.

   [![gitlab advanced options](https://assets.postman.com/postman-docs/integrations-gitlab-advOptions1.png)](https://assets.postman.com/postman-docs/integrations-gitlab-advOptions1.png)

## Backup your Postman Collections to GitLab on a custom domain

1. Click the **Add Integration** button to enter your Gitlab token to start the integration.

   [![gitlab add](https://assets.postman.com/postman-docs/GitLab_Custom_Add1.png)](https://assets.postman.com/postman-docs/GitLab_Custom_Add1.png)

1. Enter your GitLab Personal Access Token, specify your Gitlab custom/self-hosted domain and click **Proceed**.

1. In the **Backup your Postman Collections** page, choose an existing Postman Collection and your GitLab Project, enter a filename for your backup.

1. Click **Add Integration**.
Your Collection is pushed to your GitLab project under the directory that you specified and saved as a single JSON file. This is illustrated in the following screen:

[![file in Gitlab project](https://assets.postman.com/postman-docs/Gitlab_CustomDomain_Collection1.png)](https://assets.postman.com/postman-docs/Gitlab_CustomDomain_Collection1.png)

Now every change that is saved to your Postman Collection automatically commits changes to your GitLab project in real time. Your Collections and code can exist in the same repository.

[![backup](https://assets.postman.com/postman-docs/WS-integrations-gitlab-backupPostToken2.png)](https://assets.postman.com/postman-docs/WS-integrations-gitlab-backupPostToken2.png)

In "Advanced Options" you can enter a custom directory name or leave "Postman Collections" as the default. You can specify a branch for commit or the default branch of the repository will be used. Make sure you have write access to the branch you are trying to push your changes.

> Note that the branch you want to back up your collection to must already exist.

[![gitlab advanced options](https://assets.postman.com/postman-docs/integrations-gitlab-advOptions1.png)](https://assets.postman.com/postman-docs/integrations-gitlab-advOptions1.png)

Click Add Integrations.

Now, you can go to your Gitlab domain and view your backed-up collections, as illustrated in the screen below:

[![gitlab advanced options](https://assets.postman.com/postman-docs/Gitlab_repo1.png)](https://assets.postman.com/postman-docs/Gitlab_repo1.png)
