---
title: "Integration with Travis CI"
page_id: "integration_with_travis"
warning: false
tags:
  - "newman"

---

**Continuous Integration (CI)** is a practice that requires developers to **integrate** code into a shared repository several times a day. By committing early and often, the team avoids a ton of technical debt by allowing teams to detect problems early while conflicts are relatively easy to fix. Every check-in kicks off an automated build process which typically includes testing and (if your commit hasn’t broken anything) might include deployment too.

In general, integrating your [Postman tests](/docs/postman/scripts/test_scripts/) with your favorite continuous integration service is the same process if you’re [running on Jenkins](/docs/postman/collection_runs/integration_with_jenkins/), Travis CI, AppVeyor, or any other build system. You will set up your CI configuration to run a shell command upon kicking off your build. The command is a [Newman script that runs your collection](/docs/postman/collection_runs/command_line_integration_with_newman/) with the tests, returning a pass or fail exit code that’s logged in your CI system.

In this example, we’ll walk through how to integrate Postman with [Travis CI](https://travis-ci.org/), a continuous integration service used to build and test projects hosted on GitHub. Travis CI will run your tests every time you commit to your GitHub repo, submit a pull request, or some other specified configuration.

[![travis workflow](https://assets.postman.com/postman-docs/travis_workflow.png)](https://assets.postman.com/postman-docs/travis_workflow.png)

### Before we get started:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/b79dc2835758549eed7e#?env%5Btests%5D=W3siZW5hYmxlZCI6dHJ1ZSwia2V5IjoibGFzdERheSIsInZhbHVlIjoiMjAxNy0wOC0xMFQwMDowMzo1OS45MThaIiwidHlwZSI6InRleHQifV0=)

1. **Start with a Postman collection with tests:** For now, let’s assume you already have a Postman collection with tests. Download the sample collection and environment by clicking the Run in Postman button if you want to follow along with this example.
2. **Set up a GitHub repository:** Travis CI is free for open source projects on GitHub, so in this example, we will keep our Postman tests in a public GitHub repo.
3. **Set up Travis CI:** Getting started with Travis CI is simple and will take a few minutes. Follow the [Travis CI getting started guide](https://docs.travis-ci.com/user/getting-started/) for the complete walk through. [Sign in to Travis CI](https://travis-ci.org/auth) with your GitHub account. Go to your [profile page](https://travis-ci.org/profile) and enable Travis CI for the public GitHub repo we set up in the previous step.

### Hooking up Postman to Travis CI

1. [Export the Postman Collection as a JSON file](/docs/postman/collections/data_formats/#exporting-and-importing-postman-data) and move the file to your project directory. If you’re using an environment like in this example, [download the Postman environment as a JSON file](/docs/postman/environments_and_globals/manage_environments/#manage-environments) and move the file to your project directory as well. In this example, I've moved both files into a directory called `tests` placed in the root of the project repository. Remember to add and commit these 2 files to your repo.
  [![tree view tests directory](https://assets.postman.com/postman-docs/travis_tree.png)](https://assets.postman.com/postman-docs/travis_tree.png)
2. Create a new file called `.travis.yml` and move it to the root of your project repository. Remember to add and commit it to your repo. This file tells Travis CI the programming language for your project and how to build it. Any step of the build [can be customized](https://docs.travis-ci.com/user/customizing-the-build). These scripts will execute the next time you commit and push a change to your repo.
  [![tree view yml](https://assets.postman.com/postman-docs/travis_tree_yml.png)](https://assets.postman.com/postman-docs/travis_tree_yml.png)
  In the `.travis.yml` file, add a command to `install` Newman in the CI environment, and then add a `script` telling Newman to run the Postman tests (which I've placed in the `tests` directory). Since Travis CI doesn’t know where Newman is located, let's update the `PATH`. In this node.js example, the `newman` tool is located in my `.bin` directory which is located in my `node_modules` directory.
  
Now, my `.travis.yml` file looks like this for this node.js example:

```
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

Travis CI is running our Newman command, but we see a failed exit code (1). Boo.

Stay calm. Let’s review the logs in Travis CI. Newman ran our tests, we see the first and second tests passed, but the last test `Updated in the last day` failed.

[![travis log fail](https://assets.postman.com/postman-docs/travis_log_fail.png)](https://assets.postman.com/postman-docs/travis_log_fail.png)

Let’s go back to our Postman collection and fix our `Updated in the last day` test.

[![PM test script](https://assets.postman.com/postman-docs/WS-get-information95.png)](https://assets.postman.com/postman-docs/WS-get-information95.png)

Once we fix the mistake in our test, let’s save the changes, update the repo with the latest collection file, and then trigger a Travis CI build once again by committing and pushing the change.  

[![travis log success](https://assets.postman.com/postman-docs/travis_log_success.png)](https://assets.postman.com/postman-docs/travis_log_success.png)

And it's working! All our tests passed and the command exited with a successful exit code (0).

