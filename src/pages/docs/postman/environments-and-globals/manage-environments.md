---
title: "Manage environments"
order: 49
page_id: "manage_environments"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: link
    name: "Variables"
    url: "/docs/postman/environments-and-globals/variables/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Raygun"
    url: "https://www.getpostman.com/case-studies/raygun.pdf?_ga=2.170151398.754547870.1571851340-1454169035.1570491567"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "How to add an environment variable using code snippets"
    url: "https://www.youtube.com/watch?v=jzJT_o3_t1Q"
  - type: link
    name: "Environments with Postman"
    url: "https://www.youtube.com/watch?v=M3QAjLTqC9c"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Pro-tip: Dynamically Unset Postman Environment Variables"
    url: "https://blog.getpostman.com/2019/05/28/pro-tip-dynamically-unset-postman-environment-variables/?_ga=2.159075580.754547870.1571851340-1454169035.1570491567"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: link
    name: "Intro to scripts"
    url: "/docs/postman/scripts/intro-to-scripts/"

warning: false

---

An environment is a set of key-value pairs. The key represents the name of the variable. You can use a [data editor](/docs/postman/launching-postman/navigating-postman/) to modify an environment.

While working with APIs, you often need different setups for your local machine, the development server, or the production API. Environments let you customize requests using variables so you can easily switch between different setups without changing your requests.

You don't need to remember all those values once they are in Postman. You can download environments, save them as JSON files, and upload them later.

You can create, share, duplicate, export, and delete an environment. You can also import an environment as a single JSON file.

> **Environment and global variables are always stored as strings. If you’re storing objects/arrays, be sure to `JSON.stringify()` them before storing, and `JSON.parse()` them while retrieving.**

## Creating a new environment

You can create a new environment from the:

* Manage Environments icon
* **New** button
* Launch screen

### Manage environments icon

Click "Manage Environments" icon in the upper right corner of the Postman app.

[![manage environments icon](https://assets.postman.com/postman-docs/Env&Globals6.png)](https://assets.postman.com/postman-docs/Env&Globals6.png)

* Select “Manage Environments”.
* Click the **Add** button.
  
### New button

In the header toolbar, click the **New** button.

Click "Environment" and enter a name for the new environment.

Add the variables you want to save as key-value pairs.

Click the **Add** button.

[![manage environments icon](https://assets.postman.com/postman-docs/Manage_Env1_a.png)](https://assets.postman.com/postman-docs/Manage_Env1_a.png)

**Note**: At the bottom, you can select "Show this window at launch" to indicate whether you want the **Create New** tab screen to display each time you open Postman.

### Launch screen

The Create New tab appears by default when you launch Postman.

Open the Postman app.

In the Create New tab, click "Environment".

Enter a name for the new environment.

Add the variables you want to save as key-value pairs.

Click **Add**.

## Selecting an active environment

Click the dropdown menu in the upper right corner of the Postman app to select an active environment, or type in the environment name.

Once you select an environment, you can access variables in the active environment scope.

[![environments dropdown](https://assets.postman.com/postman-docs/Env&Globals8.png)](https://assets.postman.com/postman-docs/WS-active-environ.png)

## Editing an active environment

Click the Quick Look icon in the upper right corner of the Postman app to display the environment and global variables screen. The following screen opens, where you can click **Edit** to edit the values:

[![quick look icon](https://assets.postman.com/postman-docs/Edit_Env_Var5.png)](https://assets.postman.com/postman-docs/Edit_Env_Var5.png)

## Sharing an environment

To share an environment, click the gear icon in the upper right corner of the Postman app and select "Manage Environments".

In the Manage Environments tab, click the Duplicate Environment icon next to the environment you want to share.

[![duplicate](https://assets.postman.com/postman-docs/Env&Globals8_b.png)](https://assets.postman.com/postman-docs/Env&Globals.png)

It's best practice to create a duplicate, remove any sensitive values (such as passwords), and access tokens before downloading the copy to share with others.

When others import the environment or access the shared template, they can input their own personal information in their own version of the template.

**Note:** For Pro and Enterprise users who share environments in a workspace, be aware that changes made to a shared environment will sync for the entire team. If you have sensitive credentials that you don’t want to expose, create a duplicate of the environment, remove the sensitive values, before uploading to share with others.

For Postman Pro and Enterprise users, learn how to [share environments & environment templates](/docs/postman/team-library/sharing/) with team members.

---
For more information about variables and globals, see:

* [Variables](/docs/postman/environments-and-globals/variables/)
* [Intro to environments and globals](/docs/postman/environments-and-globals/intro-to-environments-and-globals/)
* [Manage globals](/docs/postman/environments-and-globals/manage-globals/)
