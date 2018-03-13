---
title: Monitoring from static IPs
page_id: “monitoring_from_static_IPs"
tags: 
  - "enterprise"
warning: false
---


Static IPs are fixed IP addresses. Services with assigned static IP addresses use the same IP address to connect to the Internet. Companies often use fixed IP addresses to more easily connect to services over the Internet, or redirect domain names to their servers 

By default, Postman Monitors access APIs from dynamic IP addresses. For Enterprise users who want to test APIs behind a whitelist restricted firewall, Postman provides the option to monitor APIs from a static IP address. 

By whitelisting a single static IP address, customers can monitor their APIs using Postman’s monitoring service, while conforming to company security policies. 

You can change an existing monitor or create a new monitor to run from a static IP address.

#### Changing an existing monitor to run from a static IP address

In the Postman app, click the "Build" dropdown menu and select "Browse".<br/> <br/>

[![build menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-build-menu1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-build-menu1.png)<br/>

At the top of the page, select "Monitors". 

Choose the monitor and click the **Edit** button.

In the **EDIT MONITOR** modal, select "US (Static IP)" in "Regions" and click the **Save Changes** button to complete the process.<br/> <br/>

[![static IP monitor](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-select-staticIP2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-select-staticIP2.png)  

#### Creating a new monitor to run from a static IP address

In the Postman app, click the "Build" dropdown menu and select "Browse". 

Choose the collection you want to monitor, click the **Ellipsis (...)** button, and select "Monitor Collection". <br/><br/>

[![ellipsis menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-mock-collection2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-mock-collection2.png)<br/><br/>

In the **MONITOR COLLECTION** modal, [enter the name and select the environment of the monitor](https://elispostman.github.io/docs/v6/postman/monitors/setting_up_monitor){:target="_blank"}.  

In "Regions", select "US (Static IP)" to monitor the collection from a static IP address. You can also [specify a monitor to run in one or more regions](https://elispostman.github.io/docs/v6/postman/monitors/setting_up_monitor){:target="_blank"}. 

Click the **Monitor this collection** button to complete the process.





