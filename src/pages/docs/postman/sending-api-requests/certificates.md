---
title: "Certificates"
order: 28
page_id: "certificates"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Settings"
    url: "/docs/postman/launching-postman/settings/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Set and view SSL certificates with Postman"
    url: "https://blog.postman.com/2017/12/05/set-and-view-ssl-certificates-with-postman/"

warning: false

---

Postman’s native apps provide a way to view and set SSL certificates on a per domain basis.

To manage your client certificates, click the wrench icon on the right side of the header toolbar, choose "Settings", and select the **Certificates** tab.

[![certificates tab](https://assets.postman.com/postman-docs/WS-certificates.png)](https://assets.postman.com/postman-docs/WS-certificates.png)

## Adding a Client Certificate

To add a new client certificate, click the **Add Certificate** link.

In the **Host** field, enter the domain (without protocol) of the request URL for which you want to use the certificate, for example, [echo.getpostman.com](http://echo.getpostman.com).

You can also specify a custom port to associate with this domain in the **Port** field. This is optional. If left empty, the default HTTPS port (443) will be used.

Choose your client certificate file in the **CRT file** field. Currently, Postman only supports the CRT format. Support for other formats (like PFX) will come soon.

Choose your client certificate key file in the **KEY file** field.

If you used a passphrase while generating the client certificate, you’ll need to supply the passphrase in the **Passphrase** field. Otherwise, leave it blank.

[![add certificate](https://assets.postman.com/postman-docs/addcertificate.png)](https://assets.postman.com/postman-docs/addcertificate.png)

Once your certificate is added, it should appear in the client certificates list.

[![client certificates list](https://assets.postman.com/postman-docs/clientcertificateslist.png)](https://assets.postman.com/postman-docs/clientcertificateslist.png)

**NOTE:** You should not have multiple certificates set for the same domain. If you have multiple ones set, only the last one added will be used.

## Using a Certificate

You do not have to perform any extra steps to use a client certificate if it has been added. If you make a request to a configured domain, the certificate will automatically be sent with the request, provided you make the request over HTTPS.

You can verify this. To do so, open up your Postman console (**CMD/CTRL + ALT + C**). You can read more about the [Postman Console](/docs/postman/sending-api-requests/debugging-and-logs/). A new window will open up.

Now, send a request to [`https://echo.getpostman.com/get`](https://docs.postman-echo.com/#078883ea-ac9e-842e-8f41-784b59a33722). Keep the Postman Console open if Postman version is lower than `v7.10`. Notice we’re using `https` to make sure the certificate is sent. Once the response arrives, switch over to the Postman console to see your request. If you expand your request, you will be able to see which certificate was sent along with the request.

[![Postman console view](https://assets.postman.com/postman-docs/postmanconsoleviewcertificates.png)](https://assets.postman.com/postman-docs/postmanconsoleviewcertificates.png)

## Removing a Certificate

To remove a certificate, use the **Remove** link next to the certificate under the **Certificates** tab in the Settings.

[![remove certificate](https://assets.postman.com/postman-docs/removecertificate.png)](https://assets.postman.com/postman-docs/removecertificate.png)

## Editing a Certificate

You cannot edit a certificate after it has been created. To make changes to it, you will need to remove the certificate and create a new one.
