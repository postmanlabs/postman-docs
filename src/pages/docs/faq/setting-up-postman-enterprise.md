---
title: "Setting up Postman Enterprise at your Organization"
order: 4
page_id: "setting-up-postman-enterprise"
warning: false
---

Make contact with your IT team to establish what the procedure is for adding a new piece of software. This varies from organization to organization, however, the following points are common:

* IT team to make an exception to device policy allowing for Postman to be installed on employee’s workstations. [Provide a Postman download link](https://www.getpostman.com/downloads/) to the IT team to help establish this exception.
* If your organization's network connection is facilitated via a proxy, you may need to configure Postman appropriately. Retrieve proxy connection details from your IT team and [setup within Postman](https://learning.getpostman.com/docs/postman/sending_api_requests/proxy/).
* IT team to whitelist Postman’s domains to ensure Postman data is synced with the cloud and all functionality works as expected.

Ensure your network firewall allows WebSocket connections for Postman's services:
* *.getpostman.com
* *.postman.co
* *.pstmn.io

By default, WebSocket connections use the same ports as **HTTP (80)** and **HTTPS (443)**.
