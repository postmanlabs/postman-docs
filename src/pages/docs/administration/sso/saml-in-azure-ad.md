---
title: "Setting a custom SAML in Azure AD"
order: 258
page_id: "saml_in_azure_ad"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to SSO"
    url: "/docs/administration/sso/intro-sso/"
---

The steps in this topic describe how to configure a custom SAML application in Azure AD.

## Configuration

Before you set up a custom SAML application in Azure Active Directory (AD), you must [configure SSO in Postman](/docs/administration/sso/admin-sso/). Select "AD FS" as the "Authentication Type" and allow "Identity Provider Details" to remain empty for now.

[![ad fs](https://assets.postman.com/postman-docs/AzureAD.png)](https://assets.postman.com/postman-docs/AzureAD.png)

Next, sign in to the Azure management portal using your Azure Active Directory administrator account.

Browse to the Azure Active Directory > [Directory] > Enterprise Applications, and select "New Application".

Select "Non-gallery application".

[![non gallery app](https://assets.postman.com/postman-docs/ENT-add-non-gallery-application.png)](https://assets.postman.com/postman-docs/ENT-add-non-gallery-application.png)

Enter the name of the application and click "Add".

[![add postman app](https://assets.postman.com/postman-docs/ENT-add-postman-app.png)](https://assets.postman.com/postman-docs/ENT-add-postman-app.png)

Assign a test user to the application. (Required)

[![azure app quickstart](https://assets.postman.com/postman-docs/ENT-azure-app-quickstart.png)](https://assets.postman.com/postman-docs/ENT-azure-app-quickstart.png)

In the "Configure Single Sign-on" section, select "SAML-based Sign-on" in the "Single Sign-on Mode" dropdown.

[![sso saml](https://assets.postman.com/postman-docs/ENT-single-sign-on-saml.png)](https://assets.postman.com/postman-docs/ENT-single-sign-on-saml.png)

Configure the SAML integration. The table below describes the values of the fields in this configuration.

[![configure saml](https://assets.postman.com/postman-docs/ENT-configure-saml.png)](https://assets.postman.com/postman-docs/ENT-configure-saml.png)

### SAML integration fields

| **Field**          | **Value**         |
| ------------- | ------------- |
| Identifier | The Entity ID for your Postman custom SSO auth. You can find it in the [Team](https://app.getpostman.com/dashboard/teams) page.   |
| Reply URL | The ACS URL for your Postman custom SSO auth. You can find it in the [Team](https://app.getpostman.com/dashboard/teams) page.  |
| User Identifier  | Select user.mail from the dropdown  |

Download the "SAML Signing Certificate" (Base64 format) and click the **Save** button.

After the setup is complete, submit your Identity Provider details to Postman. For more information, see [Intro to SSO](/docs/administration/sso/intro-sso/).

Navigate to your [team settings](https://go.postman.co/settings/team/general) in the Postman Web dashboard. To update the identity provider details, navigate to __Authentication__ &gt; &lt;AzureAuthName&gt; and click __Edit__, then __Proceed__. Fill in the following details:

### Postman custom auth configuration fields

| **Field**         | **Value**         |
| ------------- | ------------- |
| Identity Provider Issuer | The SAML Entity ID of your Azure AD application |
| Identity Provider SSO URL | The SAML Single Sign-on Service URL of your Azure AD application |
| X.509 Certificate | Contents of the SAML Signing Certificate file |

Once your details are complete, click __Generate relay/Regenerate relay__ to create a parameter to send with a SAML response in an IDP-initiated single sign-on. Click __Save Authentication__.

Navigate back to your Postman configuration in Azure AD.

![Azure Postman Config](https://assets.postman.com/postman-docs/ENT-configure-saml.png)

Check the __Show advanced URL settings__ option. This will provide access to the Relay state, where you can enter the parameter you generated in Postman during your custom auth configuration setup.

![Relay State Entry](https://assets.postman.com/postman-docs/azure-relay-state-entry.jpg)

Save your Azure AD configuration. The setup should now be complete, allowing you to login to Postman using SSO via the Azure AD identity provider.
