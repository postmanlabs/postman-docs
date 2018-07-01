---

title: "Capturing requests (Native App)"
page_id: "capture_native"
tags:
  - "app"
warning: false
---
### In-app Proxy

Those of you familiar with the Chrome app's proxy might remember the complicated steps necessary just to set up the proxy server to capture requests for Postman. The Postman native apps ease this process considerably. There's no separate module/script you need to run - the proxy is built in to the app itself!

To start the proxy server, click the satellite icon in the navigation bar. This should bring up the Proxy Settings window. There a couple of things you can configure here:

1. The port (which the proxy server should listen on) - Let's leave this at `5555` for now.
2. The target (where captured requests should be put) - You can choose to stream them in the History, or save them in a collection.
[![](https://www.getpostman.com/img/v1/docs/proxy_mac/1-PostmanProxySettings.png)
][0]

The filters tab has more options that let you configure only certain HTTP methods or URL patterns to capture. You can explore that if you like, but the default values should do just fine.

Click 'Connect'. You should see a notification indicating that the Proxy is on. Now we need to configure our browser or system to route requests through the proxy.
  

#### Chrome

If you're using Chrome, you'll need to set up your OS-level preferences. 

1. Open the 'System Preferences' window, and head to 'Network'. 
2. Click the Advanced button for your current network connection, and head to the 'Proxies' tab. 
3. Enable the 'Web Proxy (HTTP)' and 'Secure Web Proxy (HTTPS)' protocols, and set the URL and Port to `127.0.0.1` and `5555`. Leave the 'Proxy server requires password' box unchecked.
[![](https://www.getpostman.com/img/v1/docs/proxy_mac/4-OsxProxySettings.png)
][1]

Save the settings and use Chrome to browse [our blog][2] (or anything else - it's up to you). You should see requests streaming in to Postman's History section
[![](https://www.getpostman.com/img/v1/docs/proxy_mac/5-ChromeBrowsing.png)
][3]
[![](https://www.getpostman.com/img/v1/docs/proxy_mac/6-ChromeInHistory.png)
][4]
  

#### Firefox

If you're using Firefox to browse the web, you can set up Firefox-specific proxy settings. 

1. Head to `about:preferences#advanced`, switch to the Network tab, and hit 'Settings' to bring up the proxy configuration window. 
2. Select the 'Manual' option. Since the proxy is running on your machine, enter `127.0.0.1` in the URL field, and `5555` in the Port field. `5555` is the port number we configured while setting up the proxy. Use the same settings for the 'SSL Proxy' row as well.
[![](https://www.getpostman.com/img/v1/docs/proxy_mac/3-FirefoxProxySettings.png)
][5]

Hit OK. That's it - Firefox should now be routing all it's calls through Postman's Proxy!
[![](https://www.getpostman.com/img/v1/docs/proxy_mac/31-FirefoxBrowsing.png)
][6]
[![](https://www.getpostman.com/img/v1/docs/proxy_mac/32-FirefoxPagesInHistory.png)
][7]
Note: Sites that use [HSTS (HTTP Strict Transport Security)][8] will not work through the proxy.


[0]: https://www.getpostman.com/img/v1/docs/proxy_mac/1-PostmanProxySettings.png
[1]: https://www.getpostman.com/img/v1/docs/proxy_mac/4-OsxProxySettings.png
[2]: https://blog.getpostman.com/
[3]: https://www.getpostman.com/img/v1/docs/proxy_mac/5-ChromeBrowsing.png
[4]: https://www.getpostman.com/img/v1/docs/proxy_mac/6-ChromeInHistory.png
[5]: https://www.getpostman.com/img/v1/docs/proxy_mac/3-FirefoxProxySettings.png
[6]: https://www.getpostman.com/img/v1/docs/proxy_mac/31-FirefoxBrowsing.png
[7]: https://www.getpostman.com/img/v1/docs/proxy_mac/32-FirefoxPagesInHistory.png
[8]: https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security
