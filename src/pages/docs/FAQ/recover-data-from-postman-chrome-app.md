---
title: "How do I recover my data from the Postman Chrome app?"
order: 3
page_id: "recover-data-from-postman-chrome-app"
warning: false
---
This can happen because of the local database getting corrupted.

If you had sync enabled, sign out, and sign back into the Postman app to recover your data. You can head to https://go.postman.co/me/collections to ensure all your data has been synced correctly.

If not, and you use the Chrome app, head to chrome://indexeddb-internals/ and search for "fhbjgbiflinjbdggehcddcbncdddomop". You should see two folders listed - you can create a zip file with the contents of those folders, and email them to help@postman.com. We should be able to recover your data.

We strongly recommend moving to our native apps (available from https://www.postman.com/apps) and signing in to avail Sync features. 
