---
title: "Branching and looping"
order: 44
page_id: "branching_and_looping"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: link
    name: "Variables"
    url: "/docs/postman/environments-and-globals/variables/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Imgur"
    url: "https://www.getpostman.com/case-studies/Imgur.pdf?_ga=2.165913464.754547870.1571851340-1454169035.1570491567"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "How to make money using Postman: chaining requests"
    url: "https://blog.getpostman.com/2018/03/19/how-to-make-money-using-postman-chaining-requests/?_ga=2.165913464.754547870.1571851340-1454169035.1570491567"
  - type: link
    name: "Using a Postman monitor to water my plants"
    url: "https://blog.getpostman.com/2017/11/08/using-a-postman-monitor-to-water-my-plants/?_ga=2.165913464.754547870.1571851340-1454169035.1570491567"
  - type: link
    name: "Conditional Workflows in Postman"
    url: "https://blog.getpostman.com/2016/03/23/conditional-workflows-in-postman/?_ga=2.170681446.754547870.1571851340-1454169035.1570491567"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Command line integration with Newman"
    url: "/docs/postman/collection-runs/command-line-integration-with-newman/"

warning: false
---

When running a collection, you can branch and loop across API requests in Postman using the `postman.setNextRequest("request_name");` function.

[![set next request method](https://assets.postman.com/postman-docs/Test_script10.png)](https://assets.postman.com/postman-docs/Test_script10.png)

### Set the request to be executed next

```js
postman.setNextRequest("request_name");
```

### Loop over the current request

Providing the name of current run to `setNextRequest` leads to Postman running the current request continuously.

[![looping current request](https://assets.postman.com/postman-docs/branching_and_looping/branching_and_looping.png)](https://assets.postman.com/postman-docs/branching_and_looping/branching_and_looping.png)

**Note:** While looping over one request continuously, one should wrap `setNextRequest` in some logic so as to ensure that the request does not run indefinitely otherwise the collection runner would need to be force closed.

### Stop workflow execution

```js
postman.setNextRequest(null);
```

Some salient points about `postman.setNextRequest()`:

1. Specify the name or ID of the subsequent request and the collection runner will take care of the rest.
1. It can be used in the pre-request or the test script. If there's more than one assignment, the last set value takes precedence.
1. If `postman.setNextRequest()` is absent in a request, the collection runner defaults to linear execution and moves to the next request

For more information about control flow, refer to [building workflows](/docs/postman/collection-runs/building-workflows/).
