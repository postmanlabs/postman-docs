---
categories:
  - "postman"
  - "sending_api_requests"
title: "Proxies"
page_id: "proxies"
warning: false

---

Postman’s native app supports configuring proxies. You can either specify to use the system proxy defined in OS or to use a custom global proxy.

To configure the proxy settings, click the wrench icon on the right side of the header toolbar, choose "Settings", and select the **Proxy** tab.

![Postman-Settings-Proxy-Tab](https://user-images.githubusercontent.com/5207331/27917839-cf644a1a-628a-11e7-903f-2158e0d5f6bc.png)

### Using system proxy

This is enabled by default. Any request made through Postman will go through the system proxy. 
If there is no system proxy defined then the request will be made directly.

You can turn on/off this setting using the toggle switch. When turned off, all the requests are made directly.

### Using global proxy

This is disabled by default and can be turned on using the toggle switch.

Choose the type of proxy server by checking the appropriate checkboxes. By default, both `HTTP` and `HTTPS` are checked.
This means that both `HTTP` and `HTTPS` requests will go through the proxy server.

In the **Host** field, enter the host or IP address (without protocol) of the proxy server.
In the **Port** field, enter the port of the proxy server.

![Proxy-Tab-Global-Proxy](https://user-images.githubusercontent.com/5207331/27917703-6cbdd818-628a-11e7-82d3-ad6155ce121a.png)

**NOTE:** If **System Proxy** and **Global Proxy** are both turned on, then **Global Proxy** will take the preference.
Postman will first try to match the request with the **Global Proxy**, and if not matched (when request protocol does not match the **Proxy Type**),
will try to match with system proxy. If none of them matches, then the request will be made directly.
