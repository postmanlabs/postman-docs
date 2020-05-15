---
title: "Test scripts"
order: 93
page_id: "test_scripts"
search_keyword: "pm.response, pm.test, pm.expect"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: link
    name: "Responses"
    url:  "/docs/postman/sending-api-requests/responses/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Ping Identity"
    url: "https://www.postman.com/resources/case-studies/pingidentity/"
  - type: link
    name: "iQmetrix"
    url: "https://www.postman.com/resources/case-studies/iqmetrix/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman: Writing API tests"
    url: "https://www.youtube.com/watch?v=vuVhF257uGw"
  - type: link
    name: "Intro to Postman: Advanced API tests"
    url: "https://www.youtube.com/watch?v=dDlsQrZmEmo"
  - type: link
    name: "New to Postman: Writing a test"
    url:  "https://www.youtube.com/watch?v=6Cp4Ez5dwbM"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Writing tests in Postman"
    url:  "https://blog.postman.com/2017/10/25/writing-tests-in-postman/"
  - type: link
    name: "Continuous API Testing with Postman"
    url: "https://blog.postman.com/2019/06/07/continuous-api-testing-with-postman/"
  - type: link
    name: "Acing your API tests"
    url:  "https://medium.com/better-practices/acing-your-apis-what-you-need-to-know-for-test-automation-e3fdba3519b9"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Test Examples"
    url: "/docs/postman/scripts/test-examples/"
  - type: link
    name: "Variables"
    url: "/docs/postman/variables-and-environments/variables/"
  - type: link
    name: "Postman Sandbox API reference"
    url:  "/docs/postman/scripts/postman-sandbox-api-reference/"

warning: false

---

You can write test scripts for your Postman API requests in JavaScript. Tests allow you to ensure that your API is working as expected, to establish that integrations between services are functioning reliably, and to verify that new developments haven't broken any existing functionality. You can also use test code to aid the debugging process when something goes wrong with your API project.

> For example, you might write a test to validate your API's error handling by sending a request with incomplete data.

You can add tests to individual [requests](/docs/postman/sending-api-requests/requests/), [folders](/docs/postman/collections/managing-collections/#adding-folders), and [collections](/docs/postman/collection-runs/intro-to-collection-runs/). Postman includes code snippets you can click to add, then amend to suit your logic if necessary.

To add tests to a request, open the request and enter your code in the Tests tab. Tests will execute after the request runs. You will be able to see the output in the __Test Results__ tab alongside the response data.

![Request Test Tab](https://assets.postman.com/postman-docs/request-test-tab.jpg)

## Writing test scripts

Your test scripts can use dynamic variables, carry out test assertions on response data, and pass data between requests. In the __Tests__ tab for a request, you can enter your JavaScript manually or use the __Snippets__ you'll see to the right of the code editor.

Tests will execute after the response is received, so when you click __Send__, Postman will run your test script when the response data returns from the API.

> If you need to execute code before a request runs, use [Pre-request Scripts](/docs/postman/scripts/pre-request-scripts/) instead. See [Intro to scripts](/docs/postman/scripts/intro-to-scripts/) for more on the how your scripts execute when your requests run.

To carry out tests in order to validate the data returned by a request, you can use the `pm.response` object. You can define tests using the `pm.test` function, providing a name and function that returns a boolean (`true` or `false`) value indicating whether the test passed or failed. You can use [ChaiJS BDD](https://www.chaijs.com/api/bdd/) syntax and `pm.expect` in your assertions to test the response detail.

The first parameter for the `.test` function is a text string that will appear in the test result output, so you can use it to identify your tests, and communicate the purpose of a test to anyone viewing the results.

For example, enter the following in the __Tests__ tab for any request to test whether the response status code is `200`.

```js
pm.test("Status test", function () {
    pm.response.to.have.status(200);
});
```

![Example Test Status](https://assets.postman.com/postman-docs/example-test-status.jpg)

Click __Send__ to run your request and open __Test Results__ in the response section. The tab header displays how many tests passed and how many ran in total. You can also toggle between passed, skipped, and failed test results.

<img src="https://assets.postman.com/postman-docs/test-result-status.jpg" alt="Test Results" width="500px"/>

If the request returned a `200` status code, the test will pass—otherwise it will fail. Try changing the expected status code in your test script and running the request again.

<img src="https://assets.postman.com/postman-docs/failed-test-status.jpg" alt="Failed Test Results" width="500px"/>

Using the `pm.expect` syntax gives your test result messages a different format—experiment with the alternatives to achieve the output you find most useful.

<img src="https://assets.postman.com/postman-docs/expect-test-syntax.jpg" alt="Failed Test Results" width="500px"/>

> Use the __Run in Postman__ button in the [Intro to writing tests collection](https://documenter.getpostman.com/view/1559645/RzZFCGFR?version=latest) to import templates containing some example test scripts into Postman and experiment with the code.

Your code can test the request [environment](/docs/postman/variables-and-environments/variables/), as in the following example:

```js
pm.test("environment to be production", function () {
    pm.expect(pm.environment.get("env")).to.equal("production");
});
```

You can use different syntax variants to write your tests in a way that you find readable—and that suits your application and testing logic.

```js
pm.test("response should be okay to process", function () {
    pm.response.to.not.be.error;
    pm.response.to.have.jsonBody("");
    pm.response.to.not.have.jsonBody("error");
});
```

Your tests can establish validity of request responses using syntax that you tailor to the response data format.

```js
pm.test("response must be valid and have a body", function () {
     pm.response.to.be.ok;
     pm.response.to.be.withBody;
     pm.response.to.be.json;
});
```

Your scripts can include however many tests you need and will save along with the rest of your request detail when you click __Save__. If you share a collection, or publish documentation / the Run in Postman button, your test code will be included for anyone who views or imports your templates.

### Using snippets

You will see a selection of commonly used test code excerpts in __Snippets__ to the right of the tests editor. Click to add one and it will appear in your editor. Snippets can speed up the process of getting started with your scripts—you can edit snippets after adding them to meet your own testing requirements.

<img src="https://assets.postman.com/postman-docs/added-test-snippet.jpg" alt="Added Code Snippet" width="600px"/>

## Testing collections and folders

You can add test scripts to a collection, a folder, or a single request within a collection. A test script associated with a collection will run after every request in the collection. A test script associated with a folder will run after every request in the folder. This allows you to reuse commonly executed tests after every request.

> Adding scripts to collections and folders allows you to test the workflows in your API project. This helps to ensure that your requests cover typical scenarios, providing a reliable experience for application users.

You can update collection and folder scripts by clicking __View more actions__ (...) next to the collection or folder name, and selecting __Edit__. Choose the __Tests__ tab to add or update your script. You can also add collection scripts when you first create a collection.

<img src="https://assets.postman.com/postman-docs/collection-test-script.jpg" alt="Collection Tests" width="500px"/>

When you [run a collection](/docs/postman/collection-runs/intro-to-collection-runs/) you will see the test results output by the collection runner.

![Collection Tests](https://assets.postman.com/postman-docs/collection-tests-run.jpg)

You can write scripts to control the order in which your requests run using [branching and looping](/docs/postman/scripts/branching-and-looping/).

## Next steps

Check out some test script [examples](/docs/postman/scripts/test-examples/) and the [Postman Sandbox API reference](/docs/postman/scripts/postman-sandbox-api-reference/) for what you can do using the `pm` object. _Your scripts run in a sandboxed environment—to see what resources are available, see the [Sandbox documentation](/docs/postman/scripts/postman-sandbox/)._

Using tests in conjunction with other Postman utilities such as [monitoring](/docs/postman/monitors/intro-monitors/) lets you verify that your API meets performance requirements. You can also automate your testing by integrating collection runs within your [CI/CD config](/docs/postman/collection-runs/integration-with-travis/).
