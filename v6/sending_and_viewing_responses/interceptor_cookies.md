---

title: "Using interceptor to read and write cookies"
page_id: "interceptor_cookies"
tags: 
  - "chrome"
warning: false
---

Unlike the native apps, the Chrome app is not equipped to handle cookies by itself. You can use the interceptor extension to overcome this. With the interceptor on, you can retrieve cookies set on a particular domain and include cookies while sending requests.

[Click here][0] for instructions on how to install the interceptor. Once you are done, follow the instructions below to work with cookies.

**Retrieving cookies**

1\. Make sure the interceptor is enabled in Postman -- Check the top-right corner.

[![](https://www.getpostman.com/img/v1/docs/interceptor_cookies/interceptor_cookies_1.png)
][1]

2\. In the tests section, you can use the "responseCookies" object. This will return an array of cookie objects. To retrieve a particular name, use "postman.getResponseCookie(cookieName)". This will return a single cookie object. Each cookie object will contain the following properties:

domain, hostOnly, httpOnly, name, path, secure, session, storeId, value

**Setting Cookies**

1\. Make sure the interceptor is enabled.

2\. Include the "Cookie" header in the headers section

eg. Cookie: name=value; name2=value2

3\. Send the request. The cookies you set will be sent by Chrome along with your request.


[0]: http://www.getpostman.com/docs/capture
[1]: https://www.getpostman.com/img/v1/docs/interceptor_cookies/interceptor_cookies_1.png
