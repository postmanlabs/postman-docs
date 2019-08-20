---
title: "Working with OpenAPI"
page_id: "working_with_openAPI"
warning: false
---

You can import your existing OAS 3.0 definitions (OpenAPI Specification) into Postman. Postman supports both YAML and JSON formats. You can choose to upload a file, enter a URL, or directly copy your JSON/YAML. In the Postman app, click 'Import' to bring up the following screen:  

[![import sample](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/import+modal.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/import+modal.png)

When importing your OpenAPI specification, Postman follows the endpoint hierarchy defined in the specification to create a collection organized into folders (if your OpenAPI has multiple levels of hierarchy).

Postman uses the schemas defined in the OpenAPI to generate request and response bodies. The following screen clearly illustrates importing of OpenAPI specification into Postman:

[![import swagger 3 file](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ImportingSwagger3File.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ImportingSwagger3File.gif)
