---
title: "Pricing for monitors"
page_id: "pricing_monitors"
tags: 
  - "pro"
  - "enterprise"
warning: false
---

Postman Monitors are billed on a per-request basis. A request is any HTTP request needed to run your collection.

If your collection has 5 requests, but you've used `postman.setNextRequest()` to skip some requests, or run requests multiple times, you'll be billed according to the number of requests actually made, not the number of requests in your collection.

Any requests needed for the auth helpers (Digest Auth, OAuth, and so on.) will be included in your count.

Each Postman user can use monitoring for free, with limits based on their plan type:

* Free Postman users get 1,000 monitoring calls for free per month
* Postman Pro teams get 10,000 free monitoring requests every month
* Postman Enterprise teams get 100,000 free requests per month

The first month starts the day you send your first monitoring request, or when you set up a monthly block for your team.

## For Pro and Enterprise teams

If you're part of a paid team, your team can purchase additional monitoring beyond the number of calls included in your plan.

* You can pre-purchase a discounted block of monitoring calls, at $20.00 for a month's limit of 50,000 calls, or
* You can pay-as-you go, at $0.75 for every 1,000 requests beyond the 10,000 free.

Buying pre-purchased blocks is more cost-effective and allows for a more predictable billing pattern.

* You'll be charged for pre-purchased blocks + pay-as-you-go requests at the end of the monitoring billing cycle. We'll attempt to charge your card if one is saved under your account. If there's none, or we're unable to charge your card, we'll send you an invoice at your registered billing email, payable within 30 days.

## Request blocks for Pro and Enterprise teams

On the [billing page](https://app.getpostman.com/pay/billing), paid teams can configure "blocks" of requests to save on monitoring charges. Each request block gives you 50,000 requests at $20, and is auto-renewed each month. If you set up monitoring blocks before sending your first monitoring request, your monitoring billing cycle will start from the day you set up the blocks. You may increase or decrease your block count at any time during the billing cycle, but the cost of extra blocks will not be prorated.

At the end of each billing cycle, you'll be charged $20 for each block configured, plus $0.75 per 1000 requests made over your block limit.

### Example -

If a paid team has configured 20 blocks, and makes 1,200,000 requests in a billing cycle, they will be charged: (20 blocks * $20/block) + ($0.75 * 190) = $542.50 for that cycle.

Prepaid requests: 10,000 (free) + 20*50,000 (20 blocks) = 1,010,000

Requests over the free request limit: 1,200,000 - 1,010,000 = 190,000

**Note:** Unused requests within a block do not roll over to the next month - they must be used within the month purchased.

## Tracking Usage

Team admins can use the "Track Usage" link on the monitor dashboard to check how many requests the team has made that month.
