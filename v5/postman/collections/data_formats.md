---
title: "Data formats"
page_id: "data_formats"
warning: false

---

Postman can export and import collections, environments, globals and header presets as files and links.

### Exporting and Importing Postman data

Postman can export and import the following formats as a file or generated URL. When you export a collection from the Postman app, the exported file is a JSON file. The file contains all data (and metadata) that is required by Postman to recreate the collection when imported back into Postman, or that is utilized by Newman to run the collection from the command line interface (CLI).

##### **Collections**

[![export collection](https://assets.postman.com/postman-docs/WS-collections-view.png)](https://assets.postman.com/postman-docs/WS-collections-view.png)

Postman can export collections in two formats - v1 and v2\. Both Collection v1 and v2 download as JSON files; v2 is more versatile and the most-used choice. Learn more about the [v1 and v2 formats](http://blog.getpostman.com/2015/06/05/travelogue-of-postman-collection-format-v2/). 

[![select v1 or v2 format](https://assets.postman.com/postman-docs/59163839.png)](https://assets.postman.com/postman-docs/59163839.png)

##### **Environments**

Environments can be exported from the **MANAGE ENVIRONMENTS** modal, and imported here as well.

[![export environments](https://assets.postman.com/postman-docs/59163851.png)](https://assets.postman.com/postman-docs/59163851.png)

##### **Data dumps**

[![export all Postman data](https://assets.postman.com/postman-docs/59163867.png)](https://assets.postman.com/postman-docs/59163867.png)

From the **Data** tab of the **SETTINGS** modal, Postman allows you to export all collections, environments, globals and header presets into one JSON file. Postman does not export your history. You can import this data back into Postman.

##### **Importing Postman data**

Postman data can be imported from the **Data** tab of the **SETTINGS** modal, or using the **Import** button in the header toolbar. Import a collection, environment, data dump, curl command, or a RAML / WADL / Swagger (v1/v2) / Runscope file using the **IMPORT** modal.

[![import data](https://assets.postman.com/postman-docs/59163883.png)](https://assets.postman.com/postman-docs/59163883.png)

### Importing cURL

Most valid cURL (HTTP-only) commands can be imported into Postman. Postman's importer supports the following cURL options:

| **Option**    | **Description**  |
| -A, --user-agent <string> | An optional user-agent string |
| -d, --data <string>   | Sends the specified data to the server with type application/x-www-form-urlencoded |
| --data-ascii <string>   | Sends the specified data to the server with type application/x-www-form-urlencoded |
| --data-urlencode <string>   | Sends the specified data to the server with type application/x-www-form-urlencoded |
| --data-binary <string>   | Data sent as-is |
| -F, --form <name=content>   | A single form-data field (can be used multiple times) |
| -G, --get   | Forces the request to be sent as GET, with the --data parameters appended to the query string |
| -H, --header <string>  | Add a header (can be used multiple times) |
| -X, --request <string>  | Specify a custom request method to be used |
| --url <string>  | An alternate way to specify the URL |

A few commands which can be imported include:

| **cURL**     | **Effect**  |
| curl http://postman-echo.com/get | Creates a GET request in Postman with the URL prefilled |
| curl --request POST --url http://postman-echo.com/post --form color=red --form color=green | Creates a POST request with a multivalue form data row |
| curl -X PUT --data-binary hello http://postman-echo.com/put | Creates a POST request with raw data |
| curl -X PUT --data-ascii 'a=b&c=d' http://postman-echo.com/put -H 'AccessToken:1234' | Creates a PUT request with urlencoded form data, and a custom header |

### Importing RAML

##### **Saving a RAML folder as a collection**

   1.  Clone the repository containing the RAML definition to your local machine, or save it locally as a folder.
   2.  Click on the Import button, and choose the Import Folder tab. 
      [![import button](https://assets.postman.com/postman-docs/WS-collections-view-raml-1a.png)](https://assets.postman.com/postman-docs/WS-collections-view-raml-1a.png)
   3.  Click on **Choose Folders** and upload the RAML folder.
      [![import folder modal](https://www.getpostman.com/img/v1/docs/importing_folders/importing_folders_2.png)](https://www.getpostman.com/img/v1/docs/importing_folders/importing_folders_2.png)
    
   You’re done! Postman will detect all the RAML definitions and convert them internally to Postman and then show you an import success message.
    
 [![confirmation message](https://assets.postman.com/postman-docs/WS-data-format-raml-2a.png)](https://assets.postman.com/postman-docs/WS-data-format-raml-2a.png)

##### **Examples**

Download an example RAML file: [github-api-v3.raml](https://assets.postman.com/postman-docs/github-api-v3.raml)

### Importing Swagger

A Swagger API definition usually lives as a single file, so we only support imports of single swagger files. If you have a lot of unrelated Swagger files in a folder, you can import those through the folder importer.

##### **Saving a Swagger file as a collection**

   1.  Clone the repository containing the Swagger definition to your local machine. If you have it saved locally as file already, that’s fine of course.  

   2.  Click on the Import button, and choose the Import File tab. If you have a lot of unrelated Swagger files in a folder, you can import those through the folder importer. 

 [![import button](https://assets.postman.com/postman-docs/WS-collections-view-raml-1a.png)](https://assets.postman.com/postman-docs/WS-collections-view-raml-1a.png)

   3.  Click on file and upload the Swagger file.

  You’re done! Postman will detect all the Swagger definitions and convert them internally to Postman and then show you an import success message.

[![confirmation message](https://assets.postman.com/postman-docs/WS-data-format-raml-2a.png)](https://assets.postman.com/postman-docs/WS-data-format-raml-2a.png)

##### **Examples**

  Swagger 2.0: [https://github.com/OAI/OpenAPI-Specification/tree/master/examples/v2.0](https://github.com/OAI/OpenAPI-Specification/tree/master/examples/v2.0)

  Swagger 1.2: [https://github.com/OAI/OpenAPI-Specification/wiki/Hello-World-Sample](https://github.com/OAI/OpenAPI-Specification/wiki/Hello-World-Sample)

### Importing WADL

Postman lets you import WADL specs too. While all aspects are not supported yet, you can expect the various parameters that Postman uses (collections, folder, requests, headers, request payloads) to be correctly generated. We're currently working on extending this feature.

##### **Example WADL file**

```
<application xmlns="http://wadl.dev.java.net/2009/02">
  <resources base="http://example.com/api">
    <resource path="books">
      <method name="GET"/>
      <resource path="{bookId}">
        <param required="true" style="template" name="bookId"/>
        <method name="GET"/>
        <method name="DELETE"/>
        <resource path="reviews">
          <method name="GET">
            <request>
              <param name="page" required="false" default="1" style="query"/>
              <param name="size" required="false" default="20" style="query"/>
            </request>
          </method>
        </resource>
      </resource>
    </resource>
    <resource path="readers">
      <method name="GET"/>
    </resource>
  </resources>
</application>
```

Taken from [http://www.nurkiewicz.com/2012/01/gentle-introduction-to-wadl-in-java.html](http://www.nurkiewicz.com/2012/01/gentle-introduction-to-wadl-in-java.html)

### Validating Collection JSON files

To validate if a JSON file is in the correct collections format, you can use our [schema files for collections](http://schema.getpostman.com/).

* The schema file is located at [http://schema.getpostman.com/json/collection/v1.0.0/collection.json](http://schema.getpostman.com/json/collection/v1.0.0/collection.json).
* The associated documentation can be found at [http://schema.getpostman.com/json/collection/v1.0.0/docs/index.html](http://schema.getpostman.com/json/collection/v1.0.0/docs/index.html).
* Everything is neatly stored on GitHub [https://github.com/postmanlabs/schemas](https://github.com/postmanlabs/schemas).
* To see an example of data validation using our schema and [is-my-json-valid](https://github.com/mafintosh/is-my-json-valid) (a validator), check out [this blog post](http://blog.getpostman.com/2015/07/02/introducing-postman-collection-format-schema/).
