---
title: "How to Persist variables between monitor runs"
order: 3
page_id: "how-to-persist-variables-between-monitor-runs"
warning: false
---

When collections are run through Collection Runner, there is an option as "Keep Variable Value" which gives us an option to persist variables.

![Screen_Shot_2018-09-26_at_2.19.02_PM.png](https://support.getpostman.com/hc/article_attachments/360013517974/Screen_Shot_2018-09-26_at_2.19.02_PM.png)

However the same doesn't work for Monitor run and the reason being is the test & pre-request that are being used will set the environment variables for that active session but will not save them. To achieve the required result to persist variable for Monitor run one has to make use of Postman API (PUT Update Environment) to save the environment variables before using them in the Monitor Run.

Please navigate to this [link](https://docs.api.getpostman.com/#6517e0d6-3bc3-3da5-ab57-7a578a8504ce) to know more about Postman API
