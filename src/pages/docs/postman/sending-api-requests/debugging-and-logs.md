---
title: "Debugging and logs"
order: 35
page_id: "debugging_and_logs"
search_keyword: "console.log, console.info, console.warn, console.error"
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
    url: "https://blog.postman.com/2016/08/26/the-postman-console/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "New console features in Postman v7.10"
    url: "https://www.youtube.com/watch?v=XCfSYT9g0BU"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Debugging a collection run"
    url: "/docs/postman/collection-runs/debugging-a-collection-run/"

warning: false
---

The Postman console was designed to help debug Postman collections and API network calls. If an API or API test is not behaving as you expect, this would be the place where you will go to deep dive while debugging.

If you suspect the issue is with the Postman app itself, the DevTools console will provide internal debugging entries for the Postman app. Both consoles will give you more insight into what's going on under the hood.

> If at first you don’t succeed, `console.log()` everything.

## Network Calls with the Postman Console

The Postman console was designed to help debug Postman collections and API network calls. If an API or API test is not behaving as you expect, this would be the place where you will go to deep dive while debugging.

Every request sent via Postman is logged in the console in its raw form, replacing all the variables that you've used in the request. You can also inspect the entire list of request and response headers.

The Postman console logs the following information:

- The primary request that was sent, including all underlying request headers, variable values, redirects, etc.
- The raw response sent by the server before it is processed by Postman
- The proxy configuration and certificates used for the request
- The network information such as IP addresses, ciphers, and protocols used
- Logs from `console.log()`, `console.info()`, `console.warn()` and `console.error()` and asynchronous requests from test or pre-request scripts

Using log statements at appropriate locations in the scripts will help extract the exact line of code that is acting up. If you know your way around `console.log()` in JavaScript, this is similar.

### For the native app for Mac / Windows / Linux

Head to "View" in the application menu, and click on "Show Postman Console" or use the keyboard shortcut **(CMD/CTRL + ALT + C)** to open the console. Similar to DevTools, every call along with its headers, network information, and payloads will be logged to the Postman console.

[![show Postman console](https://i.imgur.com/mgYGETI.png)](https://i.imgur.com/mgYGETI.png)

Within this console, there's a number of settings and helpers, such as searching for a specific call or message, filtering by message type, and adding network timestamps.

[![show Postman console with options](https://i.imgur.com/R31CZwK.png)](https://i.imgur.com/R31CZwK.png)

Keeping the console window open will increase the visibility of your network calls and log messages while debugging. The power of this console is only limited by your imagination, and also the last 5K messages and 24 hours.

### For the Chrome app

You can also use the DevTools window to inspect the request and response payloads. If the Interceptor is disabled, switch to the **Network** tab, and you should see each call as it's made. This is a good way to inspect the headers and payloads for the requests and responses:

[![show DevTools console](https://assets.postman.com/postman-docs/errors-network.png)](https://assets.postman.com/postman-docs/errors-network.png)

## DevTools Console Logs

In addition to the network calls and user logs that the Postman console provides, the DevTools console is where you can also find internal debugging entries for the Postman app.

Postman apps go through extensive testing and beta builds before the Postman team ships. That said, there might be cases when the app crashes, or exhibits unexpected behavior. This [Chrome DevTools console](https://developer.chrome.com/devtools) is helpful to debug the Postman App. It helps Postman developers to debug app issues faced by users, and you may be asked to send screenshots or logs from this console.

If you've tried unsuccessfully [troubleshooting](/docs/postman/sending-api-requests/troubleshooting-api-requests/) the issue, search [the Postman issue tracker on GitHub](https://github.com/postmanlabs/postman-app-support/issues) to see if someone has already reported the issue and whether there is a known solution that you can use. If you're reporting a new issue, follow [these guidelines](https://github.com/postmanlabs/postman-app-support#user-content-guidelines-for-reporting-issues). If you wish to include confidential data, you can file a ticket via the Postman [support center](https://www.postman.com/support) and include the app’s console logs in your report to provide some helpful data for troubleshooting.

To access the console logs for DevTools, follow these steps:

### For the native app for Mac / Windows / Linux

- Head to "View" in the application menu, and click on "Show DevTools".
- In the DevTools window, clicking on the top level **Console** tab will display the app's debug logs.

[![DevTools view of logs](https://assets.postman.com/postman-docs/errors-console.png)](https://assets.postman.com/postman-docs/errors-console.png)

### For the Chrome app

- Type `chrome://flags/#debug-packed-apps` in the URL bar of your Chrome browser window.
- Search for "packed" or try to find the "Enable debugging for packed apps" setting.
- Enable the setting.
  [![enable in chrome settings](https://assets.postman.com/postman-docs/flags.png)](https://assets.postman.com/postman-docs/flags.png)
- Restart Chrome. Once this is done, you can access the Developer Tools window by right clicking anywhere inside Postman and selecting "inspect element". You can also go to `chrome://inspect/#apps` and then click "inspect" just below requester.html under the Postman heading.
