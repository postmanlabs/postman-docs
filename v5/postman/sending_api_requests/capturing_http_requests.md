---
title: "Capturing HTTP requests"
page_id: "capturing_http_requests"
warning: false

---

If you are using APIs to build client-side applications - mobile apps, websites or desktop applications - you might want to see the actual HTTP request traffic that is being sent and received in the application. In some cases, you might discover APIs that are not even documented. Postman gives you tools to see and capture this network traffic easily. You can use the built-in proxy in the Postman native apps or use the [Interceptor extension](/docs/postman/sending_api_requests/interceptor_extension/) for the Postman Chrome app. 

**Note:** for the Postman native apps, request captures over HTTPS will not work if the website has HSTS enabled. Most websites have this check in place.

### The Postman built-in proxy

Postman has a proxy in the Postman app that captures the HTTP request.

1. The Postman app listens for any calls made by the client app or device.
1. The Postman proxy captures the request and forwards the request onward to the server.
1. The server returns a response through the Postman proxy back to the client.

[![postman capture proxy](https://assets.postman.com/postman-docs/proxymobile.png)](https://assets.postman.com/postman-docs/proxymobile.png)

Similar to the [Interceptor Chrome extension](/docs/postman/sending_api_requests/interceptor_extension/), the Postman app proxy also INTERCEPTS and captures your requests. In this scenario, the Postman app is the proxy, and you can inspect HTTP communication going out from your phone like in the following example, and log all network requests under the History tab of the sidebar.

[![proxy logs](https://assets.postman.com/postman-docs/proxy.logs.png)](https://assets.postman.com/postman-docs/proxy.logs.png)

### Using Postman's proxy example

In this tutorial, we will use Postman's proxy feature to inspect HTTP communication going out from your phone. To get started, make sure your computer and mobile are connected to the same local wireless network.

##### **Step 1: Set up the proxy in Postman**

Open the **PROXY SETTINGS** modal in the Postman app (MacOS) by clicking the icon in the header toolbar.

[![proxy icon in header](http://blog.getpostman.com/wp-content/uploads/2016/06/840x102xpostman-proxy-settings-button-1024x124.png,qx38712.pagespeed.ic.YcnXp95XVF.jpg)](http://blog.getpostman.com/wp-content/uploads/2016/06/postman-proxy-settings-button.png?x38712)

Keep a note of the port mentioned in the proxy settings. In this case, let's keep it at the default port ``5555``. Set the target to "History". This will cause all your requests to be captured and stored in the History sidebar panel.

[![proxy settings modal](http://blog.getpostman.com/wp-content/uploads/2016/06/840x612xpostman-proxy-settings-1024x746.png,qx38712.pagespeed.ic.dWsIVNCDiv.jpg)](http://blog.getpostman.com/wp-content/uploads/2016/06/postman-proxy-settings.png?x38712)

##### **Step 2: Note your computer's IP address**

On OS X, the computer's IP address can be found in _System Preferences > Network_. The IP address of your system will be something like the example here `192.168.0.101`.

[![system preferences](http://blog.getpostman.com/wp-content/uploads/2016/06/840x710xosx-network-settings-1024x865.png,qx38712.pagespeed.ic.gnTM2O4wH5.jpg)](http://blog.getpostman.com/wp-content/uploads/2016/06/osx-network-settings.png?x38712)

##### **Step 3: Configure HTTP proxy on your mobile device**

Open the wireless settings of your mobile device and update the configuration of the wireless connection to use HTTP Proxy. Set the IP address with the IP you retrieved from your computer in the second step. Set the port with the port you established in Postman in **Step 1**. 

[![wireless settings on mobile device](http://blog.getpostman.com/wp-content/uploads/2016/06/405x720xios-http-proxy-settings-576x1024.png,qx38712.pagespeed.ic._l8Fxy2LqV.jpg)](http://blog.getpostman.com/wp-content/uploads/2016/06/ios-http-proxy-settings.png?x38712)

Set the proxy IP address of your device (an iPhone in this example) to the IP address you obtained from your system and port ``5555``.

You are all set! Head over to the Postman app, and you will start seeing the network calls listed under the **History** tab of the sidebar. Open your device's web browser or your application and you will start seeing HTTP traffic passing through the app or the browser.

[![requests under History tab](http://blog.getpostman.com/wp-content/uploads/2016/06/840x617xpostman-proxy-history-sidebar-1024x752.png,qx38712.pagespeed.ic.uo1VoX39y5.jpg)](http://blog.getpostman.com/wp-content/uploads/2016/06/postman-proxy-history-sidebar.png?x38712)

### Connect to proxy for target devices

The broader development community has published some useful tutorials for setting up a proxy server on various operating systems.

   *   [Windows](https://www.howtogeek.com/tips/how-to-set-your-proxy-settings-in-windows-8.1/)
   *   [Linux](https://www.shellhacks.com/linux-proxy-server-settings-set-proxy-command-line/)
   *   [macOS](https://support.apple.com/kb/PH18553?locale=en_US)
   *   [Android](https://www.howtogeek.com/295048/how-to-configure-a-proxy-server-on-android/)

