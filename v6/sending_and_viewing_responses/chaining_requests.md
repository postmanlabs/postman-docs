---

title: "Extracting data from responses and chaining requests"
page_id: "chaining_requests"
tags: 
  - "app"
warning: false
---
You can extract data from response and chain requests using test scripts. The test script runs inside a sandbox and Postman provides the **postman** object to interact with the main Postman context.

You should extract values from the response and save it inside an environment or a global variable. Environment and global variables let you keep track of everything that affects API state. Some examples of common variables you would use with an API are session tokens and user IDs.

**For one off cases** you can,

1\. Fire off a request inside Postman

2\. Receive the response and select and copy a value from the response body or the header

3\. Go to the environment manager

4\. Set the variable value

5\. Hit submit

**If you have more than a few variables**, use test scripts.

1\. Call postman.setEnvironmentVariable(key, value) or postman.setGlobalVariable(key, value) to set a variable with values you have extracted from the response. 

2\. You can add something dynamically generated through Javascript

Check out [this example][0] for more details.


[0]: http://blog.getpostman.com/2014/01/27/extracting-data-from-responses-and-chaining-requests/
