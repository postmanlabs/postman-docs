---
title: 'The API Workflow'
page_id: 'the_api_workflow'
warning: false
---

Once you create an API in Postman, you can link it with other elements, create/import a schema, and be able to perform many other useful tasks. For instance, you will be able to link mock servers, documentation and environments to an API and even be able to use the version tagging feature to tag elements with specific versions (except environments). You will also be able to link test suites, integration tests, and contract tests to specific versions of an API using version tagging.

This section describes the following topics:

* [Defining an API](#defining-an-api)
* [Developing an API](#developing-an-api)
* [Testing an API](#testing-an-api)
* [Observing an API](#observing-an-api)

## Defining an API

In this section, you can define the structure of your API by creating a new schema or importing it from an existing file. You can then define and edit the schema and even change its format and language in the schema editor. You can also generate a collection from the schema. The following section describes two topics:

* [Creating a new schema](#creating-a-new-schema)
* [Importing a file](#importing-a-file)

### Creating a new schema

To create a new schema, click *Add Schema* and select **Create New**. The schema editor opens with default options selected:

[![api schema add](https://assets.postman.com/postman-docs/API-Schema-Editor1d.png)](https://assets.postman.com/postman-docs/API-Schema-Editor1d.png)

The default schema format is 'Open API 3.0' and JSON the default language. To select a different schema, click the down arrow and select a format from the list.

The schema editor provides you options to beautify the content, wrap text, copy text, and search. Once you're done creating your schema, click **Save**. After you save the changes, the **Generate Collection** button is enabled, as illustrated below:

[![api schema add](https://assets.postman.com/postman-docs/API-Schema-Editor2.png)](https://assets.postman.com/postman-docs/API-Schema-Editor2.png)

#### Generating a collection from a schema

This is a powerful feature that will let you jump-start your API workflow by creating collections from a schema. You can start by creating a schema or an API in Postman (sort of API-first development approach), and then start generating collections from the schema. It is so much easier for you to start working with your Schemas in Postman and use it for different workflows (like mocking, documentation, testing and monitoring).

The **Generate Collections** button generates a collection which adheres to your schema and puts it in your workspace sidebar. Postman not only lets you generate a collection but it also enables you to add the collection as documentation, a test suite, and an integration or a contract test - all in one go. Once you click the **Generate Collections** button, the following screen appears:

[![add existing mock](https://assets.postman.com/postman-docs/api-dev/Generate_Collection_Schema1.png)](https://assets.postman.com/postman-docs/api-dev/Generate_Collection_Schema1.png)

People who have repetitive workflows can import their schemas in Postman and can generate collections on the run.

### Importing a file

To import an existing schema from a file, click **Add Schema** and select *Import file*. Navigate to and select the file, then click open. The schema populates in the editor. You can now edit the schema and save your changes.

Schema formats currently supported in Postman:

* OpenAPI 3.0
* OpenAPI 2.0
* OpenAPI 1.0
* RAML 0.8
* RAML 1.0
* GraphQL

Languages supported:

* JSON
* YAML
* XML
* GraphQL SDL

**Note:** Multi-file variants of schemas are currently not supported.

## Developing an API

After adding a schema, you can develop your API by using version tagging to link an element like mock servers, documentation, or environments to a specific version of your API.

**Note:** When you add documentation, test suites, mocks, monitors, environments, etc., only the elements in the current workspace will be visible. If they are already linked to an API, they will not be shown here.

This section describes the following topics:

* [Adding a mock server](#adding-a-mock-server)
* [Adding documentation](#adding-documentation)
* [Adding an environment](#adding-an-environment)

### Adding a mock server

You can link mock servers running on a collection to an API. From the **Develop** tab, you can either create a new mock server or add an existing mock server. This section describes the following two topics:

* [Creating new mock server](#creating-new-mock-server)
* [Adding existing mock server](#adding-existing-mock-server)

#### Creating new mock server

From the **Develop** tab, click **Add Mock Server**.

[![add existing mock](https://assets.postman.com/postman-docs/API-Mock-1.png)](https://assets.postman.com/postman-docs/API-Mock-1.png)

In the above screen, select **Create new mock server**. The following screen appears:

[![add existing mock](https://assets.postman.com/postman-docs/API-Mock-2.png)](https://assets.postman.com/postman-docs/API-Mock-2.png)

Click **Generate collection from schema** to create a mock server on the collection you generated from your schema. Specify a name in **Name your collection** field and click **Generate collection and continue**.

#### Adding existing mock server

From the **Develop** tab, click **Add Mock Server**.

In the above screen, select **Add existing mock server**. The following screen appears:

[![api add mock](https://assets.postman.com/postman-docs/API-AddMock1.png)](https://assets.postman.com/postman-docs/API-AddMock1.png)

In the above screen, select a mock server in your workspace from the list and click **Add Mock Server**. Only available mocks will be shown in this list.

The mock server is now added to the API and appears as illustrated below:

[![api add mock](https://assets.postman.com/postman-docs/API-AddMock1-VersionTag.png)](https://assets.postman.com/postman-docs/API-AddMock1-VersionTag.png)

To understand how versioning influences mock servers, refer to the section

[Versioning an API](/docs/postman/design_and_develop_apis/versioning_an_api/).

To add a mock server to a specific version of your collection, refer to the section [Setting up a mock server](/docs/postman/mock_servers/setting_up_mock/)

## Adding documentation

You can link the documentation generated from your collections to an API using version tagging. In the **Develop** tab, click **Add documentation**. The following screen opens:

[![api add doc](https://assets.postman.com/postman-docs/API-Add-Documentation1.png)](https://assets.postman.com/postman-docs/API-Add-Documentation1.png)

In the above screen, select a corresponding collection from the list with the documentation you want to link and click **Add Documentation**. The documentation is now added to the API. Only available collections will be shown in this list.

To understand how versioning influences documentation, refer to the section [Versioning an API](/docs/postman/design_and_develop_apis/versioning_an_api/).

To learn more about generating and viewing version-specific documentation, refer to the section [Publishing version-specific documentation](/docs/postman/api_documentation/publishing_public_docs/).

## Adding an environment

You can link specific environments in your workspaces to an API using version tagging.
In the **Develop** tab, click **Add an environment**. The following screen opens:

[![api add env](https://assets.postman.com/postman-docs/API-Add-Environment1.png)](https://assets.postman.com/postman-docs/API-Add-Environment1.png)

In the above screen, select an environment from the list and click **Add an environment**. Only available environments will be shown in this list. The environment is now added to the API.

## Testing an API

You can create collections to test your API by creating a collection as a test suite, integration test, or contract test. Then, those collections can be linked to a specific version of an API using version tagging. This section describes the following topics:

* [Adding a test suite](#adding-a-test-suite)
* [Adding integration tests](#adding-integration-tests)
* [Adding contract tests](#adding-contract-tests)

### Adding a test suite

As testing is an integral part of API life cycle, Postman lets you link collections in your workspace as test suites to an API using version tagging.

In the **Test** tab, click **Add a test suite** if you'd like to test your API endpoints for specific behavior. The following screen opens:

[![api add test suite](https://assets.postman.com/postman-docs/API-Add-Test-Suite1.png)](https://assets.postman.com/postman-docs/API-Add-Test-Suite1.png)

In the above screen, select a corresponding collection from the list and click Add Test Suite. Only available collections will be shown in this list. The test suite attached to the collection is now added to the API.

### Adding an integration test

In the **Test** tab, click **Add integration tests** to check if your endpoints work as expected when combined with other APIs or services. The following screen opens:

[![api add integration test](https://assets.postman.com/postman-docs/API-Add-Integration-Test1.png)](https://assets.postman.com/postman-docs/API-Add-Integration-Test1.png)

In the above screen, select a corresponding collection from the list and click **Add Integration Test**. The integration tests attached to the collection are now added to the API. Only available collections will be shown in this list.

### Adding a contract test

If you're writing tests to ensure your APIs are working according to their specification, you can use **Contract tests**. In the **Test** tab, click **Add contract tests**. The following screen opens:

[![api add contract test](https://assets.postman.com/postman-docs/API-Add-Contract-Test1.png)](https://assets.postman.com/postman-docs/API-Add-Contract-Test1.png)

In the above screen, select a corresponding collection from the list and click **Add Contract Test**. The contract tests attached to the collection are now added to the API. Only available collections will be shown in this list.

## Observing an API

You can link your monitors running on collections in your current workspace with an API. From the **Observe** tab, you can either create a new monitor or add an existing monitor. This section describes the following two topics:

* [Creating a new monitor](#creating-a-new-monitor)
* [Adding an existing monitor](#adding-an-existing-monitor)

### Creating new monitor

From the **Observe** tab, click **Create new monitor**. The following screen opens:

[![Create new monitor](https://assets.postman.com/postman-docs/api-dev/Create_New_Monitor1.png)](https://assets.postman.com/postman-docs/api-dev/Create_New_Monitor1.png)

Under **Select requests to monitor**, specify a name in **Name your collection** field and click **Generate collection and continue**.

You can also create a new monitor on an existing collection. To do this, choose an existing collection under the **Use an existing collection** tab and select a collection.

[![Create new monitor](https://assets.postman.com/postman-docs/api-dev/Create_Monitor_Existing_Collection.png)](https://assets.postman.com/postman-docs/api-dev/Create_Monitor_Existing_Collection.png)

Click **Select collection and continue** button.

#### Adding an existing monitor

You can also add an existing monitor to the API.

In the **Observe** tab, click **Add a monitor** and select **Add existing monitor**.

[![api add monitor](https://assets.postman.com/postman-docs/API-Add-Monitor1.png)](https://assets.postman.com/postman-docs/API-Add-Monitor1.png)

In the above screen, select a corresponding monitor from the list and click **Add Monitor**. Only available monitors will be shown in this list. The monitor attached to the collection is now linked to the API.

To add a monitor to a specific version of your collection, refer to the section [Setting up monitors](/docs/postman/monitors/setting_up_monitor/).

---
For more information on APIs, see:

* [Sharing an API](/docs/postman/design_and_develop_apis/sharing_apis/)
* [Versioning an API](/docs/postman/design_and_develop_apis/versioning_an_api/)
* [Managing APIs](/docs/postman/design_and_develop_apis/managing_apis/)
* [Introduction to APIs](/docs/postman/design_and_develop_apis/introduction_to_apis/)
