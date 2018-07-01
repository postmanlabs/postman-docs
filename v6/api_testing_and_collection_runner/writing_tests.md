---

title: "Writing Tests"
page_id: "writing_tests"
tags: 
  - "app"
warning: false
---

### Basic structure
![](https://www.getpostman.com/img/v1/docs/source/cr-5.png)

Postman gives you an environment where you can write and run tests for each request without
worrying about any extra setup.

A Postman test is essentially JavaScript code
which sets values for the special tests object. You can set a descriptive key
for an element in the object and then say if it's true or false. For example:
`tests[“Body contains user_id”] = responseBody.has(“user_id”) `   
  

This will check whether the body contains the user\_id string. You can add as many keys as
needed. It depends on how many things you want to test for.

Tests are saved as part of collection requests.
This is perfect for both backend and frontend developers to ensure that
everything is working properly with the API. No more squinting through code trying
to figure out what went wrong!

### Sandbox

Postman tests run in a sandboxed environment, which is separate from the rest of the app.
To check what is available in the test script sandbox, take a look at the [Sandbox documentation][0].

### Snippets

While there are very few things to remember while writing tests, Postman tries
to make the process easier by listing commonly used snippets next to the
editor. You can select the snippet you want to add and the appropriate code
will be added to the test editor. This is a great way to quickly build test cases. Coming soon: Ability to add your own snippets!

### Viewing results
![](https://www.getpostman.com/img/v1/docs/source/cr-6.png)

Postman runs tests every time you run a request. Of course, you can choose to
not look at the tests! Results are displayed in a tab with the header showing
how many tests passed. The keys that you set in the tests variable are listed
here. If the value was true, the test passed.You can keep the Tests
tab active until you make sure all your tests have passed.

[Check out test examples][1]


[0]: https://www.getpostman.com/docs/jetpacks_sandbox
[1]: https://www.getpostman.com/docs/jetpacks_examples
