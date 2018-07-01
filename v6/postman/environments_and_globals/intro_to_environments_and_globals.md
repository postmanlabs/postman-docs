---
title: "Intro to environments and globals"
page_id: "intro_to_environments_and_globals"
warning: false

---

### What are environments and globals?

To understand environments and globals, you must first understand how variables work in Postman.

**Variables**

Developers know that variables are symbolic names that represent the information you store in them. The information the variable represents can change, but the operations on the variable remain the same. Variables in Postman work the same way. 

You can reuse the value of a variable in multiple places. If you change the value of a variable, each instance of that variable changes to the new value.

Let’s say you have three API endpoints that use the same domain - `your-domain.com`. You can save this domain as a variable and instead of repeating the value, you can use `{{domain}}/endpoint1` and `{{domain}}/endpoint2` in the request builder. Now, if your domain changes to `another-domain.com`, you only have to change this value once. 

With Postman’s scripting engine you can set variable values, copy data from one request, and use it in another request.

In a nutshell, variables enable you to:

* Reuse values to keep your code DRY (Don’t Repeat Yourself).
* Configure your setup to accommodate the environment of differnet users.
* Extract data from responses and chain requests in a collection.

To learn how to use variables in Postman, see [Variables](/docs/v6/postman/environments_and_globals/variables){:target="_blank"}.

Now that we know how varibles work in Postman, let's discuss environments and globals.

**Environments**

An environment is a set of key-value pairs. The key represents the name of the variable. You can use a [data editor](/docs/v6/postman/launching_postman/navigating_postman#data-editor){:target="_blank"} to modify an environment.

While working with APIs, you often need different setups for your local machine, the development server, or the production API. Environments let you customize requests using variables so you can easily switch between different setups without changing your requests.

You won’t have to remember all those values once they are in Postman. You can download environments, save them as JSON files, and upload them later.

You can create, share, duplicate, export, and delete an environment. You can also import an environment as a single JSON file.

**Note**: Environment and global variables are always stored as strings. If you’re storing objects or arrays, be sure to `JSON.stringify()` them before storing, and `JSON.parse()` them while retrieving.

To learn how to manage environments for tasks such as creating or sharing an environment, see [Manage environments](/docs/v6/postman/environments_and_globals/manage_environments){:target="_blank"}.

**Globals**

Global variables provide a set of variables that are always available to you in all scopes. You can have multiple environments, but only one can be active at a time with one set of global variables, which are always available.

**Note**: Environment and global variables are always be stored as strings. If you’re storing objects or arrays, be sure to `JSON.stringify()` them before storing, and `JSON.parse()` them while retrieving.

To learn how to manage and view global variables, see [Manage globals](/docs/v6/postman/environments_and_globals/manage_globals){:target="_blank"}.

<br>
<br>

For more information about environments and globals, see:

* [Manage environments](/docs/v6/postman/environments_and_globals/manage_environments){:target="_blank"}
* [Manage globals](/docs/v6/postman/environments_and_globals/manage_globals){:target="_blank"}
* [Variables](/docs/v6/postman/environments_and_globals/variables){:target="_blank"}




