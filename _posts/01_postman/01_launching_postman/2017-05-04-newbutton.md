---
categories:
  - "postman"
  - "launching_postman"
title: "New button"
page_id: "newbutton"
warning: false

---


You can use the **New** button to initiate requests, collections, environments, monitors, documentation, and mock servers.

[![new_button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_homePage_blk.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_homePage_blk.png)

When you click the **New** button, the **Create New** tab appears as the default view. 

In addition to the **Create New** tab, there are two other tabs: "Templates" and "API Network". For more information about these tabs, see the Templates and API Network sections below.

[![new_button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create-new-blk-121317.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create-new-blk-121317.png)

## Create New tab 

In **BUILDING BLOCKS**, create a new request, collection, or environment.

In **ADVANCED**, create a new monitor, documentation, and a mock server.

**Note**: At the bottom, you can select “Show this window at launch” to indicate whether you want the **Create New** tab to display each time you open Postman.

**Note**: You can directly create a new feature when you click the down arrow at the right side of the **New** button.

[![new_button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_menu_blk.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_menu_blk.png)

## BUILDING BLOCKS
### Creating requests
You can create any kind of [HTTP request.](/docs/postman/sending_api_requests/requests){:target="_blank"}

1. In the header toolbar, click the **New** button.
2. In the **Create New** tab, click "Request".
3. Select a collection and save the request in it. 

You can either create a new collection or select an existing one. After you save the request, you can add the URL, method, headers, and body to the request in the builder.

[![new_button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_request_blk.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_request_blk.png)

### Creating collections
A collection is a group of individual requests that you can organize into folders. 

1. In the header toolbar, click the **New** button.
2. In the **Create New** tab, click "Request".
3. In the **CREATE A NEW COLLECTION** modal:
* Enter a name and optional description.
* Select an authorization type.
* Enter a pre-request script to execute before the collection runs.
* Add a test to execute after the collection runs.
* Add variables to the collection and its requests.
4. Click the **Create** button.

After creating the collection, you can save requests to the collection and add folders for better organization.

[![new_button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/collections-createcollectionmodal.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/collections-createcollectionmodal.png)

### Creating environments
While working with APIs, you often need different setups, such as your local machine, the development server, or the production API. [Environments](/docs/postman/environments_and_globals/manage_environments){:target="_blank"} let you customize requests using variables. 

1. In the header toolbar, click the **New** button.
2. In the **Create New** tab, click "Environment". 
3. In the **MANAGE ENVIRONMENTS** modal, add the variables you want to save as key-value pairs.
4. Click the **Add** button.

[![new_button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_environment_blk.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_environment_blk.png)

If you've created other environments, the **MANAGE ENVIRONMENTS** modal appears again and displays them. You can share, edit download, or delete those environments. In addition, you can create global environments and download them as a JSON file, or import environment files from your computer.

[![new_button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/environments-secondWindow.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/environments-secondWindow.png)


## ADVANCED
### Creating monitors
A [monitor](/docs/postman/monitors/intro_monitors) runs a collection periodically to check its performance and response. You can [set a monitor](/docs/postman/monitors/setting_up_monitor) to run as frequently as every 5 minutes. 

1. To create a monitor, click ‘Monitor’ in the **New** button drop down menu and enter the URLs you want to monitor, and indicate the response time and the response code. You can also select an existing collection to monitor all those requests. 
2. Click ‘Next’ to enter the name of the monitor, how often you want the monitor to run, and the region you want to monitor.

Postman makes a collection of the URLs and adds a script that checks the response time and response code for each URL.

You receive notifications when either the response code doesn’t match or the response time falls below the expected values. You can also add the method, headers, and body to the individual URLs in the request builder, as well as add custom test scripts.

[![new_button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_monitor_blk.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_monitor_blk.png)

### Creating documentation
You can create [public or private documentation](/docs/postman/api_documentation/intro_to_api_documentation){:target="_blank"} and share it in a web page. Postman generates and hosts browser-based documentation for your collections automatically in real-time. 

<ol start="1">
  <li>Click "API Documentation".</li>
 <li>Select if you want to create documentation for a new API or an existing or team collection. If you create a new API to document, you must select a request method and enter the request URL, description, and status code. If you use an existing or team collection to document, you must select a collection from a list of existing or team collections.</li>
 </ol>

[![configure docs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/documentation-configure.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/documentation-configure.png)

<ol start="3">
  <li>After you select or create the request you want to document, click the <b>Next</b> button.</li>
  <li>In the <b>Configure documentation</b> tab, you must:</li>
 </ol>

* Enter the name of the documentation.
* Add a description of the documentation. You can use markdown to add headings, lists, code snippets, and so on in your description.

[![configureTab docs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/documentation-configureTab.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/documentation-configureTab.png)

 <ol start="5">
  <li>Click the <b>Create</b> button.</li>
   </ol>
     
In the **Next steps** tab, see a list of suggested next steps to maximize the effectiveness of your documentation.

[![nextSteps docs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/documentation-nextsteps.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/documentation-nextsteps.png)

### Creating mock servers
A [mock server  ](/docs/postman/mock_servers/setting_up_mock){:target="_blank"} simulates each endpoint in a Postman Collection. You can mock a request and response in Postman before you send the actual request or set up a single endpoint to return the response. 

1. To create a mock server, click ‘Mock Server’ in the **New** button drop down menu and enter the request endpoint and the expected response. 
2. Then click ‘Next’ to enter the name of your APIs. You can indicate if you want this mock server to be private.

Postman creates a collection and adds [examples](/docs/postman/mock_servers/mocking_with_examples){:target="_blank"} for individual requests. Postman also provides a mock URL you can share with the public, such as with front-end developers. They can send a request to this URL, followed by an endpoint, to get the corresponding response.

[![new_button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_mockServer_blk.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_mockServer_blk.png)

## Template and API Network tabs

### Templates tab

You can select ‘Template’ for templates that help you: check links, track Github issues, verify non-MFA access to AWS accounts, monitor status of URLs, check DNS records, use Postman Echo to test your REST client and make sample API calls, and monitor AWS ElasticBeanstalk environments. 

You can view all the templates, or select to view them in a Developer or DevOps category.

[![templates](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/templates-tab.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/templates-tab.png)

To import a template:

1. Click on the template you want. In this example we're using the "Link Checker" template.

**Note**: The Link Checker template only provides required environmental variables. However, other templates might offer required and optional environmental variables.

[![linkCheckertemplates](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/linkchecker-template.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/linkchecker-template.png)

<ol start="2">
  <li>Click the <b>Use this template</b> button to summon the <b>Customization options</b> screen.</li>
</ol>

This screen lists what Postman created for you—collection, environment, and monitor settings. You can configure your own monitor settings in the "CONFIGURATION OPTIONS" section.

<ol start="3">
  <li>If you want to configure your monitor, select how often you want the monitor to run and enter the URL you want to monitor in "CONFIGURATION OPTIONS" section.</li>
  <li>Click the <b>Create</b> button.</li>
</ol>

The **Success** screen displays what Postman created for you and suggests next steps you might want to consider to maximize your template. 

<ol start="5">
  <li>Click the <b>Okay</b> button to exit the screen.</li>
</ol>

[![nextSteps](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/nextsteps-linkchecker.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/nextsteps-linkchecker.png)

### API Network tab

The Postman API Network provides the most authentic and actionable directory of public APIs available. Every API listed in this network includes a complete Postman collection, created by the API's publisher, and specifically designed to onboard developers quickly and effectively.

You can view all these APIs, or select to view them from these categories: Business Solutions, Marketing, Cloud, Communications, Data Management, Development, Mobile Services, E-Commerce, Financial Services, Food, Health Services, Payment Services, Productivity, Retail, Shipping Logistics, Social Media, and Travel.

After you select an API Network, you can import it into your collections.

[![API_network](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/apiNetwork-tab.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/apiNetwork-tab.png)

To import an API in the API Network:

1. Click an API in the API Network. In this example, we're using the AuthO API.

[![API_networkExample](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/apiNetwork_authO.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/apiNetwork_authO.png)

<ol start="2">
  <li>Click the <b>Run In Postman</b> button to import the API in your collections. When you check your collection, you can see the API you imported.</li>
</ol>



