---
title: "Visualize API responses"
order: 25
page_id: "visualizer"
search_keyword: "pm.visualizer.set, visualizer.set, pm.response.json, response.json, pm.getData, getData"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Responses"
    url: "/docs/postman/sending-api-requests/responses/"
  - type: link
    name: "Intro to scripts"
    url: "/docs/postman/scripts/intro-to-scripts/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Visualizer demo"
    url: "https://www.youtube.com/watch?v=Qj7j3QsY2ok"
  - type: subtitle
    name: "Templates"
  - type: link
    name: "Visualizer D3 heatmap demo"
    url: "https://explore.postman.com/templates/4166"
  - type: link
    name: "Visualizer table"
    url: "https://explore.postman.com/templates/4220"
  - type: link
    name: "Visualizer D3 examples"
    url: "https://explore.postman.com/templates/4424/"

---

Postman provides a programmable way to visually represent your request [responses](/docs/postman/sending_api_requests/responses/). Visualization code added to the __Tests__ for a request will render in the __Visualize__ tab for the response body, alongside the Pretty, Raw, and Preview options.

[![Visualizer bar chart rendering](https://assets.postman.com/postman-docs/visualizer-barchart.png)](https://assets.postman.com/postman-docs/visualizer-barchart.png)

Visualizers let you present your response data in ways that help to make sense of it. You can use visualizers to model and highlight the information that's relevant to your project, instead of having to read through raw response data. When you [share a Postman collection](/docs/postman/collections/sharing_collections/), other people on your team can also see your visualizations within the context of each request.

## Contents

* [Visualizing response data](#visualizing-response-data)
    * [Adding visualizer code](#adding-visualizer-code)
    * [Rendering HTML](#rendering-html)
    * [Viewing visualizations](#viewing-visualizations)
    * [Adding styling and interaction to visualizations](#adding-styling-and-interaction-to-visualizations)
    * [Using your own libraries](#using-your-own-libraries)
    * [Accessing data inside the template](#accessing-data-inside-the-template)
* [Try it out](#try-it-out)
* [Visualizer API](#visualizer-api)
* [Debugging visualizers](#debugging-visualizers)
* [Next steps](#next-steps)

## Visualizing response data

`video: https://www.youtube.com/watch?v=i1jU-kivApg`

To visualize your response data, add code to the __Pre-request__ or __Tests__ [script](/docs/postman/scripts/intro_to_scripts/) for the request. The `pm.visualizer.set()` method will apply your visualizer code to the data and present it in the __Visualize__ tab when the request runs.

### Adding visualizer code

The `pm.visualizer.set()` method accepts a [Handlebars](https://handlebarsjs.com/) template string as its first parameter. The second parameter should be the data you want to use the template to display. Read on to learn how you can build a Handlebars template and pass data to it.

### Rendering HTML

To see a basic visualizer in action, open the following request in Postman:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/4e3ee3d03f6e2e7fc250)

The example endpoint responds with a list of names and email addresses with the following JSON response body structure:

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

The visualizer code creates a Handlebars template to render a table displaying the names and email addresses by looping over an array. Handlebars can do this with the `{{#each}}` tag. This script runs in the request __Tests__:

```js
var template = `
    <table bgcolor="#FFFFFF">
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

The variable names inside the double curly braces in the template will be substituted by the data passed to the `pm.visualizer.set()` method. To apply the template, the following code completes the __Tests__ script:

```js
// Set visualizer
pm.visualizer.set(template, {
    // Pass the response body parsed as JSON as `data`
    response: pm.response.json()
});
```

The `template` variable is the template string created earlier. The second argument passed is an object defined as the `response` property—this is the variable that the template expects in the `{{#each response}}` loop. The value assigned to the `response` property is the response JSON data from the request parsed as an object.

### Viewing visualizations

__Send__ the request in Postman and select the __Visualize__ tab to see the table.

[![Visualizer table rendering](https://assets.postman.com/postman-docs/visualizer_table.png)](https://app.getpostman.com/run-collection/4e3ee3d03f6e2e7fc250)

The table is rendered as HTML as it would be in a web browser.

### Adding styling and interaction to visualizations

You can load an external stylesheet using `<link>` tags in your HTML template code, using the same technique as adding a stylesheet to a web page. You can also add stylesheets as `<style>` tags. Similarly, you can add interactions using JavaScript code in `<script>` tags inside your template HTML code.

### Using your own libraries

You can use any of the libraries in the [Postman Sandbox](/docs/postman/scripts/postman-sandbox/) to programmatically generate the layout template. To import an additional external JavaScript library, add the URL to a `<script>` tag in the template code, using the same approach you would use to load JavaScript into an HTML file. This lets you render your request data using the visualization tool of your choice (for example D3.js).

### Accessing data inside the template

Any `<script>` elements inside your template can access the data passed in the second argument to `pm.visualizer.set()` by calling the `pm.getData(callback)` method. This is only applicable to JavaScript code in the template, for example if your template includes code to render a chart.

The `pm.getData(callback)` method takes a callback function as its parameter. This callback accepts two parameters: `error` and `data`. The second parameter is the `data` that was passed to `pm.visualizer.set()`.

## Try it out

See more visualizer code working by importing any of the following collections. Use the __Run in Postman__ buttons to import from the documentation for each one. Import the collection > open a request from __Collections__ on the left sidebar in Postman > click __Send__ to run it—you'll see the rendered data in __Visualize__.

* [DIY collection that renders a bar chart using ChartJS](https://documenter.getpostman.com/view/4946945/SVzz4KxB?version=latest)
![Bar Chart](https://assets.postman.com/postman-docs/bar-chart-visualizer.png)
* [Heat map visualization](https://documenter.getpostman.com/view/4946945/SVzw6MYM?version=latest)
![Heat Map](https://assets.postman.com/postman-docs/heat-map-visualizer.png)
* [Various chart and graph examples](https://documenter.getpostman.com/view/2897506/SW7Z2Tkd?version=latest)
![Map Visualizer](https://assets.postman.com/postman-docs/codebase-visualizer-pm.jpg)

## Visualizer API

You can access visualizers from the [Postman API](/docs/postman/postman-api/intro-api/). The `pm.visualizer.set()` method takes three parameters:

* `layout` (required): The first parameter is a [Handlebars](https://handlebarsjs.com/) HTML template string.
* `data` (optional): The second parameter is data that you can bind to the template. The properties of this object can be accessed in the template.
* `options` (optional): The third argument is an `options` object for [`Handlebars.compile()`](https://handlebarsjs.com/api-reference/). You can use this to control how Handlebars compiles the template.

Postman uses the information you pass to `pm.visualizer.set()` to render an HTML page in the sandbox for the visualizer. You will see this rendered HTML page in the __Visualize__ tab. The `layout` string is inserted into the `<body>` of the rendered page, including any JavaScript, CSS, and HTML that the template contains.

## Debugging visualizers

You can debug a visualization in Postman by right-clicking in the __Visualize__ area and choosing __Inspect visualization__. This will open the visualizer Developer Tools attached to the sandbox. You can use it in the same way as debugging a web page.

![Debugging Visualizers in Postman](https://assets.postman.com/postman-docs/visualizer-debugging.gif)

## Next steps

You can try experimenting with visualizations using the collections [listed above](#try-it-out) as a starting point and tweak the code to get the results you need for your own data. For more on how Postman provides access to your response data inside scripts, check out the [Test Examples](/docs/postman/scripts/test-examples/).
