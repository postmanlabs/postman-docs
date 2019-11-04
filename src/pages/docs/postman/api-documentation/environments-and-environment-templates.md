---
title: "Local environments and shared environments"
order: 67
page_id: "environments_and_environment_templates"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: link
    name: "Intro to environments and globals"
    url: "/docs/postman/environments-and-globals/intro-to-environments-and-globals/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Lucid"
    url: "https://www.getpostman.com/case-studies/Lucid.pdf?_ga=2.132423880.754547870.1571851340-1454169035.1570491567"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to Workspaces"
    url: "/docs/postman/workspaces/intro-to-workspaces/"

warning: false
---

You can access local environments and shared environments in your private and public API documentation.

Selecting an environment in private or public documentation assigns those environment variables within the documentation. For example, if you select an environment that has a `foo` variable with the value `bar`, then all occurrences of `{{foo}}` in the request will be replaced with `bar` within the documentation.

Local and shared environments are automatically synced. In addition, they are [encrypted during storage](https://www.getpostman.com/security).

## Environments in private documentation

The environments drop down menu contains all of your local and shared environments.

All of your local and shared environments will be available to you in your team workspace.

[![environments dropdown for private viewing](https://assets.postman.com/postman-docs/WS-docs-private-environment2.png)](https://assets.postman.com/postman-docs/WS-docs-private-environment2.png)

## Environments in public documentation

An environment that you select while publishing documentation will be available to all documentation viewers. This environment will also be downloaded when users select the automatically generated [Run in Postman button](/docs/postman-for-publishers/run-button/using-run-button).

If your public documentation is published on a custom domain, only the selected environment will be available in the published page, even if the user is signed into their Postman account.

[![environments dropdown for public documentation](https://assets.postman.com/postman-docs/WS-docs-public-environMenu010718.png)](https://assets.postman.com/postman-docs/WS-docs-public-environMenu010718.png)
