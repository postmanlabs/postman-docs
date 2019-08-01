---

title: "Using environments to switch contexts"
page_id: "test_multi_environments"
tags: 
  - "app"
warning: false
---

A very common scenario while testing APIs is that the API infrastructure might be present on your local machine, a staging setup, and a production setup. Using variables you can call all these APIs without having to replace values manually. You can also use variables to test for different users (for example, they might need different access tokens), different input values, etc.

To test a request across different environments,

1\. Create an environment

* Click on "No environment" in the header.
[![](https://www.getpostman.com/img/v1/docs/test_multi_environments/test_multi_environments_1.png)][0]

* Select "Manage environments" and then the "Add" button in the modal that comes up.
[![](https://www.getpostman.com/img/v1/docs/test_multi_environments/test_multi_environments_2.png)][1]

* Fill in the values as shown in the screenshot below.
[![](https://www.getpostman.com/img/v1/docs/test_multi_environments/test_multi_environments_3.png)][2]

* Press submit.

2\. Create the next environments you will be testing.

To create another environment, we can duplicate this environment so that we don't have to type in variable keys all over again.

3\. Place environment variables in the request.

Variables can be used almost everywhere in Postman. They are available inside:

* URL
* URL params
* Header values
* form-data/url-encoded values
* Raw body content
* Helper fields

To use a variable you need to enclose the variable name with double curly braces -- `{{my_variable_name}}`.
[![](https://www.getpostman.com/img/v1/docs/test_multi_environments/test_multi_environments_4.png)][3]

4\. Now select an environment from the environment selection dropdown.

Once an environment is selected, Postman will replace all instances of a variable with it's corresponding value. If no environment is selected, then Postman will try to find a matching global variable.

5\. Hit Send.

6.Change the environment and hit send again. The request will be made to the new environment you picked.

7\. Repeat until all environments are tested.

To see some examples of testing in multiple environments and other use cases for variables, check out [this blog post][4].

[0]: https://www.getpostman.com/img/v1/docs/test_multi_environments/test_multi_environments_1.png
[1]: https://www.getpostman.com/img/v1/docs/test_multi_environments/test_multi_environments_2.png
[2]: https://www.getpostman.com/img/v1/docs/test_multi_environments/test_multi_environments_3.png
[3]: https://www.getpostman.com/img/v1/docs/test_multi_environments/test_multi_environments_4.png
[4]: https://blog.getpostman.com/2014/02/20/using-variables-inside-postman-and-collection-runner/
