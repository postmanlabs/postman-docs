---

title: "Setting up an environment with variables"
page_id: "environments"
tags: 
  - "app"
warning: false
---

While working with APIs, you will often need to have different setups. For example, your local machine, the development server, or the production API.
Environments give you the ability to customize requests using variables. This way you can easily switch between different setups without changing your requests.
You won't have to worry about remembering all those values once they are in Postman. Environments can be downloaded and saved as JSON files and uploaded later.

[![](https://www.getpostman.com/img/v1/docs/thumbs/28.png)
][0]

Each environment is a set of key-value pairs. These can be edited using the [key-value editor][1]. The key is the variable name.

Variables can be used in the following form - `{{variableName}}`. The string {{variableName}} will be replaced with its corresponding value.
For example, for an environment variable 'url' with the value 'http://localhost' , you will have to use `{{url}}` in the request URL field.
`{{url}}` will be replaced by http://localhost when the request is sent.

Only variables from the currently selected environment will be available to you. Use the environment selector to select an environment:
![](https://www.getpostman.com/img/v1/docs/env_selector.png)

You can hover over the 'χ' icon (to the right of the environment selector) to view a list of currently active environment and global variables

Environments also help you separate sensitive data from your collection like keys and passwords.
As a best practice, you should save all sensitive values in an environment and provide a dummy environment for the user to fill in. If you trust the user, you can give him your environment as well.

Variables can be used in the following places: URL, URL parameters, headers (both names and values), form-data, url-encoded-data, raw data.

**Warning** - Environment and global variables will always be stored as strings.
If you're storing objects/arrays, be sure to JSON.stringify() them before storing, and JSON.parse() them while retrieving.

## Global variables

Global variables provide a set of variables that are always in scope. You can have multiple environments, and only one can be active at a time.
But you'll have only one set of global variables, and they'll always be available. Other than that, you can use them in the same way - `{{variableName}}`.

If a variable from the currently active environment shares its name with a global variable, the environment variable will take priority.
In other words, global variables are overriden by environment variables, which are overriden by
[data variables][2] (only available in the [collection runner][3]).

## Dynamic variables

Postman also has a few dynamic variables which you can use in your requests. This is primarily an experiment right now. More functions would be added soon. Note that dynamic variables cannot be used in the Sandbox.
You can only use them in the `{{..}}` format in the request URL / headers / body.

* `{{$guid}}`: Adds a v4 style guid
* `{{$timestamp}}`: Adds the current timestamp
* `{{$randomInt}}`: Adds a random integer between 0 and 1000


[0]: https://www.getpostman.com/img/v1/docs/source/28.png
[1]: /docs/postman/launching_postman/navigating_postman/#data-editor
[2]: https://blog.getpostman.com/2014/10/28/using-csv-and-json-files-in-the-postman-collection-runner/
[3]: https://www.getpostman.com/docs/jetpacks_running_collections
