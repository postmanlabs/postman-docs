---
title: "Interceptor extension"
page_id: "interceptor_extension"
warning: false

---

### What is Interceptor

Postman Interceptor is a Chrome extension that functions as a proxy to capture HTTP or HTTPS requests. It can capture network requests directly from Chrome and save them to Postman’s history. This means you can debug your web apps APIs in real time! 

In this example:

1. The Chrome browser is the client that sends a request to the web server which is INTERCEPTED by the Postman Interceptor.
1. The Interceptor is listening for any calls made by the Chrome browser and captures the request, forwards the request onward, and also sends the request to Postman.
1. The web server returns a response directly to the Chrome browser.

[![interceptor workflow](https://assets.postman.com/postman-docs/proxy.interceptor.png)](https://assets.postman.com/postman-docs/proxy.interceptor.png)

There is no need to install or configure a proxy. There are no code changes required either. You can filter requests according to the URL based on a regular expression. If you have a web app for which you don’t have a collection built already, or you just want to debug the APIs that your app is using, this can save a lot of time. The Postman Chrome app can be used in tandem with the Postman Interceptor extension to make and capture requests. It can also capture and manipulate cookies or set certain HTTP headers that are blocked on the Chrome platform by default.

<a href="https://assets.postman.com/postman-docs/proxy.interceptExt.png"><img width="200" alt="interceptor-extension" src="https://assets.postman.com/postman-docs/proxy.interceptExt.png"></a>

### Installing Interceptor

Here how to get started:

   *   Install Postman from the Chrome Web Store, if you don’t have it already.
   *   Install the [Interceptor extension](https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo/support?hl=en).
   *   Open Postman, and click on the Interceptor icon in the toolbar to switch the toggle to “on”.
   *   Browse your app or your website and monitor the requests as they stream in.

**Note on security:** The only entity that the Interceptor communicates with is Postman which then saves it to your history. We have open-sourced Interceptor and you can find the code on [Github](https://github.com/a85/PostmanInterceptor). Postman saves all your data locally inside IndexedDB.

### Capturing cookies

Unlike the Postman native apps, the Postman Chrome app is not equipped to handle cookies by itself. You can use the Interceptor extension to overcome this. With the Interceptor on, you can retrieve cookies set on a particular domain and include cookies while sending requests.

### Retrieving cookies

Make sure the Interceptor is enabled in the Postman header toolbar.

[![interceptor icon](https://www.getpostman.com/img/v1/docs/interceptor_cookies/interceptor_cookies_1.png)](https://www.getpostman.com/img/v1/docs/interceptor_cookies/interceptor_cookies_1.png)

Under the **Tests** tab, you can use the “responseCookies” object. This will return an array of cookie objects. To retrieve a particular name, use “postman.getResponseCookie(cookieName)”. This will return a single cookie object. Each cookie object will contain the following properties: domain, hostOnly, httpOnly, name, path, secure, session, storeId, value.

### Setting Cookies

*   Make sure the Interceptor is enabled.
*   Include the “Cookie” header in the headers section (eg. Cookie: name=value; name2=value2).
*   Send the request. The cookies you set will be sent by Chrome along with your request.

### Restricted Headers

Unfortunately some headers are restricted by Chrome and the XMLHttpRequest specification. The following headers are blocked:

   *   Accept-Charset
   *   Accept-Encoding
   *   Access-Control-Request-Headers
   *   Access-Control-Request-Method
   *   Connection
   *   Content-Length
   *   Cookie
   *   Cookie 2
   *   Content-Transfer-Encoding
   *   Date
   *   Expect
   *   Host
   *   Keep-Alive
   *   Origin
   *   Referer
   *   TE
   *   Trailer
   *   Transfer-Encoding
   *   Upgrade
   *   User-Agent
   *   Via

However sending these restricted headers is easy. Follow the steps below:

[![interceptor icon](https://www.getpostman.com/img/v1/docs/thumbs/32.png)](https://www.getpostman.com/img/v1/docs/source/32.png)

   *   Install the Interceptor extension either by clicking on the Interceptor icon in the Postman toolbar or through the [Chrome Web Store](https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo).
   *   Once it’s installed, click on the icon again in the Postman app and toggle it on.

That’s it! You can now send requests which use these headers.
