---
title: "Postman Sandbox API reference"
order: 97
page_id: "postman_sandbox_api_reference"
search_keyword: "pm.info, eventName, iteration, iterationCount, requestName, requestId, pm.sendRequest, sendRequest, pm.expect, pm.test, pm.variables.has, variables.has, pm.variables.get, variables.get, pm.variables.toObject, variables.toObject, pm.variables.set, variables.set, pm.environment.name, environment.name, pm.environment.has, environment.has, pm.environment.get, environment.get, pm.environment.set, environment.set, pm.environment.unset, environment.unset, pm.environment.clear, environment.clear, pm.environment.toObject, environment.toObject,  pm.environment.replaceIn, environment.replaceIn, pm.collectionVariables.has, collectionVariables.has, pm.collectionVariables.get, collectionVariables.get, pm.collectionVariables.set, collectionVariables.set, pm.collectionVariables.unset, collectionVariables.unset, pm.collectionVariables.clear, collectionVariables.clear, pm.collectionVariables.toObject, collectionVariables.toObject, pm.collectionVariables.replaceIn, collectionVariables.replaceIn, pm.globals.has, globals.has, pm.globals.get, globals.get, pm.globals.set, globals.set, pm.globals.unset, globals.unset, pm.globals.clear, globals.clear, pm.globals.toObject, globals.toObject pm.globals.replaceIn, globals.replaceIn, pm.request.url, request.url, pm.request.method, request.method, pm.request.body, request.body, pm.request.headers, request.headers, request.headers.add, headers.add, pm.request.headers.add, pm.request.headers.remove, request.headers.remove, headers.delete, pm.request.headers.upsert, request.headers.upsert, headers.upsert, pm.response.code, response.code, pm.response.status, response.status, pm.response.headers, response.headers, pm.response.responseTime, response.responseTime, pm.response.responseSize, response.responseSize, pm.response.text, response.text, pm.response.json, response.json, pm.iterationData.get, iterationData.get, pm.iterationData.toObject, iterationData.toObject, pm.iterationData.addLayer, iterationData.addLayer, pm.iterationData.clear, iterationData.clear, pm.iterationData.has, iterationData.has, pm.iterationData.set, iterationData.set, pm.iterationData.syncVariablesFrom, iterationData.syncVariablesFrom, pm.iterationData.syncVariablesTo, iterationData.syncVariablesTo, pm.iterationData.toJSON, iterationData.toJSON, pm.iterationData.unset, iterationData.unset, pm.iterationData.variables, iterationData.variables, pm.iterationData.isVariableScope, iterationData.isVariableScope, pm.cookies.has, cookies.has, pm.cookies.get, cookies.get, pm.cookies.toObject, cookies.toObject, pm.cookies.jar, cookies.jar, jar.set, jar.getAll, jar.unset, jar.clear, pm.response.to.have, response.to.have, pm.response.to.be, response.to.be"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: link
    name: "Variables"
    url: "/docs/postman/variables-and-environments/variables/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Command line integration with Newman"
    url: "/docs/postman/collection-runs/command-line-integration-with-newman/"

warning: false
---

_Note: The functionality described here is exclusive to Postman's native apps for Mac, Windows, and Linux._

## Global functions (pm.*)

### require

`require(moduleName:String):function → *`

The `require` function allows you to use the sandbox built-in library modules. The list of available libraries are listed below. The list links to their corresponding documentation.

* [ajv](https://www.npmjs.com/package/ajv) → v6.6.2
* [atob](https://www.npmjs.com/package/atob) → v2.1.2
* [btoa](https://www.npmjs.com/package/btoa) → v1.2.1
* [chai](http://chaijs.com/) → v4.2.0
* [cheerio](https://cheerio.js.org/) → v0.22.0
* [crypto-js](https://www.npmjs.com/package/crypto-js) → v3.1.9-1
* [csv-parse/lib/sync](http://csv.adaltas.com/parse) → v1.2.4
* [lodash](https://lodash.com/) → v4.17.11 (when used with require, the inbuilt `_` object is for v3.10.1)
* [moment](http://momentjs.com/docs/) → v2.22.2 (sans locales)
* [postman-collection](http://www.postmanlabs.com/postman-collection/) → v3.4.0
* [tv4](https://github.com/geraintluff/tv4) → v1.3.0
* [uuid](https://www.npmjs.com/package/uuid) → (the module loaded is a shim for original module)
* [xml2js](https://www.npmjs.com/package/xml2js) → v0.4.19

A number of NodeJS modules are also available to use in the sandbox:

* [path](https://nodejs.org/api/path.html)
* [assert](https://nodejs.org/api/assert.html)
* [buffer](https://nodejs.org/api/buffer.html)
* [util](https://nodejs.org/api/util.html)
* [url](https://nodejs.org/api/url.html)
* [punycode](https://nodejs.org/api/punycode.html)
* [querystring](https://nodejs.org/api/querystring.html)
* [string-decoder](https://nodejs.org/api/string_decoder.html)
* [stream](https://nodejs.org/api/stream.html)
* [timers](https://nodejs.org/api/timers.html)
* [events](https://nodejs.org/api/events.html)

In order to use a library, simply call the `require` function and pass the module name as a parameter and assign the return of the function to a variable.

```javascript
var atob = require('atob'),
    _ = require('lodash'),

    arrayOfStrings,
    base64Strings;

arrayOfStrings = ['string1', 'string2'];

base64Strings = _.map(arrayOfStrings, atob);

console.log(base64Strings);
```

### pm

`pm:Object`

The `pm` object encloses all information pertaining to the script being executed and allows one to access a copy of the request being sent or the response received. It also allows one to get and set environment and global variables.

`pm.info:Object`

The `pm.info` object contains information pertaining to the script being executed. Useful information such as the request name, request Id, and iteration count are stored inside of this object.

* `pm.info.eventName:String`

   Contains information whether the script being executed is a "prerequest" or a "test" script.

* `pm.info.iteration:Number`

   Is the value of the current iteration being run.

* `pm.info.iterationCount:Number`

   Is the total number of iterations that are scheduled to run.

* `pm.info.requestName:String`

  The saved name of the individual request being run.

* `pm.info.requestId:String`

  The unique guid that identifies the request being run.

### pm.sendRequest

**`pm.sendRequest:Function`**

The `pm.sendRequest` function allows sending HTTP/HTTPS requests asynchronously. Simply put, with asynchronous scripts, you can execute logic in the background if you have a heavy computational task or are sending multiple requests. Instead of waiting for a call to complete and blocking any next requests, you can designate a callback function and be notified when an underlying operation has finished.

Some things to know about `pm.sendRequest()`:

* The method accepts a collection SDK compliant request and a callback. The callback receives two arguments, an error (if any) and an SDK-compliant response. Refer to [Collection SDK Documentation](http://www.postmanlabs.com/postman-collection/Request.html#~definition) to view more information.
* It can be used in the pre-request or the test script.

```javascript
// example with a plain string URL
pm.sendRequest('https://postman-echo.com/get', function (err, res) {
    if (err) {
        console.log(err);
    } else {
        pm.environment.set("variable_key", "new_value");
    }
});

// Example with a full fledged SDK Request
const echoPostRequest = {
  url: 'https://postman-echo.com/post',
  method: 'POST',
  header: 'headername1:value1',
  body: {
    mode: 'raw',
    raw: JSON.stringify({ key: 'this is json' })
  }
};
pm.sendRequest(echoPostRequest, function (err, res) {
  console.log(err ? err : res.json());
});

// example containing a test ** under the Tests tab only
pm.sendRequest('https://postman-echo.com/get', function (err, res) {
  if (err) { console.log(err); }
  pm.test('response should be okay to process', function () {
    pm.expect(err).to.equal(null);
    pm.expect(res).to.have.property('code', 200);
    pm.expect(res).to.have.property('status', 'OK');
  });
});
```

Extended Reference:

* [Request JSON](http://www.postmanlabs.com/postman-collection/Request.html#~definition)
* [Response Structure](http://www.postmanlabs.com/postman-collection/Response.html)

### pm.variables

`pm.variables:` [Variable SDK Reference](https://www.postmanlabs.com/postman-collection/Variable.html)

In Postman, all variables conform to a specific hierarchy. All variables defined in the current iteration take precedence over the variables defined in the current environment, which overrides ones defined in the global scope. The order of precedence is `Iteration Data` < `Environment` < `Collection` < `Global`.

* `pm.variables.has(variableName:String):function → Boolean`: Check if there is a local variable in the current scope.
* `pm.variables.get(variableName:String):function → *`: Get the value of the local variable with the specified name.
* `pm.variables.set(variableName:String, variableValue:String"):function → void`: Set a local variable with the given value.
* `pm.variables.replaceIn(variableName:String):function`: Replaces the dynamic variable `{{variable_name}}` syntax with its actual resolved value.
* `pm.variables.toObject():function → Object`: Returns an object containing all the variables in the local scope.

The variables defined in the individual scopes may also be accessed via `pm.environment` for the environment scope and `pm.globals` for the global scope.

### pm.environment

`pm.environment:`

* `pm.environment.name:String`: Contains the name of the current environment.
* `pm.environment.has(variableName:String):function → Boolean`: Check if the environment has a variable with the given name.
* `pm.environment.get(variableName:String):function → *`: Get the variable with the given name in the currently selected environment.
* `pm.environment.set(variableName:String, variableValue:String):function`: Sets the variable with the given name and value in the currently selected environment.
* `pm.environment.replaceIn(variableName:String):function`: Replaces the dynamic variable `{{variable_name}}` syntax with its actual resolved value.
* `pm.environment.toObject():function → Object`: Returns all the environment variables in the form of a single object.
* `pm.environment.unset(variableName:String):function`: Remove a variable with the given name in the currently selected environment.
* `pm.environment.clear():function`: Clears all variables in the currently selected environment.

### pm.collectionVariables

`pm.collectionVariables:`

* `pm.collectionVariables.has(variableName:String):function → Boolean`: Check if there is a collection variable with the given name.
* `pm.collectionVariables.get(variableName:String):function → *`: Returns the value of the collection variable with the given name.
* `pm.collectionVariables.set(variableName:String, variableValue:String):function`: Sets a collection variable with given value.
* `pm.collectionVariables.replaceIn(variableName:String):function`: Replaces the dynamic variable `{{variable_name}}` syntax with its actual resolved value.
* `pm.collectionVariables.toObject():function → Object`: Returns a list of variables and their values in the form of an object.
* `pm.collectionVariables.unset(variableName:String):function`: Clears the specified collection variable.
* `pm.collectionVariables.clear():function`: Clear all the collection variables.

### pm.globals

`pm.globals:`

* `pm.globals.has(variableName:String):function → Boolean`: Check if there is a global variable with the given name.
* `pm.globals.get(variableName:String):function → *`: Returns the value of the global variable with the given name.
* `pm.globals.set(variableName:String, variableValue:String):function`: Sets a global variable with given value.
* `pm.globals.replaceIn(variableName:String):function`: Replaces the dynamic variable `{{variable_name}}` syntax with its actual resolved value.
* `pm.globals.toObject():function → Object`: Returns a list of variables and their values in the form of an object.
* `pm.globals.unset(variableName:String):function`: Clears the specified global variable.
* `pm.globals.clear():function`: Clear all the global variables.

### pm.request

`pm.request:` [Request SDK Reference](https://www.postmanlabs.com/postman-collection/Request.html)

The `request` object inside `pm` is a representation of the request for which this script is being run. For a pre-request script, this is the request that is about to be sent and when in a test script, this is the representation of the request that was sent.

`request` contains information stored in the following structure:

* `pm.request.url:`[`Url`](http://www.postmanlabs.com/postman-collection/Url.html): Contains the URL to which the request
is made.
* `pm.request.headers:`[`HeaderList`](http://www.postmanlabs.com/postman-collection/HeaderList.html): Contains the list of
headers for the current request.
* `pm.request.method:String` The HTTP method of the sent request.
* `pm.request.body:`[`RequestBody`](http://www.postmanlabs.com/postman-collection/RequestBody.html): Contains all the data related to the request body.
* `pm.request.headers.add(headerName:String):function`: Adds a header with the specified name for the current request.
* `pm.request.headers.remove(headerName:String):function`: Deletes the header with the specified name for the current request.
* `pm.request.headers.upsert({ key: headerName:String, value: headerValue:String}):function)`: Inserts a header name and header value as given to the list of headers for the current request (if the header does not exist, otherwise the already
existing header is updated to the new value).

> **The following items are ONLY available in the test scripts.**

### pm.response

`pm.response:` [Response SDK Reference](https://www.postmanlabs.com/postman-collection/Response.html)

Inside the test scripts, the `pm.response` object contains all information pertaining to the response that was received.

The response details are stored in the following format:

* `pm.response.code:Number`
* `pm.response.status:String`
* `pm.response.headers:`[`HeaderList`](http://www.postmanlabs.com/postman-collection/HeaderList.html)
* `pm.response.responseTime:Number`
* `pm.response.responseSize:Number`
* `pm.response.text():Function → String`
* `pm.response.json():Function → Object`

### pm.iterationData

`pm.iterationData:`

The `iterationData` object contains data from the data file provided during a collection run.

* `pm.iterationData.get(variableName:String):function → *`: Returns a variable from the iteration data with the specified name.

* `pm.iterationData.toObject():function → Object`: Returns the iteration data as an object.

* `pm.iterationData.addLayer(list: VariableList):function → void`: Add a list of variables to iteration data.

* `pm.iterationData.clear():function → void`: Clear all the data.

* `pm.iterationData.has(variableName: string):function → boolean`: Checks if a variable with the specified name exists in iteration data.

* `pm.iterationData.set(key: string, value: any, type: string):function → void`: Sets a variable, assigns it a value and type as specified.

* `pm.iterationData.syncVariablesFrom(object: {[key: string]: VariableDefinition}, track?: boolean, prune?: boolean):function → Object | Undefined`: Get variables from an object with the name specified.

* `pm.iterationData.syncVariablesTo(object?: {[key: string]: VariableDefinition}):function → Object`: Save the variables to an object with the name specified.

* `pm.iterationData.toJSON():function → *`: Converts the iterationData object to JSON format.

* `pm.iterationData.unset(key: string):function → void`: Un-assign the value given to a specified variable.

* `pm.iterationData.variables():function → Object`: Return all the variables from the iterationData object.

* `static pm.iterationData.isVariableScope(object: any):function → boolean`: Check if a specific variable is in scope.
  
### pm.cookies

`pm.cookies:` [CookieList SDK Reference](https://www.postmanlabs.com/postman-collection/CookieList.html)

The `cookies` object contains a list of cookies that are associated with the domain to which the request was made.

* `pm.cookies.has(cookieName:String):Function → Boolean`

   Check whether a particular cookie (addressed by its name) exists for the requested domain.

* `pm.cookies.get(cookieName:String):Function → String`

   Get the value of a particular cookie.

* `pm.cookies.toObject:Function → Object`

   Get a copy of all cookies and their values in the form of an object. The cookies returned are the ones defined for the requested domain and path.

### pm.cookies.jar

To enable programmatic access via the methods below, the cookie `url` must be [whitelisted](/docs/postman/sending-api-requests/cookies/#whitelisting-domains-for-programmatic-access-of-cookies).

* `pm.cookies.jar():Function → Object`

  Access the cookie jar object.

* `jar.set(URL:String, cookie name:String, cookie value:String, callback(error, cookie)):Function → Object`

   Set a cookie using cookie name and value. One can also directly set the cookie by assinging cookie value to the cookie name within this function.

* `jar.set(URL:String, { name:String, value:String, httpOnly:Bool }, callback(error, cookie)):Function → Object`

     Set a cookie using PostmanCookie or its compatible object.

* `jar.get(URL:String, token:String, callback (error, value)):Function → Object`

   Gets a cookie from the cookie jar.

* `jar.getAll(URL:String, callback (error, cookies)):Function → Object`

   Gets all the cookies from the cookie jar.

* `jar.unset(URL:String, token:String, callback(error)):Function → Object`

   Unset a cookie.

* `jar.clear(URL:String, callback (error)):Function → Object`

   Clear all cookies from the cookie jar.

### pm.visualizer.set

Use `pm.visualizer.set` to specify a template to [display response data in the visualizer](/docs/postman/sending-api-requests/visualizer/).

```js
pm.visualizer.set(layout:String, data:Object, options:Object):Function
```

* `layout` **required**
    * [Handlebars](https://handlebarsjs.com/) HTML template string
* `data` _optional_
    * Data to bind to the template and that you can access inside the template string
* `options` _optional_
    * [Options object](https://handlebarsjs.com/api-reference/compilation.html) for `Handlebars.compile()`

Example usage:

```js
var template = `<p>{{res.info}}</p>`;
pm.visualizer.set(template, {
    res: pm.response.json()
});
```

#### pm.getData

Use `pm.getData` to retrieve response data inside a visualization template string.

```js
pm.getData(callback):Function
```

The callback function accepts two parameters:

* `error`
    * Any error detail
* `data`
    * Data [passed to the template](#pmvisualizerset) by `pm.visualizer.set`

Example usage:

```js
pm.getData(function (error, data) {
  var value = data.res.info;
});
```

### pm.test

`pm.test(testName:String, specFunction:Function):Function`

   You can use this function to write test specifications inside either the `Pre-request Script` or `Tests` sandbox. Writing tests inside this function allows you to name the test accurately and this function also ensures the rest of the script is not blocked even if there are errors inside the function.

   The following sample test checks that everything about a response is valid to proceed.

  ```javascript
    pm.test("response should be okay to process", function () {
        pm.response.to.not.be.error;
        pm.response.to.have.jsonBody('');
        pm.response.to.not.have.jsonBody('error');
    });
  ```

  An optional `done` callback can be added to `pm.test`, to test asynchronous functions.

  ```javascript
    pm.test('async test', function (done) {
      setTimeout(() => {
          pm.expect(pm.response.code).to.equal(200);
          done();
      }, 1500);
    });
  ```

* `pm.test.index():Function → Number`

  Get the total number tests from a specific location.

### pm.expect

`pm.expect(assertion:*):Function → Assertion`

  `pm.expect` is a generic assertion function. Underlying this is the [ChaiJS expect BDD library](http://chaijs.com/api/bdd/). Using this library, it is easy to write tests where the syntax becomes readable.

  This function is useful to deal with assertions of data from a `response` or `variables`. For assertion test examples using `pm.expect`, check out [Assertion library examples](/docs/postman/scripts/test-examples#assertion-library-examples)

### Response Assertion API available in the test scripts

* `pm.response.to.have.status(code:Number)`
* `pm.response.to.have.status(reason:String)`
* `pm.response.to.have.header(key:String)`
* `pm.response.to.have.header(key:String, optionalValue:String)`
* `pm.response.to.have.body()`
* `pm.response.to.have.body(optionalValue:String)`
* `pm.response.to.have.body(optionalValue:RegExp)`
* `pm.response.to.have.jsonBody()`
* `pm.response.to.have.jsonBody(optionalExpectEqual:Object)`
* `pm.response.to.have.jsonBody(optionalExpectPath:String)`
* `pm.response.to.have.jsonBody(optionalExpectPath:String, optionalValue:*)`
* `pm.response.to.have.jsonSchema(schema:Object)`
* `pm.response.to.have.jsonSchema(schema:Object, ajvOptions:Object)`

### pm.response.to.be.*

The properties inside the `pm.response.to.be` object allows you to easily assert a set of pre-defined rules.

* `pm.response.to.be.info`

  Checks 1XX status code

* `pm.response.to.be.success`

  Checks 2XX status code

* `pm.response.to.be.redirection`

  Checks 3XX status code

* `pm.response.to.be.clientError`

  Checks 4XX status code

* `pm.response.to.be.serverError`

  Checks 5XX

* `pm.response.to.be.error`

  Checks 4XX or 5XX

* `pm.response.to.be.ok`

  Status code must be 200

* `pm.response.to.be.accepted`

  Status code must be 202

* `pm.response.to.be.badRequest`

  Status code must be 400

* `pm.response.to.be.unauthorized`

  Status code must be 401

* `pm.response.to.be.forbidden`

  Status code 403

* `pm.response.to.be.notFound`

  Status code of response is checked to be 404

* `pm.response.to.be.rateLimited`

  Checks whether response status code is 429

## Dynamic variables

Postman uses the faker library to generate dummy data. You can generate random names, addresses, email addresses, and much more. You can use these pre-defined variables multiple times to return different values per request.

You can use these variables like any other variable in Postman. Their values are generated at the time of execution and their names start with a `$` symbol e.g. `$guid`, `$timestamp` etc.

You can find the full list of dynamic variables in Postman [here](/docs/postman/variables-and-environments/variables-list/).
