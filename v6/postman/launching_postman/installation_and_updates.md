---
title: "Installation and updates"
page_id: "installation_and_updates"
warning: false

---

Postman is available as a native app for macOS, Windows (32-bit and 64-bit), and Linux (32-bit and 64-bit) operating systems.

## Get the latest Postman app

To get the latest version of the Postman app, go to the [download page](https://www.getpostman.com/downloads/) and click **Download** for macOS / Windows / Linux depending on your platform.

![Postman download page](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Download_Screen1.png "Postman download page")

## Postman native apps

### macOS installation

Once you’ve downloaded and unzipped the app, double click on Postman. You will be prompted to move file into the "Applications" folder. Click "Move to Applications Folder" to ensure future updates can be installed correctly. The app will open after the prompt.

![Move to Applications Folder](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Download_MoveFolder.png "Move to Applications Folder")

### Windows installation

* Download the setup file
* Run the installer

### Linux installation

  For installation on Linux, perform the following steps:

1. First download and unzip the file
1. And then create a desktop file by name Postman.desktop. Create the ```Postman.desktop``` file in the following location:

      ```~/.local/share/applications/Postman.desktop```

Use the content below in the above file:

    [Desktop Entry]
    Encoding=UTF-8
    Name=Postman
    Exec=YOUR_INSTALL_DIR/Postman/app/Postman %U
    Icon=YOUR_INSTALL_DIR/Postman/app/resources/app/assets/icon.png
    Terminal=false
    Type=Application
    Categories=Development;

   Once the ```Postman.desktop``` file is created, the Postman app can be opened using application launchers. You can check your desktop and double-click the Postman icon.

   **Note:**

   1. Avoid starting Postman using ```sudo``` command, this will create permission issues on the files created by Postman.

   1. Make sure you have read/write permission for ```~/.config``` folder where Postman stores the information

   1. If you are an Ubuntu 18 user, you must additionally install libgconf-2-4 package to ensure a smooth Postman run. This package, shipped by default until Ubuntu version 18, has been dropped, and is mandatory for Postman to run. Use the following command to install ```libgconf-2-4```:

    apt-get install libgconf-2-4
  
## Supported Platforms

   This section describes the additional software and infrastructure you'll need to run Postman. Please review this info before installing Postman. You should only use Postman with a supported platform. Any platforms and versions not listed on this page are unsupported, which means we don't test, fix bugs or provide assistance.

### macOS

   The minimum version supported is macOS 10.9.

### Windows

   Postman supports Windows 7 and above. Older operating systems are not supported.

   Both ```ia32 (x86) and x64 (amd64)``` installers are provided for Windows. Note that the ARM version of Windows is not supported.

### Linux

   Postman supports the following Linux distributions:

* Ubuntu 12.04 and later
* Fedora 21
* Debian 8 and later

**Note:**
If you are an Ubuntu 18 user, you must additionally install ```libgconf-2-4 package``` to run Postman. This package, which was shipped by default until Ubuntu version 18 has been dropped, and is mandatory to run Postman. Use the following command to install ```libgconf-2-4```:

`apt-get install libgconf-2-4`

## Postman Chrome app

We recommend using the [Postman native apps](https://www.getpostman.com/downloads/), but Postman is also available as a Chrome app. Read more about [why support for the Postman Chrome app is being deprecated](https://blog.getpostman.com/2017/03/14/going-native/).

The Postman Chrome app can only run on the Chrome browser. To use the Postman Chrome app, you will first need to [install Google Chrome](https://www.google.com/chrome/).

If you already have Chrome installed, head over to [Postman’s page](https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) on the Chrome Web Store, and click ‘Add to Chrome’.

The download should take a few minutes depending on your internet connection. Once you’ve downloaded the app, you can launch Postman.

### Differences between Chrome and native apps

Postman's native apps are built on [Electron](https://electronjs.org/), and overcome a number of restrictions of the Chrome platform.

A few features exclusive to the native apps are listed here:

#### Cookies

The native apps let you work with [cookies](/docs/postman/sending_api_requests/cookies/) directly. Unlike the Chrome app, no separate extension ([Interceptor](/docs/postman/sending_api_requests/interceptor_extension/)) is needed.

#### Built-in proxy

The native apps come with a built-in proxy that you can use to [capture network traffic](/docs/postman/sending_api_requests/capturing_http_requests/).

#### Menu bar

The native apps are not restricted by the Chrome standards for the menu bar. With the native apps, you can check for updates, create Postman Windows and tabs, edit preferences, and can perform many other tasks. More on [navigating the Postman App](/docs/postman/launching_postman/navigating_postman/).

#### Restricted headers

The latest versions of the native apps let you send headers like ```Origin``` and ```User-Agent```. These are [restricted](/docs/postman/sending_api_requests/interceptor_extension/#restricted-headers) in the Chrome app.

#### Don't follow redirects option

This option exists in the native apps to prevent requests that return a 300-series response from being automatically redirected. Previously, users needed to use the Interceptor extension to do this in the Chrome app.

#### Postman console

The latest version of the native app also has a built-in [console](/docs/postman/sending_api_requests/debugging_and_logs/#network-calls-with-postman-console), which allows you to view the network request details for API calls.

## Migrating to the native app

It's simple. [Sign in to your Postman account](https://app.getpostman.com/) after you [download](https://www.getpostman.com/downloads/) and start the new native app, and all your history and collections will be automatically synced.

Alternatively, if you don't want to sign in to your Postman account, you can bulk export your Postman data from the Chrome app, and then bulk import into the new native app.

[![import data](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-export-data-settings.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-export-data-settings.png)  

### Bulk export

From the Postman settings, select the **Data** tab and click the **Download** button to export all your collections, environments, globals and header presets to a single dump file.

### Bulk import

From the same area in Postman settings, you can initiate a bulk import from a Postman data dump file. This will overwrite your existing data so be careful. [Read more about bulk import.](/docs/postman/collections/data_formats/#importing-postman-data)

## Updating Postman

### Native app (macOS, Windows and Linux)

Postman's native apps will notify you when a major update is available. Other updates are indicated by a dot that appears on the settings icon. If the indicator is red instead of orange, it indicates a failed update.

[![settings update indicator](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/39862921-c290dbd0-5462-11e8-85a7-cfaf4141f0d3+(1).png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/39862921-c290dbd0-5462-11e8-85a7-cfaf4141f0d3+(1).png)

Click **Update** to download the latest update. You will be notified when the download is complete prompting you to restart the Postman app to apply the updates. If you're not ready to update yet, click **Later** to auto update after the next app launch.

You can also configure your preferences to enable automatic download for major updates under the **Update** tab within the **SETTINGS** modal. Postman automatically downloads minor updates and bug fixes.

[![set automatic updates in settings](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auto+update+enable.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auto+update+enable.png)

## Troubleshooting Postman Installation & Updates

### "Windows protected your PC" warning

[![windows smartscreen warning](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/windows-certificate-issue/cert1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/windows-certificate-issue/cert1.png)

This warning is expected while installing Postman v7.6.0 and above. Please following the steps below to install the application if you get this warning:

1. Click on "More info"
2. Click on "Run anyway"

[![step 1](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/windows-certificate-issue/cert2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/windows-certificate-issue/cert2.png)

[![step 2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/windows-certificate-issue/cert3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/windows-certificate-issue/cert3.png)

For more details on why this warning is shown by Windows Operating System, please refer [this post](https://community.getpostman.com/t/windows-protected-your-pc-warning-while-installing-postman-for-windows/7474) on our community forum.

### Blank screen or window after launching the app

Some users may encounter issues updating in the Windows version of Postman 6.1. To resolve you must set the environmental variable `POSTMAN_DISABLE_GPU=true`. In order to do this, follow these steps:

1. Open `Advanced system settings`
1. Navigate to `Environment Variables`
1. Add a new system variable and save by click 'OK'.

[![step 1](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.1.png)

[![step 2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.12.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.12.png)

[![step 3](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.1+(1).png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.1+(1).png)

## Postman Chrome App

Postman's Chrome app has been deprecated. Although you can still use it, new features and bug fixes are being released exclusively in our native apps. We recommend you [download the free native Postman app](https://www.getpostman.com/downloads/) available for Mac, Windows, and Linux operating systems.
