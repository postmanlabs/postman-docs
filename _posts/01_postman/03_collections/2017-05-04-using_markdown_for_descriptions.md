---
categories:
  - "postman"
  - "collections"
title: "Using Markdown for descriptions"
page_id: "using_markdown_for_descriptions"
warning: false
---

Postman supports [Markdown](/docs/postman/api_documentation/how_to_document_using_markdown) as a way to style text descriptions for requests, [collections](/docs/postman/collections/creating_collections), and [folders](/docs/postman/collections/managing_collections) within collections. You can even embed screenshots and other images for more descriptive flair.

Review [reference for using Markdown](https://documenter.getpostman.com/view/33232/markdown-in-api-documentation/JsGc){:target="_blank"} in API documentation. 

Postman renders this markdown in the following places:

In the request builder, the request description can be styled with markdown.  
[![request description](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/markdown-nasaRequestDescription2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/markdown-nasaRequestDescription2.png)

The collections details view can be styled with markdown in the descriptions for collections and folders.  
[![collection details view](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/markdown-collections.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/markdown-collections.png)

For either public or internal [API documentation](/docs/postman/api_documentation/intro_to_api_documentation), automatically generated API descriptions will be styled beautifully and precisely with markdown.  
[![automatically generated documentation](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/markdown-auto-docs.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/markdown-auto-docs.png)

### Descriptions for request attributes

The description column in the [data editor](/docs/postman/launching_postman/navigating_postman) makes your requests easier to understand. You can add comments and details for each of your query parameters, path variables, headers, and body (form-data and urlencoded) - all from right within the Postman app.

For example, specify if an element is required or optional, indicate the accepted data type, or use alternative terminology to provide additional clarification for developers who are working with your requests.

[![data editor parameters](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/data-editor-params.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/data-editor-params.png)

For Postman users publishing internal or public API documentation, these descriptions are displayed in the [automatically generated documentation](/docs/postman/api_documentation/intro_to_api_documentation) for that collection.

[![parameters in automatically generated docs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auto-generated-docs-params.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auto-generated-docs-params.gif)

*Note: Descriptions for path variables and URL params are currently NOT shown in the documentation.*

You can hide and show the value and description column in the data editor by clicking on the ellipsis (...) in the top right corner of the editor, and unchecking the columns that you want to hide.

[![uncheck parameters](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/uncheck-parameters.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/uncheck-parameters.gif)

*Note: Descriptions are metadata for a request and are **NOT** sent with your HTTP request. This reminder is displayed when you mouse over the title of the description column.*

[![mouseover params](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/mouseover-params.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/mouseover-params.png)
