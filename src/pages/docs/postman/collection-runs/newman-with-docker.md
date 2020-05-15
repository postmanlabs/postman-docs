---
title: "Newman with Docker"
order: 122
page_id: "newman_with_docker"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Command line integration with Newman"
    url: "/docs/postman/collection-runs/command-line-integration-with-newman/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Integrations: how Postman plays with some of your favorite tools"
    url: "https://blog.postman.com/2018/04/13/integrations-how-postman-plays-with-some-of-your-favorite-tools/"
  - type: link
    name: "Using the Newman Docker image in Windows, hassle free"
    url: "https://blog.postman.com/2015/08/07/using-the-newman-docker-image-in-windows/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to the Postman API"
    url: "/docs/postman/postman-api/intro-api/"

warning: false
tags:
  - "newman"

---

This topic describes how to use [Newman](https://github.com/postmanlabs/newman) with [Docker](https://www.docker.com/) in these platforms:

* [macOS and Ubuntu](#macos-and-ubuntu)
* [Windows](#windows)

## macOS and Ubuntu

Follow these steps to use Newman with Docker:

1\. In the [Docker Hub](https://hub.docker.com/r/postman/newman/), download your copy.

2\. Ensure you have Docker installed and running in your system. Docker has extensive installation guidelines for popular operating systems. Choose your operating system and follow the instructions.

To test your Docker installation, execute this command to ensure it runs without errors:

```bash
$ docker run hello-world
```

3\. Pull the Newman docker image.

```bash
$ docker pull postman/newman;
```

4\. Run Newman commands on the image.

```bash
$ docker run -t postman/newman run "https://www.postman.com/collections/8a0c9bc08f062d12dcda"
```

At this stage, you should see the [Collection](/docs/postman/collections/intro-to-collections/) running in Newman and the output displayed in the terminal.

The entry point to the Docker image is Newman. So you can use all Newman command line parameters. You can also run locally stored collection files. The README of the image outlines how to mount shared data volumes.

## Windows

Check out [how to run Newman in Docker for Windows](https://blog.postman.com/2015/08/07/using-the-newman-docker-image-in-windows/).

---
For more information on collection runs, see:

* [Starting a collection run](/docs/postman/collection-runs/starting-a-collection-run/)
* [Using environments in collection runs](/docs/postman/collection-runs/using-environments-in-collection-runs/)
* [Working with data files](/docs/postman/collection-runs/working-with-data-files/)
* [Running multiple iterations](/docs/postman/collection-runs/running-multiple-iterations/)
* [Building workflows](/docs/postman/collection-runs/building-workflows/)
* [Sharing a collection run](/docs/postman/collection-runs/sharing-a-collection-run/)
* [Debugging a collection run](/docs/postman/collection-runs/debugging-a-collection-run/)
* [Command line integration with Newman](/docs/postman/collection-runs/command-line-integration-with-newman/)
* [Integration with Jenkins](/docs/postman/collection-runs/integration-with-jenkins/)
* [Integration with Travis CI](/docs/postman/collection-runs/integration-with-travis/)
* [Newman with Docker](/docs/postman/collection-runs/newman-with-docker/)
