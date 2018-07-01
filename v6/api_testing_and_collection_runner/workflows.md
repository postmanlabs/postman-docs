---

title: "Workflows"
page_id: "workflows"
tags: 
  - "app"
warning: false
---

Workflows allow for non-linear execution of tests. You can write Workflows in Postman using the function postman.setNextRequest(). This feature is available in Chrome and Mac / Windows / Linux Apps, v4.1+

Set the Request to be executed next

    postman.setNextRequest("request_name");

Stop workflow execution

    postman.setNextRequest(null);

Some salient points about setNextRequest:

1. You need to specify the name of the subsequent request and the runner will take care of the rest. 
2. It can be used in the pre-request or the test script. In case of more than one assignment, the last set value is considered.
3. If postman.setNextRequest is absent in a request, the runner defaults to linear execution and moves to the next request
