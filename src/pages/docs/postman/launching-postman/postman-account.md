---
title: "Postman account"
order: 7
page_id: "postman_account"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://getpostman.com/apps"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "One person, multiple accounts"
    url: "https://blog.postman.com/2017/10/12/one-person-multiple-accounts/"
  - type: link
    name: "Sweet cosmic karma for your public profile"
    url: "https://blog.postman.com/sweet-cosmic-karma-for-your-public-profile/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Sending your first request"
    url: "/docs/postman/launching-postman/sending-the-first-request"

warning: false

---

A free Postman account allows you to [sync](/docs/postman/launching-postman/syncing/) and back up your work so that you can access it from different machines. You can also [collaborate](/docs/postman/collaboration/collaboration-intro/) with others on your API projects.

Signing up for an account is optional—you can continue to use Postman without an account if you prefer. Check out the [EULA](https://www.postman.com/licenses/postman_base_app), [security overview](https://www.postman.com/security), and [privacy policy](https://www.postman.com/licenses/privacy).

## Contents

* [Signing up for a Postman account](#signing-up-for-a-postman-account)
* [Configuring your account](#configuring-your-account)
* [Signing into Postman](#signing-into-postman)
* [Syncing your work](#syncing-your-work)
* [Switching between accounts](#switching-between-accounts)
* [Security policies and standards](#security-policies-and-standards)
* [Recovering account access](#recovering-account-access)

## Signing up for a Postman account

If you haven't already, [download](https://www.postman.com/downloads/) the Postman app.

Launch the app. You will see a prompt to log in or sign up.

![App Sign In](https://assets.postman.com/postman-docs/pm-app-sign-in.jpg)

Click __Create Account__.

![App Sign Up](https://assets.postman.com/postman-docs/pm-app-sign-up.jpg)

You can sign up by entering an email, username, and password, or using your Google account.

To sign up by email, enter your details, check the box to agree to the __Terms of Use__ (which you can view by clicking the link), and click __Create free account__. Postman will send you an email to confirm your account—follow the instructions to complete your account setup.

To use your Google account to sign in to Postman, click __Sign up with Google__, and follow the instructions.

## Configuring your account

When you first sign up for a Postman account, you will be prompted to complete your profile.

![Configure account](https://assets.postman.com/postman-docs/configure-postman-account.jpg)

Enter your details and click __Continue__.

Enter your profile details and click **Save changes**.

>Your name will also be your username, and you will have the same username across all Postman elements, such as collections and documentation.

![Edit profile](https://assets.postman.com/postman-docs/Edit+profile.jpg)

>You can make your profile public. A public profile allows you to add your collections to Postman's [API Network](/docs/postman-for-publishers/api-network/add-api-network/) and [Postman Templates](/docs/postman-for-publishers/postman-templates/add-templates/).

You can optionally create a team.

![Configure account](https://assets.postman.com/postman-docs/setup-signup-team.jpg)

Enter a team name or click __Maybe Later__. You can also invite people to your team at this stage.

![Configure account](https://assets.postman.com/postman-docs/invite-team-signup.jpg)

You can update your settings at any time by clicking your avatar in the top left of Postman.

<img src="https://assets.postman.com/postman-docs/user-settings-menu.jpg" width="350px" alt="User Menu"/>

You can set a variety of profile details, including uploading an photo for your account, which will be visible to collaborators and anyone viewing resources you share or publish.

## Signing into Postman

To sign into Postman, enter your email / username and password and click __Sign In__ if you signed up by email, or __Sign in with Google__ if you used Google auth when signing up.

Check the __Keep me signed in__ box if you want to remain signed in after your current session. If you do not want Postman to retain your details or to remain signed in on the computer you are working on, uncheck the box.

![Stay signed in](https://assets.postman.com/postman-docs/stay-signed-in.jpg)

If you check the __Keep me signed in__ box, you will remain signed in for 30 days, and will need to re-authenticate after that period. If you uncheck the box, you will need to sign in again after 30 minutes.

## Syncing your work

When you are logged into Postman, you will see the sync indicator in the header bar.

![Sync icon](https://assets.postman.com/postman-docs/sync-icon.jpg)

When the icon is orange, you are connected to the servers and your work is backed up. The icon will turn blue and rotate when your work is being backed up, for example when you click the __Save__ button.

![Sync active](https://assets.postman.com/postman-docs/sync-active.jpg)

Postman will inform you if the sync is interrupted and will automatically try to re-establish the connection.

![Sync connection](https://assets.postman.com/postman-docs/sync-no-connection.jpg)

If a conflict arises from a sync issue within your workspace, [Postman will present options for resolving the conflict](/docs/postman/workspaces/conflicts/).

> Postman uses WebSockets for real-time [syncing](/docs/postman/launching-postman/syncing/). If you are experiencing issues with syncing, you can file an issue with the Postman [support center](https://support.getpostman.com/hc/en-us).

## Switching between accounts

You can sign in to multiple accounts at the same time in Postman. Click your user avatar in the top right to toggle between accounts or click __Add a new account__ to sign in with another one.

<img src="https://assets.postman.com/postman-docs/multiple-accounts.jpg" width="400px" alt="Multiple Accounts"/>

## Security policies and standards

Postman uses several technologies to ensure that your data is safe and secure. For more details, visit our [security page](https://www.postman.com/security).

* Communication with Postman servers only happens through HTTPS and Secure WebSockets.
* Environment and global variables are encrypted so that only you can view them.

## Recovering account access

You can recover your username or reset your password from the [**Sign In**](https://identity.getpostman.com/login) page. Click __Trouble signing in?__

![App Sign In](https://assets.postman.com/postman-docs/pm-app-sign-in.jpg)

Enter your account email, check the __I'm not a robot__ box, and click __Submit__.

![Trouble Signing In](https://assets.postman.com/postman-docs/trouble-signing-in.jpg)

Postman will send you an email with instructions for recovering access to your account.

> If you still have trouble logging into your Postman account please [contact support](https://support.getpostman.com/).

## Next steps

Learn more about how Postman [syncs](/docs/postman/launching-postman/syncing/) your data.
