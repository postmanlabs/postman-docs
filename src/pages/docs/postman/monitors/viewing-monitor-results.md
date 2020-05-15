---
title: "Viewing monitor results"
order: 163
page_id: "viewing_monitor_results"
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Monetary"
    url: "https://www.postman.com/resources/case-studies/monetary/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API monitoring with Postman"
    url: "https://www.youtube.com/watch?v=3nOP_TYTuA8"

warning: false
---

Your Postman Dashboard allows you to track the health and performance of your APIs. With the Dashboard, you can stay up to date on what's happening across all monitors in your workspace and dive into individual monitors to examine test results and performance over time.

## Contents

* [Viewing monitors in the Dashboard](#viewing-monitors-in-the-dashboard)

* [Viewing individual monitors](#viewing-individual-monitors)

    * [Monitor summary](#monitor-summary)

    * [Request split](#request-split)

    * [Filters](#filters)

        * [Filtering by request](#filtering-by-request)

        * [Filtering by type](#filtering-by-type)

        * [Filtering by run result](#filtering-by-run-result)

        * [Filtering by region](#filtering-by-region)

        * [Filtering by formula](#filtering-by-formula)

    * [Time traverse](#time-traverse)

    * [Test results](#test-results)

    * [Console log](#console-log)

* [Next steps](#next-steps)

## Viewing monitors in the Dashboard

Each workspace has its own monitoring space within the Postman Dashboard, which you can navigate to by opening your [Dashboard](https://go.postman.co/) and selecting your workspace > **Monitors**. Monitors in team workspaces are visible to all members of the workspace.

The Dashboard provides a high-level overview of the monitors you have available in your workspace, including status, average success rate, and average response time within the given timeframe.

[![monitoring dashboard](https://assets.postman.com/postman-docs/monitor-dashboard1.jpg)](https://assets.postman.com/postman-docs/monitor-dashboard1.jpg)

A **Healthy** status indicates there were no failures in any of the runs during the specified timeframe. Failures will be noted here, as well as changes in the average success rates and response times.

> Hovering over a monitor in the list allows you to run it outside of its predetermined schedule by clicking **▶**. To pause, resume, edit, and delete monitors, select the **...** icon.

## Viewing individual monitors

You can view each monitor in more detail by selecting it from the Dashboard.

### Monitor summary

You can use the **Monitor Summary** to see how your APIs have performed over time. Each monitor run is represented by a bar in the graph.

The upper section charts your monitor's average response time for each run, while the lower section visualizes the number of failed tests for each run across all regions. To view the exact response time and failed percent, you can hover over each run individually.

![Monitor summary](https://assets.postman.com/postman-docs/monitor-summary-view.jpg)

### Request split

You can use **Request Split** to see how the response time varies for all requests made in a given run. To break this down into individual requests, you can utilize [Filters](#Filters).

![Request split](https://assets.postman.com/postman-docs/request-split-view.jpg)

### Filters

You can use filters to identify recurring patterns in your monitoring runs by selecting particular requests, run types, results, and regions (if applicable).

[![monitor filters](https://assets.postman.com/postman-docs/filter-example.gif)](https://assets.postman.com/postman-docs/filter-example.gif)

> You can **Clear Filters** to return to your original dashboard view.

#### Filtering by request

You can filter by request to compare an individual request's response time in different runs. Click to open the drop-down menu **All Requests** next to **Filter by**, then select your request.

#### Filtering by type

You can filter by run type to compare how the response time changes between manual runs, scheduled runs, and webhook runs. Click to open the drop-down menu **Type: All**, then select the type of run you'd like to analyze further.

> Manual runs are initiated in the Postman Dashboard or are triggered by the [Postman API](https://documenter.getpostman.com/view/631643/JsLs/?version=latest#5b277ca0-7114-e04e-f1f5-246fbbd6d973). Scheduled runs are initiated by the schedule you set when creating or editing your monitor. Webhook runs are initiated by integrations you've created.

#### Filtering by run result

Each run is labeled based on its result:

* **Successful**: Your monitor completed the run with no issues and passed all tests.
* **Failure**: Your monitor completed the run, however one or more tests failed.
* **Error**: Your monitor was unable to complete its run due to an error. An error can occur if there is a syntax error in the code you've written, a network error, or for various other reasons. If you encounter one, your [Console Log](#console-log) will help you identify what caused it.
* **Abort**: Your monitor was unable to complete its run within the allotted five minutes, at which point it timed out.

You can filter by run result to compare how your runs with the same result have differed. Click to open the drop-down menu **Run result: All**, then select one or more types of run results to view.

#### Filtering by region

You can filter by [region](/docs/postman/monitors/setting-up-monitor/#adding-regions) to compare how runs within different regions have varied. Click to open the drop-down menu **All Regions**, then select a region to view.

> This feature is only available if you selected multiple regions when you created or last edited your monitor. To learn more about regions, see [Adding regions](/docs/postman/monitors/setting-up-monitor/#adding-regions).

#### Filtering by formula

You can filter by mathematical formula to view the average, sum, minimum, and maximum response time for each run:

* **Average**: The average of the total response time across all regions.
* **Sum**: The sum of the response time across all regions.
* **Minimum**: The minimum total response time for a run across all regions.
* **Maximum**: The maximum total response time for a run across all regions.

Click to open the drop-down menu **Average**, then select an option. To view the newly calculated response time value, you can hover over each run individually.

### Time traverse

You can navigate through past run results to review what happened at a particular point in time. To do so, click **Go to** in the upper-left corner of the monitor summary or request split graph. Select the time and date, then click **Apply** to view a specific run.

![Time traverse](https://assets.postman.com/postman-docs/time-traverse.jpg)

> To revert the view to your most recent runs, select the time and date you defined in the upper-left corner of the graph, then click **Reset**.

### Test results

You can view **Test Results** below the monitor summary to find more detailed information on your tests, including which passed or failed, response codes, and response times.

[![test results](https://assets.postman.com/postman-docs/test-results-2.jpg)](https://assets.postman.com/postman-docs/test-results-2.jpg)

> If your monitor is configured to run in multiple regions, you can view the test results for a particular region by selecting that region from the dropdown to the right of the **Test Results** tab.

### Console log

You can view the **Console Log** below the monitor summary.

This section logs monitor run details along with the [`console.log`](https://learning.postman.com/docs/postman/sending-api-requests/debugging-and-logs/) statements that run as part of your pre-request and test scripts. Run details specify the various stages of a monitor run such as preparing run, running, rerunning ([if applicable](/docs/postman/monitors/setting-up-monitor/#using-retry-on-failure)), and the run result, along with error and test failure information.

[![console log](https://assets.postman.com/postman-docs/console-log-2.jpg)](https://assets.postman.com/postman-docs/console-log-2.jpg)

> If your monitor is configured to run in multiple regions, you can view the console logs for a particular region by selecting that region from the dropdown to the right of the **Console Log** tab.

You can use this console to both troubleshoot issues and learn more about an individual run's behavior.

## Next steps

Learn how to [troubleshoot your monitors](/docs/postman/monitors/troubleshooting-monitors/) and check out [Postman monitoring FAQs](/docs/postman/monitors/faqs-monitors/).
