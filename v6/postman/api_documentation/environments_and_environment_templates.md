---
title: "Local environments and shared environments"
page_id: "environments_and_environment_templates"
warning: false
---

You can access local environments and shared environments in your private and public API documentation.

Selecting an environment in private or public documentation assigns those environment variables within the documentation. For example, if you select an environment that has a `foo` variable with the value `bar`, then all occurrences of `{{foo}}` in the request will be replaced with `bar` within the documentation.

Local and shared environments are automatically synced. In addition, they are [encrypted during storage](https://www.getpostman.com/security).

## Environments in private documentation

The environments drop down menu contains all of your local and shared environments.

All of your local and shared environments will be available to you in your team workspace.

[![environments dropdown for private viewing](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-docs-private-environment2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-docs-private-environment2.png)

## Environments in public documentation

An environment that you select while publishing documentation will be available to all documentation viewers.

If your public documentation is published on a custom domain, only the selected environment will be available in the published page, even if the user is signed into their Postman account.

[![environments dropdown for public documentation](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-docs-public-environMenu010718.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-docs-public-environMenu010718.png)
