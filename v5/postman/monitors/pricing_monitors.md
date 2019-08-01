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

Each Postman user gets 1,000 monitoring calls for free per month. Each Postman Pro or Enterprise team gets 10,000 free requests per month. The first month starts the day you send your first monitoring request, or when you set up a monthly block for your team.

Teams on the free Pro trial cannot go beyond this limit. 

### For paid teams

If you're part of a paid team, you have two options for using monitoring beyond 10,000 requests:

* You can pre-purchase block of monitoring calls, at $200.00 for a month's limit of 500,000 calls, or 
* You can pay-as-you go, at $0.75 for every 1,00 requests beyond the 10,000 free. 

Buying pre-purchased blocks is both more cost-effective and allows for a more predictable billing pattern.

*   You'll be charged for pre-purchased blocks + pay-as-you-go requests at the end of the monitoring billing cycle. We'll attempt to charge your card if one is saved under your account. If there's none, or we're unable to charge your card, we'll send you an invoice at your registered billing email, payable within 30 days.

### Request blocks for paid Pro teams

On the [billing page](https://app.getpostman.com/pay/billing), paid teams can configure "blocks" of requests to save on monitoring charges. Each request block gives you 500,000 requests at $200, and is auto-renewed each month. If you set up monitoring blocks before sending your first monitoring request, your monitoring billing cycle will start from the day you set up the blocks. You may increase or decrease your block count at any time during the billing cycle, but the cost of extra blocks will not be prorated.

At the end of each billing cycle, you'll be charged $200 for each block configured, plus $0.75 per 1000 requests made over your block limit.

##### **Example:**

If a paid team has configured 2 blocks, and makes 1,200,000 requests in a billing cycle, they will be charged: (2 blocks * $200/block) + ($0.75 * 190) = $542.50 for that cycle.

Prepaid requests: 10,000 (free) + 2*500,000 (2 blocks) = 1,010,000

Requests over the free request limit: 1,200,000 - 1,010,000 = 190,000

**Note**: Unused requests within a block do not roll over to the next month - they must be used within the month purchased.

### Tracking Usage

Team admins can use the "Track Usage" link on the monitor dashboard to check how many requests the team has made that month.
