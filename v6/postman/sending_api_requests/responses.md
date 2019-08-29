---
title: "Responses"
page_id: "responses"
warning: false

---

The Postman response viewer helps to ensure the correctness of API responses. An API response consists of the body, headers, and the status code. Postman organizes body and headers in different tabs. The status code and the completion time of the API call is visible next to the tabs.

The response also contains the HTTP specification default description. However, API authors can also add custom messages.

## Saving responses

[![save response button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58538745.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58538745.png)

If a request has been saved in a collection, you can save responses for that request. Once the response has been returned, click the **Save Response** button. Enter a name to call your saved response. All responses saved for a request will be available as an [example](/docs/postman/collections/examples/) whenever you load the request. Click the **Examples** dropdown in the top right to view and select the saved examples. 

[![access saved responses](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/examplesDropdown.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/examplesDropdown.png)

## Viewing responses

The Postman **Body** tab gives you several tools to help you understand the response quickly. You can view the body in one of three views - pretty, raw, and preview.

### Pretty

[![pretty view](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58538803.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58538803.png)

The pretty mode formats JSON or XML responses so they are easier to view. Nobody wants to scroll through a minified single line JSON response looking for that elusive string! Links inside the pretty mode are highlighted and clicking on them can load a GET request in Postman with the link URL. For navigating large responses, click on the down-pointing triangles (▼) on the left to collapse large sections of the response.

For Postman to automatically format the body, make sure the appropriate Content-Type header is returned. If not, you can force formatting through JSON or XML. You can force JSON formatting under the **General** tab in the **SETTINGS** modal. To do so. select "JSON" from the "Language detection" dropdown.

**Finding items in responses:** You can use **CMD/CTRL + F** to open the search bar, and **CMD/CTRL + G** to scroll through results. See the complete set of [keyboard shortcuts](/docs/postman/launching_postman/navigating_postman/).

### Raw

[![raw view](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58538811.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58538811.png)

The raw view is a large text area with the response body. It can indicate whether your response is minified.

### Preview

[![view as preview](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58538940.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58538940.png)

The preview tab renders the response in a sandboxed iframe. Some web frameworks by default return HTML errors and the preview mode is especially helpful. Due to iframe sandbox restrictions, JavaScript and images are disabled in the iframe.

You can maximize the body to occupy the whole Postman window. Use this view if you plan to work with the response for an extended period of time.

If your API endpoint returns an image, Postman will detect and render it automatically. For binary response types, you should select “Send and download” which will let you save the response to your hard disk. You can then view it using the appropriate viewer. This gives you the flexibility to test audio files, PDFs, zip files, or anything that the API throws at you.

## Headers

[![headers tab](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58539000.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58539000.png)

Headers are displayed as key-value pairs under the **Headers** tab. Hovering over the header name can give you a description of the header according to the HTTP spec. If you are sending a HEAD request, Postman will show the headers tab by default.

## Response time

Postman automatically calculates the time it took for the response to arrive from the server. This is useful for some preliminary testing for performance.

## Response size

Postman breaks down the response size into body and headers. The response sizes are approximate.

## Cookies

Cookies sent by the server are visible in a dedicated tab. To [manage cookies](/docs/postman/sending_api_requests/cookies/) in Postman the native apps, use the **MANAGE COOKIES** modal. If you're working in the Postman Chrome app, you can use the [Interceptor extension](/docs/postman/sending_api_requests/interceptor_extension/) to help manage cookies.

## Tests

You can also see the results of the tests that were run against the request. Learn more about [testing](/docs/postman/scripts/test_scripts/) in Postman.
