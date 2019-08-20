---
title: "Conflicts"
page_id: "conflicts"
warning: false
---

Postman's conflict management allows you to work collaboratively while you are offline. Your work will be safely synced when you're online—without any accidental changes to your teammates' work.

While syncing your changes, if you made a change that might overwrite your teammates' work, the **RESOLVE SYNC CONFLICTS** modal prompts you to choose which conflicting version to keep.

Here's an example of how to manage conflicts. Suppose you share a collection named "My API" with your team and permit your teammate, Bob, to edit the collection. Bob subscribes to this collection from the Team Library and starts working with this collection.

While you are offline, Bob is online and renames the collection to "Team API" and then renames the same collection to "Postman API".

When you're online and sync your changes, Postman detects a conflicting change to the same data. Postman will display the **RESOLVE SYNC CONFLICTS** modal. You can review the conflicting versions and choose which version to keep and which to discard.

[![resolve sync conflicts modal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59029599.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59029599.png)

In the **RESOLVE SYNC CONFLICTS** modal, "Local Value" is the version currently on your local app and "Server Value" shows the version synced to Postman.

To keep your changes and overwrite Bob's changes, check the "Local Value" and click the orange **Resync** button.

To discard your changes and keep Bob's change, check "Server Value". Then click the orange **Resync** button. Resyncing updates your local data and completes the sync to Postman.
