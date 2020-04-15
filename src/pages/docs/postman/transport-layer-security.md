---
title: "Transport Layer Security"
order: 234
page_id: "transport-layer-security"
search_keyword: "security, tls, transport-layer-security"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Requests"
    url: "/docs/postman/sending-api-requests/requests/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Security considerations for the Run in Postman button"
    url: "/docs/postman-for-publishers/run-in-postman/security/"
  - type: section 
    name: "Blog"
  - type: link
    name: "Postman is SOC 2 Certified"
    url: "https://blog.postman.com/2019/05/08/postman-is-soc-2-certified/"
  - type: section 
    name: "Case study"
  - type: link
    name: "Envestnet | Yodlee uses Postman to build APIs that return secured bank-level data in real time"
    url: "https://www.postman.com/resources/case-studies/envestnet-yodlee/"
warning: false
---

**NOTE:** On March 15, 2020, Postman deprecated support for Transport Layer Security (TLS) versions 1.0 and 1.1 to align with industry best practices for security and data integrity.

All communications with Postman require TLS v1.2, or higher. Using TLS version 1.2 (or any subsequent version of TLS) increases overall security and makes Postman reliable and safe for everyone.

## Who is affected?
This change will affect anyone who accesses Postman from an older web browser or a device running an older operating system that is not compatible with TLS v1.2. Please note that all Postman apps which are version 6 or higher will be compatible with the changes indicated on this page. 

If you're already accessing Postman using a compatible browser or device, you don't need to make any changes. If you find that your browser or device is not compatible, you will need to update to a supported version to maintain access to Postman after March 15, 2020.

If you're unsure of your browser's TLS capabilities/compatibility, please visit the [Qualys SSL Client Test](https://clienttest.ssllabs.com:8443/ssltest/viewMyClient.html). If you have further questions, please [submit a request to our support team](https://support.getpostman.com/hc/en-us/requests/new).

## Security at Postman
Your data security is important to us. [Learn more about security at Postman.](https://www.postman.com/security)

Different Postman plans have different security features. See the [Postman Plans and Pricing page](https://www.postman.com/pricing) for full details.