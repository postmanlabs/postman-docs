---

title: "Run button security"
page_id: "run_security"
tags: 
  - "web"
warning: false
---

Security aspects of the Run-in-Postman button:

1. Users will never be able to modify the original collection that you uploaded. Only the Postman user who generates the collection will be able to do so.
2. 
Users who import the collection will effectively be generating a copy of the collection in their own apps.
3. 
The only data that is shared with the link is what you enter in Postman: the names and descriptions of the collections, folders, and requests, and the request data - URLs, headers, body, test scripts etc. Your credentials (email, username etc.) will not be included.
4. 
You'll need to ensure that sensitive data like access tokens and password are NOT included in the collection. You can do this by using [environment variables][0], and use the `{{password}}` notation in the collection itself. You can open the collection in web-view to ensure that no sensitive data is included.
  

**Note**: This page only talks about security details surrounding the 'Run in Postman' feature. Refer to our [complete security practices][1] for more.


[0]: https://www.getpostman.com/docs/environments
[1]: https://www.getpostman.com/security
