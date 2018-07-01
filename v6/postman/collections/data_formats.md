---
title: "Data formats"
page_id: "data_formats"
warning: false

---

Postman can export and import collections, environments, globals and header presets as files and links. This topic covers:

* [Exporting and importing Postman data](#exporting-and-importing-postman-data)
* [Importing cURL](#importing-curl)
* [Importing RAML](#importing-raml)
* [Importing Swagger](#importing-swagger)
* [Importing WADL](#importing-wadl)
* [Validating Collection JSON files](#validating-collection-json-files)




### Exporting and importing Postman data

Postman can export and import the following formats as a file or generated URL. When you export a collection from the Postman app, the exported file is a JSON file. The file contains all data (and metadata) that is required by Postman to recreate the collection when imported back into Postman, or that is utilized by Newman to run the collection from the command line interface (CLI).

##### **Collections**

[![export collection](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-collections-view.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-collections-view.png)

Postman can export collections in two formats - v1 and v2\. Both Collection v1 and v2 download as JSON files; v2 is more versatile and the most-used choice. Learn more about the [v1 and v2 formats](http://blog.getpostman.com/2015/06/05/travelogue-of-postman-collection-format-v2/){:target="_blank"}. 

[![select v1 or v2 format](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-export-collection1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-export-collection1.png)

##### **Environments**

Environments can be exported from the **MANAGE ENVIRONMENTS** modal, and imported here as well.

[![export environments](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-manage-environments2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-manage-environments2.png)

##### **Data dumps**

From the **Data** tab of the **SETTINGS** modal, Postman allows you to export all collections, environments, globals and header presets into one JSON file. Postman does not export your history. You can import this data back into Postman.

[![export all Postman data](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-data-dumps-settings.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-data-dumps-settings.png)

##### **Importing Postman data**

Postman data can be imported from the **Data** tab of the **SETTINGS** modal, or using the **Import** button in the header toolbar. Import a collection, environment, data dump, curl command, or a RAML / WADL / Swagger (v1/v2) / Runscope file using the **IMPORT** modal.

[![import data](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-importButton.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-importButton.png)

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
      [![import button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-collections-view-raml-1a.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-collections-view-raml-1a.png)
   3.  Click on **Choose Files** and upload the RAML folder.
         
   You’re done! Postman will detect all the RAML definitions and convert them internally to Postman and then show you an import success message.
    
 [![confirmation message](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-data-format-raml-2a.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-data-format-raml-2a.png)

##### **Examples**

Download an example RAML file: [github-api-v3.raml](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/github-api-v3.raml)

**Note**: Postman supports RAML 1.0.

### Importing Swagger

A Swagger API definition usually lives as a single file, so we only support imports of single swagger files. If you have a lot of unrelated Swagger files in a folder, you can import those through the folder importer.

##### **Saving a Swagger file as a collection**

   1.  Clone the repository containing the Swagger definition to your local machine. If you have it saved locally as file already, that’s fine of course.  

   2.  Click on the Import button, and choose the Import File tab. If you have a lot of unrelated Swagger files in a folder, you can import those through the folder importer. 

 [![import button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-collections-view-raml-1a.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-collections-view-raml-1a.png)

   3.  Click on file and upload the Swagger file.

  You’re done! Postman will detect all the Swagger definitions and convert them internally to Postman and then show you an import success message.

[![confirmation message](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-data-format-raml-2a.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-data-format-raml-2a.png)

##### **Examples**

  [Swagger 2.0](https://github.com/OAI/OpenAPI-Specification/tree/master/examples/v2.0){:target="_blank"} 
  
  [Swagger 1.2](https://github.com/OAI/OpenAPI-Specification/wiki/Hello-World-Sample){:target="_blank"}
  

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

[Source](http://www.nurkiewicz.com/2012/01/gentle-introduction-to-wadl-in-java.html){:target="_blank"}

### Validating Collection JSON files

To validate if a JSON file is in the correct collections format, you can use our [schema files for collections](http://schema.getpostman.com/){:target="_blank"}.

* [Schema file](http://schema.getpostman.com/json/collection/v1.0.0/collection.json){:target="_blank"}
* [Associated documentation](http://schema.getpostman.com/json/collection/v1.0.0/docs/index.html){:target="_blank"} 
* [Postman schemas in GitHub](https://github.com/postmanlabs/schemas){:target="_blank"} 
* [Example of data validation using our schema](http://blog.getpostman.com/2015/07/02/introducing-postman-collection-format-schema/){:target="_blank"} and a [validator](https://github.com/mafintosh/is-my-json-valid){:target="_blank"}


