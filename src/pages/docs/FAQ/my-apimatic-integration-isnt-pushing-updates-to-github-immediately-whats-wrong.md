---
title: "My APIMatic integration isn't pushing updates to Github immediately. What's wrong?"
order: 3
page_id: "my-apimatic-integration-isnt-pushing-updates-to-github-immediately-whats-wrong"
warning: false
---
The [APIMatic Integration](https://learning.postman.com/docs/integrations/apimatic/) is meant to take your Postman collections and save them to Github in a format that you choose.

The converter runs once a day (at 1200UTC). Any changes you make to your collection will only be picked up by the converter in its next run. Also, updates will not be pushed to Github if no updates have been made to the collection.
