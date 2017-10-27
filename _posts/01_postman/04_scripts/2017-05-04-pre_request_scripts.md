---
categories:
  - "postman"
  - "scripts"
title: "Pre-request scripts"
page_id: "pre_request_scripts"
warning: false

---

Pre-request scripts are snippets of code associated with a collection request that are executed before the request is sent. This is perfect for use-cases like including the timestamp in the request headers or sending a random alphanumeric string in the URL parameters.

For example, to include a timestamp in the request headers, you can set an environment variable with the value returned from a function.

[![set environment variable](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/randomTimestamp.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/randomTimestamp.png)

You can then access the **timestampHeader** variable in the header data editor by typing {% raw %}`{{timestampHeader}}`{% endraw %}. When the request is sent, your pre-request script will be executed, and the value of timestampHeader will be sent in place of {% raw %}`{{timestampHeader}}`{% endraw %}.

[![timestampHeader variable](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/timeStampHeader.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/timeStampHeader.png)

**Note:** An environment will have to be active for environment variables to be set.

Pre-request scripts are written in JavaScript, and the syntax is exactly like that of [test scripts](/docs/postman/scripts/test_scripts) except that the response object is not present.
