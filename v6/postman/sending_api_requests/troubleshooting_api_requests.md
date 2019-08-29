---
title: "Troubleshooting API requests"
page_id: "troubleshooting_api_requests"
warning: false

---

There might be cases when your API doesn't work, or exhibits unexpected behavior. If you're not getting any response, Postman will display a message about an error in connecting to the server.

[![no response message](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-troubleshooting-APIs.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-troubleshooting-APIs.png)

For more details about the possible causes of the error, open [Postman Console](/docs/postman/sending_api_requests/debugging_and_logs/). It has detailed information about the failure. 

Consider these issues as you troubleshoot API requests.

## Connectivity issues

If Postman is unable to connect to your server, it shows the message above. Usually, the easiest way to check if there are connectivity issues is to open your server address in a browser, such as Chrome or Firefox. If opening it in the browser works, then the possible causes could be:

### Firewall issues

Some firewalls may be configured to block non-browser connections. In this case, you should talk to your network administrators for Postman to work.

### Proxy Configuration

If you are using a proxy server to make requests, make sure you configure it correctly. By default, Postman uses the proxy settings configured in your Operating System's network settings. Postman Console will provide debug information about the proxy server.

### SSL Certificate issues

When using HTTPS connections, Postman might show the error above. In this case, you can turn off SSL verification in the Postman Settings. If that does not help, your server might be using a client-side SSL connection, which you can configure in [Postman Settings](/docs/postman/launching_postman/settings/). Use the Postman Console to ensure that the correct SSL certificate is being sent to the server.

### Client Certificate issues

Client certificates might be required for this server. Fix this by [adding a client certificate](/docs/postman/sending_api_requests/certificates/) in the [Postman Settings](/docs/postman/launching_postman/settings/).  

### Incorrect Request URLs

If you use variables in your request, make sure they are defined in your environment or globals. Unresolved request variables may result in invalid server addresses.

### Using incorrect protocol

Check whether you're accidentally using "https://" instead of "http://" in your URL (or vice versa).

### Invalid Postman behavior

Very rarely, it is possible that Postman might be making invalid requests to your API server. You can confirm this by checking your server logs (if available). We're always watching out for these cases, so get in touch with us if you believe Postman is misbehaving. Let us know on our [GitHub issue tracker](https://github.com/postmanlabs/postman-app-support/issues) if you feel that Postman is not working as intended.

### Very short timeouts

If you configure a very short timeout in Postman, the request might timeout before completion, resulting in the error block above. Try increasing the timeout to avoid this issue.

### Invalid Responses

If your server sends incorrect response encoding errors, or invalid headers, Postman will fail to interpret the response, causing the error above.

If you still can't get your API working, help can frequently be found in the [Postman community](https://postmancommunity.slack.com) or [Stack Overflow](https://stackoverflow.com/questions/tagged/postman).

If you've tried unsuccessfully troubleshooting the issue, search the [Postman issue tracker](https://github.com/postmanlabs/postman-app-support/issues) on GitHub to check if someone has already reported the issue and whether there is a known solution that you can use. If you're reporting a new issue, follow these [guidelines](https://github.com/postmanlabs/postman-app-support#user-content-guidelines-for-reporting-issues). If you wish to include confidential data, you can file a ticket via our [support center]({{https://support.getpostman.com/hc}}) and include the app’s [console logs](/docs/postman/sending_api_requests/debugging_and_logs/) in your report to provide some helpful data for troubleshooting. 

