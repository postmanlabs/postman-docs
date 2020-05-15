---
title: "GitHub"
order: 288
page_id: "github"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "https://learning.postman.com/docs/postman/collections/intro-to-collections"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog posts"
  - type: link
    name: "Backup and Sync your Postman Collections on GitHub"
    url: "https://blog.postman.com/2017/03/10/backup-and-sync-your-postman-collections-on-github/"
---

> __[Syncing API Schemas on GitHub is available with a free Postman account. You can back up your collections to GitHub on Postman Team, Business, and Enterprise plans.](https://www.getpostman.com/pricing)__

Postman allows you to back up your collections (for paid plans only) or synchronize your APIs schemas on GitHub. For each of these integrations, you'll need to [generate a GitHub personal access token](#generating-a-github-personal-access-token).

* [Backing up collections on GitHub](#backing-up-collections-on-github)
    * [Configuring GitHub integration for collections](#configuring-github-integration-for-collections)
    * [Backup collections to GitHub](#backup-collections-to-github)
    * [Backup collections to GitHub on custom domain](#backup-collections-to-github-on-custom-domain)
* [Syncing API schemas on GitHub](#syncing-your-api-schemas-on-github)
    * [Configuring GitHub integration for API schemas](#configuring-github-integration-for-api-schemas)
* [Troubleshooting GitHub Sync](#troubleshooting-github-sync)

## Generating a GitHub Personal Access Token

In order to set up an integration, you will need a GitHub Personal Access Token.

Log in to [GitHub](https://github.com/).

If you don’t already have a Personal Access Token from GitHub, [generate a new one](https://github.com/settings/tokens).

For backing up your collections, select the `repo` and the `user` scope. For syncing your API schema, select only the `repo` scope.

[![repo scope](https://assets.postman.com/postman-docs/WS-integrations-github-repo-scope.png)](https://assets.postman.com/postman-docs/WS-integrations-github-repo-scope.png)
[![user scope](https://assets.postman.com/postman-docs/WS-integrations-github-user-scope.png)](https://assets.postman.com/postman-docs/WS-integrations-github-user-scope.png)

Once that token is generated, copy it and save it somewhere for future use.
[![generated token](https://assets.postman.com/postman-docs/WS-integrations-github-generated-token.png)](https://assets.postman.com/postman-docs/WS-integrations-github-generated-token.png)

## Backing up collections on GitHub

 You can back up and sync your Postman collections with a GitHub repo. Once the integration is complete, any new changes to your collection in Postman will also appear in the repository.

 > Backing up collections on GitHub is available for Team, Business and Enterprise plans only.

### Configuring GitHub integration for collections

In the **[Integrations](https://go.postman.co/workspaces)** tab for your workspace, select Github from the list of third party Integrations.

[![github integration](https://assets.postman.com/postman-docs/integrations-github1.png)](https://assets.postman.com/postman-docs/integrations-github1.png)

Click **View Details** to see information about Github and how it can back up your Postman Collections to your designated repositories.

> You also can click the **Configured Integrations** tab to set up other integrations, view available integrations for Github, or view all integrations.

[![select github integration](https://assets.postman.com/postman-docs/GitHub_Integrations1.png)](https://assets.postman.com/postman-docs/GitHub_Integrations1.png)

The above screen provides you the following two options:

* [Backup your Postman Collections to GitHub](#backup-collections-to-gitHub)
* [Backup your Postman Collections to GitHub on a custom domain](#backup-collections-to-gitHub-on-custom-domain)

### Backup collections to GitHub

Click **Add Integration** to authorize a backup of your Postman collections, then enter your GitHub Personal Access Token and click the **Proceed button**.

[![access token](https://assets.postman.com/postman-docs/WS-integrations-github-access-token.png)](https://assets.postman.com/postman-docs/WS-integrations-github-access-token.png)

Once the token is verified, you'll be able to configure the integration.

[![configure](https://assets.postman.com/postman-docs/WS-integrations-github-configure.png)](https://assets.postman.com/postman-docs/WS-integrations-github-configure.png)

* Select a collection to back up.
* Select the repository.
* Enter the directory where the collection will be pushed. If the directory does not exist, it will be created for you. If you do not specify anything, the default directory will be `Postman Collections`.
* Enter the file name of the collection in the repository.
* Enter the branch where the collection will be pushed. This branch should already exist in your repository. If you do not specify anything, it will be pushed to the default branch of the repository.

To finish, click **Add Integration**.

> Every change saved to your Postman Collection automatically commits changes to your GitHub repo in real time.  Your Collections and code can live together in perfect harmony in the same repository.

### Backup collections to GitHub on custom domain

[![access token custom](https://assets.postman.com/postman-docs/GitHub_AccessToken_Custom_Domain.png)](https://assets.postman.com/postman-docs/GitHub_AccessToken_Custom_Domain.png)

Enter your GitHub Personal Access Token, specify your GitHub custom domain and click **Proceed**. In Backup your Postman Collections, choose an existing Postman collection, specifying your GitHub repository, a filename for your backup, and your chosen branch name.

[![github integrations screen](https://assets.postman.com/postman-docs/GitHub_Integrations3.png)](https://assets.postman.com/postman-docs/GitHub_Integrations3.png)

Click **Add Integration**. Your collection is pushed to your GitHub project under the directory that you specified and saved as a single JSON file. This is illustrated in the following screen:

[![github integrations screen](https://assets.postman.com/postman-docs/Github_Integrations6.png)](https://assets.postman.com/postman-docs/Github_Integrations6.png)

Now every change that is saved to your Postman Collection automatically commits changes to your GitHub repository in real time. Your collections and code can exist in the same repository.

> You can navigate to your GitHub repository to view your collections.

[![github integrations screen](https://assets.postman.com/postman-docs/Github_Integrations5.png)](https://assets.postman.com/postman-docs/Github_Integrations5.png)

## Syncing your API schemas on GitHub

Syncing your API schemas will enable a two-way sync between the schema stored in the GitHub repository and the schema on Postman.

### Configuring GitHub integration for API schemas

You can access the configuration for the GitHub integration [from the web dashboard](#from-the-web-dashboard) or [from the Postman app](#from-the-postman-app). Once on the configuration page, go ahead with the [configuration](#configuration).

#### From the web dashboard

Navigate to the [web dashboard](https://go.postman.co/workspaces), select the appropriate workspace, then **Integrations** at the top. On the integrations page, click **Create an integration in this workspace**, search for the GitHub tile and click **View Details**. On the next page, click **+ Add Integration** next to **Sync API schema**.

[![schema sync dashboard](https://assets.postman.com/postman-docs/schemasyncdashboard.gif)](https://assets.postman.com/postman-docs/schemasyncdashboard.gif)

#### From the Postman app

For a new API, click **APIs** in the app sidebar, then click **+ New API** at the top. Once the API is created, choose **Select from repository** in the dropdown.

For an existing API, navigate to your API by clicking **APIs** in the app sidebar, select your API from the list, then click **Connect Repository** to start configuring the integration.

[![schema sync app](https://assets.postman.com/postman-docs/schemasyncapp.gif)](https://assets.postman.com/postman-docs/schemasyncapp.gif)

#### Configuration

Enter your personal access token in the text field, select **I consent to Postman collecting and storing my GitHub Access Token**, then click **Proceed**. On the next page, select the API you want to sync with GitHub, and the GitHub repository where the schema should sync from the dropdowns, then click **Add Integration and Continue**.

> The list of your GitHub repositories may take some time to load.

On the next page you need to setup your webhook. To do so, go to the settings page of your GitHub repository, click **Webhooks**, then **Add webhook**. Copy over the `Payload URL` and `Secret` from Postman, then click **Add webhook** to confirm. Refer to the [GitHub documentation](https://developer.github.com/webhooks/creating/#setting-up-a-webhook) for more detail.

[![add webhook](https://assets.postman.com/postman-docs/addwebhook.gif)](https://assets.postman.com/postman-docs/addwebhook.gif)

Once your webhook is set up, go back to the Postman dashboard, click **Add API Version**, and select the following details:

* the API Version you want to sync - e.g. `1.0`
* the repository branch to use - e.g. `Master`
* the repository directory where you want the schema file to be saved - e.g. `api`
    * Leaving this field blank will save the schema at the root of your repository. If the folder specified doesn't exist on the repository it will be created.
* the name and extension of the schema file - e.g. `petstore.yaml`
    * If the file doesn't exist on the repository it will be created.

To finish, click **Add API Version**

[![schema sync app](https://assets.postman.com/postman-docs/schemasyncapp3.gif)](https://assets.postman.com/postman-docs/schemasyncapp3.gif)

You can sync multiple API versions by clicking **Add API Version** again. To delete an existing API version, hover over the entry, click the grey **X** to the right, then click **Remove API Version**.

> If you are linking an existing API schema on Postman to an existing schema file on GitHub, a pop-up message will appear asking which schema you want to keep. The other schema will be overwritten.

Once the integration is complete, return to the Postman app and navigate to your API. The **Connect Repository** should show the path and name of the schema file on your GitHub repository - e.g. `api/petstore.yaml`.

[![schema sync succesful](https://assets.postman.com/postman-docs/schemasyncsuccessful.png)](https://assets.postman.com/postman-docs/schemasyncsuccessful.png)

After your first schema sync, each change to the schema in Postman will appear in the repository as a new commit. Similarly, if you or someone else updates the file on the GitHub repository, the API schema on Postman will be updated.

> If changes take place on the repository while you are editing the file on Postman, a **Conflict** state will be displayed. Saving the changes on Postman will override the file on GitHub.

[![commit example github](https://assets.postman.com/postman-docs/commitexamplegithub.png)](https://assets.postman.com/postman-docs/commitexamplegithub.png)

## Troubleshooting GitHub Sync

If you're having issues with your GitHub integration and find your data isn't syncing to GitHub, please ensure that the following requirements are in place:

* The GitHub integration has been added to the same workspace as the content you're trying to push to the GitHub repo.
* The correct option has been chosen when setting up your integration and selecting __Backup your Postman Collections to GitHub__, for example if you're using a custom domain.
* Your repo has been initialized with a `Readme.md` file. Check the box __Initialize this repository with a README__ and then configure a new integration on it.
* The scopes `user` and `repo` are selected when creating the access token on GitHub.
* The branch specified in the setup already exists on Github. _The integration will not create one if the branch doesn't exist._
* You have permissions to push to the branch.
* If all else fails, try reinstalling the integration.

> If your enterprise version of GitHub is on-prem / self-hosted, this may be a firewall issue.
