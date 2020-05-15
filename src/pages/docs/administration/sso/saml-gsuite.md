---
title: "Setting up custom SAML in GSuite"
order: 260
page_id: "saml_gsuite"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to SSO"
    url: "/docs/administration/sso/intro-sso/"
---

*Note: only an admin of your GSuite organization can create the application.*

### Setting up a custom SAML application in GSuite

1. From the Google admin console, select "Apps".
   [![gsuite admin](https://assets.postman.com/postman-docs/gsuite_admin.png)](https://assets.postman.com/postman-docs/gsuite_admin.png)  

1. Look for "SAML apps".
   [![gsuite saml apps](https://assets.postman.com/postman-docs/gsuite_saml_apps.png)](https://assets.postman.com/postman-docs/gsuite_saml_apps.png)

1. Create a new SAML app.
   [![gsuite create new](https://assets.postman.com/postman-docs/gsuite_create_new.png)](https://assets.postman.com/postman-docs/gsuite_create_new.png)

1. Click "SETUP MY OWN CUSTOM APP".
   [![gsuite setup](https://assets.postman.com/postman-docs/gsuite_setup.png)](https://assets.postman.com/postman-docs/gsuite_setup.png)

1. Collect the `Identity Provider Single Sign-On URL`, `Identity Provider Issuer` and `X.509 Certificate` from this window, and enter these values into your Postman [Edit Team Details page](https://go.postman.co/settings/team/general) within the **GSuite Identity Provider Details** modal.
   [![gsuite google IdP](https://assets.postman.com/postman-docs/gsuite_google_IdP.png)](https://assets.postman.com/postman-docs/gsuite_google_IdP.png)

1. Enter an application name (e.g. Postman SAML App) and fill out any other optional fields.
   [![gsuite basic info](https://assets.postman.com/postman-docs/gsuite_basic_info.png)](https://assets.postman.com/postman-docs/gsuite_basic_info.png)

1. Enter the Postman service provider details which can be found on the Postman [Edit Team Details page](https://go.postman.co/settings/team/general) within the **GSuite Identity Provider Details** modal. For more details on this last step, review [setting up SSO in Postman](/docs/administration/sso/admin-sso).
   [![gsuite service provider](https://assets.postman.com/postman-docs/gsuite_service_provider.png)](https://assets.postman.com/postman-docs/gsuite_service_provider.png)

 | **Field** | **Value** |
 | --- | --- |
 | Single Sign On URL | ACS URL |
 | Audience URI (SP Entity ID) | Entity ID |
 | Name ID Format | EmailAddress |
