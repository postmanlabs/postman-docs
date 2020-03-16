---
title: "How do I access Chrome's cookies in Postman's Chrome App?"
order: 3
page_id: "how-do-i-access-chromes-cookies-in-postmans-chrome-app"
warning: false
---
The Postman Chrome app does not have access to Chrome cookies - it uses an independent cookie store which is not accessible to Postman or to the user. We have developed a companion Chrome extension called the [Interceptor](https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo?hl=en). You can install the Interceptor and enable the Interceptor in Postman to route requests via Chrome. This will ensure that any cookies that saved in Chrome are sent with the request. Navigate [here](http://blog.getpostman.com/2014/11/28/using-the-interceptor-to-read-and-write-cookies/) for more details.

The recommendation would be to switch to the native Postman apps (available [here](https://www.getpostman.com/apps)) for controlling the cookie store. More details can be found [here](https://www.getpostman.com/docs/v6/postman/sending_api_requests/cookies).
