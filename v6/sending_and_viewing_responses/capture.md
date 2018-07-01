---

title: "Capturing requests (Chrome app)"
page_id: "capture"
tags:
  - "chrome"
warning: false
---
### Postman Interceptor

The Postman Interceptor can now capture requests directly from Chrome and save them to Postman's history. This means you can debug your web apps APIs in real time!
There is no need to install or configure a proxy. There are no code changes required either. You can filter requests according to the URL based on a regular expression.
If you have a web app for which you don't have a collection built already, or you just want to debug the APIs that your app is using, this is going to be a huge time saver.
Built on the Chrome platform, the feature works effortlessly across Windows, Linux, Mac and Chrome OS.

Here is what you have to do to get this working:

* Install Postman from the Chrome Web Store (if you don't have it already!)
* Install the [Interceptor extension][0]
* Open Postman
* Click on the Interceptor icon in the toolbar and switch the toggle to "on"
* Browse your app or your website and monitor the requests stream in.

Here is a [quick video][8] of what that ought to look like if everything is working for you.

You can also use the Interceptor to work with cookies - [check out the blog post][1]

**Note on security:** The only entity that the Interceptor communicates with is Postman which then saves it to your history. We have open-sourced Interceptor and you can find the code on [Github][2]. Postman saves all your data locally inside IndexedDB.


[0]: https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo/support?hl=en
[1]: http://blog.getpostman.com/index.php/2014/11/28/using-the-interceptor-to-read-and-write-cookies/
[2]: https://github.com/a85/PostmanInterceptor
[3]: https://chrome.google.com/webstore/detail/postman-rest-client/fhbjgbiflinjbdggehcddcbncdddomop
[4]: http://www.pip-installer.org/en/latest/installing.html
[5]: https://www.getpostman.com/img/v1/docs/source/proxy-1.png
[6]: https://www.getpostman.com/img/v1/docs/source/proxy-2.png
[7]: https://www.getpostman.com/img/v1/docs/source/proxy-3.png
[8]: https://www.youtube.com/watch?v=1Efpi_UIxGE
