---
title: "APIMatic"
page_id: "apimatic"
tags: 
  - "pro"
warning: false
---

You can use the Postman Pro to APIMATIC Integration to back up your Postman Collections in Swagger, RAML, API Blueprint, and other API description formats. <br>

This integration allows APIMATIC to convert your Postman Collections into any major API description format, and save the resulting file into your designated GitHub repository. <br> 

If you don't already have a [GitHub account](https://github.com/), you'll need to create one.


### Configuring APIMATIC Integration

1. In the [Integrations page](https://go.postman.co/workspaces), find APIMATIC in the list of Postman’s 3rd party Integrations for Postman Pro users.

[![select apimatic](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations_APImatic.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations_APImatic.png)

<ol start="2">
  <li>Click the <b>View Details</b> button to see information about APIMATIC and how the Postman to APIMATIC integration converts, formats, and saves your Postman collections to Github. 
</li>
</ol>

You also can click the **Configured Integrations** tab to set up other integrations, view available integrations for APIMATIC, or view all integrations.

[![configured integrations](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-apimatic-conf-integr.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-apimatic-conf-integr.png)

<ol start="3">
  <li>Click the <b>Add Integration</b> button to authorize a periodic backup of your collection to your Github repository. 
</li>
</ol>

[![backup_github](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations_APImatic_backup_Github2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations_APImatic_backup_Github2.png)

**Note**: If you are not signed in to Github, a Github login box appears. Enter your Github username and password, and click the **Sign in** button.

<ol start="4">
  <li>Click the <b>Authorize</b> button to summon the authorization page, which lets you configure the backup to Github. 
</li>
</ol>

[![github apimatic](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-github-authorized1-a.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-integrations-github-authorized1-a.png)

<ol start="5">
  <li>To back up a collection periodically to a Github repository: 
</li>
</ol>

* Select a collection.
* Select a repository.
* Specify a directory in the repository where you want to add the collection.
* Enter a filename for the directory in the repository.
* Select the format in which you want to save the collection, such as Postman 2.0 or APIMATIC format.
* Specify the branch where you want to add the collection.

<ol start="6">
  <li>Click the <b>Add Integration</b> button. 
</li>
</ol>

APIMATIC converts the collection’s documentation to your format of choice and pushes to your GitHub repository.  Now your Postman collection automatically saves to your GitHub repo every day, in whatever API description format you selected.  API format compatibility is moments away.
