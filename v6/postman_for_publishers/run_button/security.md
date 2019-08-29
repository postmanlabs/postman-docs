---
title: "Security considerations"
page_id: "security"
warning: false

---

### Security considerations for the Run in Postman button

*   Other users will never be able to modify the original collection that you uploaded. Only the Postman user who generates the Run in Postman embed code from their collection will be able to modify the collection.
*   Users who import the collection are generating a copy of the collection in their own apps.
*   The only data that is shared with the link is what you enter in Postman. For example, the names and descriptions of the collections, folders, and requests, and the request data (URL, headers, body, tests, scripts, etc.).
*   You’ll need to ensure that sensitive data like access tokens and password are NOT included in the collection. You can do this by using [environment variables](/docs/postman/environments_and_globals/variables/), and use double curly braces with the `{{secret}}` notation in the collection itself. You can open the collection in a web view to ensure that no sensitive data is included.

This page only covers security details related to the Run in Postman feature. Refer to our [complete security practices](https://www.getpostman.com/security) for general details.
