---
title: "Certificates"
page_id: "certificates"
warning: false

---

Postman’s native apps provide a way to view and set SSL certificates on a per domain basis.

To manage your client certificates, click the wrench icon on the right side of the header toolbar, choose "Settings", and select the **Certificates** tab.

[![certificates tab](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-certificates.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-certificates.png)

## Adding a Client Certificate

To add a new client certificate, click the **Add Certificate** link.

In the **Host** field, enter the domain (without protocol) of the request URL for which you want to use the certificate, for example, [echo.getpostman.com](http://echo.getpostman.com).

You can also specify a custom port to associate with this domain in the **Port** field. This is optional. If left empty, the default HTTPS port (443) will be used.

Choose your client certificate file in the **CRT file** field. Currently, we only support the CRT format. Support for other formats (like PFX) will come soon.

Choose your client certificate key file in the **KEY file** field.

If you used a passphrase while generating the client certificate, you’ll need to supply the passphrase in the **Passphrase** field. Otherwise, leave it blank.

[![add certificate](https://cloud.githubusercontent.com/assets/7689783/19721093/75d764c8-9b8e-11e6-85c2-feff9eea4345.png)](https://cloud.githubusercontent.com/assets/7689783/19721093/75d764c8-9b8e-11e6-85c2-feff9eea4345.png)

Once your certificate is added, it should appear in the client certificates list.

[![client certificates list](https://cloud.githubusercontent.com/assets/7689783/19721340/7a071024-9b8f-11e6-97d2-814aa3075c80.png)](https://cloud.githubusercontent.com/assets/7689783/19721340/7a071024-9b8f-11e6-97d2-814aa3075c80.png)

**NOTE:** You should not have multiple certificates set for the same domain. If you have multiple ones set, only the last one added will be used.

## Using a Certificate

You do not have to perform any extra steps to use a client certificate if it has been added. If you make a request to a configured domain, the certificate will automatically be sent with the request, provided you make the request over HTTPS.

You can verify this. To do so, open up your Postman console (**CMD/CTRL + ALT + C**). You can read more about the [Postman Console](/docs/postman/sending_api_requests/debugging_and_logs/). A new window will open up.

Now, send a request to [`https://echo.getpostman.com/get`](https://docs.postman-echo.com/#078883ea-ac9e-842e-8f41-784b59a33722), keeping the Postman Console open. Notice we’re using ``https`` to make sure the certificate is sent. Once the response arrives, switch over to the Postman console to see your request. If you expand your request, you will be able to see which certificate was sent along with the request.

[![Postman console view](https://cloud.githubusercontent.com/assets/7689783/19721699/0ccdeada-9b91-11e6-98af-eb08f8e68f5b.png)](https://cloud.githubusercontent.com/assets/7689783/19721699/0ccdeada-9b91-11e6-98af-eb08f8e68f5b.png)

## Removing a Certificate

To remove a certificate, use the **Remove** link next to the certificate under the **Certificates** tab in the Settings.

[![remove certificate](https://cloud.githubusercontent.com/assets/7689783/19721340/7a071024-9b8f-11e6-97d2-814aa3075c80.png)](https://cloud.githubusercontent.com/assets/7689783/19721340/7a071024-9b8f-11e6-97d2-814aa3075c80.png)

## Editing a Certificate

You cannot edit a certificate after it has been created. To make changes to it, you will need to remove the certificate and create a new one.  
