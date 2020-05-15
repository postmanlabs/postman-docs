---
title: "Using Markdown for descriptions"
order: 47
page_id: "using_markdown_for_descriptions"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Imgur"
    url: "https://www.postman.com/resources/case-studies/imgur/"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Building a Restaurant Discovery Service with Postman"
    url: "https://blog.postman.com/2017/07/19/building-a-restaurant-discovery-service-with-postman/"
  - type: link
    name: "Descriptions for request attributes in Postman"
    url: "https://blog.postman.com/2017/06/03/descriptions-for-request-attributes-in-postman/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Documenting your API"
    url: "/docs/postman/api-documentation/documenting-your-api/"

warning: false
---

Postman supports [Markdown](/docs/postman/api-documentation/authoring-your-documentation/) as a way to style text descriptions for [requests](/docs/postman/sending-api-requests/requests/), [collections](/docs/postman/collections/creating-collections/), and [folders](/docs/postman/collections/managing-collections/) in collections. You can also embed screenshots and other images for more descriptive flair.

For more information about Markdown, review the [reference for using Markdown](https://documenter.getpostman.com/view/33232/markdown-in-api-documentation/JsGc) for API documentation.

Postman renders Markdown in your Workspace, and in public or internal API documentation.

This topic covers:

* [Workspaces](#workspaces)
* [Public or internal API documentation](#public-or-internal-api-documentation)
* [Descriptions for request attributes](#descriptions-for-request-attributes)

## Workspaces

In your Workspace, you can use Markdown to style the request description  
[![request description](https://assets.postman.com/postman-docs/WS-markdown-NSFrequestDescription.png)](https://assets.postman.com/postman-docs/WS-markdown-NSFrequestDescription.png)

You can use Markdown to style descriptions for collections and folders.
[![collection details view](https://assets.postman.com/postman-docs/WS-markdown-descrptions-folders.png)](https://assets.postman.com/postman-docs/WS-markdown-descrptions-folders.png)

## Public or internal API documentation

Public or internal [API documentation](/docs/postman/api-documentation/documenting-your-api) can automatically generate API descriptions.

You can use Markdown to style those descriptions.
[![automatically generated documentation](https://assets.postman.com/postman-docs/WS-markdown-auto-docs.png)](https://assets.postman.com/postman-docs/WS-markdown-auto-docs.png)

## Descriptions for request attributes

The description column in the [data editor](/docs/postman/launching-postman/navigating-postman/) makes your requests easier to understand. You can add comments and details for each of your query parameters, path variables, headers, and body (form-data and urlencoded) in the Postman app.

For example, specify if an element is required or optional, indicate the accepted data type, or use alternative terminology to provide additional clarification for developers who work with your requests.

[![data editor parameters](https://assets.postman.com/postman-docs/WS-collections-data-editor-params.png)](https://assets.postman.com/postman-docs/WS-collections-data-editor-params.png)

For Postman users who publish internal or public API documentation, these descriptions display in the [automatically generated documentation](/docs/postman/api-documentation/documenting-your-api) for that collection.

[![parameters in automatically generated docs](https://assets.postman.com/postman-docs/WS-collections-auto-docs.png)](https://assets.postman.com/postman-docs/WS-collections-auto-docs.png)

**Note:** Descriptions for path variables and URL params are currently NOT shown in the documentation.

To hide and show the value and description column in the data editor, click the ellipsis (...) in the top right corner of the editor, and uncheck the columns that you want to hide.

[![uncheck parameters](https://assets.postman.com/postman-docs/WS-collections-uncheck-params.png)](https://assets.postman.com/postman-docs/WS-collections-uncheck-params.png)

**Note:** Descriptions are metadata for a request and are **NOT** sent with your HTTP request. This reminder displays when you mouse over the title of the description column.
