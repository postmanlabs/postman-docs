---
title: "Proxy"
order: 24
page_id: "proxy"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Settings"
    url: "/docs/postman/launching-postman/settings/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Client proxy settings in Postman"
    url: "https://blog.getpostman.com/2017/09/29/client-proxy-settings-in-postman/?_ga=2.206717013.754547870.1571851340-1454169035.1570491567"

warning: false

---

A proxy server acts as a security barrier between your internal network and the Internet, keeping others on the Internet from accessing information on your internal network.

## What is a proxy?

In basic web speak, a client makes a request to the server, and the server sends back a response.

[![standard request](https://assets.postman.com/postman-docs/proxy.request.png)](https://assets.postman.com/postman-docs/proxy.request.png)

A proxy server is an application or system that acts as an intermediary between your computer and the internet, or more specifically, the client and server. The proxy makes requests on your behalf to websites, servers, and other internet services.

[![standard web proxy](https://assets.postman.com/postman-docs/proxy.standard.png)](https://assets.postman.com/postman-docs/proxy.standard.png)

The proxy can reside on your local machine, somewhere in your network, or at any point between your client and the destination server on the internet.

Similar to the way parents might speak to each other through a child, the child is a proxy relaying all communications between the 2 parents.

>**Parent 1**:  _Ask your father if he can pick you up after school._
>>**Timmy**:  _Can you pick me up after school._
>>>**Parent 2**:  _Yeah._
>>>>**Timmy**:  _Dad says yeah._

In this analogy, the child forwards the information on behalf of each parent. Besides just relaying information, [proxies can do much more](https://en.wikipedia.org/wiki/Proxy_server).

* Record all traffic between your machine and the internet
* Reveal the contents of all requests, responses, cookies, and headers
* Route traffic to specified internet locations
* Debugging
* Security from direct attacks
* DevOps load balancing

A proxy acts like a go-between to perform various functions. Postman has a [built-in web proxy to capture API requests](/docs/postman/sending-api-requests/capturing-http-requests/), the [Postman Interceptor to intercept network traffic](/docs/postman/sending-api-requests/interceptor-extension/), and proxy settings to direct API requests.

### Configuring proxy settings

This article describes how to configure the proxy settings in Postman to direct all requests made in the Postman app to route through a proxy server. This is different from [capturing network traffic](/docs/postman/sending-api-requests/capturing-http-requests/) with the built-in proxy which allows Postman to intercept network traffic.

Postman's native apps for Mac, Windows, and Linux support configuring proxies. You can either specify to use a custom **Global proxy** or to use the **system proxy** defined in the operating system.

Use the **Global proxy** if all of your applications need to use the same proxy. Turn **Global proxy** _on_ if you want to direct the requests from Postman go through a custom proxy server. Turning it off will direct the
requests to not use the proxy server.

To configure the proxy settings, click the wrench icon on the right side of the header toolbar, choose “Settings”, and select the **Proxy** tab.

[![settings modal](https://assets.postman.com/postman-docs/WS-proxy_settings-a.png)](https://assets.postman.com/postman-docs/WS-proxy_settings-a.png)

### Using Global proxy

Postman allows you to configure **Global Proxy Configuration** that direct Postman to forward your HTTP or HTTPS requests through a proxy server. In other words, this will route all requests sent via the Postman app through a proxy server of your choosing.

1. The Postman app is the client that sends a request through the selected proxy.
1. The proxy server sends the request to the server.
1. The server returns a response back through the proxy server.

[![custom proxy](https://assets.postman.com/postman-docs/custom.proxy2.png)](https://assets.postman.com/postman-docs/custom.proxy2.png)

Global proxy settings are disabled by default and can be turned on using the toggle switch.

Choose the type of proxy server by checking the appropriate checkboxes beside **Proxy Type**. By default, both `HTTP` and `HTTPS` are checked. This means that both HTTP and HTTPS requests will go through the proxy server.

The first field under **Proxy Type** is **Proxy Server**. Here, enter the **host** or **IP address** (without protocol) of the proxy server. The next field to **Proxy Server** is where the **port** of the proxy server is provided.

The Field below **Proxy Server** is **Proxy Auth**, turning this on makes the requests use Basic Authentication
method, which requires a username and a password.

The **Proxy Bypass** setting lies below the **Proxy Server** option. A number of comma separated hosts can be
provided here for which the requests do not use the proxy settings.

The **Use System Proxy** option allows Postman to use the system's default proxy configuration. It contains an
option to use `HTTP_PROXY`, `HTTPS_PROXY`, and `NO_PROXY` environment variables of the said system.

[![custom proxy](https://assets.postman.com/postman-docs/proxy_global.png)](https://assets.postman.com/postman-docs/proxy_global.png)

### Using system proxy

If all of your applications need to use the same proxy, you might have a default proxy configured at the Operating System level. Use the **system proxy settings** to forward your HTTP or HTTPS requests in Postman through your OS’s default configuration. In other words, you are telling the Postman app and all requests sent using Postman to follow your OS's default configuration.

1. The Postman app is the client that sends a request through your Operating System’s default configuration, which forwards the request to the proxy server.
1. The system proxy server sends the request to the server.
1. The server returns a response back through the proxy server.

[![system proxy](https://assets.postman.com/postman-docs/system-proxy2.png)](https://assets.postman.com/postman-docs/system-proxy2.png)

System proxy settings are enabled by default. Any request made through Postman will go through the system proxy.

You can turn this setting on and off using the toggle switch. When turned off, all the requests are made directly. However, regardless of the proxy setting in the app, Postman will still use the system proxy if there is an environment variable set.

[![system proxy](https://assets.postman.com/postman-docs/proxy_system.png)](https://assets.postman.com/postman-docs/proxy_system.png)

**Note:** If the **Use System Proxy** and the **Global Proxy Configuration** are both turned on, then the **Global Proxy Configuration** will take precedence.
