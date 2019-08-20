---
title: "Adding and verifying custom domains"
page_id: "adding_and_verifying_custom_domains"
warning: false
---

Postman users with public documentation can publish documentation on their own custom domain. Publishing to custom domains is available in our Postman Pro and Enterprise plans.

## Add a custom domain

In the Postman dashboard, select [Team Settings](https://go.postman.co/settings/team/general) in the Team tab.

[![edit view for team](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-docs-team-settings2-1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-docs-team-settings2-1.png)

Scroll down to the "Custom Domains" section and click the **+ Add a new domain** button.

Note that the "Custom Domains" section lists each domain and its verification status. You can also see additional details of each custom domain.

[![custom domain](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-docs-custom-domains-1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-docs-custom-domains-1.png)

In the **Add a Custom Domain** page, enter the URL of the domain you want to add. Your custom domain can be a full domain or simply a subdomain. For example, you can use either `example.com` or `api.example.com` as your custom domain.

[![enter custom domain](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-docs-add-custom-domain-1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-docs-add-custom-domain-1.png)

Click **Proceed** to verify the domain.

**Note:** Pro teams can add up to 5 domains.

## Verify Domain

To verify a domain, check the box "I've added the TXT and CNAME records". Next click **Verify Domain**. A confirmation message appears stating domain has been verified.

**Note:** Postman uses LetsEncrypt as an SSL certificate provider to enable it to host public documentation on your domain. LetsEncrypt generates a certificate implicitly if your domain has no CAA records. If your domain has CAA records set, then LetsEncrypt needs an explicit CAA record to issue a certificate for that domain. To enable LetsEncrypt issue this certificate, refer to [LetsEncrypt Documentation](https://letsencrypt.org/docs/caa)

If you choose not to verify the domain now, click **Verify Later**.

In addition, if you want to delete the custom domain, click the "Delete Custom Domain" link.

[![verify_domain](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-docs-verify-domain-1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-docs-verify-domain-1.png)

**Note:** Occasionally, your DNS settings may not take effect immediately. If so, an error message appears. Try again after some time.

## Get verification tokens

Adding a custom domain opens a modal that displays the DNS records required to verify domain ownership. The most important pieces of information in the modal below are the TXT and CNAME records. To verify you control the domain you're attempting to add, you must add these provided tokens as DNS records to your domain.

[![see TXT and CNAME](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-verfication-tokens-1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-verfication-tokens-1.png)

## Add DNS records

For DNS records, verify the ownership with a DNS web service provider. In a separate browser tab, go to the DNS provider’s console and add two new records.

1. A TXT record for `postman-echo.com` verifies the ownership of the domain. The value should be the same as the token shown in the modal. You should add the TXT record to the **root domain**. Regardless of whether you're adding `example.com` or `api.example.com`, add the TXT record to `example.com`.
2. A CNAME record for `docs.postman-echo.com`, as shown in the modal, should be the `phs.getpostman.com` value. You should add the CNAME record to the URL that's associated with your public documentation.

## Publish a collection on the new custom domain

After the domain is verified, you can use this domain to publicly serve your API documentation. If you have a demo collection to publish, go to the Postman web view and publish your collection. You'll see a new option to select a custom domain.

[![publish collection](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-publish-collection-edit-1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-publish-collection-edit-1.png)

After publishing, go to your custom domain, and see the public documentation in all its glory!
