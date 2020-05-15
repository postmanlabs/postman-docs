---
title: "Creating the Run in Postman button"
order: 331
page_id: "creating_run_button"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "https://learning.postman.com/docs/postman/collections/intro-to-collections"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Intuit"
    url: "https://www.postman.com/resources/case-studies/intuit/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API documentation with Postman"
    url: "https://www.youtube.com/watch?v=Ayo_KdLLcTA"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Square simplifies API docs with the Run in Postman button"
    url: "https://blog.postman.com/2017/07/21/square-simplifies-api-docs-with-the-run-in-postman-button/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to API documentation"
    url: "https://learning.postman.com/docs/postman/api-documentation/documenting-your-api/"
  - type: link
    name: "Intro to environments and globals"
    url: "https://learning.postman.com/docs/postman/environments_and_globals/intro_to_environments_and_globals"

---

The Run in Postman button is a way to [share your Postman Collection](/docs/postman/collections/sharing-collections/) and integrate your API documentation or developer portal directly with the Postman app. Keep in mind, Run in Postman works well with API description formats like Swagger and RAML too. Just convert your file to a collection by [importing it into Postman](/docs/postman/collections/importing-and-exporting-data/#importing-data-into-postman).

The Run in Postman button imports and opens a collection of API endpoints directly in the user’s Postman app. You can embed the button in your API documentation or your GitHub's README to help developers get up to speed on your API faster.

### Creating the Run in Postman button

To create the Run in Postman button, start in the Postman app. Make sure you are signed in to your Postman account, and that you have a collection to share.

1. Click on the ellipsis **(...)** next to the collection you would like to embed and select "Share".

    [![share collection](https://assets.postman.com/postman-docs/shareCollectionDropdown.png)](https://assets.postman.com/postman-docs/shareCollectionDropdown.png)

1. Under the **Embed Button** tab, click the **Generate Code** button to upload the collection to the Postman servers.

    [![generate code](https://assets.postman.com/postman-docs/github4.png)](https://assets.postman.com/postman-docs/github4.png)

1. Pick whether you would like a Dynamic button or a Static button.

* The Dynamic button uses HTML and CSS, and works well if you want to add the button to your own website and you have permissions to edit the source code of the site.
* The Static button uses Markdown, and works well if you need to add the button to a markdown document, such as a README.md file in your Github or Bitbucket repository.

      [![run in postman button code](https://assets.postman.com/postman-docs/runinpostmanbuttoncode.png)](https://assets.postman.com/postman-docs/runinpostmanbuttoncode.png)

Here’s an example markdown snippet:

```bash
[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/run-collection/:collection_id)
```

Here’s an example HTML snippet:

```bash
<a href="https://www.postman.com/run-collection/:collection_id" target="_blank">
  <img src="https://run.pstmn.io/button.svg" alt="Run in Postman">
</a>
```

The `:collection_id` is a placeholder here and will be auto-filled in the markdown snippet.

Embed this button on your documentation pages or your GitHub repo’s README for the API.
