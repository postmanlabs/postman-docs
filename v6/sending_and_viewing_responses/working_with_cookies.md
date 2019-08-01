---

title: "Working with cookies"
page_id: "working_with_cookies"
tags:
  - "native"
  - "mac"
  - "windows"
warning: false
---

Postman's [native apps](http://www.getpostman.com/downloads/) provide a Cookie Manager that lets you edit cookies that are associated with each domain. To open the Cookie Manager, click the 'Manage Cookies' link under the 'Send' button.

![](https://cloud.githubusercontent.com/assets/681190/16948881/e45d4816-4dd4-11e6-96e6-daadd28929a8.png)

This will open up the Cookie Manager window. This presents you with a list of domains and the cookies associated with them

![](https://cloud.githubusercontent.com/assets/7689783/17617556/741d8724-6098-11e6-9a2e-402f8cfdd8d6.png)

### Create a cookie

To add a new cookie, click on the 'Add Cookie' button for the domain. A pre-generated cookie string (according to https://tools.ietf.org/html/rfc6265#section-4.1) will be created, but you can edit it using the text input that appears below it.

![](https://cloud.githubusercontent.com/assets/7689783/17617656/eaa55200-6098-11e6-9f4f-7e3f82a53d28.png)

Clicking 'Save' will save it to the app's cookie store under the relevant domain.

![](https://cloud.githubusercontent.com/assets/7689783/17617822/d4ebc20e-6099-11e6-81e1-409012121b2c.png)

You can also add a cookie by setting a 'Cookie' header, and sending a request to an appropriate URL in the main Postman window.

### Adding a domain

If you want to add a cookie for a domain that isn't present in the domain list, you can add one by entering the hostname (without the port, or the `http://`) in the input box at the top. Clicking the 'Add' button will add it to the domain listing. You can then add cookies for this domain by selecting it, and entering a new cookie value as described above.

![](https://cloud.githubusercontent.com/assets/7689783/17617882/14308396-609a-11e6-8787-00537755dc33.png)

### Updating a cookie

To update an existing cookie, go to the domain from the domain list, and click the cookie you want to edit. You can edit any property, and hit 'Save' to update.

![](https://cloud.githubusercontent.com/assets/7689783/17617925/574978d6-609a-11e6-89f7-bd4b542a465c.png)
