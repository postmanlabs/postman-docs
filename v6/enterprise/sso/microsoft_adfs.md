---
title: "Configuring Microsoft AD FS with Postman SSO"
page_id: "microsoft_adfs"
tags: 
  - "enterprise"
warning: false
---


### Prerequisites

Before you configure Microsoft Active Directory Federation Services (AD FS) to work with Postman Single sign-on (SSO), you must have:

* An Active Directory instance where all users have an email address attribute.
* A SSL certificate from the AD FS server.
* A server that runs Microsoft Server 2012 or 2008. **Note**: This guide uses screenshots from Server 2012R2,
but similar steps should be possible in other versions.

After you meet these basic requirements, install AD FS on your server. 

To configure and install AD FS, see [Deploy and configure AD FS](https://msdn.microsoft.com/en-us/library/gg188612.aspx) in the Microsoft Knowledge Base.

### Configuration

Follow the steps below to configure Microsoft AD FS to work with Postman SSO.

**Step 1** - Create an AD FS authentication scheme in Postman.

To create this scheme authentication, see [Configuring SSO for a team](/docs/postman_enterprise/sso/admin_sso/).

After creating the scheme, collect the values for these fields in the [Team](https://app.getpostman.com/dashboard/teams) page.

| Fields   | AD FS equivalent |
| ------------- | ------------- |
| Assertion Consumer Service URL  |  SAML 2.0 SSO service URL  |
| Encryption Certificate   | Token encryption certificate  |

**Step 2** - Add a Relying Party Trust.

Relying Party Trust (RPT) defines the connection between AD FS and Postman. 

To add a Relying Party Trust: 

  Select the Relying Party Trusts folder from "AD FS Management".

  On the Actions sidebar, click "Add Relying Party Trust" to start the configuration wizard for a new trust. 

  Click the **Claims aware** button in the Welcome screen and then click the **Start** button.

[![relysing party trust](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Relying-Party-Trust.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Relying-Party-Trust.png)

   In the Select Data Source screen, select the last option, "Enter Data About the Party Manually".

[![select data source](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Enter-Data-About-Party-Manually.jpeg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Enter-Data-About-Party-Manually.jpeg)

   Enter a "Display Name" that you'll recognize later. You can optionally add notes.

[![display name](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-display-name.jpeg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-display-name.jpeg)

   Upload the encryption certificate in the [Team](https://app.getpostman.com/dashboard/teams) page or use the default certificate settings.

[![encryption cert](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-configure-cert.jpeg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-configure-cert.jpeg)

   Check the box labeled "Enable Support" for the SAML 2.0 WebSSO protocol. 

   Collect the service URL (ACS URL) from the [Team](https://app.getpostman.com/dashboard/teams) page.

[![acs url](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-ACS-URL.jpeg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-ACS-URL.jpeg)

   Add this Relying party trust identifier: `https://identity.getpostman.com`.

[![replying party trust identifier](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Relying-party-trust-identifier.jpeg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Relying-party-trust-identifier.jpeg)

   Select "Permit everyone".

[![permit everyone](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Permit-everyone.jpeg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Permit-everyone.jpeg)

In the next two screens, the wizard displays an overview of your settings. 

In the final screen, use the **Close** button to exit and open the "Claim Rules" editor.

**Step 3** - Create claim rules.

After the relying party trust has been created, you can create the claim rules.

[![claim rules](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-claim-rules.jpeg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-claim-rules.jpeg)

To create a new rule:

Click "Add Rule". Then create a "Send LDAP Attributes as Claims" rule.

[![add rule](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Add-Rule.jpeg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Add-Rule.jpeg)

Using the Active Directory as your attribute store, perform these actions: 

   In the LDAP Attribute column, select "E-Mail Addresses".
    
   In the Outgoing Claim Type, select "E-Mail Address".
    
[![active directory](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Active-Directory.jpeg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Active-Directory.jpeg)

   Click the **Finish** button to save the new rule.

   Click "Add Rule" to create another new rule and select "Transform an Incoming Claim" as the template.

[![incoming claim](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Transform-Incoming-Claim.jpeg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Transform-Incoming-Claim.jpeg)

In the next screen perform these actions:

   In "Incoming Claim Type", select "E-mail Address".

   In "Outgoing Claim Type", select "Name ID". 

   In "Outgoing Name ID Format", select "Email". 

  **Note**: Use the default setting: "Pass through all claim values".

[![pass through claim values](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Pass-through-all-claim-values.jpeg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Pass-through-all-claim-values.jpeg)

   Click the **Finish** button to create the claim rule.

You should see two transform rules. Click "Edit Claim Issuance Policy" to confirm.

[![edit claim issuance](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Edit-Claim-Issuance-Policy.jpeg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Edit-Claim-Issuance-Policy.jpeg)

**Step 4** - Adjust the trust settings.

To adjust the trust settings, select "RPT" and then select "Properties" in the Actions sidebar.

In the Advanced tab, specify "SHA-1" as the secure hash algorithm.

[![adjusting trust](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Adjusting-trust-settings.jpeg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-Adjusting-trust-settings.jpeg)

**Step 5** - Submit Identity Provider details to Postman.

After the setup, you must submit your Identity Provider's details to Postman.

Download the FederationMetadata.xml. You can generally find this file at: `https://<Federation Service name>/FederationMetadata/2007-06/FederationMetadata.xml`

Collect the Identity Provider Single Sign-On URL, Identity Provider Issuer, and X.509 Certificate from the metadata file and enter these values in the [Team](https://app.getpostman.com/dashboard/teams) page in the AD FS Identity Provider Details dialog.



