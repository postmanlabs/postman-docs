---

title: "Generating code snippets"
page_id: "code_snippets"
tags: 
  - "app"
warning: false
---

Once you've finalized and saved your request in Postman, you might want to make the same request from your own application. Postman lets you generate snippets of code in various languages and frameworks that will help you do this. You'll need to click the **Generate Code** link under the blue Send button to access this feature.

![](https://www.getpostman.com/img/v1/docs/source/snippets-1.png)

### Selecting a language

Use the dropdown menu to select a language. Some languages have multiple options - this lets you select different frameworks to make your request from.

![](https://www.getpostman.com/img/v1/docs/source/snippets-2.png)

### Supported languages/frameworks

For now, Postman supports the following options:

| Language | Framework |
|:---------|:----------|
| HTTP | None (Raw HTTP request) |
| C | [LibCurl][0] |
| cURL | None (Raw [cURL][1] command) |
| C\# | [RestSharp][2] |
| Go | Built-in [http package][3] |
| Java | [OkHttp][4] |
| Java | [Unirest][5] |
| JavaScript | [jQuery AJAX][6] |
| JavaScript | Built-in [XHR][7] |
| NodeJS | Built-in [http][8] module |
| NodeJS | [Request][9] |
| NodeJS | [Unirest][10] |
| Objective-C | Built-in [NSURLSession][11] |
| OCaml | [Cohttp][12] |
| PHP | [HttpRequest][13] |
| PHP | [pecl\_http][14] |
| PHP | Built-in [curl][15] |
| Python | Built-in [http.client][16] (Python 3) |
| Python | [Requests][17] |
| Ruby | Built-in [NET::Http][18] |
| Shell | [wget][19] |
| Shell | [HTTPie][20] |
| Shell | [cURL][1] |
| Swift | Built-in [NSURLSession][11] |


[0]: https://curl.haxx.se/libcurl/c/
[1]: https://curl.haxx.se/
[2]: http://restsharp.org/
[3]: https://golang.org/pkg/net/http/
[4]: https://github.com/square/okhttp
[5]: http://unirest.io/java.html
[6]: http://api.jquery.com/jquery.ajax/
[7]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
[8]: https://nodejs.org/api/http.html
[9]: https://github.com/request/request
[10]: http://unirest.io/nodejs.html
[11]: https://developer.apple.com/library/ios/documentation/Foundation/Reference/NSURLSession_class/
[12]: https://github.com/mirage/ocaml-cohttp
[13]: http://php.net/manual/it/httprequest.send.php
[14]: https://mdref.m6w6.name/http
[15]: http://php.net/manual/en/ref.curl.php
[16]: https://docs.python.org/3/library/http.client.html
[17]: http://docs.python-requests.org/en/master/
[18]: http://docs.ruby-lang.org/en/2.0.0/Net/HTTP.html
[19]: https://www.gnu.org/software/wget/
[20]: https://github.com/jkbrzt/httpie
