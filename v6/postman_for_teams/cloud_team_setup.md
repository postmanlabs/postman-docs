---

title: "Managing your Pro team"
page_id: "cloud_team_setup"
tags: 
  - "cloud"
  - "web"
warning: false
---

Here are a few common team-administration actions that you might need to take. These options will only be available to administrators.

* [Setting up your team][0]
* [Inviting team members][1]
* [Removing members][2]
* [Growing team - Buying more seats][3]
* [Reducing your team size][4]
* [Managing custom domains][13]

**Setting up your team**

Once you buy Pro and hit setup, you will be prompted to name your team and invite users. You can name your team whatever you like and you can edit this name later.

[![](https://www.getpostman.com/img/v1/docs/cloud_team_setup/cloud_team_setup_1.png)
][5]
  

**Inviting team members**

Once you purchase seats in the Pro plan, you can add members to your team at any time. 
Sign in and go to https://app.getpostman.com/dashboard/teams and click on send invites.

[![](https://www.getpostman.com/img/v1/docs/cloud_team_setup/cloud_team_setup_2.png)
][6]

Enter the emails of people you want in your team and hit Invite. You do not need to invite all the team members right away. It can be done at your convenience.
  
**Managing custom domains**

* It is also possible to associate custom domains with teams. Currently, this can be used to publish documentation from your own domain.

* In order to use custom domains, head over to the [team dashboard][13].
[![](https://static.getpostman.com/postman-docs/1c2518a3-945d-47d7-836e-cd6df63becc3.png)][14]

* Enter your custom domain in the provided text field, and click on `+`. A modal with additional details shows up.
[![](https://static.getpostman.com/postman-docs/156fa7c6-78cd-4009-8cdd-40f073553ac7.png)][15]

* In order to verify ownership of the entered domain, add the provided TXT and CNAME records at the specified locations in your DNS configuration.

* To do this, open up your hosting provider's DNS console. Assuming that the custom domain added was `api.postman.wtf`,
the TXT record should be added for postman.wtf, and the CNAME record(phs.getpostman.com) should be added for api.postman.wtf.

* Once you are certain that the added records have propagated, click the confirmation checkbox, followed by verify.

* If the tokens were added correctly, and had propagated, a green popup indicates successful verification.
[![](https://static.getpostman.com/postman-docs/b3a7659a-a3b3-488c-97d8-cff43297d7df.png)][16]

* Sometimes, DNS settings take time to propagate (upto a day). In case you see the error below, try again after some time, and double check the values you have set with your DNS provider.
[![](https://static.getpostman.com/postman-docs/6aedab23-5aac-47db-9acf-fa8d9d52b172.png)][17]

* The domain can be deleted by clicking the trashcan icon next to the custom domain.


**Removing members**

If someone is no longer part of your team and you want to remove them, that's easy too. Just click the x next to their name.

[![](https://www.getpostman.com/img/v1/docs/cloud_team_setup/cloud_team_setup_3.png)
][7]
  

**Growing team - Buying more seats**

If you want to add team members but have already used up all invites, you can buy more seats. To do so, click on Add users and you can purchase extra seats. You do not need to use up all seats at once since you can invite new members at your convenience. 

[![](https://www.getpostman.com/img/v1/docs/cloud_team_setup/cloud_team_setup_5.png)
][8]

Enter the number of users you want to add. The cost for your new team member's account will be prorated for the remainder of the current billing period. We'll track this for you, and add it to your bill.
  

**Reducing your team size**

If you have extra slots in your team that don't want to pay for, you can reduce your team size. Head to the [billing page][9], and click Change Plan.

[![](https://www.getpostman.com/img/v1/docs/cloud_team_setup/cloud_team_setup_6.png)
][10]

You can switch between the annual or monthly plans, and change your team size. Click Next. NOTE: You cannot go below the active user count. If you have 19 active users, your team size cannot be updated to 18\.

[![](https://www.getpostman.com/img/v1/docs/cloud_team_setup/cloud_team_setup_7.png)
][11]

You'll see a confirmation screen with the details of your update. Confirm the details before proceeding. Your next invoice will be pro-rated automatically.
  

**Cancel Subscription**

Although we hope you don't, you can cancel your Pro subscription if you need to. Head to the [billing page][9], and click Cancel Pro Plan from the settings menu. You'll see a confirmation modal. Hit the red button to proceed with the cancellation.

[![](https://www.getpostman.com/img/v1/docs/cloud_team_setup/cloud_team_setup_8.png)
][12]
Once you cancel your plan, all your cards will be deleted, and you will no longer have access to Pro-only services like the Team Library and the Documentation service. Cancellation will **not** refund any remaining account balance or unused payment for the month.


[0]: https://www.getpostman.com/#setting-up
[1]: https://www.getpostman.com/#inviting
[2]: https://www.getpostman.com/#uninviting
[3]: https://www.getpostman.com/#adding-seats
[4]: https://www.getpostman.com/#removing-seats
[5]: https://www.getpostman.com/img/v1/docs/cloud_team_setup/cloud_team_setup_1.png
[6]: https://www.getpostman.com/.../img/v1/docs/cloud_team_setup/cloud_team_setup_2.png
[7]: https://www.getpostman.com/img/v1/docs/cloud_team_setup/cloud_team_setup_3.png
[8]: https://www.getpostman.com/img/v1/docs/cloud_team_setup/cloud_team_setup_5.png
[9]: https://app.getpostman.com/pay/billing
[10]: https://www.getpostman.com/img/v1/docs/cloud_team_setup/cloud_team_setup_6.png
[11]: https://www.getpostman.com/img/v1/docs/cloud_team_setup/cloud_team_setup_7.png
[12]: https://www.getpostman.com/img/v1/docs/cloud_team_setup/cloud_team_setup_8.png
[13]: https://app.getpostman.com/dashboard/teams/edit
[14]: https://static.getpostman.com/postman-docs/1c2518a3-945d-47d7-836e-cd6df63becc3.png
[15]: https://static.getpostman.com/postman-docs/156fa7c6-78cd-4009-8cdd-40f073553ac7.png
[16]: https://static.getpostman.com/postman-docs/b3a7659a-a3b3-488c-97d8-cff43297d7df.png
[17]: https://static.getpostman.com/postman-docs/6aedab23-5aac-47db-9acf-fa8d9d52b172.png
