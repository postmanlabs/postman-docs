---
title: 'Using the API Builder'
order: 81
page_id: 'the_api_workflow'
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in Collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Create APIs directly within the Postman app"
    url: "https://blog.postman.com/postman-7-1-create-apis-directly-within-the-postman-app/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Managing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
---

You can design your API directly in Postman using the API Builder. By defining your schema in __APIs__ on the left of Postman, your specification can act as the single source of truth for your API project. The API Builder supports API-first development by allowing you to generate collections from your schema and build your development and testing from there.

[![API Builder](https://assets.postman.com/postman-docs/v8-api-builder-overview2-v2.jpg)](https://assets.postman.com/postman-docs/v8-api-builder-overview2-v2.jpg)

You can connect various components of your API development and testing process to your schema, such as collections, documentation, tests, mocks, and monitors. You can also version your APIs in Postman and connect elements to specific versions.

* [Creating an API](#creating-an-api)
* [Defining an API](#defining-an-api)
    * [Editing your schema](#editing-your-schema)
    * [Generating a collection](#generating-a-collection)
* [Watching an API](#watching-an-api)
* [Developing an API](#developing-an-api)
    * [Adding a mock server](#adding-a-mock-server)
    * [Adding documentation](#adding-documentation)
    * [Adding an environment](#adding-an-environment)
* [Testing an API](#testing-an-api)
* [Observing an API](#observing-an-api)

## Creating an API

To access the API Builder, open __APIs__ from the left sidebar in Postman. You can open and edit any existing APIs from here—Postman will automatically open the most recent version of an API by default.

<img alt="Create API" src="https://assets.postman.com/postman-docs/v8-create-new-api2.jpg"/>

Click __New__, then select __API__ or click __+__.

> You must be signed in to your Postman account to take this action.

![New API](https://assets.postman.com/postman-docs/v8-create-api-modal2.jpg)

Enter a name and a version, then select a schema type and format for your API. You can optionally import an API specification directly at this stage. If you don't, Postman will populate your API with a sample specification you can edit at any time.

> Postman currently supports OpenAPI (versions 1.0, 2.0, and 3.0), RAML (0.8 and 1.0), GraphQL, or WSDL (1.1 and 2.0). OpenAPI schemas can be defined in JSON or YAML. RAML schemas must be YAML. GraphQL schemas can be JSON or GraphQL SDL. WSDL schemas must be XML. Multi-file variants of schemas are currently not supported.

You can rename, delete, or remove the API from the workspace using the __View more actions__ (__...__) menu in the left sidebar.

> When you delete an API or remove it from a workspace, the collections, monitors, mocks, and environments linked to it will not be deleted / removed.

<img alt="Edit API" src="https://assets.postman.com/postman-docs/v8-more-actions2.jpg"/>

You can also [version your APIs](/docs/collaborating-in-postman/versioning-an-api/).

## Defining an API

You can define the structure of your API using its specification. You can also generate a collection from a spec.

* [Editing your schema](#editing-your-schema)
* [Generating a collection](#generating-a-collection)

> You can also [sync an API spec from a GitHub repository](/docs/integrations/available-integrations/github/#syncing-your-api-schemas-on-github).

### Editing your schema

The __Define__ tab in your API will include a specification (either one you imported or a sample Postman added when you created the API).

The default schema format is Open API 3.0, with YAML as the default language. To use a different schema type or language, choose it from the drop-down list.

The left pane of the schema editor displays an outline of your schema. When you first open the editor, the top level of nodes will be expanded, and the rest of them collapsed. Click nodes to expand or collapse them. Click an element in the outline to jump to it in the editor. You can also click the outline button to hide or show the outline.

![Schema navigation](https://assets.postman.com/postman-docs/v8-api-builder-schema-outline.gif)

In the schema editor, when you hover over a '#ref' component and press the Command key, a popover displays the first 200 characters of the reference component. When you Command-click the reference component, it will jump to the reference location.

![Schema refs](https://assets.postman.com/postman-docs/v8-api-builder-ref-jump.jpg)

In the upper right of the schema editor are options to beautify the content, wrap text, copy, and search. When you finish editing your schema, click **Save**.

![Save Schema](https://assets.postman.com/postman-docs/v8-wrap-text2-v2.jpg)

> Postman will indicate [validation errors](/docs/designing-and-developing-your-api/validating-elements-against-schema/) as you work on your schema.

### Generating a collection

The Postman API Builder supports API-first development by providing the option to create a Postman collection directly from a schema. Once you have a saved schema, you will see a **Generate Collection** option on the right-hand side of the tabs:

![Schema Editor Options](https://assets.postman.com/postman-docs/v8-generate-collection-button2-v2.jpg)

To create a collection based on your schema, click **Generate Collection**. You can add the collection as documentation, a test suite, an integration test, a monitor, a mock server, or a contract test. The collection will appear in __Collections__ in the left sidebar.

![Generate Collection](https://assets.postman.com/postman-docs/v8-generate-collection-modal2.jpg)

You can also configure how the collection should be generated by clicking **Show advanced settings**.

## Watching an API

The watch option allows you to receive an email/in-app notification when a team member belonging to the same workspace modifies the API for example updating the schema, attaching an element to the API, adding a comment to the API and so on.

Once you've created the API, click the __watch__ option to start watching the API.

![Watch Option](https://assets.postman.com/postman-docs/v8-watch-button2.jpg)

Click the bell icon on the top right corner to view the notification. The popup will indicate further information about the change that was made to the API.

![Notification Watch API](https://assets.postman.com/postman-docs/v8-watch-notification2.jpg)

In addition to this, you will receive an email with the information regarding who has made the change, what the change was, and when it was made.

![Email Notification](https://assets.postman.com/postman-docs/v8-email-watch-email2.jpg)

Click __View schema changelog__ to access the full changelog or __View API__ to view the API in Postman.

> You will not receive notifications for changes made by yourself.

## Developing an API

Once you have a schema in the Postman API Builder, you can develop your API using version tagging, and link it to mock servers, documentation, and environments.

> When you add documentation, test suites, mocks, monitors, and environments, only the elements in the current workspace will be visible. If an element is already linked to an API, it will not be visible.

* [Adding a mock server](#adding-a-mock-server)
    * [Creating a new mock server](#creating-a-new-mock-server)
    * [Adding an existing mock server](#adding-an-existing-mock-server)
    * [Editing a mock server](#editing-a-mock-server)
* [Adding documentation](#adding-documentation)
    * [Creating new documentation](#creating-new-documentation)
    * [Adding existing documentation](#adding-existing-documentation)
* [Adding an environment](#adding-an-environment)

### Adding a mock server

You can link mock servers for a collection to an API, by creating a new mock server, or adding / editing an existing one. From the API Builder **Develop** tab, click **Add Mock Server**.

![Add Mock to Schema](https://assets.postman.com/postman-docs/schema-add-mock.jpg)

#### Creating a new mock server

In the __Add Mock Server__ dropdown, select **Create new mock server**.

<img alt="Add Mock to Schema" src="https://assets.postman.com/postman-docs/mock-server-schema-dropdown.jpg" width="200px"/>

You can base your mock server on different collections:

* **Generate collection from schema**: To create a mock server based on a collection generated from your schema, enter a name, configure how the collection should be generated by clicking **Show advanced settings**, and click **Generate Collection and Continue**
* **Use an existing collection**: Select a collection from the drop-down list and click **Select Collection and Continue**
* **Create a new collection**: To start a new collection for your mock server, enter the requests your collection will contain, and click **Create Collection and Continue**

#### Adding an existing mock server

In the __Add Mock Server__ dropdown, select **Add existing mock server**.

<img alt="Add Existing Mock" src="https://assets.postman.com/postman-docs/schema-existing-mock.jpg" width="300px"/>

Select a mock server from your workspace and click **Add Mock Server**. You will only see available mocks in the list. Your mock server will be added to the API.

![Mock Added](https://assets.postman.com/postman-docs/mock-added-schema.jpg)

You can add mocks to specific [versions of your API](/docs/collaborating-in-postman/versioning-an-api/) or [collection](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/).

#### Editing a mock server

You can edit existing mock servers from an **API** by opening the **Develop** tab then hovering over the server in the **Mock Servers** section, and selecting the edit button.

<img alt="Edit Mock from Schema" src="https://assets.postman.com/postman-docs/edit-mock-schema.jpg" width="200px"/>

Your [mock will open for editing](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) in Postman.

[![api edit mock web](https://assets.postman.com/postman-docs/editmockserver.png)](https://assets.postman.com/postman-docs/editmockserver.png)

You can also copy the URL of your mock server directly to your clipboard by clicking **Copy URL**.

## Adding documentation

You can link the documentation generated from your collections to specific versions of an API.

![Add Docs to Schema](https://assets.postman.com/postman-docs/api-builder-add-documentation.jpg)

### Creating new documentation

In the **API** &gt; **Develop** tab, click **Add Documentation** &gt; **Create new documentation**.

<img alt="Add Docs to Schema" src="https://assets.postman.com/postman-docs/api-builder-create-docs.jpg" width="500px"/>

Specify a name, configure how the collection should be generated by clicking **Show advanced settings**, and click **Generate Collection and Continue**.

### Adding existing documentation

In the **API** &gt; **Develop** tab, click **Add Documentation** &gt; **Add Existing documentation**.

<img alt="Add Docs to Schema" src="https://assets.postman.com/postman-docs/add-docs-schema.jpg" width="300px"/>

Select the collection with the documentation you want to link and click **Add Documentation**. You will only see available collections in the list.

You can add documentation to specific [versions of your API](/docs/collaborating-in-postman/versioning-an-api/). To learn more about versioning and documentation, check out [versioning your docs](/docs/publishing-your-api/documenting-your-api/#versioning-your-docs).

## Adding an environment

You can link specific environments in your workspaces to specific versions of an API. In the __API__ &gt; **Develop** tab, click **Add environment**.

![Add Environment to Schema](https://assets.postman.com/postman-docs/add-env-schema.jpg)

Select an environment from the list and click **Add environment**. You will only see available environments in the list.

<img alt="Add Environment to Schema" src="https://assets.postman.com/postman-docs/choose-env-schema.jpg" width="300px"/>

## Testing an API

You can create collections to use as test suites, integration tests, or contract tests for your API. These collections can be linked to a specific version of your API.

* [Adding a test suite](#adding-a-test-suite)
* [Adding integration tests](#adding-integration-tests)
* [Adding contract tests](#adding-contract-tests)

### Adding a test suite

You can connect a test suite to any API you have defined in the Postman API Builder. In __API__ &gt; **Test** tab, click **Add Test Suite**.

![Schema Test Suite](https://assets.postman.com/postman-docs/add-test-suite.jpg)

You can add a new or existing test suite:

* **Create new test suite**: Enter a name, configure how the collection should be generated by clicking **Show advanced settings**, and click **Generate Test Suite**.
* **Add existing test suite**: Choose an available collection from the list and click **Add Test Suite**. You will only see available collections in the list.

### Adding integration tests

In __API__ &gt; **Test**, click **Add Integration Test** to check if your endpoints work as expected when combined with other APIs or services.

![Schema Integration Tests](https://assets.postman.com/postman-docs/api-builder-add-intregration-test.jpg)

Select a corresponding collection from the list and click **Add Integration Test**. You will only see available collections in the list.

You can add a new or existing integration test:

* **Create new integration test**: Enter a name, configure how the collection should be generated by clicking **Show advanced settings**, and click **Generate Integration Test**.
* **Add existing integration test**: Choose an available collection from the list and click **Add Integration Test**. You will only see available collections in the list.

### Adding contract tests

If you're writing tests to ensure your API is working according to its specification, you can use **Contract tests**. In __API__ &gt; **Test**, click **Add Contract Test**.

![Contract Test Schema](https://assets.postman.com/postman-docs/api-builder-add-contract-test.jpg)

You can add a new or existing contract test:

* **Create new contract test**: Enter a name, configure how the collection should be generated by clicking **Show advanced settings**, and click **Generate Contract Test**.
* **Add existing contract test**: Choose an available collection from the list and click **Add Contract Test**. You will only see available collections in the list.

## Observing an API

You can link monitors running on collections in your current workspace to an API. From the API Builder **Observe** tab, you can [create a new monitor](#creating-a-new-monitor), or [add an existing monitor](#adding-an-existing-monitor).

![Schema Monitors](https://assets.postman.com/postman-docs/schema-monitors.jpg)

### Creating a new monitor

In __API__ &gt; **Observe**, click __Add Monitor__ and choose **Create new monitor**. You can choose between [generating a collection from a schema](#generating-a-collection-from-a-schema), [using an existing collection](#using-an-existing-collection), or [creating a new collection](#creating-a-new-collection).

### Generating a collection from a schema

Specify a name for the collection, configure how the collection should be generated by clicking **Show advanced settings**, then click **Generate Collection and Continue**.

![Create Monitor for Schema](https://assets.postman.com/postman-docs/api-builder-generate-monitor.jpg)

#### Using an existing collection

To create a new monitor on an existing collection, select **Use an existing collection** and choose a collection in the dropdown. Click **Select Collection and Continue**.

![Create Monitor for Schema](https://assets.postman.com/postman-docs/api-builder-monitor-from-collection.jpg)

#### Creating a new collection

To create a new collection to monitor, choose **Create new collection**. Add the requests you plan to monitor, specifying the method and URL, as well as the status code and response time you want to check. Click **Create Collection and Continue**.

![Create Monitor for Schema](https://assets.postman.com/postman-docs/api-builder-monitor-from-scratch.jpg)

#### Adding an existing monitor

You can add an existing monitor to your API. In __API__ &gt; **Observe**, click **Add Monitor** and choose **Add existing monitor**.

![Schema Monitors](https://assets.postman.com/postman-docs/schema-monitors.jpg)

Select a monitor from the list and click **Add Monitor**. You will only available monitors in the list.

<img alt="Schema with Existing Monitor" src="https://assets.postman.com/postman-docs/existing-monitor-schema.jpg" width="300px"/>

To add a monitor to a specific version of your collection, check out how to [set up monitors](/docs/designing-and-developing-your-api/monitoring-your-api/setting-up-monitor/).

## Next steps

For more information on building your APIs in Postman, check out the following resources:

* [Versioning APIs](/docs/collaborating-in-postman/versioning-an-api/)
* [Managing and sharing APIs](/docs/designing-and-developing-your-api/managing-apis/)
* [Viewing and analyzing APIs](/docs/designing-and-developing-your-api/view-and-analyze-api-reports/)
* [Validating schema and elements](/docs/designing-and-developing-your-api/validating-elements-against-schema/)
