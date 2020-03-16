---
title: "How to add CNAME & TXT records while publishing the documentation on a custom domain"
order: 1
page_id: "add-cname-txt-records-publishing-docs-on-custom-domains"
warning: false
---

Below steps are used to add CNAME for your subdomain and TXT records for your domain to verify your domain for custom documentation.


**If your domain is managed in GoDaddy or Enom:**  

Let us assume we are adding a custom domain for "kurmavatar.subdex.space", in this case, the TXT value/ Address is the record data that is provided from Postman.

![Screenshot_2019-12-18_at_2.17.24_PM.png](https://support.getpostman.com/hc/article_attachments/360053390354/Screenshot_2019-12-18_at_2.17.24_PM.png)  

Points to/ Address will always be "phs.getpostman.com" for your custom domain.  

![Screenshot_2019-12-18_at_2.28.32_PM.png](https://support.getpostman.com/hc/article_attachments/360054260533/Screenshot_2019-12-18_at_2.28.32_PM.png)

**If your domain is managed in AWS:** Add the CNAME and TXT as shown below

 **![Txt.png](https://support.getpostman.com/hc/article_attachments/360054261693/Txt.png)   ![Screenshot_2019-12-18_at_3.05.08_PM.png](https://support.getpostman.com/hc/article_attachments/360053392214/Screenshot_2019-12-18_at_3.05.08_PM.png)**


Once the values are added, it usually takes a couple of hours to 24 hours being maximum for the records to be propagated. You can check if the propagation is successful by navigating to this link: [https://www.whatsmydns.net/](https://www.whatsmydns.net/).



![VerifyPropagation.gif](https://support.getpostman.com/hc/article_attachments/360053393154/VerifyPropagation.gif)  

Once you are able to see the values propagated as above, go ahead and click on Verify the domain.**  

Troubleshooting commonly faced error:**  

Q) Error message: \[RRSet of type CNAME with DNS name <subdomain.domain.com> is not permitted as it conflicts with other records with the same DNS name in zone <domain.com>\]  

A) CNAME records cannot co-exist with any other records for a domain hence, you will need to edit the existing record type for your subdomain to CNAME or add a new subdomain.
