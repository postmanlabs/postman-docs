---
title: "Adding and verifying custom domains"
page_id: "adding_and_verifying_custom_domains"
warning: false

---

Postman users with public documentation can publish documentation on their own custom domain.

### Add a custom domain

In the Postman dashboard, select [Team Settings](https://go.postman.co/settings/team/general) in the Team tab.

[![edit view for team](https://assets.postman.com/postman-docs/docs-team-settings2.png)](https://assets.postman.com/postman-docs/docs-team-settings2.png)

Scroll down to the "Custom Domains" section and click the **+ Add a new domain** button. 

Note that the "Custom Domains" section lists each domain and its verification status. You can also see additional details of each custom domain.

[![custom domain](https://assets.postman.com/postman-docs/docs-custom-domains-section.png)](https://assets.postman.com/postman-docs/docs-custom-domains-section.png)

In the **Add a Custom Domain** page, enter the URL of the domain you want to add. Your custom domain can be a full domain or simply a subdomain. For example, you can use either `example.com` or `api.example.com` as your custom domain.

[![enter custom domain](https://assets.postman.com/postman-docs/docs-add-custom-domain.png)](https://assets.postman.com/postman-docs/docs-add-custom-domain.png)

Click the **Proceed** button to verify the domain.

### Verify Domain

To verify a domain, check the box to confirm you added the TXT and CNAME records. Next click the **Verify Domain** button. A message appears to confirm the custom domain has been verified. 

If you choose not to verify the domain now, click the **Verify Later** button. 

In addition if you want to delete the custom domain, click the "Delete Custom Domain" link.

[![verify_domain](https://assets.postman.com/postman-docs/docs-verify-domain.png)](https://assets.postman.com/postman-docs/docs-verify-domain.png)

**Note**: Occasionally, your DNS settings might not take effect immediately. If so, an error message appears. Allow some time to elapse and try again.

### Get verification tokens

Adding a custom domain opens a modal that displays the DNS records required to verify domain ownership. The most important pieces of information in the modal below are the TXT and CNAME records. To verify you control the domain you're attempting to add, you must add these provided tokens as DNS records to your domain.

[![see TXT and CNAME](https://assets.postman.com/postman-docs/docs-verification-tokens.png)](https://assets.postman.com/postman-docs/docs-verification-tokens.png)

### Add DNS records

For DNS records, verify ownership with the DNS web service provider. In a separate browser tab, go to the DNS provider’s console and add two new records.

1.  A TXT record for `postman-echo.com` verifies the ownership of the domain. The value should be the same as the token shown in the modal. You should add the TXT record to the **root domain**. Regardless of whether you're adding `example.com` or `api.example.com`, add the TXT record to `example.com`.
2.  A CNAME record for `docs.postman-echo.com`, as shown in the modal, should be the `phs.getpostman.com` value. You should add the CNAME record to the URL that's associated with your public documentation.


### Publish a collection on the new custom domain

After the domain is verified, you can use this domain to publicly serve your API documentation. If you have a demo collection to publish, go to the Postman web view and publish your collection. You'll see a new option to select a custom domain.

[![publish collection](https://assets.postman.com/postman-docs/docs-publish-domain.png)](https://assets.postman.com/postman-docs/docs-publish-domain.png)

After publishing, go to your custom domain, and see the public documentation in all its glory!
