---
title: "Using the Run in Postman button"
page_id: "using_run_button"
warning: false

---

### Developer experience with Run in Postman

API publishers will display the Run in Postman button in the API reference and the API documentation. Below is an example of the button. Check out [other examples](https://www.getpostman.com/integrations/run-button).

 [![example run in postman](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59131401.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59131401.png)  

When they click the Run in Postman button, they will see some options to import the shared collection. The options will display in a modal if you implemented the button using JavaScript, or a new page if you implemented the button using a static image.

 [![import options](https://www.getpostman.com/img/v1/docs/run_btn_ux/run_btn_ux_2.png)](https://www.getpostman.com/img/v1/docs/run_btn_ux/run_btn_ux_2.png)

If the developer selects one of the first two options, either the Postman Chrome app or Postman native apps, the collection will be directly imported to their Postman app and bring the app into focus.

 [![user has postman](https://www.getpostman.com/img/v1/docs/run_btn_ux/run_btn_ux_3.png)](https://www.getpostman.com/img/v1/docs/run_btn_ux/run_btn_ux_3.png)

If the developer selects the third option, for people who do not yet have the Postman app, they will be directed to the web view to either download a file of the collection or get the Postman app. Nothing will happen if someone without the app clicks on either the Chrome app or Postman native app options. 

 [![user does not have postman](https://www.getpostman.com/img/v1/docs/run_btn_ux/run_btn_ux_4.png)](https://www.getpostman.com/img/v1/docs/run_btn_ux/run_btn_ux_4.png)
