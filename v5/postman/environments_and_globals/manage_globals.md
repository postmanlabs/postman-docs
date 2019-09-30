---
title: "Manage globals"
page_id: "manage_globals"
warning: false

---

Global variables provide a set of variables that are always available to you within all scopes. You can have multiple environments, and only one can be active at a time. But you’ll have only one set of global variables, and they’ll always be available. 

> **Environment and global variables will always be stored as strings. If you’re storing objects/arrays, be sure to `JSON.stringify()` them before storing, and `JSON.parse()` them while retrieving.**

##### **Manage global variables**

Click the gear icon in the upper right corner of the Postman app and select "Manage Environments". Click on the **Globals** button at the bottom of the modal to reveal a key-value editor to add, edit, and delete global variables. This is also where you can download your global variables as a single JSON file.

[![management environments modal](https://assets.postman.com/postman-docs/58756362.png)](https://assets.postman.com/postman-docs/58756362.png)

##### **View global variables**

Click the Quick Look icon in the upper right corner of the Postman app to display the environment and global variables. Clicking on the **Edit** link will open a modal for editing keys and values.

[![quick look icon](https://assets.postman.com/postman-docs/WS-environ_quick-look-globals.png)](https://assets.postman.com/postman-docs/WS-environ_quick-look-globals.png)
