---

title: "Checking response payloads"
page_id: "checking_payload_responses"
tags: 
  - "app"
warning: false
---

**Chrome app**

To inspect the exact request and response payloads to make sure that Postman isn't causing your API call to fail you will need to use Dev Tools.

To start, enable the Chrome DevTools for Postman. Check [our blog post][0] for instructions on how to do this.

Your Postman dev tools window should look like below.

[![](https://www.getpostman.com/img/v1/docs/checking_payload_responses_1.png)
][1]

There are 3 ways you can make requests in Postman:

1\. Using the request builder

* If you are making requests from the main Postman window with the Interceptor disabled right click on the main Postman window \> Inspect element.
  
* Go to the Network tab \> click the Send button for the request.
  
* Click on the request in the Network tab and it will show you the response payload.
  

2\. Using the collection runner

* If you are using the collection runner to run entire collections, open DevTools for the Collection Runner (not for the main window). Right click on the Collection Runner window \> Inspect element.
  
* Go to the Network tab \> Start the collection run.
  
* You will see each request made when you start the collection run. Click on the request in the Network tab to see the response payload.
  

3\. Sending requests with the Interceptor enabled

* You will be using the interceptor if you want to set cookies while making a request.
  
* Head to chrome://extensions \> enable 'Developer Mode' \> search for Interceptor.
  
* Click the "Inspect views: background.html" link to open DevTools. You should see the requests and responses in the Interceptor's DevTools window when you make requests through Postman.
  


**Native apps**

Info coming soon.


[0]: http://blog.getpostman.com/2014/01/27/enabling-chrome-developer-tools-inside-postman/
[1]: https://www.getpostman.com/img/v1/docs/checking_payload_responses_1.png
