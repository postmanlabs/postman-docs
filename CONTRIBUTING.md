# Contributing

When contributing to this repository, please first discuss the change you wish to make via [Issues](https://github.com/postmanlabs/postman-docs/issues).

Please note we have a [code of conduct](https://www.postman.com/code-of-conduct), please follow it in all your interactions with the project.

## Development Process

We follow [Git Flow](https://guides.github.com/introduction/flow/) for changes to this repository.

* Fork this repo to create a copy hosted on your github account. The Fork button is in the top right of the page.
    * If you're a collaborator on the repo you can instead just create a branch.
* Clone down your copy of this repo onto your local machine: `git clone <YOUR GITHUB REPO URL>`
* Navigate to the new directory git created. `cd postman-docs`
* Checkout the `develop` branch. `git checkout develop`
* Create a new branch for your work based on develop `git checkout -b <YOUR BRANCH NAME>` Your branch name should be something descriptive of the changes you wish to make, and include the Issue number this change is associated with. Example: `1234-update-mock-api-docs`
* Run `npm install` to add all dependencies
* Make your changes. The Learning Center's documentation is built from the `.md` files in the `docs` folder of the repo
* Check your files against our markdown guidelines by running `npm run test:mdlint` and resolve any errors
* When you're ready to apply your changes, push your changed files to your forked repo
    * `git add <FILENAMES OF CHANGED FILES>`
    * `git commit -m "<YOUR COMMIT MESSAGE>"` Your commit message should be descriptive of the changes you made
    * `git push -u origin HEAD` This will push your changes to the branch you created on your forked repo
* Open a Pull Request to the postman-docs repo
    * Navigate to the [postman-docs](https://github.com/postmanlabs/postman-docs) repo
    * Click `New pull request`
    * Click `Compare accross forks`
    * Select `base repository: postmanlabs/postman-docs`
    * Select `base branch: develop`
    * Select `head repository: <YOUR FORKED REPOSITORY>`
    * Select `head branch: <YOUR BRANCH NAME>`
    * Click `Create pull request`

Your pull request will be reviewed by administrators and will either be approved, denied, or sent back for changes.

## Pull Request Process

When your PR is opened it will run GitHub Actions which will lint the markdown files to ensure that they follow our [guidelines](https://github.com/DavidAnson/vscode-markdownlint).

Upon approval your PR will be merged into develop for further verification and then merged into master upon final approval.

[homepage]: https://learning.postman.com

> __Staff and Repo Collaborators__: Please only push to `develop` when changes are ready to publish. The `develop` branch is intended only as a last check to see edits live on the web in a production type build environment before publishing—changes shouldn't sit on the `develop` branch for long before pushing to `master`.

## Adding/Editing Images

If you would like to add, edit or replace images you are welcome to do so. There are two ways in which you can achieve this:

* You can upload the image to your GitHub Pull-Request and link the image
* You can host the image and link to your own hosted image

**Note**:

Images hosted by Postman should always be referenced as follows:

``` bash
https://assets.postman.com/postman-docs/<filename>.png
```

## Algolia

Please note that Algolia search will not work when running the app locally. If you wish to search when running the app locally, you are welcome to use your own Algolia API keys and index the app in your own Algolia account. You can find an env.example file in the repo that shows you what keys you require to run Algolia search.

## Run checks locally

Before creating a PR we recommend to running the following test locally to check that all changes will pass our linters:

* npm run test  -> runs the Unit testing
* npm run test:mdlint -> runs the Markdownlinter
* npm run test:lint -> runs the ESlinter
* npm run test:url -> checks if acceptable image URL has been added
