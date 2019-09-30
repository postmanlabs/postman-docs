---
title: "Pre-request scripts"
page_id: "pre_request_scripts"
warning: false

---

Pre-request scripts are snippets of code associated with a collection request that are executed before the request is sent. This is perfect for use-cases like including the timestamp in the request headers or sending a random alphanumeric string in the URL parameters.

For example, to include a timestamp in the request headers, you can set an environment variable with the value returned from a function.

[![set environment variable](https://assets.postman.com/postman-docs/WS-randomTimestamp.png)](https://assets.postman.com/postman-docs/WS-randomTimestamp.png)

You can then access the **timestampHeader** variable in the header data editor by typing `{{timestampHeader}}`. When the request is sent, your pre-request script will be executed, and the value of timestampHeader will be sent in place of `{{timestampHeader}}`.

[![timestampHeader variable](https://assets.postman.com/postman-docs/WS-timeStampHeader3+copy.png)](https://assets.postman.com/postman-docs/WS-timeStampHeader3+copy.png)

**Note:** An environment will have to be active for environment variables to be set.

Pre-request scripts are written in JavaScript, and the syntax is exactly like that of [test scripts](/docs/postman/scripts/test_scripts/) except that the response object is not present.

### Adding a pre-request script to a collection or folder

Users can add pre-request scripts to a collection, a folder, or a single request within a collection. A pre-request script associated with a collection will run prior to every request in the collection. A pre-request script associated with a folder will run prior to every request in the folder. This allows you to reuse commonly executed code prior to every request.

Collection and folder scripts can be updated in the collection or folder details respectively. Click on the ellipsis (...) next to the collection or folder name, and select “Edit” to open the modal. Select the **Pre-request Scripts** tab to add and update the scripts. You can also add collection scripts when initially creating the collection.  

[![pre-request script for folder](https://assets.postman.com/postman-docs/folder-pre-request.png)](https://assets.postman.com/postman-docs/folder-pre-request.png)

Read more about [the execution order of scripts](/docs/postman/scripts/intro_to_scripts/#execution-order-of-scripts).
