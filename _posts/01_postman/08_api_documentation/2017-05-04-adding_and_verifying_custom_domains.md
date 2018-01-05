---
categories:
  - "postman"
  - "api_documentation"
title: "Adding and verifying custom domains"
page_id: "adding_and_verifying_custom_domains"
warning: false
---

Postman users with public documentation have the capability to publish documentation on their own custom domain.

### Add a custom domain

From the Postman web view, select [Team Settings](https://app.getpostman.com/dashboard/teams/edit) in the Team tab.

[![edit view for team](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-team-settings.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-team-settings.png)

Scroll down to the "Custom Domains" section. Click the **+ Add a new domain** button. In the Add a Custom Domain page, enter the URL of the domain you want to add. Your custom domain can be a full domain or simply a subdomain. For example, you can use either `example.com` or `api.example.com` as your custom domain.

[![enter custom domain](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-add-custom-domain.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-add-custom-domain.png)

Click the **Proceed** button to verify the domain.

### Verify Domain

To verify a domain, check the box to confirm you added the TXT and CNAME records, and then click the **Verify Domain** button. A message appears to confirm the custom domain has been verified. 

You can also click the **Verify Later** button, if you choose not to verify the domain now. 

In addition if you want to delete the custom domain, click "Delete Custom Domain".

[![verify_domain](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-verify-domain.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-verify-domain.png)

**Note**: Occasionally, your DNS settings might not take effect immediately. If so, an error message appears. Allow some time to elapse and try again.

### Get verification tokens

Adding a custom domain will open a modal displaying DNS records required to verify domain ownership. The most important pieces of information in the modal below are the TXT and CNAME records. In order to verify that you control the domain you are attempting to add, Postman requires that you add these provided tokens as DNS records to your domain.

[![see TXT and CNAME](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-verification-tokens.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-verification-tokens.png)

### Add DNS records

In this case, verify ownership with the DNS web service provider. In a separate browser tab, go to the DNS provider’s console and add two new records.

1.  A TXT record for `postman-echo.com` which verifies the ownership of the domain. The value should be the same as the token shown in the modal. The TXT record should be added to the **root domain**. So regardless of whether you're adding `example.com` or `api.example.com`, the TXT record should be added to `example.com`.
2.  A CNAME record for `docs.postman-echo.com`, the value for which should be `phs.getpostman.com` as shown in the modal. The CNAME record should be added to the URL which will be associated with your public documentation.



### Publish a collection on the new custom domain

After the domain is verified, you can use this domain to publicly serve your API documentation. If you have a demo Collection that you would like to publish, head over to the Postman web view and publish your collection. There is now a new option to select a custom domain.

[![publish collection](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-publish-domain.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-publish-domain.png)

After publishing, head over to your custom domain, and see the public documentation in all its glory!
