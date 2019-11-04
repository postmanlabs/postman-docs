---
title: "Creating collections"
order: 31
page_id: "creating_collections"
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
    name: "Raygun"
    url: "https://www.getpostman.com/case-studies/raygun.pdf?_ga=2.170542182.754547870.1571851340-1454169035.1570491567"
  - type: link
    name: "BetterCloud"
    url: "https://www.getpostman.com/case-studies/BetterCloud.pdf?_ga=2.194292587.754547870.1571851340-1454169035.1570491567"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman & Postman Collections"
    url: "https://www.youtube.com/watch?v=ptvV_Fc3hd8"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Keep track of GitHub issues using a Postman collection"
    url: "https://blog.getpostman.com/2017/08/15/keep-track-of-github-issues-using-a-postman-collection/?_ga=2.164833401.754547870.1571851340-1454169035.1570491567"
  - type: link
    name: "Multi-level folders and folder reordering"
    url: "https://blog.getpostman.com/2017/05/19/multi-level-folders-and-folder-reordering/?_ga=2.133907912.754547870.1571851340-1454169035.1570491567"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to collection runs"
    url: "/docs/postman/collection-runs/intro-to-collection-runs/"

warning: false

---

Postman Collections are a group of saved requests you can organize into folders.

This topic covers:

* [How to create collections](#how-to-create-collections)
* [Saving a request to a collection](#saving-a-request-to-a-collection)
* [Saving to a collection from history](#saving-to-a-collection-from-history)
* [Duplicating an existing collection](#duplicating-an-existing-collection)

## How to create collections

You can create a new collection from the:

* Sidebar
* **New** button
* Launch screen

### Sidebar

In the sidebar, select "Collections" and click the "Collections" icon.

  [![new collection](https://assets.postman.com/postman-docs/collections_icon1.png)](https://assets.postman.com/postman-docs/collections_icon1.png)

In the **CREATE A NEW COLLECTION** modal:

* Enter a name and optional description.
* Select an authorization type.
* Enter a pre-request script to execute before the collection runs.
* Add a test to execute after the collection runs.
* Add variables to the collection and its requests.
  
Click the **Create** button.

### New button

In the header toolbar, click the **New** button.

 [![new button](https://assets.postman.com/postman-docs/WS-headerToolbar-blk.png)](https://assets.postman.com/postman-docs/WS-headerToolbar-blk.png)

The Create New tab appears.

 [![create screen](https://assets.postman.com/postman-docs/WS-collection-create-new-screenXX-p2+copy.png)](https://assets.postman.com/postman-docs/WS-collection-create-new-screenXX-p2+copy.png)

In the Create New tab, click "Collection".

 In the **CREATE A NEW COLLECTION** modal:
  
* Enter a name and optional description.
* Select an authorization type.
* Enter a pre-request script to execute before the collection runs.
* Add a test to execute after the collection runs.
* Add variables to the collection and its requests.
  
Click the **Create** button.

After creating the collection, you can save requests to the collection and add folders for better organization.

**Note:** At the bottom, you can select "Show this window at launch" to indicate whether you want the **Create New** tab to display each time you open Postman.

### Launch screen

The Create New tab appears by default when you launch Postman.

Open Postman.

In the Create New tab, click "Collection".

In the **CREATE A NEW COLLECTION** modal:

* Enter a name and optional description.
* Select an authorization type.
* Enter a pre-request script to execute before the collection runs.
* Add a test to execute after the collection runs.
* Add variables to the collection and its requests.

Click the **Create** button.

After you save the request, you can add the URL, method, headers, and body to the request in the builder.

**Note:** At the bottom, you can select "Show this window at launch" to indicate whether you want the **Create New** tab to display each time you open Postman.

### Saving a request to a collection

You can save a request to a collection from the:

* Request builder
* **New** button
* Launch screen

### Build view

In the Workspaces build view, enter a new request in the builder.

Click the **Save** button.

In the **SAVE REQUEST** modal, enter a request name and select a collection or folder to save the request.

Click the **Save** button.

### New button

In the header toolbar, click the **New** button.

Click "Request".

In the **SAVE REQUEST** modal, enter a request name and select a collection or folder to save the request.

Click the **Save** button.

After you save the request, you can add the URL, method, headers, and body to the request in the builder.

**Note:** At the bottom, you can select "Show this window at launch" to indicate whether you want the Create New tab to display each time you open Postman.

### Launch screen

The  **Create New** tab appears by default when you launch Postman.

Open Postman.

In the  **Create New** tab, click "Request".

In the **SAVE REQUEST** modal, enter a title and description.

Select a collection and save the request in an existing collection or create a new collection.

Click the **Save** button.

**Note**: At the bottom, you can select "Show this window at launch" to indicate whether you want the **Create New** tab to display each time you open Postman.

## Saving to a collection from history

### Single request

To save a single request to a collection, hover over a request under the **History** tab and click the plus (**+**) icon.

In the **SAVE REQUEST** modal, enter a title and description, select a collection, and save the request in an existing collection or create a new collection.

Click the **Save** button.

[![save collection](https://assets.postman.com/postman-docs/history_icon2.png)](https://assets.postman.com/postman-docs/history_icon2.png)

### Multiple requests

To save multiple requests, click the plus (**+**) icon  that displays at the top of the sidebar.

In the **SAVE MULTIPLE REQUESTS** modal, select a collection or folders to save the requests.

Click the **Save** button.

## Duplicating an existing collection

In the sidebar, select "Collections".

Click the ellipsis (...) to expand the control dropdown.

[![collection ellipsis](https://assets.postman.com/postman-docs/duplicate_collection1.png)](https://assets.postman.com/postman-docs/duplicate_collection1.png)

Select "Duplicate" from the menu.

Learn how to [share collections](/docs/postman/collections/sharing-collections/), [import and export collections](/docs/postman/collections/data-formats/), and [use other collection features](/docs/postman/collections/managing-collections/).  

---
For more information on collections, see:

* [Intro to collections](/docs/postman/collections/intro-to-collections/)
* [Sharing collections](/docs/postman/collections/sharing-collections/)
* [Managing collections](/docs/postman/collections/managing-collections/)
