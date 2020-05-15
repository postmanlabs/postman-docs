---
title: "Navigating Postman"
order: 4
page_id: "navigating_postman"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://getpostman.com/apps"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to APIs"
    url:  "https://www.youtube.com/watch?v=iFMLyMgCUTs&list=PLM-7VG-sgbtBBnWb2Jc5kufgtWYEmiMAw"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Speeding up workflows with keyboard shortcuts"
    url: "https://blog.postman.com/2017/05/03/speeding-up-workflows-with-keyboard-shortcuts/"
  - type: link
    name: "The Postman status bar puts your favorite features at your fingertips"
    url: "https://blog.postman.com/2017/09/08/the-postman-status-bar-puts-your-favorite-features-at-your-fingertips/"
  - type: link
    name: "Introducing the New Data Editor"
    url: "https://blog.postman.com/2017/02/28/introducing-the-new-data-editor/"
  
  - type: section
    name: "Next Steps"
  - type: link
    name: "Sending your first request"
    url: "/docs/postman/launching-postman/sending-the-first-request"

warning: false

---

Postman provides a multi-window and multi-tab interface for you to work on APIs. This interface design gives you as much space as possible for your APIs.

[![general layout](https://assets.postman.com/postman-docs/59046674.jpg)](https://assets.postman.com/postman-docs/59046674.jpg)

## Sidebar

The Postman sidebar lets you find and manage requests and collections. The sidebar has two main tabs: **[History](/docs/postman/sending-api-requests/history/)** and **[Collections](/docs/postman/collections/creating-collections/)**.

You can drag the right edge to resize the width of the sidebar. You can also minimize the sidebar for smaller screens, and show or hide the sidebar in the Status bar.

## History tab

The Postman app saves every request you send in the [History](/docs/postman/sending-api-requests/history/) tab in the sidebar.

## Collections tab

This tab creates and manages collections from the **Collections** tab in the sidebar.

Learn more about [collections](/docs/postman/collections/creating-collections/) and how they accelerate the speed of your APIs.

## Header toolbar

[![header toolbar](https://assets.postman.com/postman-docs/WS-HeaderToolBar-new+button1.png)](https://assets.postman.com/postman-docs/WS-HeaderToolBar-new+button1.png)

The header toolbar contains these options:

* **New** button: Creates requests, collections, environments, documentation, mock servers, and monitors.
* **Import** button - Imports Postman collections, environments, WADL, Swagger, RAML, or cURL into Postman using files, links, or raw text.
* **Runner** button - Opens the [collection runner.](/docs/postman/collection-runs/starting-a-collection-run/)
* **New window** icon - Opens a new "Tab", "Postman Window" or a "Runner Window".
* **Workspaces** menu - Opens the Workspaces menu where you can view [personal and team Workspaces](/docs/postman/workspaces/intro-to-workspaces/), and create and manage Workspaces.
* **Interceptor/Proxy** icon - Manages proxy or Interceptor settings.
* **IN SYNC status** icon - Updates the status of your Postman account.
* **Settings** icon - Manages Postman app settings and finds other support resources.
* **Notifications** icon - Receives notifications or broadcasts.
* **Heart** - Love Postman? Click on this button to share the love!
* **User** dropdown - Displays current user and provides these options: "Profile", "Account Settings", "Notification Preferences", "Active Sessions", and "Add a new account".

## Console

Two consoles are available in Postman to see what's going on behind the scenes.

* Postman console - Contains a running log of HTTP requests and responses. You can log messages from scripts. For example you could log messages in the console.log.

    **Note:** This feature is only available in Postman's native apps.

* DevTools console - Provides diagnostic information during development. To learn how to access DevTools console logs, see [Debugging and logs](/docs/postman/sending-api-requests/debugging-and-logs/).

## Postman Console

Postman has its own console, which can be used to view all the HTTP requests and responses for the current session, along with any messages the user wants to log.

**Note:** The new console comes with Postman app version 7.10 and later. Older version will **NOT** receive the new console. Once the app is updated to 7.10, it is **NOT** possible to revert.

The console can be opened in a number of ways:

1. By going through the view option from the menu bar.
2. By the Postman Console option in Postman.
3. By keyboard shortcut: Command + Option + c.

[![console button](https://assets.postman.com/postman-docs/console_button_postman.png)](https://assets.postman.com/postman-docs/console_button_postman.png)

### Console header:

The header now contains 3 components:

1. A search bar, making it possible to search for a specific request.
2. Filter option, allowing requests to be filtered on the basis of their message type: log, info, warning, error.
3. Clear button to clear the console screen.

There is now support for 4 types of console messages:

1. **Log:** `console.log(“This is a log.”);`
2. **Info:** `console.info("This is an information message.");`
3. **Warning:** `console.warn("This is a warning message.");`
4. **Error:** `console.error("This is an error message.");`

[![console labels](https://assets.postman.com/postman-docs/console_labels.png)](https://assets.postman.com/postman-docs/console_labels.png)

The console now shows the following four types of information for each request:

1. Network
2. Request headers
3. Response headers
4. Response body

[![console network info](https://assets.postman.com/postman-docs/console_network_info.png)](https://assets.postman.com/postman-docs/console_network_info.png)

### Console footer:

There is now a footer section in the console, comprising of two parts:

1. Console Settings: Console now supports configurable options for two things:
    a. Timestamp: A timestamp for the respective request.
    b. Hide network information: De-clutters the console if network information is not needed.
2. Displays the number of errors and warnings.

[![console settings](https://assets.postman.com/postman-docs/console_settings.png)](https://assets.postman.com/postman-docs/console_settings.png)

Learn more about [troubleshooting with console logs](/docs/postman/sending-api-requests/debugging-and-logs/).

## Status bar

The status bar at the bottom of the Postman interface gives you a convenient way to:

* Show or hide the sidebar.
* Search in collections, environments, and globals.
* Open the Postman [console.](/docs/postman/launching-postman/navigating-postman/#console)
* Select either a single or two pane layout.
* Open the [keyboard shortcuts.](/docs/postman/launching-postman/keyboard-shortcuts/)
* Get help or provide feedback.

[![status bar](https://assets.postman.com/postman-docs/Postman_Main_UI.png)](https://assets.postman.com/postman-docs/Postman_Main_UI.png)

When you click the **Help & Feedback** icon, you can summon a menu that provides access to the latest release notes, [documentation](/docs), [security,](https://www.postman.com/security) [support,](https://www.postman.com/support) and [social media.](https://twitter.com/postmanclient)

[![help icon](https://assets.postman.com/postman-docs/WS-statusbar-helpFeedbackMenu.png)](https://assets.postman.com/postman-docs/WS-statusbar-helpFeedbackMenu.png)

## Tabs and Windows

Postman lets you use multi-tab and multi-window configurations to work on multiple requests or even multiple collections together and simultaneously.

To open a new tab in Postman, press the **+** icon in the builder or use the **CMD/CTRL + T** shortcut. From the menu bar, you can also select "New Tab" from the **File** menu to create a new tab.

When you right click a tab name, the menu allows you to duplicate or close tabs.  If any tab has unsaved changes as you  attempt to close the tab, Postman prompts you to save your changes.

### Busy tabs

Busy tabs ensure you don't lose your current request, even if it isn't in a collection. When you're in a busy tab and open a new request from the sidebar, Postman opens the request in a new tab and doesn't replace or interfere with the request in the previous busy tab.

What makes a tab busy? When you work in a tab it becomes busy. For example, when you receive a response or make a change that's not yet saved (reflected by an orange dot on the tab), the tab is busy.

### Tab and sidebar behavior

By default, Postman assumes you want to work on one collection request in one tab. When you open a request from the sidebar, Postman opens a new tab when an existing tab has unsaved changes. If not, the request takes over the current tab. You can always open a request in a new tab from the sidebar under the **Collections** tab. Right click a request and select "Open in New Tab".

### Tab menu

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

### Moving requests

In the request builder, you can drag and drop tabs to reorder them, open a new request in a new tab, or in a new Postman window. You also can open multiple windows using the **New Window** icon in the header toolbar or the [keyboard shortcut](/docs/postman/launching-postman/keyboard-shortcuts/).

### Mouse actions

To close a tab, right click the tab to display the **Tab** menu, and click the **Close** button. Or click the **X** icon on the right side of the tab to close it.

To force close a tab, press **ALT** and click the **X** icon on the right side of the tab.

## Data editor

Working with large amounts of data can be cumbersome and time consuming. Postman's data editor lets you view and manipulate data in a fast, effective, and elegant manner. Since most users work with data in spreadsheets, Postman leverages those features for the data editor design to make it a familiar experience.

**Note**: The UI images in this section do not reflect the current UI that features the [**New** button.](/docs/postman/launching-postman/newbutton/)

### Visual layout

We've configured the available horizontal and vertical space more effectively to optimize the data you can display up front.

On hover, relevant features display for a specific row to reduce clutter in the interface and help you focus on the most relevant data.

[![data editor layout](https://assets.postman.com/postman-docs/WS-visual-layout.png)](https://assets.postman.com/postman-docs/WS-visual-layout.png)

You can use the [keyboard shortcuts](/docs/postman/launching-postman/keyboard-shortcuts/#data-editor) to navigate the data editor.

### Multiple rows

Drag your mouse to select multiple rows.

[![select multiple rows](https://assets.postman.com/postman-docs/WS-selection-multiple-rows.gif)](https://assets.postman.com/postman-docs/WS-selection-multiple-rows.gif)

### Bulk actions

You can select and copy multiple rows and then paste them in a different places (such as 'params').

[![select and copy multiple rows](https://assets.postman.com/postman-docs/WS-copy-paste-rows.gif)](https://assets.postman.com/postman-docs/WS-copy-paste-rows.gif)

### Front view of information

You can display the information you want to see up front. If you navigate to a place with a large amount of data, the UI element auto expands to show the complete information in the data editor as well as the URL bar.

[![expand to show info](https://assets.postman.com/postman-docs/WS-front-view.gif)](https://assets.postman.com/postman-docs/WS-front-view.gif)

### Resizing columns

You can change the width of the key and value columns when you drag the boundary on the right side of the ‘key’ column header.

[![adjust column width](https://assets.postman.com/postman-docs/WS-resize-columns.gif)](https://assets.postman.com/postman-docs/WS-resize-columns.gif)

### Multiline support

The data editor supports sending multiline values. Press 'Enter' in a key or value field to expand it and move the cursor to a new line.

[![sending multiline](https://assets.postman.com/postman-docs/WS-multiline-support.gif)](https://assets.postman.com/postman-docs/WS-multiline-support.gif)
