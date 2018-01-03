---
categories:
  - "postman"
  - "monitors"
title: "Pricing for monitors"
page_id: "pricing_monitors"
tags: 
  - "pro"
  - "enterprise"
warning: false
---

Usage of Postman Monitors is billed on a per-request basis. A request is any HTTP request needed to run your collection. If your collection has 5 requests, but you've used `postman.setNextRequest()` to skip some requests, or run requests multiple times, you'll be billed according to the number of requests actually made, not the number of requests in your collection. Any requests needed for the auth helpers (Digest Auth, OAuth, etc.) will also be included in your usage count.

Each Postman user gets 1,000 monitoring calls for free per month. Each Postman Pro or Enterprise team gets 10,000 free requests per month. The first month starts the day you send your first monitoring request, or when you set up a monthly block for your team.

Teams on the free Pro trial cannot go beyond this limit. If you are on the free trial, you will have to wait for the next monitoring billing cycle to get another 10,000 requests.

### For paid teams

*   If you're in a paid team, you can go over the limit, but you will be billed at $0.75 for every 1,000 extra requests you make (over the limit of 10,000).
*   For a more predictable billing pattern, you can configure "blocks" of requests for your team.
*   You'll be charged (for configured blocks + any overage requests) at the end of the monitoring billing cycle. We'll attempt to charge your card if one is saved under your account. If there's none, or we're unable to charge your card, we'll send you an invoice at your registered billing email, payable within 30 days.

### Request blocks for paid Pro teams

On the [billing page](https://app.getpostman.com/pay/billing){:target="_blank"}, paid teams can configure "blocks" of requests to save on monitoring charges. Each request block gives you 500,000 requests at $200, and is auto-renewed each month. If you set up monitoring blocks before sending your first monitoring request, your monitoring billing cycle will start from the day you set up the blocks. You may increase or decrease your block count at any time during the billing cycle, but the cost of extra blocks will not be prorated.

At the end of each billing cycle, you'll be charged $200 for each block configured, plus $0.75 per 1000 requests made over your block limit.

##### **Example:**

If a paid team has configured 2 blocks, and makes 1,200,000 requests in a billing cycle, they will be charged: (2 blocks * $200/block) + ($0.75 * 190) = $542.50 for that cycle.

Prepaid requests: 10,000 (free) + 2*500,000 (2 blocks) = 1,010,000

Overage requests: 1,200,000 - 1,010,000 = 190,000

Note that unused requests don't "roll-over" to the next month.

### Tracking Usage

Team admins can click 'Resource Usage' in the Team dropdown menu in the Pro dashboard.
[![resourceUsage](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitors-resourceUsage.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitors-resourceUsage.png)
