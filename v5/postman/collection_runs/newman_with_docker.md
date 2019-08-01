---
title: "Newman with Docker"
page_id: "newman_with_docker"
warning: false
tags:
  - "newman"

---

### For Mac and Ubuntu

To run [Newman](https://github.com/postmanlabs/newman) in [Docker](https://www.docker.com/),

1\. Go to Docker Hub and pull your copy [here](http://registry.hub.docker.com/u/postman/newman_ubuntu1404).

2\. Ensure you have Docker installed and running in your system. Docker has extensive installation guideline for popular operating systems. Choose your operating system and follow the instructions. A quick test to see if docker is installed correctly is to execute the following command, ensuring that it runs without errors.

```bash
$ docker run hello-world
```

3\. Pull the Newman docker image.

```bash
$ docker pull postman/newman_ubuntu1404
```

4\. Run Newman commands on the image.

```bash
$ docker run -t postman/newman_ubuntu1404 --url="https://www.getpostman.com/collections/8a0c9bc08f062d12dcda"
```

At this stage, you should see Newman running the collection and the output being visible on the terminal. The entrypoint to the docker image is Newman, and as such, all command line parameters of Newman can be used here. You can also run locally stored collection files. The README of the image outlines the procedure of mounting shared data volumes to achieve this.

### For Windows

Check out our [blog post](http://blog.getpostman.com/2015/08/07/using-the-newman-docker-image-in-windows/) on how to run Newman in Docker for Windows.
