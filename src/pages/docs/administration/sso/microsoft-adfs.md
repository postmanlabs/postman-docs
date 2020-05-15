---
title: "Configuring Microsoft AD FS with Postman SSO"
order: 257
page_id: "microsoft_adfs"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to SSO"
    url: "/docs/administration/sso/intro-sso/"
---


## Prerequisites

Before you configure Microsoft Active Directory Federation Services (AD FS) to work with Postman Single sign-on (SSO), you must have:

* An Active Directory instance where all users have an email address attribute.
* A SSL certificate from the AD FS server.
* A server that runs Microsoft Server 2012 or 2008. **Note**: This guide uses screenshots from Server 2012R2,
but similar steps should be possible in other versions.

After you meet these basic requirements, install AD FS on your server.

To configure and install AD FS, see [Deploy and configure AD FS](https://msdn.microsoft.com/en-us/library/gg188612.aspx) in the Microsoft Knowledge Base.

## Configuration

Follow the steps below to configure Microsoft AD FS to work with Postman SSO.

**Step 1** - Create an AD FS authentication scheme in Postman.

To create this scheme authentication, see [Configuring SSO for a team](/docs/administration/sso/admin-sso/).

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

[![relysing party trust](https://assets.postman.com/postman-docs/ENT-Relying-Party-Trust.png)](https://assets.postman.com/postman-docs/ENT-Relying-Party-Trust.png)

   In the Select Data Source screen, select the last option, "Enter Data About the Party Manually".

[![select data source](https://assets.postman.com/postman-docs/ENT-Enter-Data-About-Party-Manually.jpeg)](https://assets.postman.com/postman-docs/ENT-Enter-Data-About-Party-Manually.jpeg)

   Enter a "Display Name" that you'll recognize later. You can optionally add notes.

[![display name](https://assets.postman.com/postman-docs/ENT-display-name.jpeg)](https://assets.postman.com/postman-docs/ENT-display-name.jpeg)

   Upload the encryption certificate in the [Team](https://app.getpostman.com/dashboard/teams) page or use the default certificate settings.

[![encryption cert](https://assets.postman.com/postman-docs/ENT-configure-cert.jpeg)](https://assets.postman.com/postman-docs/ENT-configure-cert.jpeg)

   Check the box labeled "Enable Support" for the SAML 2.0 WebSSO protocol.

   Collect the service URL (ACS URL) from the [Team](https://app.getpostman.com/dashboard/teams) page.

[![acs url](https://assets.postman.com/postman-docs/ENT-ACS-URL.jpeg)](https://assets.postman.com/postman-docs/ENT-ACS-URL.jpeg)

   Add this Relying party trust identifier: `https://identity.getpostman.com`.

[![replying party trust identifier](https://assets.postman.com/postman-docs/ENT-Relying-party-trust-identifier.jpeg)](https://assets.postman.com/postman-docs/ENT-Relying-party-trust-identifier.jpeg)

   Select "Permit everyone".

[![permit everyone](https://assets.postman.com/postman-docs/ENT-Permit-everyone.jpeg)](https://assets.postman.com/postman-docs/ENT-Permit-everyone.jpeg)

In the next two screens, the wizard displays an overview of your settings.

In the final screen, use the **Close** button to exit and open the "Claim Rules" editor.

**Step 3** - Create claim rules.

After the relying party trust has been created, you can create the claim rules.

[![claim rules](https://assets.postman.com/postman-docs/ENT-claim-rules.jpeg)](https://assets.postman.com/postman-docs/ENT-claim-rules.jpeg)

To create a new rule:

Click "Add Rule". Then create a "Send LDAP Attributes as Claims" rule.

[![add rule](https://assets.postman.com/postman-docs/ENT-Add-Rule.jpeg)](https://assets.postman.com/postman-docs/ENT-Add-Rule.jpeg)

Using the Active Directory as your attribute store, perform these actions:

   In the LDAP Attribute column, select "E-Mail Addresses".
   In the Outgoing Claim Type, select "E-Mail Address".

[![active directory](https://assets.postman.com/postman-docs/ENT-Active-Directory.jpeg)](https://assets.postman.com/postman-docs/ENT-Active-Directory.jpeg)

   Click the **Finish** button to save the new rule.

   Click "Add Rule" to create another new rule and select "Transform an Incoming Claim" as the template.

[![incoming claim](https://assets.postman.com/postman-docs/ENT-Transform-Incoming-Claim.jpeg)](https://assets.postman.com/postman-docs/ENT-Transform-Incoming-Claim.jpeg)

In the next screen perform these actions:

   In "Incoming Claim Type", select "E-mail Address".

   In "Outgoing Claim Type", select "Name ID".

   In "Outgoing Name ID Format", select "Email".

  **Note**: Use the default setting: "Pass through all claim values".

[![pass through claim values](https://assets.postman.com/postman-docs/ENT-Pass-through-all-claim-values.jpeg)](https://assets.postman.com/postman-docs/ENT-Pass-through-all-claim-values.jpeg)

   Click the **Finish** button to create the claim rule.

You should see two transform rules. Click "Edit Claim Issuance Policy" to confirm.

[![edit claim issuance](https://assets.postman.com/postman-docs/ENT-Edit-Claim-Issuance-Policy.jpeg)](https://assets.postman.com/postman-docs/ENT-Edit-Claim-Issuance-Policy.jpeg)

**Step 4** - Adjust the trust settings.

To adjust the trust settings, select "RPT" and then select "Properties" in the Actions sidebar.

In the Advanced tab, specify "SHA-1" as the secure hash algorithm.

[![adjusting trust](https://assets.postman.com/postman-docs/ENT-Adjusting-trust-settings.jpeg)](https://assets.postman.com/postman-docs/ENT-Adjusting-trust-settings.jpeg)

**Step 5** - Submit Identity Provider details to Postman.

After the setup, you must submit your Identity Provider's details to Postman.

Download the FederationMetadata.xml. You can generally find this file at: `https://<Federation Service name>/FederationMetadata/2007-06/FederationMetadata.xml`

Collect the Identity Provider Single Sign-On URL, Identity Provider Issuer, and X.509 Certificate from the metadata file and enter these values in the [Team](https://app.getpostman.com/dashboard/teams) page in the AD FS Identity Provider Details dialog.

**Step 6** Enable the RelayState parameter on your ADFS servers.

* For ADFS 2.0, open the following file in a text editor:

```
%systemroot%\inetpub\adfs\ls\web.config
```

* For ADFS 3.0, open the following file in a text editor:

```
%systemroot%\ADFS\Microsoft.IdentityServer.Servicehost.exe.config
```

In the [microsoft.identityServer.web](http://microsoft.identityserver.web/) section, add a line for __useRelyStateForIdpInitiatedSignOn__ as follows, and save the change:

```
<microsoft.identityServer.web>    ... <useRelayStateForIdpInitiatedSignOn enabled="true" />    ...</microsoft.identityServer.web>
```

* For ADFS 2.0, run IISReset to restart IIS.
* For both platforms, restart the Active Directory Federation Services (adfssrv) service.

> If you're using ADFS 3.0 you only need to do the above on your ADFS 3.0 servers, not the WAP servers.

Ensure that `<useRelayStateForIdpInitiatedSignOn enabled="true" />` has been added at [microsoft.identityServer.web](http://microsoft.identityserver.web/), then generate a URL encoded string from the relay state and the Entity ID as follows.

* There are two pieces of information you need to generate the RelayState URL. The first is the relying party's identifier, which can be found in the AD FS Management Console. View the Identifiers tab on the relying party's property page.
* The second part is the actual RelayState value that you need to send to the relying Party. The example below uses the relying party identifier of `https://identity-example.getpostman.com` and the relay state of `35ef7ab89gh99hh00`.

Starting values:

* __RPID__: `https://identity-example.getpostman.com`
* __Relay State__: `35ef7ab89gh99hh00`

> You are advised to use a trusted URL encoder to generate the encode values.

URL encode each value.

* __RPID__: `https%3A%2F%2Fidentity-example.getpostman.com`
* __Relay State__: `35ef7ab89gh99hh00`

Merge the URL encoded values with the string below, and URL encode the whole string.

* __String__: `RPID=<URL encoded RPID>&RelayState=<URL encoded RelayState>`
* __String with values__: `RPID=https%3A%2F%2Fidentity-example.getpostman.com&RelayState=35ef7ab89gh99hh00`
* __URL encoded string__: `RPID%3Dhttps%253A%252F%252Fidentity-example.getpostman.com%26RelayState%3D+35ef7ab89gh99hh00`

Take the final string and append it to the IDP initiated sign-on URL.

* An example IDP initiated sign-on URL would have the following structure: `https://adfs.contoso.com/adfs/ls/idpinitiatedsignon.aspx`
* __Final URL__: `https://adfs.contoso.com/adfs/ls/idpinitiatedsignon.aspx?RelayState=RPID%3Dhttps%253A%252F%252Fidentity-example.getpostman.com%26RelayState%3D+35ef7ab89gh99hh00`

Navigate to the final URL in the browser on first time login from Azure AD, which will enable setting the relay state and allow seamless SSO login in future.
