---
title: "Is there a way to disable the automatic re-run of a monitor?"
order: 3
page_id: "disable-monitor-re-run"
warning: false
---
When a monitor which has been running successfully fails for any reason, the system will re-run it automatically. This is done in order to avoid failures due to transient network issues. Currently, there is no way to avoid this behavior, monitoring platform will automatically re-run the monitor when it encounters an error. The run will be re-attempted twice at most, and it will be marked as a failure if the third and final attempt also fails.

We have this request being tracked on our [Github tracker](https://github.com/postmanlabs/postman-app-support/issues/5900), please upvote the request there so that our product team can prioritize and add this to our development roadmap. You can refer to [this document](https://learning.getpostman.com/docs/postman/monitors/viewing_monitor_results) to know more about monitor results.
