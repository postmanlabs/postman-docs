---
title: "Why my published collection returns an error 403?"
order: 360036847714
page_id: "why_my_published_collection_returns_an_error_403"
warning: false
---

Your documentation may result in the below error 403 if the environment associated with the collection was created by a user who left the team.

![64537839-dd300400-d31b-11e9-8f4e-45a5156ba8cd.png](https://support.getpostman.com/hc/article_attachments/360049806254/64537839-dd300400-d31b-11e9-8f4e-45a5156ba8cd.png)

A quick way to verify that the error is caused by the unresolved environment is to **republish the collection without selecting any environment**.

To do so, head to your [Postman dashboard](http://app.getpostman.com/), select your collection and click on it. Then, click on ![Screen_Shot_2019-11-05_at_19.04.24.png](https://support.getpostman.com/hc/article_attachments/360050692893/Screen_Shot_2019-11-05_at_19.04.24.png)and select  _No Environment_  
![Screen_Shot_2019-11-05_at_19.06.29.png](https://support.getpostman.com/hc/article_attachments/360049809914/Screen_Shot_2019-11-05_at_19.06.29.png)

If your documentation is rendering fine without the Environment variable, let's go ahead and restore the environment. All you need to do is to **duplicate the environment**.

1\. Go to the Postman app and go to **Manage Environments**

![Screen_Shot_2019-11-05_at_18.54.31.png](https://support.getpostman.com/hc/article_attachments/360049808134/Screen_Shot_2019-11-05_at_18.54.31.png)

2\. In the **Manage Environments** window, hit ![Screen_Shot_2019-11-05_at_19.12.27.png](https://support.getpostman.com/hc/article_attachments/360050694313/Screen_Shot_2019-11-05_at_19.12.27.png) next to the environment you want to restore.  
3\. Edit the Published documentation.  
4\. Select the new, duplicated environment.  
5\. Republish the collection  
