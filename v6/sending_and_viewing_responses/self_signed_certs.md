---

title: "Sending requests to URLs with self signed SSLs"
page_id: "self_signed_certs"
tags: 
  - "app"
  - "mac"
warning: false
---

Self-signed certificates are not verified by a trusted authority. So accessing an API endpoint with something like https:// through Postman would throw up an error.

Below are instructions to work with self signed SSLs. Make sure that you have verified the IP where the certificate comes from. This should only be done for verified IP addresses. This method also works for certificates for localhost. Make sure that the common name of the certificate while generating the certificate is localhost.

**Legacy app**

Go to the root URL in Chrome and allow the browser to access URLs with self-signed certificates. That's all!

If you try to hit a URL with a self-signed SSL certificate in the packaged app, you would get a 500 error as Chrome would decline the certificate so don't do that.

[![](https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_1.png)
][0]

**Chrome packaged app**

1\. Go to the root URL in your browser. For eg. https://localhost

2\. Click on the lock icon on the top left in the URL bar

3\. Open the Connection tab in the dropdown that comes up

4\. Click on certificate information

The dialog that comes up now depends on the operating system you are on. Chrome uses the underlying OS layer to handle SSL certificates. It also avoids adding an exception to Chrome every time you start the browser. 

In Mac OS X,

1\. In the dialog that comes up, click and drag the certificate icon to your desktop to create a \*.cer file

[![](https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_2.png)
][1]

2\. Double click on the file to open the OS X Keychain Access tool

3\. Add the certificate to the System keychain and select "Always trust"

[![](https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_3.png)
][2]

4\. Once the certificate is added, double click it to open more details

[![](https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_4.png)
][3]

5\. Expand the Trust item

6\. Select "Always trust"

[![](https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_5.png)
][4]

7\. Close Keychain Access and restart Chrome

In Windows,

1\. In the certificates window, go to the Details tab

[![](https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_6.png)
][5]

2\. Select Copy to File

3\. Save the certificate file on your disk. Close the certificate window

[![](https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_7.png)
][6]

4\. Go to Chrome \> Settings, search for SSL (chrome://settings/search\#ssl) and click on Manage certificates

[![](https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_8.png)
][7]

5\. Go to the Trusted Root Certification Authorities tab and click on import

6\. Select the file you saved on your disk in step 3

[![](https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_9.png)
][8]

7\. Close this window and restart Chrome

In Linux,

1\. Go to the Details tab

[![](https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_10.png)
][9]

2\. Select Export and save the file on your disk

[![](https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_11.png)
][10]

3\. Go to Chrome \> Settings, search for SSL (chrome://settings/search\#ssl) and click on Manage certificates

4\. Go into the Authorities tab

[![](https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_12.png)
][11]

5\. Import the certificate

6\. Restart Chrome

You should be able to fire requests to the endpoints validated by this certificate. The SSL warning will not show up in Chrome even if you restart the browser. 


[0]: https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_1.png
[1]: https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_2.png
[2]: https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_3.png
[3]: https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_4.png
[4]: https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_5.png
[5]: https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_6.png
[6]: https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_7.png
[7]: https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_8.png
[8]: https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_9.png
[9]: https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_10.png
[10]: https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_11.png
[11]: https://www.getpostman.com/img/v1/docs/self_signed_certs/self_signed_certs_12.png
