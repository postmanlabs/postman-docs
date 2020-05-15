---
title: "Intro to Monitoring"
order: 161
page_id: "intro_monitors"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
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
  - type: link
    name: "BetterCloud's monitor migration"
    url: "https://youtu.be/0acChpnbrlQ"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "From manual to automated testing: The roadblocks and the journey"
    url: "https://medium.com/better-practices/from-manual-to-automated-testing-the-roadblocks-and-the-journey-6333dfacc5ae"

warning: false

---

Postman Monitoring helps you to stay up to date on the health and performance of your APIs. Within a matter of seconds, you can set up Postman's monitoring service and integrate it into your API development pipeline.

## Contents

* [What is monitoring?](#what-is-monitoring)

* [Pricing](#pricing)

    * [Usage limits](#usage-limits)

    * [Overages](#overages)

* [Viewing monitor usage](#viewing-monitor-usage)

    * [How Postman calculates monitor usage](#how-postman-calculates-monitor-usage)

* [Running collections in a monitor](#running-collections-in-a-monitor)

    * [Variables](#variables)

    * [Console output](#console-output)

    * [Time limits](#time-limits)

    * [File uploads](#file-uploads)

    * [Data files](#data-files)

    * [Multiple iterations](#multiple-iterations)

    * [Multi-region monitoring](#multi-region-monitoring)

    * [Accessible APIs](#accessible-apis)

* [Next steps](#next-steps)

## What is monitoring?

Monitoring is a way to stay up to date on the health and performance of your APIs. Postman's built-in monitoring service helps you consolidate an additional step in your API development lifecycle.

Postman monitors are based on [collections](/docs/postman/collections/intro-to-collections/). Monitors can be scheduled as frequently as every five minutes and will run through each request in your collection, similar to the [collection runner](/docs/postman/collection-runs/intro-to-collection-runs/). You can also attach a corresponding [environment](/docs/postman/variables-and-environments/variables/#environments-in-postman) with variables you'd like to utilize during the collection run.

The value of monitors lies in your [test scripts](/docs/postman/scripts/test-scripts/). When running your collection, a monitor will use your tests to validate the responses it's receiving. When one of these tests fail, you can automatically receive an email [notification](/docs/postman/notifications/#monitor-notifications) or configure the available [integrations](/docs/integrations/intro-integrations/) to receive alerts in tools like Slack, PagerDuty, or HipChat.

## Pricing

You can use Postman monitoring with any paid or free plan type.

### Usage limits

You can find your account type's monthly usage limits by referring to your [usage overview](https://go.pstmn.io/postman-account-limits).

> Postman maintains default limits on various team and user actions to ensure the overall performance and availability of monitoring.
>
> These include the following limits:
>
> * Maximum number of active and paused monitors per team = 300
> * Maximum parallel runs of multiple monitors = 500
> * Maximum parallel runs of a single monitor = 200
>
> Postman will notify team admins via email if your team encounters these limits, as well as notify team members in the app or web dashboard.
>
> For assistance regarding these limits and to request changes, contact the [Postman support team](https://support.getpostman.com/).

### Overages

With a free Postman account, once you've reached your usage limit for monitoring you'll be automatically capped for the remainder of your monthly cycle. To continue to use monitoring for the remainder of your cycle, you can [upgrade your Postman plan](https://app.postman.co/purchase).

With a paid Postman account, you have the option to cap your monthly monitoring usage by navigating to your [billing dashboard](https://go.postman.co/billing) > **Overages** and deselecting **Allow monitoring overages**. Overages are allowed by default and are charged at a pay-as-you-go rate. You can also opt to [purchase monitoring blocks](https://app.postman.co/billing/overview).

> Unused monitoring requests or blocks do not roll over and must be consumed during the month purchased.

See more on [how Postman calculates usage](#how-postman-calculates-monitor-usage).

## Viewing monitor usage

Your [monitor usage dashboard](https://go.postman.co/usage/monitors), also available by navigating to your general [usage dashboard](https://go.postman.co/usage) > **View detailed monitoring usage**, provides a high-level overview of your team's monitoring usage.

This page allows you to view your team's current billing period, how many requests have been made, and which monitors have run. It also identifies monitors by name, collection, environment, and creator, and provides a breakdown of requests made by each monitor.

[![monitoring usage details](https://assets.postman.com/postman-docs/monitoring-usage-details.jpg)](https://assets.postman.com/postman-docs/monitoring-usage-details.jpg)

> If you are concerned about or are surprised by overages, this is the place to go to find all of your team's active monitors in one place, plus information to help you and your team make informed decisions on items like monitoring frequency.

### How Postman calculates monitor usage

Postman calculates monitoring usage based on the actual number of requests made during a run, which may or may not be equal to the number of requests in your collection.

If you use `postman.setNextRequest()` to skip a request or run a request multiple times, Postman will take that into account when calculating usage. Postman will also count any requests required for [authorization](/docs/postman/sending-api-requests/authorization/).

## Running collections in a monitor

There are a few differences between running collections in a Postman monitor and running them via the in-app collection runner, so take note of the following.

### Variables

* You cannot import existing global variables to a monitor, but you can create new ones during a run.
* Global and environment variables can be updated and subsequently used during a monitoring run, however they will immediately revert to their original values, unlike in the collection runner when [persist variables](/docs/postman/collection-runs/starting-a-collection-run/#persist-variables) is enabled.
    * If you require persistent variables, you can add a call to update your environment using the [Postman API](/docs/postman/postman-api/intro-api/).

### Console output

* For your security and privacy, Postman does not log request or response bodies in the console.
* Postman will also not log headers, as they may include items like cookies and authorization keys.

### Time limits

* Runs are limited to five minutes, including all HTTP requests, responses, pre-request, and test scripts.

### File uploads

* You cannot attach files to requests, unlike in the request builder, however you can upload data as a raw request body.

### Data files

* You cannot attach data files, unlike in the collection runner, but you can access them via APIs, including Google Docs, Google Sheets, and Dropbox.

### Multiple iterations

* Monitors only run one iteration by default, but you can use setNextRequest() to run multiple iterations.

### Multi-region monitoring

* When setting up or editing a monitor, you can select multiple geographic regions you'd like your monitor to run from, or opt to auto-select a region.

> If you’re interested in a region that’s not listed in the Postman interface, contact the [Postman support team](https://support.getpostman.com/).

### Accessible APIs

* Monitors require all URLs to be publicly available on the internet as they run in the Postman cloud. A monitor cannot directly access your localhost or run requests behind a firewall. However, to overcome this issue, static IPs are available on [Postman Business and Enterprise plans](https://www.postman.com/pricing).

## Next steps

Learn how to [set up a monitor](/docs/postman/monitors/setting-up-monitor/) and check out [monitoring APIs and websites](/docs/postman/monitors/monitoring-apis-websites/) to get started.
