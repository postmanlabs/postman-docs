---
title: "Branching and looping"
page_id: "branching_and_looping"
warning: false
---

When running a collection, you can branch and loop across API requests in Postman using the `postman.setNextRequest("request_name");` function.

[![set next request method](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Test_script10.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Test_script10.png)

### Set the request to be executed next

```js
postman.setNextRequest("request_name");
```

### Stop workflow execution

```js
postman.setNextRequest(null);
```

Some salient points about `postman.setNextRequest()`:

1. Specify the name or ID of the subsequent request and the collection runner will take care of the rest.
1. It can be used in the pre-request or the test script. If there's more than one assignment, the last set value takes precedence.
1. If `postman.setNextRequest()` is absent in a request, the collection runner defaults to linear execution and moves to the next request

For more information about control flow, refer to [building workflows](/docs/postman/collection_runs/building_workflows/).
