---

title: "Sending Requests"
page_id: "requests"
tags: 
  - "app"
warning: false
---

The Postman interface is divided into two areas. The sidebar on the left and the request builder on the right. The request builder lets you create almost any kind of request quickly. The four parts of an HTTP request are the URL, method, headers, and the body. Postman gives you tools to work with each of these parts.

[![](https://www.getpostman.com/img/v1/docs/thumbs/2.png)
][0]

### URL

The URL is the first thing that you would be setting for a request. The URL input field stores URLs used previously and will show an auto complete dropdown as you begin entering your URL.
Clicking on the **URL params** button will open up the [key-value editor][1] for entering URL parameters.

> Parameters you enter in the URL bar or in the key/value editor will **not** automatically be URL-encoded. Right click on a piece of selected text, and click **EncodeURIComponent** to manually encode the parameter value.

[![](https://www.getpostman.com/img/v1/docs/thumbs/3.png)
][2]

You can individually add key/value pairs and Postman will combine everything together. If your URL already has parameters - for example, if you are pasting a URL from some other source, Postman will split the URL into pairs automatically.

Some API endpoints use Path variables. You can work with those in Postman.

A path variable will look like the following in the URL. They are part of a segment (between 2 slashes).

`https://api.library.com/:entity/`

To edit it, click on Params and you will see the path variable already entered as the key. You can enter the value as needed for the end point.

For example, **`:entity`** can be "user" or "membership" or "book" in this specific case.   

### Headers

Clicking on the headers toggle will show the headers [key-value editor][1]. You can set any string as the header name. Common headers part of the HTTP spec are available in an auto-complete drop down when you begin typing the header name. Values for the "Content-Type" header are also available in an auto-complete drop down.

[![](https://www.getpostman.com/img/v1/docs/thumbs/4.png)
][3]

#### Restricted headers and cookies

Unfortunately some headers are restricted by Chrome and the XMLHttpRequest specification. The following headers are blocked:

* Accept-Charset
* Accept-Encoding
* Access-Control-Request-Headers
* Access-Control-Request-Method
* Connection
* Content-Length
* Cookie
* Cookie 2
* Content-Transfer-Encoding
* Date
* Expect
* Host
* Keep-Alive
* Origin
* Referer
* TE
* Trailer
* Transfer-Encoding
* Upgrade
* User-Agent
* Via

With Postman version v0.9.6 onwards, sending restricted headers becomes trivial. Follow the steps below:

[![](https://www.getpostman.com/img/v1/docs/thumbs/32.png)
][4]
  
  
* Install the Interceptor extension either by clicking on the Interceptor toggle in Postman or through the
[Chrome Web Store][5]
* Once it's installed, click on the toggle again

That's it! You can now send requests which use these headers.

#### Cookies

As the packaged app runs in a sandbox separately from the browser, it can not access cookies set inside the browser.
This restriction can also be overcome using the Interceptor extension. Postman routes all requests through the Interceptor,
which then uses the browser context to send requests. Cookies set inside the browser are automatically attached to your requests.
[Read the original blog post][6] on Interceptor.

Once the interceptor is enabled, you can also send cookies from Postman. Just set the "Cookie" header, and the cookie will be sent with the request. You can also get access to cookies that are available when the
response is returned. Check out out [blog post][7] for more.

#### Header presets

[![](https://www.getpostman.com/img/v1/docs/thumbs/6.png)
][8]

You can save commonly used headers together in a header preset. You can add a header preset to your request by clicking the "Add preset" button or by selecting the preset from the header dropdown.
  

### Method

Changing the method is straightforward. Just select the method from the select control. The request body editor area will change depending on whether the method can have a body attached to it or not.

The ability to add additional methods and toggling whether a body can be attached to it will be added soon.
  

### Request body

While constructing requests, you would be dealing with the request body editor a lot. Postman lets you send almost any kind of HTTP request (If you can't send something, let us know!). The body editor is divided into 4 areas and has different controls depending on the body type.

#### form-data

[![](https://www.getpostman.com/img/v1/docs/thumbs/10.png)
][9]

`multipart/form-data` is the default encoding a web form uses to transfer data. This simulates filling a form on a website, and submitting it.
The form-data editor lets you set key/value pairs (using the [key-value editor][1]) for your data. You can attach files to a key as well. Do note that due to restrictions of the HTML5 spec, files are not stored in history or collections. You would have to select the file again at the time of sending a request.

#### urlencoded

[![](https://www.getpostman.com/img/v1/docs/thumbs/7.png)
][10]

This encoding is the same as the one used in URL parameters. You just need to enter key/value pairs and Postman will encode the keys and values properly. Note that you can not upload files through this encoding mode. There might be some confusion between form-data and urlencoded so make sure to check with your API first.

#### raw

[![](https://www.getpostman.com/img/v1/docs/thumbs/8.png)
][11]

A raw request can contain anything. Postman doesn't touch the string entered in the raw editor except replacing [environment variables][12]. Whatever you put in the text area gets sent with the request. The raw editor lets you set the formatting type along with the correct header that you should send with the raw body. You can set the Content-Type header manually as well. Normally, you would be sending XML or JSON data here. Get more info about the JSON/XML editor [here][13].

#### binary

[![](https://www.getpostman.com/img/v1/docs/thumbs/9.png)
][14]

binary data allows you to send things which you can not enter in Postman. For example, image, audio or video files. You can send text files as well. As mentioned earlier in the form-data section, you would have to reattach a file if you are loading a request through the history or the collection.


[0]: https://www.getpostman.com/img/v1/docs/source/2.png
[1]: https://www.getpostman.com/docs/keyvalue_editor
[2]: https://www.getpostman.com/img/v1/docs/source/3.png
[3]: https://www.getpostman.com/img/v1/docs/source/4.png
[4]: https://www.getpostman.com/img/v1/docs/source/32.png
[5]: https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo
[6]: http://blog.getpostman.com/index.php/2014/02/11/postman-v0-9-6-access-cookies-and-restricted-headers-plus-better-testing/
[7]: http://blog.getpostman.com/index.php/2014/11/28/using-the-interceptor-to-read-and-write-cookies/
[8]: https://www.getpostman.com/img/v1/docs/source/6.png
[9]: https://www.getpostman.com/img/v1/docs/source/10.png
[10]: https://www.getpostman.com/img/v1/docs/source/7.png
[11]: https://www.getpostman.com/img/v1/docs/source/8.png
[12]: https://www.getpostman.com/docs/environments
[13]: https://www.getpostman.com/docs/texteditor
[14]: https://www.getpostman.com/img/v1/docs/source/9.png
