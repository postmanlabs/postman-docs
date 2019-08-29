---
title: "Visualize API responses"
page_id: "visualizer"
---

`Status: In Canary`

Postman provides a programmable way to visually represent [HTTP responses](/docs/postman/sending_api_requests/responses/) in the "Visualizer" tab inside the response body area. Visualizers open up a whole new way to look at response body beyond the Pretty, Raw and Preview options in Postman.

Visualizers let you focus on the data that matters in an HTTP response. Think of Visualizers as a tool to build a domain-specific representation of API responses. You can use Visualizers to model and show the part of the response data that are relevant for those business use cases, instead of having to look at the raw response data.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Qj7j3QsY2ok?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Use cases

Let's say you have an HTTP endpoint that responds with tabular data. This might be CSV or an array of objects in JSON. This data is better understood by putting it in a table view, rather than looking at an array of objects.

Typically, if you need to visualize this data, you would copy it into a spreadsheet or use another request in Postman to push the data to an external spreadsheet API. With Visualizers, you can now render that data as a table and see it right inside Postman, in the context of the current request. Once you [share that collection](/docs/postman/collections/sharing_collections/) with your team, they will be able to see the same visualization without having to move out of Postman.

[![Visualizer table rendering](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/visualizer_table.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/visualizer_table.png)

But then, real-life API responses often tend to be more sophisticated than simple tabular data. Your API might respond with a JSON or GraphQL payload that lists certain events happening over time. For example, this can be air pollution data in a city over the last month. Such kind of multi-series data is difficult to understand when you look at the raw data itself. You can build a chart that renders that data into a time series. You can even make the visualization interactive to drill-down into the data.

[![Visualizer bar chart rendering](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/visualizer_barchart.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/visualizer_barchart.png)

These are a few teasers to give you an idea of what you can do with Visualizers. Let's take a quick look at how you can implement Visualizers.

## Using Visualizers

Visualizers are written as [scripts](/docs/postman/scripts/intro_to_scripts/) in the Pre-request Script or Tests tab in your requests using the `pm.visualizer.set()` method.

The first argument for `pm.visualizer.set()` is a [Handlebars](https://handlebarsjs.com/) template string. The second argument is data that you can inject into the template. Let's see how you can build a Handlebars template and pass data to it using the `pm.visualizer.set()` method.

### Rendering a simple table

Let's say your API endpoint responds with names and emails of a list of people. The response body parsed to JSON might look like this:

```js
[
    {
        "name": "Alice",
        "email": "alice@example.com"
    },
    {
        "name": "Jack",
        "email": "jack@example.com"
    },
    // ... and so on
]
```

First, we will create a simple Handlebars template which can render a table by looping over an array. Handlebars can do it using the `{{#each}}` tag. You can add this script to your request's Tests tab:

```js
var template = `
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
        </tr>

        {{#each response}}
            <tr>
                <td>{{name}}</td>
                <td>{{email}}</td>
            </tr>
        {{/each}}
    </table>
`;
```

The variable names inside the double curly braces in the template above will be substituted by the data you pass in the `pm.visualizer.set()` method. Now, append this script to the Tests tab:

```js
// Set visualizer
pm.visualizer.set(template, {
    // Pass the response body parsed as JSON as `data`
    response: pm.response.json()
});
```

The `template` variable in the code above is the template string created earlier. The second argument passed here is an object with the `response` property. This is the variable that the template expects in the `{{#each response}}` loop. The value assigned to the `response` property is the response JSON data parsed into an object.

Now, if you hit "Send" for this request, and look under the response body section, you will see a table rendered under the "Visualize" tab.

## Try it out

You can import a collection by clicking the button below. Try sending the requests and look at the "Visualize" tab under response body.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/76c6cb66b91157788af4)

## Visualizer API

The `pm.visualizer.set()` method takes three arguments:

- `layout` (required): The first argument of this method is a [Handlebars](https://handlebarsjs.com/) HTML template string.
- `data`: The second argument is optional data that you can bind to the template. The properties of this object can be accessed in the template.
- `options`: The third argument is an optional `options` object for [`Handlebars.compile()`](https://handlebarsjs.com/reference.html). You can use this to control how Handlebars compiles the template.

Postman uses the information you pass to `pm.visualizer.set()` to render an HTML page in an `iframe` sandbox for Visualizer. You see this rendered HTML page inside the "Visualize" tab. The `layout` string goes into the `<body>` of this rendered page, including any JavaScript, CSS and HTML that the layout template may contain.

### Using your own libraries

You can use any of the libraries in the Postman Sandbox to programmatically generate the layout template. But, Postman does not ship with any data visualization libraries in the Sandbox. You can import any external JavaScript libraries by adding their URL to a `<script>` tag in the template code, just the same way as you would load JavaScript in an HTML file. This lets you visualize the data using any visualization tool of your choice (be it D3.js or something similar).

### Accessing data inside the template

Any `<script>` elements inside the template can access the data that was passed in the second argument to `pm.visualizer.set()` by calling `pm.getData(callback)` method. This is only applicable to JavaScript code in the template. You will find it useful if your Visualizer template includes JavaScript to render a chart.

The `pm.getData(callback)` method takes a callback function as its argument. This callback is called with two arguments: `error` and `data`. The second argument is the `data` that was passed to `pm.visualizer.set()`.
