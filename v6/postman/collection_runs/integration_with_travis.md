---
title: "Integration with Travis CI"
page_id: "integration_with_travis"
warning: false
tags:
  - "newman"

---

Continuous Integration (CI) is a practice that requires developers to integrate code in a shared repository several times a day.

By committing early and often, the team avoids a ton of technical debt by allowing teams to detect problems early while conflicts are relatively easy to fix.

Every check-in triggers an automated build process that typically includes testing. And if your commit hasn’t broken anything, might include deployment too.

In general, integrating your [Postman tests](/docs/postman/scripts/test_scripts/) with your favorite continuous integration service is the same process as if you’re [running on Jenkins](/docs/postman/collection_runs/integration_with_jenkins/), Travis CI, AppVeyor, or any other build system.

You will set up your CI configuration to run a shell command upon starting your build. The command is a [Newman script that runs your collection](/docs/postman/collection_runs/command_line_integration_with_newman/) with the tests, returning a pass or fail exit code that’s logged in your CI system.

In this example, we’ll walk through how to integrate Postman with [Travis CI](https://travis-ci.org/), a continuous integration service that builds and tests projects on GitHub.

Travis CI runs your tests every time you commit to your GitHub repo. Then it submits a pull request, or some other specified configuration.

[![travis workflow](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/travis_workflow.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/travis_workflow.png)

Let's learn more about integration with Travis:

* [Getting started](#getting-started)
* [Hooking up Postman to Travis CI](#hooking-up-postman-to-travis-ci)

## Getting started

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/b79dc2835758549eed7e#?env%5Btests%5D=W3siZW5hYmxlZCI6dHJ1ZSwia2V5IjoibGFzdERheSIsInZhbHVlIjoiMjAxNy0wOC0xMFQwMDowMzo1OS45MThaIiwidHlwZSI6InRleHQifV0=)

1. **Select a Postman collection with tests**: For now, let’s assume you already have a Postman collection with tests. Download the sample collection and environment by clicking the Run in Postman button if you want to follow this example.
1. **Set up a GitHub repository**: Travis CI is free for open source projects on GitHub. In this example, we keep our Postman tests in a public GitHub repo.
1. **Set up Travis CI**: Follow the [Travis CI getting started guide](https://docs.travis-ci.com/user/getting-started) for the complete walk through.

   [Sign in to Travis CI](https://travis-ci.org/auth) with your GitHub account.

   Go to your [profile page](https://travis-ci.org/profile) and enable Travis CI for the public GitHub repo we set up in the previous step.

## Hooking up Postman to Travis CI

1. [Export the Postman Collection as a JSON file](/docs/postman/collections/data_formats/#exporting-and-importing-postman-data) and move the file to your project directory. If you’re using an environment such as this example, [download the Postman environment as a JSON file](/docs/postman/environments_and_globals/manage_environments/#manage-environments) and move the file to your project directory as well.

    In this example, we've moved both files into a directory called `tests` placed in the root of the project repository.

    Remember to add and commit these two files to your repo.

    [![tree view tests directory](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/travis_tree.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/travis_tree.png)
  
1. Create a new file called `.travis.yml` and move it to the root of your project repository.

    Remember to add and commit it to your repo. This file tells Travis CI the programming language for your project and how to  build it.

    Any step of the build [can be customized](https://docs.travis-ci.com/user/customizing-the-build). These scripts will execute the next time you commit and push a change to your repo.

    [![tree view yml](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/travis_tree_yml.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/travis_tree_yml.png)

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
  
[![travis fail](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/travis_fail.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/travis_fail.png)

   Travis CI is running our Newman command, but we see a failed exit code (1). Boo.

   Stay calm. Let’s review the logs in Travis CI. Newman ran our tests, we see the first and second tests passed, but the last test `Updated in the last day` failed.

[![travis log fail](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/travis_log_fail.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/travis_log_fail.png)

   Let’s go back to our Postman collection and fix our `Updated in the last day` test.

[![PM test script](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-get-information95.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-get-information95.png)

   Once we fix the mistake in our test, let’s save the changes, update the repo with the latest collection file, and then trigger a Travis CI build once again by committing and pushing the change.  

[![travis log success](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/travis_log_success.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/travis_log_success.png)

 And it's working! All our tests passed and the command exited with a successful exit code (0).

---
For more information about collection runs, see:

* [Starting a collection run](/docs/postman/collection_runs/starting_a_collection_run/)
* [Using environments in collection runs](/docs/postman/collection_runs/using_environments_in_collection_runs/)
* [Working with data files](/docs/postman/collection_runs/working_with_data_files/)
* [Running multiple iterations](/docs/postman/collection_runs/running_multiple_iterations/)
* [Building workflows](/docs/postman/collection_runs/building_workflows/)
* [Sharing a collection run](/docs/postman/collection_runs/sharing_a_collection_run/)
* [Debugging a collection run](/docs/postman/collection_runs/debugging_a_collection_run/)
* [Command line integration with Newman](/docs/postman/collection_runs/command_line_integration_with_newman/)
* [Integration with Jenkins](/docs/postman/collection_runs/integration_with_jenkins/)
* [Newman with Docker](/docs/postman/collection_runs/newman_with_docker/)
