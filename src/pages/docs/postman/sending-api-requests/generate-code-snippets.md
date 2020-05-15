---
title: "Generate code snippets"
order: 29
page_id: "generate_code_snippets"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Intuit"
    url: "https://www.postman.com/resources/case-studies/intuit/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "How to use code snippets in Postman"
    url: "https://www.youtube.com/watch?v=fhfuQGvLPj0"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Writing front-end API code with Postman"
    url: "https://blog.postman.com/2015/08/31/writing-front-end-api-code-with-postman/"

warning: false

---

Once you’ve finalized and saved your request in Postman, you might want to make the same request from your own application. Postman lets you generate snippets of code in various languages and frameworks that will help you do this. Copy the code from Postman, and paste it into your own application.

Click the **Code** link under the blue **Send** button to open the **GENERATE CODE SNIPPETS** modal.

[![generate code link](https://assets.postman.com/postman-docs/58525940.png)](https://assets.postman.com/postman-docs/58525940.png)

## Selecting a language

Use the dropdown menu to select a language or framework - some have multiple options to customize your code snippet.

[![languages dropdown](https://assets.postman.com/postman-docs/WS-select-language.png)](https://assets.postman.com/postman-docs/WS-select-language.png)

If you enable **New Code Generation Mode** under the [general settings](/docs/postman/launching-postman/settings), you will see an additional settings icon at the top of this modal.

[![code gen settings](https://i.imgur.com/DngERAr.png)](https://i.imgur.com/DngERAr.png)

These settings vary by programming language and allow you to customize the way Postman generates these code snippets. Configure these settings to accommodate a project's specific linting requirements, line continuation characters for your operating system, or to suit your personal preferences.

[![code gen specifics](https://i.imgur.com/XRDe6aY.png)](https://i.imgur.com/XRDe6aY.png)

Don't see your language of choice, or is there a setting missing that you'd find useful? Click **Contribute on GitHub** within this modal to contribute to [the open source project](https://github.com/postmanlabs/postman-code-generators).

## Supported languages/frameworks

Postman currently supports the following options:

| **Language**  | **Framework** |
| --- | --- |
| HTTP | None (Raw HTTP request) |
| C | [LibCurl](https://curl.haxx.se/libcurl/c/) |
| cURL | None (Raw [cURL](https://curl.haxx.se/) command) |
| C# | [RestSharp](http://restsharp.org/)|
| Go | Built-in [http package](https://golang.org/pkg/net/http/) |
| Java | [OkHttp](https://github.com/square/okhttp) |
| Java | [Unirest](http://unirest.io/java.html)|
| JavaScript | [jQuery AJAX](http://api.jquery.com/jquery.ajax/)|
| JavaScript | Built-in [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)|
| NodeJS | Built-in [http](https://nodejs.org/api/http.html) module |
| NodeJS | [Request](https://github.com/request/request) |
| NodeJS | [Unirest](http://unirest.io/nodejs.html) |
| Objective-C | Built-in [NSURLSession](https://developer.apple.com/library/ios/documentation/Foundation/Reference/NSURLSession_class/) |
| OCaml | [Cohttp](https://github.com/mirage/ocaml-cohttp) |
| PHP | [HttpRequest](http://php.net/manual/it/httprequest.send.php)|
| PHP | [pecl_http](https://mdref.m6w6.name/http)|
| PHP | Built-in [curl](http://php.net/manual/en/ref.curl.php) |
| Python | Built-in [http.client](https://docs.python.org/3/library/http.client.html) (Python 3) |
| Python | [Requests](http://docs.python-requests.org/en/master/)|
| Ruby | Built-in [NET::Http](http://docs.ruby-lang.org/en/2.0.0/Net/HTTP.html)|
| Shell | [wget](https://www.gnu.org/software/wget/) |
| Shell | [HTTPie](https://github.com/jkbrzt/httpie)|
| Shell | [cURL](https://curl.haxx.se/)|
| Swift | Built-in [NSURLSession](https://developer.apple.com/library/ios/documentation/Foundation/Reference/NSURLSession_class/)|
