---
title: "How do I manage my cookies in the Postman native app?"
order: 3
page_id: "how-do-i-manage-my-cookies-in-the-postman-native-app"
warning: false
---
The Postman native app provides a modal for editing cookies - [Cookie Manager](https://learning.postman.com/docs/postman/sending-api-requests/cookies/) - that are associated with each domain. To open the Manage Cookies modal, click on the Cookies link under the Send button within your Postman app.

Postman's Cookie Manager classifies cookies by the domain they're accessible on. Each cookie is accessible in a string format:
```
<cookieName>=<cookieValue>; path=/; domain=.domain.com; HttpOnly; Secure; Expires=Tue, 19 Jan 2038 03:14:07 GMT;
```
The attributes Postman supports are listed below:
1. cookieName, cookieValue: The name of the cookie and the value stored in it
2. Domain: Specifies which domains Postman will send the cookie to.
3. Path: The URL path (after the domain) that the cookie is restricted to. If the path is /, the cookie will be sent to all requests in the specified domain.
4. HttpOnly: If present, the cookie will not be accessible to the client-side scripts run on the page (using document.cookie in JavaScript, for example). The cookie will only be added in the 'Cookie' header in requests made. This field is irrelevant as far as Postman's behavior is concerned.
5. Secure: If present, the cookie is only sent when the URL begins with "https://", and will not be sent over an insecure collection.
6. Expires: Specifies the time after which the cookie will not be sent by Postman.

To add a cookie, you'll first need to add the domain if it doesn't already exist. Once the domain is added, click the 'Add Cookie' button for that domain, and enter the cookie string in the above mentioned format.

Cookies can be deleted/edit from the domain's cookie list too.

To delete a domain and all cookies associated with it, click the 'X' to the right of the domain name.
