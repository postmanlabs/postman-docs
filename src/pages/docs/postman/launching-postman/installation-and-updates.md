---
title: "Installation and updates"
order: 2
page_id: "installation_and_updates"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://getpostman.com/apps"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to APIs"
    url:  "https://www.youtube.com/watch?v=iFMLyMgCUTs&list=PLM-7VG-sgbtBBnWb2Jc5kufgtWYEmiMAw"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "First 5 things to try if you're new to Postman"
    url: "https://blog.postman.com/2018/04/11/first-5-things-to-try-if-youre-new-to-postman/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Sending your first request"
    url: "/docs/postman/launching-postman/sending-the-first-request"

---

Postman is available as a native app for Mac, Windows (32-bit / 64-bit), and Linux (32-bit / 64-bit) operating systems.

To get the latest version of the Postman app, visit the [download page](https://www.postman.com/downloads/) and click **Download** for your platform.

![Postman download page](https://assets.postman.com/postman-docs/download-postman.jpg)

## Contents

* Installing Postman
    * [Mac](#installing-postman-on-mac)
    * [Windows](#installing-postman-on-windows)
    * [Linux](#installing-postman-on-linux)
    * [Chrome app (deprecated)](#postman-chrome-app-deprecated)
        * [Migrating to the native app](#migrating-to-the-native-app)
* [Updating Postman](#updating-postman)
* [Troubleshooting your Postman installation](#troubleshooting-your-postman-installation)
* [Next steps](#next-steps)

> Note that the Postman team only tests, fixes bugs, and provides support for the app on Mac, Windows, and Linux.

## Installing Postman on Mac

[Download](https://www.postman.com/downloads/) and unzip the app _using the built-in Archive Utility app_. Double-click __Postman__. When prompted, move the file to your __Applications__ folder—this will ensure that future updates can be installed correctly.

> The minimum OS version supported is macOS 10.9.
>
> You may encounter a "Library not loaded" error if you attempt to unzip and install Postman using a third-party app—using the default Archive Utility for Mac should resolve this.

## Installing Postman on Windows

[Download](https://www.postman.com/downloads/) the app. Double-click the `exe` file to install it.

> Postman supports Windows 7 and above. Both `ia32 (x86)` and `x64 (amd64)` installers are provided for Windows. The ARM version of Windows is not supported.

## Installing Postman on Linux

You can install Postman on Linux by downloading it—or via the [Snap](https://snapcraft.io/postman) store link / using the command `snap install postman`.

To install manually, [download](https://www.postman.com/downloads/) and unzip the app, for example into the `opt` directory. You will need `sudo` privileges.

To start the app from a launcher icon, create a desktop file, naming it `Postman.desktop` and saving it in the following location:

```shell
~/.local/share/applications/Postman.desktop
```

Enter the following content in the file—replacing `opt` if you extracted the file somewhere else—and save it:

```shell
[Desktop Entry]
Encoding=UTF-8
Name=Postman
Exec=/opt/Postman/app/Postman %U
Icon=/opt/Postman/app/resources/app/assets/icon.png
Terminal=false
Type=Application
Categories=Development;
```

> Postman supports Ubuntu 12.04 and later, Fedora 21, and Debian 8 and later.
>
> Avoid starting Postman using `sudo` command, as it will create permission issues on the files created by Postman.
>
> Make sure you have read/write permission for the `~/.config` folder where Postman stores information.
>
> If you are an Ubuntu 18 user, you will also need to install the `libgconf-2-4` package to ensure a smooth Postman run: `apt-get install libgconf-2-4`

## Postman Chrome app (deprecated)

The Postman Chrome app is deprecated—if you're using the Chrome app, you can [retain your data when you switch to the native app](#migrating-to-the-native-app) ___either by syncing with a Postman account you're signed into, or by exporting from Chrome and importing into the native app___.

The native app is built on [Electron](https://electronjs.org/), and [overcomes a number of restrictions](https://blog.postman.com/2017/03/14/going-native/) of the Chrome platform.

* The native apps let you work with [cookies](/docs/postman/sending-api-requests/cookies/) directly.
* Unlike the Chrome app, no separate extension for the ([Interceptor](/docs/postman/sending-api-requests/interceptor/)) is needed.
* The native apps come with a built-in proxy that you can use to [capture network traffic](/docs/postman/sending-api-requests/capturing-http-requests/).
* The native apps are not restricted by the Chrome standards for the menu bar. You can check for updates, create Postman Windows and tabs, and edit preferences.
* The native apps let you send headers like `Origin` and `User-Agent`. These are restricted in the Chrome app.
* The "don't follow redirects" option exists in the native apps to prevent requests that return a 300-series response from being automatically redirected—doing this in the Chrome app requires the Interceptor extension.
* The native app has a built-in [console](/docs/postman/sending-api-requests/debugging-and-logs/#network-calls-with-postman-console), which allows you to view the network request details for API calls.

### Migrating to the native app

To switch from the Chrome app to native, [download](https://www.postman.com/downloads/) Postman and [sign in to your account](https://app.getpostman.com/). Start the native app, and your history and collections will be automatically synced.

Alternatively, if you don't want to sign in to your Postman account, you can bulk export your Postman data from the Chrome app, and then bulk import into the new native app via __Settings__ &gt; __Data__.

![Import Export Data](https://assets.postman.com/postman-docs/export-data.jpg)

> Note that importing will overwrite your existing data. For more on bulk import, see [Importing Postman data](/docs/postman/collections/importing-and-exporting-data/#importing-postman-data).

## Updating Postman

The native Postman apps will notify you when a major update is available. For other updates you will see a dot on the settings icon. If the indicator is red instead of orange, it indicates a failed update.

![Update Ready](https://assets.postman.com/postman-docs/update-ready.jpg)

Select the update option to download or install the latest update. You will see a notification when the download is complete, prompting you to restart the Postman app to apply the updates. If you're not ready to update yet, choose __Later__ to auto-update the next time you launch the app.

You can configure your preferences to enable automatic download for major updates in __Settings__ &gt; __Update__. Postman automatically downloads minor updates and bug fixes.

![Update Ready](https://assets.postman.com/postman-docs/settings-updates.jpg)

## Troubleshooting your Postman installation

If you encounter any issues installing and running Postman, check out the following tips—if these do not help, please refer to the installation posts on the [community forum](https://community.postman.com/tags/installation) and create a new post if your issue is not already covered.

### Update failed error

If you see an __Update Failed__ notification in Postman, you can use the DevTools to investigate.

![update-error-dialog](https://assets.postman.com/postman-docs/update-error-dialog.png)

Open the DevTools using __View__ &gt; __Developer__ &gt; __Show DevTools (Current View)__. Some known errors are as follows:

* __Error message:__ `Cannot update while running on a read-only volume`
    * This error means that the app user does not have write permission in the directory where Postman is installed. To resolve the problem, move Postman to a directory where the user has write permissions, for example the `/Application` directory for Mac, and to the `home` directory for Linux.

![Write Permission Issue in DevTools](https://assets.postman.com/postman-docs/write-permission-issue.png)

* __Error message:__ `Code signature at URL file:///... did not pass validation: code object is not signed at all`
    * This error means that there are multiple updates running at the same time. This can happen when the app is opened before the previous update could finish. To resolve the problem, quit and reopen the app.

![Multiple Updates Running Issue in DevTools](https://assets.postman.com/postman-docs/multiple-updates-running.png)

### Update button not available

If you are using Postman for Linux, and installed the app via the Ubuntu Software Center or Snap Store, you may not see a __Check for updates__ button. This is because the updates are handled by the store, which should automatically update Postman on a regular cadence. It you are on Postman version 6, you will have to migrate to Postman 7 and change the Snap channel to get the latest updates. For more information see [Migrating to Postman 7](/docs/administration/migrating-to-v7/).

## Next steps

If you're having trouble with installation or updates, reach out for [Postman support](https://www.postman.com/support). If your installation is working as expected, [send your first request](/docs/postman/launching-postman/sending-the-first-request)!
