---
title: "Logging in to an SSO team"
page_id: "user_sso"
tags: 
  - "enterprise"
warning: false
---

After a team admin has enabled single sign-on (**SSO**) for Postman, users can log in to Postman with a configured Identity provider in two ways:

1.  Ask the team admin for the **Login URL** that was generated during the SSO configuration. The **Login URL** automatically redirects the user to the configured Identity Provider.

2.  Log in from the Postman app or Postman dashboard and perform these actions:

    * Click "Enterprise user? Sign in here".

    [![sign in to enterprise](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59036606.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59036606.png)
   
    * Enter the team domain to continue. 

    [![team domain](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59037264.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59037264.png)
    
Postman redirects the user to the configured Identity Provider. Here, for example, the **G-Suite** Login screen.  

[![G-Suite login](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59036889.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59036889.png)  

Once you login after a successful authorization, Postman will take you to its sign in screen again:

[![postma sign-in](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Postman_SignIn_Screen.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Postman_SignIn_Screen.png)

Enter your Postman credentials again to login to Postman via your security provider. 

**Note:** First, Postman used your credentials to verify account ownership and link the Postman account to the account of your security provider, say for instance, Okta. Postman prompts you to sign in again to actually let you login securely through your security provider.
