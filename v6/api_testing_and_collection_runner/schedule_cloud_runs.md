---

title: "Schedule runs using Monitoring"
page_id: "schedule_cloud_runs"
tags:
  - "web"
  - "cloud"
warning: false
---

### Monitoring Docs

Postman Monitors let you schedule your collections to run automatically! All Postman Pro and Enterprise teams have access - just head to https://monitor.getpostman.com/ to get started.

![](https://cloud.githubusercontent.com/assets/681190/21090390/792944e2-c065-11e6-8937-39c18fe888ad.png)




Click the ‘Add Monitor’ button to set up your first monitor. A monitor is simply a schedule to run one of your (or your team’s) collections at a fixed interval. You can even choose one of your environments to run it against.

![](https://cloud.githubusercontent.com/assets/681190/21090408/9806149e-c065-11e6-86d3-b606868b44f6.png)




Monitors can run as often as 5 minutes, or as infrequently as a week. If you want a collection that reminds you to leave work every weekday at 5p.m., you can set that up too:

![](https://cloud.githubusercontent.com/assets/681190/21090434/baba2098-c065-11e6-9647-ab436daaa8d6.png)





#### Statistics:


The monitoring dashboard shows you a list of monitors, and certain stats for each: status, success rate, and response time. 


A ‘healthy’ status indicates that all tests passed in each run of the monitor in the selected timeframe.

![](https://cloud.githubusercontent.com/assets/681190/21090453/dfa31cf2-c065-11e6-8692-8c660a476eae.png)




You can also check the changes to the average success rate and response time metrics over the previous timeframe. If you’ve updated your server-side infrastructure, for example, a 7.7% decrease in average response time is a great way to measure performance improvements.



You can click on any monitor to view more detailed information.

![](https://cloud.githubusercontent.com/assets/681190/21090460/edb4d038-c065-11e6-94b6-a7746cc7d935.png)


The main timeline shows all past runs of the monitor. Each bar signifies one run of the monitor - with green indicating passing tests and red indicating failing tests.


The results section shows request-level details: test results, response code, response time, and the response size.  The console log will print a detailed log of run events, along with any console.log statements that ran as part of your pre-request/test scripts.


![](https://cloud.githubusercontent.com/assets/681190/21090471/039dcf58-c066-11e6-916b-9e50c6b89f88.png)


For existing Pro teams, monitors are free-to-use till Jan 2017. Post that, each team will get 10,000 requests per month, free. 


If you go above that 10,000 call limit, there are two ways to pay for Monitors. You can pay $0.75 per 1000 calls, or subscribe to blocks of 500,000 requests @ $200 per month. 


If your request count is going to be more than 250,000 for the month, you should consider buying a block of requests which are more cost effective. Team admins can use the ‘Track Usage’ link on the monitor dashboard to check how many requests the team has made that month, 
