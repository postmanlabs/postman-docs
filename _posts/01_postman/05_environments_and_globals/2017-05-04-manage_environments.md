---
categories:
  - "postman"
  - "environments_and_globals"
title: "Manage environments"
page_id: "manage_environments"
warning: false

---

### **What is an environment?**

An environment is a set of key-value pairs. The key represents the name of the variable. You can use a [data editor](/docs/postman/launching_postman/navigating_postman) to modify an environment.


While working with APIs, you often need different setups for your local machine, the development server, or the production API. Environments lets you customize requests using variables so you can easily switch between different setups without changing your requests. You won’t have to remember all those values once they are in Postman. You can download environments, save them as JSON files, and upload them later.

You can create, share, duplicate, export, and delete an environment. You can also import an environment as a single JSON file.


> **Environment and global variables are always stored as strings. If you’re storing objects/arrays, be sure to `JSON.stringify()` them before storing, and `JSON.parse()` them while retrieving.**

[![manage environments modal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/manage_environ.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/manage_environ.png)

### **Creating a new environment**

You can create a new environment from the:
* Manage Environments icon
* **New** button
* Launch screen


#### **Manage environments icon**

1. Click the "Manage Environments" icon in the upper right corner of the Postman app.

[![manage environments icon](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/environ_icon_menu.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/environ_icon_menu.png)

<ol start="2">
  <li>Select “Manage Environments”.</li>
  <li>Click the <b>Add</b> button to create a new environment.</li>
</ol>

[![add new environment](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Add_environ.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Add_environ.png)


#### **New button**
1. In the header toolbar, click the **New** button.

[![newButton new environment](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newbutton_whiteTheme.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newbutton_whiteTheme.png)

The **Create New** screen appears.

[![createNew](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/createNew_whiteTheme.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/createNew_whiteTheme.png)

<ol start="2">
  <li>Click "Environment" and enter a name for the new environment.</li>
  <li>Add the variables you want to save as key-value pairs.</li>
  <li>Click the <b>Add</b> button.</li>
</ol>

**Note**: At the bottom of the screen you can select ‘Show this window at launch’ to indicate whether you want the **Create New** screen to display each time you open Postman.

#### **Launch screen**
The **Create New** screen appears by default when you launch Postman.

1. Open Postman.
2. In the **Create New** screen, click "Environment".
3. Enter a name for the new environment.
4. Add the variables you want to save as key-value pairs.
5. Click the **Add** button.

**Note**: At the bottom of the screen you can select ‘Show this window at launch’ to indicate whether you want the **Create New** screen to display each time you open Postman.

### **Selecting an active environment**

Click the dropdown in the upper right corner of the Postman app to select an active environment, or type in the environment name. Once you select an environment, you can access variables within the active environmental scope.  
[![environments dropdown](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/active_environ.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/active_environ.png)

### **Editing an active environment**

Click the **Quick Look** icon in the upper right corner of the Postman app to display the environment and global variables. Clicking on the **Edit** link will open a modal for editing keys and values.

[![quick look icon](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/edit_active_environ.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/edit_active_environ.png)

### **Sharing an environment**

Click the gear icon in the upper right corner of the Postman app and select "Manage Environments". Click the **Duplicate Environment** icon next to the environment you want to share.

[![duplicate environment](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/share_environ.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/share_environ.png)

It's a best practice to create a duplicate, remove any sensitive values like passwords and access tokens before downloading the copy to share with someone else.  When someone else imports the environment, or accesses the shared template, they can input their own personal information within their own version of the template.

For Postman Pro and Enterprise users, learn how to [share environment templates](/docs/postman/team_library/sharing) with team members.
