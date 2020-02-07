---
title: "Using variables"
order: 81
page_id: "variables"
search_keyword: "collectionVariables, iterationData, collectionVariables.set, collectionVariables.get, JSON.stringify, JSON.parse, base_url, pm.globals.set, globals.set, pm.collectionVariables.set, collectionVariables.set, pm.environment.set, environment.set, pm.variables.get, variables.get, pm.globals.get, globals.get, pm.collectionVariables.get, collectionVariables.get, pm.environment.get, environment.get, pm.iterationData.get, iterationData.get" 
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url:  "/docs/postman/sending-api-requests/requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "How to use global variables in Postman"
    url: "https://www.youtube.com/watch?v=TU1i1CgjVR8"
  - type: link
    name: "How to use environments in Postman"
    url:  "https://www.youtube.com/watch?v=wArvaHYdw2I"
  - type: link
    name: "New to Postman: Chaining requests"
    url: "https://www.youtube.com/watch?v=shYn3Ys3ygE"
  - type: link
    name: "Working with sessions"
    url: "https://youtu.be/JcSZtVwH69w"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Dynamically unset environment variables"
    url: "https://blog.postman.com/2019/05/28/pro-tip-dynamically-unset-postman-environment-variables/"
  - type: link
    name: "Find and replace text, code, and variables"
    url: "https://blog.postman.com/2018/11/13/find-and-replace-text-code-and-variables-in-postman/"
  - type: link
    name: "10 tips for working with variables"
    url: "https://blog.postman.com/2017/12/29/10-tips-for-working-with-postman-variables/"
  - type: link
    name: "Sessions FAQ"
    url:  "https://blog.postman.com/2018/08/09/sessions-faq/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: link
    name: "Intro to scripts"
    url: "/docs/postman/scripts/intro-to-scripts/"
  - type: link
    name: "Dynamic variables"
    url:  "/docs/postman/variables-and-environments/variables-list/"

warning: false

---

Variables allow you to store and reuse values in your requests and scripts. By storing a value in a variable, you can reference it throughout your collections, environments, and requests—and if you need to update the value, you only have to change it in one place. Using variables increases your ability to work efficiently and minimizes the likelihood of error.

## Variables quick start

To try out a variable, use the following steps:

* Click the __Environment quick look__ (eye button) in the top right of Postman and click __Edit__ next to __Globals__.
* Add a variable named `my_variable` and give it an initial value of `Hello`—click __Save__ and close the environment modal.
* Open a new request tab and enter `https://postman-echo.com/get?var={{my_variable}}` as the URL. Hover over the variable name and you'll see the value.
* __Send__ the request. In the response, you'll see that Postman sent the variable value to the API. _Try changing the value in the Environment quick look and sending the request again._

Read on for more detail on how you can use variables in Postman.

## Contents

* [Understanding variables and environments](#understanding-variables-and-environments)
* [Variable scopes](#variable-scopes)
* [Defining variables](#defining-variables)
* [Accessing variables](#accessing-variables)
* [Sessions in Postman](#sessions-in-postman)
* [Logging variables](#logging-variables)
* [Using data variables](#using-data-variables)
* [Using dynamic variables](#using-dynamic-variables)
* [Next steps](#next-steps)

## Understanding variables and environments

A variable is a symbolic representation of data that allows you to access a value without having to enter it manually wherever you need it. This can be useful especially if you are using the same values in multiple places. Variables make your requests more flexible and readable, by abstracting some of the detail involved.

> For example, if you have the same URL in multiple requests—but the URL might change—you can store it in a variable. If the URL changes, you only need to change the variable value and it will be reflected throughout your collection, wherever you've used the variable name. The same principle applies to any part of your request code that is repeated.

![URL Variable](https://assets.postman.com/postman-docs/url-var.jpg)

<img alt="Reference Variable" src="https://assets.postman.com/postman-docs/reference-var.jpg" width="300px"/>

Postman supports variables at different scopes, allowing you to tailor your processing to a variety of development, testing, and collaboration tasks. Scopes in Postman relate to the different contexts that your requests run in—within the Postman app, in collections, in environments, and in Newman / the Collection Runner.

> Postman will store environment and global variables as strings. If you’re storing objects or arrays, remember to `JSON.stringify()` them before storing, and `JSON.parse()` them when you retrieve them.

### Environments in Postman

Environments allow you to run requests and collections against different data sets. For example, you could have an environment for development, one for testing, and another for production. You can use variables to pass data between requests and tests, for example if you are chaining requests using a collection.

Environments in Postman are key-value pairs of variables. Each variable name represents its key, so referencing the variable name allows you to access its value.

> For example, if you have a base URL for requests stored in a variable named `base_url`, you can reference it in your requests using `{{base_url}}`. Whatever value is stored in the variable will be included wherever you've referenced the variable when your requests run. If the base URL value is `https://httpbin.org`, and is listed as part of the request URL using `{{base_url}}/get?customers=new`, Postman will send the request to `https://httpbin.org/get?customers=new`.

To create an environment, use __New__ &gt; __Environment__, or the __Manage environments__ button in the top right of Postman, and click __Add__. Give your environment a name , such as "Testing"—you can add variables at creation or later, by editing the environment.

To select the environment to run your requests within, use the drop-down at the top right of the Postman app.

<img alt="Environments" src="https://assets.postman.com/postman-docs/env-dropdown.jpg" width="450px"/>

Your requests will run with the data variables listed in the environment you have selected.

You can duplicate, delete, download / import environment JSON, and share environments with collaborators in __Manage Environments__. Sharing environments allows you to let other people run your requests against the same data sets.

<img alt="Manage Environments" src="https://assets.postman.com/postman-docs/manage-env.jpg" width="400px"/>

![Environments](https://assets.postman.com/postman-docs/environments.jpg)

> To share an environment safely, create a duplicate and remove any sensitive data such as auth values first. When your collaborator imports the environment they can enter their own credentials. Any changes you make to a shared environment will be reflected throughout the team with access to it.

## Variable scopes

Postman supports the following variable scopes:

* Global
* Collection
* Environment
* Data
* Local

<img alt="Variable Scope" src="https://assets.postman.com/postman-docs/var-scope.jpg" width="350px"/>

If a variable with the same name is declared in two different scopes, the value stored in the variable with narrowest scope will be used—for example if there is a global and a local variable both named `username`, the local value will be used when the request runs.

### Choosing variables

Variable scopes are suited to different tasks in Postman:

* __Global variables__ allow you to access data between collections, requests, test scripts, and environments.
    * _Since global variables can create confusion, you should only use them sparingly—for example to quickly test something or when your project is at a very early prototyping stage._
* __Collection variables__ are available throughout the requests in a collection and are independent of environments, so do not change based on the selected environment.
    * _Collection variables are suitable if you are only using a single environment, for example for auth / URL details._
* __Environment variables__ allow you to tailor your processing to different environments, for example local development vs testing or production. Only one environment can be active at a time.
    * _If you only have one environment, using collection variables is more efficient._
* __Local variables__ are temporary, and only accessible in your request scripts. Local variable values are scoped to a single request or collection run, and are no longer available when the run is complete.
    * _Local variables are suitable if you need a value to override all other variable scopes but do not want the value to persist once execution has ended._
* __Data variables__ come from external CSV and JSON files to define data sets you can use when running collections via Newman or the Collection Runner.

![Variable Scopes](https://assets.postman.com/postman-docs/Variables-Chart.png)

## Defining variables

You can define variables in a variety of ways, depending on whether you need [global / environment](#defining-global-and-environment-variables), or [collection](#defining-collection-variables) scope.

> Remember to delete variables you are no longer using.

### Defining global and environment variables

To create or edit a variable at global or environment scope, use the __Environment quick Look__ and click __Edit__ next to the environment or global variable.

![Environment Quick Look](https://assets.postman.com/postman-docs/env-quick-look.jpg)

> The quick look view provides a reference to the current state of any global or environment variables you're working with—you can also access the quick look using the keyboard shortcut `CMD/CTRL + ALT + E`.

Alternatively, click __Manage environments__ and select the relevant environment, or click __Globals__.

<img alt="Manage Environments" src="https://assets.postman.com/postman-docs/manage-env.jpg" width="400px"/>

![Environments](https://assets.postman.com/postman-docs/environments.jpg)

> You can [create a new environment](#environments-in-postman) if you do not already have one.

Once you have your scope selected, you can [specify the variable detail](#specifying-variable-detail).

You can also [define global and environment variables in scripts](#defining-variables-in-scripts).

### Defining collection variables

To create or edit a variable for an existing collection, select the collection in __Collections__ on the left of the Postman app, open the __View more actions__ (__...__) menu, and click __Edit__.

<img alt="Edit Collection" src="https://assets.postman.com/postman-docs/edit-collection-var.jpg" width="350px"/>

Choose the __Variables__ tab to edit or add to your collection variables.

![Collection Variables](https://assets.postman.com/postman-docs/collection-vars.jpg)

> You can add collection variables when you create a new collection.

You can also [define collection variables in scripts](#defining-variables-in-scripts).

### Specifying variable detail

You can add and edit variables at any time. All you need to include for a new variable is a name—you can choose to supply an initial value but can alternatively set it later, including from scripts. Use the checkbox to enable or disable a variable.

![Manage Variables](https://assets.postman.com/postman-docs/manage-vars.jpg)

Initial values are shared when you share a collection or environment. Current values are local and not synced or shared. See [sessions in Postman](#sessions-in-postman) for more on local vs synced variables.

> You can download global variables as JSON from __Manage Environments__.

You can set response body values to variables by selecting text, right-clicking / CTRL + clicking, and choosing the relevant variable by name.

<img alt="Set Variable from Text" src="https://assets.postman.com/postman-docs/set-var-text.jpg" width="400px"/>

### Defining variables in scripts

You can set variables programmatically in your request scripts.

Use [pm.globals](/docs/postman/scripts/postman-sandbox-api-reference/#pmglobals) to define a global variable:

```js
pm.globals.set("variable_key", "variable_value");
```

Use [pm.collectionVariables](/docs/postman/scripts/postman-sandbox-api-reference/#pmcollectionvariables) to define a collection variable:

```js
pm.collectionVariables.set("variable_key", "variable_value");
```

Use [pm.environment](/docs/postman/scripts/postman-sandbox-api-reference/#pmenvironment) to define an environment variable (in the currently selected environment):

```js
pm.environment.set("variable_key", "variable_value");
```

Check out the [Sandbox Reference](/docs/postman/scripts/postman-sandbox-api-reference/) for more on scripting with variables.

## Defining local variables

Local variables are temporary values you set in your request scripts using the following syntax:

```js
pm.variables.set("variable_key", "variable_value");
```

Local variables do not persist between sessions, but allow you to override all other scopes temporarily, during the execution of a request or collection / monitor run. For example, if you need to process a temporary test value for a single request or collection run locally, and don't want the value to sync with your team or remain available when the request / collection has finished running, you can use a local variable.

## Accessing variables

You can use double curly braces to reference variables throughout the Postman app user interface. For example, to reference a variable named "username" in your request auth settings, you could use the following syntax with double curly braces around the name:

```js
{{username}}
```
## Using variables in requests

You can use variables in request URLs, parameters, headers, authorization, body, and header presets.

When you run a request, Postman will resolve the variable and replace it with it's current value.

For example, you could have a request URL referencing a variable as follows:

```
http://pricey-trilby.glitch.me/customer?id={{cust_id}}
```
You can access a variable from the request body by wrapping its reference in double-qoutes:

```
{ "customer_id" : "{{cust_id}}" }
```

Postman will send whatever value you currently have stored for the `cust_id` variable when the request runs. If `cust_id` is currently `3`, the request will be sent to the following URL including query parameter:

```
http://pricey-trilby.glitch.me/customer?id=3
```

![Variables in Request](https://assets.postman.com/postman-docs/vars-in-request.jpg)

When you hover over a variable you can see an overview of its current status. As you type variables into your requests, Postman will prompt you with any that are currently defined.

![Variable Prompt](https://assets.postman.com/postman-docs/var-prompt.jpg)

The prompt will indicate current value, scope (highlighted by color), and overridden status where relevant.

![Overridden Variable](https://assets.postman.com/postman-docs/overridden-var.jpg)

If a variable is unresolved, Postman will highlight it in red.

<img alt="Unresolved Variable" src="https://assets.postman.com/postman-docs/unresolved-var.jpg" width="250px"/>

## Using variables in scripts

You can retrieve the current value of a variable in your scripts using the object representing the scope level and the `.get` method:

```js
//access a variable at any scope including local
pm.variables.get("variable_key");
//access a global variable
pm.globals.get("variable_key");
//access a collection variable
pm.collectionVariables.get("variable_key");
//access an environment variable
pm.environment.get("variable_key");
```

> Using `pm.variables.get()` to access variables in your scripts gives you the option to change variable scope without affecting your script functionality. This method will return whatever variable currently has highest precedence (or narrowest scope).

## Sessions in Postman

When you edit global, collection, and environment variables in Postman, you will see __Current Value__, __Persist__, and __Reset__ options for individual variables and for all variables. These allow you to control what happens within your local instance of Postman, independently of how the data is synced with anyone you're sharing requests, collections, and environments with.

![Persist Variables](https://assets.postman.com/postman-docs/persist-var.jpg)

Your local session in Postman can use values that are transient and only visible to you. This lets you develop and test using private credentials or experimental values, without risk of exposing these details or affecting others on your team.

> For example, your team could have a shared API key and individual API keys—you could do more experimental development work locally using your personal key, but use the shared key for team collaboration. Similarly, you could have a variable that represents exploratory work you're doing locally but are not ready to share with the team—you can later choose to persist the local data so that others on your team can also access it.

When you create or edit a variable, you can enter both an initial and a current value. You can choose to leave the current value empty, in which case it will default to the initial value. If you specify a current value, it will be local only to your instance—the __Persist__ option lets you push your current value to the shared data, updating the initial value to match the current value.

Using __Persist__ will make your current value sync with Postman's servers and be reflected for anyone sharing your collection or environment. To reset your current local values to reflect the initial (shared) values, use __Reset__.

You can edit a current value inline from the Environment quick look:

<img alt="Edit Current Value" src="https://assets.postman.com/postman-docs/edit-current.jpg" width="500px"/>

> Local and data variables only have current values, which do not persist beyond request or collection runs.

## Logging variables

You can log variable values to the [Postman Console](/docs/postman/sending-api-requests/debugging-and-logs/) while your requests run. Open the console from the button on the bottom left of Postman, or from the __View__ menu. To log the value of a variable, use the following syntax in your script:

```js
console.log(pm.variables.get("variable_key"));
```

<img alt="Logging Variable" src="https://assets.postman.com/postman-docs/log-var.jpg" width="500px"/>

## Using data variables

The Collection Runner lets you import a CSV or a JSON file, and use the values from the data file inside requests and scripts. You cannot set a data variable inside Postman because it is pulled from the data file, but you can access data variables inside scripts, for example using `pm.iterationData.get("variable_name")`.

See [working with data files](/docs/postman/collection-runs/working-with-data-files/) and the [Sandbox API reference](/docs/postman/scripts/postman-sandbox-api-reference/#pmiterationdata) for more.

## Using dynamic variables

Postman provides dynamic variables that you can use in your requests.

Examples of dynamic variables are as follows:

* `{{$guid}}` : A v4 style guid
* `{{$timestamp}}`: The current timestamp (Unix timestamp in seconds)
* `{{$randomInt}}`: A random integer between 0 and 1000

See the [Dynamic Variables](/docs/postman/variables-and-environments/variables-list/) section for a full list.

![Dynamic Variable](https://assets.postman.com/postman-docs/dynamic-var.jpg)

## Next steps

Check out [Intro to scripts](/docs/postman/scripts/intro-to-scripts/) for more on using variables in your request scripting, and [Intro to collections](/docs/postman/collections/intro-to-collections/) for more on how you can use data between requests.
