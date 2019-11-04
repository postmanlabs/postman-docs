---
title: "Publishing public docs"
order: 69
page_id: "publishing_public_docs"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Imgur"
    url: "https://www.getpostman.com/case-studies/Imgur.pdf?_ga=2.137063670.754547870.1571851340-1454169035.1570491567"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API documentation with Postman"
    url: "https://www.youtube.com/watch?v=Ayo_KdLLcTA"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "API Network Exploration: Infermedica"
    url: "https://blog.getpostman.com/2018/05/25/api-network-exploration-infermedica/?_ga=2.137063670.754547870.1571851340-1454169035.1570491567"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Public API documentation"
    url: "/docs/postman-for-publishers/public-api-docs/"

warning: false
---

Published documentation enables you to share your [public API documentation](/docs/postman-for-publishers/public-api-docs/) with the world.

## Generating public documentation

You can only publish documentation for collections that you've created or have write permissions. From your collection's private documentation page, select a corresponding version and click **Publish** on the top right corner of the screen.

[![publish button](https://assets.postman.com/postman-docs/API-Publish1.png)](https://assets.postman.com/postman-docs/API-Publish1.png)  

Alternatively, you can also click ellipsis (...) in the sidebar and select 'Publish Docs', as illustrated below:

[![publish docs](https://assets.postman.com/postman-docs/Publish-Docs-Option.png)](https://assets.postman.com/postman-docs/Publish-Docs-Option.png)

From the **Publish Collection** page, you can select a [corresponding environment](/docs/postman/api-documentation/environments-and-environment-templates/) and a corresponding collection version to publish the collection. Any references to variables like `{{url}}` in the collection will be replaced with the correct value from the environment.

[![publish collection](https://assets.postman.com/postman-docs/Publish-Docs-Preview.png)](https://assets.postman.com/postman-docs/Publish-Docs-Preview.png)

You will also be able to preview your documentation before you publish. To preview your documentation, click **Preview Documentation** as illustrated in the above screen.

Optionally, you can pick from a list of verified [custom domains](/docs/postman/api-documentation/adding-and-verifying-custom-domains/) to host your API documentation. You’ll be able to view documentation on your custom domain, as well as the Postman private documentation page.

[![custom domain](https://assets.postman.com/postman-docs/WS-docs-custom-domains.png)](https://assets.postman.com/postman-docs/WS-docs-custom-domains.png)

To share your API documentation with your users and the rest of the Postman community, select 'Add to API Network' radio button to allow others to discover your API through the [Postman API Network](/docs/postman/launching-postman/newbutton/#API-Network). To make your APIs part of the Postman [Templates](/docs/postman/launching-postman/newbutton/#templates), select the radio button 'Add to Postman Templates', as illustrated below.  

[![api network checkbox](https://assets.postman.com/postman-docs/API-Publish3.png)](https://assets.postman.com/postman-docs/API-Publish3.png)

### Add to API Network

Verify your team name, logo, and description. Select the categories that best describe your APIs and service. Once submitted, the Postman team will review the submission for approval, and then your API will be accessible to millions of developers worldwide.

[![api network categories](https://assets.postman.com/postman-docs/api-network-categories.png)](https://assets.postman.com/postman-docs/api-network-categories.png)

### Add to Postman Templates

You can share your collection with the API community by selecting the radio button 'Add to Postman Templates'. The template name is auto populated from your collection name, as illustrated in the below screen. You can input template description, add categories and click 'Publish Collection'.  

[![add to templates](https://assets.postman.com/postman-docs/Add+To+Postman+Templates.png)](https://assets.postman.com/postman-docs/Add+To+Postman+Templates.png)

Postman allows you to customize the appearance of your published documentation pages. Add your [team logo](/docs/postman/api-documentation/adding-team-name-and-logo/) and update the color theme to align with your brand.

### Custom Styling

You can update the custom styling options either before or after you publish your documentation. Click the **Show Custom Styling Options** link to expand the section and update your color palette.

[![custom styling options](https://assets.postman.com/postman-docs/WS-docs-custom-styling.png)](https://assets.postman.com/postman-docs/WS-docs-custom-styling.png)

---

Here's an [example](https://documenter.getpostman.com/view/583/coopers-meal-plan/4u2) of a published collection.

> **IMPORTANT:**  Any confidential information in your environment, such as **passwords and access tokens**, might be publicly visible. Remove all such information from the environment before you publish documentation with an environment.

The public documentation link always has the most up-to-date content. You don’t need to repeat the publication flow each time you want to update your documentation.

### Unpublishing documentation

Once your collection has been published, you can return to the **Edit Published Collection** page, click the **Unpublish Collection** button at the bottom of the page.

[![publish or unpublish](https://assets.postman.com/postman-docs/docs-unpublish2.png)](https://assets.postman.com/postman-docs/docs-unpublish2.png)
