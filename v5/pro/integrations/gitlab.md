---
title: "GitLab"
page_id: "gitlab"
tags: 
  - "pro"
warning: false

---

Back up and synchronize your Postman Collections on GitLab, an open source Git repository manager. Your Collections are all tucked in safe and sound with our latest Postman Pro to GitLab Integration.

Setting up a GitLab integration requires you to get a GitLab Personal Access Token and configure how you would like to back up your collections. 

### Generating a GitLab Personal Access Token

Log in to [GitLab](https://gitlab.com/). 

If you don’t already have a Personal Access Token from GitLab, [generate a new one](https://gitlab.com/profile/personal_access_tokens).  

Save the generated token to use later.

[![gitlab create token](https://assets.postman.com/postman-docs/gitlab_create.png)](https://assets.postman.com/postman-docs/gitlab_create.png)


[![gitlab token](https://assets.postman.com/postman-docs/gitlab_token2.png)](https://assets.postman.com/postman-docs/gitlab_token2.png)
<br>
### Configuring a backup for Postman Collections in GitLab

1. In the [Integrations page](https://go.postman.co/workspaces), find GitLab from a list of Postman's 3rd party Integrations for Postman Pro users.

[![select gitlab integration](https://assets.postman.com/postman-docs/integrations-gitlab1.png)](https://assets.postman.com/postman-docs/integrations-gitlab1.png)

<ol start="2">
  <li>Click the <b>View Details</b> button to see information about GitLab and how it can back up your Postman Collections to your GitLab projects.</li>
</ol>

You also can click the **Configured Integrations** tab to set up other integrations, view available integrations for Gitlab, or view all integrations.

[![gitlab add](https://assets.postman.com/postman-docs/integrations-gitlab-configIntegrations1.png)](https://assets.postman.com/postman-docs/integrations-gitlab-configIntegrations1.png)

<ol start="3">
  <li>Click the <b>Add Integration</b> button to enter your Gitlab token to start the integration.</li>
</ol>

[![gitlab add](https://assets.postman.com/postman-docs/integrations-gitlab-token1.png)](https://assets.postman.com/postman-docs/integrations-gitlab-token1.png)

<ol start="4">
  <li>
Enter your GitLab Personal Access Token and click the <b>Proceed button</b>.</li>
</ol>

<ol start="5">
  <li>In the <b>Backup your Postman Collections</b> page, choose an existing Postman Collection and your GitLab Project,  enter a filename for your backup. </li>
</ol>

<ol start="6">
  <li>Click the <b>Add Integration</b> button. 
Your Collection is pushed to your GitLab project under the filename that you specified and saved as a single JSON file.</li>
</ol>

Now every change that is saved to your Postman Collection automatically commits changes to your GitLab project in real time. Your Collections and code can exist in the same repository.

[![backup](https://assets.postman.com/postman-docs/integrations-gitlab-backupPostToken2.png)](https://assets.postman.com/postman-docs/integrations-gitlab-backupPostToken2.png)

In "Advanced Options" you can enter a custom directory name or leave "Postman Collections" as the default. You can specify a branch for commit or the default branch of the repository will be used.

[![gitlab advanced options](https://assets.postman.com/postman-docs/integrations-gitlab-advOptions1.png)](https://assets.postman.com/postman-docs/integrations-gitlab-advOptions1.png)



