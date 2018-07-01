---

title: "Running collections with file-post requests"
page_id: "run_file_post_requests"
tags: 
  - "newman"
warning: false
---

Currently, you can not use the collection runner to run collections which have requests with file-uploads. You need to use [Newman][0], Postman's command line companion tool for that. Here's how:

1\. Create the collection of requests with file-uploads you want to run

2\. Check to make sure the requests run successfully in the main Postman runner

3\. Export the files as a JSON, and save to your filesystem

4\. Open the JSON file for editing. In line 22, change the "value" property of the file param to the complete path of the file

[![](https://www.getpostman.com/img/v1/docs/run_file_post_requests/run_file_post_requests_1.png)
][1]

Run the collection file in Newman

[![](https://www.getpostman.com/img/v1/docs/run_file_post_requests/run_file_post_requests_2.png)
][2]

If you are using Windows, change the backslashes (\\) in the JSON file to double-backslashes so that the JSON remains valid. eg. if your "value" is "C:\\Documents\\collection.json", you'll need to change it to "C:\\\\Documents\\\\collection.json".

Check out an example [here][3].


[0]: https://www.npmjs.com/package/newman
[1]: https://www.getpostman.com/img/v1/docs/run_file_post_requests/run_file_post_requests_1.png
[2]: https://www.getpostman.com/img/v1/docs/run_file_post_requests/run_file_post_requests_2.png
[3]: http://blog.getpostman.com/2014/11/15/using-newman-to-run-collections-with-file-post-requests/
