---
title: "Capturing HTTP requests"
order: 32
page_id: "capturing_http_requests"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
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
    url: "https://medium.com/better-practices/reverse-engineering-an-api-403fae885303"
  - type: link
    name: "Using Postman Proxy to Capture and Inspect API Calls from iOS or Android Devices"
    url: "https://blog.postman.com/using-postman-proxy-to-capture-and-inspect-api-calls-from-ios-or-android-devices/"

warning: false

---

If you are using APIs to build client-side applications - mobile apps, websites, or desktop applications - you might want to see the actual HTTP and HTTPS request traffic that's being sent and received in the application. Sometimes you might discover APIs that aren't even documented. Postman gives you tools to see and capture this network traffic.

When using the Postman app, you can capture the HTTP traffic in one of two ways:

* [Built-in proxy](#built-in-proxy)
* [Interceptor](#use-interceptor-to-capture-requests)

## Built-in proxy

The Postman app has a built-in proxy that can capture HTTP traffic:

1. The Postman app listens for any calls made by the client app or device.
1. The Postman proxy captures the request and forwards it to the server.
1. The server returns a response to the Postman proxy, where it can also be saved.
1. The response is returned back to the client.

[![postman capture proxy](https://assets.postman.com/postman-docs/proxymobile-aa.jpeg)](https://assets.postman.com/postman-docs/proxymobile-aa.jpeg)

Similar to the [Interceptor Chrome extension](/docs/sending-requests/capturing-request-data/interceptor/), the Postman app proxy also intercepts and captures your requests. Additionally, it can capture responses. You can log all network requests and responses under the History tab in the sidebar, or in a collection.

## Using Postman's proxy example

In this tutorial, you will use Postman's proxy feature to inspect HTTP communication going to and from your phone. To get started, make sure your computer and phone are connected to the same local wireless network.

### Step 1: Set up the proxy in Postman

1. Open the **Capture requests and cookies** modal in the Postman app by clicking the icon in the header toolbar.<br/><br/>
    <img src="https://assets.postman.com/postman-docs/postman-proxy-settings-button.jpg" alt="Capture requests and cookies icon" width="300px"/>
1. In the **Requests** tab, set **Source** to **Proxy**.
1. Make note of the port mentioned in the proxy settings. In this example, it's set for the default port ``5555``.
1. Set **Save requests to** to **History** to store requests in the History sidebar panel. You can also select a collection from the list and save the requests there.
    <img alt="proxy settings modal" src="https://assets.postman.com/postman-docs/postman-capture-request-modal.jpg" width="350px"/>
1. Select **Save responses** to also save each request's responses. They will be saved alongside the requests in the same collection or history.
    > In responses with a `content-type` containing images, audio, or video, content is intercepted but not captured. The only information captured is response headers, time taken, and the status code.
1. There are additional filters you can use to limit the requests and responses captured. You can do the following:
    * Exclude requests with image, JS, or CSS responses.
    * Only capture URLs containing a string or a regular expression.
    * Not capture URLs containing a string or a regular expression.
    * Only capture the methods specified in a comma-separated list.

#### Grouping requests and responses

By default, requests and responses will be saved chronologically. If you save them to a collection, you can also store them grouped by domain name, endpoints, or both.

1. In **Save requests to**, specify a collection to store requests and responses.
1. Under **Organize requests by**, select **Domain name**, **Endpoints**, or both. Your requests and responses will be organized in folders in the selected collection.

### Step 2: Find your computer's IP address

On macOS, the computer's IP address can be found in **System Preferences > Network**. The IP address of your system will be something like the example here `192.168.0.101`.

[![system preferences](https://assets.postman.com/postman-docs/osx-network-settings-aa.jpeg)](https://assets.postman.com/postman-docs/osx-network-settings-aa.jpeg)

### Step 3: Configure HTTP proxy on your mobile device

1. Open the wireless settings of your mobile device and update the configuration of the wireless connection to use HTTP Proxy. Set the IP address with the IP you retrieved from your computer in the second step. Set the port with the port you established in Postman in **Step 1**.

    <img src="https://assets.postman.com/postman-docs/ios-http-proxy-settings-aa.jpeg" alt="wireless settings on mobile device" width="350">

1. Set the proxy IP address of your device (an iPhone in this example) to the IP address you obtained from your system and port ``5555``.

You are all set! Head over to the Postman app, and you will start seeing the network calls listed under the **History** tab of the sidebar, or the collection you specified. Open your device's web browser or your application and you will start seeing HTTP traffic passing through the app or the browser.

<img src="https://assets.postman.com/postman-docs/postman-proxy-responses-collection.jpg" alt="requests under collection" width="350px"/>

## Connect to proxy for target devices

The broader development community has published some useful tutorials for setting up a proxy server on various operating systems.

* [Windows](https://www.howtogeek.com/tips/how-to-set-your-proxy-settings-in-windows-8.1/)
* [Linux](https://www.shellhacks.com/linux-proxy-server-settings-set-proxy-command-line/)
* [macOS](https://support.apple.com/en-gb/guide/mac-help/mchlp2591/mac)
* [Android](https://www.howtogeek.com/295048/how-to-configure-a-proxy-server-on-android/)

## Requirements to use the OpenSSL module

The **OpenSSL** module is internally being used to generate certificate-key pairs. This module has to be installed and accessible through the command line.

OpenSSL is already installed for macOS and typically installed for Linux. For Windows systems, **OpenSSL** must be installed.

### Install the OpenSSL module on Windows

1. Download and install the OpenSSL module applicable for your computer from [here](https://slproweb.com/products/Win32OpenSSL.html).

    ![download OpenSSL installer](https://assets.postman.com/postman-docs/windows-download-openssl.jpg)
1. Open the Windows Start menu and search for "Environment Variables."

    ![download OpenSSL installer](https://assets.postman.com/postman-docs/windows-environment-variables-search.jpg)
1. From the results, select "Environment Variables."
1. From the **System Properties** window, select "Environment Variables."

    ![download OpenSSL installer](https://assets.postman.com/postman-docs/windows-environment-variables-advanced.jpg)
1. Select **Path** from **User variables** and then select **Edit**.

    ![download OpenSSL installer](https://assets.postman.com/postman-docs/windows-environment-variables-edit-browse-bb.jpg)
1. Select **Browse**.

    ![download OpenSSL installer](https://assets.postman.com/postman-docs/windows-openssl-edit-environment-variables-bb.jpg)
1. Go to: **This PC > Windows (C:) > Program Files > OpenSSL - Win64 > bin**.

    ![download OpenSSL installer](https://assets.postman.com/postman-docs/windows-oppssl-environment-variables-bin.jpg)
1. Select **OK** to add the folder directory. Then, select **OK** to confirm changes and close the remaining windows.
1. Open **Command Prompt** and run **openssl version** to confirm the installation was successful.

    ![download OpenSSL installer](https://assets.postman.com/postman-docs/windows-check-openssl-version.jpg)

## Capture HTTPS traffic with Postman's built-in proxy

You can use the Postman's proxy to inspect HTTPS communication from your Android, iOS, Linux, macOS, and Windows devices. After you enable the proxy feature, follow the instructions below to install the security certificate on the target devices.

### macOS

1. Go to the following location: `~/Library/Application Support/Postman/proxy`.
1. Double click on `postman-proxy-ca.crt`.
1. Choose **System** from the keychain option and then select **OK**.
  [![Select System keychains](https://assets.postman.com/postman-docs/mac-install-crt-aa.jpeg)](https://assets.postman.com/postman-docs/mac-install-crt-aa.jpeg)
1. Select and open the imported Postman certificate. Then select **Always Trust**. You can change this setting after you have completed the testing for your application.
  [![Select always trust for Postman keychain](https://assets.postman.com/postman-docs/mac-install-crt-always-trust-aa.jpeg)](https://assets.postman.com/postman-docs/mac-install-crt-always-trust-aa.jpeg)
1. Select **Always Trust** only for **Secure Sockets Layer(SSL)**.
  [![Select always trust only for SSL option](https://assets.postman.com/postman-docs/mac-install-crt-custom-settings-aa.jpeg)](https://assets.postman.com/postman-docs/mac-install-crt-custom-settings-aa.jpeg)

After these steps, you will be able to capture HTTPS Requests with the Postman proxy.

### Windows

> You need to [Install the OpenSSL module](/docs/sending-requests/capturing-request-data/capturing-http-requests/#requirements-to-use-the-openssl-module) to generate the certificate.

1. From Windows File Explorer, navigate to **%APPDATA%\Postman\proxy**. Typically, it will be located at: **C:\Users\<user>\AppData\Roaming\Postman\proxy**
    [![Navigate to crt file](https://assets.postman.com/postman-docs/windows-crt-file-aa.jpeg)](https://assets.postman.com/postman-docs/windows-crt-file-aa.jpeg)
1. Right-click on the **postman-proxy-ca.crt** file and select **Install Certificate**.
    [![Select crt file](https://assets.postman.com/postman-docs/windows-install-crt-aa.jpeg)](https://assets.postman.com/postman-docs/windows-install-crt-aa.jpeg)
1. Select the Local Machine and proceed. This will need Administrator permissions.
    [![Select local machine](https://assets.postman.com/postman-docs/windows-install-crt-local-aa.jpeg)](https://assets.postman.com/postman-docs/windows-install-crt-local-aa.jpeg)
1. Select **Place all certificates in the following store**.
    [![Select crt store location](https://assets.postman.com/postman-docs/windows-crt-location-aa.jpeg)](https://assets.postman.com/postman-docs/windows-crt-location-aa.jpeg)
1. Select **Browse** and then select **Trusted Root Certification Authorities**.
    [![Select trust root crt authorities](https://assets.postman.com/postman-docs/windows-crt-install-store-aa.jpeg)](https://assets.postman.com/postman-docs/windows-crt-install-store-aa.jpeg)
1. Select **OK** and **Next** to confirm the options.
1. Select **Finish** to save all configurations and import the certificate.
    [![Save configurations and import crt](https://assets.postman.com/postman-docs/windows-crt-install-complete-aa.jpeg)](https://assets.postman.com/postman-docs/windows-crt-install-complete-aa.jpeg)
    [![Select System keychains](https://assets.postman.com/postman-docs/windows-crt-import-complete-aa.jpeg)](https://assets.postman.com/postman-docs/windows-crt-import-complete-aa.jpeg)
1. After import is complete, restart the Postman app.

### Linux

### CentOS and Red Hat Enterprise Linux distros

1. Copy the `postman-proxy-ca.crt` certificate file from `~/.config/Postman/proxy` to the `/etc/pki/ca-trust/source/anchors/` directory.

    `sudo cp ~/.config/Postman/proxy/postman-proxy-ca.crt /etc/pki/ca-trust/source/anchors/`
1. Run the command below in terminal to complete the installation:

    `sudo update-ca-trust extract`

### Ubuntu distros

1. Create the directory for the CA certificate with the command below.

    `sudo mkdir -p /usr/share/ca-certificates/extra`
1. Copy `postman-proxy-ca.crt` to the new folder with the command below.

    `sudo cp ~/.config/Postman/proxy/postman-proxy-ca.crt /usr/share/ca-certificates/extra/postman-proxy-ca.crt`
1. Add the certificate to the system with the two commands below.

    `sudo dpkg-reconfigure ca-certificates`

    `sudo update-ca-certificates`

### Install the certificate for use with Mozilla Firefox Browsers

1. In Firefox and click the application menu and select **Preferences**.
    [![Select Firefox Preferences](https://assets.postman.com/postman-docs/firefox-crt-preference-aa.jpeg)](https://assets.postman.com/postman-docs/firefox-crt-preference-aa.jpeg)
1. Select **Privacy & Security**, scroll down to **Certificates** and select **View Certificates**. This opens Firefox’s Certificate Manager.
    [![Select Firefox privacy settings](https://assets.postman.com/postman-docs/firefox-privacy-settings-aa.jpeg)](https://assets.postman.com/postman-docs/firefox-privacy-settings-aa.jpeg)
1. Once the Certificate Manager is open, select **Authorities** tab and select on **Import**.
    [![Select crt manager](https://assets.postman.com/postman-docs/firefox-crt-manager-aa.jpeg)](https://assets.postman.com/postman-docs/firefox-crt-manager-aa.jpeg)
1. Select the **postman-proxy-ca.crt** and click on **Open**.
    [![Select postman crt](https://assets.postman.com/postman-docs/firefox-open-crt-aa.jpeg)](https://assets.postman.com/postman-docs/firefox-open-crt-aa.jpeg)
    Only mark **Trust this CA to identify websites** and click on **Ok**.
    [![Select trust CA crt](https://assets.postman.com/postman-docs/firefox-trust-crt-aa.jpeg)](https://assets.postman.com/postman-docs/firefox-trust-crt-aa.jpeg)
1. The certificate is installed. To verify if the certificate is installed, the **Postman Proxy CA** will be listed under the **Authorities** tab of Certificate Manager.
    [![Verify vrt install](https://assets.postman.com/postman-docs/firefox-verify-crt-aa.jpeg)](https://assets.postman.com/postman-docs/firefox-verify-crt-aa.jpeg)

### iOS

1. Download the `postman-proxy-ca.crt` certificate to the iOS device.

    <img src="https://assets.postman.com/postman-docs/ios-transfer-cert-aa.jpeg" alt="transfer crt to iOS device" width="350">
1. Go to **Settings > Profile Downloaded**.

    <img src="https://assets.postman.com/postman-docs/ios-install-cert-aa.jpeg" alt="iOS install cert" width="350">
1. Select **Install** for both of the following prompts. Installing a certificate requires the user to enter the device passcode to proceed.

    <img src="https://assets.postman.com/postman-docs/ios-install-cert2-aa.jpeg" alt="iOS install cert2" width="350">

    When the certificate is installed, your device will show an installation confirmation screen like the one below.

    <img src="https://assets.postman.com/postman-docs/ios-install-done-aa.jpeg" alt="iOS install cert done" width="350">

    Select **Done** to review all existing certificates.
1. Go to **Settings App > General > About > Certificate Trust Settings**. Enable full trust for Postman’s root certificate.

    <img src="https://assets.postman.com/postman-docs/ios-cert-trust-settings-aa.jpeg" alt="iOS enable trust settings" width="350">
1. Select **Continue** to complete the installation.

    <img src="https://assets.postman.com/postman-docs/ios-root-cert-settings-aa.jpeg" alt="iOS crt settings" width="350">

    Confirm the certificate settings.

    <img src="https://assets.postman.com/postman-docs/ios-enable-full-trust-aa.jpeg" alt="iOS crt full trust settings" width="350">

## Use Interceptor to capture requests

See [Capturing requests with Interceptor](/docs/sending-requests/capturing-request-data/interceptor/) for full instructions to set up and use this method.
