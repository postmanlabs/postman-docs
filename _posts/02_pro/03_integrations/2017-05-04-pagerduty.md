---
categories:
  - "pro"
  - "integrations"
title: "PagerDuty"
page_id: "pagerduty"
tags: 
  - "pro"
warning: false

---

PagerDuty is a popular incident management solution that integrates with monitoring stacks for alerting, on-call scheduling and automatic escalation of critical incidents. 

The service can be configured to deliver alerts by phone call, email, text or through iOS and Android apps.

The Postman Pro to PagerDuty Integration enables Postman Monitor results to trigger incidents and acknowledgements in PagerDuty.  

### Retrieving your PagerDuty Integration Key

1. Log in to [PagerDuty](https://app.pagerduty.com/){:target="_blank"} .  
2. In the header toolbar, click "Configuration" and select "Services".  
3. If you are creating a new service for this integration, click "Add New Service".

[![pagerduty menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_menu.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_menu.png)

 <ol start="4">
  <li>Enter your Service Name and choose Postman as the Integration Type. </li>
  <li>Click on "Add Service" at the bottom of the page to create a new service. </li>
</ol>

[![pagerduty service](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_service.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_service.png)

<ol start="5">
  <li>Save the PagerDuty Integration Key for use later. </li>
</ol>

[![pagerduty key](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_key.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_key.png)

### Configuring Postman Pro with PagerDuty

1. In the [Integrations page](https://app.getpostman.com/dashboard/integrations){:target="_blank"}, select PagerDuty from a list of Postman's 3rd party Integrations for Postman Pro users.

[![select pagerduty integration](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations-pagerduty1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations-pagerduty1.png)

<ol start="2">
  <li>Click the <b>View Details</b> button to see information about PagerDuty. </li>
</ol>

[![select pagerduty integration](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations-pagerduty-details.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations-pagerduty-details.png)

You also can click the **Configured Integrations** tab to set up other integrations, view available integrations for PagerDuty, or view all integrations.


### Add a team activity feed to PagerDuty

The Team Activity Feed is where you can view all team activity. You can monitor your team’s API development and track all the changes. This integration updates you on all changes in PagerDuty itself, so you don’t have to go back to Postman to see the team activity feed.

To add a team activity feed to PagerDuty:

1. In the PagerDuty integration page, click the **Add Integration** button.
2. In the **Team Activity Feed** page, choose the monitor you want to send to PagerDuty.
3. Enter your Pagerduty Integration Key and click the **Add Integration** button.

[![pagerduty monrun](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations-pagerduty-monrun.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/integrations-pagerduty-monrun.png)


### Viewing PagerDuty results

The PagerDuty console immediately displays any incidents that result from the Postman Monitor.  If the selected Monitor fails, you receive notifications on PagerDuty according to the formatting and business rules you’ve already set.

[![pagerduty results](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_results.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/pagerduty_results.png)
