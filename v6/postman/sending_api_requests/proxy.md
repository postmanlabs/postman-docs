---
title: "Proxy"
page_id: "proxy"
warning: false

---

A proxy server acts as a security barrier between your internal network and the Internet, keeping others on the Internet from accessing information on your internal network.

## What is a proxy?

In basic web speak, a client makes a request to the server, and the server sends back a response.

[![standard request](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/proxy.request.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/proxy.request.png)

A proxy server is an application or system that acts as an intermediary between your computer and the internet, or more specifically, the client and server. The proxy makes requests on your behalf to websites, servers, and other internet services.

[![standard web proxy](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/proxy.standard.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/proxy.standard.png)

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

A proxy acts like a go-between to perform various functions. Postman has a [built-in web proxy to capture API requests](/docs/postman/sending_api_requests/capturing_http_requests/), the [Postman Interceptor to intercept network traffic](/docs/postman/sending_api_requests/interceptor_extension/), and proxy settings to direct API requests.

### Configuring proxy settings

This article describes how to configure the proxy settings in Postman to direct all requests made in the Postman app to route through a proxy server. This is different from [capturing network traffic](/docs/postman/sending_api_requests/capturing_http_requests/) with the built-in proxy which allows Postman to intercept network traffic. 

Postman's native apps for Mac, Windows, and Linux support configuring proxies. You can either specify to use a **custom proxy** or to use the **system proxy** defined in the operating system.

Use the **system proxy** if all of your applications need to use the same proxy. Use the **custom proxy** if you want to direct the requests from Postman go through a custom proxy server.

To configure the proxy settings, click the wrench icon on the right side of the header toolbar, choose “Settings”, and select the **Proxy** tab.

[![settings modal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-proxy_settings-a.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-proxy_settings-a.png)

### Using custom proxy

Postman allows you to configure **custom proxy settings** that direct Postman to forward your HTTP or HTTPS requests through a proxy server. In other words, this will route all requests sent via the Postman app through a proxy server of your choosing.

1. The Postman app is the client that sends a request through the selected proxy.
1. The proxy server sends the request to the server.
1. The server returns a response back through the proxy server.

[![custom proxy](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/custom.proxy2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/custom.proxy2.png)

Custom proxy settings are disabled by default and can be turned on using the toggle switch.

Choose the type of proxy server by checking the appropriate checkboxes. By default, both `HTTP` and `HTTPS` are checked. This means that both HTTP and HTTPS requests will go through the proxy server.

In the first field under **Proxy Server**, enter the **host** or **IP address** (without protocol) of the proxy server. In the second field under **Proxy Server**, enter the **port** of the proxy server.

[![custom proxy](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/proxy_custom.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/proxy_custom.png)

### Using system proxy

If all of your applications need to use the same proxy, you might have a default proxy configured at the Operating System level. Use the **system proxy settings** to forward your HTTP or HTTPS requests in Postman through your OS’s default configuration. In other words, you are telling the Postman app and all requests sent using Postman to follow your OS's default configuration.

1. The Postman app is the client that sends a request through your Operating System’s default configuration, which forwards the request to the proxy server.
1. The system proxy server sends the request to the server.
1. The server returns a response back through the proxy server.

[![system proxy](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/system-proxy2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/system-proxy2.png)

System proxy settings are enabled by default. Any request made through Postman will go through the system proxy.

You can turn this setting on and off using the toggle switch. When turned off, all the requests are made directly. However, regardless of the proxy setting in the app, Postman will still use the system proxy if there is an environment variable set.

[![system proxy](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/proxy_system.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/proxy_system.png)

**Note:** If the **System Proxy** and the **Custom Proxy** are both turned on, then the **Custom Proxy** will take precedence.
