---
title: "Audit logs"
page_id: "audit_logs"
tags: 
  - "enterprise"
warning: false
---

Audit logs is an Enterprise-only feature that lists important team events. An admin can review audit logs to determine:

* When users were added to the team.
* When users received an invitation to a team. 
* Which user performed a specific action.

Audit logs currently include events for team management, billing, and security. In the future, we'll enable events for publishing documentation, creating API keys, and creating monitors.

### Using audit logs

In your [Enterprise workspace](https://app.getpostman.com/dashboard), click the Settings icon, and select "Audit logs".

[![audit logs menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-audit-logs-menu2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-audit-logs-menu2.png)

In the [Audit Logs](https://app.getpostman.com/dashboard/audit) page, you see information categorized as USER, EVENT NAME, EVENT DESCRIPTION, and DATE. 

[![audit logs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-audit-logs-page.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-audit-logs-page.png)

For more information about audit logs and how to set it up for your Postman Enterprise team, contact our [Enterprise support team](https://pages.getpostman.com/Enterprise-Sales_Contact-Us.html).

### Logged Events

The table below lists currently logged events.

| Action name  | Description |
| ------------- | ------------- |
| Added Payment Method  | A new credit card was added to the your team.  |
| Removed Payment method   | A credit card was removed from your team.  |
| Added Domain   | A custom domain was added to your team. (You can use custom domains to publish documentation.)  |
| Deleted Domain  | A custom domain was deleted from your team.  |
| Added Member   | A user joined your team.   |
| Cancelled Invite   | An invitation for a user was cancelled.   |
| Custom auth scheme created| 	A new SSO scheme was added to your team.  |
| Custom auth scheme disabled  | An SSO scheme was disabled. |
| Custom auth scheme enabled | An SSO scheme was enabled.  |
| Custom auth scheme removed  | An SSO scheme was removed.  |
| Custom auth scheme updated  | An SSO scheme was updated.|
| Decreased Team Size  | Extra licenses were removed from the team. |
| Increased Team Size | Additional licenses were added to the team.  |
| Set Instructions For Next Billing Cycle  | Instructions for the next billing cycle were added.|
| Team name changed  | Team name was changed.  |
| Removed Member  | 	Team member was removed.  |
| Successfully Retried Invoice  | An invoice for your team was paid.  |
| Sent Invite  | An invitation was sent to a user to join your team.  |
| Started Pro  | Your Enterprise plan has started.  |
| Updated domain verification  | A domain’s verification status was updated.|
| Updated User Roles | Roles were updated for some users in your team.  |
| Team URL changed  | Team’s URL updated. (The custom URL you use to access your team’s Enterprise dashboard.)  |











