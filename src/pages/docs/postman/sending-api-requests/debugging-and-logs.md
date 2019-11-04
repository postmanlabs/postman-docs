---
title: "Debugging and logs"
order: 18
page_id: "debugging_and_logs"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "The Postman Console"
    url: "https://blog.getpostman.com/2016/08/26/the-postman-console/?_ga=2.132858184.754547870.1571851340-1454169035.1570491567"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Debugging a collection run"
    url: "/docs/postman/collection-runs/debugging-a-collection-run/"

warning: false
---

Postman apps go through extensive testing and beta builds before we ship. That said, there might be cases when the app crashes, or exhibits unexpected behavior. If you've been unable to [troubleshoot](/docs/postman/sending-api-requests/troubleshooting-api-requests/) the issue on your own, or you can file an issue in the [GitHub tracker](https://github.com/postmanlabs/postman-app-support/issues). If you need to include confidential data in your support request, please visit our [support center](https://www.getpostman.com/support). Including the app's console logs in your report will provide some helpful data for troubleshooting.

The Postman Console is analogous to a browser's developer console, except that it's tuned for API development. If an API or API test is not behaving as you expect, this would be the place where you will go to deep dive while debugging. As long as the console window is open, all your API activities will be logged here to see what's going on under the hood.

The Postman Console logs the following information:

* The actual request that was sent, including all underlying request headers and variable values, etc.
* The exact response sent by the server before it is processed by Postman
* The proxy configuration and certificates used for the request.
* The network information such as IP addresses, ciphers and protocols used.
* Error logs from test or pre-request scripts
* `console.log()`, `console.info()`, `console.warn()` and `console.error()` from inside scripts.

Using `console.info()` or `console.warn()` at appropriate locations in the scripts will help extract the exact line of code that is acting up. If you know your way around `console.log()` in JavaScript, this is similar.

## DevTools Console Logs

To access the console logs, follow these steps:

### For the native app for Mac / Windows / Linux

* Head to `View` in the application menu, and click on "Show DevTools".
* In the DevTools window, clicking on the top level Console tab should show the app's debug logs.

[![DevTools view of logs](https://www.getpostman.com/img/v1/docs/errors-console.png)](https://www.getpostman.com/img/v1/docs/errors-console.png)

### For the Chrome app

* Type `chrome://flags/#debug-packed-apps` in the URL bar in your Chrome browser window.
* Search for "packed" or try to find the "Enable debugging for packed apps" setting.
* Enable the setting.
[![enable in chrome settings](https://www.getpostman.com/img/v1/docs/flags.png)](https://www.getpostman.com/img/v1/docs/flags.png)
* Restart Chrome. Once this is done, you can access the Developer Tools window by right clicking anywhere inside Postman and selecting "inspect element". You can also go to `chrome://inspect/#apps` and then click "inspect" just below requester.html under the Postman heading.

## Network Calls with Postman Console

### For the native app for Mac / Windows / Linux

Head to `View` in the application menu, and click on "Show Postman Console" or use the keyboard shortcut **(CMD/CTRL + ALT + C)** to open. Similar to DevTools, every call along with its headers, network information, and payloads will be logged to the Postman Console.

  [![show Postman console](https://cloud.githubusercontent.com/assets/1330851/20257546/4546dd8e-aa70-11e6-8242-1f6872899420.png)](https://cloud.githubusercontent.com/assets/1330851/20257546/4546dd8e-aa70-11e6-8242-1f6872899420.png)

### For the Chrome app

You can also use the DevTools window to inspect the request and response payloads. If the Interceptor is disabled, switch to the Network tab, and you should see each call as it's made. Clicking on this will let you view the headers and payloads for the requests and responses:

[![show DevTools console](https://www.getpostman.com/img/v1/docs/errors-network.png)](https://www.getpostman.com/img/v1/docs/errors-network.png)
