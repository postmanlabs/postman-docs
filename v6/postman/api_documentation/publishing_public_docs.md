---
title: "Publishing public docs"
page_id: "publishing_public_docs"
warning: false
---

Published documentation enables you to share your [public API documentation](/docs/postman_for_publishers/public_api_docs/) with the world.

## Generating public documentation

You can only publish documentation for collections that you've created or have write permissions. From your collection's private documentation page, select a corresponding version and click **Publish** on the top right corner of the screen.

[![publish button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Publish1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Publish1.png)  

Alternatively, you can also click ellipsis (...) in the sidebar and select 'Publish Docs', as illustrated below:

[![publish docs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Publish-Docs-Option.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Publish-Docs-Option.png)

From the **Publish Collection** page, you can select a [corresponding environment](/docs/postman/api_documentation/environments_and_environment_templates/) and a corresponding collection version to publish the collection. Any references to variables like `{{url}}` in the collection will be replaced with the correct value from the environment.

[![publish collection](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Publish-Docs-Preview.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Publish-Docs-Preview.png)

You will also be able to preview your documentation before you publish. To preview your documentation, click **Preview Documentation** as illustrated in the above screen.

Optionally, you can pick from a list of verified [custom domains](/docs/postman/api_documentation/adding_and_verifying_custom_domains/) to host your API documentation. You’ll be able to view documentation on your custom domain, as well as the Postman private documentation page.

[![custom domain](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-docs-custom-domains.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-docs-custom-domains.png)

To share your API documentation with your users and the rest of the Postman community, select 'Add to API Network' radio button to allow others to discover your API through the [Postman API Network](/docs/postman/launching_postman/newbutton/#API-Network). To make your APIs part of the Postman [Templates](/docs/postman/launching_postman/newbutton/#templates), select the radio button 'Add to Postman Templates', as illustrated below.  

[![api network checkbox](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Publish3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/API-Publish3.png)

### Add to API Network

Verify your team name, logo, and description. Select the categories that best describe your APIs and service. Once submitted, the Postman team will review the submission for approval, and then your API will be accessible to millions of developers worldwide.

[![api network categories](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/api-network-categories.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/api-network-categories.png)

### Add to Postman Templates

You can share your collection with the API community by selecting the radio button 'Add to Postman Templates'. The template name is auto populated from your collection name, as illustrated in the below screen. You can input template description, add categories and click 'Publish Collection'.  

[![add to templates](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Add+To+Postman+Templates.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Add+To+Postman+Templates.png)

Postman allows you to customize the appearance of your published documentation pages. Add your [team logo](/docs/postman/api_documentation/adding_team_name_and_logo/) and update the color theme to align with your brand.

### Custom Styling

You can update the custom styling options either before or after you publish your documentation. Click the **Show Custom Styling Options** link to expand the section and update your color palette.

[![custom styling options](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-docs-custom-styling.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-docs-custom-styling.png)

---

Here's an [example](https://documenter.getpostman.com/view/583/coopers-meal-plan/4u2) of a published collection.

> **IMPORTANT:**  Any confidential information in your environment, such as **passwords and access tokens**, might be publicly visible. Remove all such information from the environment before you publish documentation with an environment.

The public documentation link always has the most up-to-date content. You don’t need to repeat the publication flow each time you want to update your documentation.

### Unpublishing documentation

Once your collection has been published, you can return to the **Edit Published Collection** page, click the **Unpublish Collection** button at the bottom of the page.

[![publish or unpublish](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-unpublish2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-unpublish2.png)
