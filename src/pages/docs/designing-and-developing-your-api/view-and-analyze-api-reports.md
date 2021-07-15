---
title: "Analyzing with reports"
page_id: "viewing_and_analyzing_apis"
order: 99
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the API Builder"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
  - type: link
    name: "Managing and sharing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Create APIs directly within the Postman app"
    url: "https://blog.postman.com/postman-7-1-create-apis-directly-within-the-postman-app/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Validating APIs against schema"
    url: "/docs/designing-and-developing-your-api/validating-elements-against-schema/"
---

> [__API reporting is available on all Postman Enterprise and select Postman Business* plans.__](https://www.postman.com/pricing)

You can access reports on your APIs in your [Postman dashboard](https://go.postman.co/reports/team). API reports visualize data on API activities including creation, collection execution, test runs, and more, providing insights on performance, troubleshooting, and SLA adherence, as well as team and organization metrics.

To generate reports in Postman, first ensure you have carried out the following steps:

* [Share your API](/docs/designing-and-developing-your-api/managing-apis/)
* [Add a collection to the API](/docs/designing-and-developing-your-api/the-api-workflow/#generating-a-collection)
* Turn on __Save Responses__ in __History__ on the left of Postman
* Send a request from the collection

To view reports, in __APIs__ on the left of Postman, select the API and click __Reports__.

![API Reports](https://assets.postman.com/postman-docs/api-reports-button-v8.jpg)

The __Reports__ section of the web dashboard will open in your browser. Postman generates reports on [teams](#team-reports) and [APIs](#api-reports).

Your API reports will include different information if you're on an [Enterprise](#enterprise-reports) or [Business](#business-reports) plan.

> *Business plans commencing early 2021 and thereafter do not benefit from API reports. To upgrade to Postman Enterprise, [contact Postman's sales team](mailto:sales@postman.com).

## Enterprise reports

[![reports dashboard](https://assets.postman.com/postman-docs/reports-dashboard-overview-v8.jpg)](https://assets.postman.com/postman-docs/reports-dashboard-overview-v8.jpg)

You can access the following reports from the left navigation bar of your dashboard:

* [Team Activity](#team-activity-reports)
* [All API reports](#all-api-reports)
* [Private Network API reports](#private-network-api-reports)
* [Security Audit reports](#security-audit-reports)
* [Individual API view reports](#individual-api-view-reports)

## Team activity reports

The __Reports__ &gt; __Team Activity__ report provides team level metrics, including team overview, team size, billing details, team activity and workspaces. Click to view the details on a particular metric. This dashboard view can be split into three sections:

* [Team overview](#team-overview)
* [Billing](#billing)
* [Team activity](#team-activity)

### Team overview

Team overview reporting provides the following information:

* __Team created on__ is the date when the team was created
* __Team size over time__ is the size of the team over a period of time
* __Team size__ is the number of user accounts in the team
* __SSO identity provider__ is any [SSO](https://learning.postman.com/docs/administration/sso/intro-sso/) login you have configured for your team to access their Postman accounts
* __Active users over time__ displays the users who have signed into Postman at least once over the past 30 days

<img alt="active users" src="https://assets.postman.com/postman-docs/active-users-v8.jpg"/>

> In this example, the active users for the month of Nov 2020 is 240.

* __Total slots__  is the number of slots in the team
* __Invitations sent__ is the total number of invitations sent to join the team
* __Open vs used slots__ indicates unused slots vs invitations that are either pending or approved by a team admin

<img alt="open vs used slots" src="https://assets.postman.com/postman-docs/open-vs-used-slots-v8.jpg"/>

> In this example, the open slots for the month of Nov 2020 is 44 whereas the used slots is 306.

### Billing

Billing reporting provides the following information:

* __Plan__ is the current active plan you have subscribed
* __Billing cycle__ is either monthly or annually
* __Renewal date__ is the date of renewal of the existing plan

### Team activity

Team activity reporting provides the following information:

* __Total Workspaces__ is the total number of workspaces including team, personal and private workspaces
* __Empty workspaces__ are workspaces with no collections in them
* __Active workspaces__ have had at least one revision during the last 24 hours, not including personal workspaces

[![active empty workspaces](https://assets.postman.com/postman-docs/active-empty-workspaces-v8.jpg)](https://assets.postman.com/postman-docs/active-empty-workspaces-v8.jpg)

> In this example, the number of active workspaces is 58 whereas the number of empty workspaces is 103.

* __Total APIs__ is the total number of APIs in the team and personal workspaces, including private workspaces
* __Requests sent in Postman__ is the requests sent manually in Postman but not any requests sent via Newman, monitoring runs, or the collection runner

<img alt="request sent in postman" src="https://assets.postman.com/postman-docs/requests-sent-in-postman-v8.jpg"/>

> In this example, the total API requests sent in Postman for Nov 2020 is 38,243.

* __Total collections__ are the total number of collections in team and personal workspaces, including private workspaces
* __Collections created__ is the total number of collections created in team workspaces, including private workspaces

* __Collection runs__ is the number of collection runs made in team workspaces, including private workspaces

<img alt="Collections created and runs" src="https://assets.postman.com/postman-docs/collection-created-and-runs-v8.jpg"/>

* __Active monitors__ is the total number of active monitors in team workspaces including private workspaces (any monitor currently scheduled to run is *active*)
* __Monitoring requests__ is the number of requests made from monitors in team workspaces, including private workspaces.

<img alt="Monitoring requests" src="https://assets.postman.com/postman-docs/monitoring-requests-v8.jpg"/>

> In this example, the monitoring requests for the month of May 2020 is 5618K.

* __Publicly documented collections__ indicates any collections for which your team has published the documentation

* __Views of public documentation__ is the number of times people have viewed your team's public documentation
* __Views of private documentation__ is the number of times people have viewed your team's private documentation

[![public private documentation](https://assets.postman.com/postman-docs/views-documentation-v8.jpg)](https://assets.postman.com/postman-docs/views-documentation-v8.jpg)

> In this example, the number of public documentation views for Feb 2021 is 15,767 whereas the number of private documentation views is 1,603.

## All API reports

The __Reports__ &gt; __All APIs__ report provides metrics including an overview of your total APIs, a visualization of API creation over time, and a separate view of your APIs with and without mocks, monitors, tests, and documentation. This dashboard view can be split into two sections:

* [API overview](#api-overview)
* [API development](#api-development)

## API overview

[![api overview](https://assets.postman.com/postman-docs/all-api-overview-v8.jpg)](https://assets.postman.com/postman-docs/all-api-overview-v8.jpg)

The API overview reporting provides the following information:

* __Total APIs__ is the total number of APIs created in Postman in all the team workspaces
* __Private Network APIs__ is the number of APIs published on the teams' network
* __Shared APIs__ is the number of APIs shared with team workspaces
* __APIs created over time__ is the total number of APIs created during the month
* __APIs created in last 24 hours__ is the APIs created in the past 24 hours
* __APIs updated in last 24 hours__ APIs are considered active if there is some kind of activity in the last one day

For APIs created over a period of time, you can access the total count of APIs on a monthly basis.

[![APIs created over time](https://assets.postman.com/postman-docs/apis-created-over-time-v8.jpg)](https://assets.postman.com/postman-docs/apis-created-over-time-v8.jpg)

> In this example, the total number of APIs created for the month of July is 76.

## API development

[![api development](https://assets.postman.com/postman-docs/api-development-v8.jpg)](https://assets.postman.com/postman-docs/api-development-v8.jpg)

The API development reporting provides the following information:

* __API Versions by Schema Type__ indicates APIs by the type of schema used to define them (OpenAPI, GraphQL, Swagger, etc) visualized as a horizontal bar chart

[![apis by schema type](https://assets.postman.com/postman-docs/apis-by-schema-type-v8.jpg)](https://assets.postman.com/postman-docs/apis-by-schema-type-v8.jpg)

> In this example, the count of APIs for OpenAPI(3.0) is 249.

* __API Versions with Mocks__ is the number of APIs your team has added mocks to
* __API Versions with Monitors__ is the number of APIs your team has added monitors to
* __API Versions with Tests__ is the number of APIs your team has added test suites, integration tests and contract tests to
* __API Versions with Documentation__ is the number of APIs your team has added documentation to

[![API mocks monitors tests](https://assets.postman.com/postman-docs/api-mocks-monitors-tests-v8.jpg)](https://assets.postman.com/postman-docs/api-mocks-monitors-tests-v8.jpg)

> In this example, the APIs with/without mocks, monitors, tests and documentation are visualized in percentages. Hover over the chart to view the API data in figures. From the chart, you can see that 28% of the APIs have documentation.

## Private Network API reports

The __Reports__ &gt; __Private Network APIs__ report provides metrics including an overview of your total published APIs, a visualization of API categorised by schema type, and a separate view of your APIs with and without mocks, monitors, tests, and documentation.

[![private-network-api](https://assets.postman.com/postman-docs/private-network-apis-v8.jpg)](https://assets.postman.com/postman-docs/private-network-apis-v8.jpg)

The Private network API reporting provides the following information:

* __Total published APIs__ are the number of APIs that are published to the Private API network
* __API Versions by Schema Type__ indicates APIs by the type of schema used to define them (OpenAPI, GraphQL, Swagger, etc) visualized as a horizontal bar chart
* __API Versions with Mocks__ is the number of APIs your team has added mocks to
* __API Versions with Monitors__ is the number of APIs your team has added monitors to
* __API Versions with Tests__ is the number of APIs your team has added test suites, integration tests and contract tests to
* __API Versions with Documentation__ is the number of APIs your team has added documentation to

[![private-network-api](https://assets.postman.com/postman-docs/private-network-api-mocks-monitors-tests-v8.jpg)](https://assets.postman.com/postman-docs/private-network-api-mocks-monitors-tests-v8.jpg)

> In this example, the APIs with/without mocks, monitors, tests and documentation are visualized in percentages. Hover over the chart to view the API data in figures. From the chart,  you can see that 75% of the APIs have documentation.

## Security Audit reports

The __Reports__ &gt; __Security Audit__ report provides metrics including an overview of your total collections scanned, collections with exposed tokens, total exposed token and separate visualizations of exposed tokens by type and over time. This report consolidates the findings of the Postman token scanner from public documentation. For more on the Postman token scanner, see [Postman security scans](https://blog.postman.com/postman-security-scans/).

[![security audit](https://assets.postman.com/postman-docs/security-audit-v8.jpg)](https://assets.postman.com/postman-docs/security-audit-v8.jpg)

The Security Audit reporting provides the following information:

* __Total collections scanned__ are the number of collections that are published or updated
* __Collections with exposed tokens__ indicates total collection scans that has an exposed token
* __Total exposed tokens__ are the total tokens that are exposed across all published collections
* __Exposed tokens by type__ indicates the exposed tokens by type visualized as a donut chart
* __Exposed tokens over time__ indicates the exposed tokens over a period of time visualized as a column chart

## Individual API view reports

The __View reports by API__ provide the individual API view where you can enter the API name in the search box and generate a report on the API.

[![private-network-api](https://assets.postman.com/postman-docs/view-api-report.jpg)](https://assets.postman.com/postman-docs/view-api-report.jpg)

> Click __View reports by API__ > Enter __Reporting__ in the search box to view the above report.

## Business reports

![Reports Dashboard](https://assets.postman.com/postman-docs/reports-dash.jpg)

The __Team__ &gt; __Overview__ report provides organization level metrics, including new and active APIs, team size, and workspaces. Click to view more data on a particular metric.

## Team reports

Team reports provide the following information:

* __Total number of APIs__ present in the team, including in private and public workspaces
* __New APIs__ created within the team, not including new versions
* __Active APIs__ having at least one request being sent through a linked collection in the Postman request builder
* __Team size__ as the number of user accounts in the team
* __Empty workspaces__ with no collections in them
* __Active workspaces__ with at least one revision during the last 24 hours, not including personal workspaces

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
* You may not have sent a request—or you may have executed requests from monitoring, collection runs, or Newman, but not from the request builder in Postman.
* You may not have enabled __Save Responses__ in the __History__ tab in Postman.
* Sync is not successfully communicating with the Postman servers.

> If none of the above reasons apply and you can't see your data, please file a [GitHub issue](https://github.com/postmanlabs/).

## Next steps

You can use [monitors](/docs/designing-and-developing-your-api/monitoring-your-api/intro-monitors/) to gain detailed insight into your APIs.
