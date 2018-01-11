---
categories:
  - "postman"
  - "api_documentation"
title: "Environments and environment templates"
page_id: "environments_and_environment_templates"
warning: false
---

You can access environments and environment templates in your private and public API documentation. 

Selecting an environment in private or public documentation assigns those environment variables within the documentation. For example, if you select an environment that has a `foo` variable with the value `bar`, then all occurrences of {{foo}} in the request will be replaced with `bar` within the documentation.

Environments and environment templates are automatically synced. In addition, they are [encrypted during storage](https://www.getpostman.com/security){:target="_blank"}.

#### Environments in private documentation

The environments drop down menu contains all of your environments and environment templates. 

All of your environments and environment templates will be available to you with environment templates that are shared in your Team Library.

[![environments dropdown for private viewing](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-private-environment2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-private-environment2.png)

#### Environments in public documentation

An environment template you select while publishing documentation will be available to all documentation viewers.

If your public documentation is published on a custom domain, only the environment template will be available in the published page, even if the user is signed into their Postman account.

[![environmnets dropdown for public documentation](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-public-environMenu010718.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-public-environMenu010718.png)

