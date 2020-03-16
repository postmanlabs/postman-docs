---
title: "My request works in the Postman Chrome app, but not in the OSX/Windows/Linux app"
order: 3
page_id: "my-request-works-in-the-postman-chrome-app-but-not-in-the-osx-windows-linux-app"
warning: false
---
Requests you make through the Postman Chrome app might already be authenticated. Making the same request through the native apps might return a 401 / 403 response code.

The biggest difference between the Chrome app and the native apps is the way cookies are handled. On the Chrome app,

1. If you have the [Interceptor extension](https://www.getpostman.com/docs/postman/sending_api_requests/interceptor_extension) enabled, any requests you send will be made through your browser. All cookies present in your browser's session will be sent with the request. This lets you login to your website in your browser, and make API calls from Postman.

2. If you don't have the Interceptor enabled, Postman will start its own cookie store which will follow the [RFC 6265](https://tools.ietf.org/html/rfc6265) spec.

On native apps, the behavior is similar to the 2nd case listed above, except that you have access to the [Cookie Manager](https://learning.postman.com/docs/postman/sending-api-requests/cookies/), which lets you view, create, and modify cookies store in the app's cookie store. Copying the cookies over from the Chrome cookie store to the app's store should resolve the issue.
