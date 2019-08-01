---
title: "GitLab"
page_id: "gitlab"
tags: 
  - "pro"
warning: false

---

Back up and synchronize your Postman Collections on GitLab (an open source Git repository manager) and on any of your custom domains. Your Collections are all tucked in safe and sound with our latest Postman Pro to GitLab Integration. 

Setting up a GitLab integration requires you to get a GitLab Personal Access Token and configure how you would like to back up your collections. 

### Generating a GitLab Personal Access Token

Log in to [GitLab](https://gitlab.com/). 

If you don’t already have a Personal Access Token from GitLab, [generate a new one](https://gitlab.com/profile/personal_access_tokens).  

Save the generated token to use later.

[![gitlab create token](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/gitlab_create.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/gitlab_create.png)


[![gitlab token](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/gitlab_token2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/gitlab_token2.png)
<br>

### Configuring a backup for Postman Collections in GitLab

1. In the [Integrations page](https://go.postman.co/workspaces), find GitLab from Postman's list of 3rd party Integrations for Postman Pro/Enterprise.

[![select gitlab integration](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations-gitlab1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations-gitlab1.png)

<ol start="2">
  <li>Click <b>View Details</b> to see information about GitLab and how it can back up your Postman Collections to your GitLab projects or self-hosted domains.</li>
</ol>

**Note:** You also can click the **Configured Integrations** tab to set up other integrations, view available integrations for Gitlab, or view all integrations.

[![gitlab add](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Gitlab_Main_Backup_Page.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Gitlab_Main_Backup_Page.png)

The above screen provides you the following two options:

* [Backup your Postman Collections to GitLab](#backup-your-postman-collections-to-GitLab)
* [Backup your Postman Collections to GitLab on a custom domain](#backup-your-postman-collections-to-gitlab-on-a-custom-domain)

### Backup your Postman Collections to GitLab

<ol start="1">
  <li>Click the <b>Add Integration</b> button to enter your Gitlab token to start the integration.</li>
</ol>

[![gitlab add](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/GitLab_Add1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/GitLab_Add1.png)

<ol start="2">
  <li>
Enter your GitLab Personal Access Token and click <b>Proceed</b>.</li>
</ol>

<ol start="3">
  <li>In the <b>Backup your Postman Collections</b> page, choose an existing Postman Collection and your GitLab Project,  enter a filename for your backup. </li>
</ol>

<ol start="4">
  <li>Click the <b>Add Integration</b> button. 
Your Collection is pushed to your GitLab project under the filename that you specified and saved as a single JSON file.</li>
</ol>

Now every change that is saved to your Postman Collection automatically commits changes to your GitLab project in real time. Your Collections and code can exist in the same repository.

[![backup](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-gitlab-backupPostToken2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-gitlab-backupPostToken2.png)

In "Advanced Options" you can enter a custom directory name or leave "Postman Collections" as the default. You can specify a branch for commit or the default branch of the repository will be used.

[![gitlab advanced options](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations-gitlab-advOptions1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations-gitlab-advOptions1.png)


### Backup your Postman Collections to GitLab on a custom domain

<ol start="1">
  <li>Click the <b>Add Integration</b> button to enter your Gitlab token to start the integration.</li>
</ol>

[![gitlab add](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/GitLab_Custom_Add1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/GitLab_Custom_Add1.png)

<ol start="2">
  <li>
Enter your GitLab Personal Access Token, specify your Gitlab custom/self-hosted domain and click <b>Proceed</b>.</li>
</ol>

<ol start="3">
  <li>In the <b>Backup your Postman Collections</b> page, choose an existing Postman Collection and your GitLab Project, enter a filename for your backup. </li>
</ol>

<ol start="4">
  <li>Click <b>Add Integration</b>. 
Your Collection is pushed to your GitLab project under the directory that you specified and saved as a single JSON file. This is illustrated in the following screen:</li>
</ol>

[![file in Gitlab project](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Gitlab_CustomDomain_Collection1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Gitlab_CustomDomain_Collection1.png)

Now every change that is saved to your Postman Collection automatically commits changes to your GitLab project in real time. Your Collections and code can exist in the same repository.

[![backup](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-gitlab-backupPostToken2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-gitlab-backupPostToken2.png)

In "Advanced Options" you can enter a custom directory name or leave "Postman Collections" as the default. You can specify a branch for commit or the default branch of the repository will be used. Make sure you have write access to the branch you are trying to push your changes. 

[![gitlab advanced options](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations-gitlab-advOptions1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations-gitlab-advOptions1.png)

Click Add Integrations. 

Now, you can go to your Gitlab domain and view your backed-up collections, as illustrated in the screen below:

[![gitlab advanced options](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Gitlab_repo1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Gitlab_repo1.png)
