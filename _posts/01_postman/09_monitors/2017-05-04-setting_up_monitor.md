---
categories:
  - "postman"
  - "monitors"
title: "Setting up a monitor"
page_id: "setting_up_monitor"
warning: false
---

Postman lets you monitor shared or private collections. If you choose to monitor a shared collection, your team can see the monitor. However, if you create a monitor on an unshared collection, the monitor will be private and only visible to you.


You can create a monitor from the:
* Sidebar menu
* **New** button
* Launch screen
* Postman web 
 
### Sidebar menu
You can create a monitor for an existing collection from the sidebar. <br>
In the Postman app, click on the ellipses (…) next to the collection you wish to monitor. 

[![monitor dropdown](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor_sidebar2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor_sidebar2.png)

1. Select "Monitor Collection" to open the **MONITOR COLLECTION** modal.
2. Enter a name for this monitor and choose a corresponding environment. 
3. Add an appropriate [schedule for the monitor](/docs/postman/monitors/setting_up_monitor#monitoring-schedule), and configure [additional preferences](/docs/postman/monitors/setting_up_monitor#additional-preferences).
4. Click the **Monitor this collection** button.

[![monitor modal](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitorCollectionScreen.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitorCollectionScreen.png)

### New button

In the header toolbar, click the **New** button.

[![new button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/HeaderToolBar.png)

The "Create New" modal appears.

[![create screen](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_new_screen.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/create_new_screen.png)

**Note**: At the bottom of the screen you can select "Show this window at launch" to indicate whether you want the "Create New" screen to display each time you open Postman.

1. Click "Monitor".

2. In the "Create a monitor" screen, you can create a monitor for a "New API", "My Collections", and "Team Library". 
   * New API
     
     Enter a request path, status code, response code and click the **Next** button.
     Enter the monitor name, indicate how often you want the monitor to run, select the region(s) to monitor from and click the **Create** button.
     The Next Steps screen appears with information about the monitor and provides suggestions about next steps.
   * My Collections
   
     Select a collection.
     Select an environment, indicate if you want the mock server to be private, and click the **Create** button.
     The "Next Steps" screen appears with information about the mock server and provides suggestions about next steps.
   * Team Library
   
     Select a shared collection.
     Select an environment, and click the **Create** button.
     The "Next Steps" screen appears with information about the mock server and provides suggestions about next steps.

Postman makes a collection of the URLs and adds a script that checks the response time and response code for each URL.
You receive notifications when either the response code doesn’t match or the response time falls below the expected values. You can also add method, headers, and body to the individual URLs in the request builder, as well as add custom test scripts.


[![create screen](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/createMonitor_config.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/createMonitor_config.png)


#### Launch screen

The "Create New" screen appears by default when you launch Postman. At the bottom of the screen you can select "Show this window at launch" to indicate whether you want the "Create New" screen to display each time you open Postman.

1. Open Postman.
2. In the "Create New" screen, click "Monitor".
3. Follow step 3 in the previous **New** button section.


### From the Postman web

1. Sign in to Postman web and click "Library" and select "Monitors".

[![webview menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Monitors_webView.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Monitors_webView.png)

2. In the "Create Monitor" screen, select a collection, schedule the frequency, enter a name, select the environment, and the regions you want to monitor.

[![create monitor](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/createMonitor_web.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/createMonitor_web.png)

3. In "Show Additional Preferences", indicate if you want to receive notification. You can also indicate "Request Timeout", "Delay between requests", "Don't follow redirects", or "Disable SSL validation".

[![monitor preferences](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor_prefs.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/monitor_prefs.png)

4. Click the **Create Monitor** button.

### Monitoring schedule and region

Select a frequency to run your monitor. Monitors can run as frequently as every 5 minutes. For example, you can run a monitor every 5 minutes or every Monday at 9:00 AM. 

When you specify a monitor to run in multiple regions, the monitor will run multiple times. This means that if there is a side effect from running the monitor, it will also happen multiple times.

Postman Enterprise users interested in setting up dedicated IPs for their API monitoring should contact [{{site.pm.help_email}}](mailto:{{site.pm.help_email}}).

Postman Enterprise users interested in setting up dedicated IPs for their API monitoring should contact [{{site.pm.help_email}}](mailto:{{site.pm.help_email}}).

### Additional preferences

| **Additional preferences** | **Description** |
| --- | --- |
| Email notifications | Gets notifications about failures on up to 5 email addresses. |
| Request timeout | Specifies a time interval after which your request is considered to time-out. |
| Delay between requests | Adds a time lag between subsequent requests. |
| Don’t follow redirects | Disables all following redirects. |
| Disable SSL validation | Disables validations performed on SSL certificates. Check this if you use self-signed certificates. Use with caution! |
