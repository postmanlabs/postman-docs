---

title: "Understanding and working with responses"
page_id: "responses"
tags: 
  - "app"
warning: false
---

Ensuring that the API response is correct is something that you will be doing a lot. The Postman response viewer will make this task much easier for you.

An API response consists of the body, headers and the status code. Postman organizes body and headers in different tabs.
The status code with the time taken for the API call is displayed next to the tabs. You can hover over the status code to get more details about the code.
Mostly it will be the default description as mandated by the HTTP spec but API authors can also add custom messages.

### Saving responses

[![](https://www.getpostman.com/img/v1/docs/thumbs/33.png)
][0]

If a request has been saved in a [collection][1], you can save responses for that request. Once the response has been received, click the "Save response" button. You'll be able to save the response with a name. All responses saved for a request will be available whenever you load the request (above the request URL).
  

### Viewing responses

The Postman body tab gives you several tools to help you make sense of things quickly. The body can be viewed in one of three views - pretty, raw, and preview.

#### Pretty

[![](https://www.getpostman.com/img/v1/docs/thumbs/31.png)
][2]

The pretty mode formats JSON or XML responses so that they are easier to look at. Nobody wants to scroll through a minified single line JSON response looking for that elusive string!
Links inside the pretty mode are highlighted and clicking on them can load a GET request in Postman with the link URL. By clicking on the line numbers on the left you can fold large chunks of the response.
For Postman to automatically format the body, make sure the appropriate Content-Type header is returned. If the API does not do this then you can force formatting through JSON or XML.
You can enable the "Force JSON" setting as well.

Note: You can use Cmd+F / Ctrl+F to open the search bar, and Cmd+G / Ctrl+G to scroll through results. A complete set of keyboard shortcuts can be found [here][3].

#### Raw

[![](https://www.getpostman.com/img/v1/docs/thumbs/11.png)
][4]

The raw view is just a big text area with the response body. It can help to tell whether your response is minified or not.

#### Preview

[![](https://www.getpostman.com/img/v1/docs/thumbs/12.png)
][5]

The preview tab renders the response in a sandboxed iframe. Some web frameworks by default return HTML errors and the preview mode is especially helpful there. Due to iframe sandbox restrictions, Javascript and images are disabled in the iframe.

You can maximize the body to occupy the whole Postman window. In case, you plan on spending a lot of time with the response, this is the way to go.

If your API endpoint returns an image, Postman will detect and render it automatically. For binary response types, you should select "Send and download" which will let you save the response to your hard disk. You can then view it using the appropriate viewer. This gives you the flexibility to test audio files, PDFs, zip files or anything that the API throws at you.

### Headers

[![](https://www.getpostman.com/img/v1/docs/thumbs/13.png)
][6]

Headers are displayed as key/value pairs in the header tab. Hovering over the header name can give you a description of the header according to the HTTP spec. If you are sending a HEAD request, Postman will show the headers tab by default.

### Cookies

Postman v0.8.x can display browser cookies as it shares the same environment with the browser.
For the packaged app, you'll need to enable the [Interceptor][7]. You can then view response cookies in the "Cookies" tab of the response section.
Refer to the [sandbox documentation][8] for info on how to access cookies in the pre-request/test scripts


[0]: https://www.getpostman.com/img/v1/docs/source/33.png
[1]: https://www.getpostman.com/docs/collections
[2]: https://www.getpostman.com/img/v1/docs/source/31.png
[3]: https://www.getpostman.com/docs/texteditor
[4]: https://www.getpostman.com/img/v1/docs/source/11.png
[5]: https://www.getpostman.com/img/v1/docs/source/12.png
[6]: https://www.getpostman.com/img/v1/docs/source/13.png
[7]: https://www.getpostman.com/docs/capture#interceptor
[8]: https://www.getpostman.com/docs/jetpacks_sandbox
