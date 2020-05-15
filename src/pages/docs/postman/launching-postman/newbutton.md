---
title: "New button"
order: 5
page_id: "newbutton"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://getpostman.com/apps"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Create collections, documentation, and more with Postman's NEW button"
    url: "https://blog.postman.com/2017/10/10/create-collections-documentation-and-more-with-postmans-new-button/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Sending your first request"
    url: "/docs/postman/launching-postman/sending-the-first-request"

warning: false
---

You can use the **New** button to initiate:

- [Requests](#create-a-request)
- [Collections](#create-a-collection)
- [Environments](#create-an-environment)
- [Monitors](#create-a-monitor)
- [Documentation](#create-documentation)
- [Mock_servers](#create-a-mock-server)
- [APIs](#create-an-api)

The **New** button also provides access to [templates](#templates) and the [API Network](#api-network).

[![new_button](https://assets.postman.com/postman-docs/WS-headerToolbar-blk.png)](https://assets.postman.com/postman-docs/WS-headerToolbar-blk.png)

When you click the **New** button, the **Create New** tab appears as the default view.

In addition to the **Create New** tab, there are two other tabs: "Templates" and "API Network". For more information about these tabs, see the [Templates](#templates) and [API Network](#api-network) sections.

[![new_button](https://assets.postman.com/postman-docs/cnx-modal.png)](https://assets.postman.com/postman-docs/cnx-modal.png)

## Create New

You can create a new _Request, Collection, Environment, API Documentation, Mock Server, and Monitor_ using the **New** button. Alternatively, you can also directly create these when you click the down arrow at the right side of the **New** button, as illustrated below:

[![new_button2](https://assets.postman.com/postman-docs/cnx-dropdown.png)](https://assets.postman.com/postman-docs/cnx-dropdown.png)

In **BUILDING BLOCKS**, create a new request, collection, or environment.

In **ADVANCED**, create new documentation, a mock server, a monitor or a new API.

At the bottom of this window, you can select “Show this window at launch” to indicate whether you want the **Create New** tab to display each time you open Postman.

## Create a request

Under **BUILDING BLOCKS**, you can create any kind of [HTTP request](/docs/postman/sending-api-requests/requests/).

1. In the header toolbar, click the **New** button.
1. In the **Create New** tab, click "Request".
1. Save the request to an existing collection, or create a new one.

After you save the request to a collection, you can add the URL, method, headers, and body to the request in the builder.

[![new_button](https://assets.postman.com/postman-docs/newButton_request_blk.png)](https://assets.postman.com/postman-docs/newButton_request_blk.png)

## Create a collection

Under **BUILDING BLOCKS**, you can create a [collection](/docs/postman/collections/creating-collections/).

1. In the header toolbar, click the **New** button.
1. In the **Create New** tab, click "Collection".
1. In the **CREATE A NEW COLLECTION** modal:

- Enter a name and optional description.
- Select an authorization type (if any).
- Enter a pre-request script (optional) to execute prior to every request within the collection.
- Add a test (optional) to execute after every request within the collection.
- Add collection-level variables (optional) that can be used throughout the collection in the scripts or other request builder sections.

1. Click the **Create** button.

After creating the collection, you can save more requests to the collection and add folders for better organization.

[![new_button](https://assets.postman.com/postman-docs/WS-collections-createcollection.png)](https://assets.postman.com/postman-docs/WS-collections-createcollection.png)

## Create an environment

Under **BUILDING BLOCKS**, you can create an [environment](/docs/postman/variables-and-environments/variables/#environments-in-postman). Environments are a portable scope for variables. While working with APIs, you often need different setups, such as your local machine, the development server, or the production API.

1. In the header toolbar, click the **New** button.
1. In the **Create New** tab, click "Environment".
1. In the **MANAGE ENVIRONMENTS** modal, add the variables you want to save as key-value pairs.
1. Click the **Add** button.

[![new_button](https://assets.postman.com/postman-docs/Manage_Env1_a.png)](https://assets.postman.com/postman-docs/Manage_Env1_a.png)

If you've created other environments, the **MANAGE ENVIRONMENTS** screen appears again and displays them. You can share, edit, download, or delete those environments.

[![new_button](https://assets.postman.com/postman-docs/WS-environments-secondWindow2.png)](https://assets.postman.com/postman-docs/WS-environments-secondWindow2.png)

## Create a monitor

Under **ADVANCED**, you can create a [monitor](/docs/postman/monitors/intro-monitors/) to run a collection periodically to check its performance and response. You can [set a monitor](/docs/postman/monitors/setting-up-monitor/) to run as frequently as every 5 minutes.

[![create screen](https://assets.postman.com/postman-docs/WS-createNew-newbutton-blk.png)](https://assets.postman.com/postman-docs/WS-createNew-newbutton-blk.png)

1. In the header toolbar, click the **New** button.
1. In the **Create New** tab, click “Monitor”.
1. Select if you want to monitor a new API or an existing collection. If you create a new API to monitor, you must select a request method and enter the request path, response code, and response body. If you use an existing collection, you must select a collection from a list of existing collections.
   [![request monitor](https://assets.postman.com/postman-docs/WS-monitor-select-requests2.png)](https://assets.postman.com/postman-docs/WS-monitor-select-requests2.png)
1. After you select or create the request you want to monitor, click the **Next** button. In the **Configuration** tab, you must:

- Enter the name of the monitor
- Select an environment (optional).
- Set how frequently the monitor should run.
- Select one or more regions of the world from where you want to monitor your results.
  [![configure monitor](https://assets.postman.com/postman-docs/WS-monitor-configure-1.png)](https://assets.postman.com/postman-docs/WS-monitor-configure-1.png)

1. Click the **Create** button.

In the **Next steps** tab, see a list of suggested next steps to get the most out of your monitor.

[![next monitor](https://assets.postman.com/postman-docs/WS-monitor-next-steps1.png)](https://assets.postman.com/postman-docs/WS-monitor-next-steps1.png)

## Create documentation

Under **ADVANCED**, you can create [public or private documentation](/docs/postman/api-documentation/documenting-your-api/) and share it in a web page. Postman generates browser-based documentation for your collections, that can be updated automatically in real-time.

1. In the header toolbar, click the **New** button.
1. In the **Create New** tab, click "API Documentation".
1. Select if you want to create documentation for a new API or an existing collection. If you create a new API to document, you must select a request method and enter the request URL, description, and status code. If you use an existing collection to document, you must select a collection from a list of existing collections.
   [![configure docs](https://assets.postman.com/postman-docs/WS-documentation-configure-1.png)](https://assets.postman.com/postman-docs/WS-documentation-configure-1.png)
1. After you select or create the request you want to document, click the **Next** button. In the **Configure documentation** tab, you must:

- Enter the name of the documentation.
- Add a description of the documentation. You can use markdown to add headings, lists, code snippets, and so on in your description.
  [![configureTab docs](https://assets.postman.com/postman-docs/WS-documentation-configureTab-1.png)](https://assets.postman.com/postman-docs/WS-documentation-configureTab-1.png)

1. Click the **Create** button.

In the **Next steps** tab, see a list of suggested next steps to get the most out of your documentation.

[![nextSteps docs](https://assets.postman.com/postman-docs/WS-documentation-nextsteps-1.png)](https://assets.postman.com/postman-docs/WS-documentation-nextsteps-1.png)

## Create a mock server

A [mock server](/docs/postman/mock-servers/setting-up-mock/) simulates each endpoint in a Postman Collection. You can mock a request and response in Postman before you send the actual request or set up a single endpoint to return the response.

1. In the header toolbar, click the **New** button.
1. In the **Create New** tab, click “Mock Server”.
1. Select if you want to mock a new API or an existing or team collection. If you create a new API to mock, you must select a request method and enter the request path, response code, and response body. If you use an existing or team collection to mock, you must select a collection from a list of existing or team collections.
   [![config mock](https://assets.postman.com/postman-docs/WS-mock-config-1.png)](https://assets.postman.com/postman-docs/WS-mock-config-1.png)
1. After you select or create the request you want to mock, click the **Next** button. In the **Configure mock server** tab, you must:

- Enter the name of the mock
- Select an environment (optional).
- Indicate if you want to make this mock server private
  **Note**: The number of calls made to mock servers might be limited by your Postman account. Check your [usage limits](https://go.postman.co/usage).
  [![configTab mock](https://assets.postman.com/postman-docs/WS-mock-configureTab-1.png)](https://assets.postman.com/postman-docs/WS-mock-configureTab-1.png)

1. Click the **Create** button.

In the **Next steps** tab, see a list of suggested next steps to get the most out of your mock server.

[![next mock](https://assets.postman.com/postman-docs/WS-mock-next-steps.png)](https://assets.postman.com/postman-docs/WS-mock-next-steps.png)

## Create an API

An API allows you to manage all aspects of API design, development, and testing from within Postman. APIs can only be created if you are signed in to Postman and online.

> The number of APIs you can create is dependent on your [Postman plan](https://www.postman.com/pricing).

As soon as you click on 'API' under Advanced section, a new "Untitled API" is created for you in the current workspace.

[![New API](https://assets.postman.com/postman-docs/new-api.png)](https://assets.postman.com/postman-docs/new-api.png)

Use the [API Builder](/docs/postman/design-and-develop-apis/the-api-workflow/) to make best use of Postman on your API development projects.

## Templates

Under the **Templates** tab, there are a variety of collection templates available to help you check links, track GitHub issues, verify non-MFA access to AWS accounts, monitor the status of URLs, check DNS records, use Postman Echo to test your REST client and make sample API calls, monitor AWS ElasticBeanstalk environments, and more.

You can browse all the templates, or filter by a category. Can't find what you're looking for? [Publish your own community-contributed template](/docs/postman-for-publishers/postman-templates/add-templates).

[![api-network-new-template](https://assets.postman.com/postman-docs/api-network/api-network-new-template.png)](https://assets.postman.com/postman-docs/api-network/api-network-new-template.png)

To import a template:

1. Click on the template you want. In this example we're using the "Intro to writing tests - with examples" template. Each template has a description that may list the values required to execute the requests.
   [![api-network-new-template-details](https://assets.postman.com/postman-docs/api-network/api-network-new-template-details.png)](https://assets.postman.com/postman-docs/api-network/api-network-new-template-details.png)
1. Click the **Use this template** button to summon the **Customization options** screen. This screen may list additional elements that are associated with this template and configuration options. Postman saves the values you enter as environment variables. Make sure you fill all the fields as these values might be crucial for the template to work properly.
1. To configure a [monitor](/docs/postman/monitors/intro-monitors), select how often you want the monitor to run and enter any required information in the "CONFIGURATION OPTIONS" section.
1. Click the **Create** button. The **Success!** screen displays what Postman created for you and suggests next steps to get the most out of the template.
1. Click the **Okay** button to exit the screen.

## API Network

The [Postman API Network](https://www.postman.com/api-network/) provides the most authentic and actionable directory of public APIs available. Every API listed in this network includes a complete Postman collection, created by the API's publisher. Postman specifically designed the API list to onboard developers quickly and effectively.

From the Postman app, click the orange **New** button and select the **API Network** tab. Search for an API, or browse by a particular category. Postman groups the APIs by category such as Marketing, Financial Services, E-commerce, and so on. You can filter by category to find an API, or directly search for the name of the API. After you select an API from the list, you can import it into the Postman app.

[![API_network](https://assets.postman.com/postman-docs/api-network-static-categories.png)](https://assets.postman.com/postman-docs/api-network-static-categories.png)

When you find the API that you’re looking for, click the Run in Postman button to import the collection into Postman.

[![search for api in api network](https://assets.postman.com/postman-docs/api-network-new-button.gif)](https://assets.postman.com/postman-docs/api-network-new-button.gif)

Once the collection is imported into Postman, you can see the collection in the sidebar and begin executing the requests.

[![imported collection](https://assets.postman.com/postman-docs/api-network-nice-pay.png)](https://assets.postman.com/postman-docs/api-network-nice-pay.png)

If you're an API publisher, you can share your API documentation with your users and the rest of the Postman community by [Publishing your documentation to the Postman API Network](/docs/postman-for-publishers/api-network/add-api-network).
