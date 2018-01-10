---
categories:
  - "postman"
  - "monitors"
title: "Troubleshooting monitors"
page_id: "troubleshooting_monitors"
warning: false
---

Monitors are kept in sync with your collections in the Postman app at all times. This means that you can debug in the app locally, while your monitors are updated on our servers, seamlessly.

The best way to debug monitors is via the Postman console available on the monitors web view. Click on the failed monitor, and review the relevant logs under the **Console Log** tab. Check out some tips and tricks for [debugging in the console](/docs/postman/sending_api_requests/debugging_and_logs).

[![debugging monitors in the console](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitoring-debugging.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitoring-debugging.png)

When a monitor fails, a "_Need help debugging?_" popup will display on the Postman monitors web view. Whenever possible, these suggestions will include debugging tips that are specifically related to the error that occurred. For example, if the monitor failed because we were unable to contact the server, then the debugging tip will suggest ensuring that the server's IP address is correct, and that it's publicly available.  Or, if the monitor failed because of a missing variable, then the debugging tip will suggest verifying the monitor is using the correct environment, and that the variable exists in the environment.

In addition to the above, here are some debugging tricks:

##### **Attempt local runs**

*   Try running the failing monitor's collection with its environment within the Postman app or Newman, and see if it works correctly.
*   If a local run passes, [ensure that sync is enabled](/docs/postman/launching_postman/syncing) within the toolbar header of the Postman app, so that any local changes are persisted.  
    [![enable sync](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59046115.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59046115.png)
*   You can also force a sync from the **Sync** tab within the **SETTINGS** modal.  
    [![force sync](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59046046.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59046046.png)

##### **Variable issues**

*   Ensure that the same environment is used across local runs and monitor runs. You can confirm this by adding ``console.log(environment);`` to your request scripts and comparing the results across monitoring and local runs.
*   If your collection run depends on a global variable, change it to an environment variable. Global variables are not supported in monitors at this time.

##### **Log relevant information**

*   Often, issues come from unexpected response bodies or header values. You can log these with the following:

```js
console.log(JSON.stringify(responseBody, null, 2));
console.log(JSON.stringify(responseHeaders, null, 2));
```

##### **Uncaught errors**

*   Wrapping suspicious code in a ``try - catch`` block will also let the test and pre-request scripts in your collection run to completion, allowing you to see the entire picture.
