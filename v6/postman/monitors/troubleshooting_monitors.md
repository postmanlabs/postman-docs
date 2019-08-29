---
title: "Troubleshooting monitors"
page_id: "troubleshooting_monitors"
warning: false
---

Postman always syncs your monitors with your collections in the Postman app. As a result, you can debug in the app locally, while your monitors are updated on our servers, seamlessly.

## Viewing failed monitors

The Postman console in the [Monitors web view](https://monitor.getpostman.com) is the best way to debug monitors.

You can click the failed monitor and review the relevant logs under the **Console Log** tab.

[![failed monitors](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-monitor-failed-1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-monitor-failed-1.png)

For information about debugging in the console, see [Debugging and logs](/docs/postman/sending_api_requests/debugging_and_logs/).

When a monitor fails, a "Need help debugging?" popup displays in the Postman monitors web view. Whenever possible, these suggestions include debugging tips that are specifically related to the error.

For example, if the monitor failed because Postman was unable to contact the server, the debugging tip suggests you ensure the server's IP address is correct, and that it's publicly available.  If the monitor failed because of a missing variable, then the debugging tip suggests verifying if the monitor is using the correct environment, and that the variable exists in the environment.

[![debugging monitors in the console](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-monitoring-debugging-1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-monitoring-debugging-1.png)

## Debugging local run attempts

* Run the failing monitor's collection with its environment in the Postman app or Newman to see if it works correctly.
* If a local run passes, [ensure the sync is enabled](/docs/postman/launching_postman/syncing/) in the toolbar header of the Postman app to persist any local changes.  

    [![enable sync](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Header_Toolbar_New_Sync.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Header_Toolbar_New_Sync.png)

* You can also force a sync from the **Sync** tab within the **SETTINGS** modal.  

    [![force sync](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59046046.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59046046.png)

## Debugging variable issues

* Ensure that the same environment is used across local runs and monitor runs. To confirm, add ``console.log(environment);`` to your request scripts and compare the results across monitoring and local runs.

* If your collection run depends on a saved global variable, change it to an environment variable. Saved global variables are not supported in monitors at this time.

## Logging relevant information

* Often, issues come from unexpected response bodies or header values. You can log these with the following:

    ```js
    console.log(JSON.stringify(responseBody, null, 2));
    console.log(JSON.stringify(responseHeaders, null, 2));
    ```

## Uncaught errors

* Wrapping suspicious code in a ``try - catch`` block will also let the test and pre-request scripts in your collection run to completion, allowing you to see the entire picture.
