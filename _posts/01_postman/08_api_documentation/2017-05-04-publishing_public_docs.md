---
categories:
  - "postman"
  - "api_documentation"
title: "Publishing public docs"
page_id: "publishing_public_docs"
warning: false
---

Published documentation enables you to share your [public API documentation](/docs/postman_for_publishers/public_api_docs){:target="_blank"} with the world. 

### Generating public documentation

You can only publish documentation for collections that you've created or have write permissions.

In your [collection's](/docs/postman/api_documentation/viewing_documentation){:target="_blank"} documentation page, click the **Publish** button at the top of the screen.

[![publish button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-publish-button2.png) ](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-publish-button2.png)  

The **Edit Published Collection** page appears.

[![public documentation link](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-public-view.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-public-view.png)

When signed in to Postman, you can select a [corresponding environment](/docs/postman/api_documentation/environments_and_environment_templates){:target="_blank"} to publish the collection. Any references to variables like {% raw %}`{{url}}`{% endraw %} in the collection will be replaced with the correct value from the environment. 

The public URL field contains the URL to share with the outside world. For example, if you’re publishing your primary collection, you might want to select a “production” environment, so your documentation is immediately usable for new visitors. 


> **IMPORTANT:**  Any confidential information in your environment, such as **passwords and access tokens**, might be publicly visible. Remove all such information from the environment before you publish documentation with an environment.

The public documentation link always has the most up-to-date content. You don’t need to repeat the Publish flow each time you want to update your documentation.

**Unpublishing documentation**

In the **Edit Published Collection** page, click the **Unpublish Collection** button at the bottom of the page.

You’ll be able to view the public link or unpublish the collection for a collection that’s already been published,

[![publish or unpublish](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-unpublish2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-unpublish2.png)

Here's an [example](https://documenter.getpostman.com/view/583/coopers-meal-plan/4u2){:target="_blank"} of a collection we've published.

### Custom domains

Optionally, you can pick from a list of verified [custom domains](/docs/postman/api_documentation/adding_and_verifying_custom_domains){:target="_blank"} to host your API documentation. You’ll be able to view docs on your custom domain, as well as the Postman private documentation page. 

[![custom domain](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-custom-domains.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-custom-domains.png)

### Custom styling options

Postman allows you to customize the appearance of your published documentation pages. Add your [team logo](/docs/postman/api_documentation/adding_team_name_and_logo) and update the color theme to align with your brand. 

You can update the custom styling options either before or after you publish your documentation. Click the **Show Custom Styling Options** link to expand the section and update your color palette.

[![custom styling options](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-custom-styling.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-custom-styling.png)
