---
title: "Using GraphQL"
page_id: "graphql"
warning: false

---

With GraphQL support in Postman, you can now author and send GraphQL queries using the request body. Besides authoring GraphQL requests, you can:

* Create and store GraphQL schemas directly in Postman

* Enable GraphQL query autocompletion (powered by Postman API schemas)

* Edit and author GraphQL variables in a separate view

This section describes the following topics:

* [Sending a GraphQL query](#sending-a-graphql-query)
* [Working with GraphQL variables](#working-with-graphql-variables)
* [Importing GraphQL schemas](#importing-graphql-schemas)
* [Autocomplete for GraphQL](#autocomplete-for-graphql)

## Sending a GraphQL query

Authoring and sending a GraphQL query in Postman is simple. The following screen illustrates sending a GraphQL query in Postman using the new body type *GraphQL*:

[![graphql body](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/GraphQL-Body.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/GraphQL-Body.png)

To send a GraphQL query, ensure you're present in the *Body* tab and then select **GraphQL** (shown above in red circle). Enter your GraphQL query in the *Query* section and send your request. The GraphQL body type provides a rich user interface for authoring and sending requests. The Editor enables you to author both queries and variables separately, as illustrated in the above screen.

## Working with GraphQL variables

Postman provides a separate interface to author GraphQL variables. You can also use Postman variables as data for GraphQL variables using `{{variable}}` syntax.

After defining your GraphQL query in the *Query* editor, you can author and edit GraphQL variables in a separate variables editor, as illustrated below:

[![edit variables](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/GraphQL-Body-Variables.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/GraphQL-Body-Variables.png)

## Importing GraphQL schemas

You can easily create or import GraphQL schemas in Postman. To create a GraphQL API schema in Postman, perform the steps illustrated in the following screen:

[![auto complete](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/GraphQL-Auto1.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/GraphQL-Auto1.gif)

1. Click **APIs** tab, select an API (or create a new API), navigate to the **Define** tab, select **Create new**/**Import file**, choose *GraphQL* from the dropdown and click **Save**.  

1. Go to the **Collections** tab, select the request, navigate to the **Body** tab, and select **GraphQL** body type. Select your schema from the **GraphQL (Draft)** dropdown and start typing your query. Autocomplete lets you view and insert possible completions from the content in your GraphQL schema.

## Autocomplete for GraphQL

Once you create or import a GraphQL schema, save the schema in the API and then select the schema from the dropdown under **GraphQL** body, as illustrated below:

[![schema selection](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/GraphQL-Body-Schema.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/GraphQL-Body-Schema.png)
