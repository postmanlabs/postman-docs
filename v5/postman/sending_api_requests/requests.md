---
title: "Requests"
page_id: "requests"
warning: false

---

You can create and save a request from the:
* Request builder
* New button
* Launch screen

### Using the request builder
1. In the request builder, select a method and add the request URL.
2. Click the **Save** button.
3. In the SAVE REQUEST screen:
   * Enter a title and description for your request. 
   * Select a collection and save the request in it.
   * Click the **Save** button.

For more information about the request builder, see **Request builder** in this topic below.

### Using the New Button

1. In the header toolbar, click the **New** button.

[![new button](https://assets.postman.com/postman-docs/WS-HeaderToolBar-new+button1.png)](https://assets.postman.com/postman-docs/WS-HeaderToolBar-new+button1.png)

The "Create New" screen appears.

[![create screen](https://assets.postman.com/postman-docs/createNew_white.png)](https://assets.postman.com/postman-docs/createNew_white.png)

2. In the SAVE REQUEST screen:
   * Enter a title and description for your request. 
   * Select a collection and save the request in it.
   * Click the **Save** button.
   
After you save the request, you can add the URL, method, headers, and body to the request in the builder.

### Using the Launch screen

The "Create New" screen appears by default when you launch Postman. (At the bottom of the screen you can select "Show this window at launch" to indicate whether you want the "Create New" screen to display each time you open Postman.

1. Open Postman.
2. In the "Create New" screen, click "Request".
3. In the SAVE REQUEST screen:
   * Enter a title and description for your request. 
   * Select a collection and save the request in it.
   * Click the **Save** button.


### Workspaces

In Workspaces, you can create any kind of HTTP request quickly. The four parts of an HTTP request are the URL, method, headers, and the body. Postman gives you tools to work with each of these parts.

[![workspace](https://assets.postman.com/postman-docs/WS-workspace-area.png)](https://assets.postman.com/postman-docs/WS-workspace-area.png)

### URL

The URL is the first thing that you would be setting for a request. The URL input field stores previously-used URLs and will show an autocomplete dropdown as you begin entering your URL.

Clicking on the** Params** button opens up the [data editor](/docs/postman/launching_postman/navigating_postman/) for entering URL parameters. You can individually add key-value pairs and Postman will combine everything in the query string above. If your URL already has parameters - for example, if you are pasting a URL from some other source, Postman will split the URL into pairs automatically.

**Note:** Parameters you enter in the URL bar or in the data editor will not automatically be URL-encoded. Right click on a piece of selected text, and select "EncodeURIComponent" to manually encode the parameter value.

**Note:** Postman will automatically add `http://` to the beginning of the URL if no protocol is specified.

[![url and parameters section](https://assets.postman.com/postman-docs/requestBuilderUrl.png)](https://assets.postman.com/postman-docs/requestBuilderUrl.png)

Some API endpoints use path variables. You can work with those in Postman. Below is an example of a URL with a path variable:

```
https://api.library.com/:entity/
```

To edit the path variable, click on **Params** to see it already entered as the key. Update the value as needed. For example, `:entity` can be “user” in this specific case. Postman will also give you suggestions to autocomplete the URL.

[![edit path variables](https://assets.postman.com/postman-docs/requestBuilderPath.png)](https://assets.postman.com/postman-docs/requestBuilderPath.png)

### Headers

Clicking on the **Headers** tab will show the headers key-value editor. You can set any string as the header name. The autocomplete dropdown will provide suggestions of common HTTP headers as you type in the fields. Values for the “Content-Type” header are also available in an auto-complete drop down.

[![autocomplete headers](https://assets.postman.com/postman-docs/WS-headers_white.png)](https://assets.postman.com/postman-docs/WS-headers_white.png)

**Note on restricted headers:** If you're using the Postman Chrome app, some headers are restricted by Chrome and the XMLHttpRequest specification. However, sending restricted headers is simple using the [Interceptor extension](/docs/postman/sending_api_requests/interceptor_extension/).  

### Cookies

Cookies can be managed in native apps by using the cookie manager to edit cookies associated with each domain. To open the modal, click the **Cookies** link under the **Send** button. Learn more about [managing cookies](/docs/postman/sending_api_requests/cookies/).

[![manage cookies modal](https://assets.postman.com/postman-docs/cookies_white.png)](https://assets.postman.com/postman-docs/cookies_white.png)

### Header presets

You can save commonly used headers together in a header preset. Under the **Headers** tab, you can add a header preset to your request by selecting "Manage Presets" from the **Presets** dropdown on the right.  

[![preset headers](https://assets.postman.com/postman-docs/headerPreset_white.png)](https://assets.postman.com/postman-docs/headerPreset_white.png)

### Method

Changing the request method is straightforward, using the control dropdown. The request body editor area will change depending on whether the method can have a body attached to it or not.

[![url methods](https://assets.postman.com/postman-docs/WS-method-menu.png)](https://assets.postman.com/postman-docs/WS-method-menu.png)

### Request Body

While constructing requests, you will be working with the request body editor a lot. Postman lets you send almost any kind of HTTP request. The body editor is divided into 4 areas and has different controls depending on the body type.

**Note about Headers:** When you are sending requests through the HTTP protocol, your server might expect a Content-Type header. The Content-Type header allows the server to parse the body properly. For form-data and urlencoded body types, Postman automatically attaches the correct Content-Type header so you don't have to set it. The raw mode header is set when you select the formatting type. If you manually use a Content-Type header, that value takes precedence over what Postman sets. Postman does not set any header type for the binary body type.

##### **Form-data**

[![form-data](https://assets.postman.com/postman-docs/requestBuilderForm.png)](https://assets.postman.com/postman-docs/requestBuilderForm.png)

`multipart/form-data` is the default encoding a web form uses to transfer data. This simulates filling a form on a website, and submitting it. The form-data editor lets you set key-value pairs (using the [data editor](/docs/postman/launching_postman/navigating_postman/)) for your data. You can attach files to a key as well. Note: due to restrictions of the HTML 5 spec, files are not stored in history or collections. You will need to select the file again the next time you send the request.

Uploading multiple files each with their own Content-Type is not supported yet.

##### **Urlencoded**

[![urlencoded data](https://assets.postman.com/postman-docs/requestBuilderUrlEncoded.png)](https://assets.postman.com/postman-docs/requestBuilderUrlEncoded.png)

This encoding is the same as the one used in URL parameters. You just need to enter key-value pairs and Postman will encode the keys and values properly. Note that you cannot upload files through this encoding mode. There might be some confusion between form-data and urlencoded so make sure to check with your API first.

##### **Raw**

[![raw data](https://assets.postman.com/postman-docs/58960775.png)](https://assets.postman.com/postman-docs/58960775.png)

A raw request can contain anything. Postman doesn’t touch the string entered in the raw editor except replacing [environment variables](/docs/postman/environments_and_globals/variables/). Whatever you put in the text area gets sent with the request. The raw editor lets you set the formatting type along with the correct header that you should send with the raw body. You can set the Content-Type header manually too and this will override the Postman defined setting. Selecting XML/JSON in the editor type enables syntax highlighting for your request body and also sets the Content-Type header.

**Tip: **Selecting text in the editor and pressing **CMD/CTRL + B **can beautify the XML/JSON content automatically.

##### **Binary**

[![binary data](https://assets.postman.com/postman-docs/58960827.png)](https://assets.postman.com/postman-docs/58960827.png)

Binary data allows you to send things which you can not enter in Postman, for example, image, audio, or video files. You can send text files as well. As mentioned earlier in the form-data section, you would have to reattach a file if you are loading a request through the history or the collection.
