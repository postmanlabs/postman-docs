---
title: "Do you have a static IP address?"
order: 3
page_id: "do-you-have-a-static-ip-address"
warning: false
---
Postman's infrastructure currently runs on Amazon's AWS platform. Please whitelist the following domains on your network firewall to allow WebSocket connections for Postman:
* \*.getpostman.com
* \*.postman.co
* \*.pstmn.io
* \*postman.com

By default webSocket connections use the same ports as HTTP (80) and HTTPS (443).

Since we use Amazon's AWS service, there isn't a fixed IP range we can provide. If needed, please see https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html, and whitelist the broad range mentioned there.
