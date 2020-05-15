---
title: "Security considerations"
order: 336
page_id: "security"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "https://learning.postman.com/docs/postman/collections/intro-to-collections"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to API documentation"
    url: "https://learning.postman.com/docs/postman/api-documentation/documenting-your-api/"
---

### Security considerations for the Run in Postman button

* Other users will never be able to modify the original collection that you uploaded. Only the Postman user who generates the Run in Postman embed code from their collection will be able to modify the collection.
* Users who import the collection are generating a copy of the collection in their own apps.
* The only data that is shared with the link is what you enter in Postman. For example, the names and descriptions of the collections, folders, and requests, and the request data (URL, headers, body, tests, scripts, etc.).
* Make sure you test importing your collection to ensure you have not included any sensitive data such as access keys that users will potentially import when they use the Run in Postman button. You can create a duplicate of your collection and remove any data you do not want to share.

This page only covers security details related to the Run in Postman feature. Refer to our [complete security practices](https://www.postman.com/security) for general details.
