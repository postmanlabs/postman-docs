---
title: "Branching and looping"
page_id: "branching_and_looping"
warning: false

---

When running a collection, you can branch and loop across API requests in Postman using the `postman.setNextRequest("request_name");` function.

[![set next request method](https://assets.postman.com/postman-docs/WS-branching-looping2+copy.png)](https://assets.postman.com/postman-docs/WS-branching-looping2+copy.png)

**Set the request to be executed next**

```js
postman.setNextRequest("request_name");
```

**Stop workflow execution**

```js
postman.setNextRequest(null);
```

Some salient points about `postman.setNextRequest()`:

1.  Specify the name or ID of the subsequent request and the collection runner will take care of the rest.
2.  It can be used in the pre-request or the test script. In case of more than one assignment, the last set value is considered.
3.  If `postman.setNextRequest()` is absent in a request, the collection runner defaults to linear execution and moves to the next request

For more information about control flow, read about [building workflows](/docs/postman/collection_runs/building_workflows/).
