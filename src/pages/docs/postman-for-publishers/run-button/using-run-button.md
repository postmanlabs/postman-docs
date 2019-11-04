---
title: "Using the Run in Postman button"
order: 146
page_id: "using_run_button"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "https://learning.getpostman.com/docs/postman/collections/intro-to-collections"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API documentation with Postman"
    url: "https://www.youtube.com/watch?v=Ayo_KdLLcTA"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Wondering About Air Quality? Postman Can Help."
    url: "https://blog.getpostman.com/2017/10/14/wondering-about-air-quality-postman-can-help/?_ga=2.113119748.1078379737.1571761632-963694147.1565912089"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Intro to API documentation"
    url: "https://learning.getpostman.com/docs/postman/api-documentation/intro-to-api-documentation"
---

### Developer experience with Run in Postman

API publishers will display the Run in Postman button in the API reference and the API documentation. Below is an example of the button. Check out [other examples](https://www.getpostman.com/integrations/run-button).

 [![example run in postman](https://assets.postman.com/postman-docs/59131401.png)](https://assets.postman.com/postman-docs/59131401.png)  

When they click the Run in Postman button, they will see some options to import the shared collection. The options will display in a modal if you implemented the button using JavaScript, or a new page if you implemented the button using a static image.

 [![import options](https://www.getpostman.com/img/v1/docs/run-btn-ux/run-btn-ux-2.png)](https://www.getpostman.com/img/v1/docs/run-btn-ux/run-btn-ux-2.png)

If the developer selects one of the first two options, either the Postman Chrome app or Postman native apps, the collection will be directly imported to their Postman app and bring the app into focus.

 [![user has postman](https://www.getpostman.com/img/v1/docs/run-btn-ux/run-btn-ux-3.png)](https://www.getpostman.com/img/v1/docs/run-btn-ux/run-btn-ux-3.png)

If the developer selects the third option, for people who do not yet have the Postman app, they will be directed to the web view to either download a file of the collection or get the Postman app. Nothing will happen if someone without the app clicks on either the Chrome app or Postman native app options.

 [![user does not have postman](https://www.getpostman.com/img/v1/docs/run-btn-ux/run-btn-ux-4.png)](https://www.getpostman.com/img/v1/docs/run-btn-ux/run-btn-ux-4.png)
