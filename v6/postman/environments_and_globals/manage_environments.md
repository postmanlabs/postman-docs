---
title: "Manage environments"
page_id: "manage_environments"
warning: false

---

### **What is an environment?**

An environment is a set of key-value pairs. The key represents the name of the variable. You can use a [data editor](/docs/postman/launching_postman/navigating_postman){:target="_blank"} to modify an environment.


While working with APIs, you often need different setups for your local machine, the development server, or the production API. Environments let you customize requests using variables so you can easily switch between different setups without changing your requests. 

You won’t have to remember all those values once they are in Postman. You can download environments, save them as JSON files, and upload them later.

You can create, share, duplicate, export, and delete an environment. You can also import an environment as a single JSON file.


> **Environment and global variables are always stored as strings. If you’re storing objects/arrays, be sure to `JSON.stringify()` them before storing, and `JSON.parse()` them while retrieving.**


### **Creating a new environment**

You can create a new environment from the:
* Manage Environments icon
* **New** button
* Launch screen


#### Manage environments icon

1. Click the "Manage Environments" icon in the upper right corner of the Postman app.

[![manage environments icon](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-manage-environment65.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-manage-environment65.png)

<ol start="2">
  <li>Select “Manage Environments”.</li>
  <li>Click the <b>Add</b> button.</li>
</ol>
  
#### New button

1. In the header toolbar, click the **New** button.
2. Click "Environment" and enter a name for the new environment.
3. Add the variables you want to save as key-value pairs.
4. Click the **Add** button.

[![manage environments icon](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-key-value-pairs.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-key-value-pairs.png)

**Note**: At the bottom, you can select "Show this window at launch" to indicate whether you want the **Create New** tab to display each time you open Postman.

#### Launch screen

The **Create New** tab appears by default when you launch Postman.

1. Open the Postman app.
2. In the **Create New** tab, click "Environment".
3. Enter a name for the new environment.
4. Add the variables you want to save as key-value pairs.
5. Click the **Add** button.

**Note**: At the bottom, you can select "Show this window at launch" to indicate whether you want the **Create New** tab to display each time you open Postman.

### Selecting an active environment

Click the dropdown menu in the upper right corner of the Postman app to select an active environment, or type in the environment name. 

Once you select an environment, you can access variables in the active environmental scope.  
[![environments dropdown](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-active-environ.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-active-environ.png)

### Editing an active environment

Click the **Quick Look** icon in the upper right corner of the Postman app to display the environment and global variables. 

When you click the **Edit** link, a modal opens where you can edit keys and values.

[![quick look icon](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-edit-active-environ.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-edit-active-environ.png)

### Sharing an environment

To share an environment, click the gear icon in the upper right corner of the Postman app and select "Manage Environments". 

In the **Manage Environments** tab, click the **Duplicate Environment** icon next to the environment you want to share.

[![duplicate](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-environment-1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-share-environment-1.png)

It's a best practice to create a duplicate, remove any sensitive values (such as passwords), and access tokens before downloading the copy to share with others. 

When others import the environment, or access the shared template, they can input their own personal information in their own version of the template.

**Note**: For Pro and Enterprise users who are sharing environments in a workspace, be aware that changes made to a shared environment will sync for the entire team. If you have sensitive credentials that you don’t want to expose, create a duplicate of the environment, remove the sensitive values, before uploading to share with others.
