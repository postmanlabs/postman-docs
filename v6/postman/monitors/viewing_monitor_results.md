---
title: "Viewing monitor results"
page_id: "viewing_monitor_results"
warning: false
---

You can set up monitors to send daily or weekly emails with a summary for all your monitors. You can [turn off email notifications](/docs/postman/monitors/setting_up_monitor/) in the settings.

In addition, you can receive important notifications (both [in-app](/docs/postman/notifications) and email) if a monitor fails.

[![email summary of monitors](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitoring-email-results1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitoring-email-results1.png)

## Monitors page

The [Monitors](https://monitor.getpostman.com/) page lists all your monitors (both team and private).

[![monitors page](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-monitoring-results-page-1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-monitoring-results-page-1.png)

You can click a monitor to view more details about its performance and troubleshooting, such as:

| **Status** | **Average success rate** | **Average response time** |
| -----------| -------------------------| --------------------------|
| The number of failed runs in the selected timeframe. A ‘Healthy’ status indicates there were no failures in any of the runs. | The percent of successful runs out of the total runs in the timeframe. A run is successful only when all the tests pass during that run. You can also see a change in this value compared to the previous time period. | The average response time of all the requests over all the runs in milliseconds. You can also see the percentage change from the previous time period. |

**Note:** All shared monitors are visible to team members, and shared monitors always inherit the permissions of the shared collection.

## Monitor details page

When you click a monitor, the Monitor Performance page appears. The main timeline shows all past runs of the monitor. Each bar signifies one run of the monitor.

Red indicates failing tests. Blue indicates the total response time of all the requests over time.

These visuals are a great way to measure performance improvements when you’ve made changes to your infrastructure.

[![monitor perf](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-monitor-perf-page-1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-monitor-perf-page-1.png)

The results section shows request-level details: test results, response code, response time, and the response size. Additionally, you can filter by region if you set up [monitors in multiple regions](/docs/postman/monitors/intro_monitors/#monitoring-resources-in-multiple-regions).

[![monitor perf](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-monitor-results-1.png)](
https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-monitor-results-1.png)

You can also view the log when you click the **Console Log** tab.

[![view logs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59042622.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59042622.png)

The console log prints a detailed log of run events and 'console.log' statements that ran as part of your pre-request and test scripts. You can use them to [diagnose failures](/docs/postman/monitors/troubleshooting_monitors).
