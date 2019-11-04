---
title: "GitHub"
order: 118
page_id: "github"
tags: 
  - "pro"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "https://learning.getpostman.com/docs/postman/collections/intro-to-collections"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog posts"
  - type: link
    name: "The Importance of 3rd Party Integrations for Postman Pro"
    url: "https://blog.getpostman.com/2017/03/21/the-importance-of-3rd-party-integrations-for-postman-pro/?_ga=2.184833577.1078379737.1571761632-963694147.1565912089"
  - type: link
    name: "Backup and Sync your Postman Collections on GitHub"
    url: "https://blog.getpostman.com/2017/03/10/backup-and-sync-your-postman-collections-on-github/?_ga=2.184833577.1078379737.1571761632-963694147.1565912089"
---

Back up and synchronize your Postman Collections on GitHub (the largest host of source code in the world) and on any of your custom GitHub domains. Your Collections are all tucked in safe and sound with our latest Postman Pro to GitHub Integration.

Setting up a GitHub integration requires you to get a GitHub Personal Access Token and configure how you would like to back up your collections.

## Generating a GitHub Personal Access Token

Log in to [GitHub](https://github.com/).

If you don’t already have a Personal Access Token from GitHub, [generate a new one](https://github.com/settings/tokens).

We need the `repo` and the `user` scope in order to successfully configure the integration.

[![repo scope](https://static.getpostman.com/postman-docs/WS-integrations-github-repo-scope.png)](https://static.getpostman.com/postman-docs/WS-integrations-github-repo-scope.png)
[![user scope](https://static.getpostman.com/postman-docs/WS-integrations-github-user-scope.png)](https://static.getpostman.com/postman-docs/WS-integrations-github-user-scope.png)

Once that token is generated, copy it and save it somewhere for future use.
[![generated token](https://static.getpostman.com/postman-docs/WS-integrations-github-generated-token.png)](https://static.getpostman.com/postman-docs/WS-integrations-github-generated-token.png)

## Configuring GitHub Integration

1. In the **[Integrations](https://go.postman.co/workspaces)** page, find Github from a list of Postman's 3rd party Integrations for Postman Pro users.

[![github integration](https://static.getpostman.com/postman-docs/integrations-github1.png)](https://static.getpostman.com/postman-docs/integrations-github1.png)

1. Click **View Details** to see information about Github and how it can back up your Postman Collections to your designated repositories.

    You also can click the **Configured Integrations** tab to set up other integrations, view available integrations for Github, or view all integrations.

[![select github integration](https://static.getpostman.com/postman-docs/GitHub_Integrations1.png)](https://static.getpostman.com/postman-docs/GitHub_Integrations1.png)

    The above screen provides you the following two options:

    * [Backup your Postman Collections to GitHub](#backup-collections-to-gitHub)
    * [Backup your Postman Collections to GitHub on a custom domain](#backup-collections-to-gitHub-on-custom-domain)

## Backup Collections to GitHub

1. Click the **Add Integration** button to authorize a backup of your Postman collections.

1. Enter your GitHub Personal Access Token and click the **Proceed button**.

[![access token](https://static.getpostman.com/postman-docs/WS-integrations-github-access-token.png)](https://static.getpostman.com/postman-docs/WS-integrations-github-access-token.png)

1. Once the token is verified, you will be shown the configuration page to configure the integration.

[![configure](https://static.getpostman.com/postman-docs/WS-integrations-github-configure.png)](https://static.getpostman.com/postman-docs/WS-integrations-github-configure.png)

    * Select a collection to back up.
    * Select the repository.
    * Enter the directory where the collection will be pushed. If the directory does not exist, it will be created for you. If you do not specify anything, the default directory will be `Postman Collections`.
    * Enter the file name of the collection in the repository.
    * Enter the branch where the collection will be pushed. This branch should already exist in your repository. If you do not specify anything, it will be pushed to the default branch of the repository.

1. Click the **Add Integration** button.

    Every change saved to your Postman Collection automatically commits changes to your GitHub repo in real time.  Your Collections and code can live together in perfect harmony in the same repository.

## Backup Collections to GitHub on custom domain

[![access token custom](https://static.getpostman.com/postman-docs/GitHub_AccessToken_Custom_Domain.png)](https://static.getpostman.com/postman-docs/GitHub_AccessToken_Custom_Domain.png)

1. Enter your GitHub Personal Access Token, specify your GitHub custom domain and click **Proceed**.

1. In the **Backup your Postman Collections** page, choose an existing Postman Collection, your GitHub repository, specify a file name for your backup and enter the name of the branch.

[![github integrations screen](https://static.getpostman.com/postman-docs/Github_Integrations3.png)](https://static.getpostman.com/postman-docs/Github_Integrations3.png)

1. Click **Add Integration**.
Your Collection is pushed to your GitHub project under the directory that you specified and saved as a single JSON file. This is illustrated in the following screen:

[![github integrations screen](https://static.getpostman.com/postman-docs/Github_Integrations6.png)](https://static.getpostman.com/postman-docs/Github_Integrations6.png)

    Now every change that is saved to your Postman Collection automatically commits changes to your GitHub repository in real time. Your Collections and code can exist in the same repository.

    You can navigate to your GitHub repository and view your collections, as illustrated in the screen below:

[![github integrations screen](https://static.getpostman.com/postman-docs/Github_Integrations5.png)](https://static.getpostman.com/postman-docs/GitHub_Integrations5.png)
