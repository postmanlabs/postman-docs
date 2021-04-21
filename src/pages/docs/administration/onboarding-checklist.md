---
title: "Onboarding checklist"
order: 127
page_id: "onboarding_checklist"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: link
    name: "Security and Compliance: A Shared Responsibility Model"
    url: "https://www.postman.com/security/shared-responsibility/"
  - type: link
    name: "Managing your team"
    url: "/docs/administration/managing-your-team/managing-your-team/"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Manage Large Teams in Postman with Workspaces, Permissions, and Version Control"
    url: "https://blog.postman.com/postman-team-workspaces-and-permissions/"

---

If you're just getting started using Postman within your organization, you can carry out a few preparation steps to set your team up for success.

## Contents

* [Setting up Postman](#setting-up-postman)
    * [Invite Team Members](#invite-team-members)
    * [Check Your Setup](#check-your-setup)
    * [Enable Team Discovery](#enable-team-discovery)

## Setting up Postman

Postman is available as a stand-alone app for Windows, Mac, and Linux, and can also be accessed [via the web](/docs/getting-started/installation-and-updates/#using-postman-on-the-web) with a desktop agent. Make sure everyone who would like to use Postman has the latest version by downloading it from [the Postman website](https://www.postman.com/downloads/). You may want to contact your IT team to establish what the procedure is for adding a new piece of software. This varies from organization to organization, however, the following points are common:

* Your IT team may need to add an exception to device policy allowing for Postman to be installed on employee workstations. Provide a [Postman download link​](https://www.postman.com/downloads/) to the IT team to help establish this exception.
* If your organization's network connection is facilitated via a proxy, you may need to configure Postman appropriately. Retrieve proxy connection details from your IT team and [​setup within Postman](/docs/sending-requests/capturing-request-data/proxy/)​.
* It is recommended that your IT team whitelist Postman’s domains to ensure Postman data is synced with the cloud and all functionality works as expected. By default, WebSocket connections use the same ports as HTTP (80) and HTTPS (443). Ensure your network firewall allows WebSocket connections for Postman's services by whitelisting the following domains:

    * `*.postman.com`
    * `*.getpostman.com`
    * `*.postman.co`
    * `*.pstmn.io`

* Depending on your [plan](https://www.postman.com/pricing) you may be able to obtain static IP addresses for Postman Monitors. Your IT team should whitelist these static IPs for monitoring. See [Running Postman monitors using static IPs](/docs/designing-and-developing-your-api/monitoring-your-api/using-static-IPs-to-monitor/) for details on how to obtain and configure static IP addresses for monitoring.

* Update your [team settings](https://go.postman.co/settings/team/general). See [Team Settings](/docs/administration/team-settings/) for more info.
* If your Postman [plan](https://www.postman.com/pricing) includes single-sign-on (SSO) you may need help from your IT team to configure it. See [Configuring SSO for a team](/docs/administration/sso/admin-sso/) for instructions on integrating with specific identity providers.

### Invite Team Members

Depending on the size of your team you can send invites to your team now or [Check Your Setup](#check-your-setup) with a few volunteers before you rollout Postman to your entre organization.

You can add your teammates from your [team dashboard](https://go.postman.co/team) by generating a shareable link or by inviting them through a direct email. See [Managing Your Team](/docs/administration/managing-your-team/managing-your-team/) for more detail.

<img src="https://assets.postman.com/postman-docs/invite-users-modal.jpg" alt="Invite users" width="400px"/>

### Check Your Setup

Before you kick-off in full, it’s best to check in on the workings of Postman within your organization and ensure everything works as expected. If you do not have access to Postman and a Postman account, find a team member who does to help you test the configuration. Depending on your organization's IT policy you may need to make requests of your IT team in order to get up and running as well.

Ensure you are connected to your organization's network and test the following:

* Can you ​[execute a request](/docs/sending-requests/requests/)​ to `example.com` within Postman?
* Can you execute a request to one of your internal/private APIs?
* Save a request inside a [​Collection​](/docs/sending-requests/intro-to-collections/). Visit `​go.postman.co`​, has your collection and request synced with Postman’s cloud?

Repeat these checks on a colleague’s workstation. If everything worked, your workstations and network are ready to support Postman! Else, if you experienced a hiccup, [​contact Postman support](https://www.postman.com/support/) and please read on.

### Enable Team Discovery

Team discovery makes Postman’s collaboration features more discoverable to users, and allows your team participation to scale up along with your successful API projects. When team discovery is enabled, users in your organization can see teams to join when they access their Postman accounts. Anyone signing in with a company email address is presented with available teams and can make a request to join each one. Administrators will receive a notification and can approve or deny access from there. See [Team Discovery](/docs/collaborating-in-postman/collaboration-intro/#team-discovery) for more info.

### Questions?

If you have any questions or run into any issues setting up Postman for your team be sure and check to see if the question has already been answered by the [Postman Community](https://community.postman.com/). You can also find a number of support resources on the [support page](https://www.postman.com/support).

## Next Steps

Check out [Security and Compliance: A Shared Responsibility Model](https://www.postman.com/shared-responsibility/) for important security considerations.

Make sure to [configure SSO](/docs/administration/sso/admin-sso/) if you are subscribed to the Business or Enterprise plan.

Finally, head over to [Managing Your Team](/docs/administration/managing-your-team/managing-your-team/) to learn about managing roles, inviting to workspaces, and how to adjust your team size.
