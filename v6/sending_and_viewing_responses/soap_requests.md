---

title: "Making SOAP requests"
page_id: "soap_requests"
tags: 
  - "app"
warning: false
---

To make SOAP requests using Postman,

1\. Give the SOAP endpoint as the URL. If you are using a WSDL, then give the path to the WSDL as the URL.

2\. Set the request method to POST.

3\. Open the raw editor, and set the body type as "text/xml".

4\. In the request body, the SOAP Envelope, Header and Body tags as required. Start by giving the SOAP Envelope tag, which is necessary, and define all the namespaces. Give the SOAP header and the body. The name of the SOAP method (operation) should be specified in the SOAP body. 

Check out an example [here][0].


[0]: http://blog.getpostman.com/2014/08/22/making-soap-requests-using-postman/
