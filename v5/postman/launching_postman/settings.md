---
title: "Settings"
page_id: "settings"
warning: false

---

### Getting to the Settings

In the header toolbar of the Postman app, click the wrench icon and select "Settings" to open the **SETTINGS** modal. You can also use the keyboard shortcut (**CMD/CTRL + ,**) to open the modal.

[![settings dropdown](https://assets.postman.com/postman-docs/WS-settings.png)](https://assets.postman.com/postman-docs/WS-settings.png)

### General Settings

Postman tries to minimize the number of settings you have to change, so we established some defaults. However, given the diversity of use cases, if you need to make adjustments, here's how:

   *   **Trim keys and values in request body:** If you’re using the form-data or url-encoded modes to send data to the server, switching this to "ON" will cause any parameters to be trimmed.
   *   **SSL certificate verification** (native apps only): Prevents the app from checking validity of SSL certificates while making a request. Read more about [managing client certificates](/docs/postman/sending_api_requests/certificates/).
   *   **Language detection:** Setting this to JSON will force a JSON rendering, irrespective of the response Content-Type header.
   *   **XHR Timeout in ms:** Set how long the app should wait for a response before saying that the server isn’t responding. A value of 0 indicates infinity - Postman will wait for a response forever.
   *   **Editor Font Size:** Adjust the font size in pixels for the text that appears in Postman.
   *   **Two-pane view**: Toggle between showing the response below, or beside, the request.
   *   **Send no-cache header** (recommended): Sending a no-cache header makes sure you get the freshest response from your server.
   *   **Send Postman Token header:** This is primarily used to bypass a bug in Chrome. If an XmlHttpRequest is pending and another request is sent with the same parameters then Chrome returns the same response for both of them. Sending a random token avoids this issue. This can also help you distinguish between request on the server side. 
   *   **Retain headers when clicking on links:** If you click on a link in a response, Postman creates a new GET request with that URL. If you want to retain the headers that you set in the previous request set "ON" here. This is useful if you are accessing mainly protected resources.
   *   **Automatically follow redirects:** Prevent requests that return a 300-series response from being automatically redirected. 
   *   **Send anonymous usage data to Postman:** Option to disable sending basic anonymous usage data (button clicks and app events) to Postman. We use usage data to make Postman a better product.

[![general settings](https://assets.postman.com/postman-docs/58492184.png)](https://assets.postman.com/postman-docs/58492184.png)

### Themes

Pick your pleasure: choose a light or dark theme for the Postman app.

[![themes in settings](https://assets.postman.com/postman-docs/58492628.png)](https://assets.postman.com/postman-docs/58492628.png)

### Keyboard Shortcuts

This is where you can view keyboard shortcuts available for your operating system here. Learn more about using these [shortcuts to increase your productivity](/docs/postman/launching_postman/navigating_postman/).

### Data Import / Export

Import and export data in bulk inside Postman.  This will overwrite your existing collections and environments so be a little careful. It always helps to take a backup before you are importing other files. Learn more about [importing and exporting data](/docs/postman/collections/data_formats/) in Postman.

### Add-ons

Download Newman, Postman's command line companion, to integrate Postman collections with your build system, or run automated tests for your API through a cron job. Learn more about [Newman](/docs/postman/collection_runs/command_line_integration_with_newman/). 

### Sync

If you are signed in to Postman, your data is synced with our server, making sure you have it all next time you use the app (and not just locally). You can force re-sync or disable it under **Settings**. Learn more about [syncing](/docs/postman/launching_postman/syncing/).

### Certificates

Add and view client certificates on a per domain basis. Learn more about [setting certificates](/docs/postman/sending_api_requests/certificates/).

### Update

Postman's native apps will notify you whenever a version update is available.  To force a check for updates, head to the **Update** tab of the **SETTINGS** modal. Learn about [updating the Postman app](/docs/postman/launching_postman/installation_and_updates/).

### About

This is where you can verify your current version of the Postman app. There are also some helpful support links to reference.
