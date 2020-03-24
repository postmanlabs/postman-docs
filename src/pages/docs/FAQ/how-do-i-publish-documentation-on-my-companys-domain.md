---
title: "How do I publish documentation on my company's domain?"
order: 3
page_id: "how-do-i-publish-documentation-on-my-companys-domain"
warning: false
---
Postman supports hosting published documentation on a domain belonging to your team. For example, if you own "mycompany.com", you can host your published docs on "api.mycompany.com".

You'll first need to add custom domains (you can add up to 5) from the [Postman Dashboard Team section](https://go.postman.co/settings/team/general). Once you add the domain, you'll need to verify the domain by adding a TXT record to "mycompany.com", and a CNAME record on "api.mycompany.com" that points to "phs.getpostman.com". More details are available on our [Learning Center](https://learning.postman.com/docs/postman/api-documentation/custom-doc-domains/).

Once the domain is verified, you'll be able to select the configured domain in the publish screen. This process is outlined in [Publishing your docs](https://learning.postman.com/docs/postman/api-documentation/publishing-your-docs/).

**Note:** Documentation hosting on a custom domain is available only for Postman [Team, Business, and Enterprise plans](https://www.postman.com/pricing).
