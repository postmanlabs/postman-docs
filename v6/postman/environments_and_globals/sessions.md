---
title: "Sessions"
page_id: "Sessions"
warning: false
---

## Sessions

 A Session in Postman is a transient layer that holds your variable values related to your current working instance by allowing you to work with certain variables that remain local to your individual scope. Sessions resolves few complications in relation to collaboration and teamwork due to sensitivity of data surrounding the variables.

Sessions in Postman brings a host of capabilities. Some of them are outlined below:

* You can change the values of variables in the Session the way you want without worrying about the sensitivity of the data as Postman by default does not sync the current values (values in the session) to the server
* You can change the initial value and the current value of a variable separately. Changing the initial value causes a change in the definition of the variable itself so a safer bet would be to tinker with the current value. You can always override/persist your current values of variables whenever necessary.
* You can participate in a collaborative team workspace working with multiple people within the same collection/environment with your own values, IDs, passwords, access/secure tokens, and other private credentials.
* Sessions offers developers a secure interface with tools, features and information they need to explore, test, and consume API information

## Using Sessions

As discussed, a Session is a local instance to a user in a workspace context wherein you can easily modify variables and Postman will not sync data to the servers keeping it strictly relevant to a local context. A Session in Postman holds the values of variables – environment, global, and collection. Simply put, Sessions comes in handy whenever a CRUD operation is involved. Sessions feature influences the following three aspects of Postman:

* Collection Variables
* Environment Variables
* Global Variables

The next section outlines how you can assign current values to these variables using the Postman UI and get to your task while working with Collection variables, Environment variables and Global variables. You can assign a current value to your variables in the following ways:

* Editing Collection Variables
* Editing Environment and Global Variables

### Editing Collection Variables

To assign a current value, click ellipsis (…) in the sidebar and select Edit to go to the Edit Collection screen as illustrated below. If you are not keen on working  with a current value, you can leave the current value field empty and the old behavior of Postman will take precedence wherein your initial value would be treated as your current value.

Click Variables in the Edit Collection screen to bring up the following screen:

[![edit collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Edit_Collection_CurVal1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Edit_Collection_CurVal1.png)

The above interface enables you to specify a current value that is relevant to your local context only. However, Postman provides you an option to replace your initial value with the current value. As current values are never synced to the Postman’s servers, shared data like your ‘initial value’ remains always intact unless you choose to explicitly sync using the Persist option.

**Note:** Current values are not synced to the servers, which means it does not affect the environment of other collaborators. In contrast, initial values are synced to the servers and are effective in collaborating with others. You can also read [Session FAQs](https://blog.getpostman.com/2018/08/09/sessions-faq/) for more information.

Let’s add another four variables Token2, Token3, Token4 and Token5, assign some current values to understand the behavior of variables and how they work in the overall Postman context. The variables and their assigned values now look like this:

[![edit collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Edit_Collection_CurVal2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Edit_Collection_CurVal2.png)

As you can see, the above interface contains five variables in total, with each having its current value. To persist your current value with the initial value, all you need to do is click Persist All. Clicking Persist All in the above screen results in populating the initial values with the current values for Token1, Token3, and Token5, as illustrated in the below screen.

[![edit collections](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Edit_Collection_CurVal3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Edit_Collection_CurVal3.png)

You can see Token1, Token3, and Token5 populated with their current values in the Initial value field. You can also see Token2 and Token4 are disabled variables for which the Initial value field still has no value. It is because you will not be able to persist the current values of disabled variables even with Persist All option.

[![edit collection2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Edit_Collection_CurVal3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Edit_Collection_CurVal3.png)

To persist your current value with the initial value for the disabled variables, point your cursor to the ellipsis (…) and select Persist or Reset based on your need, as illustrated in the above screen. To delete the entire row, just click 'x'. Reset All resets all the values.

**Note**: The Auto-Persist option does not work in the above context. For more information on Auto-Persist option, refer to the section [Auto persisting variable values](/docs/postman/launching_postman/settings/)

### Editing Environment and Global Variables

The Sessions feature also enables you to assign current values to your variables – both environment and global. This section explains how you can assign current values to these variables.

* Edit Environment Variables
* Edit Global Variables

### Editing Environment Variables

You can assign a current value to the environment variables by

* Using Quick Editing option
* Editing the Manage Environments screen

#### Using Quick Editing Option

To  quickly edit the environment variable, ensure your environment is selected in the following drop-down.

Click Quicklook to bring up the following screen:

[![edit environment](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Edit_Env_Var5.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Edit_Env_Var5.png)

Point your cursor to the current value of Token1 to enable the edit icon as shown below:

[![edit icon](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Edit_Env_Var3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Edit_Env_Var3.png)

Clicking edit icon will make the current value field editable as follows:

[![edit icon](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Edit_Env_Var4.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Edit_Env_Var4.png)

Enter your current value.

### Editing Manage Environment screen

Select the corresponding environment in the Postman main screen and click Quicklook icon. The following screen appears:

[![edit environment](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Edit_Env_Var5.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Edit_Env_Var5.png)

Click  button on top right corner (the  button at the bottom belongs to Global variables) to bring up the Manage Environment screen:

[![manage environment](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Manage_Env1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Manage_Env1.png)

Click the Current Value field and assign a value.

### Editing Global Variables

Click the gear icon in the Postman main screen to go to the screen below:

[![manage environment](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Manage_Env2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Manage_Env2.png)

Click Globals button to bring up the Manage Environments screen as illustrated below.

[![manage environment](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Manage_Env3.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Manage_Env3.png)

Go ahead and assign a current value.
