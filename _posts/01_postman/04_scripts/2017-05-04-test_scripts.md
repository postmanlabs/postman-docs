---
categories:
  - "postman"
  - "scripts"
title: "Test scripts"
page_id: "test_scripts"
warning: false

---

With Postman you can write and run tests for each request using the JavaScript language.

[![full tests](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/randomFullTests2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/randomFullTests2.png)

### Writing Postman tests

A Postman test is essentially JavaScript code executed after the request is sent, allowing access to the `pm.response` object. 

[![pm.response](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/randomPmTest.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/randomPmTest.png)

Here are some examples:

```js
// example using pm.response.to.have
pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});

// example using pm.expect()
pm.test("environment to be production", function () { 
    pm.expect(pm.environment.get("env")).to.equal("production"); 
});

// example using response assertions
pm.test("response should be okay to process", function () { 
    pm.response.to.not.be.error; 
    pm.response.to.have.jsonBody(""); 
    pm.response.to.not.have.jsonBody("error"); 
});

// example using pm.response.to.be*
pm.test("response must be valid and have a body", function () {
     // assert that the status code is 200
     pm.response.to.be.ok; // info, success, redirection, clientError,  serverError, are other variants
     // assert that the response has a valid JSON body
     pm.response.to.be.withBody;
     pm.response.to.be.json; // this assertion also checks if a body  exists, so the above check is not needed
});
```

You can add as many tests as needed, depending on how many things you want to test for. Check out some [examples](/docs/postman/scripts/test_examples) of Postman tests.

Tests are saved as part of collection requests. This is perfect for both back-end and front-end developers to ensure that everything is working properly with the API. No more squinting through code trying to figure out what went wrong!

### Sandbox

Postman tests run in a sandboxed environment, which is separate from the execution environment of the app. To check what is available in the test script sandbox, take a look at the [Sandbox documentation](/docs/postman/scripts/postman_sandbox).

### Snippets

While there are very few things to remember while writing tests, Postman tries to make the process easier by listing commonly used snippets next to the editor. You can select the snippet you want to add and the appropriate code will be added to the test editor. This is a great way to quickly build test cases.

[![snippets](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/randomSnippets.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/randomSnippets.png)

### Viewing results

[![viewing results in tests tab](https://www.getpostman.com/img/v1/docs/source/cr-6.png)](https://www.getpostman.com/img/v1/docs/source/cr-6.png)

Postman runs tests every time you run a request. Of course, you can choose to not look at the test results!

Results are displayed in a **Tests** tab under the response viewer. The tab header shows how many tests passed, and the test results are listed here. If the test evaluates to true, the test passed.
