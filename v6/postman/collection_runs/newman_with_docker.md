---
title: "Newman with Docker"
page_id: "newman_with_docker"
warning: false
tags:
  - "newman"

---

This topic describes how to use Newman with Docker in these platforms:

* [macOS and Ubuntu](#mac-and-ubuntu)
* [Windows](#windows)

## macOS and Ubuntu

Follow these steps to use [Newman](https://github.com/postmanlabs/newman) with [Docker](https://www.docker.com/):

1\. In the [Docker Hub](https://hub.docker.com/r/postman/newman_ubuntu1404/), download your copy.

2\. Ensure you have Docker installed and running in your system. Docker has extensive installation guidelines for popular operating systems. Choose your operating system and follow the instructions.

To test your Docker installation, execute this command to ensure it runs without errors:

```bash
$ docker run hello-world
```

3\. Pull the Newman docker image.

```bash
$ docker pull postman/newman:ubuntu
```

4\. Run Newman commands on the image.

```bash
$ docker run -t postman/newman:ubuntu run "https://www.getpostman.com/collections/8a0c9bc08f062d12dcda"
```

At this stage, you should see the Collection running in Newman and the output displayed in the terminal.

The entry point to the Docker image is Newman. So you can use all Newman command line parameters. You can also run locally stored collection files. The README of the image outlines how to mount shared data volumes.

## Windows

Check our [blog post](https://blog.getpostman.com/2015/08/07/using-the-newman-docker-image-in-windows/) on how to run Newman in Docker for Windows.

---
For more information on collection runs, see:

* [Starting a collection run](/docs/postman/collection_runs/starting_a_collection_run/)
* [Using environments in collection runs](/docs/postman/collection_runs/using_environments_in_collection_runs/)
* [Working with data files](/docs/postman/collection_runs/working_with_data_files/)
* [Running multiple iterations](/docs/postman/collection_runs/running_multiple_iterations/)
* [Building workflows](/docs/postman/collection_runs/building_workflows/)
* [Sharing a collection run](/docs/postman/collection_runs/sharing_a_collection_run/)
* [Debugging a collection run](/docs/postman/collection_runs/debugging_a_collection_run/)
* [Command line integration with Newman](/docs/postman/collection_runs/command_line_integration_with_newman/)
* [Integration with Jenkins](/docs/postman/collection_runs/integration_with_jenkins/)
* [Integration with Travis CI](/docs/postman/collection_runs/integration_with_travis/)
* [Newman with Docker](/docs/postman/collection_runs/newman_with_docker/)
