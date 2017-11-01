---
categories:
  - "postman"
  - "sending_api_requests"
title: "Authorization"
page_id: "authorization"
warning: false

---
The authorization process verifies whether a user has permission to access the data you want from the server. When you send a request, you often have to include parameters to ensure the request has permission to access and return the data you want. 
Postman provides authorization types that make it easy for you to handle authentication protocols in Postman native apps.

When you select 'Authorization' in the request builder, you see the **TYPE** drop down menu. 
* No Auth 
* Bearer Token
* Basic auth
* Digest Auth
* OAuth 1.0
* OAuth 2.0
* Hawk Authentication
* AWS Signature
* NTLM Authentication [Beta]


**Note**: These authorization types are availble only for Postman native apps.

> [![auth menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_menu.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_menu.png)

You can use environment variables with all authorization types. You can also use these authorization types with Newman.

Postman does not save header data to prevent sensitive data exposure, such as API keys, to the public.

If you want to inspect the authorization headers and parameters that Postman generates, click the **Preview Request** button. 

 [![auth menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_RequestPreview.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_RequestPreview.png)
 
You can inspect a raw dump of the entire request in the Postman console after you send it.
 
### No Auth

By default "No Auth" appears first on the drop down menu list. Use "No Auth" when you don’t need an authorization parameter to send a request. 
  
### Bearer Token

A bearer token is a security token. Any user with a bearer token can use it to access data resources without using a cryptographic key. 

To use a bearer token: 
1. In the "Authorization" tab, select "Bearer Token" from the **TYPE** drop down menu. 
2. To set the authorization parameters for a request, enter the value of the token.
3. Click the **Send** button.


[![bearer auth](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_BearerToken.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_BearerToken.png)

### Basic Auth

Basic Auth is an authorization type that requires a verified username and password to grant access a data resource. 

To use Basic Auth:
1. In the "Authorization" tab, select "Basic Auth" from the **TYPE** drop down menu. 
2. To set the authorization parameters for a request, enter your username and password. 
3. Click the **Send** button.


[![basic auth](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_Basic.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_Basic.png)


### Digest Auth

In a digest authentication flow, the client sends a request to a server, which sends back nonce and realm values for the client to authenticate. The client sends back a hashed username and password with the nonce and realm. The server then sends back the requested data.

By default, Postman extracts values from the response. If you do not want to extract those values, you have two options:
* Enter your own values in the advanced section for selected fields, or 
* Select "Yes" and disable "retrying the request" to skip retrying the request. 

To use digest auth:
1. In the "Authorization" tab, select "Digest Auth" from the **TYPE** drop down menu. 
2. To set the authorization parameters for a request, enter your username and password. (You can also set advanced digest auth parameters.) 
3. Click the **Send** button.

[![digest_auth](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_Digest.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_Digest.png)

This table describes the advanced parameters for Digest Auth. Advanced configuration settings are optional. Postman automatically generates values for some fields if left blank.

| **Advanced Parameters**  | **Description** |
| --- | --- |
| Realm | A string specified by the server www-Authenticate response header.  |
| Nonce| A unique string specified by the server www-Authenticate response header. |
| Algorithm | A string that indicates a pair of algorithms used to produce the digest and a checksum. |
| qop | The quality of protection applied to the message. The value must be one of the alternatives specified by the server in the www-Authenticate response header. |
| Nonce Count| The hexadecimal count of the number of requests (including the current request) that the client has sent with the nonce value in this request. The count must be specified if a qop directive is sent, and must not be specified if the server did not send a qop directive in the www-Authenticate response header.  |
| Client Nonce  | An opaque quoted string valued provided by the client and used by both client and server to avoid chosen plaintext attacks to provide mutual authentication and to provide some message integrity protection. The count must be specified if a qop directive is sent, and must not be specified if the server did not send a qop directive in the www-Authenticate response header.  |
| Opaque | This is a string of data specified by the server in the www-Authenticate response header and should be used here unchanged with URLs in the same protection space. It is recommended that this string be base64 is hexadecimal data. |

### **OAuth 1.0**

OAuth 1.0 is an authorization type that enables you to approve an application that contacts another application for you without exposing your password. 

To use the OAuth 1.0 authorization:
1. In the "Authorization" tab, select "OAuth 1.0" from the **TYPE** drop down menu. 
2. From the "Add authorization data to" drop down menu, select either "Request Body/Request URL" or "Request Headers".

   When you select "Request Body/Request URL", Postman checks whether the request method is POST and the request body type 
   is x-form-urlencoded. If so, Postman adds authorization parameters to the request body. For all other cases,
   it adds authorization parameters to the URL.

3. To set the authorization parameters for a request, enter the "Consumer Key", "Consumer Secret", "Access Token", and "Token Secret". You can also set advanced digest OAuth 1.0 parameters.

[![oauth1_auth](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_OAuth1_0.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_OAuth1_0.png)

This table describes the parameters for OAuth 1.0 authorization.

| **Parameters**  | **Description** |
| --- | --- |
| Consumer Key | A consumer’s value that identifies itself to the service provider. |
| Consumer Secret| A consumer’s secret that establishes ownership of the consumer key. |
| Access Token |An object that contains the security identity. |


| **Advanced Parameters**  | **Description** |
| ---    | --- |
| Signature Method | A consumer’s secret that establishes ownership of a given token. |
| Time Stamp| The timestamp the server uses to prevent replay attacks outside the time window. |
| Nonce |A unique string specified by the server www-Authenticate response header.|
| Version |The 1.0 version of the OAuth authentication protocol.|
| Realm |A string specified by the server www-Authenticate response header. |

**Note**: Some implementations of OAuth 1.0 require empty parameters to be added to the signature. You can select to add empty parameters to signature.

### OAuth 2.0

OAuth 2.0 is an authorization type that enables you to approve an application that contacts another application for you without exposing your password. 

To use the OAuth 2.0 authorization:
1. In the "Authorization" tab, select "OAuth 2.0" from the **TYPE** drop down menu. 
2. From the "Add authorization data to" drop down menu, select either "Request URL" or "Request Headers".
3. To set the authorization parameters for a request, you have three options:
   * Click the **Get New Access Token** button. The **GET NEW ACCESS TOKEN** screen appears. Enter the appropriate values, click the **Request Token** button to populate the "Access Token" field, and then click the **Send** button. 
   * In the "Access Token" field, enter a token, an environment defined variable, and click the **Send** button.
   * In the "Available Tokens" drop down menu, select an existing token and click the **Send** button.

[![oauth2_auth](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_OAuth2_0.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_OAuth2_0.png)

This table describes the parameters in the **GET NEW ACCESS TOKEN** screen.

| **Get Neww Access Token Parameters**  | **Description** |
| --- | --- |
| Token Name| The name of the token. |
| Grant Type| A drop down menu where you can specify one of the following grant types: "Authorization Code", "Implicit", "Password Credentials", and "Client Credentials".|
| Callback URL |The Application’s callback URL that’s registered with the server. If not provided, Postman uses a default  empty URL and extracts the code or access token from it.|
| Auth URL |The endpoint for authorization server, which retrieves the authorization code.|
| Access Token URL |The endpoint for the resource server, which exchanges the authorization code for an access token. |
| Client ID |The client identifier given to the client during the Application registration process.|
| Client Secret |The client secret given to the client during the Application registration process. |
| Scope |The scope of the access request, which might have multiple space-defined values. |
| State |An opaque value that prevents cross-site request forgery. |
| Client Authentication |A drop down menu where you can either send a Basic Auth request in the header, or send client credentials in the request body |

[![getrequesttokens_auth](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/GetNewAccessToken+screen.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/GetNewAccessToken+screen.png)

You can click "Manage Tokens" in the list to view more details about each token and delete any one of them. If there are no tokens in the list, the user needs to click the **Get New Access Token** button to generate a token that Postman adds to the list.

[![managetokens_auth](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Postman_manageToken.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Postman_manageToken.png)

**Note**: Deleting a token does not revoke the access token. Only the server that issues the token can revoke it.

### Hawk authentication

Hawk authentication enables you to make authenticated requests with partial cryptographic verification of the request. 
 
To use Hawk authentication:
1. In the "Authorization" tab, select "Hawk Authentication" from the **TYPE** drop down menu. 
2. To set the authorization parameters for a request, enter the "Hawk Auth ID", "Hawk Auth Key", and "Algorithm values". You can also set advanced Hawk authentication parameters.
3. Click the **Send** button.

[![hawk_auth](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_Hawk.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_Hawk.png)

This table describes the parameters for Hawk Authentication.

| **Parameters**  | **Description** |
| --- | --- |
| Hawk Auth ID | The authentication ID value. |
| Hawk Auth Key| The authentication key value. |
| Algorithm |The hash algorithm used to create the message authentication code (MAC).|

This table describes the advanced parameters for Hawk Authentication. Advanced configuration settings are optional. Postman automatically generates values for some fields if left blank.

| **Advanced Parameters**  | **Description** |
| --- | --- |
| User | The user name. |
| Nonce| A random string generated from the client.|
| ext |Any application-specific information to be sent with the request.|
| app |The binding between credentials and the application in a way that prevents an attacker from tricking an application to use credentials issued to someone else.|
| dlg|The ID of the application of which the credentials were directly issued.|
| Timestamp |The timestamp the server uses to prevent replay attacks outside the time window.|

**Note**: Advanced configuration settings are optional. Postman auto generates values for some fields if left blank.

### AWS authentication

AWS is the authorization workflow for Amazon Work Services (AWS) requests. AWS users must use a custom HTTP scheme based on a keyed-HMAC (Hash Message Authentication Code) for authentication. Postman supports this scheme.

Read more about the AWS Signature on AWS documentation:

* <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html" target="_blank">Signing and Authenticating REST Requests</a>

* <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-use-postman-to-call-api.html" target="_blank">Use Postman to Call an API</a>

To use AWS authentication:
1. In the "Authorization" tab, select "AWS Authentication" from the **TYPE** drop down menu. 
2. To set the authorization parameters for a request, enter the values for the access and secret keys. You can also set advanced AWS authentication parameters.
3. Click the **Send** button.

[![aws_auth](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_AWS_Signature.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_AWS_Signature.png)

This table describes the advanced parameters for AWS Authentication. Advanced configuration settings are optional. Postman automatically generates values for some fields if left blank.

| **Advanced Parameters**  | **Description** |
| --- | --- |
| AWS Region | The region receiving the request. (Default region is US East1.)|
| Service Name| The service receiving the request.|
| Session Token |Required only when using temporary security credentials.|

### NTLM authentication

Windows Challenge/Response (NTLM) is the authorization flow for the Windows operating system and for stand-alone systems.
By default, Postman extracts values from the received response, adds it to the request, and retries it. Postman gives you the option to disable this default behavior.

To use NTLM authentication:
1. In the "Authorization" tab, select "NTLM Authentication" from the **TYPE** drop down menu. 
2. To set the authorization parameters for a request, enter the username and password. You can also set advanced NTLM authentication parameters.
3. Click the **Send** button.

This table describes the advanced parameters for NTLM Authentication. Advanced configuration settings are optional. Postman automatically generates values for some fields if left blank.

| **Advanced Parameters**  | **Description** |
| --- | --- |
| Domain | The domain or host to authenticate against.|
| Workstation| The hostname of the PC.|

[![ntlm_auth](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_NTLM.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/auth_NTLM.png)








