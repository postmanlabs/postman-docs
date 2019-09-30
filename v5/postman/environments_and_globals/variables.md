---
title: "Variables"
page_id: "variables"
warning: false

---

### What are variables?

Variables are symbols that can take different values. You might be familiar with variables from other languages from your prior programming experience. Variables in Postman work the same way. 

### Why use variables?

Variables allow you to reuse values in multiple places so you can keep your code DRY (Don't Repeat Yourself).  Also, if you want to change the value, you can change the variable once with the impact cascading through the rest of your code.

Let's say you have 3 API endpoints that use the same domain - `your-domain.com`. You can save this domain as a variable and instead of repeating the value, you can use *`{% raw %}{{domain}}/endpoint1{% endraw %}`* and *`{% raw %}{{domain}}/endpoint2{% endraw %}`* in the request builder. Now, if your domain changes to `another-domain.com`, you just have to change this value once. 

With Postman's scripting engine you can set variable values, copy data from one request and use it in another request.

  * Reuse values so you can keep your code DRY (Don’t Repeat Yourself)
  * Configure your setup to accommodate different users or environments
  * Extract data from responses and chain together requests in a collection
  * And more!

### Variable scopes

The following scopes are available to you:

  1.  Global
  1.  Collection
  1.  Environment
  1.  Local
  1.  Data
  
Scopes can be viewed as different kinds of buckets in which values reside. If a variable is in two different scopes, the scope with a higher priority wins and the variable gets its value from there. Postman resolves scopes using this hierarchy progressing from broad to narrow scope. 

[![nested variable scopes](https://assets.postman.com/postman-docs/scopes.png)](https://assets.postman.com/postman-docs/scopes.png)

If a variable from the currently active environment shares its name with a global variable, the environment variable will take priority. In other words, global variables are overridden by environment variables, which are overridden by [data variables](http://blog.getpostman.com/index.php/2014/10/28/using-csv-and-json-files-in-the-postman-collection-runner/) (only available in the [collection runner](/docs/postman/collection_runs/starting_a_collection_run/)).

### Accessing variables in the request builder

Variables can be used in the following form in the Postman user interface - {% raw %} `{{variableName}}` {% endraw %}. The string {% raw %} {{variableName}} {% endraw %} will be replaced with its corresponding value when Postman resolves the variable. For example, for an environment variable `url` with the value `http://localhost` , you will have to use {% raw %} `{{url}}` {% endraw %} in the request URL field. `{{url}}` will be replaced by `http://localhost` when the request is sent.

Since variables in the request builder are accessed using string substitution, they can be used everywhere in the request builder where you can add text. This includes the URL, URL parameters, headers, authorization, request body and header presets. Postman evaluates the variables according to scoping rules as discussed in the Variable Scopes section and sends them to the server.

[![variables used in request builder](https://assets.postman.com/postman-docs/WS-var-request-builder.png)](https://assets.postman.com/postman-docs/WS-var-request-builder.png)

### Accessing variables through scripts

Variables can also be used in pre-request and test scripts. Since these sections for scripts are written in JavaScript, you will initialize and retrieve these variables in a different manner. You can initialize variables in scripts and put them in a particular scope. 

  1.  Defining an environment or global variable in a script: 
        *  To set a variable in a script, use the `pm.environment.set()` method or `pm.globals.set()` method depending on the desired scope. The method requires the variable key and value as parameters to set the variable.  When you send the request, the script will be evaluated and the value will be stored as the variable. Note that [defining a collection variable](/docs/postman/environments_and_globals/variables/#defining-collection-variables) is a little different and can be done by editing the collection details.
  2.  Fetching a pre-defined variable: 
        *  Once a variable has been set, use the `pm.variables.get()` method or, alternatively, use the `pm.environment.get()` or `pm.globals.get()` method depending on the appropriate scope to fetch the variable. The method requires the variable name as a parameter to retrieve the stored value in a script.
  3.  Setting a variable in a scope: 
        *  Environment variables can be accessed with the corresponding environment template. Collection variables can be accessed from a request within the collection. Global variables can be accessed broadly regardless of the selected environment.

[![variables used in script](https://assets.postman.com/postman-docs/WS-var-scripts.png)](https://assets.postman.com/postman-docs/WS-var-scripts.png)

### Defining collection variables

Collection variables can be defined by editing the collection details. Click on the ellipsis (...) next to the collection name, and select “Edit” to open the **EDIT COLLECTION** modal. Select the **Variables** tab to add and edit collection variables. You can also define collection variables when creating the collection.  

[![edit collection variable](https://assets.postman.com/postman-docs/edit-collection-variable.png)](https://assets.postman.com/postman-docs/edit-collection-variable.png)

### Logging variables

Often while using variables in scripts, you will need to see the values they obtain. You can use the [Postman Console](/docs/postman/sending_api_requests/debugging_and_logs/) to do this easily. From the application menu, select "View" and then "Show Postman Console".  To log the value of a variable, you can use `console.log(foo);` in your script. When you send a request, the script will be evaluated and the value of the variable will be logged in the Postman Console.

[![variables logged](https://assets.postman.com/postman-docs/var_logging.png)](https://assets.postman.com/postman-docs/var_logging.png)

### Data variables

The Collection Runner lets you import a CSV or a JSON file, and then use the values from the data file inside HTTP requests and scripts. We call these data variables. To use them inside Postman, follow the same syntax as environment or global variables. 

##### **Data variables in requests**

Variables inside the Postman UI are enclosed inside curly braces. For example, in the screenshot below, `{{username}}` and `{{password}}` inside URL parameters would be replaced by corresponding values from the data file:

[![data variables in requests](https://assets.postman.com/postman-docs/WS-var-data-url.png)](https://assets.postman.com/postman-docs/WS-var-data-url.png)

##### **Data variables in pre-request and test scripts**

Inside pre-request and test scripts, the `pm.iterationData.get("username")` method would let you access the value of the username variable from a data file, for example.

[![data variables in scripts](https://assets.postman.com/postman-docs/WS-var-data.png)](https://assets.postman.com/postman-docs/WS-var-data.png)

Learn more about [working with data files](/docs/postman/collection_runs/working_with_data_files/). 

### Dynamic variables

Postman has a few dynamic variables which you can use in your requests. Dynamic variables cannot be used in the Sandbox. You can only use them in the `{{..}}` format in the request URL / headers / body.

   *   {% raw %} `{{$guid}}`{% endraw %} : Adds a v4 style guid
   *   {% raw %} `{{$timestamp}}`{% endraw %}: Adds the current timestamp
   *   {% raw %} `{{$randomInt}}`{% endraw %}: Adds a random integer between 0 and 1000

[![dynamic variables](https://assets.postman.com/postman-docs/WS-var_dynamic.png)](https://assets.postman.com/postman-docs/WS-var_dynamic.png)

### Quick Look for variables

Quick Look is a quick preview feature displaying all your environment and global variables in one place. Click on the "eye" icon in the top right to toggle the display, or typing the keyboard shortcut **(CMD/CTRL + ALT + E)**.

[![quick look](https://assets.postman.com/postman-docs/WS-environ_quick-look.png)](https://assets.postman.com/postman-docs/WS-environ_quick-look.png)

### Autocomplete and tooltips for variables

Postman variables are very powerful, and two features - autocomplete and tool tips - make them even more convenient.

##### **Autocomplete for variables**

[![autocomplete for variables](https://assets.postman.com/postman-docs/WS-autocomplete.gif)](https://assets.postman.com/postman-docs/WS-autocomplete.gif)  

Type an open curly bracket to bring up the autocomplete menu. For the pre-request and test scripts section, which [uses the data editor](/docs/postman/launching_postman/navigating_postman/), entering the first letter of a variable triggers the autocomplete. The menu contains a list of all the variables in the current environment, followed by globals. Navigating through the list also shows the current value and scope for each variable, along with a feedback for overridden variables. 

##### **Variable highlighting and tooltip on hover**

[![variable highlighting and tooltips](https://assets.postman.com/postman-docs/WS-variable-toolTip.gif)](https://assets.postman.com/postman-docs/WS-variable-toolTip.gif)

Variables are highlighted in orange, with unresolved variables shown in red colour. Hovering over a variable shows its current value and the scope. If a variable is unresolved - i.e., no value in the current environment - the tooltip shows the appropriate feedback.
