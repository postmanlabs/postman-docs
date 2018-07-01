---

title: "Getting started with Collections"
page_id: "collections"
tags: 
  - "app"
warning: false
---

Collections will take your productivity to the next level.

A collection lets you group individual requests together. These requests can be further organized into folders to accurately mirror your API.
Requests can also store sample responses when saved in a collection.
You can add metadata like name and description too so that all the information that a developer needs to use your API is available easily.
Collections are listed in the sidebar alphabetically. You can search through collection requests using the search form for quick access.

[![](https://www.getpostman.com/img/v1/docs/thumbs/20.png)
][0]

You can also reorder requests inside a collection by dragging and reordering through the sidebar itself. The request order is also preserved for requests that are in folders.
The order of folders inside a collection, however, is alphabetical and cannot be changed (at least for now).

### Creating a collection

To create a collection, click on "new collection" button under the collections side bar tab. 

[![](https://www.getpostman.com/img/v1/docs/thumbs/34.png)
][1]
In the modal that comes up, enter the collection name and description and press create. 

[![](https://www.getpostman.com/img/v1/docs/thumbs/35.png)
][2]

Collections are also created - 

* If you have a request loaded in the request editor already, click "Add to collection". Enter a new collection name instead of selecting an existing collection. The collection will be created and the request will be added to the collection.
* You can import a collection file. Click on the 'Import' button on the top bar, and paste a URL to the collection, or the collection JSON itself, and click 'Import'.

### Operations on a collection

#### Editing

[![](https://www.getpostman.com/img/v1/docs/thumbs/22.png)
][3]

Editing a collection is quite simple. Hover over the collection name and click on the edit icon to change the collection name and description.

#### Sharing a collection

[![](https://www.getpostman.com/img/v1/docs/thumbs/23.png)
][4]

Collections can be downloaded as a JSON file which you can share with others or shared through your Postman account. You can also share collections anonymously but it is strongly recommended to create a Postman account when uploading collections. This will let you update your existing collection, make it public or delete it later.

If you are a member of a team using Postman Pro or Enterprise, you can share a collection with your whole team or a sub section of it in this modal. You can also make it view-only versus editable.

#### Deleting a collection

Deleting a collection from the sidebar deletes the local copy of the collection. Please note that it does not remove the collections you have shared through getpostman.com

#### Adding a folder

[![](https://www.getpostman.com/img/v1/docs/thumbs/24.png)
][5]

Folders are basically sub-collections. You can have as many folders as you want in a collection.
You can add requests directly to a folder through the "Add collection" modal or drag and drop requests into a folder. Folders support Markdown-based descriptions as well.

Right now you can have only one level of folders inside a collection.

#### Saving requests inside a collection

[![](https://www.getpostman.com/img/v1/docs/thumbs/25.png)
][6]

To save a request inside a collection click the "Add to collection" button and select the target collection. You can add a request name and description to help your collection users get more information about the request right inside Postman.

You can also duplicate an existing request using the same flow. You can edit a request any time and hit save to update it inside the collection.

Please note that form-data requests and binary requests which contain files will not be saved along with the collection. This limitation is due to the restrictions with the HTML5 spec.

#### Saving responses in a request

With v0.9.x you can save entire API responses as part of the collection request. API endpoints have different responses depending on the data sent to them and you can capture all of that by pressing the "save response" icon in the response viewer.

Postman saves the response as well as the request which was used to generate the response. This means that you can have many variations of the original request saved as sample responses.

#### Moving requests around

You can transfer requests to any other folder or collection in the sidebar. Just drag-and-drop the request to a collection, or any of its child folders.

#### Searching

You can use the search box in the sidebar to search for collections, folders, and requests.

### Operations on folders/requests

#### Editing

Hover over the folder/request name in the sidebar, and click the edit (pencil) icon. This will allow you to change the name and description. Note that the description supports Markdown.

#### Duplicating

Duplicating will create a copy of the folder/request. The new folder/request will be created as a sibling of the original.

#### Deleting

Note: Deleting a folder will delete its constituent requests, and deleting a request will delete any responses saved with the request.


[0]: https://www.getpostman.com/img/v1/docs/source/20.png
[1]: https://www.getpostman.com/img/v1/docs/source/34.png
[2]: https://www.getpostman.com/img/v1/docs/source/35.png
[3]: https://www.getpostman.com/img/v1/docs/source/22.png
[4]: https://www.getpostman.com/img/v1/docs/source/23.png
[5]: https://www.getpostman.com/img/v1/docs/source/24.png
[6]: https://www.getpostman.com/img/v1/docs/source/25.png
