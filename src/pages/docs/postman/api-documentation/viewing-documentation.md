---
title: "Viewing documentation"
order: 66
page_id: "viewing_documentation"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Cisco DevNet"
    url: "https://www.getpostman.com/case-studies/CiscoDevNet.pdf?_ga=2.200107496.754547870.1571851340-1454169035.1570491567"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API documentation with Postman"
    url: "https://www.youtube.com/watch?v=Ayo_KdLLcTA"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Simplifying API documentation for a great first user experience"
    url: "https://blog.getpostman.com/2016/04/25/simplifying-api-documentation-for-a-great-first-user-experience/?_ga=2.202532055.754547870.1571851340-1454169035.1570491567"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Publishing public docs"
    url: "/docs/postman/api-documentation/publishing-public-docs/"

warning: false

---
You can use two different web views while authoring documentation for your Postman Collections: private and public.

All collections are initialized with the private view. However, you must explicitly opt to publish your documentation for it to be available publicly.

Private, unpublished collections are only available to the author, while collections shared in a workspace can be accessed by the entire team. Anyone with the URL can view a published collection.

## Viewing Private Documentation

Only the author can view private documentation unless the collection is shared within a [team workspace](/docs/postman/workspaces/intro-to-workspaces/).

You must be logged in to your Postman account to view private documentation. Postman Pro and Enterprise teammates with view permissions can oversee progress, while teammates with edit permissions can collaborate in writing, revising, and updating documentation.

In the Postman app, hover your cursor over your collection on the left-hand side, click the arrow (&#9656;), then click the **View in web** button.

[![collection details view](https://assets.postman.com/postman-docs/API_Docs_ViewinWeb.png)](https://assets.postman.com/postman-docs/API_Docs_ViewinWeb.png)

In this private web view, you’ll be able to see each request in the collection, their descriptions, and code snippets generated from the environment and the language you’ve selected. You will also be able to post comments.

[![view documentation](https://assets.postman.com/postman-docs/WS-docs-viewing.png)](https://assets.postman.com/postman-docs/WS-docs-viewing.png)

**Note:** This private URL is only accessible to Postman users logged in with appropriate permissions — anyone without access to the collection itself receives an error message upon attempting to view it. To make this documentation available to others, you will need to publish it.

You can also access the documentation section from the Browse View. In the Browse view, point your cursor to the collection name and click any collection name to go to the documentation section:

[![Comments BrowseView](https://assets.postman.com/postman-docs/Comments-Browse-View.png)](https://assets.postman.com/postman-docs/Comments-Browse-View.png)

Alternatively, you can also point your cursor to any collection in your dashboard view and click it to go to the documentation section. A point to remember is clicking any collection from anywhere in Postman Dashboard will land you in the documentation section.

## Viewing Public Documentation

Public documentation is accessible through a URL that Postman generates at the time of publication. This link displays immediately, and can be found in your [Postman Dashboard](https://go.postman.co/). If you’ve opted to use a custom domain, you’ll find your published documentation link in the Postman Dashboard.

[![public documentation link](https://assets.postman.com/postman-docs/WS-docs-public-view.png)](https://assets.postman.com/postman-docs/WS-docs-public-view.png)
