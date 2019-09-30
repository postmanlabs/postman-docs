---
title: "Navigating Postman"
page_id: "navigating_postman"
warning: false

---

Postman provides a multi-window and multi-tab interface for you to work on APIs. 

This interface design gives you as much space as possible for your APIs. 

[![general layout](https://assets.postman.com/postman-docs/59046674.jpg)](https://assets.postman.com/postman-docs/59046674.jpg)

### Sidebar

The Postman sidebar lets you find and manage requests and collections. The sidebar has two main tabs: **[History](/docs/postman/sending_api_requests/history)** and **[Collections](/docs/postman/collections/creating_collections/)**.

You can drag the right edge to resize the width of the sidebar. You can also minimize the sidebar for smaller screens, and show or hide the sidebar in the Status bar.

### History tab

The Postman app saves every request you send in the [History](/docs/postman/sending_api_requests/history) tab in the sidebar. 

### Collections tab

This tab creates and manages collections from the **Collections** tab in the sidebar. 

Learn more about [collections](/docs/postman/collections/creating_collections/) and how they accelerate the speed of your APIs.

### Header toolbar

[![header toolbar](https://assets.postman.com/postman-docs/WS-HeaderToolBar-new+button1.png)](https://assets.postman.com/postman-docs/WS-HeaderToolBar-new+button1.png)

The header toolbar contains these options:
* **New** button: Creates requests, collections, environments, documentation, mock servers, and monitors.
*  **Import** button - Imports Postman collections, environments, WADL, Swagger, RAML, or cURL into Postman using files, links, or raw text.
*   **Runner** button - Opens the [collection runner.](/docs/postman/collection_runs/starting_a_collection_run/)
*   **New window** icon - Opens a new "Tab", "Postman Window" or a "Runner Window".
*   **Workspaces** menu - Opens the Workspaces menu where you can view [personal and team Workspaces](/docs/postman/workspaces/intro_to_workspaces), and create and manage Workspaces.
*   **Interceptor/Proxy** icon - Manages proxy or Interceptor settings.
*   **IN SYNC status** icon - Updates the status of your Postman account.
*   **Public API Library** - Displays the Public API network.
*   **Settings** icon - Manages Postman app settings and finds other support resources.
*   **Notifications** icon - Receives notifications or broadcasts.
*   **Heart** - Love Postman? Click on this button to share the love!
*   **User** dropdown - Displays current user and provides these options: "Profile", "Account Settings", "Notification Preferences", "Active Sessions", and "Add a new account".

### Console

Two consoles are available in Postman to see what's going on behind the scenes.

   *   Postman console - Contains a running log of HTTP requests and responses. You can log messages from scripts. For example you could log messages in the console.log. <br>**Note**: This feature is only available in Postman's native apps.
   *   DevTools console - Provides diagnostic information during development. To learn how to access DevTools console logs, see [Debugging and logs](/docs/postman/sending_api_requests/debugging_and_logs/).

Learn more about [troubleshooting with console logs](/docs/postman/sending_api_requests/debugging_and_logs/).

### Status bar

The status bar at the bottom of the Postman interface gives you a convenient way to:
* Show or hide the sidebar.
* Search in collections, environments, and globals.
* Open the Postman [console.](https://www.getpostman.com/docs/postman/launching_postman/navigating_postman#console)
* Select either a single or two pane layout.
* Open the keyboard [shortcuts.](https://www.getpostman.com/docs/postman/launching_postman/navigating_postman#keyboard-shortcuts)
* Get help or provide feedback.

[![status bar](https://assets.postman.com/postman-docs/WS-status-bar.png)](https://assets.postman.com/postman-docs/WS-status-bar.png)

When you click the **Help & Feedback** icon, you can summon a menu that provides access to the latest release notes, [documentation](/docs), [security,](https://www.getpostman.com/security) [support,](https://www.getpostman.com/support) and [social media.](https://twitter.com/postmanclient)

[![help icon](https://assets.postman.com/postman-docs/WS-statusbar-helpFeedbackMenu.png)](https://assets.postman.com/postman-docs/WS-statusbar-helpFeedbackMenu.png)

### Tabs and Windows

Postman lets you use multi-tab and multi-window configurations to work on multiple requests or even multiple collections together and simultaneously.

To open a new tab in Postman, press the **+** icon in the builder or use the **CMD/CTRL + T** shortcut. From the menu bar, you can also select "New Tab" from the **File** menu to create a new tab.

When you right click a tab name, the menu allows you to duplicate or close tabs.  If any tab has unsaved changes as you  attempt to close the tab, Postman prompts you to save your changes.

**Busy tabs**

Busy tabs ensure you don't lose your current request, even if it isn't in a collection. When you're in a busy tab and open a new request from the sidebar, Postman opens the request in a new tab and doesn't replace or interfere with the request in the previous busy tab.

What makes a tab busy? When you work in a tab it becomes busy. For example, when you receive a response or make a change that's not yet saved (reflected by an orange dot on the tab), the tab is busy.

**Tab and sidebar behavior**

By default, Postman assumes you want to work on one collection request in one tab. When you open a request from the sidebar, Postman opens a new tab when an existing tab has unsaved changes. If not, the request takes over the current tab. You can always open a request in a new tab from the sidebar under the **Collections** tab. Right click a request and select "Open in New Tab".

**Tab menu**

Postman offers several tab actions to help you manage your work.

[![help icon](https://assets.postman.com/postman-docs/WS-Tab-menu.png)](https://assets.postman.com/postman-docs/WS-Tab-menu.png)

To access the **Tab** menu, click the three dots on the right side of a tab. A dropdown menu appears with options to manage your tabs.

* Duplicate Current Tab
* Close Current Tab
* Force Close Current Tab
* Close All but Current Tab
* Close All Tabs
* Force Close All Tabs

When you "Force Close Current Tab" or "Force Close All Tabs", the tab closes immediately without prompting you to save your work in the tab.

When you "Close Current Tab", "Close All but Current Tab", or "Close All Tabs", a dialogue box appears with an option to save your work.

[![help icon](https://assets.postman.com/postman-docs/Tab_save4.jpeg)](https://assets.postman.com/postman-docs/Tab_save4.jpeg)

**Moving requests**

In the request builder, you can drag and drop tabs to reorder them, open a new request in a new tab, or in a new Postman window. You also can open multiple windows using the **New Window** icon in the header toolbar or the keyboard shortcut.

### Keyboard Shortcuts

Keyboard usability is a high priority for any development tool. For most developers, keyboard shortcuts are a more efficient input method that requires minimum movement and effort as compared to navigating with a cursor. For repetitive or frequent tasks, keyboard shortcuts improve speed over the long run.

Postman categorizes keyboard shortcuts as navigation, manipulation, and global.
* Navigational shortcuts let you move around the interface.
* Manipulation shortcuts let you manipulate the current selection.
* Global shortcuts let you access from anywhere.

**Navigational Shortcuts**

Postman designs navigational shortcuts to help you navigate quickly between elements. For example, suppose you want to open and send a series of saved requests without a keyboard shortcut. You would have to select a request in the sidebar with a pointer each time to open it in the tab.

With a keyboard shortcut, such as **CMD/CTRL + ALT + 1**, you can focus the sidebar from wherever you are in interface. You can then navigate to the request you want with the arrow keys. And if you combine the **CMD/CTRL + ALT + 1** shortcut with the **CMD/CTRL + Enter** shortcut, you can send a number of requests quickly.

**Manipulation Shortcuts**

Manipulation shortcuts allow you to quickly work on your current selection and perform actions such as edit, delete, and duplicate. You can combine navigational and manipulation shortcuts to create and organize collections in your sidebar easily. You can also use these shortcuts in other list views, such as the data editor.

**Global Shortcuts**

You can use global shortcuts to perform actions regardless of the element in focus. Examples of such global actions include "Save" (**CMD/CTRL + S**), "Save As" (**CMD/CTRL + Shift + S**), and "Send Request" (**CMD/CTRL + Enter**).

You can also use global shortcuts to perform user interface actions such as "Toggle to Sidebar" (**CMD/CTRL +** ),
"Jump to URL" (**CMD/CTRL + L**), and "Open Console" (**CMD/CTRL + ALT + C**).

**View keyboard shortcuts for your OS**

Different operating systems have different shortcuts.  

You can always view a complete list of your operating system's shortcuts when you click the **Keyboard Shortcuts** icon in the **Status bar**.

[![help icon](https://assets.postman.com/postman-docs/Keyboard_shortcuts.png)](https://assets.postman.com/postman-docs/Keyboard_shortcuts.png)

**Reference for all shortcuts**

| TABS  |   macOS   | Windows / Linux shortcuts |
| ---   |   ---     | ---   |
| Open New Tab   |   ⌘ T     | Ctrl + T   |
| Close Tab   |   ⌘ W     | Ctrl + W   |
| Force Close Tab   |  Cmd + Alt + W     | Ctrl + Alt + W   |
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


**Mouse actions**

To close a tab, right click the tab to display the **Tab** menu, and click the **Close** button. Or click the **X** icon on the right side of the tab to close it.

To force close a tab, press **ALT** and click the **X** icon on the right side of the tab.


### Data editor

Working with large amounts of data can be cumbersome and time consuming. Postman's data editor lets you view and manipulate data in a fast, effective, and elegant manner. Since most users work with data in spreadsheets, we leveraged those features for the data editor design to make it a familiar experience. 

**Note**: The UI images in this section do not reflect the current UI that features the [**New** button.](/docs/postman/launching_postman/newbutton/)

**Visual layout**

We've configured the available horizontal and vertical space more effectively to optimize the data you can display up front.

On hover, relevant features display for a specific row to reduce clutter in the interface and help you focus on the most relevant data.

[![data editor layout](https://assets.postman.com/postman-docs/WS-visual-layout.png)](https://assets.postman.com/postman-docs/WS-visual-layout.png)

**Mulitple rows**

Drag your mouse to select multiple rows.

[![select multiple rows](https://assets.postman.com/postman-docs/WS-selection-multiple-rows.gif)](https://assets.postman.com/postman-docs/WS-selection-multiple-rows.gif)

**Keyboard shortcuts for the data editor**

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

[![using shortcuts gif](https://assets.postman.com/postman-docs/59162742.gif)](https://assets.postman.com/postman-docs/59162742.gif)

**Bulk actions**

You can select and copy multiple rows and then paste them in a different places (such as 'params').

[![select and copy multiple rows](https://assets.postman.com/postman-docs/WS-copy-paste-rows.gif)](https://assets.postman.com/postman-docs/WS-copy-paste-rows.gif)  

**Front view of information**

You can display the information you want to see up front. If you navigate to a place with a large amount of data, the UI element auto expands to show the complete information in the data editor as well as the URL bar.  

[![expand to show info](https://assets.postman.com/postman-docs/WS-front-view.gif)](https://assets.postman.com/postman-docs/WS-front-view.gif)

**Resizing columns**

You can change the width of the key and value columns when you drag the boundary on the right side of the ‘key’ column header.

[![adjust column width](https://assets.postman.com/postman-docs/WS-resize-columns.gif)](https://assets.postman.com/postman-docs/WS-resize-columns.gif)

**Multiline support**

The data editor supports sending multiline values. Press 'Enter' in a key or value field to expand it and move the cursor to a new line.

[![sending multiline](https://assets.postman.com/postman-docs/WS-multiline-support.gif)](https://assets.postman.com/postman-docs/WS-multiline-support.gif)
