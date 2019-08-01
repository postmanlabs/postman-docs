---

title: "Working with client certificates"
page_id: "working_with_client_certificates"
tags:
  - "native"
  - "mac"
  - "windows"
  - "linux"
warning: false
---

Postman's [native apps](http://www.getpostman.com/downloads/) provide a SSL Certificate Manager that lets you view / set client certificates on a per domain basis.

To open the Certificate Manager, click the wrench icon on the top right, choose `Settings` (or use the shortcut `Cmd/Ctrl + ,`), then switch over to the `Certificates` tab.

![](https://cloud.githubusercontent.com/assets/7689783/19720908/bbbd8d9c-9b8d-11e6-9286-8e8ba12d9c68.png)

### Adding a Client Certificate

To add a new client certificate, click on `Add Certificate` in the Certificate Manager.

In the `Host` field, enter the domain (without protocol) of the request URL for which you want to use the certificate. For example: `echo.getpostman.com`

You can also specify a custom port to associate with this domain in the `Port` field. This is optional.
If left empty, the default HTTPS port (443) will be used.

Choose your client certificate file in the field called `CRT file`. Currently, we only support the CRT format. Support for other formats (like PFX) will come soon.

Choose your client certificate key file in the field called `KEY file`.

If you used a passphrase while generating the client certificate, you'll need to supply the passphrase in the `Passphrase` field. This is optional.

Once you are finished, click on `Add`.

![](https://cloud.githubusercontent.com/assets/7689783/19721093/75d764c8-9b8e-11e6-85c2-feff9eea4345.png)

Once your certificate is added, it should appear in the Certificate Manager list.

![](https://cloud.githubusercontent.com/assets/7689783/19721340/7a071024-9b8f-11e6-97d2-814aa3075c80.png)

**NOTE:** You should not have multiple certificates set for the same domain. If you have multiple ones set, only the last one set will be used.

### Using a Certificate

You do not have to perform any extra steps to use a client certificate if it is added to the `Certificate Manager`. If you make a request to a configured domain, the certificate will automatically be sent with the request. (Provided you make the request over HTTPS)

You can verify this. To do so, open up your Postman Console (Cmd/Ctrl + Alt + C). You can read more about the Console [here](http://blog.getpostman.com/2016/08/26/the-postman-console/). A new window should open up.

Now, send a request to `https://echo.getpostman.com/get`, keeping the Postman Console open. Notice we're using `https` to make sure the certificate is sent. Once the response arrives, switch over to the Postman Console. You should see your request there. If you expand your request, you should be able to see which certificate was sent along with the request.

![](https://cloud.githubusercontent.com/assets/7689783/19721699/0ccdeada-9b91-11e6-98af-eb08f8e68f5b.png)

### Removing a Certificate

To remove a certificate, you can use the `Remove Certificate` button next to the certificate in the `Certificate Manager`

![](https://cloud.githubusercontent.com/assets/7689783/19721340/7a071024-9b8f-11e6-97d2-814aa3075c80.png)

### Editing a Certificate

You cannot edit a certificate once set. To change it, you'll have to remove the previous certificate and add a new one.

<!---
  TODO:: Demonstrate how to export a certificate from the macOS keychain once we support P12/PFX formats
-->
