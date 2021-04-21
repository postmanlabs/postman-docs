---
title: "Utilizing audit logs"
order: 126
page_id: "audit_logs"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Creating Workspaces"
    url: "/docs/collaborating-in-postman/using-workspaces/creating-workspaces/"
  - type: link
    name: "Managing your team"
    url: "/docs/administration/managing-your-team/managing-your-team/"
---

> __[Audit logs are available on Postman Business and Enterprise plans.](https://www.postman.com/pricing)__

Audit logs list important team events. An admin can review audit logs to determine:

* When users were added to the team.
* When users received an invitation to a team.
* Which user performed a specific action.

Audit logs currently include events for team management, billing, and security. In the future, logs will indicate events for publishing documentation, creating API keys, and creating monitors.

## Using audit logs

In your [workspace](https://app.getpostman.com/dashboard), click the Settings icon, and select **Audit Logs**.

<img alt="Team dropdown menu" src="https://assets.postman.com/postman-docs/audit-logs-selected.jpg" width="350px"/>

Audit logs allow you to view team actions by user, event name, event description, and date.

[![audit logs](https://assets.postman.com/postman-docs/audit-logs-view.jpg)](https://assets.postman.com/postman-docs/audit-logs-view.jpg)

For more information about audit logs and how to set it up for your Postman team, contact the [support team](https://www.postman.com/get-started-postman-plans).

## Logged Events

The table below lists currently logged events.

| Action name  | Description |
| ------------- | ------------- |
| Added Payment Method  | A new credit card was added to the your team.  |
| Removed Payment method   | A credit card was removed from your team.  |
| Added Domain   | A custom domain was added to your team. (You can use custom domains to publish documentation.)  |
| Deleted Domain  | A custom domain was deleted from your team.  |
| Added Member   | A user joined your team.   |
| Cancelled Invite   | An invitation for a user was cancelled.   |
| Custom auth scheme created| A new SSO scheme was added to your team.  |
| Custom auth scheme disabled  | An SSO scheme was disabled. |
| Custom auth scheme enabled | An SSO scheme was enabled.  |
| Custom auth scheme removed  | An SSO scheme was removed.  |
| Custom auth scheme updated  | An SSO scheme was updated.|
| Decreased Team Size  | Extra licenses were removed from the team. |
| Increased Team Size | Additional licenses were added to the team.  |
| Set Instructions For Next Billing Cycle  | Instructions for the next billing cycle were added.|
| Team name changed  | Team name was changed.  |
| Removed Member  | Team member was removed.  |
| Successfully Retried Invoice  | An invoice for your team was paid.  |
| Sent Invite  | An invitation was sent to a user to join your team.  |
| Started  | Your plan has started.  |
| Updated domain verification  | A domain’s verification status was updated.|
| Updated User Roles | Roles were updated for some users in your team.  |
| Team URL changed  | Team’s URL updated. (The custom URL you use to access your team’s dashboard.)  |
