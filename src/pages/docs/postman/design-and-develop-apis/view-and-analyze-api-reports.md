---
title: "Viewing and analyzing APIs"
page_id: "viewing_and_analyzing_apis"
order: 206
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the API Builder"
    url: "/docs/postman/design-and-develop-apis/the-api-workflow/"
  - type: link
    name: "Managing and sharing APIs"
    url: "/docs/postman/design-and-develop-apis/managing-apis/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Create APIs directly within the Postman app"
    url: "https://blog.postman.com/2019/05/17/postman-7-1-create-apis-directly-within-the-postman-app/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Validating APIs against schema"
    url: "/docs/postman/design-and-develop-apis/validating-elements-against-schema/"
---

> __[API reports are available on Postman Enterprise.](https://www.postman.com/pricing)__

You can access reports on your APIs in the [Postman web dashboard](https://app.getpostman.com/dashboard). API reports visualize data on API activities including creation, collection execution, test runs, and more, providing insights on performance, troubleshooting, and SLA adherence, as well as team and organization metrics.

To generate reports in Postman, first ensure you have carried out the following steps:

* [Share your API](/docs/postman/design-and-develop-apis/managing-apis/)
* [Add a collection to the API](/docs/postman/design-and-develop-apis/the-api-workflow/#generating-a-collection)
* Turn on __Save Responses__ in __History__ on the left of Postman
* Send a request from the collection

To view reports, in __APIs__ on the left of the Postman app, select the API and click __Reports__.

![API Reports](https://assets.postman.com/postman-docs/api-reports-button.jpg)

The __Reports__ section of the web dashboard will open in your browser. Postman generates reports on [teams](#team-reports) and [APIs](#api-reports).

![Reports Dashboard](https://assets.postman.com/postman-docs/reports-dash.jpg)

The __Team__ &gt; __Overview__ report provides organization level metrics, including new and active APIs, team size, and workspaces. Click to view more data on a particular metric.

## Team reports

Team reports provide the following information:

* __Total number of APIs__ present in the team, including in private and public workspaces
* __New APIs__ created within the team, not including new versions
* __Active APIs__ having at least one request being sent through a linked collection in the Postman app request builder
* __Team size__ as the number of user accounts in the team
* __Empty workspaces__ with no collections in them
* __Active workspaces__ with at least one revision during a recent period, not including personal workspaces

Team API requests are the count of requests sent over a period of time. The summary average is calculated by taking into account all days (even if no request is sent during a day).

[![team api req](https://assets.postman.com/postman-docs/Reports-TeamAPI.png)](https://assets.postman.com/postman-docs/Reports-TeamAPI.png)

> In this example, 15 requests were sent on Jun 12. Over the next six days, no requests were sent. The 7-day average is 2.14 (15/7).

## API reports

API reports provide a graphical representation of data and enable you to filter the data by collection and duration (last 7 or 30 days). You can view reports for any individual collections you have linked to an API.

> Reports only track data from APIs you have shared to team workspaces. If your API is only shared to a personal workspace you will not see reports for it.

API reports provide the following information:

* __Average response size__ of requests in bytes or kilobytes
* __Average response time__ for your API to serve a request
* __Number of error responses__ indicating error codes returned by your API
* __Traffic in Postman__ indicating usage and API traffic for performance measurement
* __Failed test runs__ indicating the number of failed tests in collection runs and monitors, for debugging and troubleshooting errors in your requests

The average response size is calculated based on the size of the response and the number of requests sent on a particular day.

[![team api req](https://assets.postman.com/postman-docs/Reports-AvgResp.png)](https://assets.postman.com/postman-docs/Reports-AvgResp.png)

> In this example, the response size is shown for Jun 12. No request is sent on other dates in the graph.

The average response time is calculated based on the time taken to return the response of the request and the number of requests sent on a particular day.

[![team api req](https://assets.postman.com/postman-docs/Reports-AvgRespTime.png)](https://assets.postman.com/postman-docs/Reports-AvgRespTime.png)

> In this example, the response time is shown for Jun 12. No response is received on other dates because no request is sent.
>
> Summary average response size may not match the average of the graph, because raw data is accounted for when calculating averages. In order to determine an accurate average, Postman does not calculate averages using data from already derived averages.

Failed test runs are the number of failed tests for collection runs during a period of time. The summary average is calculated by taking into account all of the days in that time period (even if no requests are sent on certain days).

## Report detail

Reports are not generated in realtime. You may experience a lag of a few minutes to 24 hours in report data being available. You can view the last updated time for reports.

<img alt="Reports Update" src="https://assets.postman.com/postman-docs/reports-last-update.jpg" width="400px"/>

> You cannot currently download or export your reports.

Postman reports track data sent only through the request builder, and not through Newman, collection runs, or monitors. However, failed test runs generate reports using collection runs.

> You cannot view the details of entities you do not have access to.

If you don't see any data in your reports, or your data is incomplete (for example you have empty response times or sizes) this may be due to one of the following reasons:

* It's too early to check. The data refreshes every 24 hours.
* You may not have linked a collection to your API.
* You may not have sent a request—or you may have executed requests from monitoring, collection runs, or Newman, but not from the request builder in the Postman app.
* You may not have enabled __Save Responses__ in the __History__ tab in the Postman app.
* App sync is not successfully communicating with the Postman servers.

> If none of the above reasons apply and you can't see your data, please file a [GitHub issue](https://github.com/postmanlabs/).

## Next steps

You can use [monitors](/docs/postman/monitors/intro-monitors/) to gain detailed insight into your APIs.
