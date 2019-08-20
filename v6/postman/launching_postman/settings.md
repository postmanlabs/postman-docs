---
title: "Settings"
page_id: "settings"
warning: false

---

## Getting to the Settings

In the header toolbar of the Postman app, click the wrench icon and select "Settings" to open the **SETTINGS** modal. You can also use the keyboard shortcut (**CMD/CTRL + ,**) to open the modal.

[![settings dropdown](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-settings.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-settings.png)

## General Settings

Postman tries to minimize the number of settings you have to change, so we established some defaults. However, given the diversity of use cases, if you need to make adjustments, here's how:

* **Trim keys and values in request body:** If you’re using the form-data or url-encoded modes to send data to the server, switching this to "ON" will cause any parameters to be trimmed.
* **SSL certificate verification** (native apps only): Prevents the app from checking validity of SSL certificates while making a request.
* **Always open requests in new tab:** Set this option to ON to open requests in a new tab. This option is, by default, set to OFF. Which means each time you click a request in the side bar, Postman opens the request in the preview tab. Refer to the section [Working with tabs](/docs/postman/sending_api_requests/working_with_tabs/) for a clear understanding of this feature.
* **Always ask when closing unsaved tabs:** If you set this option to OFF, Postman does not prompt you to save changes in your unsaved tabs. By default, this option is set to 'ON'.  
* **Language detection:** Setting this to JSON will force a JSON rendering, irrespective of the response Content-Type header.
* **Request Timeout in ms (0 for infinity):**  Set how long the app should wait for a response before saying that the server isn’t responding. A value of 0 indicates infinity - Postman will wait for a response forever.
* **Automatically persist variable values:** Enabling this will persist the current value of variables to the initial value at the end of every request execution. This option is by default off for new users. For old users upgrading to the newest versions, this option is turned on. These settings apply only when assigning current values using scripts, for instance pre-request or test scripts. For detailed information on how this feature works in tandem with another option, refer to the section [Keep Variable Values](/docs/postman/collection_runs/using_environments_in_collection_runs/#configuring-the-collection-runner).
  * **Working Directory:** If you want Postman to persist your file paths, then you must save your files in Postman's default working directory. When you work with files in form-data request body and binary file body, save them in this directory to let Postman persist your file's path relative to the working directory. This means your files loaded from within the working directory run smoothly across devices if other users use the same files on their devices. Postman flags a warning for files that are not stored in this directory.

  However, delimiting the working directory can have some unintended security issues as follows:
   1. It is against the general principle of security to give system-wide access to a program as it exposes a user's system to all types of threats.
   1. To further elaborate on the above statement, restricting the working directory would prevent safety issues arising when files obtained from external/anonymous sources are used. For example, a collection that the user has obtained from the internet. The user may or may not have proper information about the collection and as such may not understand if the collection serves some other hidden function.
   1. Absolute file path can also be given to postman, but when sharing it may not work for the user it is shared to as absolute paths can vary between systems.

   To learn more about this feature, refer to the section [form-data](/docs/postman/sending_api_requests/requests/#form-data)
  * **Allow reading files outside working directory:** Set this option to ON if you want Postman to read files from outside the Postman working directory. Postman also persists your file paths in form-data request and binary file bodies. To learn more about this feature, refer to the section [form-data](/docs/postman/sending_api_requests/requests/#form-data).
  * **Editor Font Size:** Adjust the font size in pixels for the text that appears in Postman. Note that this setting impacts only the *Test Scripts, Pre-request Scripts, and Response Pretty View*
  * **Two-pane view**: Toggle between showing the response below, or beside, the request.
  * **Variable autocomplete:** Enable this to turn on autocomplete feature for your variables.
  * **Send no-cache header** (recommended): Sending a no-cache header makes sure you get the freshest response from your server.
  * **Send Postman Token header:** This is primarily used to bypass a bug in Chrome. If an XmlHttpRequest is pending and. another request is sent with the same parameters then Chrome returns the same response for both of them. Sending a random token avoids this issue. This can also help you distinguish between request on the server side.
  * **Retain headers when clicking on links:** If you click on a link in a response, Postman creates a new GET request with that URL. If you want to retain the headers that you set in the previous request set "ON" here. This is useful if you are accessing mainly protected resources.
  * **Automatically follow redirects:** Prevent requests that return a 300-series response from being automatically redirected.
  * **Send anonymous usage data to Postman:** Option to disable sending basic anonymous usage data (button clicks and app events) to Postman. We use usage data to make Postman a better product.
  * **Max response size:** Option to limit the size of response (in Megabytes) that is rendered by Postman. If the limit is exceeded,
   Postman will inform the user that the received response is large (default limit: 50 MB) and provide options to increase the size limit or download the response. Note that rendering large responses can impact app performance.

[![general settings](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Settings-Apr2019.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Settings_Apr2019.png)

## Themes

Pick your pleasure: choose a light or dark theme for the Postman app.

[![themes in settings](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-themes-settings.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-themes-settings.png)

## Keyboard Shortcuts

This is where you can view keyboard shortcuts available for your operating system here. Learn more about using these [shortcuts to increase your productivity](/docs/postman/launching_postman/navigating_postman/#keyboard-shortcuts).

## Data Import / Export

Import and export data in bulk inside Postman.  This will overwrite your existing collections and environments so be a little careful. It always helps to take a backup before you are importing other files. Learn more about [importing and exporting data](/docs/postman/collections/data_formats/) in Postman.

## Add-ons

Download Newman, Postman's command line companion, to integrate Postman collections with your build system, or run automated tests for your API through a cron job. Learn more about [Newman](/docs/postman/collection_runs/command_line_integration_with_newman/).

## Sync

If you are signed in to Postman, your data is synced with our server, making sure you have it all next time you use the app (and not just locally). You can also manually perform sync using the Sync icon in the header toolbar of Postman app. Learn more about [syncing](/docs/postman/launching_postman/syncing/).

## Certificates

Add and view client certificates on a per domain basis. Learn more about [setting certificates](/docs/postman/sending_api_requests/certificates/).

## Proxy

Configure your proxy settings in the Postman app using this tab. For more information on Proxy, see [How to configure proxy in Postman](/docs/postman/sending_api_requests/proxy/).

## Update

Postman's native apps will notify you whenever a version update is available.  To force a check for updates, head to the **Update** tab of the **SETTINGS** modal. Learn about [updating the Postman app](/docs/postman/launching_postman/installation_and_updates/#updating-postman).

## About

This is where you can verify your current version of the Postman app. There are also some helpful support links to reference.
