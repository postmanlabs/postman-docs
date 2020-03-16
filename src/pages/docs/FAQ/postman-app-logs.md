---
title: "Where can I find logs for the Postman app?"
order: 3
page_id: "postman-app-logs"
warning: false
---
---
**Note:** No request-level information is visible to us in the logs or via our internal systems. The only collection-related information that's logged is collection IDs and user IDs.

In the logs noted below, the file(s) _renderer-shared_ is where some details of synced data is referenced; you're welcome to audit it and redact anything you might not want to share.

---

## In Postman's installation directory
Logs for the Postman app can be found in the following directories, depending on your operating system:

**MacOS**

`~/Library/Application Support/Postman/logs`

Instructions:

1. Copy the address above
2. Press **command** + **space** to open _Spotlight Search_
3. Paste the address you copied (**command** + **v**), and press return.

**Windows**

`%AppData%\Postman\logs`

Instructions:

1. Copy the address above
2. Open the _Start Menu_ and search for _explorer.exe_, then press **return**.
3. Paste the address you copied (**control** + **v**), and press return

**Linux**

`~/.config/Postman/logs`

Instructions:

_See documentation for your Linux distribution_

## From within the Postman app

From the Postman app, you can access [DevTools](https://developers.google.com/web/tools/chrome-devtools/), or open the logs folder in Postman's installation directory.

**DevTools**

With the Postman app window open, click following in the menu bar to open _DevTools_ for the current app view, or shared:

* View → Developer → Show DevTools (Current View)​
* View → Developer → Show DevTools (Shared)​

See the following article for instructions on sharing DevTools logs with Postman Support:
* [How to share logs with Postman for debugging issue?](https://support.getpostman.com/hc/en-us/articles/360025298633-How-to-share-logs-with-Postman-for-debugging-issue-)

**Logs directory**

With the Postman window open, click the following in the menu bar:

* View → Developer → View Logs in...
