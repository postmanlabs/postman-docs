---
title: "Setting up a monitor"
page_id: "setting_up_monitor"
warning: false

---


Postman lets you monitor shared or private collections. If you choose to monitor a shared collection, your team can see the monitor. If you create a monitor on an unshared collection, the monitor is private and only visible to you.

You can create a monitor from the:
* Sidebar
* **New** button
* Launch screen
* Postman web 
 
### Sidebar 

You can create a monitor for an existing collection from the sidebar.

1. In the Postman app, click on the ellipsis (…) next to the collection you want to monitor. 

[![monitor dropdown](https://assets.postman.com/postman-docs/monitor_sidebar2.png)](https://assets.postman.com/postman-docs/monitor_sidebar2.png)

<ol start="2">
  <li>Select "Monitor Collection".</li>
  <li>In the <b>MONITOR COLLECTION</b> modal, you must: </li>
  </ol>
  
  * Enter the name of the monitor.
  * Select an environment (optional).
  * Set how frequently the monitor should run. For more information on how to schedule a monitor, see the “Monitoring schedule and region” section below.
  * Select one or more regions of the world from where you want to monitor your results.
  
You can also select advanced monitor options to receive email notifications for run failures and errors, request a timeout, request a delay, not follow redirects, and disable SSL validation. 
  
<ol start="4">
  <li>Click the <b>Monitor this collection</b> button.</li>
 </ol>

[![monitor modal](https://assets.postman.com/postman-docs/monitorCollectionScreen3.png)](https://assets.postman.com/postman-docs/monitorCollectionScreen3.png)

### New button

When you use the **New** button to create a monitor, Postman guides you on how to set up a monitor. The process requires you to select the requests to monitor and configures how you want to monitor the requests. Then Postman suggests steps to consider after you create the monitor.

Postman makes a collection of the URLs and adds a script that checks the response time and response code for each URL.
You receive notifications when either the response code doesn’t match or the response time falls below the expected values. You can also add method, headers, and body to the individual URLs in the request builder, as well as add custom test scripts.

Here's how to create a monitor with the **New** button.

<br>

1. In the header toolbar, click the **New** button.

[![new button](https://assets.postman.com/postman-docs/WS-HeaderToolBar-new+button1.png)](https://assets.postman.com/postman-docs/WS-HeaderToolBar-new+button1.png)

The **Create New** tab appears.

[![create screen](https://assets.postman.com/postman-docs/collection-create-new-screen2.png)](https://assets.postman.com/postman-docs/collection-create-new-screen2.png)

**Note**: At the bottom, you can select "Show this window at launch" to indicate whether you want the **Create New** tab to display each time you open Postman.

<ol start="2">
  <li>Click "Monitor".</li>
  <li>
Select if you want to monitor a new API or an existing or team collection. If you create a new API to monitor, you must select a request method and enter the request path, response code, and response body. If you use an existing or team collection, you must select a collection from a list of existing or team collections.</li>
</ol>

[![request monitor](https://assets.postman.com/postman-docs/monitor-select-requests.png)](https://assets.postman.com/postman-docs/monitor-select-requests.png)
 
<ol start="4">
  <li>After you select or create the request you want to monitor, click the <b>Next</b> button. </li>
  <li>In the <b>Configuration</b> tab, you must:</li>
</ol>

  * Enter the name of the monitor
  * Select an environment (optional).
  * Set how frequently the monitor should run. For more information on how to schedule a monitor, see the “Monitoring schedule and region” section below.
  * Select one or more regions of the world from where you want to monitor your results.
    
  [![configure monitor](https://assets.postman.com/postman-docs/monitor-configure.png)](https://assets.postman.com/postman-docs/monitor-configure.png)  
 
 <ol start="6">
  <li>Click the <b>Create</b>  button. </li>
</ol>

In the **Next steps** tab, see a list of suggested next steps to maximize the effectiveness of your monitor.
    
  [![next monitor](https://assets.postman.com/postman-docs/monitor-next-steps.png)](https://assets.postman.com/postman-docs/monitor-next-steps.png)    
    
     
### Launch screen

The **Create New** tab appears by default when you launch Postman. 
1. Open the Postman app.
2. In the **Create New** tab, click "Monitor".
3. Follow steps 3-6 in the previous **New** button section.

**Note**: At the bottom, you can select "Show this window at launch" to indicate whether you want the **Create New** tab to display each time you open Postman.


### Postman web

1. Go to [Workspaces dashboard](https://app.getpostman.com/dashboard) and click "Monitors" and click the **Monitor this collection** button.

<ol start="2">
  <li>In the <b>Create Monitor</b> modal, select a collection, schedule the frequency of the run, enter a monitor name, select the environment, and select the regions of the world from where you want to monitor your results. For more information on how to schedule a monitor, see the "Monitoring schedule and region" section below.</li>
</ol>

[![create monitor](https://assets.postman.com/postman-docs/WS-create-monitor-web.png)](https://assets.postman.com/postman-docs/WS-create-monitor-web.png)

You can also select advanced monitor options to receive email notifications for run failures and errors, request a timeout, request a delay, not follow redirects, and disable SSL validation. 

[![monitor preferences](https://assets.postman.com/postman-docs/monitor_prefs.png)](https://assets.postman.com/postman-docs/monitor_prefs.png)

<ol start="3">
  <li>Click the <b>Create Monitor</b> button.</li>
</ol>

### Monitoring schedule and region

You must select the frequency of how often you want to run your monitor. Monitors can run as frequently as every 5 minutes. For example, you can run a monitor every 5 minutes or every Monday at 9:00 AM. 

When you specify a monitor to run in multiple regions, the monitor will run multiple times. As a result, if there is a side effect from running the monitor, it will also happen multiple times.

Postman Enterprise users interested in setting up dedicated IPs for their API monitoring should contact [help@postman.com](mailto:help@postman.com).

Postman Enterprise users interested in setting up dedicated IPs for their API monitoring should contact [help@postman.com](mailto:help@postman.com).

### Additional preferences

| **Additional preferences** | **Description** |
| --- | --- |
| Email notifications | Gets notifications about failures on up to 5 email addresses. |
| Request timeout | Specifies a time interval after which your request is considered to time-out. |
| Delay between requests | Adds a time lag between subsequent requests. |
| Don’t follow redirects | Disables all following redirects. |
| Disable SSL validation | Disables validations performed on SSL certificates. Check this setting if you use self-signed certificates. Use with caution! |
