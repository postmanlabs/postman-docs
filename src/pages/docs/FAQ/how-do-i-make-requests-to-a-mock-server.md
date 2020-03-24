---
title: "How do I make requests to a Mock Server?"
order: 3
page_id: "how-do-i-make-requests-to-a-mock-server?"
warning: false
---

Once you've created the mock, use the mock URL <code>https://{{mockId}}.mock.pstmn.io/{{mockPath}}</code>, where:


+ mockId is the id that you received upon creating the mock and can be retrieved using the [GET All Mocks endpoint](https://docs.api.getpostman.com/#018b5d62-f6fc-f752-597e-c1eb4bb98d24) in the [Postman Pro API](https://www.getpostman.com/docs/pro/pro_api/intro_api).
+ mockPath is the path of your request that you’d like to mock, for example <code>api/response.</code>

You'll also need to specify your [Postman API Key](https://app.getpostman.com/dashboard/integrations/pm_pro_api/list) as a `apikey` query parameter in the URL, or an `X-API-Key` header. The mock server will pick a response based on:

+ The optional `x-mock-response-code` header: If this is provided, the system will try to return an example response with the given status code
+ HTTP Method
+ Request path

Find out more about on our [blog post about mock servers](http://blog.getpostman.com/2017/03/16/simulate-a-back-end-with-postmans-mock-service/)!
