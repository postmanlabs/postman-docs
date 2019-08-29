---
title: Running Postman monitors using static IPs
page_id: "using_static_IPs_to_monitor"
tags: 
  - "enterprise"
warning: false
---

By default, Postman Monitors access APIs from dynamic IP addresses. For Enterprise users who want to test APIs behind a whitelist restricted firewall, Postman provides the option to monitor APIs from a static IP address. 

By whitelisting a single static IP address, customers can monitor their APIs using Postman’s monitoring service, while conforming to company security policies. 

Enterprise users can request the static IP option from our [Enterprise support team](http://pages.getpostman.com/Enterprise-Sales_Contact-Us.html).  Note that monitoring APIs using a static IP address is available for all Postman Enterprise customers. However, the static IP is a US address.

When the static IP option is enabled, Enterprise users can create a new monitor or change an existing monitor to run using a static IP address.

#### Creating a new monitor to run from a static IP address

In the Postman app, click the "Build" dropdown menu and select "Browse". 

Choose the collection you want to monitor, click the ellipsis **(...)** icon, and select "Monitor Collection". 

[![ellipsis menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-mock-collection2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-mock-collection2.png)

In the **MONITOR COLLECTION** modal, [enter the name and select the environment of the monitor](/docs/postman/monitors/setting_up_monitor/).  

In "Regions", select "US (Static IP)" to monitor the collection from a static IP address. You can also [specify a monitor to run in one or more regions](/docs/postman/monitors/setting_up_monitor/). 

Click the **Monitor this collection** button to complete the process.

### Changing an existing monitor to run from a static IP address

In the Postman app, click the "Build" dropdown menu and select "Browse".

[![build menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-build-menu1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-build-menu1.png)

At the top of the page, select "Monitors". 

Choose the monitor and click the **Edit** button.

In the **EDIT MONITOR** modal, select "US (Static IP)" in "Regions" and click the **Save Changes** button to complete the process.

[![static IP monitor](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-select-staticIP2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-select-staticIP2.png)  
