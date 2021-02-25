---
title: "Scheduling runs with monitors"
order: 56.1
page_id: "scheduling_collection_runs_with_monitors"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using the Collection Runner"
    url: "/docs/running-collections/intro-to-collection-runs/"
  - type: dynamic_blog
    name: "Related Blog Posts"
    blog_tag: "monitors"

warning: false
---

You can automate [collection runs](/docs/running-collections/intro-to-collection-runs/) using [monitors](/docs/designing-and-developing-your-api/monitoring-your-api/intro-monitors/) to schedule runs and receive reports on your request test results.

To add or access monitors for a particular collection, select the __Monitors__ tab in the left sidebar of Postman.

<img alt="Monitors v8" src="https://assets.postman.com/postman-docs/create-a-monitor-v8.jpg" height="400px"/>

Any monitors already attached to your collection will appear. Click __Create a monitor__ to add one (or __+ Create a new Monitor__ if you already have one on the collection). You can also add a monitor via a collection. To add a monitor via collection, go to the collection, click __...__ and select __Monitor Collection__.

Give your monitor a name, select a collection to use, choose a version tag, and an optional environment your scheduled collection runs should reference. Enter the frequency you want your monitor to run on, and select a region. Click __Create__ and your monitor will run on the schedule you entered.

[![Add new monitor to collection](https://assets.postman.com/postman-docs/create-new-monitor-overview-v8.jpg)](https://assets.postman.com/postman-docs/create-new-monitor-overview-v8.jpg)

Your new monitor will appear in the monitor overview. You can open the monitor overview tab to [view your monitor results](/docs/designing-and-developing-your-api/monitoring-your-api/viewing-monitor-results/) at any time.

<img alt ="New monitor created" src="https://assets.postman.com/postman-docs/new-monitor-created-v8.jpg" height ="400px"/>

## Next steps

Check out the [monitoring](/docs/designing-and-developing-your-api/monitoring-your-api/intro-monitors/) section for more on how you can leverage monitors in your API development pipeline.
