---
title: "Intro to API documentation"
page_id: "intro_to_api_documentation"
warning: false

---

Postman's API Documentation feature lets you view private API documentation or share public API documentation in a beautifully formatted web page.

Postman generates and hosts browser-based API documentation for your collections automatically in real-time. Each collection has a private and public documentation view that Postman generates from synced data in the servers.

## Private documentation view

### Postman app

To [access the private view](/docs/postman/api_documentation/viewing_documentation/) of your team documentation, go to the sidebar in the Postman app and click the **>** icon in the collection you want to view. Then click "View in web" to view the documentation for the collection.

[![view doc sidebar](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/view-web-documentation.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/view-web-documentation.png)

### Postman web

To access the private view of your team documentation, go to your [workspaces dashboard](https://app.getpostman.com/dashboard).

Click the "View all collections" link.

[![view all collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/view-all-collections.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/view-all-collections.png)

Click a collection name to view the documentation.

[![click the collection](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/click-collection-private-view.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/click-collection-private-view.png)

## Public documentation view

After you [publish your documentation](/docs/postman/api_documentation/publishing_public_docs/), you can use the public link to view the documentation.

The public link displays after you publish your documentation. A link to this published documentation is also accessible in the "Published" dropdown from the private documentation view.

## Creating documentation

You can create documentation in a few different ways:

* Using the [**New** button](/docs/postman/launching_postman/newbutton/)

* Using the Postman app launch screen following similar steps as the **New** button
* From an existing collection by [viewing the private version of the docs](/docs/postman/api_documentation/viewing_documentation/) or [publishing public docs](/docs/postman/api_documentation/publishing_public_docs/)

## What gets automatically generated?

Documentation for your API includes:

* Sample requests, headers, and other metadata
* Descriptions associated with requests, folders, and collections
* Generated code snippets in some of the most popular programming languages

Postman uses ordered requests and folders to organize documentation in sections to reflect the structure of your collection.

You can customize descriptions using [Markdown](/docs/postman/api_documentation/how_to_document_using_markdown/) styling with embedded graphics to complement your documentation.

Postman supports GitHub-flavored Markdown so you can include tables. When including block elements, make sure you leave an empty line before and after to avoid any rendering issues.

[![example of published documentation](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-doc-markdown.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-doc-markdown.png)

## Link to sections within documentation

To include helpful cross-references for your readers, you can hyperlink to these parts within the generated documentation:

* Introduction headers
* Requests
* Folders
* Responses

The links are generated using IDs for the requests, folders and responses. If you click on any of these, the URL in your browser should update to a link which points to this specific part of the documentation. You can hyperlink to these parts using this link.

[![anchor tag id](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/anchor-id.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/anchor-id.png)

**Note:** You cannot link to arbitrary parts of the documentation by manually creating an ID.

## Commenting on Private Documentation

You can post comments on your API documentation to share information with your colleagues. You can save interactions with your teammates, add information that does not fit anywhere else, and can have discussions and more.

You can post comments on your documentation by navigating to the documentation section from the Postman App. To learn more about accessing the documentation section, see [viewing documentation](/docs/postman/api_documentation/viewing_documentation/).

Once you access the documentation section, the comments section appears, as shown below:

[![Comments New](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Comments_New1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Comments_New1.png)

Click Comments to bring up the 'Add comment' dialog, as illustrated above. Write your comment and click 'Add comment'. Your comment is now posted.

**Note:** You can post comments only on Private Documentation.

## Free documentation views with your Postman account

Public and private documentation each receive 1000 free views per month. You can check your usage limits through the [Postman API](https://docs.api.getpostman.com) or the [account usage page](https://go.pstmn.io/postman-account-limits).
