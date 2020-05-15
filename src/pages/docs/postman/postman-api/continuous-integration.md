---
title: "Continuous Integration"
order: 222
page_id: "continuous_integration"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: link
    name: "Command line integration with Newman"
    url: "/docs/postman/collection-runs/command-line-integration-with-newman/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Sikka"
    url: "https://www.postman.com/resources/case-studies/sikka/"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Continuous Testing of APIs"
    url: "https://medium.com/better-practices/continuous-testing-of-apis-5294552d65ce"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to scripts"
    url: "/docs/postman/scripts/intro-to-scripts/"

warning: false
---

Continuous Integration (CI) is a development practice that requires developers to regularly merge code updates into a shared repository. It involves the process of automating the build and testing of code every time a developer commits code updates.

Let's access collections using the Postman API to run inside your Continuous Integration / Continuous Deployment (CI/CD) environments.

Before you get started:

* Ensure you have a CI system setup which can run shell commands and that you have access to modify the same.
* If you don't already have a [Postman API key](https://docs.api.getpostman.com/#authentication), get one from the Integrations section in one of [your workspaces](https://go.postman.co/workspaces/).
* Make sure you have a Postman Collection that tests your localhost server, and note the UID of the collection.

## Step 1: Install Node

You may skip this step if your CI already has Node installed.

Follow the [steps to download Node](https://nodejs.org/en/download/package-manager/) which is specific to your CI's platform. Otherwise, some CI has configuration which simply pre-installs Node. Ensure you are using NodeJS v4 or above.

## Step 2: Install Newman

[Newman](/docs/postman/collection-runs/command-line-integration-with-newman/) is a command-line tool that allows you to run a collection in your local development environment or on your own server. The following command installs Newman in your CI.

```bash
npm i newman -g;
```

## Step 3: Run Newman

Run the following Newman command with the appropriate parameters:

```bash
newman run https://api.getpostman.com/collections/{{collection_uid}}?apikey={{postman-api-key-here}}
```

If you need to provide an environment to the collection, change the above command to the following:

```bash
newman run https://api.getpostman.com/collections/{{collection_uid}}?apikey={{postman-api-key-here}}
--environment https://api.getpostman.com/environments/{{environment_uid}}?apikey={{postman-api-key-here}}
```
