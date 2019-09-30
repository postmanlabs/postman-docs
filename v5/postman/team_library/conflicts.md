---
title: "Conflicts"
page_id: "conflicts"
warning: false

---

 **NOTE**: **Team Library is only available for versions 5.0 and below.**

Postman's conflict management allows you to work collaboratively even while you are offline. Your work will be safely synced when you come online without any accidental changes to your teammates' work. While syncing your changes, if you made a change that might overwrite your teammates' work, the **RESOLVE SYNC CONFLICTS** modal will prompt you to choose which conflicting version to keep.

### Example of managing conflicts

Imagine you share a collection named "My API" with your team and permit your teammate, Bob, to edit the collection. Bob subscribes to this collection from the Team Library and starts working with this collection.

Now, while you are offline, Bob is online and renames the collection to "Team API" and then renames the same collection to "Postman API". Now when you come online and start syncing your changes, Postman will detect that there is a conflicting change made to the same data. Postman will display the **RESOLVE SYNC CONFLICTS** modal. You can review the conflicting versions and choose which version to keep and which to discard. 

[![resolve sync conflicts modal](https://assets.postman.com/postman-docs/59029599.png)](https://assets.postman.com/postman-docs/59029599.png)

In the **RESOLVE SYNC CONFLICTS** modal, "Local Value" is the version currently on your local app and "Server Value" shows the version synced to Postman. To keep your changes and overwrite Bob's changes, check the "Local Value" and click the orange **Resync** button. Or to discard your changes and keep Bob's change, check "Server Value" and click the orange **Resync** button. Resyncing will update your local data and complete the sync to Postman.
