---
title: "Setting up custom SAML in Duo"
page_id: "saml_duo"
tags: 
  - "enterprise"
warning: false
---

*Note: only an admin of your Duo organization can create the application.*

### Setting up a custom SAML application in Duo

1.   Head over to the applications page from the Duo dashboard. Click the **Protect an Application** button.
     [![duo dashboard](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/duo_dashboard.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/duo_dashboard.png)  

2.   Search for "SAML - Service Provider" and click on the **Protect this Application** link.
     [![duo protect](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/duo_protect.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/duo_protect.png)

3.   Enter `Postman` as the service provider. The service provider details can be found on the Postman [Edit Team Details page](https://go.postman.co/settings/team/general). Other fields can either be left blank or set to the default value.
     [![duo provider](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/duo_provider.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/duo_provider.png)
 
     | **Field** | **Value** |
     |---|---|
     | Service Provider Name | Postman |
     | Entity ID | *collect it from the Postman team details page* |
     | Assertion Consumer Service | *collect it from the Postman team details page* |
     | NameID format | EmailAddress |

4.   After configuring the service provider details, click the **Save Configuration** button.
     [![duo save](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/duo_save.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/duo_save.png)

5.   Download the configuration file.
     [![duo download](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/duo_download.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/duo_download.png)
 
6.   Duo requires your cloud application to be added to the Duo Access Gateway. Refer to this [guide for setting this up](https://duo.com/docs/dag-generic).

7.   Once the setup is complete, submit your Identity Provider's details to Postman. Collect the `Identity Provider Single Sign-On URL`, `Identity Provider Issuer`, and `X.509 Certificate` from the Duo configuration page and fill these values in your Postman [Edit Team Details page](https://go.postman.co/settings/team/general) within the **Duo Identity Provider Details** modal. For more details on this last step, review [setting up SSO in Postman](/docs/enterprise/sso/admin_sso). 
