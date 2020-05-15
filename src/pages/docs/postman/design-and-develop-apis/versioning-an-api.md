---
title: 'Versioning APIs'
order: 205
page_id: 'versioning_an_api'
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
  - type: link
    name: "Validating elements against schema"
    url: "/docs/postman/design-and-develop-apis/validating-elements-against-schema/"
---

You can manage multiple versions of any APIs you create in Postman. You can link collections, mocks, monitors, and documentation to specific versions of APIs using version tagging.

To use versioning with your APIs, you need to carry out the following steps:

* Link your API to a collection
* Add version tags to your collection
* Update version tags on API changes

You can access versions in the API Builder, by opening __APIs__ and selecting the API you want to work with.

![API Versions](https://assets.postman.com/postman-docs/api-version-button.jpg)

* [Creating API versions](#creating-api-versions)
* [Updating versions](#updating-versions)
* [Connecting linked elements to versions](#connecting-linked-elements-to-versions)

## Creating API versions

When you create a new API in Postman, it will initially have `Draft` version.

![API Draft Version](https://assets.postman.com/postman-docs/api-draft-version.jpg)

You can create new versions from scratch or from an existing version. Click __Show All Versions__.

<img alt="API Version List" src="https://assets.postman.com/postman-docs/api-version-list.jpg" width="400px"/>

From here you can rename and delete versions—_deleting a version will also delete its version tag_.

To create a new version, click __Create another version__.

<img alt="API Version List" src="https://assets.postman.com/postman-docs/add-new-api-version.jpg" width="400px"/>

Enter a version name. If you want want to base this version on an existing version select it from the dropdown list, otherwise choose __Don't carry over any elements__. If you are basing your new version on an existing version, check any elements you want to connect to the new version. Click __Create Version__.

Your new version will open in the API Builder.

## Updating versions

Postman automatically updates the version tags for linked collections whenever you update the API version. If you add a new version to the API, Postman will also add that version tag to the collection.

[![api link collection to API ver](https://assets.postman.com/postman-docs/API-Updating-Ver-Tags1.gif)](https://assets.postman.com/postman-docs/API-Updating-Ver-Tags1.gif)

You can tag your collection revisions to match changes in your API. For example, if you update the API, which results in a revision of the collection, you can then link the updated collection (or documentation) to the new version of the API.

[![api link collection revisions](https://assets.postman.com/postman-docs/API-versiontags-map-api-changes1.gif)](https://assets.postman.com/postman-docs/API-versiontags-map-api-changes1.gif)

> If you have collections with specific version tags, Postman will associate them with the appropriate API versions by default. Due to this automatic behavior, Postman does not allow you to manipulate the version tags of a collection linked with an API manually.

If an API version is incremented, for example from 2.0 to 3.0, and you choose to *Carry over elements from a previous version*, but the collection is not tagged to API version 3.0 yet, Postman will display a warning, since there is no equivalent version tag on the collection corresponding to API version 3.0.

[![api link collection revisions](https://assets.postman.com/postman-docs/API-Version-Mismatch2.gif)](https://assets.postman.com/postman-docs/API-Version-Mismatch2.gif)

To resolve this, add a corresponding version tag to the collection.

When you update an API version number and choose to carry over elements from a previous version, Postman provides you a list of elements that you need to update in order to match the new API version. This makes the API Builder your central dashboard to manage changes across all of your API elements.

## Connecting linked elements to versions

You can link elements such as collections to a version of an API, [by adding either documentation or a test suite](/docs/postman/design-and-develop-apis/the-api-workflow/#developing-an-api) in the API Builder.

[![api link collections](https://assets.postman.com/postman-docs/API-Link-Collections4.gif)](https://assets.postman.com/postman-docs/API-Link-Collections4.gif)

> When you add a mock or a monitor to an API, the underlying collection also gets linked to the API.

To link a collection to an API version, navigate to the **Collections** tab in the sidebar, expand the arrow (&#9656;) to show the details view for the collection, open the **Changelog**, and click **Add Version Tag**.

<img alt="Collection Version" src="https://assets.postman.com/postman-docs/collection-api-version.jpg" width="600px"/>

Choose the version of the API you want to connect to and how you want the collection to be linked.

<img alt="Collection Version" src="https://assets.postman.com/postman-docs/add-version-tag-collection.jpg" width="300px"/>

> You can also add version tags to your collections from the Postman web dashboard.

You can create and run mocks and monitors on tagged revisions of your collections. You can also create and publish documentation from the tagged revisions of collections.

Monitors, mocks, and documentation are always associated with specific versions of a collection.

* The version tags of monitors and mocks linked to versioned collections do not update automatically. If you update the version of an API you're monitoring, you need to create a new monitor linked to the new version as your original linked monitor will run on the original collection.
* Documentation version tags automatically update along with your API.

You can [publish specific versions of collection documentation](/docs/postman/api-documentation/documenting-your-api/#versioning-your-docs).

## Next steps

For more on working with the API Builder, check out the following topics:

* [Validating elements against schema](/docs/postman/design-and-develop-apis/validating-elements-against-schema/)
* [Viewing and analyzing APIs](/docs/postman/design-and-develop-apis/view-and-analyze-api-reports/)
