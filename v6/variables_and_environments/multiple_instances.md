---

title: "Using data variables to run a collection multiple times"
page_id: "multiple_instances"
tags: 
  - "app"
warning: false
---

You can use data variables in the [collection runner][0] to run a collection with different sets of data. The Collection Runner lets you import a CSV or a JSON file and then use the values from the data file inside HTTP requests and scripts. To use them inside the Postman UI, you have to follow the same syntax as [environment or global variables][1].

1\. To start, use variables in the requests of your collection.

Variables inside the Postman UI are enclosed inside curly braces. For example, `{{username}}` and `{{password}}` inside URL parameters would be replaced by corresponding values from the data file.

[![](https://www.getpostman.com/img/v1/docs/multiple_instances/multiple_instances_1.png)
][2]

Inside pre-request and test scripts, the special data dictionary contains values loaded from the data file for a specific iteration. For example data.username or data\['username'\] would let you access the value of the username variable from a data file.

[![](https://www.getpostman.com/img/v1/docs/multiple_instances/multiple_instances_2.png)
][3]

2\. Next, get your file of variables you want to run ready. This can be a CSV or JSON file.

For CSV files to work inside the Collection Runner, the first row needs to consist of variable names that you want to use inside requests. Every subsequent row is used as a data row, and represents 1 iteration. Make sure the line endings of the CSV file are in the Unix format. That's a restriction in our current CSV parser. Line endings can be changed in a text editor like Sublime Text.

For JSON files, you need to make sure that the file has an array of key/value pairs. Each element in the array is an object of key-value pairs, and represents 1 iteration. The keys are used as variable names while the values are replaced inside requests.

3\. Open the Collection Runner window and select the appropriate collection or folder. Note - a collection can contain a single request too.

4\. Select "Choose files" from the file selection area to load the data file. If the data file was loaded successfully, you can preview the values within the Collection Runner.

[![](https://www.getpostman.com/img/v1/docs/multiple_instances/multiple_instances_3.png)
][4]

5\. Set up the iteration count. The iteration count is the number of times you want the collection or folder to run. Each iteration will use one row from your data file. If the iteration count is more than the number of rows in the data file, then the last row values are repeated.

[![](https://www.getpostman.com/img/v1/docs/multiple_instances/multiple_instances_4.png)
][5]

6\. Run the collection and observe the result.

[![](https://www.getpostman.com/img/v1/docs/multiple_instances/multiple_instances_5.png)
][6]

Testing your API using the Collection Runner and data files would make it more robust by testing for hundreds of variations instead of a couple of use cases. To learn by example, check out [this blog post.][7]


[0]: http://www.getpostman.com/docs/running_collections
[1]: http://www.getpostman.com/docs/environments
[2]: https://www.getpostman.com/img/v1/docs/multiple_instances/multiple_instances_1.png
[3]: https://www.getpostman.com/img/v1/docs/multiple_instances/multiple_instances_2.png
[4]: https://www.getpostman.com/img/v1/docs/multiple_instances/multiple_instances_3.png
[5]: https://www.getpostman.com/img/v1/docs/multiple_instances/multiple_instances_4.png
[6]: https://www.getpostman.com/img/v1/docs/multiple_instances/multiple_instances_5.png
[7]: https://blog.getpostman.com/2014/10/28/using-csv-and-json-files-in-the-postman-collection-runner/
