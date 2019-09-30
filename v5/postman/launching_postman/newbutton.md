---
title: "New button"
page_id: "newbutton"
warning: false

---


You can use the **New** button to initiate:

* [Requests](#requests)
* [Collections](#collections)
* [Environments](#environments)
* [Monitors](#monitors)
* [Documentation](#documentation)
* [Mock_servers](#mock_servers)

The **New** button also provides access to [templates](#templates) and the [API_network](#API_network).

[![new_button](https://assets.postman.com/postman-docs/WS-headerToolbar-blk.png)](https://assets.postman.com/postman-docs/WS-headerToolbar-blk.png)

When you click the **New** button, the **Create New** tab appears as the default view. 

In addition to the **Create New** tab, there are two other tabs: "Templates" and "API Network". For more information about these tabs, see the Templates and API Network sections below.

[![new_button](https://assets.postman.com/postman-docs/create-new-blk-121317.png)](https://assets.postman.com/postman-docs/create-new-blk-121317.png)

### Create New  

In **BUILDING BLOCKS**, create a new request, collection, or environment.

In **ADVANCED**, create a new monitor, documentation, and a mock server.

**Note**: At the bottom, you can select “Show this window at launch” to indicate whether you want the **Create New** tab to display each time you open Postman.

**Note**: You can directly create a new feature when you click the down arrow at the right side of the **New** button.

[![new_button](https://assets.postman.com/postman-docs/WS-new-button-menu-blk.png)](https://assets.postman.com/postman-docs/WS-new-button-menu-blk.png)

### BUILDING BLOCKS
<h4 id="requests">Creating requests</h4>
You can create any kind of [HTTP request.](/docs/postman/sending_api_requests/requests/
)

1. In the header toolbar, click the **New** button.
2. In the **Create New** tab, click "Request".
3. Select a collection and save the request in it. 

You can either create a new collection or select an existing one. After you save the request, you can add the URL, method, headers, and body to the request in the builder.

[![new_button](https://assets.postman.com/postman-docs/newButton_request_blk.png)](https://assets.postman.com/postman-docs/newButton_request_blk.png)

<h4 id="collections">Creating collections</h4>
A [collection](/docs/postman/collections/creating_collections/) is a group of individual requests that you can organize into folders. 

1. In the header toolbar, click the **New** button.
2. In the **Create New** tab, click "Collection".
3. In the **CREATE A NEW COLLECTION** modal:
* Enter a name and optional description.
* Select an authorization type.
* Enter a pre-request script to execute before the collection runs.
* Add a test to execute after the collection runs.
* Add variables to the collection and its requests.
4. Click the **Create** button.

After creating the collection, you can save requests to the collection and add folders for better organization.

[![new_button](https://assets.postman.com/postman-docs/collections-createcollectionmodal.png)](https://assets.postman.com/postman-docs/collections-createcollectionmodal.png)

<h4 id="environments">Creating environments</h4>
While working with APIs, you often need different setups, such as your local machine, the development server, or the production API. [Environments](/docs/postman/environments_and_globals/manage_environments/) let you customize requests using variables. 

1. In the header toolbar, click the **New** button.
2. In the **Create New** tab, click "Environment". 
3. In the **MANAGE ENVIRONMENTS** modal, add the variables you want to save as key-value pairs.
4. Click the **Add** button.

[![new_button](https://assets.postman.com/postman-docs/newButton_environment_blk.png)](https://assets.postman.com/postman-docs/newButton_environment_blk.png)

If you've created other environments, the **MANAGE ENVIRONMENTS** modal appears again and displays them. You can share, edit, download, or delete those environments. In addition, you can create global environments and download them as a JSON file, or import environment files from your computer.

[![new_button](https://assets.postman.com/postman-docs/environments-secondWindow.png)](https://assets.postman.com/postman-docs/environments-secondWindow.png)


### ADVANCED
<h4 id="monitors">Creating monitors</h4>
A [monitor](/docs/postman/monitors/intro_monitors/) runs a collection periodically to check its performance and response. You can [set a monitor](/docs/postman/monitors/setting_up_monitor/) to run as frequently as every 5 minutes. 

[![create screen](https://assets.postman.com/postman-docs/collection-create-new-screen2.png)](https://assets.postman.com/postman-docs/collection-create-new-screen2.png)

**Note**: At the bottom, you can select "Show this window at launch" to indicate whether you want the **Create New** tab to display each time you open Postman.

1. In the header toolbar, click the **New** button.
2. In the **Create New** tab, click “Monitor”.
3. Select if you want to monitor a new API or an existing or team collection. If you create a new API to monitor, you must select a request method and enter the request path, response code, and response body. If you use an existing or team collection, you must select a collection from a list of existing or team collections.

[![request monitor](https://assets.postman.com/postman-docs/monitor-select-requests.png)](https://assets.postman.com/postman-docs/monitor-select-requests.png)
 
<ol start="4">
  <li>After you select or create the request you want to monitor, click the <b>Next</b> button. </li>
  <li>In the <b>Configuration</b> tab, you must:</li>
</ol>

  * Enter the name of the monitor
  * Select an environment (optional).
  * Set how frequently the monitor should run. 
  * Select one or more regions of the world from where you want to monitor your results.
    
  [![configure monitor](https://assets.postman.com/postman-docs/monitor-configure.png)](https://assets.postman.com/postman-docs/monitor-configure.png)  
 
 <ol start="6">
  <li>Click the <b>Create</b>  button. </li>
</ol>

In the **Next steps** tab, see a list of suggested next steps to get the most out of your monitor.
    
  [![next monitor](https://assets.postman.com/postman-docs/monitor-next-steps.png)](https://assets.postman.com/postman-docs/monitor-next-steps.png)    

<h4 id="documentation">Creating documentation</h4>
You can create [public or private documentation](/docs/postman/api_documentation/intro_to_api_documentation) and share it in a web page. Postman generates and hosts browser-based documentation for your collections automatically in real-time. 

1. In the header toolbar, click the **New** button.
2. In the **Create New** tab, click "API Documentation".
3. Select if you want to create documentation for a new API or an existing or team collection. If you create a new API to document, you must select a request method and enter the request URL, description, and status code. If you use an existing or team collection to document, you must select a collection from a list of existing or team collections.
[![configure docs](https://assets.postman.com/postman-docs/documentation-configure.png)](https://assets.postman.com/postman-docs/documentation-configure.png)

<ol start="4">
  <li>After you select or create the request you want to document, click the <b>Next</b> button.</li>
  <li>In the <b>Configure documentation</b> tab, you must:</li>
 </ol>

* Enter the name of the documentation.
* Add a description of the documentation. You can use markdown to add headings, lists, code snippets, and so on in your description.

[![configureTab docs](https://assets.postman.com/postman-docs/documentation-configureTab.png)](https://assets.postman.com/postman-docs/documentation-configureTab.png)

 <ol start="6">
  <li>Click the <b>Create</b> button.</li>
   </ol>
     
In the **Next steps** tab, see a list of suggested next steps to get the most out of your documentation.

[![nextSteps docs](https://assets.postman.com/postman-docs/documentation-nextsteps.png)](https://assets.postman.com/postman-docs/documentation-nextsteps.png)

<h4 id="mock_servers">Creating mock servers</h4>
A [mock server](/docs/postman/mock_servers/setting_up_mock/) simulates each endpoint in a Postman Collection. You can mock a request and response in Postman before you send the actual request or set up a single endpoint to return the response. 

1. In the header toolbar, click the **New** button.
2. In the **Create New** tab, click “Mock Server”.
3. Select if you want to mock a new API or an existing or team collection. If you create a new API to mock, you must select a request method and enter the request path, response code, and response body. If you use an existing or team collection to mock, you must select a collection from a list of existing or team collections. 

[![config mock](https://assets.postman.com/postman-docs/mock-config.png)](https://assets.postman.com/postman-docs/mock-config.png) 

<ol start="4">
  <li>After you select or create the request you want to mock, click the <b>Next</b> button.</li>
  <li>In the <b>Configure mock server</b> tab, you must:</li>
</ol>
  
* Enter the name of the mock
* Select an environment (optional).
* Indicate if you want to make this mock server private

**Note**: The number of calls made to mock servers might be limited by your Postman account. Check your [usage limits](https://go.postman.co/usage).
     
 [![configTab mock](https://assets.postman.com/postman-docs/mock-configureTab.png)](https://assets.postman.com/postman-docs/mock-configureTab.png) 
     
<ol start="6">
  <li>Click the <b>Create</b> button.</li>
</ol>

In the **Next steps** tab, see a list of suggested next steps to get the most out of your mock server.

 [![next mock](https://assets.postman.com/postman-docs/mock-configureTab.png)](https://assets.postman.com/postman-docs/mock-configureTab.png)  

### Template and API Network tabs

<h4 id="templates">Templates</h4>

You can select ‘Templates’ to help you: check links, track Github issues, verify non-MFA access to AWS accounts, monitor the status of URLs, check DNS records, use Postman Echo to test your REST client and make sample API calls, and monitor AWS ElasticBeanstalk environments. 

You can view all the templates, or select to view them in the "Developer" or "DevOps" category.

[![templates](https://assets.postman.com/postman-docs/templates-tab.png)](https://assets.postman.com/postman-docs/templates-tab.png)

To import a template:

1. Click on the template you want. In this example we're using the "Link Checker" template.

**Note**: Each template has a description that lists the values required to run the template. In this example, the Link Checker template requires a `start_url` and a `root_url`.

[![linkCheckertemplates](https://assets.postman.com/postman-docs/linkchecker-template.png)](https://assets.postman.com/postman-docs/linkchecker-template.png)

<ol start="2">
  <li>Click the <b>Use this template</b> button to summon the <b>Customization options</b> screen.</li>
</ol>

This screen lists what Postman will create for you with this template and some configuration options available to you. Postman saves the values you enter as environment variables. Make sure you fill all the fields as these values might be crucial for the template to work properly.

<ol start="3">
  <li>To configure your monitor, select how often you want the monitor to run and enter the URL you want to monitor in "CONFIGURATION OPTIONS" section.</li>
  <li>Click the <b>Create</b> button.</li>
</ol>

The **Success!** screen displays what Postman created for you and suggests next steps to consider to get the most out of the template.

<ol start="5">
  <li>Click the <b>Okay</b> button to exit the screen.</li>
</ol>

[![nextSteps](https://assets.postman.com/postman-docs/nextsteps-linkchecker.png)](https://assets.postman.com/postman-docs/nextsteps-linkchecker.png)

<h4 id="API_network">API Network</h4>

The [Postman API Network](https://www.getpostman.com/api-network/) provides the most authentic and actionable directory of public APIs available. Every API listed in this network includes a complete Postman collection, created by the API's publisher. Postman specifically designed the API list to onboard developers quickly and effectively.

On the left side of the screen, Postman groups the APIs categories such as Marketing, Financial Services, E-commerce, and so on. You can search these categories to find an API.

After you select an API from the list, you can import it into your collections.

[![API_network](https://assets.postman.com/postman-docs/apiNetwork-tab.png)](https://assets.postman.com/postman-docs/apiNetwork-tab.png)

To import an API in the API Network:

1. Click an API in the API Network list. In this example, we're using the Auth0 API.

[![API_networkExample](https://assets.postman.com/postman-docs/apiNetwork_authO.png)](https://assets.postman.com/postman-docs/apiNetwork_authO.png)

<ol start="2">
  <li>Click the <b>Run In Postman</b> button to import the the API's collection.</li>
</ol>

You can see the API you imported in the [sidebar.](/docs/postman/launching_postman/navigating_postman/#sidebar)

[![sidebar](https://assets.postman.com/postman-docs/newbutton-sidebar2.png)](https://assets.postman.com/postman-docs/newbutton-sidebar2.png)


