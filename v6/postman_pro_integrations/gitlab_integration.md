---

title: "GitLab Integration"
page_id: "gitlab_integration"
tags: 
  - "cloud"
warning: false
---

**Backup your Postman Collections to your GitLab projects**

Backup and synchronize your Postman Collections on GitLab, an open source Git repository manager. Your Collections are all tucked in safe and sound with our latest Postman Pro to GitLab Integration.

**Generate a GitLab Personal Access Token**

[Log in][0] to GitLab. If you don’t already have a Personal Access Token from GitLab, generate a new one [here][1].  

[![Create GitLab token](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/gitlab_create.png)][2]

Make a note of this token for later.

[![GitLab token](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/gitlab_token.png)][3]

**Backup your Postman Collections to your GitLab**

From the [Integrations page][4], select GitLab from a list of Postman's 3rd party Integrations for Postman Pro users.

[![GitLab Integration](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/gitlabINT.png)][5]

Click Add to backup your Postman Collections to GitLab.

[![Add GitLab Integration](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/gitlab_add.png)][6]

Enter your GitLab Personal Access Token from earlier.  Select your GitLab Project, select an existing Postman Collection, and then enter a filename to call your backup. Upon submit, your Collection will be pushed to your GitLab project under the filename that you specified, and saved as a single JSON file.

[![Backup Collection](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/gitlab_backup.png)][7]

There are also some advanced options available.  You can enter a custom directory name, or leave "Postman Collections" as the default. You can specify a branch for commit, or the default branch of the repository will be used.

[![Advanced Options](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/gitlab_advanced.png)][8]

And that's it!  From now on, every change saved to your Postman Collection will automatically commit changes to your GitLab project in real time.  Now your Collections and code can live together in perfect harmony in the same repository.

[0]: https://gitlab.com/
[1]: https://gitlab.com/profile/personal_access_tokens
[2]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/gitlab_create.png
[3]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/gitlab_token.png
[4]: https://app.getpostman.com/dashboard/integrations
[5]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/gitlabINT.png
[6]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/gitlab_add.png
[7]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/gitlab_backup.png
[8]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/gitlab_advanced.png
