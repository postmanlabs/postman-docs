![Postman logo](https://assets.getpostman.com/common-share/postman-github-logo.png "Postman logo")

# Postman Learning Center

Postman is the collaboration platform for API development. And the [Postman Learning Center](https://learning.postman.com/) has the resources you need to ramp up quickly and extend your skills with Postman. Postman allows you to write API test cases in any format of your choice (JSON/XML/many more) and run them to verify and validate your API. Moreover, Postman provides collections which can improve a developer's workflow. Postman is available for several platforms including windows and Mac OS X. For more information visit [the Postman website](https://www.postman.com/).

## Contribution guidelines

We would love for you to contribute to the Learning Center! To contribute to this project, please read:

* The [Code of Conduct](https://www.postman.com/code-of-conduct)
* The [Contribution Guidelines](CONTRIBUTING.md)
* The [Documentation Style Guide](DOCS_STYLE_GUIDE.md)

**NOTE:** We have added a new Markdown linter with GitHub Actions. When making a pull request, it will run against this linter. Your changed files are required to pass linting before they will be merged. More information on this can be found in the [contribution guidelines](CONTRIBUTING.md).

## Build the Learning Center locally

```

   $ git clone https://github.com/postmanlabs/postman-docs.git
   $ cd postman-docs
   $ npm install
   $ npm install -g gatsby-cli
   $ npm run dev

```

**NOTE:** this site was build with node v12.11.0. We recommend installing and using [nvm](https://github.com/nvm-sh/nvm) and setting your node version to v12.11.0.

### Build using Docker

You can build the Learning Center and run it in a Docker container using the following dockerfile.

1. Start by cloning the the repository

   `git clone https://github.com/postmanlabs/postman-docs.git`

2. Create a file and name it "dockerfile" with the following contents

    ```

    FROM node:12

    EXPOSE 8000

    # copy the postman-docs project directory
    COPY postman-docs /var/postman-docs

    WORKDIR "/var/postman-docs"

    RUN npm install -g gatsby-cli
    RUN npm install --force

    CMD ["yarn", "dev", "-H", "0.0.0.0" ]

    ```

    The dockerfile should be in the same directory as the postman-docs directory

    ```

    # example directory structure
    |--[current folder]
       |--postman-docs
       |--dockerfile

    ```

3. Build the Docker image with this command:

   `$ docker build --tag postman-docs:1.0 .`

4. Start a container using the image

   `$ docker run -p 8000:8000 -d postman-docs:1.0`

#### Docker Compose

You can also build with docker-compose using the dockerfile above and this docker-compose.yaml

```

version: '3'
services:
  node:
    build:
      context: ./
    ports:
      - "8000:8000"

```

The docker-compose.yaml should be in the same directory as the postman-docs directory and dockerfile.

```

# example directory structure
|--[current folder]
   |--postman-docs
   |--dockerfile
   |--docker-compose.yaml

```

Start run the container with this command

`$ docker-compose up`

## Project Structure

The built site will only host the most up-to-date docs. All legacy documentation is stored in github and excluded from build.

### To update the docs

* Posts are maintained under the `/src/pages/docs` folder.

* The folder structure of /docs is the URL structure for posts. For example, `/docs/postman/variables-and-environments/variables.md` is mapped to URL `https://learning.postman.com/docs/postman/variables-and-environments/variables/`.

* Links in the docs should be relative. Example:

```

   [Newman](/docs/postman/collection-runs/command-line-integration-with-newman/)

```

## Resources

* [Download Postman](https://www.postman.com/downloads/)
* [Postman Release Notes](https://www.postman.com/downloads/release-notes)
* [Postman Integrations](https://www.postman.com/integrations/)
* [The Postman API](https://docs.api.getpostman.com/)
* [Postman community](https://community.postman.com/) on Discourse

## License

[Apache License 2.0](LICENSE)
