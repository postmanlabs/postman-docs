---
title: "Run button API"
page_id: "run_button_API"
warning: false

---

The JavaScript Run in Postman button exposes an API via the `_pm()` method. These API methods allow you to dynamically alter button behavior. Note that the `_pm()` API is not available for the static version of the Run in Postman button.

### Creating a new environment

A new environment can be dynamically created using the `env.create` method:

```javascript
_pm('env.create', 'environment_name', {key: value});
```

For example, if you need to create a new environment using API keys entered by your user, you can do something like this when the Run in Postman button is clicked:

```javascript
function () {
  var stagingKey = document.getElementById('staging-key-input').value,
    productionKey = document.getElementById('production-key-input').value,
    envData = {
      stagingKey: stagingKey,
      productionKey: productionKey
    };

  _pm('env.create', 'API Keys', envData);
}
```

Note:

*   The `env.create` action will return truth on success, false on failure.
*   `env.create` cannot be used to create duplicate environments. Subsequent calls with an existing environment name will fail.

### Editing an existing environment

An environment which was included in the Run Button embed code or created with `env.create` can be modified using the `env.assign` method:

```javascript
_pm('env.assign', 'environment_name', {key: new_value, new_key: value})
```

For example, if you need to update the `API Keys` environment created in the last example:


```javascript
function () {
  var stagingKey = document.getElementById('staging-key-input').value,
    productionKey = document.getElementById('production-key-input').value,
    envData = {
      stagingKey: stagingKey,
      productionKey: productionKey
    };

  _pm('env.assign', 'API Keys', envData);
}
```

Note:

*   The `env.assign` action will return truth on success, false on failure.
*   `env.assign` cannot be used to create new environments. Calls to `_pm` using `env.assign` will fail if the environment doesn’t already exist.
*   `env.assign` will allow assignment to environments created using `env.create` and inline environments from the button embed code.

### Replacing an existing environment

An entire environment can be replaced using the `env.replace` method.

```javascript
_pm('env.replace', 'environment_name', {key: value})
```

For example, if you have the following environment and you need to replace it:


```javascript
// Existing environment named 'user_data'
// {
//   auth_token: 'q4yugoiwqu4hlrjksfdm3897ryq3891s',
//   user_id: '823',
//   session_data: {}
// }

// Replace the 'user_data' environment
_pm('env.replace', 'user_data', {});
```

Note:

*   The `env.replace` method will return truth on success, false on failure.
*   `env.replace` cannot be used to replace an environment which does not exist.
