---
categories:
  - "postman"
  - "api_documentation"
title: "Intro to API documentation"
page_id: "intro_to_api_documentation"
warning: false

---

Postman's API documentation feature allows you to share public or private API documentation, beautifully viewable via a web page. 

Postman generates and hosts browser-based API documentation for your collections automatically in real-time. Each collection has a private and public documentation view, generated in real-time using the data synced to our servers. In order to [access the private view](/docs/postman/api_documentation/viewing_documentation), click "View in web" in the Postman app or in the "Team Library". The public view is accessible via the public link, generated when you [publish your documentation](/docs/postman/api_documentation/publishing_public_docs). This link will be displayed right after your documentation is published, and is also accessible via the "Published" dropdown in the private documentation view.

### Creating a documentation

You can create documentation from the:
* **New** button 
* Launch screen


#### New button

In the header toolbar, click the **New** button.

[![new button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)

The "Create New" screen appears.
[![create screen](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_new_screen.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_new_screen.png)

**Note**: At the bottom of the screen you can select "Show this window at launch" to indicate whether you want the "Create New" screen to display each time you open Postman.

Click "Documentation".

[![create docs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_doc.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_doc.png)


In the "Create API Documentation" screen, you can create documentation for a "New API", "My Collections", and "Team Library". 
   * New API
     
     Select the method, enter a request URL, and click the **Next** button.
     Enter the name and description and click the **Create** button.
     The "Next Steps" screen appears with information about the documentation and provides suggestions about next steps.
   * My Collections
   
     Select a collection.
     Add or edit a description, and click the **Create** button.
     The "Next Step"s screen appears with information about the documentation and provides suggestions about next steps.
   * Team Library
   
     Select a shared collection.
     Add or edit a description, and click the Create button.
     The "Next Steps" screen appears with information about the documentation and provides suggestions about next steps.
     
#### Launch screen

The "Create New" screen appears by default when you launch Postman. At the bottom of the screen you can select ‘Show this window at launch’ to indicate whether you want the 'Create New' screen to display each time you open Postman.

1. Open Postman.
2. In the "Create New" screen, click "Documentation".
3. Follow step 3 in previous **New** button section. 
   

### What gets automatically generated?

Documentation for your API includes the following:

   *   Sample requests, headers, and other metadata
   *   Descriptions associated with requests, folders, and collections
   *   Generated code snippets in some of the most popular programming languages

Documentation is organized into sections that reflect the structure of your collection, by ordered requests and folders. Descriptions can be customized using [Markdown](/docs/postman/api_documentation/how_to_document_using_markdown) styling with embedded graphics to complement your documentation. GitHub flavored markdown is also supported, so you can even include tables. When including block elements, ensure that you leave an empty line before and after to avoid any rendering issues.

[![example of published documentation](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59167235.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59167235.png)

### Free documentation views with your Postman account

Your Postman account gives you a limited number of free documentation views per month. You can check your usage limits through the [Postman Pro API](https://docs.api.getpostman.com) or the [account usage page](https://go.pstmn.io/postman-account-limits).
