---
title: "Pre-request scripts"
order: 41
page_id: "pre_request_scripts"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: link
    name: "Variables"
    url: "/docs/postman/environments-and-globals/variables/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Raygun"
    url: "https://www.getpostman.com/case-studies/raygun.pdf?_ga=2.226164956.754547870.1571851340-1454169035.1570491567"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Germaphobia collection (see pre-request scripts in action)"
    url: "https://blog.getpostman.com/2018/04/27/germaphobia/?_ga=2.226164956.754547870.1571851340-1454169035.1570491567"
  - type: link
    name: "The Good Collection (take advantage of the pre-request)"
    url: "https://blog.getpostman.com/2018/03/08/the-good-collection/?_ga=2.228868314.754547870.1571851340-1454169035.1570491567"
  - type: link
    name: "Keep it DRY with collection and folder elements"
    url: "https://blog.getpostman.com/2017/12/13/keep-it-dry-with-collection-and-folder-elements/?_ga=2.228868314.754547870.1571851340-1454169035.1570491567"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Test scripts"
    url: "/docs/postman/scripts/test-scripts/"

warning: false

---

Pre-request scripts are snippets of code associated with a collection request that are executed before the request is sent. This is perfect for use-cases like including the timestamp in the request headers or sending a random alphanumeric string in the URL parameters.

For example, to include a timestamp in the request headers, you can set an environment variable with the value returned from a function.

[![set environment variable](https://assets.postman.com/postman-docs/Test_script3_Updated2.png)](https://assets.postman.com/postman-docs/Test_script3_Updated2.png)

You can then access the **timestampHeader** variable in the header data editor by typing `{{timestampHeader}}`. When the request is sent, your pre-request script will be executed, and the value of timestampHeader will be sent in place of `{{timestampHeader}}`.

[![timestampHeader variable](https://assets.postman.com/postman-docs/Test_script4_Updated3.png)](https://assets.postman.com/postman-docs/Test_script4_Updated3.png)

**Note:** An environment should be an active one for environment variables to be set.

Pre-request scripts are written in JavaScript, and the syntax is similar to the [test scripts](/docs/postman/scripts/test-scripts/) except that the response object is not present.

## Adding a pre-request script to a collection or folder

You can add pre-request scripts to a collection, a folder, or a single request within a collection. A pre-request script associated with a collection runs prior to every request in the collection. A pre-request script associated with a folder runs prior to every request in the folder. This allows you to reuse commonly executed code prior to every request.

Collection and folder scripts can be updated in the collection or folder details respectively. Click on the ellipsis (...) next to the collection or folder name, and select “Edit” to open the modal. Select the **Pre-request Scripts** tab to add and update the scripts. You can also add collection scripts when initially creating the collection.  

[![pre-request script for folder](https://assets.postman.com/postman-docs/Test_script5.png)](https://assets.postman.com/postman-docs/Test_script5.png)

Read more about [the execution order of scripts](/docs/postman/scripts/intro-to-scripts/#execution-order-of-scripts).
