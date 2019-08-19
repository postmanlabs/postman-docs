---
title: "Intro to Monitoring"
page_id: "intro_monitors"
warning: false

---

## What is monitoring?

Postman monitoring lets you run a [collection](/docs/postman/collections/creating_collections/) periodically to check for its performance and response. You can set up a monitor to run as frequently as 5 minutes to check if all the requests in your collection are up and healthy.

When you set up a monitor, Postman servers will hit the endpoints in your collection according to the specified frequency. You can also select a corresponding [environment](/docs/postman/environments_and_globals/manage_environments/) to use and store variables. If you have written [tests](/docs/postman/scripts/test_scripts/) for your requests, the monitor would run these tests to validate the response and notify you when a test fails. You can configure how to receive the alerts from a wide number of [integrations](/docs/postman_pro/integrations/intro_integrations/) available.

Each Postman user gets 1,000 monitoring calls for free per month. Paid teams have higher limits: Postman Pro teams have 10,000 monthly monitoring calls included, and Enterprise teams have 100,000 free monthly requests. It is very simple to set up a monitor. Learn more about [monitoring pricing](/docs/postman/monitors/pricing_monitors/) and [getting started with monitors](/docs/postman/monitors/setting_up_monitor/).

**Note:** Setting up monitors by minutes is not available for free users. If you are a free user, you can schedule your monitor runs on an hourly, daily or a weekly basis.

## Running collections in a monitor (vs. the Postman app collection runner)

There are a few minor differences between running collections in a Postman monitor as compared to using the Postman app collection runner.  If your collection relies on any of these features, then it may not work the same way in Postman monitoring as it does in the Postman app.

### Variables

* Can't import existing global variables, but you can create new ones during a monitor run.
* Global and environment variables are not persisted. If you require persisting environment variables, we recommend adding a call to update the environment variable using the [Postman API](/docs/postman/postman_api/intro_api/). The following is an [example of how to update the environment variable](https://documenter.getpostman.com/view/218543/lunch-picker/6fWy4Ao#fe7e2416-4af9-fffc-02af-b8fc2c58a181) in this manner.

[![persist env in monitor](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitorPersistEnv.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitorPersistEnv.png)

### Console Output

* Unlike in the Postman app, request & response bodies are not logged to the console by default. This is for security and privacy reasons.
* Same goes for potentially-sensitive headers, such as cookies and auth keys

### Time Limits

* Monitoring can currently be scheduled to run as often as every 5 minutes, or as little as once a week. Each run is limited to 5 minutes, including all HTTP requests, responses, and pre-request and test scripts.

### File Uploads

* Can't attach files to requests, like you can in the request builder
* But you CAN upload data as raw request body

### Multiple Iterations

* Monitors only run 1 iteration by default
* But you can use setNextRequest() to do multiple iterations

### Multi-region Monitoring

* Monitors allow you to run collections in specified geographic regions
* Can only specify multi-region monitoring from the [monitoring page](https://monitor.getpostman.com)

### Data Files

* Can't attach data files like you can in the runner
* But you can access data files from APIs, such as Google Docs, Google Sheets, Dropbox, etc.

### Accessible APIs

* As with the Postman app, monitoring requires all URLs to be publicly-available on the Internet. In the future, you will be able to monitor private APIs as well.
* Monitors can't directly access your `localhost` and might encounter a firewall because monitoring runs in the Postman cloud.

## Monitoring resources in multiple regions

Monitoring resources across multiple regions provides useful information about the status and response time for your endpoints. If you’ve implemented a solution by setting up multiple servers running on multiple continents, then you want to make sure your endpoints are healthy and that none of your users are experiencing unusual delays.

Postman supports monitoring in 6 geographic regions around the world. If you’re interested in a region that’s not listed in the Postman interface, contact us at [help@getpostman.com](mailto:help@getpostman.com) or through the chat box on the [monitors page](https://monitor.getpostman.com).

For Postman Enterprise users, there is an additional option available to establish dedicated IP addresses for whitelisting and source logging to address security requirements for their team. For example, by setting up a static IP address for API monitoring, you can whitelist the dedicated IPs with your incoming servers to ensure they will accept requests from those IP addresses. Postman Enterprise users interested in [setting up static IPs](/docs/postman_enterprise/using_static_IPs_to_monitor/) for their API monitoring should contact [help@getpostman.com](mailto:help@getpostman.com).

## Pricing for monitoring

Monitoring is priced per request made, with some free requests included every month. Learn more about [monitoring pricing](/docs/postman/monitors/pricing_monitors/).

## Free monitoring calls with your Postman account

Your Postman account gives you a limited number of free monitoring calls per month. You can check your usage limits through the [Postman API](https://docs.api.getpostman.com) or the [account usage page](https://go.pstmn.io/postman-account-limits).
