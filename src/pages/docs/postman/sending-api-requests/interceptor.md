---
title: "Interceptor"
order: 34
page_id: "interceptor"
search_keyword: "pm.interceptorInstaller.reset, interceptorInstaller.reset, pm.interceptorBridge.setKey, interceptorBridge.setKey"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Capturing HTTP requests"
    url: "/docs/postman/sending-api-requests/capturing-http-requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Introducing Interceptor integration for native Postman apps"
    url: "https://blog.postman.com/2019/06/24/introducing-interceptor-integration-for-native-postman-apps/"
  - type: link
    name: "Client proxy settings in Postman"
    url: "https://blog.postman.com/2017/09/29/client-proxy-settings-in-postman/"

warning: false

---

Postman Interceptor is a Chrome extension that acts as a browser companion to Postman.

Interceptor enables you to sync cookies from your browser to Postman and capture network requests directly from Chrome, saving them to your history or Postman collection.

If you are using the Postman Chrome app, refer to [Using the Interceptor with Postman's Chrome app](#using-the-interceptor-with-postmans-chrome-app).

## Contents

* [Installing Interceptor](#installing-interceptor)

* [Using Interceptor](#using-interceptor)

    * [Syncing cookies](#syncing-cookies)

    * [Capturing requests](#capturing-requests)

* [How it works](#how-it-works)

    * [Troubleshooting tips](#troubleshooting-tips)

* [Security](#security)

* [Updating Interceptor](#updating-interceptor)

* [Using Interceptor with Postman's Chrome app](#using-the-interceptor-with-postmans-chrome-app)

## Installing Interceptor

To get started, you'll need to first install Postman Interceptor:

1. [Download](https://go.pstmn.io/interceptor-download) Interceptor in the Chrome Web Store. If you already have the extension, ensure it is version v0.2.26 or later.

2. Navigate to the Postman app and click the satellite icon in the upper-right corner to **Capture requests and cookies with Postman**. You can then enable those two features in their respective tabs. Under **Requests**, change **Source** to Interceptor.

3. Select **Install Interceptor Bridge** to download the Bridge, an independent executable that facilitates communication with the Interceptor.

    If you're on Windows or Linux, Postman will take care of everything for you. If you're on MacOS, you'll be prompted to install NodeJS if it's not already installed on your computer.

4. Confirm Interceptor is ready to use by checking that the **Interceptor connected** status is green. You can now capture requests from your browser and cookies from any domain to use in Postman.

> You can learn more about the built-in proxy in [Capturing HTTP Requests](/docs/postman/sending-api-requests/capturing-http-requests/).

## Using Interceptor

You can use Interceptor to capture and sync cookies and requests to Postman.

### Syncing cookies

You can retrieve cookies from any domain and use them in your Postman requests by enabling **Capture cookies**. You can then add your domain, or multiple, with **Add Domain**.

[![interceptor on](https://assets.postman.com/postman-docs/Interceptor-ex1.gif)](https://assets.postman.com/postman-docs/Interceptor-ex1.gif)

Interceptor will sync all cookies for that domain from the browser. It will also sync cookies for all subdomains.

> For example, adding the domain `facebook.com` will also sync cookies from `m.facebook.com`.

Interceptor keeps cookies for a fixed set of domains in sync, updating Postman from the browser when cookies update, including deletions. Due to this, you can use browser sessions to make API calls in Postman. You will not be able to save these to Postman’s history.

You can remove a domain at any time by clicking **X** next to the domain. This will prevent future cookie updates from being synced, but it won’t delete cookies that have already been synced.

You can learn more about managing cookies in Postman in [Cookies](/docs/postman/sending-api-requests/cookies/).

### Capturing requests

You can capture requests by navigating to **Requests**, setting **Source** to **Interceptor**, and turning **Capture Requests** to **ON**.

You can choose where captured requests come in by updating selecting the **Save Requests to** drop-down. You'll immediately start to see requests from your browser streaming into Postman.

Once the **Interceptor connected** status is green, you can add URL or HTTP method filters by clicking **Show additional filters**.

[![capturing requests](https://assets.postman.com/postman-docs/interceptor-ex2.jpg)](https://assets.postman.com/postman-docs/interceptor-ex2.jpg)

## How it works

Interceptor works by leveraging a Google Chrome feature and the installation process differs according to your operating system.

Postman's native app requires Chrome's [Native Messaging](https://developer.chrome.com/extensions/nativeMessaging) feature. This requires an independent executable and will be installed on your machine.

Your installation may include the following options:

  1. **[MacOS only] Install NodeJS**: If Postman detects that you don't have the NodeJS binary available, you'll be prompted to install it. Postman will then download the [latest stable version of Node](https://nodejs.org/).
  2. **[Windows only] Add a registry key**: A `com.postman.postmanapp` key is added to `HKCU\Software\Google\Chrome\NativeMessagingHosts\`. The key points to the location of a JSON file (the manifest).
  3. **Add a manifest file**: This is a JSON file (whose structure is defined by [Native Messaging](https://developer.chrome.com/extensions/nativeMessaging)) that gives Chrome the absolute path of the executable that the Interceptor extension can talk to. This file will be installed in a location dependent on your operating system:
    * **MacOS**:  `/Users/<username>/Library/Application Support/Google/Chrome/NativeMessagingHosts/com.postman.postmanapp.json`
    * **Windows**: `%USERPROFILE%\.postman\InterceptorBridge\com.postman.postmanapp.json`
    * **Linux**: `~/.config/google-chrome/NativeMessagingHosts/com.postman.postmanapp.json`
  4. **Add an executable**: This is a new process started by Chrome when required by the Interceptor extension. For Windows and Linux, this is a self-contained binary that is approximately 40MB in size. For MacOS, this is a 33KB JavaScript file. This file must be executable. This executable will be installed in a location dependent on your operating system:
    * **MacOS**: `$HOME/.postman/InterceptorBridge`
    * **Windows**: `%USERPROFILE%/.postman/InterceptorBridge`
    * **Linux**: `$HOME/.postman/InterceptorBridge`

### Troubleshooting tips

You can find the current status of your Interceptor integration by selecting the Interceptor satellite icon in the upper-right corner of the app, then navigating to **Cookies**:

* **Connected**: You can proceed with using Interceptor.
* **Not connected**: Ensure Interceptor is installed correctly—refer to [Installing interceptor](#installing-interceptor).
* **Dependencies not installed**: Postman will walk you through how to install the required dependencies.

 If you encounter errors during installation or download, check out the following steps to resolve them:

* **`CHROME_NOT_INSTALLED`**: Check whether Chrome is installed and a `NativeMessagingHosts` folder exists at the following location:
    * **MacOS**: `~/Library/Application Support/Google/Chrome/NativeMessagingHosts`
    * **Linux**:  `~/.config/google-chrome/NativeMessagingHosts`
    * **Windows** : `HKEY_CURRENT_USER\SOFTWARE\Google\Chrome\NativeMessagingHosts`
* **`INTERNET_CONNECTIVITY`**:
    * Check your internet connection.
    * If you are sitting behind a firewall check your inbound and outbound policies.
    * If you are using a proxy, check that it is properly configured.
* **`FILE_PERMISSIONS_REQUIRED`**:
    * Verify that you have permissions to create the `.postman/InterceptorBridge` folders.
    * Verify that you have permissions to delete, write, and execute in the path `.postman/InterceptorBridge`.
    * [MacOS only] Verify that you have a `~/Downloads` folder and write permissions for it.
    * If the above steps are unsuccessful, close Chrome and Postman before retrying the installation.
* **[Windows only] `REGISTRY_ACCESS_NEEDED`**:
    * Verify that you have [permissions](https://docs.microsoft.com/en-us/windows/win32/sysinfo/registry-key-security-and-access-rights) to add a registry key.
    * Verify that `C:\Windows\System32` is present in the `PATH` (a [system environment variable](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7)) so that `reg` queries can be executed.

If you are unable to use the integration after completing the guided installation, you'll want to check the following items:

* **[MacOS-only] Node is properly installed**: Node should be installed and available at `/usr/local/node` or `/usr/local/bin/node`, or you have the environment variable `NVM_BIN` set.
* **Manifest file location**: The manifest file (``com.postman.postmanapp.json``) is present, has the correct extension ID (``aicmkgpgakddgnaphhhpliifpcfhicfo``), and the correct path to the executable file.
    * If this is missing, delete the following directory and restart the [installation process](#installing-interceptor):
        * **MacOS / Linux**: `$HOME/.postman`
        * **Windows**: `%USERPROFILE%\.postman\`
* **Executable**: The executable that the manifest points to should exist and be approximately 40MB for Windows/Linux or 33KB for MacOS.
    * If this is missing, delete the following directory and restart the [installation process](#installing-interceptor):
        * **MacOS / Linux**: `$HOME/.postman`
        * **Windows**: `%USERPROFILE%\.postman\`

For MacOS, the NodeJS downloader should be saved to your ~/Downloads directory.

For Windows, if you see an installation error in Postman, close Chrome and retry before repeating the installation process.

If the aforementioned troubleshooting steps do not fix the problem, you may need to remove all of Interceptor's dependencies (i.e the manifest file, Interceptor Bridge, and for Windows users, the registry key). To do so, open Postman and navigate to **View** > **Developer** > **Show DevTools (Current View)**. Enter `pm.interceptorInstaller.reset()` to remove all present Interceptor dependencies. You can then [continue installation from step 3](#installing-interceptor).

> If any dependencies cannot be removed due to permission issues, you’ll be prompted to delete them manually.

If you are unable to resolve an ``INTERNET_CONNECTIVITY`` error, you can manually install Interceptor:

* **MacOS/Linux**:

    * **[MacOS-only]** Node(>v6.0.0) should be installed and available at `/usr/local/node` or `/usr/local/bin/node`, or you have the environment variable `NVM_BIN` set.
    * Install bridge for [MacOS](https://go.pstmn.io/interceptor-bridge-macos)/[Linux](https://go.pstmn.io/interceptor-bridge-linux).
    * Run the script ``install_host.sh``.
    * After executing the script, check the following items:
        1. Verify  `InterceptorBridge` file exists in this path ``$HOME/.postman``.
        2. Verify the manifest file ``com.postman.postmanapp.json`` is present at `~/Library/ApplicationSupport/Google/Chrome/NativeMessagingHosts` for MacOs or `~/.config/google-chrome/NativeMessagingHosts` for Linux. Check that it has the correct extension ID ``aicmkgpgakddgnaphhhpliifpcfhicfo``, and the correct path ``$HOME/.postman`` to the executable file `InterceptorBridge`.

* **Windows**:

    * Install bridge for [Windows](https://go.pstmn.io/interceptor-bridge-windows).
    * Run the script ``install_host.bat``.
    * After executing the script, check the following items:
        1. Verify the `InterceptorBridge.exe` file exists in this path ``%USERPROFILE%\.postman\``.
        2. Verify in this path `HKEY_CURRENT_USER\SOFTWARE\Google\Chrome\NativeMessagingHosts` that the manifest file ``com.postman.postmanapp.json`` exists with the correct extension ID ``aicmkgpgakddgnaphhhpliifpcfhicfo`` and the correct path ``%USERPROFILE%\.postman\`` to the executable file ``InterceptorBridge.exe``.

**Note:**

 1. To run the script depending on your OS, you may need to double-click or execute the installer script via a shell. Users on MacOS/Windows may see a security warning. For example, to override the security on MacOS, you may need to right click > open.

 2. If you have installed Postman app via snap (in LINUX machines), Interceptor will not connect and you must reinstall the Postman app outside of snap.

## Security

The communication between Interceptor and Postman is encrypted. You can change the default encryption key for additional security by opening the Postman app and heading to **View** > **Developer** > **Show DevTools (Current View)** > **Console**, then entering `pm.interceptorBridge.setKey("<your key here>")`.

For the Interceptor extension, first enable **Developer mode** in [Chrome extensions](chrome://extensions/). You can then right click on the Interceptor icon in your browser, select **Inspect Popup** > **Console**. Enter the command `pm.interceptorBridge.setKey("<your key here>")` again here. All communication through this channel will now be encrypted using your own key.

## Updating Interceptor

To update Interceptor, you can take the following steps:

1. View your existing Chrome extensions by clicking the menu icon at the top right of the Chrome app > **More Tools** > **Extensions.**

2. Click to turn on developer mode in the top-right corner.

3. Click **Update** on the top left to update your extensions.

## Using the Interceptor with Postman's Chrome app

> Postman's Chrome app is deprecated and no longer offers feature parity with Postman native. It is highly recommended that you switch to [Postman native](https://www.postman.com/downloads/).

The Postman Chrome app's Interceptor functions as a proxy to capture HTTP and HTTPS requests. You can use Interceptor to capture requests made by your Chrome browser and send them to your Postman app's history.

You can filter requests according to the URL by clicking the Interceptor icon in your browser, then applying a filter under **Filter requests**.

You can use Interceptor to create a Postman collection for a web app or to debug your APIs. You can also use the Postman Chrome app in tandem with Interceptor to make and capture requests.

To use Interceptor with Postman Chrome, you can take the following steps:

1. [Install Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?) from the Chrome Web Store.
2. Install [Interceptor](https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo/support?hl=en) from the Chrome Web Store.
3. Open Postman, click on the Interceptor icon in the toolbar, and toggle to **On**.

You can then browse your app or website and monitor requests as they stream in to your Postman history.
