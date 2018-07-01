---

title: "Importing Swagger files"
page_id: "importing_swagger"
tags: 
  - "app"
warning: false
---

A swagger API definition usually lives as a single file, so we only support imports of single swagger files. If you have a lot of unrelated Swagger files in a folder, you can import those through the folder importer.

To save a Swagger file as a collection:

1. Clone the repository containing the Swagger definition to your local machine. If you have it saved locally as file already, that's fine of course.
2. Open the Postman Import box and hit the File tab. If you have a lot of unrelated Swagger files in a folder, you can import those through the folder importer.
[![](https://www.getpostman.com/img/v1/docs/importing_folders/importing_folders_1.png)][0]

3. Click on file and upload the Swagger file.
4. You're done! Postman will detect all the Swagger definitions and convert them internally to Postman and then show you an import success message.
[![](https://www.getpostman.com/img/v1/docs/importing_folders/importing_folders_3.png)][1]

[0]: https://www.getpostman.com/img/v1/docs/importing_folders/importing_folders_1.png
[1]: https://www.getpostman.com/img/v1/docs/importing_folders/importing_folders_3.png
