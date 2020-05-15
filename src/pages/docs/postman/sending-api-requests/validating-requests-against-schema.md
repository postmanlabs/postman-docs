---
title: "Validating Requests Against Schema"
order: 28.1
page_id: "validating-requests-against-schema"
warning: false
---

Postman can validate your requests against a linked API schema. This helps keep your documentation, tests, and other linked resources in sync with your API specification. If a request doesn't conform to the schema, you can see a list of issues, and fix them as you go.

> This feature is available from Postman 7.15.0 and for OpenAPI 3.0 schemas only at this time.

This section outlines the following topics:

* [Validating requests](#validating-requests)
* [Accessing issues](#accessing-issues)
* [List of possible issues](#list-of-possible-issues)

## Validating requests

If you want your requests to be validated, your collection must be linked to an API.

A collection is linked to an API if you [generate it from a schema](/docs/postman/design-and-develop-apis/the-api-workflow/#generating-a-collection) or [add it as a relation to an existing API](/docs/postman/design-and-develop-apis/the-api-workflow/#developing-an-api).

Postman will validate a request when it is sent. If issues are found, you will see a warning message showing the number of issues next to the name of the request.

[![validating request](https://assets.postman.com/postman-docs/validatingrequest.gif)](https://assets.postman.com/postman-docs/validatingrequest.gif)

> Validation is version-specific, and will be performed against the schema of the particular version of the API linked with the collection. If one version of a collection is linked to more than one version of an API, Postman will select the schema from the latest created version of API for validation.

## Accessing issues

You can access more information about issues [within the Postman App](#accessing-the-issue-summary), indicating the [details of each issue](#understanding-the-issue-summary) so that you can address the underlying problem.

### Accessing the issue summary

To access more information about the issues, click the warning message next to the name of the request (e.g. **1 issue**). This will open a side-panel on the right indicating detailed information about which component of the request is affected and what the issue itself is.

[![viewing issues](https://assets.postman.com/postman-docs/viewingissues.gif)](https://assets.postman.com/postman-docs/viewingissues.gif)

### Understanding the issue summary

The **Schema validation** panel displays the following resources:

* A direct link to the API against which the request is validated—click the link to open the API within the Postman app.
* More details on where the issue lies within the request. Check out the [complete list of possible issues](#list-of-possible-issues).

> You can click a specific issue to access the relevant request component.  

[![viewing issues](https://assets.postman.com/postman-docs/viewingissues2.gif)](https://assets.postman.com/postman-docs/viewingissues2.gif)

## List of possible issues

This section lists each type of issue that validation may raise along with examples. Issues fall into five categories:

* [Invalid type](#invalid-type)
* [Missing in schema](#missing-in-schema)
* [Missing in request](#missing-in-request)
* [Invalid body](#invalid-body)
* [Body schema not found](#body-schema-not-found)

### Invalid type

`Invalid type` issues occur when the basic type doesn't match, or when the basic type matches but the schema is wrong.

> The path variable "petId" needs to be of type integer, but we found `Cooper`

### Missing in schema

`Missing in schema` issues occur when an entity (variable, header, response headers) is not found in the schema you are validating against.

> The header "isItCooper" was not found in the schema

### Missing in request

`Missing in request` issues occur when an entity (variable, header) is missing from the request.

> The required path variable "name" was not found in the transaction

### Invalid body

`Invalid body` issues occur when the request body didn't match the one specified in the schema.

### Body schema not found

`Body schema not found` issues occur when no `application/json` schema was found for the response.

## Next steps

Your issue summary helps you keep your requests in sync with your schema.

In addition to validating against a schema, if you're still having problems with your requests, you can [troubleshoot them](/docs/postman/sending-api-requests/troubleshooting-api-requests/)—otherwise you can start [monitoring your API requests](/docs/postman/monitors/intro-monitors/) to see how they perform.
