---
title: "How do I set up SSO for my Enterprise team?"
order: 3
page_id: "how-do-i-set-up-sso-for-my-enterprise-team"
warning: false
---
If you have admin privileges on an Enterprise team, you can configure Postman to accept an existing SSO mechanism your organization supports. Postman currently supports the following SSO providers:

[GSuite](https://gsuite.google.com/)
[Okta](https://www.okta.com/)
[OneLogin](https://www.google.com/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=1&amp;cad=rja&amp;uact=8&amp;ved=0ahUKEwjnjZuJpqfYAhUGYo8KHSHvDYEQFggoMAA&amp;url=https%3A%2F%2Fwww.onelogin.com%2F&amp;usg=AOvVaw2lN8u9YGDYgFN1I7YKo4pF)
[PingIdentity](https://www.pingidentity.com/en.html)
[Duo](https://duo.com/single-sign-on)
[AD FS](https://technet.microsoft.com/en-us/library/2006.07.simplify.aspx)



Generic SAML
You'll receive detailed instructions on setting up your preferred SSO scheme once you sign up for Enterprise.

**IdP-initiated logins**

By default, Postman only supports SP (Service Provider) initiated logins. This means that your users will need to head to [https://identity.getpostman.com/enterprise/login](https://identity.getpostman.com/enterprise/login) to log in. If you require users be able to log in from your SSO portal (your Okta dashboard, for example), you'll need to generate and copy the RelayState from your Postman team settings and save it in your IDP configuration. This ensures an additional level of security when logins are initiated through a source unknown to Postman.

**Automatically Add New Users**

The 'Automatically add new users' checkbox in your SSO configuration section determines whether users having accounts in your SSO system will be allowed to join your team just by signing in using SSO. For example, if user1@company.com does not have a Postman account, he/she will be able to join the team by heading to [https://identity.getpostman.com/enterprise/login](https://identity.getpostman.com/enterprise/login) and logging in using SSO. This will only work if your team has user slots available - your team size will not be automatically increased if additional users log in via SSO.
