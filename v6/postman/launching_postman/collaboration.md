---
title: "Variables"
page_id: "variables"
warning: false

---

## **Collaboration Now Available for Free Users**

With a view to encouraging real-time collaboration between developers and other stakeholders during any point in the API lifecycle, Postman now allows all free users to collaborate with their teams through Team Workspaces. Using this feature, you can easily collaborate and share your Collections, Environments, Integrations, History, Mocks, Monitors, and more. Keeping in line with its legacy of providing rich user experience, we, at Postman, have made collaboration as easy as sharing a bookmark. 

**Note:** If you are a Free User, you must download the latest Postman app version 6.2 to collaborate with other teams. More importantly, Postman offers an upper limit on the number of collection requests and history shares. For more information on the usage limit, refer to the section Usage Limit for Free Users. However, note that Postman does not impose any limit on the number of people you can invite. 

You can now get started creating team workspaces and inviting users to join your workspace just by sending an invitation through ‘invite’ button. You would also be able to join workspaces created by other team members for collaboration. This section explains how to collaborate in Postman and derive the many benefits it offers. It explains the following topics: 

* Working with Team Workspaces 

* Usage Limit for Free Users

 ### **Working with Team Workspaces**

This section explains different ways of creating a team workspace and inviting other team members for collaboration. You can create a team workspace using the following ways:

* Inviting a team member to a personal workspace

* Creating a new workspace from the menu

#### **Inviting a Team Member to a Personal Workspace**

You can use the invite button displayed prominently adjacent to the Workspace Switcher  . Click Invite. The following screen opens:

[![invite team member](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/InvitetoTeam1.png)
 

Enter the email id of the person you’d like to invite to your team workspace and click Add. Once the email appears as shown below, click Invite to team button. 

[![add email](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Email_add.png)
 
The invitee will be part of the team after accepting the invitation. 

**Note:** Your My Workspace will always be unique to you because it’s created by default by Postman. Remember, your My Workspace and your personal workspaces are not one and the same. While your My Workspace is unique to you, your personal workspaces are something that you can still share with other stakeholders. However, note that when you invite a member to your personal workspace, Postman converts it into a team workspace.  

#### **Creating New Workspace from the Menu**

You can straightaway create a team workspace using Create New option in the Workspace Switcher. 

[![create new workspace](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/MyWorkspace1.png)

Click Create New in the above screen. The following screen opens:

[![create workspace](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/CreateNewWorkspace.png)
 
Specify a name in the Name field. Input any details for Summary and select Team under Type. The Team option appears highlighted in orange color indicating its selection. Note that the Invite members to this workspace option is available only for Team workspaces. 

### **Usage Limit for Free Users**

Traditionally, team workspace was available only for Postman Pro and Postman Enterprise users until Postman 6.2 version. However, conceding to the overwhelming demand in various fora like Postman Community and others, Postman opened the floodgates for all the users but with some controls. This section explains the following topics: 

* Usage Limit

* How Archiving Works

* Recovering Your Archived Collections

#### **Usage Limit**

Postman allows you to collaborate with other team members on up to 25 shared requests and an equal number of shared history under the free plan. Once you exceed your limit, Postman archives your collections and shared history requests. However, Postman secures your archived collections and provides access to your data with options of exporting and downloading. Also, note that the usage limit does not apply to sharing environments; it applies only to shared collection requests and history. Only the collections that you share with other teams count towards this limit and you can still continue having unlimited collections for personal use. 

**Note:** Postman archives only collections, it does not archive standalone requests. 

You can check the number of requests you shared using some of the features in Postman like Usage drop-down and through the Dashboard. This section illustrates this procedure. Click the arrow next to upgrade   button on top right corner of your Postman main screen. The following screen appears:

[![usage info](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/UsageInfo1.png)
 
The above screen provides you all the information related to your usage such as shared requests, history, mock usage and so on. 

#### **How Archiving Works**

Postman is always sensitive to the user data and it does a fairly competent job in archiving your collections and requests based on your usage. The reason why Postman archives your collections after you reach your usage limit is to still enable you to share your important collections without bringing your work to a complete standstill. Postman notifies you from time to time as your collections get archived, something like this: 

[![archived message](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ArchiveMsg1.png) 

Let’s say you have four collections HealthCheckAPI, DNS Checker, Link Checker, Lunch Picker, and Github-Support-Issues-Alert with each having a set of requests. When you exceed your limit, Postman first analyzes your collections based on the oldest edited collection and archives the entire collection. Assuming HealthCheckAPI is the oldest edited collection (edited about four days ago) for instance, all requests related to HealthCheckAPI get archived. 

If you are still over the limit, Postman then analyzes the next oldest collection and archives Github-Support-Issues-Alert because it is the next oldest (edited about, let's say, three days ago). In an attempt to allow you to continuously share your work, Postman keeps a tab on the share limit to ensure your work is uninterrupted. Postman indicates the number of your archived collections at the bottom of the sidebar as illustrated in the screen below: 

[![archived message](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ArchiveMsg2.png) 

The above screen displays six archived collections. 

#### **Recovering Your Archived Collections**

As Postman archives your collections, you might want to recover your collections for your reference and use. Postman does a remarkable job securing all of your data and enables you to easily access and retrieve the data. To recover your collections, in the Postman main screen, click archived collections, as illustrated below:

[![archived message](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ArchiveMsg2.png)  

You are now redirected to the Postman web dashboard, as illustrated in the following screen:

[![export data1](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Recovering_ArchivedCol1.png)
 
This screen lists all your archived collections. Click Download Your Data on top right corner to bring up the following screen: 

[![export data2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Recovering_ArchivedCol2.png)

Click Request data archive on top right corner. The following screen appears:

[![request data archive](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Req_Data_Archive1.png) 

Once you request, your request will be acknowledged and in due course your request appears under Requested Archives section from where you can click Download button and get your data, as illustrated here: 

[![Download Data](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Download_data1.png) 

Alternatively, you can also download your archived data directly from the Postman App. To know more about this, refer to [Settings](/docs/v6/postman/launching_postman/settings) section.
 
To download your archived collections, you must choose the second option Download all data including data in workspaces I have joined. The first option in the above screen downloads only your data in personal workspaces. 
