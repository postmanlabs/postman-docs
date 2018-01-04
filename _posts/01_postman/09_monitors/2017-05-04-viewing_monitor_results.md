---
categories:
  - "postman"
  - "monitors"
title: "Viewing monitor results"
page_id: "viewing_monitor_results"
warning: false
---

Once you set up monitors, you can receive daily and weekly emails with a summary for all your monitors. These email notifications can be turned off in the settings. In addition, you will receive important notifications (both [in-app](/docs/postman/notifications) and email) in case a monitor fails.

[![email summary of monitors](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitoring-email-results1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitoring-email-results1.png)

You can also view more detailed results from your dashboard.??

### Monitors page

Sign in to the Postman web view, and head over to the [monitors page](https://monitor.getpostman.com/){:target="_blank"} which lists out all your monitors (both team and private). Select a timeframe for which you want to view the results of the monitor runs.

[![monitors page](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitoring-results-page.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitoring-results-page.png)

You can view various stats for each of the monitors.

| **Status** | Number of failed runs in the selected timeframe. A ‘Healthy’ status indicates that there were no failures in any of the runs. |
| **Average success rate** | The percent of successful runs out of the total runs in the timeframe. A run is said to be successful only when all the tests passed during that run. You can also see a change in this value compared to the previous time period. |
| **Average response time** | The average response time of all the requests over all the runs in milliseconds. You can also see the percentage change from the previous time period. |


Click on any of the monitors to view more details about its performance and troubleshooting in case of any failures.

### Monitor details page

The main timeline shows all past runs of the monitor. Each bar signifies one run of the monitor - with red indicating failing tests. The graph in blue shows the total response time (of all the requests) over time. This is a great way of measuring performance improvements when you’ve made changes to your infrastructure.

[![monitors timeline](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitoring-results-page.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitoring-results-page.png)

You can click on any of the runs from this graph to see its results in more details. 

[![detailed view](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitoring-results-graphDetails.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitoring-results-graphDetails.png)  

The results section shows request-level details: test results, response code, response time, and the response size. Additionally, you can filter by region if you set up [monitors in multiple regions](/docs/postman/monitors/intro_monitors#monitoring-resources-in-multiple-regions).

You can also view the log by clicking on the **Console Log** tab.

[![view logs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59042622.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59042622.png)

The console log will print a detailed log of run events, along with any console.log statements that ran as part of your pre-request and test scripts and can be used to [diagnose failures](/docs/postman/monitors/troubleshooting_monitors).
