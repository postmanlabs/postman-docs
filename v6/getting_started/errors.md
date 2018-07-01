---

title: "Debugging app errors"
page_id: "errors"
tags: 
  - "app"
warning: false
---

### Console Logs

There might be cases when the app crashed, or exhibited unexpected behavior. If you want to file an issue at [https://github.com/postmanlabs/postman-app-support/issues][0], or file a ticket via our [support center][1] (if you wish to include confidential data), it might help expedite things if you include the app's console logs in your report. To access the console logs, follow these steps:

#### For the Chrome app

1. Type `chrome://flags/#debug-packed-apps` in the URL bar in your Chrome browser window
2. Search for "packed" or try to find the "Enable debugging for packed apps" setting
3. Enable the setting
4. Restart Chrome
![](https://www.getpostman.com/img/v1/docs/flags.png)
One this is done, you can access the Developer Tools window by right clicking anywhere inside Postman and selecting "inspect element". You can also go to `chrome://inspect/#apps` and then click "inspect" just below requester.html, under the Postman heading.

#### For the Mac / Windows / Linux app

1. Head to \`View\` in the application menu, and click on 'Toggle Dev Tools'.



In the DevTools window, clicking on the top level Console tab should show the app's debug logs:
![](https://www.getpostman.com/img/v1/docs/errors_console.png)

### Network Calls

#### For the Chrome app

You can also use the DevTools window to inspect the request and response payloads. If the Interceptor is disabled, switch to the Network tab, and you should see each call as it's made. Clicking on this will let you view the headers and payloads for the requests and responses:
![](https://www.getpostman.com/img/v1/docs/errors_network.png)


[0]: https://github.com/postmanlabs/postman-app-support/issues
[1]: https://support.getpostman.com/hc


#### For the Native app

Head to \`View\` in the application menu, and click on `Show Postman Console` or use the keyboard shortcut `cmd + alt + c` (`ctrl + alt + c`). Similar to Devtools, every call along with its headers and payloads will be logged to the Postman Console.
![](https://cloud.githubusercontent.com/assets/1330851/20257546/4546dd8e-aa70-11e6-8242-1f6872899420.png)



