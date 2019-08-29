---
title: "Setting a custom SAML in Azure AD"
page_id: "saml_in_azure_ad"
tags: 
  - "enterprise"
warning: false
---

The steps in this topic describe how to configure a custom SAML application in Azure AD. 

### Configuration

Before you set up a custom SAML application in Azure Active Directory (AD), you must [configure SSO in Postman](/docs/postman_enterprise/sso/admin_sso/). Select "AD FS" as the "Authentication Type" and allow "Identity Provider Details" to remain empty for now.

[![ad fs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-add-authentication-Azure.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-add-authentication-Azure.png)

Next, sign in to the Azure management portal using your Azure Active Directory administrator account. 

Browse to the Azure Active Directory > [Directory] > Enterprise Applications, and select "New Application".

Select "Non-gallery application".

[![non gallery app](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-add-non-gallery-application.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-add-non-gallery-application.png)

Enter the name of the application and click "Add".

[![add postman app](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-add-postman-app.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-add-postman-app.png)

Assign a test user to the application. (Required)

[![azure app quickstart](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-azure-app-quickstart.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-azure-app-quickstart.png)

In the "Configure Single Sign-on" section, select "SAML-based Sign-on" in the "Single Sign-on Mode" dropdown.

[![sso saml](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-single-sign-on-saml.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-single-sign-on-saml.png)

Configure the SAML integration. The table below describes the values of the fields in this configuration.

[![configure saml](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-configure-saml.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-configure-saml.png)

**Table: Field description for SAML integration**

| **Field**          | **Value**         |
| ------------- | ------------- |
| Identifier | The Entity ID for your Postman custom SSO auth. You can find it in the [Team](https://app.getpostman.com/dashboard/teams) page.   |
| Reply URL | The ACS URL for your Postman custom SSO auth. You can find it in the [Team](https://app.getpostman.com/dashboard/teams) page.  |
| User Identifier  | Select user.mail from the dropdown  |

Download the "SAML Signing Certificate" (Base64 format) and click the **Save** button.

After the setup is complete, submit your Identity Provider details to Postman. For more information, see [Intro to SSO](/docs/postman_enterprise/sso/intro_sso/) The table below describes the values of the fields in this configuration.

**Table: Field description for SAML Signing Certificate**

| **Field**         | **Value**         |
| ------------- | ------------- |
| Identity Provider Issuer  | The SAML Entity ID of your Azure AD application.  |
| Identity Provider SSO URL  | The SAML Single Sign-on Service URL of your Azure AD application.    |
| X.509 Certificate   | Contents of  the SAML Signing Certificate file.  |
	
	
	
