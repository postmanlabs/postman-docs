---

title: "Publish Documentation for your Collections"
page_id: "creating_documentation"
tags: 
  - "app"
  - "cloud"
warning: false
---

All users of Postman Pro get access to Postman's Documenter! This is a new feature that lets you view auto-generated documentation for all your collections. You can also publish this documentation and share it publicly for people to consume.

### Viewing Documentation for Collections

* Make sure you're signed in to Postman. When signed in, your username will be displayed in the top-right corner.
* Click the arrow next to any collection name. You should see the collection browser open up.
* Click the 'View Docs' link.
[![](https://www.getpostman.com/img/v1/docs/publishing_docs/Docs1.png)][0]

* To view documentation for your team's collections, you'll see a similar view docs link in your Team Library.
[![](https://www.getpostman.com/img/v1/docs/publishing_docs/Docs2.png)][1]

* This will open the documentation for that collection in your browser. You'll be able to browse all folders and requests in the collection, and see what the requests and code snippets look like with different environments selected.
[![](https://www.getpostman.com/img/v1/docs/publishing_docs/Docs3.png)][2]

* Keep in mind that this link is restricted to users in your Postman Pro Team. To make this documentation available to other users (as a link on your website, perhaps), you'll need to Publish it!

### Publishing Public Documentation for Collections

Published documentation is a way of sharing your collection's documentation with the world. If you're able to view documentation for one of your collections, published docs are a click away!

* You can only publish documentation for collections that you created. Open the docs page for one of your collections (see above). Click the Publish button at the top of the screen.
* All you need to do is select which environment to publish the collection with. Any references to variables like `{{url}}` in the collection will be replaced with the correct value from the environment. The public URL field contains the URL that you can share with the outside world. For example, if you're publishing your primary collection, you might want to select the "Production" environment, so that people opening published link can start using your docs straightaway.
[![](https://www.getpostman.com/img/v1/docs/publishing_docs/Docs4.png)][3]
Note: Any confidential info (passwords/access tokens) in your environment might be visible publicly. Ensure that all such information is removed from the environment before you publish documentation with an environment.
* Custom domains: Optionally, you can also pick from a list of verified custom domains to view your api documentation on. You'll be able to view docs on your custom domain, as well as the Postman documenter.
[![](https://static.getpostman.com/postman-docs/40ce4cda-5788-4e18-9141-4391de078244.png)][7]
* Real time updates: the public documentation link will always have updated content! You don't need to keep going through the Publish flow each time you want your docs to be updated.
* To unpublish, open the Docs link from your Postman app. Click the Published button near the top of the screen. For a collection that's already been published, you'll be able to view the public link or unpublish the collection.
[![](https://www.getpostman.com/img/v1/docs/publishing_docs/Docs5.png)][4]

* We've published documentation for this collection at [https://documenter.getpostman.com/view/583/coopers-meal-plan/4u2][5].

Oh, and in case you're wondering who Cooper is, why we're trying to feed him, or what his collection is all about, check out our blog post [here][6].

[0]: https://www.getpostman.com/img/v1/docs/publishing_docs/Docs1.png
[1]: https://www.getpostman.com/img/v1/docs/publishing_docs/Docs2.png
[2]: https://www.getpostman.com/img/v1/docs/publishing_docs/Docs3.png
[3]: https://www.getpostman.com/img/v1/docs/publishing_docs/Docs4.png
[4]: https://www.getpostman.com/img/v1/docs/publishing_docs/Docs5.png
[5]: https://documenter.getpostman.com/view/583/coopers-meal-plan/4u2
[6]: http://blog.getpostman.com/2016/03/23/conditional-workflows-in-postman/
[7]: https://static.getpostman.com/postman-docs/40ce4cda-5788-4e18-9141-4391de078244.png
