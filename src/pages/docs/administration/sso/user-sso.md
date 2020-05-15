---
title: "Logging in to an SSO team"
order: 256
page_id: "user_sso"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to SSO"
    url: "/docs/administration/sso/intro-sso/"
---

> __[SSO is available on Postman Business and Enterprise plans.](https://www.postman.com/pricing)__

When your team admin has enabled single sign-on (**SSO**) for Postman, you can log in to Postman with a [configured Identity provider](/docs/administration/sso/intro-sso/).

Your team admin can provide a **Login URL** that was generated during the SSO configuration. The **Login URL** will automatically redirect you to the configured Identity Provider.

To log in from the Postman app, use the following process:

* Click __Enterprise user? Sign in here__.

[![sign in to enterprise](https://assets.postman.com/postman-docs/59036606.png)](https://assets.postman.com/postman-docs/59036606.png)

* Enter your team domain.

[![team domain](https://assets.postman.com/postman-docs/59037264.png)](https://assets.postman.com/postman-docs/59037264.png)

* Select the relevant account / provider to log in using the __Sign in with...__ button. Postman will redirect you to the configured Identity Provider. Enter your login details to sign in.

[![G-Suite login](https://assets.postman.com/postman-docs/59036889.png)](https://assets.postman.com/postman-docs/59036889.png)  

___On first login from the Postman app, you will need to carry out an additional step to set Postman up to access your identity provider account.___

* Sign in to your provider account as above. Follow your provider's steps to connect the account to Postman.
* Once you've completed your provider's required setup, you will be redirected back to the login screen to access the account inside Postman—_so you'll need to re-enter your password_. Click __Sign in to link your SSO account__.

<img alt="SSO Setup" src="https://assets.postman.com/postman-docs/sso-login.jpg" width="400px"/>
