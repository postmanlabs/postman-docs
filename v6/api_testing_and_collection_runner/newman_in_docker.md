---

title: "Running Newman in Docker"
page_id: "newman_in_docker"
tags: 
  - "newman"
warning: false
---

**For Mac and Ubuntu**

To run [Newman][0] in [Docker][1],

1\. Go to the docker hub and pull your copy 
[http://registry.hub.docker.com/u/postman/newman\_ubuntu1404][2] 

2\. Ensure you have docker installed and running in your system

Docker has extensive installation guideline for popular operating systems. Choose your operating system and follow the instructions. A quick test to see if docker is installed correctly is to execute the command

    docker run hello-world

and it should run without errors.

3\. Pull the newman docker image

    docker pull postman/newman_ubuntu1404

4\. Run newman commands on the image

    docker run -t postman/newman_ubuntu1404 --url="https://www.getpostman.com/collections/8a0c9bc08f062d12dcda"

At this stage, you should see Newman running the collection and the output being visible on the terminal. The entrypoint to the docker image is newman and as such, all command line parameters of newman can be used here. You can also run locally stored collection files. The README of the image outlines the procedure of mounting shared data volumes to achieve this.

**For Windows**

Check out our [blog post][3] on how to run Newman in Docker for Windows.


[0]: https://github.com/postmanlabs/newman
[1]: https://www.docker.com/
[2]: http://registry.hub.docker.com/u/postman/newman_ubuntu1404
[3]: http://blog.getpostman.com/2015/08/07/using-the-newman-docker-image-in-windows/
