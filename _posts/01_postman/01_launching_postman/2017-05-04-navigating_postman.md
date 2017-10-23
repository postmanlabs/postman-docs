---
categories:
  - "postman"
  - "launching_postman"
title: "Navigating Postman"
page_id: "navigating_postman"
warning: false

---

Postman provides a multi-window and multi-tab interface for you to work on APIs. Postman strives to be clean and flexible to your needs. It gives you as much space as possible for your APIs. Navigating through the interface is easy. See the graphic below to see how everything is organized.

[![general layout](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59046674.jpg)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59046674.jpg)

### Sidebar

The Postman sidebar lets you find and manage requests and collections. The sidebar is divided into two main tabs, for **[History](/docs/postman/sending_api_requests/history)** and **[Collections](/docs/postman/collections/creating_collections)**.

You can drag the right edge of the sidebar to resize the width.  You can also mimimize the sidebar for smaller screens. Click the sidebar icon at the bottom of the screen to hide or show the sidebar.

[![sidebar toggle](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/statusBar_1019.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/statusBar_1019.png)

### History tab

Every request that you send inside the Postman app is saved in the **History** tab within the sidebar. Learn more about harnessing the power of your [history](/docs/postman/sending_api_requests/history).

### Collections tab

Create and manage collections from the **Collections** tab in the sidebar. Learn more about [collections](/docs/postman/collections/creating_collections) and how they help bring your APIs to warp speed.

### Header toolbar

[![header toolbar](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/insync_postmanAcct.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/insync_postmanAcct.png)

The topmost toolbar in Postman covers the following options:

   
   *  **New button**: Create requests, collections, environments, documentation, mock servers, and monitors.
   *  **Import button** - Import Postman collections, environments, WADL, Swagger, RAML, or cURL into Postman using files, links or raw text 
 *    **Runner button** - Open the collection runner.
 *    New window icon - Open a new Tab, Postman Window, or Runner Window.
 *    **Builder and Team Library tabs** - Switch context between the request builder and team library view.
 *    Interceptor/Proxy icon - Manage proxy or Interceptor settings
 *    IN SYNC status icon - See and update the status of your Postman account 
 *   Public API Library - Displays the Public API network.
 *   Setting icon - Enables you to manage Postman settings, and access release notes, documentation, security policies and standards, support page, and Postman Twitter page.
 *   Notifications icon - Receive notifications or broadcasts.
 *   Heart - Love Postman? Click on this button to share the love!
 *   User dropdown - Manage collection links and your profile or log in to, or out of, your Postman account.


### Builder

Postman gives you a tabbed layout for sending and managing API requests in the builder. The top half is the request builder and the bottom half is the response viewer.  

   *   **Cookies** - The **MANAGE COOKIES** modal is accessed by the **Cookies** link on the far right beneath the **Save** button. This feature lets you manage cookies associated with the request. Learn more about [working with cookies](/docs/postman/sending_api_requests/cookies).
   *   **Code** - The **GENERATE CODE SNIPPETS** modal is accessed by the **Code** link on the far right beneath the **Save** button. This feature lets you generate code snippets associated with the request in more than 20 languages.

### Console

To see what's going behind the scenes, there are two consoles available in Postman. Learn more about [troubleshooting with console logs](/docs/postman/sending_api_requests/debugging_and_logs).

   *   Postman console - Contains a running log of HTTP requests and responses. Log messages that come out of scripts (like in console.log). This feature is only available in Postman's native apps.
   *   DevTools console - Where you can log diagnostic information during development.

### Menu bar

The Postman application menu bar provides access to additional features. Note that there are some key differences between the menu bar for Postman's native apps and Postman's Chrome app.

**Postman native app**:  displays more menu options making it easier to access specific Postman features.

[![native app menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/menu_options_nativeApp.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/menu_options_nativeApp.png)

**Postman Chrome app**:  displays a few menu options restricted by the Chrome standard .

[![chrome app menu](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/MenuOptions_chromeApps.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/MenuOptions_chromeApps.png)

### Status bar

The status bar at the bottom of the Postman interface gives you a convenient way to open the [console](/docs/postman/launching_postman/navigating_postman#console), select either a single or two pane layout, open the [keyboard shortcuts](/docs/postman/launching_postman/navigating_postman#keyboard-shortcuts), and get Postman Help. 

[![status bar](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/statusBar.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/statusBar.png)

When you click the Help & Feedback icon, you can summon a menu that provides access to the latest release notes, [documentation](/docs), [security](https://www.getpostman.com/security){:target="_blank"}, [support](https://www.getpostman.com/support){:target="_blank"}, and [social media](https://twitter.com/postmanclient){:target="_blank"}.

[![help icon](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/helpAndFeedback.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/helpAndFeedback.png)

### Tabs and Windows

Postman lets you use multi-tab and multi-window configurations. This allows you to work on multiple requests or even multiple collections together and simultaneously.

To open a new tab in Postman press the **+** icon in the builder or use the **CMD/CTRL + T** shortcut. From the menu bar, you can also select "New Tab" from the **File** menu to create a new tab.

By right clicking on a tab name, the menu allows you to duplicate or close tabs.  If any tab has unsaved changes and you are attempting to close the tab, Postman will prompt you to save your changes.

##### **Busy tabs**

The idea behind busy tabs is to make sure people don't lose the request they've been working on, even if it isn't in a collection. When you're on a busy tab, opening a new request from the sidebar will open the request in a new tab. It does not replace or interfere with the request in the previous busy tab.

What makes a tab busy? Working on a tab moves the tab into a busy state. For example, receiving a response or making changes that are not yet saved (reflected by an orange dot on the tab) will all result in making a tab busy. 

##### **Tab and sidebar behavior**

By default, Postman assumes that you want to work on one collection request in one tab. When you open a request from the sidebar, Postman will open a new tab if an existing tab has unsaved changes, otherwise the request takes over the current tab. You can always open a request in a new tab. From the sidebar under the **Collections** tab, right click a request and select "Open in New Tab".

##### **Moving requests**

Within the request builder, drag and drop tabs to reorder them as you see fit. Open a new request in a new tab, or in a new Postman window. Open multiple windows using the **New Window** icon in the header toolbar or the keyboard shortcut.

### Keyboard Shortcuts

Keyboard usability is high on the priority list for any dev tool. For most developers, it’s a more efficient input method, requiring minimum movement and effort compared to a mouse or other pointing device. It also saves time, and for repetitive or well-frequented tasks, this can bring about a huge improvement in speed over the long run.

When we approached assigning keyboard shortcuts in Postman, we broadly categorized them into three buckets based on their function: navigation, manipulation and global. Navigational shortcuts help you move around the interface, manipulation shortcuts allow you to manipulate the current selection and global shortcuts can be accessed from anywhere.

##### **Navigational Shortcuts**

We want to make it easier for a user to navigate quickly between elements. Let’s take the simple example of opening and sending a series of saved requests. Without a shortcut, a user selecting a request in the sidebar would use their pointer every time to open it in a tab. With the **CMD/CTRL + ALT + 1** shortcut, you can now focus the sidebar from wherever you are in interface. You can then navigate to the desired request using the arrow keys. Combine this with **CMD/CTRL + Enter** to send a number of requests in the matter of a few seconds. 

##### **Manipulation Shortcuts**

Manipulation shortcuts allow you to quickly work on your current selection and perform actions such as edit, delete and duplicate. Combined with navigational shortcuts, this makes creating and organizing collections in your sidebar a breeze. These shortcuts can also be used in other list views such as our new data editor.

##### **Global Shortcuts**

Global shortcuts are used for important actions so that they can be accessed irrespective of the element in focus. Actions on your selected tab, like Save (**CMD/CTRL + S**), Save As (**CMD/CTRL + Shift + S**), and Send Request (**CMD/CTRL + Enter**) all follow this pattern. Global shortcuts can also be used to perform UI actions like toggling the sidebar **(CMD/CTRL + \)**, Jump to URL (**CMD/CTRL + L**), and Open Console (**CMD/CTRL + ALT + C**).

##### **View keyboard shortcuts for your OS**

Different operating systems will have different shortcuts.  You can always view a complete list of your operating system's shortcuts under the **Shortcuts** tab in the **SETTINGS** modal.

[![shortcuts in settings](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59179733.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59179733.png)

##### **Reference for all shortcuts**

| TABS  |   macOS   | Windows / Linux shortcuts |
| ---   |   ---     | ---   |
| Open New Tab   |   ⌘ T     | Ctrl + T   |
| Close Tab   |   ⌘ W     | Ctrl + W   |
| Switch To Next Tab   |   ⇧ ⌘ ]     | Ctrl + Shift + ]   |
| Switch To Previous Tab   |   ⇧ ⌘ [     | Ctrl + Shift + [   |
| Switch To Tab at Position   |   ⌘ 1 through ⌘ 8     | Ctrl + 1 through Ctrl + 8   |
| Switch To Last Tab   |   ⌘ 9     | Ctrl + 9   |
| Open Request from Sidebar in New Tab   |   ⌥ ⌘ (click)     | Ctrl + Shift + (click)   |
| **REQUEST**   |        |    |
| Request URL   |   ⌘ L     | Ctrl + L   |
| Save Request   |   ⌘ S     | Ctrl + S   |
| Save Request As   |   ⇧ ⌘ S     | Ctrl + Shift + S   |
| Send Request   |   ⌘ ↵     | Ctrl + Enter   |
| Send And Download Request   |   ⌥ ⌘ ↵     | Ctrl + Alt + Enter   |
| Scroll To Request   |   ⌥ ⌘ ↑     | Ctrl + Alt + ↑   |
| Scroll To Response   |   ⌥ ⌘ ↓     | Ctrl + Alt + ↓   |
| Beautify raw Request body   |   ⌘ B     | Ctrl + B   |
| **SIDEBAR**   |        |    |
| Search Sidebar   |   ⌘ F     | Ctrl + F   |
| Toggle Sidebar   |   ⌘ \     | Ctrl + \   |
| Next Item   |   ↓     | ↓   |
| Previous Item   |   ↑     | ↑   |
| Expand Item   |   →     | →   |
| Collapse Item   |   ←     | ←   |
| Select Item   |   ↵     | Enter   |
| Rename Item   |   ⌘ E     | Ctrl + E   |
| Group Items   |   ⌘ G     | Ctrl + G   |
| Cut Item   |   ⌘ X     | Ctrl + X   |
| Copy Item   |   ⌘ C     | Ctrl + C   |
| Paste Item   |   ⌘ V     | Ctrl + V   |
| Duplicate Item   |   ⌘ D     | Ctrl + D   |
| Delete Item   |   ⌫     | Del   |
| **INTERFACE**   |        |    |
| Zoom In   |   ⌘ +     | Ctrl + +   |
| Zoom Out   |   ⌘ -     | Ctrl + -   |
| Reset Zoom   |   ⌘ 0     | Ctrl + 0   |
| Toggle Two-Pane View   |   ⌥ ⌘ V     | Ctrl + Alt + V   |
| Switch To Sidebar   |   ⌥ ⌘ 1     | Ctrl + Alt + 1   |
| Switch To Builder   |   ⌥ ⌘ 2     | Ctrl + Alt + 2   |
| **WINDOWS AND MODALS**   |        |    |
| New Requester Window   |   ⌘ N     | Ctrl + N   |
| New Runner Window   |   ⇧ ⌘ N     | Ctrl + Shift + N   |
| New Console Window   |   ⌥ ⌘ C     | Ctrl + Alt + C   |
| Import   |   ⌘ O     | Ctrl + O   |
| Manage Environments   |   ⌥ ⌘ E     | Ctrl + Alt + E   |
| Settings   |   ⌘ ,     | Ctrl + ,   |
| Submit Modal   |   ⌘ ↵     | Ctrl + Enter   |
| Open Shortcut Help   |   ⌘ /     | Ctrl + /   |


### Data editor

Working with large amounts of data can be cumbersome and time consuming. Postman's data editor lets you view and manipulate data in a fast, effective, and elegant manner.

Spreadsheet features are familiar to most people working with data, so we used them as inspiration for the design of the data editor.  

##### **Visual layout**

We've configured the available horizontal and vertical space more effectively to optimize the data that can be displayed up front.

Relevant features will display for a specific row on hover. This reduces clutter in the interface and helps the user focus on the most relevant data.

[![data editor layout](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162701.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162701.png)

##### **Select multiple rows by simply dragging your mouse**

[![select multiple rows](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162713.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162713.gif)

##### **Keyboard shortcuts for the data editor**

| Data editor  |   macOS   | Windows / Linux shortcuts |
| ---   |   ---     | ---   |
| Navigation   |   arrow keys (↑,→,↓,←) + Tab     | arrow keys (↑,→,↓,←) + Tab   |
| Duplicate row  |   ⌘ D     | Ctrl + D   |
| Select specific rows  |   ⌘ (click)     | Ctrl + (click)   |
| Select previous rows   |   ⇧ ↑     | Shift + ↑   |
| Select next rows   |   ⇧ ↓   | Shift + ↓  |
| Select current row  |   ⇧ →     | Shift + →   |
| Select current row  |   ⇧ ←     | Shift + ←   |
| Move row(s) up   |   ⌘ ⇧ ↑     | Ctrl + Shift + ↑   |
| Move row(s) down   |   ⌘ ⇧ ↓     | Ctrl + Shift + ↓   |
| Copy - can multiselect and copy rows   |   ⌘ C    | Ctrl + C   |
| Cut - can multiselect and cut rows   |   ⌘ X    | Ctrl + X   |
| Paste  |   ⌘ V     | Ctrl + V  |
| Delete - can multiselect and delete rows   |   ⌫     | Del  |
| Deselect rows  |   ⎋    | Esc  |

[![using shortcuts gif](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162742.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162742.gif)

##### **Support for bulk actions**

You can select and copy multiple rows. Then go ahead and paste them in a different place (e.g. params) and check out what happens for yourself!

[![select and copy multiple rows](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162757.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162757.gif)  

##### **View information up front**

We want to display the information you want to see up front. If you navigate to a place with a large amount of data, the UI element auto expands to show the complete information. This is implemented in the data editor as well as the URL bar.  

[![expand to show info](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162771.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162771.gif)

##### **Ability to resize columns**

You can change the width of the key and value columns by dragging the boundary on the right side of the ‘key’ column header.

[![adjust column width](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162787.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162787.gif)

##### **Multiline support**

The data editor supports sending multiline values. Pressing 'Enter' in a key or value field expands it and takes the cursor to a new line.

[![sending multiline](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162801.gif)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/59162801.gif)
