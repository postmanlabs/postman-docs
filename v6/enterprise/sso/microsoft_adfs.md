---
title: "Configuring Microsoft ADFS with Postman SSO"
page_id: "configuring_microsoft_adfs_with_postman_sso"
tags: 
  - "enterprise"
warning: false
---


Postman supports single sign-on (SSO) logins through SAML 2.0 for Enterprise users.

Prerequisites

An Active Directory instance where all users have an email address attribute.
A server running Microsoft Server 2012 or 2008. This guide uses screenshots from Server 2012R2,
but similar steps should be possible on other versions.
A SSL certificate obtained from the AD FS server.
After you meet these basic requirements, you need to install AD FS on your server. Configuring and installing

AD FS is beyond the scope of this guide, but is detailed in a Microsoft KB article.

Configuration

Step 1 - Create AD FS authentication scheme in Postman
This is explained in SSO for admins article. After creating, collect values for the following fields from Postman Edit Team Details page.

Table
Assertion Consumer Service URL	SAML 2.0 SSO service URL
Encryption Certificate	Token encryption certificate


Step 2 - Adding a Relying Party Trust

The connection between AD FS and Postman is defined using a Relying Party Trust (RPT).

Select the Relying Party Trusts folder from AD FS Management, and click Add Relying Party Trust 

on the Actions sidebar. This starts the configuration wizard for a new trust. Select Claims aware radio

button in the welcome screen and click on Start button.

IMAGE

In the Select Data Source screen, select the last option, Enter Data About the Party Manually.

IMAGE

In the Select Data Source screen, select the last option, Enter Data About the Party Manually.

IMAGE

On the next screen, enter a Display name that you'll recognise in the future, and any notes you want to make.

IMAGE

On the next screen, upload the encryption certificate which you can collect from Postman Edit Team Details page or leave the certificate settings at their defaults.

IMAGE

On the next screen, check the box labeled Enable Support for the SAML 2.0 WebSSO protocol. 
The service URL (ACS URL) can be collected from Postman Edit Team Details page.

IMAGE


On the next screen, add a Relying party trust identifier of https://identity.getpostman.com.

IMAGE

On the next screen, select Permit everyone.

IMAGE

On the next two screens, the wizard will display an overview of your settings. 
On the final screen use the Close button to exit and open the Claim Rules editor.

Step 3 - Creating claim rules

Once the relying party trust has been created, you can create the claim rules.

IMAGE

To create a new rule, click on Add Rule. Create a Send LDAP Attributes as Claims rule.

IMAGE

On the next screen, using Active Directory as your attribute store, do the following: 
    1. From the LDAP Attribute column, select E-Mail Addresses.
    2. From the Outgoing Claim Type, select E-Mail Address.
    
IMAGE

Click on Finish to save the new rule.

Create another new rule by clicking Add Rule, this time selecting Transform an Incoming Claim as the template.

IMAGE

On the next screen:
    1. Select E-mail Address as the Incoming Claim Type.
    2. For Outgoing Claim Type, select Name ID. 
    3. For Outgoing Name ID Format, select Email. 
Leave the rule to the default of Pass through all claim values.

IMAGE

Finally, click on Finish button to create the claim rule.
There should be 2 transform rules. You can check this by clicking on Edit Claim Issuance Policy.

IMAGE

Step 4 - Adjusting the trust settings
You still need to adjust a few settings on your relying party trust. To access these settings, select Properties 

from the Actions sidebar while you have the RPT selected.

In the Advanced tab, make sure SHA-1 is specified as the secure hash algorithm.

IMAGE

Step 5 - Submit identity Provider details to Postman
Once this setup is done, you need to submit your Identity Provider's details to Postman.

Download the FederationMetadata.xml. It is generally located at https://<Federation Service name>/FederationMetadata/2007-06/FederationMetadata.xml

Collect the Identity Provider Single Sign-On URL, Identity Provider Issuer and X.509 Certificate 

from metadata file and fill these values in your Postman Edit Team Details page (in the AD FS Identity Provider Details dialog).



