---
title: "How is Monitoring usage billed?"
order: 3
page_id: "how-is-monitoring-usage-billed"
warning: false
---
The limit that's imposed on usage of the monitoring feature is on the number of requests sent by your (or your team's) monitors.

By requests, we mean individual HTTP requests made from your collection, not the number of times your monitor is run. This means that a monitor running frequently can quickly exhaust your free limit. A collection of 5 requests running every 5 minutes would make 60 requests per hour, and 1000 requests in less than a day.

If you're part of a team, the free limit is 10,000 requests per month. For individual users, the limit is 1000 requests per month. The individual user limit is only for users who are not part of a team and does not apply if you're in a team. For Pro/Trial teams, the request limit is independent of the number of users.

For Trial teams, usage of the monitoring product is automatically blocked if the free limit is breached. This limit is reset when the monthly usage cycle ends.

Pro teams can continue using monitors, but incur an overage charge of $0.75/1000 requests over the limit.

Further documentation on this can be found [here](https://www.getpostman.com/docs/postman/monitors/pricing_monitors).
