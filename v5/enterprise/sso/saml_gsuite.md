---
title: "Setting up custom SAML in GSuite"
page_id: "saml_gsuite"
tags: 
  - "enterprise"
warning: false

---

*Note: only an admin of your GSuite organization can create the application.*

### Setting up a custom SAML application in GSuite

1. From the Google admin console, select "Apps". 
   [![gsuite admin](https://assets.postman.com/postman-docs/gsuite_admin.png)](https://assets.postman.com/postman-docs/gsuite_admin.png)  

2. Look for "SAML apps".
   [![gsuite saml apps](https://assets.postman.com/postman-docs/gsuite_saml_apps.png)](https://assets.postman.com/postman-docs/gsuite_saml_apps.png)

3. Create a new SAML app.
   [![gsuite create new](https://assets.postman.com/postman-docs/gsuite_create_new.png)](https://assets.postman.com/postman-docs/gsuite_create_new.png)

4. Click "SETUP MY OWN CUSTOM APP".
   [![gsuite setup](https://assets.postman.com/postman-docs/gsuite_setup.png)](https://assets.postman.com/postman-docs/gsuite_setup.png)

5. Collect the `Identity Provider Single Sign-On URL`, `Identity Provider Issuer` and `X.509 Certificate` from this window, and enter these values into your Postman [Edit Team Details page](https://go.postman.co/settings/team/general) within the **GSuite Identity Provider Details** modal.
   [![gsuite google IdP](https://assets.postman.com/postman-docs/gsuite_google_IdP.png)](https://assets.postman.com/postman-docs/gsuite_google_IdP.png)

6. Enter an application name (e.g. Postman SAML App) and fill out any other optional fields.
   [![gsuite basic info](https://assets.postman.com/postman-docs/gsuite_basic_info.png)](https://assets.postman.com/postman-docs/gsuite_basic_info.png)

7. Enter the Postman service provider details which can be found on the Postman [Edit Team Details page](https://go.postman.co/settings/team/general) within the **GSuite Identity Provider Details** modal. For more details on this last step, review [setting up SSO in Postman](/docs/enterprise/sso/admin_sso). 
   [![gsuite service provider](https://assets.postman.com/postman-docs/gsuite_service_provider.png)](https://assets.postman.com/postman-docs/gsuite_service_provider.png)
 
 | **Field** | **Value** |
 | --- | --- |
 | Single Sign On URL | ACS URL |
 | Audience URI (SP Entity ID) | Entity ID |
 | Name ID Format | EmailAddress |
