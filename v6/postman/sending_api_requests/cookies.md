---
title: "Cookies"
page_id: "cookies"
warning: false

---

Postman’s native apps provide a **MANAGE COOKIES** modal that lets you edit cookies that are associated with each domain. 

### Getting to the cookie manager

To open the **MANAGE COOKIES** modal, click the **Cookies** link under the **Send** button.

[![cookies link](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58524551.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58524551.png)

This opens the **MANAGE COOKIES** modal, and displays a list of domains and the cookies associated with them.

[![manage cookies modal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-manage-cookies-1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-manage-cookies-1.png)

### Create a cookie

To add a new cookie for the domain, click on the **Add Cookie** button. A pre-generated cookie string according to the [HTTP State Management standards](https://tools.ietf.org/html/rfc6265#section-4.1){:target="_blank"} will be created, but you can edit it using the text input that appears below it. Clicking the **Save** button will save it to the app’s cookie store under the relevant domain.

[![create a cookie](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-manage-cookies-2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-manage-cookies-2.png)

### Adding a domain

If you want to add a cookie for a domain that isn’t present in the domain list, you can add one by entering the hostname (without the port or the `http://`) in the input box at the top. Clicking the **Add** button will add it to the domain list. You can then add cookies for this domain by selecting it, and entering a new cookie value as described above.

[![add a domain](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-manage-cookies-3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-manage-cookies-3.png)

### Updating a cookie

To update an existing cookie, go to the domain from the domain list, and click the cookie you want to edit. You can edit any property, and hit **Save** to update.

[![update cookie](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-manage-cookies-4.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-manage-cookies-4.png)

**Adding Cookies through Set-Cookie header**

You can also add/edit the cookies through the [Set-Cookie header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie){:target="_blank"} through the response.  

### Properties not yet supported

These are two properties that are not yet supported Postman.

  *   SameSite 
  *   Cookie Prefixes
        *   __Secure-
        *   __Host-
