---
title: "Viewing monitor results"
order: 74
page_id: "viewing_monitor_results"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to monitors"
    url: "/docs/postman/monitors/intro-monitors/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Monetary"
    url: "https://www.getpostman.com/case-studies/monetary.pdf?_ga=2.224698460.754547870.1571851340-1454169035.1570491567"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API monitoring with Postman"
    url: "https://www.youtube.com/watch?v=3nOP_TYTuA8"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "\"Daily Mix\" with Postman Monitors and Spotify"
    url: "https://blog.getpostman.com/2017/03/28/daily-mix-with-postman-monitors-and-spotify/?_ga=2.131351369.754547870.1571851340-1454169035.1570491567"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to collection runs"
    url: "/docs/postman/collection-runs/intro-to-collection-runs/"

warning: false
---

You can set up monitors to send daily or weekly emails with a summary for all your monitors. You can [turn off email notifications](/docs/postman/monitors/setting-up-monitor/) in the settings.

In addition, you can receive important notifications (both [in-app](/docs/postman/notifications) and email) if a monitor fails.

[![email summary of monitors](https://assets.postman.com/postman-docs/monitoring-email-results1.png)](https://assets.postman.com/postman-docs/monitoring-email-results1.png)

## Monitors page

The [Monitors](https://monitor.getpostman.com/) page lists all your monitors (both team and private).

[![monitors page](https://assets.postman.com/postman-docs/WS-monitoring-results-page-1.png)](https://assets.postman.com/postman-docs/WS-monitoring-results-page-1.png)

You can click a monitor to view more details about its performance and troubleshooting, such as:

| **Status** | **Average success rate** | **Average response time** |
| -----------| -------------------------| --------------------------|
| The number of failed runs in the selected timeframe. A ‘Healthy’ status indicates there were no failures in any of the runs. | The percent of successful runs out of the total runs in the timeframe. A run is successful only when all the tests pass during that run. You can also see a change in this value compared to the previous time period. | The average response time of all the requests over all the runs in milliseconds. You can also see the percentage change from the previous time period. |

**Note:** All shared monitors are visible to team members, and shared monitors always inherit the permissions of the shared collection.

## Monitor details page

When you click a monitor, the Monitor Performance page appears. The main timeline shows all past runs of the monitor. Each bar signifies one run of the monitor.

Red indicates failing tests. Blue indicates the total response time of all the requests over time.

These visuals are a great way to measure performance improvements when you’ve made changes to your infrastructure.

[![monitor perf](https://assets.postman.com/postman-docs/WS-monitor-perf-page-1.png)](https://assets.postman.com/postman-docs/WS-monitor-perf-page-1.png)

The results section shows request-level details: test results, response code, response time, and the response size. Additionally, you can filter by region if you set up [monitors in multiple regions](/docs/postman/monitors/intro-monitors/#monitoring-resources-in-multiple-regions).

[![monitor perf](https://assets.postman.com/postman-docs/WS-monitor-results-1.png)](
https://assets.postman.com/postman-docs/WS-monitor-results-1.png)

You can also view the log when you click the **Console Log** tab.

[![view logs](https://assets.postman.com/postman-docs/59042622.png)](https://assets.postman.com/postman-docs/59042622.png)

The console log prints a detailed log of run events and 'console.log' statements that ran as part of your pre-request and test scripts. You can use them to [diagnose failures](/docs/postman/monitors/troubleshooting-monitors).
