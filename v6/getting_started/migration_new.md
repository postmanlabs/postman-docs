---

title: "Migrating to the packaged app"
page_id: "migration_new"
tags: 
  - "app"
warning: false
---

Migrating from the existing packaged app to the sync beta version of Postman - Postman allows you to export all your data in one file and then re-import it. This is how you do it:

#### Exporting data from existing packaged app
![](https://www.getpostman.com/img/v1/docs/source/mig-3.png)
![](https://www.getpostman.com/img/v1/docs/source/sync/sync-new-migration-export.png)

Click on the settings icon at the top right in the top navbar. Navigate to the "Data" tab, and click "Download". This will give you a file "Backup.postman\_dump". Save the
file to your local disk. Remember - this file may contain sensitive data like passwords and access tokens from your collections and environments, and you might want to delete it after migration.

#### Importing it into new packaged app

Click on the settings icon at the top right in the top navbar.

Select the data tab and click "Choose file". Select the file you exported from the old app.

If everything goes well, all your collections, environments, header presets and global variables will be available
inside the packaged app.
