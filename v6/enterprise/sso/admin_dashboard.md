---
title: "Single sign on for admins using the dashboard"
page_id: "single_sign_on_for_admins_using_the_dashboard"
tags: 
  - "enterprise"
warning: false
---

Note: You need to be on our new dashboard if you are using this article to setup SSO. To check if you are using new dashboard, click this url.
If you have already opted for new dashboard, it will take you to your dashboard page. Else, you will be asked to opt in for the new dashboard.
On this page, click Try the beta dashboard button to opt in for new dashboard.

Note: Only a team admin can configure SSO for a Postman Team.

Note: Only if the team is subscribed to an enterprise plan, the option to configure SSO will be displayed.

Steps for setting up SSO:

Click the Team dropdown in the navigation bar. Look for Team Settings in the list items and click it.

IMAGE

On this page, you will see Authentication section. Click on Add a new authentication method button.

IMAGE

On this page, do the following:

3.1. Choose one from the list of Identity Providers. Select SAML 2.0 if your IdP isn't supported.

IMAGE


3.2. Enter a user friendly name for this authentication method.

3.3. Click on Proceed button.

IMAGE

On this page, you will find two sections.
4.1. On your left is Service Provider details (Postman in this case) which you need to collect and submit it to your IdP.
4.2. On your right is IdP details which you need to submit here. For now, you will have to enter IdP metadata manually.
       If you wish to submit IdP details later, you can do so by clicking Configure Later button. Use the Save Authentication 
       button to update IdP details whenever you change them.
       
IMAGE

If IdP initiated logins are supported, then you can generate Relay State using Generate relay state button. It
       is not automatically generated along with your authentication method.
       
If required IdP details are submitted, then you can enable this authentication method. Use the toggle button to enable it.
This is the last step.

IMAGE

Note: You can use Edit anchor tag to edit the authentication method anytime you wish to.

IMAGE

Deleting an authentication method:
You can also delete an authentication method if you wish to. On deleting, all saved IdP details and user accounts associated to 
this authentication method will be deleted. Follow the steps to do so:

Click on Edit anchor tag.

IMAGE

On this page, click on Delete Authentication Method anchor tag.

IMAGE

A modal will appear asking for your confirmation. This is the final step.

IMAGE

Note: Postman does not email team members when SSO is set up, changed or deleted. It is the responsibility of the 
admins to notify team members and convey the login URL to them so they can access Postman via SSO.

Managing user accounts
Creating end user account
To add an end user, create an account for the user in the IdP. The first time a new user logs in to Postman via the IdP, a Postman
account will be created only if the team has slots available and the Allow Signups checkbox is checked while configuring the SSO.
The user will be automatically associated to the team with a `member` role and will have access to team resources.

Existing user account
If a Postman user signs in to Postman via IdP, then the user will be associated to the team provided that:

A team invitation exists for the user.
The team has available slots and the Allow Signups checkbox was checked while configuring the SSO authentication method.

Removing IdP access
Removing an end user from the IdP will prevent the user from being able to log in to the corresponding Postman account, but will not remove 
the account from Postman. To prevent access to team resources, we recommend removing the end user’s account from the Postman Team 
associated with IdP as well.




