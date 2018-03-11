---
title: "Setting a Custom_SAML_in_Azure_AD"
page_id: "saml_in_azure_ad"
tags: 
  - "enterprise"
warning: false
---



To configure a custom SSO for your Postman Team, select AD FS as the Authentication Type. You can leave the Identity Provider Details empty for now.

Sign into the Azure management portal using your Azure Active Directory administrator account, and browse to the Azure Active Directory > [Directory] > Enterprise Applications, and select New Application

Select Non-gallery application

[![API lifecycle](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-add-non-gallery-application.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-add-non-gallery-application.png)

In the menu that shows up, enter the name of the application and click on Add.

[![API lifecycle](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-add-postman-app.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-add-postman-app.png)

Then assign a test user to the application. This is a required step.

[![API lifecycle](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-azure-app-quickstart.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-azure-app-quickstart.png)

Then head over to the Configure Single Sign-on section and select SAML-based Sign-on from the Single Sign-on Mode dropdown.

[![API lifecycle](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-single-sign-on-saml.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-single-sign-on-saml.png)

Configure the SAML integration.

[![API lifecycle](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-configure-saml.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-configure-saml.png)

| Field         | Value         |
| ------------- | ------------- |
| Identifier | The Entity ID for your Postman custom SSO auth. You can find it in the Postman team details page   |
| Reply URL | The ACS URL for your Postman custom SSO auth. You can find it in the Postman team details page  |
| User Identifier  | Select user.mail from the dropdown  |


Download the SAML Signing Certificate (Base64 format) and save.

Once the setup is complete, submit your Identity Provider details to Postman. For more details on this last step, review setting up SSO in Postman.

| Field         | Value         |
| ------------- | ------------- |
| Identity Provider Issuer  | The SAML Entity ID of your Azure AD application.  |
| Identity Provider SSO URL  | The SAML Single Sign-on Service URL of your Azure AD application.    |
| X.509 Certificate   | Contents of  the SAML Signing Certificate file.  |
	
	
	
