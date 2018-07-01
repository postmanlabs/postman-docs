---

title: "Handling redirects"
page_id: "handling_redirects"
tags: 
  - "chrome"
warning: false
---

[![](https://www.getpostman.com/img/v1/docs/thumbs/29-1.png)][0]

By default, Postman will follow the Location header in all 301/302 responses automatically. To disable this behavior, you can set the **Automatically follow redirects** setting to No.

This prevents requests that return a 300-series response to be automatically redirected. If you are on the Chrome app, you'll have to install the Interceptor for this feature to work.

[0]: https://www.getpostman.com/img/v1/docs/source/29-1.png
