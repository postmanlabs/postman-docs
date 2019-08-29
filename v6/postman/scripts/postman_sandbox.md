---
title: "Postman Sandbox"
page_id: "postman_sandbox"
warning: false
---

The Postman Sandbox is a JavaScript execution environment that is available to you when writing pre-request scripts and test scripts for requests (both in Postman and Newman). The code you write in the pre-request/test script section is executed in this sandbox.

## Commonly used libraries and utilities

* [Lodash](https://lodash.com/): JS utility library
* [cheerio](https://cheerio.js.org/): A fast, lean implementation of the core jQuery API (available in versions 4.6.0 and up)
* [BackboneJS](https://backbonejs.org/) **Deprecated**: Provides simple models, views, and collections. This will be removed in future versions of the sandbox.
* [SugarJS](https://sugarjs.com/) **Deprecated**: Extends native JS objects with useful methods. This will be removed in future versions of the sandbox.
* [tv4 JSON schema validator](https://github.com/geraintluff/tv4) **Deprecated**: Validates JSON objects against v4 of the json-schema draft
* [Ajv](https://github.com/epoberezkin/ajv): JSON schema validator.
* [CryptoJS](https://code.google.com/archive/p/crypto-js/): standard and secure cryptographic algorithms. Supported algorithms: AES, DES, EvpKDF, HMAC-MD5, HMAC-SHA1/3/256/512, MD5, PBKDF2, Rabbit, SHA1/3/224/256/512, TripleDES
* `xml2Json(xmlString)`: This function behaves the same in Newman and Postman
* `xmlToJson(xmlString)` **Deprecated**: This function does NOT behave the same in Newman and Postman
* `postman.getResponseHeader(headerName)` Test-only: Returns the response header with name “headerName”, if it exists. Returns null if no such header exists. **Note**: According to W3C specifications, header names are case-insensitive. This method takes care of this. `postman.getResponseHeader("Content-type")` and `postman.getResponseHeader("content-Type")` will return the same value.

Note: jQuery support has been discontinued since version 4.6.0, in favor of [cheerio](https://cheerio.js.org/).

## Environment and global variables

* `pm.environment.set("variableName", variableValue)`: Sets an environment variable “variableName”, and assigns the string “variableValue” to it. You must have an environment selected for this method to work. **Note**: Only strings can be stored. Storing other types of data will result in unexpected behavior.
* `pm.environment.get("variableName")`: Returns the value of an environment variable “variableName”, for use in pre-request & test scripts. You must have an environment selected for this method to work.
* `pm.environment.has("variableName")`: Returns `true` if an environment variable by the name `"variableName"` exists.
* `pm.environment.unset("variableName")`: Clears the environment variable named “variableName”. You must have an environment selected for this method to work.
* `pm.environment.clear()`: Clears all environment variables. You must have an environment selected for this method to work.
* `pm.globals.set(variableName, variableValue)`: Sets a global variable “variableName”, and assigns the string “variableValue” to it. **Note**: Only strings can be stored. Storing other types of data will result in unexpected behavior.
* `pm.globals.has("variableName")`: Returns `true` if a global variable by the name `"variableName"` exists.
* `pm.globals.get("variableName")`: Returns the value of a global variable “variableName”, for use in pre-request & test scripts.
* `pm.globals.unset("variableName")`: Clears the global variable named “variableName”.
* `pm.globals.clear()`: Clears all global variables.

## Dynamic variables

Postman also has a few dynamic variables which you can use in your requests. This is primarily an experiment right now. More functions would be added soon. Note that dynamic variables cannot be used in the Sandbox. You can only use them in the `{{..}}` format in the request URL / headers / body.

* `{{$guid}}`: Adds a v4 style guid
* `{{$timestamp}}`: Adds the current timestamp
* `{{$randomInt}}`: Adds a random integer between 0 and 1000

For full list of available dynamic variables, see the [Postman Sandbox API Reference](/docs/postman/scripts/postman_sandbox_api_reference/).

## Cookies

* `responseCookies {array}` Postman-only: Gets all cookies set for the domain. You will need to enable the [Interceptor](/docs/postman/sending_api_requests/interceptor_extension/) for this to work.
* `postman.getResponseCookie(cookieName)` Postman-only: Gets the response cookie with the given name. You will need to enable the interceptor for this to work. Check out the [blog post](https://blog.getpostman.com/2014/11/28/using-the-interceptor-to-read-and-write-cookies/).

## Request/response related properties

* `request {object}`: Postman makes the request object available to you while writing scripts. This object is read-only. Changing properties of this object will have no effect. Note: Variables will NOT be resolved in the request object. The request object is composed of the following:
  * `data {object}` - this is a dictionary of form data for the request. (`request.data[“key”]==”value”`)
  * `headers {object}` - this is a dictionary of headers for the request (`request.headers[“key”]==”value”`)
  * `method {string}` - GET/POST/PUT etc.
  * `url {string}` - the url for the request.
* `responseHeaders {object}` **Deprecated**, **Test-only**: This is a map of the response headers. This is case-sensitive, and should not be used. Check the `postman.getResponseHeader()` method listed above.
* `responseBody {string}` **Test-only**: A string containing the raw response body text. You can use this as an input to JSON.parse, or xml2Json.
* `responseTime {number}` **Test-only**: The response time in milliseconds
* `responseCode {object}` **Test-only**: Contains three properties:
  * `code {number}`: The response code (200 for OK, 404 for Not Found etc)
  * `name {string}`: The status code text
  * `detail {string}`: An explanation of the response code
* `tests {object}` **Test-only**: This object is for you to populate. Postman will treat each property of this object as a boolean test.
* `iteration {number}`: Only available in the Collection Runner and Newman. Represents the current test run index. Starts from 0.

**Test-only**: This object is only available in the test script section. Using this in a pre-request script throws an error.

## Data files

If you're using [data files](https://blog.getpostman.com/2014/10/28/using-csv-and-json-files-in-the-postman-collection-runner/) in the Collection Runner or in Newman, you'll have access to a `data` object, which is a dictionary of data values in the current test run.

## pm.* APIs

Review [Postman Sandbox API Reference](/docs/postman/scripts/postman_sandbox_api_reference/).
