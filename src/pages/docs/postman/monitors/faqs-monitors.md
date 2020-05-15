---
title: "FAQs for monitors"
order: 168
page_id: "faqs_monitors"
search_keyword: "console.log, console.warn"
warning: false
---

## General questions

### What can I test with Monitors?

You can use Postman Monitors for simple uptime monitoring to ensure your servers are online or for performance monitoring to ensure your servers are responding promptly. You also can write detailed [test suites](/docs/postman/scripts/test-scripts/) to check monitors for proper behavior, business logic, error handling, and so on.

### What restrictions apply?

To learn what restrictions apply, see [Intro to Monitoring](/docs/postman/monitors/intro-monitors/).

### How many monitors can I create?

There is no limit to the number of monitors you can create. You can have any number of collections, each with any number of monitors. And each monitor can run on a different schedule.

### How long can a monitor run?

Monitors are currently limited to 5 minutes for each run. This limit applies to all HTTP requests, responses, and test scripts.

### How many HTTP requests can a monitor send?

There is no limit to the number of requests, although the total run-time cannot exceed 5 minutes.

### How much data can a monitor send or receive?

There is nearly no limit to the amount of data that can be sent or received per request. However, large requests or responses take longer to send and receive. As a result, be sure that you can do everything within the 5 minute time limit.

### How do I troubleshoot problems?

You can view the full console output for every monitor run, including any errors. You can also use methods, such as `console.log()`, `console.warn()`, and so on to output your own debugging information. To learn more about troubleshooting monitors, see [Troubleshooting monitors](/docs/postman/monitors/troubleshooting-monitors).

## Security

### Who can see my Monitors?

Monitors are visible to all members of the workspace they were created in. If a collection is shared in both a personal and team workspace, but its monitor is created in the personal workspace, members of the team workspace will not be able to view or access that monitor.

### Who can edit my Monitors?

Monitors can be edited in their respective workspace by members who have been granted [Editor permissions](/docs/postman/collaboration/roles-and-permissions/#collection-roles) on the associated collection.

### Can I delete a Monitor?

You can delete a monitor at any time. Once deleted, all run history for the monitor is deleted too. If you want to retain the history, then you should pause the monitor instead of deleting it.

### Where do Monitors run?

Monitors run on Postman's cloud infrastructure, which is hosted by Amazon Web Services (AWS). More information about the cloud infrastructure is available on the [Security overview](https://www.postman.com/security).

### Can Monitors access private networks?

No. Monitors can only connect to URLs that are publicly-available on the Internet. You cannot monitor APIs that run on private networks, VPNs, or corporate intranets.

### Will Monitors impact my API performance?

You have full control over the behavior of your monitors. Not only can you determine which of your API endpoints are called, you can also determine how many and how often they are called. In addition, Postman restricts each monitor’s total run time to 5 minutes, to limit the number of requests it can perform.
