---
categories:
  - "postman"
  - "api_documentation"
title: "Environments and environment templates"
page_id: "environments_and_environment_templates"
warning: false
---

Your environments and environment templates are automatically synced too and are available through a dropdown in your API documentation. 

When viewing public or private documentation, selecting an environment substitutes those environment variable values into the relevant parts of the documentation. For example, if the selected environment has a `foo` variable with the value `bar`, then all occurrences of {{foo}} in the request will be replaced with `bar`. All environments are encrypted during storage, for more details, check the Data Security section of our [Security page](https://www.getpostman.com/security){:target="_blank"}.

### Environments in private documentation

[![public documentation link](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-private-environment2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-private-environment2.png)

Within the private documentation view, all of your environments and environment templates are available to you with environment templates shared in your Team Library.

### Environments in public documentation

[![environmnets dropdown for public documentation](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-environments.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-environments.png)

If an environment template was selected while publishing documentation, it will be available to all documentation viewers.

Specifically, if the user is signed in to their Postman account, then the synced environments are available in published documentation too. This behavior allows them to customize your published API documentation to their specific environment.

However, if your public documentation is published on a custom domain, only the environment template will be available in the published page, even if the user is signed in to their Postman account.
