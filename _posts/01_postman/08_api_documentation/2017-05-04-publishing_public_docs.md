---
categories:
  - "postman"
  - "api_documentation"
title: "Publishing public docs"
page_id: "publishing_public_docs"
warning: false
---

Published documentation is a way of sharing your API documentation with the world. If you’re able to view documentation for one of your collections, publishing docs are a click away! See examples and read more about [public API documentation](/docs/postman_for_publishers/public_api_docs).

### Generating public documentation

You can only publish documentation for collections that you created or for which you have write permissions.

In the documentation page, click the **Publish** button at the top of the screen.

[![publish button](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-publish-button2.png) ](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-publish-button2.png)  

The Edit Published Collection page appears.

[![public documentation link](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-public-view.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-public-view.png)

If you are signed in to Postman, you can select a corresponding environment with which to publish the collection. Any references to variables like {% raw %}`{{url}}`{% endraw %} in the collection will be replaced with the correct value from the environment. 

The public URL field contains the URL that you can share with the outside world. For example, if you’re publishing your primary collection, you might want to select the “Production” environment, so that your documentation is immediately usable for new visitors. 


> **IMPORTANT:**  Any confidential info in your environment, such as **passwords and access tokens**, might be visible publicly. Ensure that all such information is removed from the environment before you publish documentation with an environment.

The public documentation link will always have the most up-to-date content! You don’t need to keep going through the Publish flow each time you want your docs to be updated.

**Unpublishing documentation**
In the Edit Published Collection page, click the **Unpublish Collection** button.
For a collection that’s already been published, you’ll be able to view the public link or unpublish the collection. 

[![publish or unpublish](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-unpublish2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-unpublish2.png)

We’ve published documentation for this collection - check it out [here](https://documenter.getpostman.com/view/583/coopers-meal-plan/4u2){:target="_blank"}.

### Custom domains

Optionally, you can pick from a list of verified [custom domains](/docs/postman/api_documentation/adding_and_verifying_custom_domains) to host your API documentation. You’ll be able to view docs on your custom domain, as well as the Postman private documentation page. 

[![custom domain](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-custom-domains.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-custom-domains.png)

### Custom styling options

Postman allows you to customize the appearance of your published documentation pages. Add your [team logo](/docs/postman/api_documentation/adding_team_name_and_logo) and update the color theme to align with your brand. 

You can update the custom styling options either before or after you publish your documentation. Click the **Show Custom Styling Options** link to expand the section and update your color palette.

[![custom styling options](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-custom-styling.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/docs-custom-styling.png)
