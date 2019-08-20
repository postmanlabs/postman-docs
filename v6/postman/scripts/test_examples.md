---
title: "Test examples"
page_id: "test_examples"
warning: false

---

Test scripts are run after a request is sent and a response has been received from the server.

Let’s look at some examples of Postman tests. Most of these are available as snippets inside Postman. You can run as many tests as you want for a request.

## Environments

### Setting an environment variable

```js
pm.environment.set("variable_key", "variable_value");
```

### Setting a nested object as an environment variable

```js
var array = [1, 2, 3, 4];
pm.environment.set("array", JSON.stringify(array, null, 2));

var obj = { a: [1, 2, 3, 4], b: { c: 'val' } };
pm.environment.set("obj", JSON.stringify(obj));
```

### Getting an environment variable

```js
var value = pm.environment.get("variable_key");
```

If the value is a stringified JSON:

```js
// These statements should be wrapped in a try-catch block if the data is coming from an unknown source.

var array = JSON.parse(pm.environment.get("array"));
var obj = JSON.parse(pm.environment.get("obj"));
```

### Clear an environment variable

```js
pm.environment.unset("variable_key");
```

## Globals

### Set a global variable

```js
pm.globals.set("variable_key", "variable_value");
```

### Get a global variable

```js
pm.globals.get("variable_key");
```

### Clear a global variable

```js
pm.globals.unset("variable_key");
```

## Variables

This function searches for the variable across globals and the active environment.

```js
var value = pm.variables.get("variable_key");
```

## Response handling

### Check if response body contains a string

```js
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("string_you_want_to_search");
});
```

### Check if response body is equal to a string

```js
pm.test("Body is correct", function () {
    pm.response.to.have.body("response_body_string");
});
```

### Check for a JSON value

```js
pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.value).to.eql(100);
});
```

### Content-Type header is present

```js
pm.test("Content-Type header is present", function () {
    pm.response.to.have.header("Content-Type");
});
```

### Response time is less than 200ms

```js
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
```

### Status code is 200

```js
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

### Code name contains a string

```js
pm.test("Status code name has string", function () {
    pm.response.to.have.status("Created");
});
```

### Successful POST request status code

```js
pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([201,202]);
});
```

## Validate response structure

### JSON schema validation with tv4

```js
var schema = {
 "items": {
 "type": "boolean"
 }
};
var data1 = [true, false];
var data2 = [true, 123];

pm.test('Schema is valid', function() {
  pm.expect(tv4.validate(data1, schema)).to.be.true;
  pm.expect(tv4.validate(data2, schema)).to.be.true;
});
```

### JSON schema validation with ajv

```js
var Ajv = require('ajv'),
    ajv = new Ajv({logger: console}),
    schema = {
        "properties": {
            "alpha": {
                "type": "boolean"
            }
        }
    };

pm.test('Schema is valid', function() {
    pm.expect(ajv.validate(schema, {alpha: true})).to.be.true;
    pm.expect(ajv.validate(schema, {alpha: 123})).to.be.false;
});
```

## Encode/decode

### Decode base64 data

```js
// Assume `base64Content` has a base64 encoded value
var rawContent = base64Content.slice('data:application/octet-stream;base64,'.length);

// CryptoJS is an inbuilt object, documented here: https://www.npmjs.com/package/crypto-js
var intermediate = CryptoJS.enc.Base64.parse(base64content);
pm.test('Contents are valid', function() {
  pm.expect(CryptoJS.enc.Utf8.stringify(intermediate)).to.be.true; // a check for non-emptiness
});
```

### Convert XML body to a JSON object

```js
var jsonObject = xml2Json(responseBody);
```

## Send an asynchronous request

This function is available as both a pre-request and test script.

```js
pm.sendRequest("https://postman-echo.com/get", function (err, response) {
    console.log(response.json());
});
```

## Sample data files

JSON files are composed of key/value pairs.

[Download JSON file](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/test_data_file.json)

For CSV files, the top row needs to contain variable names.

[Download CSV file](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/test_data_file.csv)

---

## Older style of writing Postman tests (deprecated)

> **Note: This section refers to deprecated script syntax used in older versions of Postman. If you are writing scripts now, please use the syntax mentioned above.**

The older style of writing Postman tests relies on setting values for the special `tests` object. You can set a descriptive key for an element in the object and then say if it's true or false. For example, `tests["Body contains user_id"] = responsebody.has("user_id");` will check whether the response body contains the `user_id` string.

You can add as many keys as needed, depending on how many things you want to test for. You can view your test results in the response viewer under the **Tests** tab. The tab header shows how many tests passed, and the keys that you set in the tests variable are listed here. If the value evaluates to true, the test passed.

### Setting an environment variable (deprecated)

```js
postman.setEnvironmentVariable("key", "value");
```

### Setting a nested object as an environment variable (deprecated)

```js
var array = [1, 2, 3, 4];
postman.setEnvironmentVariable("array", JSON.stringify(array, null, 2));

var obj = { a: [1, 2, 3, 4], b: { c: 'val' } };
postman.setEnvironmentVariable("obj", JSON.stringify(obj));
```

### Getting an environment variable (deprecated)

```js
postman.getEnvironmentVariable("key");
```

### Getting an environment variable (whose value is a stringified object) (deprecated)

```js
// These statements should be wrapped in a try-catch block if the data is coming from an unknown source.

var array = JSON.parse(postman.getEnvironmentVariable("array"));
var obj = JSON.parse(postman.getEnvironmentVariable("obj"));
```

### Clear an environment variable (deprecated)

```js
postman.clearEnvironmentVariable("key");
```

### Set a global variable (deprecated)

```js
postman.setGlobalVariable("key", "value");
```

### Get a global variable (deprecated)

```js
postman.getGlobalVariable("key");
```

### Clear a global variable (deprecated)

```js
postman.clearGlobalVariable("key");
```

### Check if response body contains a string (deprecated)

```js
tests["Body matches string"] = responseBody.has("string_you_want_to_search");
```

### Convert XML body to a JSON object (deprecated)

```js
var jsonObject = xml2Json(responseBody);
```

### Check if response body is equal to a string (deprecated)

```js
tests["Body is correct"] = responseBody === "response_body_string";
```

### Check for a JSON value (deprecated)

```js
var data = JSON.parse(responseBody);
tests["Your test name"] = data.value === 100;
```

### Content-Type is present (Case-insensitive checking) (deprecated)

```js
tests["Content-Type is present"] = postman.getResponseHeader("Content-Type"); //Note: the getResponseHeader() method returns the header value, if it exists.
```

### Content-Type is present (Case-sensitive) (deprecated)

```js
tests["Content-Type is present"] = responseHeaders.hasOwnProperty("Content-Type");
```

### Response time is less than 200ms (deprecated)

```js
tests["Response time is less than 200ms"] = responseTime < 200;
```

### Response time is within a specific range (lower bound inclusive, upper bound exclusive) (deprecated)

```js
tests["Response time is acceptable"] = _.inRange(responseTime, 100, 1001); // _ is the inbuilt Lodash v3.10.1 object, documented at https://lodash.com/docs/3.10.1
```

### Status code is 200 (deprecated)

```js
tests["Status code is 200"] = responseCode.code === 200;
```

### Code name contains a string (deprecated)

```js
tests["Status code name has string"] = responseCode.name.has("Created");
```

### Successful POST request status code (deprecated)

```js
tests["Successful POST request"] = responseCode.code === 201 || responseCode.code === 202;
```

### Use TinyValidator for JSON data (deprecated)

```js
var schema = {
 "items": {
 "type": "boolean"
 }
};
var data1 = [true, false];
var data2 = [true, 123];

tests["Valid Data1"] = tv4.validate(data1, schema);
tests["Valid Data2"] = tv4.validate(data2, schema);
console.log("Validation failed: ", tv4.error);
```

### Decode base64 encoded data (deprecated)

```js
var intermediate,
    base64Content, // assume this has a base64 encoded value
    rawContent = base64Content.slice('data:application/octet-stream;base64,'.length);

intermediate = CryptoJS.enc.Base64.parse(base64content); // CryptoJS is an inbuilt object, documented here: https://www.npmjs.com/package/crypto-js
tests["Contents are valid"] = CryptoJS.enc.Utf8.stringify(intermediate); // a check for non-emptiness
```
