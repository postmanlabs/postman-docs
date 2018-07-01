---

title: "PagerDuty Integration"
page_id: "pagerduty_integration"
tags: 
  - "cloud"
warning: false
---

**Trigger and resolve incidents on PagerDuty**

PagerDuty is a popular incident management solution that integrates with monitoring stacks for alerting, on-call scheduling and automatic escalation of critical incidents.  The service can be configured to deliver alerts by phone call, email, text or via iOS and Android apps.

The Postman Pro to PagerDuty Integration enables Postman Monitor results to trigger incidents and acknowledgements in PagerDuty.  

**Retrieve your PagerDuty Integration Key**

[Log in][0] to PagerDuty.  Go to the `Configuration` menu and select `Services`.  If you are creating a new service for this integration, Click `Add New Service`.

[![PagerDuty menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_menu.png)][1]

Enter your Service Name and choose Postman as the Integration Type.  Click on `Add Service` at the bottom of the page.

[![Create PagerDuty service](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_service.png)][2]

This will create a new service.  Make a note of your PagerDuty Integration Key for later.

[![PagerDuty Integration Key](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_key.png)][3]

**Connect Postman Pro to PagerDuty**

From the [Integrations page][4], select PagerDuty from a list of Postman's 3rd party Integrations for Postman Pro users.

[![PagerDuty Integration](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerdutyINT.png)][5]

Click `Add` to connect your Postman Monitors to PagerDuty.

[![Add PagerDuty Integration](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_add.png)][6]

Enter the PagerDuty Integration Key from before.  Choose the Monitor for which you want alerts, and Submit. 

[![Add Monitor](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_monitor.png)][7]

**How your results appear in PagerDuty**

Right away, the PagerDuty console will display any incidents resulting from the Postman Monitor.  If the selected Monitor fails, you will get notified on PagerDuty according to the formatting and business rules that you’ve already set up.

[![PagerDuty results](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_results.png)][8]

[0]: https://app.pagerduty.com/
[1]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_menu.png
[2]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_service.png
[3]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_key.png
[4]: https://app.getpostman.com/dashboard/integrations
[5]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerdutyINT.png
[6]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_add.png
[7]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_monitor.png
[8]: https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_results.png
