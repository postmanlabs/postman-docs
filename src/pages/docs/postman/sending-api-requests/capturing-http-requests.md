---
title: "Capturing HTTP requests"
order: 32
page_id: "capturing_http_requests"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Capturing requests in Postman"
    url: "https://www.youtube.com/watch?v=1Efpi_UIxGE"
  - type: link
    name: "Reverse engineering an API"
    url: "https://youtu.be/2VKVPB5USgU"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Reverse engineering an API"
    url: "https://medium.com/postman-engineering/reverse-engineering-an-api-403fae885303"
  - type: link
    name: "Using Postman Proxy to Capture and Inspect API Calls from iOS or Android Devices"
    url: "https://blog.postman.com/2016/06/26/using-postman-proxy-to-capture-and-inspect-api-calls-from-ios-or-android-devices/"

warning: false

---

If you are using APIs to build client-side applications - mobile apps, websites or desktop applications - you might want to see the actual HTTP request traffic that is being sent and received in the application. In some cases, you might discover APIs that are not even documented. Postman gives you tools to see and capture this network traffic easily. You can use the built-in proxy in the Postman native apps or use the [Interceptor extension](/docs/postman/sending-api-requests/interceptor/) for the Postman app.

**Note:** For the Postman native apps, request captures over HTTPS will not work if the website has HSTS enabled. Most websites have this check in place.

You can capture the HTTP requests using the following two ways:

* [Built-in proxy](#built-in-proxy)
* [Interceptor](#interceptor)

## Built-in proxy

Postman has a built-in proxy in the Postman app that captures the HTTP request.

1. The Postman app listens for any calls made by the client app or device.
1. The Postman proxy captures the request and forwards the request onward to the server.
1. The server returns a response through the Postman proxy back to the client.

[![postman capture proxy](https://assets.postman.com/postman-docs/proxymobile.png)](https://assets.postman.com/postman-docs/proxymobile.png)

Similar to the [Interceptor Chrome extension](/docs/postman/sending-api-requests/interceptor/), the Postman app proxy also INTERCEPTS and captures your requests. In this scenario, the Postman app is the proxy, and you can inspect HTTP communication going out from your phone like in the following example, and log all network requests under the History tab of the sidebar.

[![proxy logs](https://assets.postman.com/postman-docs/WS-proxy.logs.png)](https://assets.postman.com/postman-docs/WS-proxy.logs.png)

## Using Postman's proxy example

In this tutorial, you will use Postman's proxy feature to inspect HTTP communication going out from your phone. To get started, make sure your computer and mobile are connected to the same local wireless network.

### Step 1: Set up the proxy in Postman

Open the **PROXY SETTINGS** modal in the Postman app (MacOS) by clicking the icon in the header toolbar.

[![proxy icon in header](https://assets.postman.com/postman-docs/WS-postman-proxy-settings-button.jpg)](https://assets.postman.com/postman-docs/WS-postman-proxy-settings-button.jpg)

Keep a note of the port mentioned in the proxy settings. In this case, let's keep it at the default port ``5555``. Set the target to "History". This will cause all your requests to be captured and stored in the History sidebar panel.

[![proxy settings modal](https://assets.postman.com/postman-docs/Interceptor-Proxy1.png)](https://assets.postman.com/postman-docs/Interceptor-Proxy1.png)

### Step 2: Note your computer's IP address

On OS X, the computer's IP address can be found in _System Preferences > Network_. The IP address of your system will be something like the example here `192.168.0.101`.

[![system preferences](https://edit.blog.postman.com/wp-content/uploads/2016/06/osx-network-settings.png)](https://edit.blog.postman.com/wp-content/uploads/2016/06/osx-network-settings.png)

### Step 3: Configure HTTP proxy on your mobile device

Open the wireless settings of your mobile device and update the configuration of the wireless connection to use HTTP Proxy. Set the IP address with the IP you retrieved from your computer in the second step. Set the port with the port you established in Postman in **Step 1**.

[![wireless settings on mobile device](https://edit.blog.postman.com/wp-content/uploads/2016/06/ios-http-proxy-settings.png)](https://edit.blog.postman.com/wp-content/uploads/2016/06/ios-http-proxy-settings.png)

Set the proxy IP address of your device (an iPhone in this example) to the IP address you obtained from your system and port ``5555``.

You are all set! Head over to the Postman app, and you will start seeing the network calls listed under the **History** tab of the sidebar. Open your device's web browser or your application and you will start seeing HTTP traffic passing through the app or the browser.

[![requests under History tab](https://assets.postman.com/postman-docs/WS-postman-proxy-history-sidebar.jpg)](https://assets.postman.com/postman-docs/WS-postman-proxy-history-sidebar.jpg)

## Connect to proxy for target devices

The broader development community has published some useful tutorials for setting up a proxy server on various operating systems.

* [Windows](https://www.howtogeek.com/tips/how-to-set-your-proxy-settings-in-windows-8.1/)
* [Linux](https://www.shellhacks.com/linux-proxy-server-settings-set-proxy-command-line/)
* [macOS](https://support.apple.com/en-gb/guide/mac-help/mchlp2591/mac)
* [Android](https://www.howtogeek.com/295048/how-to-configure-a-proxy-server-on-android/)

## Interceptor

See [Capturing requests with Interceptor](/docs/postman/sending-api-requests/interceptor#capturing-requests).
