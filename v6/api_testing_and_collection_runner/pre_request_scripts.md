---

title: "Pre Request Scripts"
page_id: "pre_request_scripts"
tags: 
  - "app"
warning: false
---

With version v0.10+ Postman has the ability to execute pre-request scripts.

Pre-request scripts are snippets of code associated with a collection request that are executed before the request is sent. This is perfect for use-cases like including the timestamp in the request headers or sending a random alphanumeric string in the URL parameters.

For example, to include a timestamp in the request headers you can set an environment variable with the value returned from a function:

    postman.setEnvironmentVariable('timestampHeader',new Date());

You can then use the **timestampHeader** variable in the header key-value editor. When the request is sent, your pre-request script will be executed, and the value of timestampHeader will be sent in place of {{timestampHeader}}.

**Note:** An environment will have to be active for env variables to be set.

The syntax of pre-requests scripts is exactly like that of [test scripts][0] except that the response object is not present for obvious reasons.

### Sandbox

To check what is available in the pre-request script sandbox, take a look at the [Sandbox documentation][1].


[0]: https://www.getpostman.com/docs/jetpacks_writing_tests
[1]: https://www.getpostman.com/docs/jetpacks_sandbox
