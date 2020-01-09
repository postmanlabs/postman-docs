---
title: 'Validating Relations Against Schema'
order: 91.1
page_id: 'validating-relations-against-schema'
warning: false
---

You can validate your API relations (documentation, tests, mock servers, or monitors) against the API schema. This helps keeping your relations in sync with your API specification.
If they do not match, you can see the list of issues that have been found in order to fix them.

> This feature is only available for OpenAPI 3.0 at this time.

This section describes the following topics:

* [Validating relations](#validating-relations)
* [Accessing issues](#accessing-issues)
* [List of possible issues](#list-of-possible-issues)
* [Resolving issues](#resolving-issues)
* [Troubleshooting](#troubleshooting)

## Validating relations

In this section, you can learn the pre-requisites for validating your relations against an API schema, when validations are triggered, and how to trigger one manually.

For validations to execute, you need:

* An API schema - see [Defining an API](/docs/postman/design-and-develop-apis/the-api-workflow/#defining-an-api)
* API relation(s) - this can be a [mock server](https://learning.getpostman.com/docs/postman/design-and-develop-apis/the-api-workflow/#adding-a-mock-server), [documentation](https://learning.getpostman.com/docs/postman/design-and-develop-apis/the-api-workflow/#adding-documentation), [tests](https://learning.getpostman.com/docs/postman/design-and-develop-apis/the-api-workflow/#adding-documentation), or a [monitor](https://learning.getpostman.com/docs/postman/design-and-develop-apis/the-api-workflow/#adding-documentation)

> Once the validation is done, a status is displayed next to the relation, it can be either a checkmark indicating no issues have been found or a warning message stating `Issues found`.

When adding a new relation to an API, the relation will be automatically checked against the current API schema. The results of the validation will appear next to the relation.

[![add new relation validation](https://user-images.githubusercontent.com/5029719/72074589-1b4d2c80-32ea-11ea-8d87-2f06a11e2ca1.gif)](https://user-images.githubusercontent.com/5029719/72074589-1b4d2c80-32ea-11ea-8d87-2f06a11e2ca1.gif)

You can also trigger a new validation of your relations manually in the following cases:

* Re-validating after editing your schema and/or your linked relation
* Adding a new schema to an API that already has relations linked to it

You can do so by navigating to your relation (eg. **Test Suite**), clicking the validation status, then **Validate again**.

[![re validating relation](https://user-images.githubusercontent.com/5029719/72075557-eb068d80-32eb-11ea-8845-96b1afa3ed8e.gif)](https://user-images.githubusercontent.com/5029719/72075557-eb068d80-32eb-11ea-8845-96b1afa3ed8e.gif)

You can also trigger a validation from the issues list by clicking **Validate again** at the top-right of the page.

## Accessing issues

This section describes:

* [Accessing summary from the Postman app](#accessing-summary-from-the-postman-app)
* [Accessing summary from the web dashboard](#accessing-summary-from-the-web-dashboard)
* [Understanding the summary](#understanding-the-summary)

### Accessing summary from the Postman app

First, navigate to your API by clicking **APIs** in the sidebar, then select your API in the list. Then, navigate to the tab where the relation you want to see the issue of is (either **Develop**, **Test** or **Observe**).

A status indicating if issues have been found is displayed next to the relation. If issues are found, you can display them by clicking **Issues found** > **View issues**.
This link opens a new page on the [web dashboard](https://app.getpostman.com/dashboard) summarizing the issues that have been found.

[![open list of issues app](https://user-images.githubusercontent.com/5029719/72078733-8e0dd600-32f1-11ea-8947-73d302d29704.gif)](https://user-images.githubusercontent.com/5029719/72078733-8e0dd600-32f1-11ea-8947-73d302d29704.gif)

### Accessing summary from the web dashboard

You can access the summary of issues from the [web dashboard](https://app.getpostman.com/dashboard) by navigating to your API, then selecting the tab where the relation you want to see the issue of is (either **Develop**, **Test** or **Observe**).

A status indicating if issues have been found is displayed next to the relation. If issues are found, you can display them by hoevering on **Issues found**, then clicking **View issues**. This will redirect you to a page summarizing the issues that have been found.

[![open list of issues dashboard](https://user-images.githubusercontent.com/5029719/72079607-28224e00-32f3-11ea-956d-99d0087b03fb.gif)](https://user-images.githubusercontent.com/5029719/72079607-28224e00-32f3-11ea-956d-99d0087b03fb.gif)

### Understanding the summary

The summary lists all endpoints of your API relation, regardless of whether they have issues or if they are describe in the API schema.

In the case where the endpoint has been successfully validated against the API schema, a green checkmark with a message indicating `Validated against PATH` is displayed.

[![endpoint validated](https://user-images.githubusercontent.com/5029719/72102453-f32bf080-331e-11ea-8e7e-7ce7f99b1e53.png)](https://user-images.githubusercontent.com/5029719/72102453-f32bf080-331e-11ea-8e7e-7ce7f99b1e53.png)

In the case where an endpoint exists in the API relation but isn't described in the API schema, a red cross along with a message indicating `Unable to validate. No matching path found in schema` is displayed.

[![endpoint not found in schema](https://user-images.githubusercontent.com/5029719/72102493-0b9c0b00-331f-11ea-828f-e8a237c5b4f2.png)](https://user-images.githubusercontent.com/5029719/72102493-0b9c0b00-331f-11ea-828f-e8a237c5b4f2.png)

In the case where syncing issues are found between the API relation and the API schema, a list of the corresponding issues is displayed split inbetween **request params** and **response body** issues. You can see a complete list of possible issues in the section below ([List of possible issues](#list-of-possible-issues)).

[![endpoint has syncing issue](https://user-images.githubusercontent.com/5029719/72102817-c75d3a80-331f-11ea-9045-50d54a5d6690.png)](https://user-images.githubusercontent.com/5029719/72102817-c75d3a80-331f-11ea-9045-50d54a5d6690.png)

> You can collapse or expand the list of issues by clicking the grey arrow at the top-right of the list.

## List of possible issues

This section lists the type of issue that the validation may raise along with examples. There are 5 categories of issue:

* [Invalid type](#invalid-type)
* [Missing in schema](#missing-in-schema)
* [Missing in request](#missing-in-request)
* [Invalid body](#invalid-body)
* [Body schema not found](#body-schema-not-found)

### Invalid type

This is raised when the basic type doesn't match or when the basic type matches but the schema is wrong.

> E.g. The path variable "petId" needs to be of type boolean, but we found "<integer>"

### Missing in schema

This is raised when an entity (variable, header, response headers) is missing from the schema.

> E.g. The header "isItCooper" was not found in the schema

### Missing in request

This is raised when an entity (variable, header) is missing from the request.

> E.g. The required path variable "name" was not found in the transaction

### Invalid body

This is raised when the request body didn't match the one specified in the schema.

### Body schema not found

This is raised when no `application/json` schema was found for the response.
