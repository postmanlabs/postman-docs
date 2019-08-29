---
title: "Monitoring APIs and websites"
page_id: "monitoring_apis_websites"
warning: false
---


Some teams use Postman monitors to ensure their APIs and websites remain operational. Monitors can be run as frequently as five minutes.

## Monitoring APIs

### Monitoring a specific endpoint

To monitor a specific endpoint, create a collection with different variants of the same endpoint in different requests. The idea here is to test responses for each variant, so as to cover the endpoint completely. Review a complete [reference of testing various aspects of a request](/docs/postman/scripts/test_scripts/).

### Monitoring an entire API

This is similar in approach to monitoring a specific endpoint, with the subtle difference of storing the common API host in an environment variable, such that the requests across different API endpoints differ in their path, among other request parameters. Such a sequence also makes it possible to chain data across requests, which allows testing an entire API as a whole.

### Running an API test suite

In an API where various endpoints are interlinked, precise knowledge about their functioning is crucial. In cases where data is passed from one request to another, the entire response, or a part of it, can be saved as an environment variable. Additional care should be taken while setting non-atomic values (objects, arrays, etc), as the original value will be lost. Instead, such complex objects and arrays can be handled via:

```js
// set the value
postman.setEnvironmentVariable('complexObj', JSON.stringify(myComplexObjOrArray, null, 2));

// Fetch the value
var foo;
try {
    foo = JSON.parse(postman.getEnvironmentVariable('complexObj'));
}
catch (e) {
    console.error(e);
    foo = { __parseError: true };
}
if (foo.__parseError) {
    // handle parse errors here
}
```

With the stringified nested value in place, it can be passed to subsequent requests, for instance, as a request body.

## Monitoring Websites

### Monitoring HTTP response codes

Response code tests can be done by checking the value of `responseCode.code` within test scripts.

```js
tests['Request resulted in 200 OK'] = responseCode.code === 200;
```

### Monitoring latency

As an alternative to request timeouts, website response latency can be monitored by comparing values of the `responseTime` variable within test scripts.

```js
tests['Response latency is acceptable'] = responseTime < 1000;
// responseTime is in milliseconds
```
