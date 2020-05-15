---
title: "Custom documentation domains"
order: 125
page_id: "custom_doc_domains"
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Imgur"
    url: "https://www.postman.com/resources/case-studies/imgur/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Public API documentation"
    url: "/docs/postman-for-publishers/public-api-docs/"

warning: false
---

> __[Custom documentation domains are available on Postman Team, Business, and Enterprise plans.](https://www.postman.com/pricing)__

You can use a custom domain for your API documentation.

## Adding a custom domain

In the Postman web dashboard, select [Team Settings](https://go.postman.co/settings/team/general) from the Team tab.

[![edit view for team](https://assets.postman.com/postman-docs/WS-docs-team-settings2-1.png)](https://assets.postman.com/postman-docs/WS-docs-team-settings2-1.png)

In the __Custom Domains__ section, you will see a list of domains indicated with verification status. Click __+ Add a new domain__.

[![custom domain](https://assets.postman.com/postman-docs/WS-docs-custom-domains-1.png)](https://assets.postman.com/postman-docs/WS-docs-custom-domains-1.png)

In the __Add a Custom Domain__ page, enter the URL of the domain you want to add. Your custom domain can be a full domain or a subdomain. For example, you can use either `example.com` or `api.example.com`.

[![enter custom domain](https://assets.postman.com/postman-docs/WS-docs-add-custom-domain-1.png)](https://assets.postman.com/postman-docs/WS-docs-add-custom-domain-1.png)

Click __Proceed__ to verify the domain.

## Verifying your domain

When you add a custom domain, you will see a modal displaying the DNS records required to verify domain ownership. To verify that you control the domain you're attempting to add, you must add these provided tokens as DNS records to your domain for TXT and CNAME.

[![see TXT and CNAME](https://assets.postman.com/postman-docs/WS-verfication-tokens-1.png)](https://assets.postman.com/postman-docs/WS-verfication-tokens-1.png)

## Adding DNS records

For DNS records, verify the ownership with a DNS web service provider. In a separate browser tab, go to the DNS provider’s console and add the following two new records.

1. A TXT record for `postman-echo.com` verifies the ownership of the domain. The value should be the same as the token shown in the modal. Add the TXT record to the __root domain__. For example if you're adding `example.com` or `api.example.com`, add the TXT record to `example.com`.
2. A CNAME record for `docs.postman-echo.com`, as shown in the modal—this should be `phs.getpostman.com`. Add the CNAME record to the URL that's associated with your public documentation.

To verify the domain, check the __I've added the TXT and CNAME records__ checkbox, then click __Verify Domain__. A confirmation message should indicate that the domain has been verified.

[![verify_domain](https://assets.postman.com/postman-docs/WS-docs-verify-domain-1.png)](https://assets.postman.com/postman-docs/WS-docs-verify-domain-1.png)

> Postman uses LetsEncrypt as an SSL certificate provider to enable hosting public documentation on your domain. LetsEncrypt generates a certificate implicitly if your domain has no CAA records. If your domain has CAA records set, then LetsEncrypt needs an explicit CAA record to issue a certificate for that domain. To enable LetsEncrypt issue this certificate, refer to the [LetsEncrypt Documentation](https://letsencrypt.org/docs/caa).

If you don't want to verify the domain now, click __Verify Later__.

You can remove the custom domain by clicking __Delete Custom Domain__.

> Occasionally, your DNS settings may not take effect immediately. If so, an error message may appear—please try again later.

## Publishing a collection on your custom domain

When your domain is verified, you can use it to [publish your API documentation](/docs/postman/api-documentation/publishing-your-docs/). If you have a collection already published, you can edit it to use the new domain.

[![publish collection](https://assets.postman.com/postman-docs/WS-publish-collection-edit-1.png)](https://assets.postman.com/postman-docs/WS-publish-collection-edit-1.png)

## Next steps

You can make your documentation more discoverable by adding it to the [API Network](/docs/postman-for-publishers/api-network/add-api-network/) or [Postman Templates](/docs/postman-for-publishers/postman-templates/add-templates/).
