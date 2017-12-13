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

In addition to the **Create New** tab, there are two other tabs: Templates and API Network. For more information about the Templates and API Network tabs, see the Templates and API Network sections below.

[![new_button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create-new-blk-121317.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create-new-blk-121317.png)

In **BUILDING BLOCKS**, create a new request, collection, or environment.

In **ADVANCED**, create a new monitor, documentation, and a mock server.

**Note**: At the bottom, you can select “Show this window at launch” to indicate whether you want the **Create New** tab to display each time you open Postman.

**Note**: You can directly create a new feature when you click the down arrow at the right side of the **New** button.

[![new_button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_menu_blk.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_menu_blk.png)

## BUILDING BLOCKS
### Creating requests
You can create any kind of [HTTP request.](/docs/postman/sending_api_requests/requests){:target="_blank"}

1. To create a request, click ‘Request’ in the **New** button drop down menu and enter a title and description. 
2. Select a collection and save the request in it. 

You can either create a new collection or select an existing one. After you save the request, you can add the URL, method, headers, and body to the request in the builder.

[![new_button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_request_blk.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_request_blk.png)

### Creating collections
A collection is a group of individual requests that you can organize into folders. 

1. To create a collection, click ‘Collection’ in the **New** button drop down menu and enter a name and description for it. 
2. After [creating the collection ](/docs/postman/collections/creating_collections){:target="_blank"}, you can [save requests to this collection](/docs/postman/collections/creating_collections){:target="_blank"} and add folders for [better organization.](/docs/postman/collections/managing_collections){:target="_blank"}

[![new_button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_collection_blk.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_collection_blk.png)

### Creating environments
While working with APIs, you often need different setups, such as your local machine, the development server, or the production API. [Environments](/docs/postman/environments_and_globals/manage_environments){:target="_blank"} let you customize requests using variables. 

1. To create an environment, click ‘Environment’ in the **New**  button drop down menu and enter a name for it. 
2. Add the variables you want to save as key-value pairs.

[![new_button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_environment_blk.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_environment_blk.png)

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

1. To create documentation, click ‘Documentation’ in the **New** button drop down menu and enter the request URLs with the methods you want to document. 
2. Click ‘Next’ to enter the name for the APIs and a general description for your API. 

Postman creates a collection and generates documentation that you and your team can [ view.](/docs/postman/api_documentation/viewing_documentation){:target="_blank"}

[![new_button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_documentation_blk.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_documentation_blk.png)

### Creating mock servers
A [mock server  ](/docs/postman/mock_servers/setting_up_mock){:target="_blank"} simulates each endpoint in a Postman Collection. You can mock a request and response in Postman before you send the actual request or set up a single endpoint to return the response. 

1. To create a mock server, click ‘Mock Server’ in the **New** button drop down menu and enter the request endpoint and the expected response. 
2. Then click ‘Next’ to enter the name of your APIs. You can indicate if you want this mock server to be private.

Postman creates a collection and adds [examples](/docs/postman/mock_servers/mocking_with_examples){:target="_blank"} for individual requests. Postman also provides a mock URL you can share with the public, such as with front-end developers. They can send a request to this URL, followed by an endpoint, to get the corresponding response.

[![new_button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_mockServer_blk.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/newButton_mockServer_blk.png)


### Templates tab

You can select ‘Use a Template’ for templates that help you: check links, track Github issues, verify non-MFA access to AWS accounts, monitor status of URLs, check DNS records, use Postman Echo to test your REST client and make sample API calls, and monitor AWS ElasticBeanstalk environments. 

You can view all the templates, or select to view them in a Developer or DevOps category.

[![templates](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/templates-tab.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/templates-tab.png)

To import a template:

1. Click on the template you want. In this example we're using the "Link Checker" template.

**Note**: The Link Checker template only provides required environmental variables. However, other templates might offer required and optional environmental variables.

![link_checker_templates](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/linkchecker-template.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/linkchecker-template.png)

<ol start="2">
  <li>Click the <b>Use this template</b> button to summon the Customization options screen.</li>
</ol>

This screen lists what Postman created for you—collection, environment, and monitor. You can configure your own monitor settings in the "CONFIGURATION OPTIONS" section.

<ol start="3">
  <li>If you want to figure your monitor, select how often you want the monitor run and enter the URL you want to monitor in "CONFIGURATION OPTIONS" section.</li>
  <li>Click the <b>Create</b> button.</li>
</ol>

The Link Checker template success screen displays what Postman created for you and suggests next steps you want to consider to maximize your template. Click the **Okay** button to exit the screen.

![link_checker_nextsteps](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/nextsteps-linkchecker.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/nextsteps-linkchecker.png)

### API Network tab

The Postman API Network provides the most authentic and actionable directory of public APIs available. Every API listed in this network includes a complete Postman collection, created by the API's publisher, and specifically designed to onboard developers quickly and effectively.

You can view all these APIs, or select to view them from these categories: Business Solutions, Marketing, Cloud, Communications, Data Management, Development, Mobile Services, E-Commerce, Financial Services, Food, Health Services, Payment Services, Productivity, Retail, Shipping Logistics, Social Media, and Travel.

[![API_network]()]()






