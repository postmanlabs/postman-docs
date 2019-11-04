---
title: "Setting up custom SAML in Ping Identity"
order: 139
page_id: "saml_ping"
tags: 
  - "enterprise"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to Enterprise"
    url: "https://learning.getpostman.com/docs/postman-enterprise/intro-to-enterprise"
---

*Note: only an admin of your Ping Identity organization can create the application.*

## Setting up a custom SAML application in Ping Identity

1. From the Ping Identity admin console, select the **Applications** tab.
   [![ping_app](https://assets.postman.com/postman-docs/ping_app)](https://assets.postman.com/postman-docs/ping_app)  

1. Under the **My Applications** tab, find the **Add Application** dropdown and select **New SAML Application**.
   [![ping_new_SAML](https://assets.postman.com/postman-docs/ping_new_SAML)](https://assets.postman.com/postman-docs/ping_new_SAML)

1. Fill in the required application details and continue to the next step.
   [![ping_details](https://assets.postman.com/postman-docs/ping_details)](https://assets.postman.com/postman-docs/ping_details)

1. Download the **SAML metadata** file, and enter your Postman service provider details. These details can be found on the Postman [Edit Team Details page](https://go.postman.co/settings/team/general).

    | **Field** | **Value** |
    |---|---|
    | Protocol Version | SAML v 2.0 |
    | Assertion Consumer Service | *collect it from the Postman team details page* |
    | Entity ID | *collect it from the Postman team details page* |

    Leave the remaining fields blank or with the default value, and continue to the next step.
    [![ping service provider](https://assets.postman.com/postman-docs/ping_service_provider)](https://assets.postman.com/postman-docs/ping_service_provider)

1. Add **email** as an application attribute and map it to **Email**. Click **Save & Publish**.
   [![ping email](https://assets.postman.com/postman-docs/ping_email)](https://assets.postman.com/postman-docs/ping_email)

1. After configuring all the details, enable the new SAML application with the **Enable** toggle.
   [![ping toggle](https://assets.postman.com/postman-docs/ping_toggle)](https://assets.postman.com/postman-docs/ping_toggle)

1. Once enabled, the status will show as **Active** for the application.
   [![ping active](https://assets.postman.com/postman-docs/ping_active)](https://assets.postman.com/postman-docs/ping_active)

1. Once the setup is completed, submit your Identity Provider's details to Postman. Copy the `Identity Provider Single Sign-On URL`, `Identity Provider Issuer`, and `X.509 Certificate` from the downloaded **SAML metadata** file and enter these values on the Postman [Edit Team Details page](https://go.postman.co/settings/team/general) within the **Ping Identity Provider Details** modal. For more details on this last step, review [setting up SSO in Postman](/docs/enterprise/sso/admin-sso).
