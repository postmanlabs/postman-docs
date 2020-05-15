---
title: "Using GraphQL"
order: 30
page_id: "graphql"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Installation and updates"
    url: "/docs/postman/launching-postman/installation-and-updates/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Postman v7.2 Supports GraphQL"
    url: "https://blog.postman.com/2019/06/18/postman-v7-2-supports-graphql/"
  - type: link
    name: "Working with GraphQL template"
    url: "https://explore.postman.com/templates/1692/working-with-graphql"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"

warning: false

---

Many people think of Postman as an advanced REST client. Beyond REST, Postman is a tool that handles any calls sent over HTTP. This means that you can use Postman to interact with protocol-agnostic APIs - such as [SOAP](/docs/postman/sending-api-requests/making-soap-requests/) and GraphQL, which can both utilize HTTP, just like REST.

Learn how Postman supports working with GraphQL.

* Sending GraphQL queries in request body as POST requests
* Support for GraphQL variables
* Creating APIs in Postman with GraphQL schema type
* Query autocompletion integrated with user defined GraphQL schemas

Try it out in Postman with this [example template](https://explore.postman.com/templates/1692/working-with-graphql).

[![graphql template](https://i.imgur.com/Ic70c1G.png)](https://i.imgur.com/Ic70c1G.png)

## Sending a GraphQL query

There's a few ways for you to author and send a GraphQL query in Postman. The following screen illustrates one way to send a GraphQL query using Postman's inbuilt support.

[![graphql body](https://assets.postman.com/postman-docs/GraphQL-Body.png)](https://assets.postman.com/postman-docs/GraphQL-Body.png)

Under the **Body** tab, select the **GraphQL** body type. Enter your GraphQL query in the **Query** editor. This editor enables you to author both queries and variables separately, as described in the following section.

## Working with GraphQL variables

Postman provides a separate interface to author GraphQL variables. After defining your GraphQL query in the **Query** editor, you can author and edit GraphQL variables in the adjacent variables editor.

You can also [use Postman variables](/docs/postman/variables-and-environments/variables/) as data inputs for GraphQL variables using `{{variable}}` syntax.

[![edit variables](https://assets.postman.com/postman-docs/GraphQL-Body-Variables.png)](https://assets.postman.com/postman-docs/GraphQL-Body-Variables.png)

## Importing GraphQL schemas

To [create or import a GraphQL schemas](/docs/postman/design-and-develop-apis/the-api-workflow/) into Postman, complete the following steps.

1. Under the **APIs** tab, click **+ New API**, navigate to the **Define** tab, and then select **Create new** or **Import file**.
[![upload schema](https://i.imgur.com/dCM4jyE.png)](https://i.imgur.com/dCM4jyE.png)
1. Choose **GraphQL** from the dropdown, and click **Save**.
[![save schema](https://i.imgur.com/GCrGiVp.png)](https://i.imgur.com/GCrGiVp.png)

## Autocomplete for GraphQL

Once you create or import a GraphQL schema as described above, you can enable autocompletion within the **GraphQL** query editor.

1. Under the **Collections** tab, return to your **GraphQL** body. Select your schema from the dropdown. You may need to refresh by clicking on the adjacent icon.
[![schema selection](https://i.imgur.com/bhesWgs.png)](https://i.imgur.com/bhesWgs.png)
1. Begin editing your query, and now Postman will suggest autocomplete options from the data within your GraphQL schema.
[![autocomplete](https://i.imgur.com/Ai5cW4q.png)](https://i.imgur.com/Ai5cW4q.png)
