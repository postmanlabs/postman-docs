---
title: "How do I recover my data?"
order: 3
page_id: "how-do-i-recovery-my-data"
warning: false
---

Summary of Issue
==============

**One of the following may have brought you here**:
- I opened the Postman native app and it looks empty - it looks like all my collections disappeared.
- Data in the Postman native app, including Collections, environments, and globals, has been lost unexpectedly upon opening the app.

**Why is this happening?**
- This can happen because of the app's local database getting corrupted or when signing out of the app (which clears all local data).
Resolution steps
--------------------------------
**Check for synced data**

If you were previously logged in to the app with your Postman account and had sync enabled, your data should be backed up to our servers. Signing out of the Postman app, and logging back in again, should restore your work.

To check what is synced to your Postman account, navigate to the link below.
- [https://go.postman.co/me](https://go.postman.co/me)

**Attempt to recover local data**
If your work is not backed up to a Postman account, you can attempt to recover data from the app's local storage using the steps below.

**Please note:** this process will delete any local data for Postman Canary.

If you're using our Chrome app, please follow [the instructions in this article](https://support.getpostman.com/hc/en-us/articles/203837571-I-lost-all-my-data-when-I-opened-Postman) instead

1. Download and install [Postman Canary](https://www.postman.com/downloads/canary)
_If you already have Postman Canary installed, make sure to sign-out of the app and quit it before proceeding._

2. Make a copy of the folder: **file__0.indexeddb.leveldb** in your Postman directory, and paste it into the IndexedDB folder in your PostmanCanary.

**Windows**
~~~~~~~~~~~~
**Copy**: %appdata%\Postman\IndexedDB​\file__0.indexeddb.leveldb
**Paste to**: %appdata%\PostmanCanary\IndexedDB​\
~~~~~~~~~~~~

**macOS**
~~~~~~~~~~~
**Copy**: ~/Library/Application Support/Postman/IndexedDB/file__0.indexeddb.leveldb
**Paste to**: ~/Library/Application Support/PostmanCanary/IndexedDB
~~~~~~~~~~~

**Linux**
~~~~~~~~~~~
**Copy**: ~/.config/Postman/IndexedDB/file__0.indexeddb.leveldb
**Paste to**: ~/.config/PostmanCanary/IndexedDB/
~~~~~~~~~~~~

3. Open Postman Canary, and bulk export your data from within the app. Save the resulting .json file to your local machine. To learn more, please refer to [Data Dumps](https://learning.postman.com/docs/postman/collections/data_formats/#data-dumps)

4. Open the stable Postman app (not Canary), and switch to a workspace where any recovered content will be added, and import the .json file you saved in step 3. To learn more, please refer to [Importing Data](https://learning.postman.com/docs/postman/collections/data_formats/#importing-postman-data)

5. If any content is recovered, it will be added to your workspace after the import. If no data is recovered, you may only see a few empty default environments

If you need further assistance, please open a ticket with our Support Team: [https://www.postman.com/support] (https://www.postman.com/support)
