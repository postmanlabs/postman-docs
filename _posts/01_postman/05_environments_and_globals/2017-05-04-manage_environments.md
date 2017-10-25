---
categories:
  - "postman"
  - "environments_and_globals"
title: "Manage environments"
page_id: "manage_environments"
warning: false

---

Each environment is a set of key-value pairs, with the key as the variable name. These can be edited using the [data editor](/docs/postman/launching_postman/navigating_postman).

> **Environment and global variables will always be stored as strings. If you’re storing objects/arrays, be sure to `JSON.stringify()` them before storing, and `JSON.parse()` them while retrieving.**

### **What are environments?**

While working with APIs, you often need different setups. For example, your local machine, the development server, or the production API. 

Environments enable you to customize requests using variables. This customization enables you to easily switch between different setups without changing your requests. 

You won’t have to remember all those values once they are in Postman. You can download environments and save them as JSON files and upload them later.

[![manage environments modal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/manage_environments_Screen.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/manage_environments_Screen.png)

### **Create a new environment**

You can create a new environment from the:
* Manage Environments icon
* New button
* Launch screen

#### Manage environments icon

1. Click the 'Manage Environments' icon in the upper right corner of the Postman app.
[![manage environments icon](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/manage_environments_icon.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/manage_environments_icon.png)
2. Select “Manage Environments”. 
3. Click the **Add** button to create a new environment.

#### New button

1. In the header toolbar, click the New button.
[![new button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)
The **Create New** screen appears.
[![create screen](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_new_screen.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_new_screen.png)

Note: At the bottom of the screen you can select ‘Show this window at launch’ to indicate whether you want the Create New screen to display each time you open Postman.

2. Click Environment.
3. Select “Manage Environments”. 
4. Click the **Add** button to create a new environment.
5. In the Add Environment screen:
   * Enter a name for the environment.
   * Add key/value pairs.
6. Click the **Add** button.

#### Launch screen

The **Create New** screen appears by default when you launch Postman. (At the bottom of the screen you can select ‘Show this window at launch’ to indicate whether you want the Create New screen to display each time you open Postman.

1. Open Postman.
2. In the **Create New** screen, click Environment.
3. Select “Manage Environments”. 
4. Click the **Add** button to create a new environment.
5. In the Add Environment screen:
   * Enter a name for the environment.
   * Add key/value pairs.
6. Click the **Add** button.

### **Manage environments**

To manage an environment, you can share, duplicate, download, or delete it. 

[![manage icons](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/manage_environ_icons.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/manage_environ_icons.png)

You can also import an environment as a single JSON file.


### **Select an active environment**

Click the dropdown in the upper right corner of the Postman app to select an active environment, or type in the environment name. Once you select an environment, you can access variables within the active environmental scope.  
[![environments dropdown](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58755923.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58755923.png)

### **Edit an active environment**

Click the Quick Look icon in the upper right corner of the Postman app to display the environment and global variables. Clicking on the **Edit** link will open a modal for editing keys and values.

[![quick look icon](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58755957.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58755957.png)

### **Share an environment**

Click the gear icon in the upper right corner of the Postman app and select "Manage Environments". Click the **Duplicate Environment** icon next to the environment you want to share.

[![duplicate environment](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58787970.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58787970.png)

It's a best practice to create a duplicate, remove any sensitive values like passwords and access tokens before downloading the copy to share with someone else.  When someone else imports the environment, or accesses the shared template, they can input their own personal information within their own version of the template.

For Postman Pro and Enterprise users, learn how to [share environment templates](/docs/postman/team_library/sharing) with team members.
