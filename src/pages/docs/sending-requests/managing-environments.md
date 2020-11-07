---
title: "Managing environments"
order: 25
page_id: "managing-environments"
search_keyword: "pm.globals.set, globals.set, pm.environment.set, environment.set, pm.variables.get, variables.get, pm.globals.get, globals.get, pm.environment.get, environment.get" 
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using variables"
    url:  "/docs/sending-requests/variables/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "How to use environments in Postman"
    url:  "https://www.youtube.com/watch?v=wArvaHYdw2I"
  - type: link
    name: "New to Postman: Chaining requests"
    url: "https://www.youtube.com/watch?v=shYn3Ys3ygE"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "How to Control Access to Variables, Workflows, and More"
    url:  "https://blog.postman.com/postman-environments-how-to-control-access-to-variables-workflows-and-more/"
  - type: link
    name: "Dynamically unset environment variables"
    url: "https://blog.postman.com/2019/05/28/pro-tip-dynamically-unset-postman-environment-variables/"
  - type: link
    name: "Securely Using API Keys in Postman"
    url: "https://blog.postman.com/how-to-use-api-keys/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Collaborating with your team"
    url: "/docs/collaborating-in-postman/collaboration-intro/"
  - type: link
    name: "Version control for collections"
    url:  "/docs/collaborating-in-postman/version-control-for-collections/"

warning: false

---

An environment is a set of [variables](/docs/sending-requests/variables/) you can use in your Postman requests. You can use environments to group related sets of values together and manage access to shared Postman data if you're working as part of a team.

## Environments quick start

A typical use of environments could work as follows:

* You have a production API and a development API, at different locations.
* You use two environments, one for development and one for production.
* Each environment includes a variable to store the base URL.
* Each request in your collection refers to the variable in the URL field.
* You toggle between environments when running your requests to test them against either the development or the production environment.
* _Within your organization, you could have a team that only has access to the development environment, and individual team members with edit vs readonly access to specific environments._

You can use the current value of your environment variables to ensure that sensitive data values such as credentials are not accidentally shared. By using environments rather than global variables, you can control visibility of your data values within your workspace and team.

## Contents

* [Creating environments](#creating-environments)
    * [Adding environment variables](#adding-environment-variables)
* [Accessing environments](#accessing-environments)
    * [Selecting an active environment](#selecting-an-active-environment)
    * [Editing environment variables](#editing-environment-variables)
    * [Setting environment variables from scripts](#setting-environment-variables-from-scripts)
* [Working with environments as a team](#working-with-environments-as-a-team)
    * [Managing environment roles](#managing-environment-roles)
    * [Using an environment in viewer role](#using-an-environment-in-viewer-role)
        * [Requesting environment access](#requesting-environment-access)
    * [Using an environment in editor role](#using-an-environment-in-editor-role)

## Creating environments

You will see the selected environment status at the top-right of Postman. Any _active_ environment will be selected in the drop-down, and to the right you will see the __Environment quick look__ (eye) and __Manage environments__ (gear) buttons.

The quick look lists variables for the active environment, and any global variables you have declared (or that are shared via your workspace).

![Environment Quick Look](https://user-images.githubusercontent.com/64157226/98452197-1e67b200-2173-11eb-84fe-daac52507bed.png)

To create a new environment, click __Manage environments__ at the top right of Postman.

<img src="https://user-images.githubusercontent.com/64157226/98452347-8ff43000-2174-11eb-9736-33b53ed4194a.png" alt="Manage environments" width="250px"/>

You will see the list of existing environments in your workspace.

![Manage Environments](https://user-images.githubusercontent.com/64157226/98452361-c336bf00-2174-11eb-81d0-93a64069e2a0.png)

Click __Add__.

Alternatively, select __No Environment__ from the drop-down, open the __Environment quick look__, and click __Add__.

![No Active Environment](https://user-images.githubusercontent.com/64157226/98452369-dfd2f700-2174-11eb-85db-cf9a920b22e3.png)

Enter a name for your environment, and initialize it with any variables you need—you can alternatively specify variables for the environment later.

![Add Environment](https://user-images.githubusercontent.com/64157226/98452391-0729c400-2175-11eb-9466-cbffbaf9a16b.png)

Click __Add__ to create your environment.

### Adding environment variables

You can add variables to an active (currently selected) environment by opening the environment quick look using the eye button at the top right of Postman, and clicking __Edit__.

<img src="https://user-images.githubusercontent.com/64157226/98452393-085af100-2175-11eb-9dbd-e8c59991bdb0.png" alt="Edit environment" width="300px"/>

Alternatively, click __Manage Environments__ and select the environment.

![Edit Environment](https://user-images.githubusercontent.com/64157226/98452394-098c1e00-2175-11eb-997b-377d406ab806.png)

> If you are working with environment variables as part of a team, you will only be able to change initial values if you have [edit access to the environment](#managing-environment-roles). You can access all variables in environments shared with you, but may have readonly access to initial values if you have viewer role.

Enter a name for your variable, and specify __Initial__ and __Current__ values for it—by default the current value will copy the initial value.

* The __Initial Value__ is synced to your account via the Postman servers and shared with any collaborators who have access to the environment.
* The __Current Value__ is local to your Postman app, and is never synced to your account or shared with your team—_unless you choose to persist it_.

To update the synced variable with your local value, set the initial value to the current value by clicking __...__ to the right of the variable row and choosing __Persist__. To reset your local (current) value with the synced value shared with your workspace / collaborators, click __Reset__. You can persist or reset all values in the environment using __Persist All__ and __Reset All__.

![Persist or Reset Environment](https://user-images.githubusercontent.com/64157226/98452465-a64ebb80-2175-11eb-95cd-24ed66471dd3.png)

## Accessing environments

You can access your environment variables from the Postman UI and from your request elements, including the URL, parameters, body data, and test scripts.

To see all of your environments, click __Manage Environments__ (gear button) at the top right of Postman.

![Manage Environments](https://user-images.githubusercontent.com/64157226/98452361-c336bf00-2174-11eb-81d0-93a64069e2a0.png)

Here you can add, share, duplicate, download, manage access, delete, and remove a shared environment from a workspace. You can also access your global variables by clicking __Globals__.

To view the variables in an environment, click its name. You can edit, add, and remove variables from the environment here.

![Edit environment](https://user-images.githubusercontent.com/64157226/98452396-0abd4b00-2175-11eb-9303-efb3b18f504b.png)

> You can also view your environments in __Browse__ mode—in __Environments__ or __Activity__, click an environment name to see the variables within it in the web dashboard.

### Selecting an active environment

To use the variables in an environment, select it from the drop-down list at the top right of Postman.

<img src="https://user-images.githubusercontent.com/64157226/98452397-0b55e180-2175-11eb-9e9b-1725f1149858.png" alt="Environment Dropdown" width="300px"/>

To check a variable value at a glance, use the __quick look__ (eye button).

When you have an environment selected in the drop-down, Postman will treat it as the active environment, and will run all requests against that environment (if your requests reference environment variables).

To use an environment variable value in a request, reference it by name, surrounded with [double curly braces](/docs/sending-requests/variables/):

```
{{base_url}}
```

You can use the same variable notation in request URLs, parameters, headers, and body data.

![Environment var reference](https://user-images.githubusercontent.com/64157226/98452398-0bee7800-2175-11eb-844d-95d8694e9e46.png)

Hover over a variable reference to see its current value.

> If more than one variable with the same name is available to a request, Postman will use the value from the variable with narrowest [scope](/docs/sending-requests/variables/#variable-scopes). This means that if you have an environment variable with the same name as a collection or global variable, Postman will use the environment variable, but local and data variable values will supersede environment values. The value of any overridden variables will display with a strikethrough.
> ![Overridden value](https://user-images.githubusercontent.com/64157226/98452400-0c870e80-2175-11eb-89ae-e99eb0ad5ce8.png)

You can access current environment variable values in your __Pre-request__ and __Tests__ code.

```
pm.environment.get("variable_key");
```

> You can publish environments with your [API documentation](/docs/publishing-your-api/publishing-your-docs/) and the [Run in Postman button](/docs/publishing-your-api/run-in-postman/creating-run-button/).

### Editing environment variables

You can edit variables by opening the environment quick look (eye button) at the top right of Postman, and clicking __Edit__.

> You will only be able to edit environments where you have [editor access](#requesting-environment-access).

![Edit environment](https://user-images.githubusercontent.com/64157226/98452396-0abd4b00-2175-11eb-9303-efb3b18f504b.png)

Edit the environment name, or the names and values of your variables, bearing in mind that __Values__ will be synced with your Postman account and shared with any collaborators who have access to the environment. Click __Update__ when your edits are complete.

![Viewer role on environment](https://user-images.githubusercontent.com/64157226/98452401-0db83b80-2175-11eb-9077-f0060a34cd8e.png)

If you have viewer access to an environment, you will see a padlock icon next to the name to indicate that it is readonly, and you will only be able to edit the current value, which is visible only to you and not synced with your Postman account or workspace. To edit initial values you will need editor role on the environment.

> You can edit current values for variables in an active (currently selected) environment directly via the environment quick look. Click the pencil icon to edit your chosen value.

![Edit environment variable](https://user-images.githubusercontent.com/64157226/98452402-0e50d200-2175-11eb-8c8f-b3014615509c.png)

You can also update environment variable values from your test scripts.

### Setting environment variables from scripts

Your __Pre-request__ and __Tests__ scripts can update environment variable values.

Use [pm.environment](/docs/writing-scripts/script-references/postman-sandbox-api-reference/) to set an environment variable in the active (currently selected) environment:

```js
pm.environment.set("variable_key", "variable_value");
```

You can only create new variables from a script in an environment that you have edit access to. If you update or unset a value in a script with viewer access to the environment, that change will only be visible to you and not shared with your team.

> If you use scripts to set environment variable values, these will be reflected for all requests referencing the variables. For example, you can use environments [in conjunction with the collection runner](/docs/running-collections/intro-to-collection-runs/) and [monitors](/docs/designing-and-developing-your-api/monitoring-your-api/intro-monitors/) to share updated values throughout a run for a series of requests as well as after it completes.

## Working with environments as a team

You can use environments to collaborate on your API development and testing processes with team members who share your workspace, environment, or collection. Environments allow you to access shared resources and to configure visibility of restricted data such as specific server locations, and sensitive information like API keys.

When you collaborate with your team in a shared workspace, any global variables you create and update will be available to others in the workspace. You can use the __Current Value__ of global variables to restrict certain values from collaborators, but by default the __Initial Value__ of a global variable is generally accessible throughout the workspace.

By specifying role-based access to your environments, you can achieve a finer grained control level over your variable values. You can choose to share an environment within your workspace to make it available to team members—and specify access levels for each individual.

To share an environment to your workspace, click __Manage Environments__ (gear button) at the top right of Postman. Click __Share__ next to the environment.

![Share environment](https://user-images.githubusercontent.com/64157226/98452404-0ee96880-2175-11eb-94b4-e4121aba6f59.png)

Select the workspace you want to share the environment to. Click __Share and Continue__.

![Share environment detail](https://user-images.githubusercontent.com/64157226/98452405-0f81ff00-2175-11eb-8b78-147ab54e1132.png)

You can assign the same role to everyone in the workspace, or can configure access levels on an individual basis.

![Shared environment roles](https://user-images.githubusercontent.com/64157226/98452389-04c76a00-2175-11eb-9895-db122740ea39.png)

> You can access the role control at any time from __Manage environments__ &gt; __Manage roles__ from the __...__ overflow menu.

Select roles, check the __remove__ option if you wish to remove the environment from any workspace it is already shared in, and click __Save Roles__.

> You can also share environments from __Browse__ mode Postman by selecting __Environments__ and clicking __Share__, then choosing a workspace. Alternatively, navigate to the environment from the [dashboard](https://app.getpostman.com) via your team, workspace, activity feed, or the user profile of a collaborator by clicking __Environments__. Click __Share__ next to the environment and choose a workspace to share it to.

You can also remove a shared environment from a workspace in __Manage Environments__ by clicking __...__ next to the environment name and choosing __Remove from workspace__.

### Managing environment roles

If you use personal credentials in your requests and the requests are pulling these from a shared environment (for example a variable storing an API secret value), you can restrict visibility of your credentials by only storing them in the current value of the variable. If you're managing an environment that's shared across a team, you can restrict edit access so that most of your team only has viewer role on the environment, which prevents them from accidentally updating the shared value and leaking credentials. Similarly, you can prevent accidental changes to values by restricting the number of team members who have edit access to your environment.

In order to effectively leverage environments to preserve security and minimize the risk of accidental changes to variables, group your variables into environments you want to share as a coherent set, and then configure each user role so that access is only granted where it's required, and that you can source any accidental changes.

When you open the quick look (eye button) for an environment you will see an indicator if you only have view access, and the __Edit__ button will be disabled—however, you can edit the current value inline.

![Readonly environment](https://assets.postman.com/postman-docs/readonly-environment.jpg)

Viewer access allows collaborators to use variable values in their requests, but they can only edit the initial value of a variable if they have edit access to the environment as a whole.

### Using an environment in viewer role

If you have view access to an environment, you will be able to access the value of the variables to use them in your requests, but will not be able to update the __Initial Value__, which is shared with your team. You can update the __Current Value__, but this is not shared with anyone on your team or synced with your Postman account.

If you are using sensitive data like API credentials, it's safer to use the current value of an environment variable for these. You will not be able to __Persist__ the current values to update the initial values of environment variables without edit access to the environment. You can use the __Reset__ option to update your local current values with the shared initial value at any time.

#### Requesting environment access

If you need to update the initial value of a variable in an environment you have readonly access to, you can request edit access. Click __Manage Environments__ (gear button) at the top right of Postman and click the environment name to open it. Click __Request Access__.

![Request access on environment](https://assets.postman.com/postman-docs/request-access-viewer.jpg)

Alternatively, in the environment list, click __...__ and choose __Manage Roles__ &gt; __Request Access__.

![Request environment access](https://assets.postman.com/postman-docs/request-environment-access.jpg)

In the Dashboard, select the team member you want to submit the request to, and choose __Editor__ from the drop-down list. Click __Request Access__.

<img alt="Request environment access from team member" src="https://assets.postman.com/postman-docs/request-access-team-role.jpg" width="350px"/>

You will receive an email when your request is approved.

### Using an environment in editor role

If you have edit access to an environment, you can update the variable values from the Postman UI and from your scripts. If you are using sensitive data such as personal or development / test credentials, make sure you only update these in the current value of a variable so that you do not accidentally share this information with your team.

When you edit the initial value of a shared environment variable, your updated value will be reflected for everyone who has access to the environment, so ensure that you only do this when you are happy for your value to be synced with the Postman servers.

> If you uncheck (deselect) a variable in your environment, it will only be available to collaborators who also have edit access to the environment (and its enabled / disabled status will be reflected for them). Anyone with the viewer role for the environment will not see the unchecked variable.
> ![Disable environment variable](https://assets.postman.com/postman-docs/disable-environment-variable.jpg)

With editor role, you can [configure access for other team members](#managing-environment-roles). If you need to specify access but do not have the editor role, you can [request access](#requesting-environment-access).

## Next steps

Shared environments allow you to leverage collaboration within Postman. Check out some more resources on how you can work with team members on your API development projects:

* [Collaborating in Postman](/docs/collaborating-in-postman/collaboration-intro/)
* [Intro to workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/)
* [Managing and sharing APIs](/docs/designing-and-developing-your-api/managing-apis/)
* [Version control for collections](/docs/collaborating-in-postman/version-control-for-collections/)
