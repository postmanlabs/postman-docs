---
title: "Setting up custom SAML in Okta"
page_id: "saml_okta"
tags: 
  - "enterprise"
warning: false
---

*Note: Only an admin of your Okta organization can create the application.*

You can easily set up your custom SAML application in Okta. Postman provides you two ways to accomplish this. One of the ways you can easily configure is by using the readily-available Postman app in Okta to set up your custom SAML application instantly. Other way is to set up your custom SAML application without the Postman app in Okta.

This section describes the following two topics:

* [Setting up a custom SAML application in Okta](#setting-up-a-custom-saml-application-in-okta)

* [Setting up a custom SAML application in Okta using Postman app](#setting-up-a-custom-saml-application-in-okta-using-postman-app)


### Setting up a custom SAML application in Okta

To set up custom SAML application, follow the procedure outlined below: 

After you login to your Okta account, perform the following steps:

1. Click **Admin** as illustrated in the following screen:

[![okta admin](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-SAML2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-SAML2.png)

2. From the Okta Dashboard, click **Add Application**.

[![okta add application](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Add-Application1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Add-Application1.png) 
  
3. Click **Create New App**, as illustrated below:

[![okta_new app](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Create-Application1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Create-Application1.png)

4. In the following screen, ensure **Web** is selected as Platform. Select "SAML 2.0" and click **Create**.

[![okta choose saml](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Choose-SAML1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Choose-SAML1.png)

5. Under the first step "General Settings", enter an application name and then click **Next**.

[![okta app name](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_app_name.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_app_name.png)

6. Under the second step “Configure SAML”, section A “SAML Settings”, enter the Postman service provider details which can be found on the Postman [Edit Team Details](https://go.postman.co/settings/team/general) page. To update the identity provider details, navigate to *Authentication -> <My_Okta_Integration_Name>* and click **Edit**. Next, click **Proceed**. Ensure, you are in the following screen after the completion of this step:

[![details](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-IDP-Details.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-identity-provider-details.png)

Now, download the encryption certificate by clicking **Download as file** link (shown in red circle). You will upload this later in the **Okta SAML** configuration section, which is explained below. In the following screen, click **Show Advanced Settings** link to configure advanced SAML assertion settings.

[![!okta service provider](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_service_provider.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_service_provider.png)

| **Field** | **Value** |
| --- | --- |
| Single Sign On URL | ACS URL |
| Audience URI (SP Entity ID) | Entity ID |
| Name ID Format | EmailAddress |
 
7. Configure the options as shown below. Ensure your field options reflect these values.

[![okta advanced](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-SAML-Adv-Settings.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-SAML-Adv-Settings.png)
 
For the Encryption Certificate, upload the encryption file in the **Encryption Certificate** field shown above (remember, you downloaded the encryption file by clicking **Download as a file** link in Postman's Service Provider Details section earlier). Click **Next** to continue.

8. Under the third step “Feedback”, select “I’m an Okta customer adding an internal app”, and check “This is an internal app that we have created”, and then click **Finish**.

[![okta feedback](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_feedback.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_feedback.png)
  
9. Move over to the **Sign On** tab, and click the **View Setup Instructions** button.

[![okta signon](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_sign_on.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_sign_on.png)
  
The **View Setup Instructions** screen comes populated with values that you should copy and paste in the **Identity Provider Details** section. 

**Note:** You will need to come back to this screen to paste the value in *Default Relay State* that you will generate from the Postman's **Identity Provide Details** section. 
  
10. Copy the **Identity Provider Single Sign-On URL**, **Identity Provider Issuer** and **X.509 Certificate** from the below screen.

[![okta identity provider](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_identity_provider1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_identity_provider1.png)

And paste them in the corresponding sections of the **Identity Provider Details** screen as shown below:

[![details](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-IDP-Details3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-IDP-Details3.png)

Once you fill-in the details, click the **Generate relay/Regenerate relay** button to create a parameter to send with a SAML response in an IDP-initiated single sign-on. Copy the **relay state** and paste it in the following screen:

[![details](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Relay-State1A.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-IDP-Details1A.png)

To paste, click **Edit** button and paste the value in **Default Relay State** field. 

Click **Save Authentication**. 

### Setting up a custom SAML application in Okta using Postman app

To set up custom SAML application using the Postman app, follow the procedure outlined below:

After you login to your Okta account, perform the following steps:

1. Click **Admin** as illustrated in the following screen:

[![okta admin](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-SAML2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-SAML2.png)

2.  From the Okta Dashboard, click **Add Application**.

[![okta add application](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Add-Application1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Add-Application1.png)

3. Enter *Postman* in the search bar and press enter, as illustrated below. Select **Postman** and click **Add**.  

[![okta add application](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-New-Integ1A.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-New-Integ1A.png)

In the following screen, enter a name in the **Application Label** field and click **Done**.

[![details](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-New-Integ2A.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-New-Integ2A.png)

4. Now, go to the Postman [Edit Team Details](https://go.postman.co/settings/team/general) page. To update the identity provider details, navigate to *Authentication -> <My_Okta_Integration_Name>* and click **Edit**. Next, click **Proceed**. Ensure, you are in the following screen after the completion of this step:

[![details](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-IDP-Details.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-identity-provider-details.png)

Now, download the encryption certificate by clicking **Download as file** link (shown in red circle). You will upload this later in the **Okta SAML** configuration section, which is explained below.

Navigate to your Okta account. Go to the **Sign On** tab and click **Edit**.  
[![details](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-New-Integ3A.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-New-Integ3A.png)

The following screen opens:

[![details](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-New-Integ4A.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-New-Integ4A.png)
     
Click **Browse** and upload the encryption certificate. Click **Save**.

5. Move over to the **Sign On** tab, and click the **View Setup Instructions** button.

[![okta sign on](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_sign_on.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_sign_on.png)

The **View Setup Instructions** screen comes populated with values that you should copy and paste in the **Identity Provider Details** section.

**Note:** You will need to come back to this screen to paste the value in *Default Relay State* that you will generate from the Postman's **Identity Provide Details** section.

6. Copy the **Identity Provider Single Sign-On URL**, **Identity Provider Issuer** and **X.509 Certificate** from the below screen.

[![okta identity provider](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_identity_provider1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/okta_identity_provider1.png)

And paste them in the corresponding sections of the **Identity Provider Details** screen as shown below:

[![details](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-IDP-Details3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-IDP-Details3.png)

Once you fill-in the details, click the **Generate relay/Regenerate relay** button to create a parameter to send with a SAML response in an IDP-initiated single sign-on. Copy the **relay state** and paste it in the following screen:

[![details](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-Relay-State1A.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-IDP-Details1A.png)

To paste, click **Edit** button and paste the value in **Default Relay State** field. 

Click **Save Authentication**. 
