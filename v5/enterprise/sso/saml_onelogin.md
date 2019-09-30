---
title: "Setting up custom SAML in Onelogin"
page_id: "saml_onelogin"
tags: 
  - "enterprise"
warning: false

---

*Note: only an admin of your Onelogin organization can create the application.*

### Setting up a custom SAML application in Onelogin

1. Head to the Onelogin applications page, and click **ADD APP**.
   [![onelogin add app](https://assets.postman.com/postman-docs/onelogin_add_app.png)](https://assets.postman.com/postman-docs/onelogin_add_app.png)  

2. Search for "SAML" in the **Find Applications** section. Select **SAML Test Connector (IdP) w/encrypt** from the search result. 
   [![onelogin find saml](https://assets.postman.com/postman-docs/onelogin_find_saml.png)](https://assets.postman.com/postman-docs/onelogin_find_saml.png)

3. Update the **Display Name**, and click **SAVE**.
   [![onelogin display name](https://assets.postman.com/postman-docs/onelogin_display.png)](https://assets.postman.com/postman-docs/onelogin_display.png)

4. Enter your Postman service provider details. These details can be found on the Postman [Edit Team Details page](https://go.postman.co/settings/team/general). For the SAML Encryption, download the `X.509 certificate` from the Postman Edit Team Details page as well. Click **SAVE** to proceed.
   [![onelogin service provider](https://assets.postman.com/postman-docs/onelogin_service_provider.png)](https://assets.postman.com/postman-docs/onelogin_service_provider.png)

5. Copy the `Identity Provider Issuer URL`, `SAML 2.0 Endpoint (HTTP)`, and `X.509 Certificate` from here and update the SSO authentication method that you created at Postman [Edit Team Details page](https://go.postman.co/settings/team/general) within the **Onelogin Identity Provider Details** modal. For more details on this last step, review [setting up SSO in Postman](/docs/enterprise/sso/admin_sso). 
   [![onelogin identity provider](https://assets.postman.com/postman-docs/onelogin_identity_provider.png)](https://assets.postman.com/postman-docs/onelogin_identity_provider.png)
