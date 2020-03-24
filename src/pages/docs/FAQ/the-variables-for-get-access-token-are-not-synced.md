---
title: "The variables for 'Get Access Token' are not synced"
order: 3
page_id: "the-variables-for-get-access-token-are-not-synced"
warning: false
---

When the settings been created in the **"Get Access Token"** to have variables for "**Access Token URL**", "**Client ID**", and "**Client Secret**" to switch between environments then this works well without having to update the scripts. But when we sync or Export the Scripts and Environments then they don't default to the generic data entry.

![](https://support.getpostman.com/hc/article_attachments/360013550753/mceclip0.png)The reason being, the variables saved while generating auth token works fine only for the collections or requests on the app where the token was generated and it will not be synced as it may contain sensitive data.

So, If you try to access any collection/request which uses the same auth token on any other machine or app, it will not work since this is an expected behavior of the variables created for OAuth2.0.
