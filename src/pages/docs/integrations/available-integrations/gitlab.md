---
title: "GitLab"
order: 169
page_id: "gitlab"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
---

> __[Integrations are available on Postman Team, Business, and Enterprise plans.](https://www.postman.com/pricing)__

Back up your Postman Collections to GitLab, an open source Git repository manager, with the Postman to GitLab integration.

Setting up a GitLab integration requires you to get a GitLab Personal Access Token and configure how you would like to back up your collections.

## Generating a GitLab Personal Access Token

Log in to [GitLab](https://gitlab.com/).

If you don’t already have a Personal Access Token from GitLab, [generate a new one](https://gitlab.com/profile/personal_access_tokens).  

Save the generated token to use later.

![gitlab create token](https://assets.postman.com/postman-docs/gitlab-create-token.jpg)

![gitlab save token](https://assets.postman.com/postman-docs/gitlab-save-token.jpg)

## Configuring a backup for Postman Collections in GitLab

From the [Browse Integrations page](https://go.postman.co/integrations/browse?category=all) search and select Gitlab.

![gitlab search all](https://assets.postman.com/postman-docs/gitlab-search-all-bb.jpg)

You can select **View** or **View All** to see all integrations created by your team.

![gitlab add integration](https://assets.postman.com/postman-docs/gitlab-add-integration.jpg)

    The above screen provides you the following two options:

    * [Backup your Postman Collections to GitLab](#backup-your-postman-collections-to-gitlab)
    * [Backup your Postman Collections to GitLab on a custom domain](#backup-your-postman-collections-to-gitlab-on-a-custom-domain)

## Back up your Postman Collections to GitLab

Select **Add Integration** to enter your Gitlab token to start the integration.

![enter gitlab token](https://assets.postman.com/postman-docs/gitlab-backup-collection-authenticate.jpg)

Enter your GitLab Personal Access Token and select **Authenticate and Proceed**.

Choose an existing Postman Collection and your GitLab Project, and enter a filename for your backup. Select **Add Integration** to save your integration configuration.

![gitlab save configuration](https://assets.postman.com/postman-docs/gitlab-backup-collection-authenticate.jpg)

Your Collection is pushed to your GitLab project under the filename that you specified and saved as a single JSON file.

  Now every change that is saved to your Postman Collection automatically commits changes to your GitLab project in real time. Your collections and code can exist in the same repository.

  In "Advanced Options" you can enter a custom directory name or leave "Postman Collections" as the default. You can specify a branch for commit or the default branch of the repository will be used.

  ![gitlab integration configuration](https://assets.postman.com/postman-docs/gitlab-backup-collection-configuration.jpg)

## Back up your Postman Collections to GitLab on a custom domain

![gitlab custom domain](https://assets.postman.com/postman-docs/gitlab-backup-custom-domain.jpg)

Select **Add Integration** to enter your GitLab token to start the integration.

Enter your GitLab Personal Access Token, specify your Gitlab custom/self-hosted domain and select **Proceed**.

### Static IP Support

  If your network is behind a firewall that requires whitelisted IP addresses, you will need to use a static IP address to enable collection backups to GitLab on custom domains.

  Contact your IT team to whitelist the following static IP in your firewall to enable collection backups GitLab:

    * US East: 3.212.102.200

  Once you whitelist this IP address, calls for this integration will be able to connect to your network and allow the integration to work as expected.

In the **Backup your Postman Collections** page, choose an existing Postman Collection and your GitLab Project, then enter a filename for your backup.

Select **Add Integration**.

Your collection is pushed to your GitLab project under the directory that you specified and saved as a single JSON file.

![file in Gitlab project](https://assets.postman.com/postman-docs/Gitlab_CustomDomain_Collection1_gray3.jpg)

Now every change that is saved to your Postman Collection automatically commits changes to your GitLab project in real time. Your Collections and code can exist in the same repository.

![gitlab backup](https://assets.postman.com/postman-docs/WS-integrations-gitlab-backupPostToken2_gray2.jpg)

In "Advanced Options" you can enter a custom directory name or leave "Postman Collections" as the default. You can specify a branch for commit or the default branch of the repository will be used. Make sure you have write access to the branch you are trying to push your changes.

> Note that the branch you want to back up your collection to must already exist.

![gitlab advanced options](https://assets.postman.com/postman-docs/integrations-gitlab-advOptions1_gray2.jpg)

Select **Add Integrations**.

Now, you can go to your Gitlab domain and view your backed-up collections, as illustrated in the screen below:

![gitlab advanced options](https://assets.postman.com/postman-docs/Gitlab_repo1_gray3.jpg)
