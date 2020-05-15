---
title: "Making SOAP requests"
order: 31
page_id: "making_soap_requests"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Making HTTP SOAP Requests with Postman"
    url: "https://blog.postman.com/making-http-soap-requests-with-postman/"
  - type: link
    name: "SOAP: fahrenheit to celsius conversion"
    url: "https://explore.postman.com/templates/7315/soap-fahrenheit-to-celsius-conversion"

warning: false

---

Postman can make various types of HTTP call in addition to REST, including to protocol-agnostic services such as SOAP and [GraphQL](/docs/postman/sending-api-requests/graphql/).

The following steps outline how to make a SOAP request in the Postman app.

## Enter your SOAP endpoint

Open a new request tab in Postman and enter your SOAP endpoint URL in the address field. Try out the following example if you do not have a specific service you want to call:

```
https://www.dataaccess.com/webservicesserver/NumberConversion.wso
```

> Check out the [Public SOAP APIs](https://documenter.getpostman.com/view/8854915/Szf26WHn?version=latest) collection for more SOAP requests you can try.

Select __POST__ from the request method drop-down.

<img src="https://assets.postman.com/postman-docs/soap-method.jpg" alt="SOAP method" width="500px"/>

## Add body data

In the __Body__ tab, select __raw__ and choose __XML__ from the drop-down list.

![SOAP body type](https://assets.postman.com/postman-docs/soap-body-type.jpg)

Enter your XML in the text entry area, as in the following example:

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
      <ubiNum>500</ubiNum>
    </NumberToWords>
  </soap:Body>
</soap:Envelope>
```

Your request body should include the SOAP `Envelope`, `Header`, and `Body` tags as required by the endpoint, as well as any namespaces. The data should include the name of the operation, together with any values you need to post to the service.

![SOAP body XML](https://assets.postman.com/postman-docs/soap-body-xml.jpg)

## Set your request headers

When you select an XML body type, Postman will automatically add a content type header of `application/xml`, but depending on your service provider, for SOAP requests you may need `text/xml`. Open the request __Headers__ and click to show the hidden headers.

Check with your SOAP service whether you need the `application/xml` or `text/xml` header. If you need the `text/xml` header, you will need to override the default setting added by Postman. Deselect the `Content-Type` header Postman added automatically and add a new row with `Content-Type` __Key__ and `text/xml` __Value__.

![SOAP Content Type](https://assets.postman.com/postman-docs/soap-content-type.jpg)

## Send your request

Click __Send__ to make your call to the SOAP service. If your call is successful you will see the response in the lower tab in Postman.

![SOAP response data](https://assets.postman.com/postman-docs/soap-response-data.jpg)

## Next steps

Check out the [SOAP template](https://explore.postman.com/templates/7275/public-soap-apis) for lots of sample requests you can try out in Postman.
