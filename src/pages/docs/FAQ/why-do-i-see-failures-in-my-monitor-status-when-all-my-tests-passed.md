---
title: "Why do I see failures in my monitor status when all my tests passed?"
order: 3
page_id: "why-do-i-see-failures-in-my-monitor-status-when-all-my-tests-passed?"
warning: false
---

You might notice the monitor summary showing an error in your run (indicated by a red bar) even though all tests have passed.

For example:
![picture alt](https://support.getpostman.com/hc/article_attachments/360013189894/mceclip0.png)

In the above image, if you notice carefully there are **0 failed tests & 3 errors, across 1 region**. but there are no instances of failures under the ""Test Results"" tab.
There are two different causes for the run to show up as a red bar:

1. **Failed tests**: You'll see the failed tests populate only when the tests (tests[] or pm.expect) configured in the collection/folders/requests have failed.
2. **Errors**: The monitor run couldn't be completed due to one of the following:
    1.  Postman service downtime ([https://status.getpostman.com/](https://status.getpostman.com/) should indicate our service status)
    2.  DNS resolution errors (this is also the case for localhost URLs or URLs on an internal network)
    3.  Syntax errors or exceptions in your pre-request/test scripts
    4.  The 5-minute limit for a collection run being breached


A detailed error message will be visible in the Console Log (the tab next to Test Results) - this should indicate the exact reason for the failure.
