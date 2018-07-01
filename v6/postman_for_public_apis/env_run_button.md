---

title: "Environments in the Run button"
page_id: "env_run_button"
tags: 
  - "app"
  - "web"
warning: false
---

The Run in Postman also allows you to pass an environment alongside the collection.

There are 2 ways to achieve this:

#### While generating the Embed Code

![](https://www.getpostman.com/img/v2/docs/environments/share_select_env.png)

Select the environment name from the dropdown, as shown in the screenshot above. The environment is now embedded within the generated HTML/Markdown and will be imported when your user clicks the button.

#### On page load using Run in Postman's JS API

We also provide an API to programatically generate an environment client side.

    _pm('env.create', 'Spotify', {
      user_id: 'spotifyuser',
      authorization: 'Bearer 1234xyzd'
    });

A possible application for this would be to pass your signed in user's access credentials to Postman, as illustrated in the example above.

Note that this method works only with the CSS button, and not Markdown. The `_pm()` method can be used anywhere on the page, after the embedded script tag.
