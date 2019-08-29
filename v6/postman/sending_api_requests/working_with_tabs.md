---
title: "Working with Tabs"
page_id: "working_with_tabs"
warning: false

---
## Overview

 Tabs in Postman allow you to keep multiple requests open at the same time. You can send a request and receive a response in each tab separately and switch between these tabs without losing data. Postman does not limit the number of tabs you can open.

This section describes the following topics:

* [Types of tabs](#types-of-tabs)
* [Managing tabs](#managing-tabs)
* [Using Multiple tabs](#using-multiple-tabs)
* [Other tab Settings](#other-tab-settings)

## Types of tabs

 Postman categorizes tabs in different states based on your activity. This section outlines a brief overview of each state of the tab. The following are the different types of tabs available:

* [Preview tab](#preview-tab)
* [Busy tab](#busy-tab)
* [Unsaved tab](#unsaved-tab)
* [Conflicted tab](#conflicted-tab)

### Preview tab

A request when opened will be in a preview tab. If you have four requests and open them one after the other, each of these requests opens in the same tab. Because you have not made any attempt to modify data within that tab, Postman displays it as a preview tab. A preview tab is represented in italicized titles. The following screen illustrates this:
[![tabs in preview mode](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tab_Preview1.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tab_Preview1.gif)

Let's take a scenario wherein you've 100 requests that contain critical debugging information. And your aim is to just analyze the information in these requests. In this case, it makes sense to show the information in those requests in a preview tab. It would just not be feasible to open 100 requests in 100 tabs.

### Busy tab

Postman puts a tab in 'Busy' mode as soon as you send the request (a state change though no data is modified). Let's say you have a request open in a preview tab and you hit the send button - the tab changes its state from 'preview' to 'busy' because of the change in the state of the tab (pressing the send button may change the response). Postman now opens other requests in a new preview tab, until there's a state change.

The following screen illustrates this:

[![tabs in busy mode](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tab_Busy.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tab_Busy.gif)

In the above screen, you can view how Postman opens a new preview tab to display information in other requests soon after a preview tab changes its state to busy.

### Unsaved tab

When you modify data in a tab, there are changes to be saved. Postman treats this tab as an unsaved tab which is indicated by an orange dot on top corner. The following screen illustrates a preview tab changing to an *unsaved* tab:

[![tabs in unsaved mode](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tab_Unsaved.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tab_Unsaved.gif)

### Conflicted tab

A tab in Postman enters a 'conflicted' state if the underlying request itself changes while the tab is open. This can happen if you've modified and saved the request in another tab (possibly in another workspace), or if someone else in your team working on the same request saves their changes while your tab is still open.

Let's take the following example where a Post request R1 is present in two workspaces - QA-Panthers and Team-Chargers. This request is updated in one of the workspaces and Postman shows the conflicted state asking you for a resolution.

The following screen illustrates this:

[![tabs in conflict mode](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tab_Conflicted.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tab_Conflicted.gif)

In a conflicted tab, you can either discard or overwrite your changes or save the data as a separate request.  

## Managing tabs

The tabs interface lets you perform many actions. You can open any number of tabs for your requests and can rearrange them in the order you want. Additionally, you can duplicate the current tab, close the current tab, force-close all tabs, and force-close all but current tab. Also, there are keyboard shortcuts (Cmd/Ctrl + /) that let you perform these actions.

This section describes the following topics:

* [Opening and closing tabs](#opening-and-closing-tabs)
* [Switching and rearranging tabs](#switching-and-rearranging-tabs)
* [Restoring tabs](#restoring-tabs)
* [Duplicating tabs](#duplicating-tabs)

### Opening and closing tabs

You can open several tabs at the same time in Postman. Click '+' sign to open a new tab. Alternatively, use Cmd/Ctrl + T. The screen below illustrates opening a new tab:

[![open a tab](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tabs_PlusSign.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tabs_PlusSign.png)

To close a tab, click 'x' on top corner of a tab. Alteratively, use Cmd/Ctrl + W. The screen below illustrates closing a tab:

[![close a tab](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tabs_CloseHover.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tabs_CloseHover.gif)

**Note:** An orange dot on top right corner of a tab indicates there are changes that need to be saved.

Whenever you attempt to close a tab after making changes in it, Postman prompts you to save your changes, as shown below:

[![tabs save](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs_Save.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs_Save.png)

If you don't want to see the 'Do You Want To Save' dialog, select the check box 'Do not ask me again'. You can also control this behavior from the 'Settings' screen using the option 'Always ask when closing unsaved tabs'.

The 'Do You Want To Save' dialog offers the following choices:

* **Don't save:** Closes the tab without saving.
* **Cancel:** Cancels the close action and the tab remains open.
* **Save changes:** Saves your changes and closes the tab.

### Switching and rearranging tabs

You can switch between tabs with a click of a mouse button. You can also rearrange tabs by dragging them along the tab bar, as shown in the screen below:

[![rearrange tabs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RearrangeTabs.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RearrangeTabs.gif)

### Restoring tabs

If you close a tab in Postman, you might want to restore the same tab again. Postman lets you restore all your tabs in the order they were closed.

The following screen illustrates this:

[![recently closed tabs](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RecentlyClosedTabs.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/RecentlyClosedTabs.gif)

**Note:** Postman has a limit of tracking your last 10 tabs. If you exceed this limit, you will not be able to restore the tabs. Let's say you have 15 tabs open and you closed 10 tabs. Postman will be able to restore all the 10 tabs. Let's say you closed one more tab. In this case, Postman will be able to restore the one you recently closed and nine of the other 10 tabs closed earlier.

### Duplicating tabs

A quick way to make a copy of an independent tab is to use the Duplicate Current Tab option. This creates an exact duplicate of the active tab.  

Click ellipsis (...) to duplicate a tab, as illustrated below:

[![tabs menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs4.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Multiple_Tabs4.png)

**Note:** Duplicating a tab and duplicating a request are not one and the same. When you duplicate a request, it adds an additional request to your collection. For example, if you're trying out variations of a request with minor changes (something like change in query parameters), you might want to work with duplicate tabs. If you have significant changes in a request, you might probably want to duplicate a request.

## Using multiple tabs

Postman lets you open multiple tabs in its interface. When your tabs interface contains many tabs, let's say 20 tabs, they may seem to not fit in the tabs' interface. You can access them by scrolling your mouse.  

The following screen illustrates multiple tabs in the Postman:

[![tabs in postman](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tabs_Multiple.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Tabs_Multiple.gif)

Postman allows you to control the way you want to work with multiple tabs. To learn more about this, refer to the next section 'Other Tab Settings'.

## Other tab settings

To provide more user control on tabs, Postman has the following two settings options that you can set based on your preference:

* Always open requests in new tab
* Always ask when closing unsaved tabs

### Always open request in new tab

If you want to open requests in a new tab every time you click a request in the side bar, set the option 'Always open requests in new tab' option to ON.
If you want to open requests in a single tab every time you click a request in the side bar, set the option 'Always open requests in new tab' to OFF in Settings screen. The following screen illustrates when this option is set ot OFF:

[![open req in new tab](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/OpenReqNewTab.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/OpenReqNewTab.gif)

When you set 'Always open requests in new tab' option to OFF, Postman searches for an open preview tab to open the request. It opens in a new preview tab only if it is does not find an already open preview tab. Set this option to ON to let Postman always open a request in a new tab. The above screen illustrates this.

**Note:** Even after setting the 'Always open requests in new tab' option to OFF, you can still open a request in a new tab using the **Open in New Tab** option in the side bar. To do this, right-click your request in the Postman app and select the option **Open in New Tab**.

### Always ask when closing unsaved tabs

If you want Postman to always prompt you to save your data in a tab, set this option to 'ON' in Postman settings.

**Warning:** Turning this setting off might cause you to lose unsaved data.
