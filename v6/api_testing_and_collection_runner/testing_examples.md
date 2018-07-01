---

title: "Testing examples"
page_id: "testing_examples"
tags:
  - "app"
warning: false
---

Let's look at some examples of Postman tests. Most of these are available as snippets inside Postman. Most
tests are as simple as one-line JavaScript statements. You can have as many tests as you want for a request.

Note: Test scripts are run after a response has been received from the server.

Setting an environment variable

    postman.setEnvironmentVariable("key", "value");

Getting an environment variable

    postman.getEnvironmentVariable("key");

Set a global variable

    postman.setGlobalVariable("key", "value");

Get a global variable

    postman.getGlobalVariable("key"); 

Check if response body contains a string

    tests["Body matches string"] = responseBody.has("string_you_want_to_search");

Convert XML body to a JSON object

    var jsonObject = xml2Json(responseBody);

Check if response body is equal to a string

    tests["Body is correct"] = responseBody === "response_body_string";

Check for a JSON value

    var data = JSON.parse(responseBody);
    tests["Your test name"] = data.value === 100;

Content-Type is present (Case-insensitive checking)

    tests["Content-Type is present"] = postman.getResponseHeader("Content-Type"); //Note: the getResponseHeader() method returns the header value, if it exists.

Content-Type is present (Case-sensitive)

    tests["Content-Type is present"] = responseHeaders.hasOwnProperty("Content-Type");

Response time is less than 200ms

    tests["Response time is less than 200ms"] = responseTime < 200;

Status code is 200

    tests["Status code is 200"] = responseCode.code === 200;

Code name contains a string

    tests["Status code name has string"] = responseCode.name.has("Created");

Succesful POST request status code

    tests["Successful POST request"] = responseCode.code === 201 || responseCode.code === 202;

Use TinyValidator for JSON data

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

Sample data files

JSON files are composed of key/value pairs  
[Download JSON file][0]  

For CSV files, the top row needs to contain variable names  
[Download CSV file][1]  


[0]: http://www.getpostman.com/samples/test_data_file.json
[1]: http://www.getpostman.com/samples/test_data_file.csv
