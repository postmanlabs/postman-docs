---
title: "Intro to API documentation"
page_id: "intro_to_api_documentation"
warning: false

---

Postman's API documentation feature lets you share public or private API documentation in a beautifully formated web page. 

Postman generates and hosts browser-based API documentation for your collections automatically in real-time. Each collection has a private and public documentation view that Postman generates from synced data in the servers. 

To [access the private view](/docs/postman/api_documentation/viewing_documentation/) that's available to your team, click "View in web" in the Postman app or in the "Team Library". 

When you [publish your documentation](/docs/postman/api_documentation/publishing_public_docs/), you can use the public link to view the documentation. The public link displays after you publish your documentation. The documentation is also accessible in the "Published" dropdown in the private documentation view.

### Creating a documentation

You can create documentation from the:
* **New** button 
* Launch screen

<br>

#### New button

1. In the header toolbar, click the **New** button.

[![new button](https://assets.postman.com/postman-docs/WS-HeaderToolBar-new+button1.png)](https://assets.postman.com/postman-docs/WS-HeaderToolBar-new+button1.png)

The **Create New** tab appears.
[![create screen](https://assets.postman.com/postman-docs/documentation-createnewTab.png)](https://assets.postman.com/postman-docs/documentation-createnewTab.png)

**Note**: At the bottom, you can select "Show this window at launch" to indicate whether you want the **Create New** tab to display each time you open Postman.

<ol start="2">
  <li>Click "API Documentation".</li>
 <li>Select if you want to create documentation for a new API or an existing or team collection. If you create a new API to document, you must select a request method and enter the request URL, description, and status code. If you use an existing or team collection to document, you must select a collection from a list of existing or team collections.</li>
 </ol>

[![configure docs](https://assets.postman.com/postman-docs/documentation-configure.png)](https://assets.postman.com/postman-docs/documentation-configure.png)

<ol start="4">
  <li>After you select or create the request you want to document, click the <b>Next</b> button.</li>
  <li>In the <b>Configure documentation</b> tab, you must:</li>
 </ol>

* Enter the name of the documentation.
* Add a description of the documentation. You can use markdown to add headings, lists, code snippets, and so on in your description.

[![configureTab docs](https://assets.postman.com/postman-docs/documentation-configureTab.png)](https://assets.postman.com/postman-docs/documentation-configureTab.png)

 <ol start="6">
  <li>Click the <b>Create</b> button.</li>
   </ol>
     
In the **Next steps** tab, see a list of suggested next steps to maximize the effectiveness of your documentation.

[![nextSteps docs](https://assets.postman.com/postman-docs/documentation-nextsteps.png)](https://assets.postman.com/postman-docs/documentation-nextsteps.png)
     
#### Launch screen

The **Create New** tab appears by default when you launch Postman. 

1. Open the Postman app.
2. In the **Create New** tab, click "Documentation".
3. Follow step 3-6 in the previous **New** button section. 
   
**Note**: At the bottom, you can select "Show this window at launch" to indicate whether you want the **Create New** tab to display each time you open Postman.


### What gets automatically generated?

Documentation for your API includes:

   *   Sample requests, headers, and other metadata
   *   Descriptions associated with requests, folders, and collections
   *   Generated code snippets in some of the most popular programming languages

Postman uses ordered requests and folders to organize documentation in sections to reflect the structure of your collection.

You can customize descriptions using [Markdown](/docs/postman/api_documentation/how_to_document_using_markdown/) styling with embedded graphics to complement your documentation. 

We support GitHub flavored markdown so you can include tables. When including block elements, make sure you leave an empty line before and after to avoid any rendering issues.

[![example of published documentation](https://assets.postman.com/postman-docs/59167235.png)](https://assets.postman.com/postman-docs/59167235.png)

### Free documentation views with your Postman account

Your Postman account gives you a limited number of free documentation views per month. You can check your usage limits through the [Postman API](https://docs.api.getpostman.com) or the [account usage page](https://go.pstmn.io/postman-account-limits).
