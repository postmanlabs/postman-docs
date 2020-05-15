---
title: "Team Settings"
order: 65
page_id: "team_settings"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Collaborating in Postman"
    url: "/docs/postman/collaboration/collaboration-intro/"
  - type: link
    name: "Postman Pricing"
    url: "https://www.postman.com/pricing"

---

The Team Settings page lets you change your team name, team URL, team logo, and billing information. You also can add custom domains and manage your authentication method.  

You can also access team settings in the app via the "Teams" dropdown menu in the upper right corner.
[![Teams](https://assets.postman.com/postman-docs/teamdropdown+new+with+logo.png)](https://assets.postman.com/postman-docs/teamdropdown+new+with+logo.png)

## General

In General settings, you can change your team name and URL.

[![general](https://assets.postman.com/postman-docs/teamSettings-general.jpeg)](https://assets.postman.com/postman-docs/teamSettings-general.jpeg)
  
## Style

In Style settings, you can upload your team logo. Hover over the Team Logo icon and click the Pencil (edit) icon. Then upload your team logo image.

[![style](https://assets.postman.com/postman-docs/teamSetting-style.jpeg)](https://assets.postman.com/postman-docs/teamSetting-style.jpeg)
  
## Billing Details

In Billing Details settings, you can add or change the billing email address, the company name, address, and VAT ID information.

[![billing details](https://assets.postman.com/postman-docs/teamSetting-billingDetails.jpeg)](https://assets.postman.com/postman-docs/teamSetting-billingDetails.jpeg)
  
## Custom Domains

In the Custom Domains settings, you can add a new domain for others to access your published documentation.

Click the **Add a new domain** button and enter the URL of the domain you want to add.

[![custom domain](https://assets.postman.com/postman-docs/WS-teamSetting-customDomain.png)](https://assets.postman.com/postman-docs/WS-teamSetting-customDomain.png)

Next enter the TXT and CNAME settings to the specified domain for verification and verify the domain.

[![verify custom domain](https://assets.postman.com/postman-docs/WS-teamSetting-verifyCustomDomain.png)](https://assets.postman.com/postman-docs/WS-teamSetting-verifyCustomDomain.png)

You can see your domain in the Custom Domain list.

[![custom domain list](https://assets.postman.com/postman-docs/teamSetting-customDomains.jpeg)](https://assets.postman.com/postman-docs/teamSetting-customDomains.jpeg)

> Available domains depend on your [Postman plan level](https://www.postman.com/pricing).

## Authentication

> __[SSO is available on Postman Business and Enterprise plans.](https://www.postman.com/pricing)__

In the Authentication settings, you can choose a Single Sign-on authentication provider to create a custom authentication method for your team.

Click the **Add a new authentication** method button to summon the Add Authentication Method page.

[![auth](https://assets.postman.com/postman-docs/teamSettings-auth.jpeg)](https://assets.postman.com/postman-docs/teamSettings-auth.jpeg)

Select an authentication type and enter an authentication name.

[![add auth](https://assets.postman.com/postman-docs/WS-teamSettings-addAuthMeth.png)](https://assets.postman.com/postman-docs/WS-teamSettings-addAuthMeth.png)

Click the **Proceed** button to configure the identity of your provider.

[![config ID provider](https://assets.postman.com/postman-docs/WS-teamSetting-configIDProvider.png)](https://assets.postman.com/postman-docs/WS-teamSetting-configIDProvider.png)

Add the information in the "Service Provider Details (Postman)" section into your Identity Provider's SSO form and use the generated URLs and certificate to fill in the details for identity provider.

Complete all the fields in the "Identity Provider Details" section and save the authentication.
