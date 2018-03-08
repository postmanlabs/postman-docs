---
title: "Audit logs"
page_id: "audit_logs"
tags: 
  - "enterprise"
warning: false
---

Audit logs is an Enterprise-only feature that lists important team events. An admin can review audit logs to determine:

* When users were added to the team
* When users received an invitation to a team 
* Which user performed a specific action.

Audit logs currently include events for team management, billing, and security. In the future, we'll enable events such as publishing documentation, creating API keys or monitors



Here's a list of events that are currently logged:


| Action name  |   Human readable name        | Description         |
| ---   |   ---    ----------------  |
|team.add_card  |Added Payment Method    | A new credit card was added to your team.                                          |team.delete_card  |Removed Payment method   |	A credit card was removed from the team. |
|team.add_domain  |Added Domain   | A custom domain was added to your team. Custom domains can be used to publish documentation.  |
|team.delete_domain | Deleted Domain   | A custom domain was deleted from your team |
|team.add_member   |Added Member  |A user joined your team.  |
|team.cancel_invite   |Cancelled Invite     |An invitation for a user was cancelled. |
|team.customauth.create |Custom auth scheme created    |A [new SSO scheme](https://www.getpostman.com/docs/enterprise/sso/intro_sso){:target="_blank"} was added to your team. |
|team.customauth.disable |Custom auth scheme disabled   |An SSO scheme was disabled. |
|team.customauth.enable |Custom auth scheme enabled   |An SSO scheme was enabled. |
|team.customauth.remove  |Custom auth scheme removed  |An SSO scheme was removed.  |
|team.customauth.update  | Custom auth scheme updated    |An SSO scheme was updated.  |
|team.decrease_size  | Decreased Team Size   |Extra licenses removed from the team.  |
|team.increase_size  | Increased Team Size    |Additional licenses added to the team.  |
|team.modify_future_plan  |Set Instructions For Next Billing Cycle   |Instructions for the next billing cycle were added.|
|team.name_updated|	Team name changed   |Team name changed.|
|team.remove_member  |Removed Member   |Team member removed. |
|team.retry_invoice_success  |Successfully Retried Invoice  |An invoice for your team was paid. |
|team.send_invite |	Sent Invite   |An invitation was sent for someone to join your team. |
|team.start_enterprise |Started Pro    |Your Enterprise plan has started. |
|team.update_domain_verification  | Updated domain verification   |A domain’s verification status was updated  |
|team.update_user_roles | Updated User Roles  | Roles were updated for some users in your team|
| team.url_updated | Team URL changed  | Team’s URL updated. The URL is what you use to access your team’s Enterprise dashboard - https://.postman.co|






