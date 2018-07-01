---

title: "Authentication helpers"
page_id: "helpers"
tags: 
  - "app"
warning: false
---

While the request editor is powerful enough to construct any kind of requests, sometimes you might need some help. Postman has something called "helpers" which can simplify some repetitive and complex tasks. The current set of
helpers let you deal with authentication protocols easily. You can use environment variables with all helpers.

You can choose to save helper data to collection requests. This will cause the signature to be regenerated each time. These helpers will even work in Newman!

### Basic Auth

[![](https://www.getpostman.com/img/v1/docs/thumbs/14.png)][0]

Enter the username and password fields and hit "Update Request" to generate the authorization header.

### Digest Auth

[![](https://www.getpostman.com/img/v1/docs/thumbs/16.png)][1]

Digest auth is more complicated than basic auth and uses the values currently set in the request to generate the authorization header. Make sure they are set properly before you generate the header. Postman will remove the existing header if it's already present.

### OAuth 1.0a

[![](https://www.getpostman.com/img/v1/docs/thumbs/17.png)][2]

Postman's OAuth helper lets you sign requests which support OAuth 1.0a based authentication. Currently it does not let you acquire the access token. That's something you would need from the API provider. The OAuth 1.0 helper can set values in either the header or as query parameters.

As subsequent OAuth requests might expect a different nonce value, Postman can refresh the OAuth signature just before the request is sent if auto add parameters is enabled.

The OAuth 1.0 spec is quite complicated and there are many variations. Postman tries to support as many of those variations as possible but if something does not work for you, please file an issue on Github. These are few of the options that we've included:

* Add empty params to signature - Some implementations of OAuth1.0 require empty parameters to be added to the signature.
* Add params to header - If this is enabled, params are added to the header. If not - the URL params for a GET request, and the request body for POST/PUT requests

### OAuth 2.0

Postman supports getting the OAuth 2.0 token as well as adding it to requests really easy. To get an access token from an OAuth 2.0 provider, follow these steps:

[![](https://www.getpostman.com/img/v1/docs/thumbs/30-2.png)][3]

* Set **https://www.getpostman.com/oauth2/callback** as the callback URL in your app settings page.
* Get authorization URL, access token URL, client ID and client secret from your API provider. You can also set the Scope parameter which is needed by some APIs to set the level of access you have within the API
* Press the "Get access token" button to initiate the OAuth 2.0 flow. If everything is set up properly, you would be redirected to the Postman server which will pick up your access token and send it to the Postman app. To finish adding the token to Postman, give it a name so that you can access it quickly later.

[![](https://www.getpostman.com/img/v1/docs/thumbs/30-1.png)][4]

* Access tokens are stored locally and will show up in the helper list. To add an access token to the request, click the token name.



[0]: https://www.getpostman.com/img/v1/docs/source/14.png
[1]: https://www.getpostman.com/img/v1/docs/source/16.png
[2]: https://www.getpostman.com/img/v1/docs/source/17.png
[3]: https://www.getpostman.com/img/v1/docs/source/30-2.png
[4]: https://www.getpostman.com/img/v1/docs/source/30-1.png
