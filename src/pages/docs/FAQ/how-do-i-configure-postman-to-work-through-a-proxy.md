---
title: "How do I configure Postman to work through a proxy?"
order: 3
page_id: "how-do-i-configure-postman-to-work-through-a-proxy"
warning: false
---

**What is Proxy?**
It's a server that acts as an intermediary for requests from source to destination. On a corporate network, all internet connectivity might be routed through a central proxy.


**In Postman you can either turn on the system proxy or define your proxy within the app (global proxy configuration)**

1. If you work in an environment (corporate/educational network) where all requests MUST go through a proxy, then you should add that proxy to the operating system and enable the system proxy in Postman. Make sure the global proxy is turned off. The proxy settings are accessible through the Settings section (wrench-icon on the top-right) > Proxy.
2. If other applications running on your system do not need a proxy, and you only want Postman's requests to be routed through a proxy, then you should use the global proxy setting. Turn off the system proxy and enable the global proxy. Enter the IP address and port number of the proxy under the 'Global Proxy Configuration' section.
3. If the global proxy is enabled, Postman will respect that for any requests that match the HTTP/HTTPS selection in the proxy settings. If it's not a match, Postman will check if the system proxy setting is enabled and use that. If no proxy is enabled, Postman will attempt to make the request directly over the wire.

**Common issues using a proxy in Postman:**
1. **I am not able to send any requests though Postman. My network requires a proxy.**

Please enable the system proxy and make sure the proxy is added to the operating system:
**Windows**: Click on Start and then click on the gear icon (Settings) at the far left. In Settings, click on Network & Internet. In the left-hand pane, click on **Proxy** at the very bottom. **Manual Proxy Setup** -  
Use a Proxy **(ON)**.

**Mac**: Open System Preferences and click on Network. On the left-hand side, make sure to select the connected or active network connection. You can have different proxy settings for each type of network connection. At the bottom, click on the **Advanced** button. Click on the **Proxies** tab and you’ll see a bunch of different protocols you can configure. if you click on **Web Proxy (HTTP)**, you’ll be able to enter the proxy server IP address, port number, username, and password.

**Linux**: System Settings - Scroll down to Hardware and then click on Networking. Click on **Network Proxy**, you can choose from **Automatic** or **Manual**.                                                                

2. **I am not able to send any request though Postman. My network does not need a proxy.**

Make sure you have both proxies (Global/System) disabled. If it still does not work, it may be because there are some environment variables setup in your system. There are two solutions:

1. Remove the environment variables http_proxy, https_proxy, HTTP_PROXY, and HTTPS_PROXY
2. Start Postman with these ""variables"" turned off:


**Windows** –  create a postman.bat file with the following contents

    set HTTP_PROXY=''
    set HTTPS_PROXY=''
    set http_proxy=''
    set https_proxy=''
    start C:\path\to\Postman.exe

    Double-clicking this bat file should open Postman without any of the proxy environment variables set.


**Linux/Mac** – http_proxy='' https_proxy='' HTTP_PROXY='' HTTPS_PROXY='' /path/to/postman


3. I have a proxy which has basic auth. How do I make it work with Postman?
Start Postman with the appropriate environment variables
**Windows**- create a postman.bat file with the following content:

    set HTTP_PROXY=http://USER:PASS@host:port
    set HTTPS_PROXY=https://USER:PASS@host:port
    start C:\path\to\Postman.exe

Double-clicking this bat file should open Postman without any of the proxy environment variables set.

**Linux/Mac**- create the .sh file with the following contents:
    HTTP_PROXY='http://USER:PASS@host:port'
    HTTPS_PROXY='https://USER:PASS@host:port' /path/to/postman

Create these files and save this file at the convenient location. When you open this file, the set environment variables will only apply to the Postman process.
