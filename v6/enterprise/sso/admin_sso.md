---
title: "Configuring SSO for a team"
page_id: "admin_sso"
tags: 
  - "enterprise"
warning: false
---

### Configuring SSO

Only an Enterprise team administrator (admin) can configure single sign-on (SSO) for a Postman team.

In [Team Settings](https://app.getpostman.com/dashboard/teams/edit){:target="_blank"} for an enterprise plan, scroll down and click the **Add a new authentication method** button.

In the **ADD AUTENTICATION METHOD** modal, select the type and name of the authentication, and then click the **Proceed** button.

[![authentication method](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-add-authentication-method-2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-add-authentication-method-2.png)

In the "Service Provider Details (Postman)", enter the ID for the Entity, and the URLs for the Login and ACS.
 
In "Identity Provider Details", enter URLs in "Identity Provider Details" and "Identity Provider Issuer". Next provide your authentication certficate from your identity provider in "X.509 Certficate".

Click the **Generate relay state** button to create a parameter to send with a SAML response in an IdP-initiated single sign on. 

Click the checkbox to automatically use this authentication method when the team adds new users.

[![details](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-identity-provider-details.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-identity-provider-details.png)

You can either click the **Configure Later** button to complete the configuration later, or click the **Save Authentication** button to complete the process.

### Managing user accounts

##### **Creating end user accounts**

To add an end user, create an account for the user in the Identity Provider (IdP).

The first time a new user logs in to Postman through the IdP, a Postman account will be created under two conditions—the team has seats available and the "Allow Signups" box was checked during SSO configuration. 

The user will be automatically associated to the team with a **user** role and have access to team resources.

##### **Existing user account**

If a Postman user logs in to Postman through a team's IdP, the user will be automatically added to the team if **one of the following** is true:
   
   *   The team has available slots and "Allow Signups" is enabled.
   *   An admin has invited the user to join the team.

##### **Removing team access**

An admin must remove users from their Postman team to prevent access to shared resources.

