---

title: "Settings"
page_id: "settings"
tags: 
  - "app"
warning: false
---

Postman tries to minimize the number of settings you have to change, but considering the diverse use cases which come up, some settings have to be present.

[![](https://www.getpostman.com/img/v1/docs/thumbs/29-1.png)][0]

* **Trim keys and values in request body**
If you're using the form-data or url-encoded modes to send data to the server, setting this to yes will cause any parameters to be trimmed.

* **SSL Certificate Verification (Native apps only)**
Prevents the app from checking validity of SSL certificates while making a request. More details [here][1].

* **Language detection**
Setting this to JSON will force a JSON rendering, irrespective of the response Content-Type header.

* **XHR Timeout(ms)**
Set how long the app should wait for a response before saying that the server isn't responding. A value of 0 indicates infinity - Postman would wait for a response forever.

* **Response Font Size**
Sets the font size of the response viewer.

* **Presentation Mode**
Optimizes Postman's UI for presentations. Certain text elements have an increased font size, for example.

* **Send no-cache header**
You would want this to be on. Sending a no-cache header makes sure you get the freshest response from your server.

* **Send postman-token header**
This is primarily used to bypass a bug in Chrome. If an XmlHttpRequest is pending and another request is sent with the same parameters then Chrome returns the same response for both of them. Sending a random token avoids this issue. This can also help you distinguish between request on the server side.

* **Retain headers on clicking on links**
If you click on a link in a response, Postman creates a new GET request with that URL. If you want to retain the headers that you set in the previous request set yes here. This is useful if you are accessing mainly protected resources.

* **Automatically follow redirects (Chrome-only)**
Prevent requests that return a 300-series response to be automatically redirected. You'll have to install the Interceptor to prevent automatic redirection.

* **Send anonymous usage data to Postman**
Option to disable anonymous usage data, that we at Postman use to make Postman a better product. 

### Theme

Postman comes in two themes - light and dark. Choose the one that you're more comfortable working with.

### Shortcuts

This is a list of all shortcuts you can use inside Postman.

### Data

[![](https://www.getpostman.com/img/v1/docs/thumbs/29-2.png)
][2]

You can import and export data in bulk inside Postman now. This will overwrite your existing collections and environments so be a little careful. Always helps to take a backup before you are importing other files.

### Add-ons

[Interceptor][3]

[Postman proxy][4]

### Sync

If you have signed in to Postman your data is synced with our server, making sure you have it all next time you use the app (and not just locally). You can force sync or disable it in settings. This applies for Pro users as well.


[0]: https://www.getpostman.com/img/v1/docs/source/29-1.png
[1]: https://www.getpostman.com/docs/ignoring_ssl
[2]: https://www.getpostman.com/img/v1/docs/source/29-2.png
[3]: https://github.com/postmanlabs/postman-chrome-interceptor
[4]: https://github.com/postmanlabs/postman-app-support/wiki/Postman-Proxy
