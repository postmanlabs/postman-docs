---
title: "Intro to SSO"
page_id: "intro_sso"
tags: 
  - "enterprise"
warning: false
---

### What is SSO?

Single Sign-On (SSO) services make it easy to manage your team’s identity across all the SaaS products that you use.

SSO services permit a user to use one set of login credentials (e.g., name/email and password) to access multiple applications. The service authenticates the end user only once for all the applications the user has been given rights to and eliminates further prompts when the user switches applications during the same session.

An example of SSO is Google's implementation of login for their products, such as Gmail, YouTube, and so on. Any user that is logged in to one of Google's products is automatically logged in to their other products as well.

### What are the advantages of SSO?

*   Removes the need for users to remember and manage multiple passwords.
*   Simplifies users' experience by allowing them to log in at one single access point and enjoy a seamless experience across multiple applications.
*   Increases productivity by significantly reducing the password-related support emails.
*   Reduces phishing and thereby making sure users aren't tricked into giving away sensitive information.

### Prerequisites for SSO with Postman

*   Team’s Identity Provider (IdP) must support the SAML 2.0 standard.

### Identity Providers Supported

*   [Okta](https://www.okta.com/)
*   [OneLogin](https://www.onelogin.com/)
*   [Duo](https://duo.com/)
*   [Ping Identity](https://www.pingidentity.com/)
*   [AD FS](https://technet.microsoft.com/en-us/library/cc755226(v=ws.11).aspx)
*   [GSuite](https://gsuite.google.com/products/admin/)
*   Custom SAML

### SSO setup for SAML 2.0 compliant IdPs

Most SAML 2.0 compliant identity providers require the same information about the service provider for setup (Postman is the service provider). These values are specific to a Postman Team and are available after configuring SSO in the Edit Team Page.

Learn more about [setting up SSO](/docs/enterprise/sso/admin_sso).

**Note:** While configuring your IdP, make sure the user’s email address is set in attribute statements.

**Note:** Postman’s form-based authentication mechanism and Google OAuth 2.0 remain enabled even if SSO is configured for a team.
