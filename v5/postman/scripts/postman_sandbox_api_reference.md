---
title: "Postman Sandbox API reference"
page_id: "postman_sandbox_api_reference"
warning: false

---

_Note: The functionality described here is exclusive to Postman's native apps for Mac, Windows, and Linux._

### Global functions (pm.*)

### require

**`require(moduleName:String):function → *`**

The `require` function allows you to use the sandbox built-in library modules. The list of available libraries are listed below. The list links to their corresponding documentation.
1. [atob](https://www.npmjs.com/package/atob) → v2.0.3
1. [btoa](https://www.npmjs.com/package/btoa) → v1.1.2
1. [chai](http://chaijs.com/) → v3.5.0
1. [cheerio](https://cheerio.js.org/) → v0.22.0
1. [crypto-js](https://www.npmjs.com/package/crypto-js) → v3.1.9-1
1. [csv-parse/lib/sync](http://csv.adaltas.com/parse) → 1.2.1
1. [lodash](https://lodash.com/) → v4.17.4 (when used with require, the inbuilt `_` object is for v3.10.1)
1. [moment](http://momentjs.com/docs/) → v2.18.1 (sans locales)
1. [postman-collection](http://www.postmanlabs.com/postman-collection/) → v1.2.0
1. [tv4](https://github.com/geraintluff/tv4) → v1.2.7
1. [uuid](https://www.npmjs.com/package/uuid) → (the module loaded is a shim for original module)
1. [xml2js](https://www.npmjs.com/package/xml2js) → 0.4.19

A number of NodeJS modules are also available:
1. path
1. assert
1. buffer
1. util
1. url
1. punycode
1. querystring
1. string_decoder
1. stream
1. timers
1. events

In order to use a library, simply call the `require` function and pass the module name as a parameter and assign the return of the function to a variable.

```
var atob = require('atob'),
    _ = require('lodash'), 
  
    arrayOfStrings,
    base64Strings;
  
arrayOfStrings =  = ['string1', 'string2'];
  
base64Strings = _.map(arrayOfStrings, atob); 
  
console.log(base64Strings);
```

### pm

**`pm:Object`**

The `pm` object encloses all information pertaining to the script being executed and allows one to access a copy of the request being sent or the response received. It also allows one to get and set environment and global variables.

**`pm.info:Object`**

The `pm.info` object contains information pertaining to the script being executed. Useful information such as the request name, request Id, and iteration count are stored inside of this object.

* `pm.info.eventName:String`
   
   Contains information whether the script being executed is a "prerequest" or a "test" script.
   
* `pm.info.iteration:Number`
   
   Is the value of the current iteration being run.
   
* `pm.info.iterationCount:Number`

   Is the total number of iterations that are scheduled to run.
   
* `pm.info.requestName:String`
* `pm.info.requestId:String`

### pm.sendRequest

**`pm.sendRequest:Function`**

The `pm.sendRequest` function allows sending HTTP/HTTPS requests asynchronously. Simply put, with asynchronous scripts, you can now execute logic in the background if you have a heavy computational task or are sending multiple requests. Instead of waiting for a call to complete and blocking any next requests, you can designate a callback function and be notified when the underlying operation has finished.

Some things to know about `pm.sendRequest()`:

* The method accepts a collection SDK compliant request and a callback. The callback receives 2 arguments, an error (if any) and SDK compliant response.
* It can be used in the pre-request or the test script.

```
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

### pm.globals

**`pm.globals:`[`VariableScope`](http://www.postmanlabs.com/postman-collection/VariableScope.html)**
* `pm.globals.has(variableName:String):function → Boolean`
* `pm.globals.get(variableName:String):function → *`
* `pm.globals.set(variableName:String, variableValue:String):function`
* `pm.globals.unset(variableName:String):function`
* `pm.globals.clear():function`
* `pm.globals.toObject():function → Object`

### pm.environment

**`pm.environment:`[`VariableScope`](http://www.postmanlabs.com/postman-collection/VariableScope.html)**
* `pm.environment.has(variableName:String):function → Boolean`
* `pm.environment.get(variableName:String):function → *`
* `pm.environment.set(variableName:String, variableValue:String):function`
* `pm.environment.unset(variableName:String):function`
* `pm.environment.clear():function`
* `pm.environment.toObject():function → Object`

### pm.variables

**`pm.variables:`[`VariableScope`](http://www.postmanlabs.com/postman-collection/VariableScope.html)**

In Postman, all variables conform to a specific hierarchy. All variables defined in the current iteration takes precedence over the variables defined in the current environment, which overrides ones defined in the global scope, i.e. `Iteration Data` < `Environment` < `Global`.

The variables defined in the individual scopes may also be accessed via `pm.environment` for the environment scope and `pm.globals` for the global scope.

* `pm.variables.get(variableName:String):function → *`

### pm.request

**`pm.request:`[`Request`](http://www.postmanlabs.com/postman-collection/Request.html)**

The `request` object inside `pm` is a representation of the request for which this script is being run. For a pre-request script, this is the request that is about to be sent and when in a test script, this is the representation of the request that was sent.

`request` contains information stored in the following structure:
* `pm.request.url:`[`Url`](http://www.postmanlabs.com/postman-collection/Url.html)
* `pm.request.headers:`[`HeaderList`](http://www.postmanlabs.com/postman-collection/HeaderList.html)

### **The following items are available in TEST SCRIPTS only.**

### pm.response

**`pm.response:`[`Response`](http://www.postmanlabs.com/postman-collection/Response.html)**

Inside the test scripts, the `pm.response` object contains all information pertaining to the response that was received.

The response details are stored in the following format:
* `pm.response.code:Number`
* `pm.response.reason():Function → String`
* `pm.response.headers:`[`HeaderList`](http://www.postmanlabs.com/postman-collection/HeaderList.html)
* `pm.response.responseTime:Number`
* `pm.response.text():Function → String`
* `pm.response.json():Function → Object`

### pm.iterationData

**`pm.iterationData:`[`VariableScope`](http://www.postmanlabs.com/postman-collection/VariableScope.html)**

The `iterationData` object contains data from the data file provided during a collection run.

* `pm.iterationData.get(variableName:String):function → *`
* `pm.iterationData.toObject():function → Object`

### pm.cookies

**`pm.cookies:`[`CookieList`](http://www.postmanlabs.com/postman-collection/CookieList.html)**

The `cookies` object contains a list of cookies that are associated with the domain to which the request was made.

* `pm.cookies.has(cookieName:String):Function → Boolean`

   Check whether a particular cookie (addressed by its name) exists for the requested domain.
   
* `pm.cookies.get(cookieName:String):Function → String`

   Get the value of a particular cookie.
   
* `pm.cookies.toObject:Function → Object`

   Get a copy of all cookies and their values in the form of an object. The cookies returned are the ones defined for the requested domain and path.

* `pm.test(testName:String, specFunction:Function):Function`

   This function is used to write test specifications inside the sandbox. Writing tests inside this function allows one to name the test accurately as well as ensure that in case of any errors inside this function, the rest of the script is not blocked.

   In the following sample test, we are checking that everything about a response is valid for us to proceed.

    ```
    pm.test("response should be okay to process", function () {
        pm.response.to.not.be.error;
        pm.response.to.have.jsonBody('');
        pm.response.to.not.have.jsonBody('error');
    });
    ```

* `pm.expect(assertion:*):Function → Assertion`

  `pm.expect` is a generic assertion function. Underlying this is the [ChaiJS expect BDD library](http://chaijs.com/api/bdd/). Using this library, it is easy to write tests where the syntax becomes readable.
  
  This function is useful to deal with assertions of data from a response or variables.
      
  ```
    pm.test('environment to be production', function () {
        pm.expect(pm.environment.get('env')).to.equal('production');
    });
  ```
  
### Response Assertion API in test scripts

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
   
