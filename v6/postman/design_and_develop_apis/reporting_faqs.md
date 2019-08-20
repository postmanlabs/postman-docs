---
title: "Reporting FAQs"
page_id: "reporting_faqs"
warning: false
---

1. Are these reports generated real-time?

    The reports are not generated real-time. They may show you a lag of a few minutes to 24 hours. You can view the last updated time to know the time when the reports were last refreshed:

    [![team api req](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-LastUpdated.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-LastUpdated.png)

1. What kind of reports can I see now?

    You can see both Team and API-level reports. You will be able to view all the APIs shared within the team.

1. Can I view reports for individual collections?

    Yes, you can view reports for the individual collections if your collection is linked to an API.

1. How do I download/export reports?

    At the moment, Postman does not allow you to download or export your reports. However, Postman will soon enable you to do this.

1. I don’t see any data in reports, why?

    There could be multiple reasons for not seeing data in your reports:

    * It is too early to check. The data refreshes every 24 hours and it may be possible that the data was not refreshed yet.

    * You might have linked a wrong collection to your API.

    * You might have forgotten to link the collection to your API.

    * You did not send any request or you have executed requests from Monitoring/Collection Run/Newman but not from the request builder.

    * App sync is not working and requests failed to reach Postman server.

    **Note:** If none of the above reasons apply for your situation, please file a [github issue](https://github.com/postmanlabs/) so Postman team can look into it and address.

1. Why is my API not listed here?

    Reports only track data from APIs that have been shared to team workspaces. Your API may have been created in your personal workspace.

1. How are metrics calculated in Postman?

    1. Team API requests

        Team API requests are the count of requests sent over a period of time. The summary average is calculated by taking into account all the days (even if no request is sent during a day). Let's consider the following example:

        [![team api req](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-TeamAPI.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-TeamAPI.png)

        In the example above, 15 requests were sent on Jun 12. Over the next six days, no requests were sent. The 7-day average is 2.14 (15/7).

    1. Average response size

        The average response size is calculated based on the size of the response and the number of requests sent on a particular day. The following screen illustrates this:

        [![team api req](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-AvgResp.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-AvgResp.png)

        In the above screen, the response size is shown for Jun 12. No request is sent on other dates in the graph.

    1. Average response time

        The average response time is calculated based on the time taken to return the response of the request and the number of requests sent on a particular day. The following screen illustrates this:

        [![team api req](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-AvgRespTime.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Reports-AvgRespTime.png)

        In the above screen, the response time is shown for Jun 12. No response is received on other dates because no request is sent.

    1. Failed test runs

        Gives you the number of failed tests for collection runs during a period of time. The summary average is calculated by taking into account all the days (even if no request is sent during a day).

1. What are the data sources Postman uses to calculate metrics?

    Postman reports track data sent only through the request builder but does not track data sent through Newman, Collection runs and Monitors. However, failed test runs generates reports using Collection runs.

    Postman obtains data from Collection runs to generate reports for failed test runs.  

1. Why summary average response size does not match with the average of the graph?

    Typically, raw data is accounted for when calculating averages. In order to determine an accurate average, you must not calculate averages using data from already derived averages.

1. Can I view details of entities for which they don’t have access to?

    No, you cannot view the details of entities for which you don't have access.

1. Why Response size/time and response codes are empty when requests are sent?

    You must enable the setting **Save Responses** in the **History** tab. By default, it’s not enabled.

    [![save response](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/History_Response_Jun18.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/History_Response_Jun18.png)
