---
title: "Integration with Travis CI"
order: 121
page_id: "integration_with_travis"
contextual_links:
  - type: section
    name: "Prerequisites"
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
    name: "Integrate API tests with Postman, Newman, and Travis CI"
    url: "https://blog.postman.com/2017/08/23/integrate-api-tests-with-postman-newman-and-travis-ci/"
  - type: link
    name: "Integrations: how Postman plays with some of your favorite tools"
    url: "https://blog.postman.com/2018/04/13/integrations-how-postman-plays-with-some-of-your-favorite-tools/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to the Postman API"
    url: "/docs/postman/postman-api/intro-api/"

warning: false
tags:
  - "newman"

---

Continuous Integration (CI) is a practice that requires developers to integrate code in a shared repository several times a day.

By committing early and often, the team avoids a ton of technical debt by allowing teams to detect problems early while conflicts are relatively easy to fix.

Every check-in triggers an automated build process that typically includes testing. And if your commit hasn’t broken anything, might include deployment too.

In general, integrating your [Postman tests](/docs/postman/scripts/test-scripts/) with your favorite continuous integration service is the same process as if you’re [running on Jenkins](/docs/postman/collection-runs/integration-with-jenkins/), Travis CI, AppVeyor, or any other build system.

You will set up your CI configuration to run a shell command upon starting your build. The command is a [Newman script that runs your collection](/docs/postman/collection-runs/command-line-integration-with-newman/) with the tests, returning a pass or fail exit code that’s logged in your CI system.

In this example, we’ll walk through how to integrate Postman with [Travis CI](https://travis-ci.org/), a continuous integration service that builds and tests projects on GitHub.

Travis CI runs your tests every time you commit to your GitHub repo. Then it submits a pull request, or some other specified configuration.

[![travis workflow](https://assets.postman.com/postman-docs/travis_workflow.png)](https://assets.postman.com/postman-docs/travis_workflow.png)

Let's learn more about integration with Travis:

* [Getting started](#getting-started)
* [Hooking up Postman to Travis CI](#hooking-up-postman-to-travis-ci)

## Getting started

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/b79dc2835758549eed7e#?env%5Btests%5D=W3siZW5hYmxlZCI6dHJ1ZSwia2V5IjoibGFzdERheSIsInZhbHVlIjoiMjAxNy0wOC0xMFQwMDowMzo1OS45MThaIiwidHlwZSI6InRleHQifV0=)

1. **Select a Postman collection with tests**: For now, let’s assume you already have a Postman collection with tests. Download the sample collection and environment by clicking the Run in Postman button if you want to follow this example.
1. **Set up a GitHub repository**: Travis CI is free for open source projects on GitHub. This example keeps Postman tests in a public GitHub repo.
1. **Set up Travis CI**: Follow the [Travis CI getting started guide](https://docs.travis-ci.com/user/getting-started) for the complete walk through.

   [Sign in to Travis CI](https://travis-ci.org/auth) with your GitHub account.

   Go to your [profile page](https://travis-ci.org/profile) and enable Travis CI for the public GitHub repo set up in the previous step.

## Hooking up Postman to Travis CI

1. [Export the Postman Collection as a JSON file](/docs/postman/collections/importing-and-exporting-data/#exporting-collections) and move the file to your project directory. If you’re using an environment such as this example, [download the Postman environment as a JSON file](/docs/postman/variables-and-environments/variables/#environments-in-postman) and move the file to your project directory as well.

    In this example, we've moved both files into a directory called `tests` placed in the root of the project repository.

    Remember to add and commit these two files to your repo.

    [![tree view tests directory](https://assets.postman.com/postman-docs/travis_tree.png)](https://assets.postman.com/postman-docs/travis_tree.png)
  
1. Create a new file called `.travis.yml` and move it to the root of your project repository.

    Remember to add and commit it to your repo. This file tells Travis CI the programming language for your project and how to  build it.

    Any step of the build [can be customized](https://docs.travis-ci.com/user/customizing-the-build). These scripts will execute the next time you commit and push a change to your repo.

    [![tree view yml](https://assets.postman.com/postman-docs/travis_tree_yml.png)](https://assets.postman.com/postman-docs/travis_tree_yml.png)

1. In the `.travis.yml` file, add a command to `install` Newman in the CI environment, and then add a `script` telling Newman to run the Postman tests (which we've placed in the `tests` directory).
  
    Since Travis CI doesn’t know where Newman is located, let's update the `PATH`. In this node.js example, the `newman` tool is located in my `.bin` directory which is located in my `node_modules` directory.

    Now, the `.travis.yml` file looks like this for this `node.js` example:

    ```bash
    language: node_js
    node_js:
    - "8.2.1"

    install:
    - npm install newman

    before_script:
    - node --version
    - npm --version
    - node_modules/.bin/newman --version

    script:
    - node_modules/.bin/newman run tests/bitcoinz.postman_collection.json -e tests/tests.postman_environment.json
    ```

Travis CI is now set up to run your Postman tests every time you trigger a build, for example, by pushing a commit to your repo.

Let’s try it out. The Travis CI [build status page](https://travis-ci.org/) will show if the build passes or fails:
  
[![travis fail](https://assets.postman.com/postman-docs/travis_fail.png)](https://assets.postman.com/postman-docs/travis_fail.png)

   Travis CI is running the Newman command, but you see a failed exit code (1). Boo.

   Stay calm. Let’s review the logs in Travis CI. Newman ran the tests, you see the first and second tests passed, but the last test `Updated in the last day` failed.

[![travis log fail](https://assets.postman.com/postman-docs/travis_log_fail.png)](https://assets.postman.com/postman-docs/travis_log_fail.png)

   Let’s go back to the Postman collection and fix the `Updated in the last day` test.

[![PM test script](https://assets.postman.com/postman-docs/WS-get-information95.png)](https://assets.postman.com/postman-docs/WS-get-information95.png)

   Once you fix the mistake in the test, let’s save the changes, update the repo with the latest collection file, and then trigger a Travis CI build once again by committing and pushing the change.  

[![travis log success](https://assets.postman.com/postman-docs/travis_log_success.png)](https://assets.postman.com/postman-docs/travis_log_success.png)

 And it's working! All the tests passed and the command exited with a successful exit code (0).

---
For more information about collection runs, see:

* [Starting a collection run](/docs/postman/collection-runs/starting-a-collection-run/)
* [Using environments in collection runs](/docs/postman/collection-runs/using-environments-in-collection-runs/)
* [Working with data files](/docs/postman/collection-runs/working-with-data-files/)
* [Running multiple iterations](/docs/postman/collection-runs/running-multiple-iterations/)
* [Building workflows](/docs/postman/collection-runs/building-workflows/)
* [Sharing a collection run](/docs/postman/collection-runs/sharing-a-collection-run/)
* [Debugging a collection run](/docs/postman/collection-runs/debugging-a-collection-run/)
* [Command line integration with Newman](/docs/postman/collection-runs/command-line-integration-with-newman/)
* [Integration with Jenkins](/docs/postman/collection-runs/integration-with-jenkins/)
* [Newman with Docker](/docs/postman/collection-runs/newman-with-docker/)
