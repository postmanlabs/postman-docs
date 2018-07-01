---

title: "Running a collection"
page_id: "running_collections"
tags: 
  - "app"
warning: false
---

The collection runner lets you run collections. Thousands of times if you want.
![](https://www.getpostman.com/img/v1/docs/source/cr-1.png)

The collection runner runs requests in a collection in the order in which you
set them. It also runs tests for every request and gives you an aggregate summary of
what happened. It stores all your test runs so you can compare them and
see what has changed.

All you have to do is select a collection, an environment if
needed, and hit the Run button. Optionally, you can also add a CSV or a JSON file from which
Postman can pick up data values. Need to test all those use cases? It's super
easy with the Collection Runner.

The Collection Runner window runs separately from the main window. While the window is
open, you can make changes to your collections inside the main Postman
window and they will be updated inside the Collection Runner as well.

### Starting a run

To start a collection run, you need to set some of these options and hit
start. Only the collection name is compulsory.

* **Collection/Folder**: If a collection has folders, then those requests are executed as well
* **Environment** (optional)
* **Iterations** (optional): The number of times you want to run the collection. There is no official limit to the number. At least yet.
* **Data** (optional): Load a CSV/JSON data file

Hit the Start button and Postman will start displaying results of the run.
Once the run is over, you can start a new run or select run statistics from
the history.

### Viewing results

Clicking on any run in the sidebar brings up the stats for that run in a new
tab, just in case you want to view a result while a run is ongoing.
![](https://www.getpostman.com/img/v1/docs/source/cr-3.png)

Postman displays the parameters you started the run with. It also shows you how many tests passed among all the tests that
were executed. The average response time for the run is also displayed.

You can also see basic stats of all runs of the same type. You can compare how
many tests passed previously and whether your API code is getting better.

#### Requests
![](https://www.getpostman.com/img/v1/docs/source/cr-2.png)

The Requests tab shows you all the requests which were run in a collection
along with response times, test results and the last received status code. This helps
you quickly get the state of the entire API. If any test fails while
running multiple iterations, the entire test is marked as failed. If everything goes
well, you should expect to see a lot of green. You don't
need to have tests in a request to run a collection.
![](https://www.getpostman.com/img/v1/docs/source/cr-7.png)

You can get a more detailed per iteration view of the results by clicking the '\>' arrow when you hover over a request. This shows you a tabulated
view of all the test iterations. If any test fails, you will see a red dot. You
can pinpoint which iterations failed and which passed through the table.   
More options coming soon!
![](https://www.getpostman.com/img/v1/docs/source/cr-4.png)
