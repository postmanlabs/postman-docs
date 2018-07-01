---

title: "Postman Monitors Private Beta"
page_id: "monitors"
tags: 
  - "cloud"
  - "web"
warning: false
---

Postman Monitors let you easily test your APIs at regularly-scheduled intervals. You'll be notified by email if an API goes down or starts misbehaving, and you can track the status of your APIs over time to spot trends and potential problems.

* [General Questions][0]
* [Security][1]
* [Cost][2]
* [Terms and Conditions][3]

### **General Questions**

#### What can I test with Monitors?

You can use Postman Monitors for simple uptime monitoring (to make sure your servers are online) or performance monitoring (to make sure your servers are responding promptly), or you can write detailed [test suites][4] to check for proper behavior, business logic, error handling, etc.

#### What restrictions apply?

* Postman supports HTTP and HTTPS protocols (including non-standard port numbers) and the most common HTTP methods (GET, POST, PUT, DELETE, etc.). Postman Monitors require all URLs to be publicly-available on the Internet. Newman will support this in the future, and allow you to monitor private APIs.
* Postman supports any content-type or encoding; however, you cannot currently send files via `multipart/form-data` in a Postman Monitor.
* Monitors can currently be scheduled to run as often as every 5 minutes, or as little as once a week. Each run is limited to 2 minutes, including all HTTP requests, responses, and pre-request and test scripts.

#### How do I troubleshoot problems?

You can view the full console output for every Monitor run, including any errors that occurred. You can also use methods such as `console.log()`, `console.warn()`, etc. to output your own debugging information.

### **Security**

#### Who can see my Monitors?

Monitors have the same permissions as Postman Collections. By default, your collections are private, so only you can see the collection and its Monitors. If you share a collection, then other members of your team will be able to see the collection and its Monitors. If you grant `View & Edit` permissions, then your team members will also be able to add Monitors to your collection.

Each collection can have different permissions, so you can choose to have some private, some shared but view-only, and some shared and editable.

#### Can I delete a Monitor?

Yes. You can delete a Monitor at any time. Once deleted, all run history for the Monitor is deleted as well. If you want _keep_ the history, then you should pause the Monitor instead of deleting it.

#### Where do Monitors run?

Monitors run on our cloud infrastructure, which is hosted by Amazon Web Services (AWS). More information about our cloud infrastructure is available at [our Security page][6].

#### Can Monitors access private networks?

No. Monitors can only connect to URLs that are publicly-available on the Internet. You cannot monitor APIs running on private networks, VPNs, or corporate intranets.

#### Will Monitors impact my API performance?

You have full control over the behavior of your monitors. You determine which of your API endpoints are called, how many, and how often. In addition, we restrict each Monitor's total run-time to 2 minutes, to limit the number of requests it can perform.

### **Cost**

#### How much does Postman Monitors cost?

For all Postman Pro teams, the first 10,000 requests for each month will be free. Above 10,000 requests, teams can pre-purchase requests at a discount. Blocks of 500,000 requests cost $200/month (or $0.40/1000 requests). For usage above the 10,000 included requests (or beyond a team’s purchased blocks) monitoring usage is charged at the normal price of $0.75/1000 requests.

#### What is the timing of the billing?

Monitoring requests must be purchased in advance to receive the bulk discount. Monitoring billing is separate from Postman Pro billing. You will continue to pay your monthly or annual charge for Postman Pro (priced per user). The dates of these charges may not coincide.

Billing for Monitoring starts the earlier of:

* Day of first monitoring call or
* Day of monitoring request purchase
         
Postman will notify customers of pay-as-you-go use, but the customer must request additional pre-purchased requests if desired. Pre-purchase overage use will not automatically trigger the purchase of additional blocks at the discounted rate. Pre-purchased requests can be added or removed mid-month, but are not prorated or refunded. 

Upon reaching a new month, the customer is charged for:

* The upcoming month’s pre-purchased Monitoring requests
* The past month’s pay-as-you-go debts

#### How many Monitors can I create?

There is no limit to the number of monitors you can create. You can have any number of collections, each with any number of monitors. And each monitor can run on a different schedule.

#### How long can a Monitor run?

Monitors are currently limited to 2 minutes for each run. This includes all HTTP requests, responses, and test scripts.

#### How many HTTP requests can a Monitor send?

There is no limit to the number of requests, although the total run-time cannot exceed 2 minutes.

#### How much data can a Monitor send/receive?

There is no limit to the amount of data that can be sent or received per request. However, large requests or responses will take longer to send/receive, so be sure that you can do everything within the 2-minute time limit.


[0]: https://www.getpostman.com/#general
[1]: https://www.getpostman.com/#security
[2]: https://www.getpostman.com/#cost
[3]: https://www.getpostman.com/licenses/postman_monitors_addendum
[4]: https://www.getpostman.com/docs/writing_tests
[6]: https://www.getpostman.com/security
