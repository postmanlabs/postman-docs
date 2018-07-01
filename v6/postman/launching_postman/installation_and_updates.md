---
title: "Installation and updates"
page_id: "installation_and_updates"
warning: false

---

### **Installing the Postman app**

### Postman native apps

Postman is available as a native app for Mac, Windows, and Linux operating systems.

To install Postman, go to the [apps page](https://www.getpostman.com/apps){:target="_blank"} and click **Download** for Mac / Windows / Linux depending on your platform.

[![Postman apps page](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59161734.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59161734.png)

##### **macOS installation**

Once you’ve downloaded and unzipped the app, double click on Postman. You will be prompted to move file into the "Applications" folder. Click "Move to Applications Folder" to ensure future updates can be installed correctly. The app will open after the prompt.
   
[![Move to Applications Folder](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/move+to+app+folder.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/move+to+app+folder.png)

##### **Windows installation**

   *   Download the setup file
   *   Run the installer

##### **Linux installation**

   * Installation on Linux can vary between distributions. For installation on Ubuntu, download and unzip the file, then double click on Postman to open the app. 

### Postman Chrome app

We recommend using the Postman native apps, but Postman is also available as a Chrome app. Read more about [why support for the Postman Chrome app is being deprecated](http://blog.getpostman.com/2017/03/14/going-native/).

The Postman Chrome app can only run on the Chrome browser. To use the Postman Chrome app, you will first need to [install Google Chrome](http://www.google.com/chrome/){:target="_blank"}.

If you already have Chrome installed, head over to [Postman’s page](https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop?hl=en){:target="_blank"} on the Chrome Web Store, and click ‘Add to Chrome’.

The download should take a few minutes depending on your internet connection. Once you’ve downloaded the app, you can [launch Postman](/docs/v6/postman/launching_postman/installation_and_updates).

### Differences between Chrome and native apps

Postman’s native apps are built on [Electron](http://electron.atom.io/){:target="_blank"}, and overcome a number of restrictions of the Chrome platform.

A few features exclusive to the native apps are listed here:

##### **Cookies**

The native apps let you work with [cookies](/docs/v6/postman/sending_api_requests/cookies) directly. Unlike the Chrome app, no separate extension ([Interceptor](/docs/v6/postman/sending_api_requests/interceptor_extension)) is needed.

##### **Built-in proxy**

The native apps come with a built-in proxy that you can use to [capture network traffic](/docs/v6/postman/sending_api_requests/capturing_http_requests).

##### **Menu bar**

The native apps are not restricted by the Chrome standards for the menu bar. With the native apps, you can create collections, switch to history requests, and more.

##### **Restricted headers**

The latest versions of the native apps let you send headers like Origin and User-Agent. These are [restricted](/docs/v6/postman/sending_api_requests/interceptor_extension) in the Chrome app. 

##### **Don't follow redirects option**

This option exists in the native apps to prevent requests that return a 300-series response from being automatically redirected. Previously, users needed to use the Interceptor extension to do this in the Chrome app.

##### **Postman console**

The latest version of the native app also has a built-in [console](/docs/v6/postman/sending_api_requests/debugging_and_logs), which allows you to view the network request details for API calls.

### **Migrating to the native app**

It’s simple.  Sign in to your Postman account after you [download](https://www.getpostman.com/apps){:target="_blank"} and start the new native app, and all your history and collections will be automatically synced.

Alternatively, if you don't want to sign in to your Postman account, you can bulk export your Postman data from the Chrome app, and then bulk import into the new native app.

[![import data](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-export-data-settings.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-export-data-settings.png)  

##### **Bulk export**

From the Postman settings, select the **Data** tab and click the **Download** button to export all your collections, environments, globals and header presets to a single dump file.

##### **Bulk import**

From the same area in Postman settings, you can initiate a bulk import from a Postman data dump file. This will overwrite your existing data so be careful.

### **Updating Postman**

##### **Native app (Mac, Windows and Linux)**

Postman's native apps will notify you whenever a major update is available. Other updates are indicated by an indicator that appears on the settings icon. If the indicator is red instead of orange, it indicates a failed update.

[![settings update indicator](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/39862921-c290dbd0-5462-11e8-85a7-cfaf4141f0d3+(1).png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/39862921-c290dbd0-5462-11e8-85a7-cfaf4141f0d3+(1).png)

Click **Update** to download the latest update. You will be notified when the download is complete prompting you to restart the Postman app to apply the updates. If you're not ready to update yet, click **Later** to auto update after the next app launch.

You can also configure your preferences to enable automatic download for major updates under the **Update** tab within the **SETTINGS** modal. Postman automatically downloads minor updates and bug fixes.

[![set automatic updates in settings](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auto+update+enable.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auto+update+enable.png)

##### **Troubleshooting Postman Updates***
Some users may encounter issues updating in the Windows version of Postman 6.1. To resolve you must set the environmental variable `POSTMAN_DISABLE_GPU=true`. In order to do this, follow these steps:

1. Open `Advanced system settings` 
2. Navigate to `Environment Variables` 
3. Add a new system variable and save by click 'OK'.


[![step 1](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.1.png)

[![step 2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.12.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.12.png)

[![step 3](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.1+(1).png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.1+(1).png)


##### **Chrome**

Postman’s Chrome app is usually updated automatically. However, Postman doesn't control the Chrome app update flow, and Chrome sometimes doesn’t update the app for long periods of time.

The latest version is visible on [Postman’s Web Store listing](https://chrome.google.com/webstore/detail/fhbjgbiflinjbdggehcddcbncdddomop?hl=en){:target="_blank"}.

To manually force an update, here’s what you need to do in Chrome:

  1.  In the address bar, type `chrome://extensions`.
  2.  At the top of the page, check and enable **Developer Mode**.
  3.  Click the **Update extensions now** button beneath **Developer Mode**.

  [![Chrome developer mode](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58280741.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58280741.png)
