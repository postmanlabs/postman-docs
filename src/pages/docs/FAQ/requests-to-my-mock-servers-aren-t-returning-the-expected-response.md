---
title: "Requests to my mock servers aren't returning the expected response"
order: 3
page_id: "requests-to-my-mock-servers-aren-t-returning-the-expected-response"
warning: false
---


There are a few quick things you can check if your mock server isn't giving the intended response:

**Error1** (unable to find a matching request):

```
{
        "error": {
        "name": "mockRequestNotFoundError",
        "message": "We were unable to find any matching requests for this method type         <br>and the mock path, '/post', in your collection"
        }
}
```

There are two fields the system looks at while trying to find a matching response to return: the HTTP method and the request path

1. **Incorrect HTTP Method**: If the request in the saved example uses POST, you'll need to use POST while making requests to the mock server. The method needs to match with the saved example for the response to be returned.

2. **Incorrect Path URL**: The path is the segment of the URL after the host. For [http://api.service.com/users](http://api.service.com/users), "/users" is the path. While requesting saved response from a mock server, you'll need to send "/users" to the mock server too:

https://&lt;mock id&gt;.mock.pstmn.io/users

For more details on this, check our documentation at [https://www.getpostman.com/docs/v6/postman/mock_servers/matching_algorithm](https://www.getpostman.com/docs/v6/postman/mock_servers/matching_algorithm)

**Error2:**
```
    {
        "error": {
        "name": "invalidCredentialsError",
        "message": "Please provide the required `x-api-key` authentication header."
        }
    }
```

The above error tells you that you mock is a private mock &amp; requires a Postman API key to be passed in the header.
