---
title: 'Importing and exporting data'
order: 8.2
page_id: 'importing_and_exporting_data'
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Sync your specs"
    url: "https://blog.postman.com/sync-your-specs/"
  - type: link
    name: "Importing SoapUI projects into Postman"
    url: "https://blog.postman.com/importing-soapui-projects-into-postman/"
  - type: link
    name: "Importing RAML folders into Postman"
    url: "https://blog.postman.com/supporting-raml-folders-in-postman/"
  - type: link
    name: "Introducing Postman Collection Format Schema"
    url: "https://blog.postman.com/introducing-postman-collection-format-schema/"
  - type: link
    name: "Travelogue of Postman Collections Format v2"
    url: "https://blog.postman.com/travelogue-of-postman-collection-format-v2/"
  - type: subtitle
    name: "Next Steps"
  - type: link
    name: "Using the API Builder"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"

warning: false
---

Postman can import and export Postman data, including collections, environments, data dumps, and globals. Postman can also import non-Postman data in the form of API schemas to help you consolidate your API development workflow.

## Contents

* [Importing data into Postman](#importing-data-into-postman)

    * [Importing Postman data](#importing-postman-data)

        * [Converting Postman collections from v1 to v2](#converting-postman-collections-from-v1-to-v2)

    * [Importing API specifications](#importing-api-specifications)

    * [Importing via GitHub repositories](#importing-via-github-repositories)

* [Exporting Postman data](#exporting-postman-data)

    * [Exporting collections](#exporting-collections)

    * [Exporting environments](#exporting-environments)

    * [Exporting data dumps](#exporting-data-dumps)

* [Next steps](#next-steps)

## Importing data into Postman

You can import collections or your API specifications directly into Postman.

To import your data into Postman, select **Import** in the left navigation menu.

![Import modal](https://assets.postman.com/postman-docs/import-export-import-ui-next.jpg)

You can import your data from files, folders, links, raw text, or GitHub repositories.

### Importing Postman data

You can import Postman data you previously exported, including collections, environments, data dumps, and globals.

To import Postman data, select **Import**. Select your file or folder, input your link, paste your raw text, or [import from GitHub](#importing-github-repositories). Postman will automatically recognize Postman data, confirming the name, format, and what the file will import as. Select **Import** to bring your data into Postman.

![Import collection and environment](https://assets.postman.com/postman-docs/import-export-github-files-confirm.jpg)

#### Converting Postman collections from v1 to v2

Postman no longer supports the collection v1 format and will return an error if you attempt to import a collection in this format. You can convert your collection's format from v1 to v2 to import it into Postman.

![Collection v1 format](https://assets.postman.com/postman-docs/collection-v1-import.jpg)

You can take the following steps to convert the Postman collection format from v1 to v2.

In the terminal of your choice, enter the following command to install the Postman collection transformer.

```bash
sudo npm install -g postman-collection-transformer
```

You can retrieve a list of convert options by running the command with the ``-h`` flag.

```bash
postman-collection-transformer convert -h
```

 Option | Details |
|:--|:--|
| `-h`, `--help` | Outputs usage information |
| `-i`, `--input <path>` | Returns a path to the input postman collection file |
| `-j`, `--input-version [version]` | Returns the version of the input collection format standard (v1 or v2) |
| `-o`, `--output <path>` | Returns a path to the output postman collection file |
| `-p`, `--output-version [version]` | Returns the version of the output collection format standard (v1 or v2) |
| `-P`, `--pretty` | Prints the output in pretty format |
| `--retain-ids` | Retains the request and folder IDs during conversion (collection ID is always retained) |
| `-w`, `--overwrite` | Overwrites the output file if it exists |

You can convert an individual Postman collection from v1 to v2 by entering the command below.

```bash
postman-collection-transformer convert -i <path to input Postman collection file> -o <path where the output Postman file will be downloaded> -j 1.0.0 -p 2.0.0 -P
```

The resulting collection will be in v2 format and downloaded to your target file path. See the [Postman Collection Transformer](https://github.com/postmanlabs/postman-collection-transformer) for more information on the collection conversion.

### Importing API specifications

Postman directly supports importing the following formats:

* [OpenAPI 3.0](https://github.com/postmanlabs/openapi-to-postman)

* Swagger [1.2](https://github.com/postmanlabs/swagger1-to-postman) and [2.0](https://github.com/postmanlabs/swagger2-postman2-lambda)

* RAML [0.8](https://github.com/postmanlabs/raml-to-postman) and [1.0](https://github.com/postmanlabs/raml1-to-postman)

* [WSDL 1.1 and 2.0](https://github.com/postmanlabs/wsdl-to-postman)

* [GraphQL](https://github.com/postmanlabs/graphql-to-postman)

* WADL

* [cURL](https://github.com/postmanlabs/curl-to-postman)

There are also tools on GitHub to convert the following into a Postman collection for import:

* [Runscope](https://github.com/postmanlabs/runscope-to-postman)

* [DHC](https://github.com/postmanlabs/dhc-to-postman)

To import your API specifications into Postman, select **Import**. Select your file or folder, input your link, or paste your raw text. Confirm the name, format, and what you would like your data to import as, then select **Import** to bring your data into Postman.

![Import file](https://assets.postman.com/postman-docs/import-export-github-files-confirm.jpg)

> You can configure your **Import Settings**, which will differ depending on your API specification.

You can import several API specification files at once. Select the workspace you'd like to import the APIs into, choose whether you want to generate collections from the APIs, configure the details, and select **Import**.

When importing into a team workspace, you can also choose to add the APIs to the [Private API Network](/docs/collaborating-in-postman/adding-private-network/).

[![Import several APIs](https://assets.postman.com/postman-docs/import-export-publish-to-private-api-network-22.jpg)](https://assets.postman.com/postman-docs/import-export-publish-to-private-api-network-22.jpg)

### Importing via GitHub repositories

> You must be signed in to a [Postman account](/docs/getting-started/postman-account/#signing-up-for-a-postman-account) to use this feature.

You can import data in bulk from a GitHub repository by selecting **Import** > **Code repository** > **GitHub**.

![Import from github](https://assets.postman.com/postman-docs/import-export-import-github.jpg)

Confirm your GitHub account and **Authorize postmanlabs** to access your repositories.

![Import from github auth](https://assets.postman.com/postman-docs/import-export-github-auth.jpg)

In Postman, select your GitHub organization, repository, and branch, then **Continue**.

![Import from github auth](https://assets.postman.com/postman-docs/import-export-github-import-directory.jpg)

Confirm the files you would like to import into Postman. You can also opt to **Generate collection from imported APIs** and select what you would like to link this collection as. Click **Show advanced settings** to control how Postman should generate collections based on your file types, then select **Import**.

![Confirm import from github](https://assets.postman.com/postman-docs/import-export-github-files-confirm.jpg)

You will receive a confirmation once the import has completed.

![Confirm complete import from github](https://assets.postman.com/postman-docs/import-export-github-complete.jpg)

You can now view your newly imported files and generated collections in Postman.

![Confirm complete import from github](https://assets.postman.com/postman-docs/import-export-github-complete.jpg)

### Importing via Bitbucket repositories

> You must be signed in to a [Postman account](/docs/getting-started/postman-account/#signing-up-for-a-postman-account) to use this feature.

You can import data in bulk from a Bitbucket repository by selecting **Import** > **Code repository** > **Bitbucket**.

![Import from bitbucket](https://assets.postman.com/postman-docs/import-export-import-github.jpg)

Confirm your Bitbucket account and **Authorize Postman** to access your repositories.

![Import from bitbucket auth](https://assets.postman.com/postman-docs/import-export-bitbucket-confirm-access.jpg)

In Postman, select your Bitbucket workspace, repository, and branch, then **Continue**.

![Import from bitbucket auth](https://assets.postman.com/postman-docs/import-export-bitbucket-select-repo.jpg)

You will see a preview of the files that will be imported to your workspace. Select **Import** to confirm and complete the import.

![Confirm import from bitbucket](https://assets.postman.com/postman-docs/import-export-bitbucket-import-confirm-files.jpg)

You will receive a confirmation once the import has completed.

![Confirm complete import from bitbucket](https://assets.postman.com/postman-docs/import-export-bitbucket-import-complete.jpg)

You can now view your newly imported files and generated collections in Postman.

![Confirm complete import from bitbucket](https://assets.postman.com/postman-docs/require-option-to-select-multiple-for-delete-edit-2.jpg)

## Exporting Postman data

You can export your Postman data, including collections, environments, data dumps, and globals, as JSON files. These files can be imported back into any Postman instance, or utilized by [Newman](/docs/running-collections/using-newman-cli/command-line-integration-with-newman/), Postman's command-line collection runner.

### Exporting collections

You can export your collections from Postman by selecting the **...** next to the collection, then **Export**.

![Export collection menu](https://assets.postman.com/postman-docs/export-collection-menu2.jpg)

You can then select the format you'd like your collection to export as. Select **Export** to download your newly generated JSON file.

> The export to Collection v1 format is no longer supported in Postman.

![Export collection format](https://assets.postman.com/postman-docs/export-collection-format-v8.jpg)

> Learn more about Postman's [collection formats](https://blog.postman.com/travelogue-of-postman-collection-format-v2/).

### Exporting environments

You can export your environments from Postman by selecting the **Environments** tab from the left navigation menu. Select the environment you need to export.

![Export environment](https://assets.postman.com/postman-docs/import-export-env.jpg)

In the top right corner, select the **...**. Select **Export** to download your newly generated JSON file.

![Export environment menu](https://assets.postman.com/postman-docs/import-export-env-create-json.jpg)

### Exporting data dumps

You can export a data dump of all of your collections, environments, globals, and header presets in Postman.

Select the gear icon in the upper-right corner to open **Settings**.

![Export data dump](https://assets.postman.com/postman-docs/import-export-data-dump-menu.jpg)

Select the **Data** tab, then **Export Data** to start your request for the dat dump.

![Export data dump](https://assets.postman.com/postman-docs/import-export-data-dump.jpg)

Select **Export Data** to confirm the data types you need to export.

![Export data dump](https://assets.postman.com/postman-docs/import-export-data-dump-request.jpg)

Select **Request Data Export** to submit the request.

![Export data dump](https://assets.postman.com/postman-docs/import-export-data-dump-request-confirm.jpg)

When the export is ready, you will receive an email with link to download a zipped file with the data dump.

![Export data dump](https://assets.postman.com/postman-docs/import-export-data-dump-request-scheduled.jpg)

## Next steps

You can collaborate on collections by [sharing](/docs/collaborating-in-postman/sharing/) and [commenting](/docs/collaborating-in-postman/commenting-on-collections/) to discuss your API projects with team members. Learn more about [Postman's API workflow](/docs/designing-and-developing-your-api/the-api-workflow/).
