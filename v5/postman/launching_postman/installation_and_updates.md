---
title: "Installation and updates"
page_id: "installation_and_updates"
warning: false

---

### **Installing the Postman app**

### Postman native apps

Postman is available as a native app for Mac, Windows, and Linux operating systems.

To install Postman, go to the [download page](https://www.getpostman.com/downloads/) and click **Download** for Mac / Windows / Linux depending on your platform.

[![Postman download page](https://assets.postman.com/postman-docs/59161734.png)](https://assets.postman.com/postman-docs/59161734.png)

##### **macOS installation**

   Once you’ve downloaded app, you can drag the file to the "Applications" folder. Double click on Postman to open the application.

##### **Windows installation**

   *   Download the setup file
   *   Run the installer

##### **Linux installation**

   *   Installation on Linux can vary between distributions. Check out this guide for installing the [Postman app on Ubuntu 16.04](https://blog.bluematador.com/posts/postman-how-to-install-on-ubuntu-1604/?utm_source=hootsuite&utm_medium=twitter&utm_campaign=).

### Postman Chrome app

We recommend using the Postman native apps, but Postman is also available as a Chrome app.  Read more about [why support for the Postman Chrome app is being deprecated](http://blog.getpostman.com/2017/03/14/going-native/).

The Postman Chrome app can only run on the Chrome browser.  To use the Postman Chrome app, you will first need to [install Google Chrome](http://www.google.com/chrome/).

If you already have Chrome installed, head over to [Postman’s page](https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) on the Chrome Web Store, and click ‘Add to Chrome’.

The download should take a few minutes depending on your internet connection. Once you’ve downloaded the app, you can [launch Postman](/docs/postman/launching_postman/installation_and_updates/).

### Differences between Chrome and native apps

Postman’s native apps are built on [Electron](http://electron.atom.io/), and overcome a number of restrictions of the Chrome platform.

A few features exclusive to the native apps are listed here:

##### **Cookies**

The native apps let you work with [cookies](/docs/postman/sending_api_requests/cookies/) directly. Unlike the Chrome app, no separate extension ([Interceptor](/docs/postman/sending_api_requests/interceptor_extension/)) is needed.

##### **Built-in proxy**

The native apps come with a built-in proxy that you can use to [capture network traffic](/docs/postman/sending_api_requests/capturing_http_requests/).

##### **Menu bar**

The native apps are not restricted by the Chrome standards for the menu bar.  With the native apps, you can create collections, switch to history requests, and more.

##### **Restricted headers**

The latest versions of the native apps let you send headers like Origin and User-Agent. These are [restricted](/docs/postman/sending_api_requests/interceptor_extension/) in the Chrome app. 

##### **Don't follow redirects option**

This option exists in the native apps to prevent requests that return a 300-series response from being automatically redirected.  Previously, users needed to use the Interceptor extension to do this in the Chrome app.

##### **Postman console**

The latest version of the native app also has a built-in [console](/docs/postman/sending_api_requests/debugging_and_logs/), which allows you to view the network request details for API calls.

### **Migrating to the native app**

It’s simple.  Sign in to your Postman account after you [download](https://www.getpostman.com/downloads/) and start the new native app, and all your history and collections will be automatically synced.

Alternatively, if you don't want to sign in to your Postman account, you can bulk export your Postman data from the Chrome app, and then bulk import into the new native app.

[![import data](https://assets.postman.com/postman-docs/59161744.png)](https://assets.postman.com/postman-docs/59161744.png)  

##### **Bulk export**

From the Postman settings, select the **Data** tab and click the **Download** button to export all your collections, environments, globals and header presets to a single dump file.

##### **Bulk import**

From the same area in Postman settings, you can initiate a bulk import from a Postman data dump file.  This will overwrite your existing data so be a little careful.

### **Updating Postman**

##### **Native app (Mac, Windows and Linux)**

Postman's native apps will check for updates whenever the app reloads, or is launched. The app will display the changelog prompting you to update the app. 

[![changelog](https://assets.postman.com/postman-docs/59161812.png)](https://assets.postman.com/postman-docs/59161812.png)

##### **Mac and Windows**

Click **Update** to download the latest update. You will be notified when the download is complete prompting you to restart the Postman app to apply the updates. If you're not ready to update yet, click **Remind me later** to prompt you again after the next app reload or launch.

You can also configure your preferences to automatically download updates under the **Update** tab within the **SETTINGS** modal.

   *   All
   *   Minor fixes
   *   None

**All** -  Downloads all updates automatically and will show a small notification at the top prompting you to restart the app to apply the updates.

**Minor fixes** - You will be notified of all major updates, and other minor fixes will automatically download prompting you to restart the app to apply the updates.

**None** - This will show up the update version every time it finds a update for your current version. 

[![set automatic updates in settings](https://assets.postman.com/postman-docs/59161823.png)](https://assets.postman.com/postman-docs/59161823.png)

**Troubleshooting updates in macOS Sierra**

We have received user feedback that the Mac update does not complete successfully, even after downloading the update for macOS Sierra.

This can be solved by moving the app out of the Downloads directory. The Postman updater is unable to switch the downloaded version on the read-only memory, initially assigned for the downloaded apps by macOS Sierra.  

If you continue experiencing difficulty with the update, fetch the logs from **~/Library/Caches/com.postmanlabs.mac.ShipIt** in your system and let us know.

##### **Linux**

Postman’s native app on Linux will notify you whenever an update is available. If an update is available, you need to download the [latest version](https://www.getpostman.com/downloads/) of the application, remove the current application directory, and extract the new version. Postman stores all user data outside of the application directory, so you can safely remove the current application directory and install the new version.  

Since Postman's native apps check for updates only on app reload or launch, at any time, you can force a check for updates under the **Update** tab in the **SETTINGS** modal of the app. 

[![check for updates](https://assets.postman.com/postman-docs/59161839.png)](https://assets.postman.com/postman-docs/59161839.png)

##### **Chrome**

Postman’s Chrome app is usually updated automatically. However, Postman doesn't control the Chrome app update flow, and Chrome sometimes doesn’t update the app for long periods of time.

The latest version is visible on [Postman’s Web Store listing](https://chrome.google.com/webstore/detail/fhbjgbiflinjbdggehcddcbncdddomop?hl=en).

To manually force an update, here’s what you need to do in Chrome:

  1.  In the address bar, type `chrome://extensions`.
  2.  At the top of the page, check and enable **Developer Mode**.
  3.  Click the **Update extensions now** button beneath **Developer Mode**.

  [![Chrome developer mode](https://assets.postman.com/postman-docs/58280741.png)](https://assets.postman.com/postman-docs/58280741.png)
