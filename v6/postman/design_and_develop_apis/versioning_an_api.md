---
title: 'Versioning APIs'
page_id: 'versioning_an_api'
warning: false
---

Postman allows you to manage multiple versions of your APIs. You can link your collections to specific versions of your API by adding version tags to them. This enables you to maintain versioning of your collection revisions with a corresponding version of your API. 

Though Postman allows you to tag versions to your collections, it however, does not allow you to manipulate collection version tags. Postman allows explicit versioning only to APIs. You will also be able to create separate monitors, mocks, public documentation and add on all tagged versions of your collections. 

To manage your collection revisions with specific API versions, you must adhere to the following three steps:

1. Link your collection to an API
2. Add version tags to your collection
3. Update version tags with API version changes 

 This section describes the following topics:

* [Creating API versions](#creating-api-versions)
* [Renaming API version tags](#renaming-api-version-tags)
* [Deleting an API version](#deleting-an-api-version)
* [Linking collection to an API](#linking-collection-to-an-api)
* [Adding version tag to a collection](#adding-version-tag-to-a-collection)
* [Updating version tags with API version changes](#updating-version-tags-with-api-version-changes)
* [Using version tags to map changes in your API ](#using-version-tags-to-map-changes-in-your-API )
* [Adding mocks, monitors, and documentation to tagged collections](#adding-mocks,-monitors,-and-documentation-to-tagged-collections)

### Creating API versions

Postman, by default, creates a *Draft* version the moment you create an API. You can then create new versions of your API based on an existing version or a completely new one from scratch. To create a new version of an API, click **Show All Versions**, as illustrated in the following screen:

[![api all versions](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Create1-Showallversions1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Create1-Showallversions1.png)

The following screen appears:

[![api create new version](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Create1-NewVersion1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Create1-NewVersion1.png)

Click **Create another version** to go to the following screen:

[![api create new version2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Create1-NewVersion2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Create1-NewVersion2.png)

Specify a name for the new version of your API. In the **Carry over elements from a previous version** list, select a version if you want to carry over the elements. If you do not want to carry over any API elements, select **Don't carry over any elements** to create a new API version from scratch. 

If you choose to **Carry over elements from a previous version**, then select the elements you'd like to carry over. Click **Create Version**. Postman creates a new version of your API and takes you to the [API workflow](/docs/v6/postman/design_and_develop_apis/the_api_workflow) screen where you can _define, develop, test, and observe_ your new API version.

### Renaming API version tags

A default *Draft* version tag is associated with your API when you first create it in Postman. Postman allows you to rename the version tag based on your preference. To rename the API version tag, click **Show All Versions**. The following screen opens:

[![api version rename](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Version-Rename1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Version-Rename1.png)

In the above screen, click the ellipsis (...) and select **Rename** to specify a new version tag. 

### Deleting an API version

You can also delete a specific version of your API. To delete a specific version of the API, click the ellipsis (...), as illustrated in the following screen and select **Delete**. 

[![api delete](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Delete-Version1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Delete-Version1.png)

**Note:** When you delete an existing API version, the corresponding version tag associated with the API version also gets deleted. 

### Linking collection to an API

You can link collections or your collection revisions to an API or specific version of an API using version tagging. To link a collection to an API, add either documentation or a test suite to an API. When you add these elements, you are linking your collection to an API. This example illustrates adding documentation to link the corresponding collection to the *Moonwalk API*. The following screen illustrates this:

[![api link collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Link-Collections4.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Link-Collections4.gif)

**Note:** Whenever you add a mock or a monitor to an API, the underlying collection also gets linked to the API even though you are explicitly selecting only a mock or a monitor from the list.  

### Adding version tag to a collection

To link a collection to an API version, navigate to the **Collections** tab in the sidebar, expand the arrow (&#9656;) to show the details view for the collection, go to the **Changelog** tab, select a collection that you want to tag and click **Add Version Tag**. From the list, select a corresponding API version. The following screen illustrates adding a version tag to an API:

[![api link collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Link-Collections-vTag.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Link-Collections1.gif)

You will also be able to add version tags to your collections from the Postman web dashboard. The following screen illustrates this:

[![api link collections2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Add-Version-to-Collection2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Link-Collections2.png)


### Updating version tags with API version changes

Postman automatically updates the version tags of your collections whenever an API version is renamed or updated. The example below illustrates this procedure. In this example, the API's *Draft* version is tagged to a collection first (you can see how *current* version of the collection changes to *draft* version of API). The API version is then renamed to 1.0. The example illustrates how Postman automatically updates the collection version tag to the 1.0 label.

[![api link collection to API ver](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Updating-Ver-Tags1.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Updating-Ver-Tags1.gif)


### Using version tags to map changes in your API 

You can tag your collection revisions to map changes in your API. Let's understand how to accomplish this with an example that illustrates the *PetStore* collection. The collection is first tagged to *PetStore API* version 1.0. Later, the schema is updated with a small change resulting in a revision of the collection. Because the schema and the collection both changed, you can now tag the collection to a new API version labeled, 2.0. You can also see the behavior of the version tag associated with documentation. 

[![api link collection revisions](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-versiontags-map-api-changes1.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-versiontags-map-api-changes1.gif)

If you have collections with specific version tags, Postman will associate them with the appropriate API versions in the tab interface by default. Due to this automatic behavior, Postman does not allow you to manipulate the version tags of a collection linked with an API manually. 

Let's consider another example where an API version is incremented to 3.0 from 2.0 and the user chooses to *Carry over elements from a previous version*. In this case, the collection is not tagged to API version 3.0 yet. A warning will appear in Postman. Since the API version is bumped up to 3.0, Postman is unable to find an equivalent version tag on the collection corresponding to the API version 3.0. The following screen illustrates this:

[![api link collection revisions](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Version-Mismatch2.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Version-Mismatch2.gif)

In such instances, you should add a corresponding version tag (in this case 3.0) to the collection and Postman then automatically resolves the issue.

Whenever you bump an API version up and choose to carry over elements from a previous version, Postman provides you a list of things that you need to update in order to match the new API version. What this essentially means is that the API tab in Postman is now your central dashboard to manage changes across all of your API elements - it could be anything -  your mocks, monitors, collections, and anything that needs to be versioned. 

### Adding mocks, monitors, and documentation to tagged collections

Postman enables you to perform many actions on the tagged revisions of your collections. You can create and run mocks and monitors on tagged revisions of your collections. You can also create and publish documentation from the tagged revisions of your collections. 

This section describes the following topics:

* [How mocks and monitors work with version tags](#how-mocks-and-monitors-work-with-version-tags)
* [Publishing version-specific documentation](#publishing-version-specific-documentation)

### How mocks and monitors work with version tags

Monitors, mocks, and documentation are always associated with specific versions of a collection. The version tags of the monitors and mocks associated with tagged collections are never updated automatically. However, this behavior is an exception in the case of documentation. The behavior of documentation version tags is in sync with the automatic behavior of collections.

Let's consider an example - you added a monitor (M1) to a collection (C1) which is tagged to an API (A1) versioned 1.0. When the API version is updated to 2.0 (API A2) and collection (C1A) is tagged to API A2, your monitor (M1) is still running on collection (C1). This is because the monitor version tag does not update automatically. You must create a separate monitor (M2) and then associate it with the new version (2.0) of your API (A2). You can then delete your old monitor (M1) if you want to. 

### Publishing version-specific documentation

You can publish your documentation for the tagged versions of your collections. 
For more information on this, refer to [Publishing version-specific documentaion](/docs/v6/postman/api_documentation/publishing_public_docs)

For more information on APIs, see:

- [Sharing an API](/docs/v6/postman/design_and_develop_apis/sharing_apis)
- [Managing API workflow](/docs/v6/postman/design_and_develop_apis/the_api_workflow)
- [Managing APIs](/docs/v6/postman/design_and_develop_apis/managing_apis)
- [Introduction to APIs](/docs/v6/postman/design_and_develop_apis/introduction_to_apis)
