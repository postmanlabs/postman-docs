---
title: 'Validating Elements Against Schema'
order: 207
page_id: 'validating-elements-against-schema'
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the API Builder"
    url: "/docs/postman/design-and-develop-apis/the-api-workflow/"
  - type: link
    name: "Managing and sharing APIs"
    url: "/docs/postman/design-and-develop-apis/managing-apis/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Create APIs directly within the Postman app"
    url: "https://blog.postman.com/2019/05/17/postman-7-1-create-apis-directly-within-the-postman-app/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Viewing and analyzing APIs"
    url: "/docs/postman/design-and-develop-apis/view-and-analyze-api-reports/"
---

You can validate your API elements (documentation, tests, mock servers, monitors) against an API schema. This helps keep your elements in sync with your API specification. If they do not match, Postman will present a list of issues that have been found in order to fix them.

> This feature is available from Postman 7.15.0 and for OpenAPI 3.0 schemas only at this time.

* [Validating elements](#validating-elements)
* [Accessing issues](#accessing-issues)
* [List of possible issues](#list-of-possible-issues)

## Validating elements

This section outlines the pre-requisites for validating your elements against an API schema, when validations are triggered, and how to trigger one manually.

For validations to execute, you need the following elements in place:

* An API schema - see [Defining an API](/docs/postman/design-and-develop-apis/the-api-workflow/#defining-an-api)
* API element(s) - this can be a [mock server](https://learning.postman.com/docs/postman/design-and-develop-apis/the-api-workflow/#adding-a-mock-server), [documentation](https://learning.postman.com/docs/postman/design-and-develop-apis/the-api-workflow/#adding-documentation), [tests](https://learning.postman.com/docs/postman/design-and-develop-apis/the-api-workflow/#adding-documentation), or a [monitor](https://learning.postman.com/docs/postman/design-and-develop-apis/the-api-workflow/#adding-documentation)

> Once the validation is complete, a status will appear next to the element indicating a checkmark if no issues have been found, or a warning message stating `Issues found`.

When you add a new element to an API, Postman will automatically check it against the current API schema. The results of the validation will appear next to the element.

[![add new element validation](https://assets.postman.com/postman-docs/addnewelementvalidation.gif)](https://assets.postman.com/postman-docs/addnewelementvalidation.gif)

You can also trigger a new validation of your element manually in the following cases:

* Re-validating after editing your schema and/or your linked element
* Adding a new schema to an API that already has elements linked to it

You can do so by navigating to your element (eg. **Test Suite**), clicking the validation status, then **Validate Again**.

[![re validating element](https://assets.postman.com/postman-docs/revalidatingelement.gif)](https://assets.postman.com/postman-docs/WS-certificates.gif)

You can also trigger a validation from the issues list by clicking **Validate again** at the top-right of the page.

## Accessing issues

You can access a summary of issues found during validation [from the Postman app](#accessing-the-issue-summary-from-the-postman-app) or the [web dashboard](#accessing-the-issue-summary-from-the-web-dashboard). The summary will indicate the [details of each issue](#understanding-the-issue-summary) so that you can address the underlying problem.

### Accessing the issue summary from the Postman app

Navigate to your API by clicking **APIs** in the app sidebar, then select your API from the list. Open the tab containing the element you want to see issues for (either **Develop**, **Test** or **Observe**).

You will see a status indicating whether issues have been found during validation next to the element. If there are issues, view them by clicking **Issues found** > **View issues**. This will take you to a page on the [web dashboard](https://app.getpostman.com/dashboard) summarizing validation issues.

[![open list of issues app](https://assets.postman.com/postman-docs/openlistofissuesapp.gif)](https://assets.postman.com/postman-docs/openlistofissuesapp.gif)

### Accessing the issue summary from the web dashboard

You can access the summary of validation issues from the [web dashboard](https://app.getpostman.com/dashboard) by navigating to your API, then selecting the tab containing the element you want to see issues for (either **Develop**, **Test** or **Observe**).

You will see a status indicating whether any issues have been found during validation next to the element. If there are issues, you can display them by hovering over **Issues found**, then clicking **View issues**. This will redirect you to a page summarizing the issues.

[![open list of issues dashboard](https://assets.postman.com/postman-docs/openlistofissuesdashboard.gif)](https://assets.postman.com/postman-docs/openlistofissuesdashboard.gif)

### Understanding the issue summary

The validation summary lists all endpoints in your API element, regardless of whether they have issues, or if they are described in the API schema.

If an endpoint has been successfully validated against the API schema, you will see a green checkmark with a message indicating `Validated against PATH`.

<img alt="endpoint validated" src="https://assets.postman.com/postman-docs/endpointvalidate.png" width="300px"/>

If an endpoint exists in the API element but isn't described in the API schema, you will see a red cross along with a message indicating `Unable to validate. No matching path found in schema`.

<img alt="endpoint not found in schema" src="https://assets.postman.com/postman-docs/endpointnotfoundinschema.png" width="300px"/>

If syncing issues are found between the API element and the API schema, the validation summary will outline them under one of the following categories:

* Request params
* Request headers
* Request URL
* Request body
* Example response body
* Example response headers

Check out the [complete list of possible issues](#list-of-possible-issues).

<img alt="endpoint has syncing issue" src="https://assets.postman.com/postman-docs/endpointhassyncingissue.png" width="400px"/>

> You can collapse or expand the list of issues by clicking the grey arrow at the top-right of the list.

## List of possible issues

This section lists each type of issue that validation may raise along with examples. Issues fall into five categories:

* [Invalid type](#invalid-type)
* [Missing in schema](#missing-in-schema)
* [Missing in request](#missing-in-request)
* [Invalid body](#invalid-body)
* [Body schema not found](#body-schema-not-found)

### Invalid type

`Invalid type` issues occur when the basic type doesn't match, or when the basic type matches but the schema is wrong.

> The path variable "petId" needs to be of type boolean, but we found `<integer>`

### Missing in schema

`Missing in schema` issues occur when an entity (variable, header, response headers) is not found in the schema you are validating against.

> The header "isItCooper" was not found in the schema

### Missing in request

`Missing in request` issues occur when an entity (variable, header) is not found in the request.

> The required path variable "name" was not found in the transaction

### Invalid body

`Invalid body` issues occur when the request body didn't match the one specified in the schema.

### Body schema not found

`Body schema not found` issues occur when no `application/json` schema was found for the response.

## Next steps

Your issue summary includes the details to address any problems validating against your schema. You can edit the relevant components of your API and validate again to see if the issues have been resolved.

In addition to syncing your API elements with a schema, you can [analyze and utilize reporting](/docs/postman/design-and-develop-apis/view-and-analyze-api-reports/) to promote understanding of how your APIs are performing.
