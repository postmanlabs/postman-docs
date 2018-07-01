---
title: "Requests"
page_id: "requests"
warning: false

---

You can create and save a request from the:
* Workspaces build view
* New button
* Launch screen


### Using the New Button

1. In the header toolbar, click the **New** button.

[![new button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-HeaderToolBar-new+button1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-HeaderToolBar-new+button1.png)

The "Create New" screen appears.

[![create screen](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-createNew-white-p2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-createNew-white-p2.png)

2. In the SAVE REQUEST screen:
   * Enter a title and description for your request. 
   * Select a collection and save the request in it.
   * Click the **Save** button.
   
After you save the request, you can add the URL, method, headers, and body to the request in the builder.

### Using the Launch screen

The "Create New" screen appears by default when you launch Postman. At the bottom of the screen you can select "Show this window at launch" to indicate whether you want the "Create New" screen to display each time you open Postman.

1. Open Postman.
2. In the "Create New" screen, click "Request".
3. In the SAVE REQUEST screen:
   * Enter a title and description for your request. 
   * Select a collection and save the request in it.
   * Click the **Save** button.


### Using Workspaces build view

In Workspaces, you can [create any kind of HTTP request](/docs/v6/postman/launching_postman/sending_the_first_request){:target="_blank"} quickly. The four parts of an HTTP request are the URL, method, headers, and the body. Postman gives you tools to work with each of these parts.

[![workspace](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-workspace-area.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-workspace-area.png)

### URL

When you enter the request URL in the URL input field, previously-used URLs will show an autocomplete dropdown. 

Click the **Params** button to open the [data editor](/docs/v6/postman/launching_postman/navigating_postman){:target="_blank"} for URL parameters. When you add key-value pairs, Postman combines everything in the query string above. If your URL already has parameters - for example, if you are pasting a URL from some other source. Postman splits the URL into pairs automatically.

**Note**: Parameters you enter in the URL bar or in the data editor will not automatically be URL-encoded. Right click a piece of selected text, and select "EncodeURIComponent" to manually encode the parameter value.

**Note:** Postman automatically adds `http://` to the beginning of the URL if no protocol is specified.

[![url and parameters section](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/requestBuilderUrl.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/requestBuilderUrl.png)

Some API endpoints use path variables. You can work with those in Postman. Below is an example of a URL with a path variable:

```
https://api.library.com/:entity/
```

To edit the path variable, click on **Params** to see it already entered as the key. Update the value as needed. For example, `:entity` can be “user” in this specific case. Postman also gives you suggestions to autocomplete the URL.

[![edit path variables](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/requestBuilderPath.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/requestBuilderPath.png)

### Headers

Clicking on the **Headers** tab shows the headers key-value editor. You can set any string as the header name. The autocomplete dropdown provides suggestions of common HTTP headers, as you type in the fields. Values for the “Content-Type” header are also available in an auto-complete drop down.

[![autocomplete headers](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-headers_white.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-headers_white.png)

**Note on restricted headers**: If you're using the Postman Chrome app, some headers are restricted by Chrome and the XMLHttpRequest specification. However, sending restricted headers is simple using the [Interceptor extension](/docs/v6/postman/sending_api_requests/interceptor_extension){:target="_blank"}.  

### Cookies

You can manage Cookies in native apps by using the cookie manager to edit cookies associated with each domain. To open the modal, click the **Cookies** link under the **Send** button. For more information, see [Managing cookies](/docs/v6/postman/sending_api_requests/cookies){:target="_blank"}.

[![manage cookies modal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-manage-cookies.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-manage-cookies.png)

### Header presets

You can save commonly used headers together in a header preset. Under the **Headers** tab, you can add a header preset to your request when you select "Manage Presets" from the **Presets** dropdown on the right.  

[![preset headers](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-header-presets1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-header-presets1.png)

### Method

Use the control dropdown to change the request method. The request body editor area changes depending on whether the method can have a body attached to it.

[![url methods](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-method-menu.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-method-menu.png)

### Request Body

While constructing requests, you'll work frequently with the request body editor. Postman lets you send almost any kind of HTTP request. The body editor is divided into 4 areas and has different controls, depending on the body type.

**Note about Headers**: When you are sending requests through the HTTP protocol, your server might expect a Content-Type header. The Content-Type header allows the server to parse the body properly. For form-data and urlencoded body types, Postman automatically attaches the correct Content-Type header so you don't have to set it. The raw mode header is set when you select the formatting type. If you manually use a Content-Type header, that value takes precedence over what Postman sets. Postman does not set any header type for the binary body type.

##### **Form-data**

[![form-data](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/requestBuilderForm.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/requestBuilderForm.png)

`multipart/form-data` is the default encoding a web form uses to transfer data. This simulates filling a form on a website, and submitting it. The form-data editor lets you set key-value pairs (using the [data editor](/docs/v6/postman/launching_postman/navigating_postman){:target="_blank"} for your data. You can attach files to a key as well. **Note**: due to restrictions of the HTML 5 spec, files are not stored in history or collections. You will need to select the file again the next time you send the request.

Uploading multiple files each with their own Content-Type is not supported yet.

##### **Urlencoded**

[![urlencoded data](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/requestBuilderUrlEncoded.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/requestBuilderUrlEncoded.png)

This encoding is the same as the one used in URL parameters. You just need to enter key-value pairs and Postman will encode the keys and values properly. Note that you cannot upload files through this encoding mode. There might be some confusion between form-data and urlencoded so make sure to check with your API first.

##### **Raw**

[![raw data](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58960775.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58960775.png)

A raw request can contain anything. Postman doesn’t touch the string entered in the raw editor except replacing [environment variables](/docs/v6/postman/environments_and_globals/variables){:target="_blank"}. Whatever you put in the text area gets sent with the request. The raw editor lets you set the formatting type along with the correct header that you should send with the raw body. You can set the Content-Type header manually too and this will override the Postman defined setting. Selecting XML/JSON in the editor type enables syntax highlighting for your request body and also sets the Content-Type header.

**Tip**: Selecting text in the editor and pressing **CMD/CTRL + B** can beautify the XML/JSON content automatically.

##### **Binary**

[![binary data](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58960827.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58960827.png)

Binary data allows you to send things which you can not enter in Postman, for example, image, audio, or video files. You can send text files as well. As mentioned earlier in the form-data section, you would have to reattach a file if you are loading a request through the history or the collection.
