---
title: "Managing Workspaces"
order: 184
page_id: "managing_workspaces"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to collections"
    url: "/docs/postman/collections/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "HotelBeds"
    url: "https://www.postman.com/case-studies/Hotelbeds.pdf"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Variables"
    url: "/docs/postman/variables-and-environments/variables/"
  - type: link
    name: "Intro to scripts"
    url: "/docs/postman/scripts/intro-to-scripts/"

warning: false
---

You can manage workspaces and the Postman elements associated with a workspace, like [collections](/docs/postman/collections/intro-to-collections/), [environments](/docs/postman/variables-and-environments/variables/), [mocks](/docs/postman/mock-servers/intro-to-mock-servers/), [monitors](/docs/postman/monitors/intro-monitors/), and more. You can perform such tasks as editing names and descriptions, viewing details, or creating elements for workspaces.

In the Postman app, click the workspace that displays in the header bar.

[![all workspaces](https://assets.postman.com/postman-docs/test-all-workspaces.png)](https://assets.postman.com/postman-docs/test-all-workspaces.png)

Click "All workspaces" to display the [Workspaces dashboard](https://app.getpostman.com/dashboard) in your web browser.

## Managing personal workspaces

From the [Workspaces dashboard](https://app.getpostman.com/dashboard) under the **Personal** tab, click the **Add to workspace** button to [add collections or environments from another workspace](/docs/postman/workspaces/using-workspaces/) to the selected workspace. You can also perform this action in the team workspace view.

[![add to workspaces](https://assets.postman.com/postman-docs/Workspace_rightclick_menu.png)](https://assets.postman.com/postman-docs/Workspace_rightclick_menu.png)

Click the ellipsis **(...)** to [manage your personal workspaces](/docs/postman/workspaces/using-workspaces/):

* Share personal workspaces with other users
* View details about personal workspaces
* Rename personal workspaces
* Edit descriptions of personal workspaces
* Delete personal workspaces

You can also click the **Create a new workspace** button to [create a new personal or team workspace](/docs/postman/workspaces/creating-workspaces/).

## Managing team workspaces

From the [Workspaces dashboard](https://app.getpostman.com/dashboard), you can manage your team workspaces under the **Team** tab.

[![team workspaces dropdown](https://assets.postman.com/postman-docs/dashboard-team-dropdown.png)](https://assets.postman.com/postman-docs/dashboard-team-dropdown.png)

Click the ellipsis **(...)** to [manage your team workspaces](/docs/postman/workspaces/using-workspaces/):

* View details about team workspaces
* Rename team workspaces
* Edit descriptions of team workspaces
* Manage members of team workspaces
* Leave team workspaces
* Delete team workspaces

## Managing workspace elements

When you click a personal or team workspace, you can see all the elements and activity belonging to the workspace.  

If you click the **Share** button, you can share this collection with another workspace. You can share the collection with as many workspaces as you'd like.

If you click the ellipsis **(...)**, you can remove any element from the workspace, publish collections, fork a copy and even merge your changes.

[![workspace elements](https://assets.postman.com/postman-docs/Workspace_Dashboard_Mainscreen.png)](https://assets.postman.com/postman-docs/Workspace_Dashboard_Mainscreen.png)

### Collections

[Add an existing collection to this workspace](/docs/postman/workspaces/using-workspaces/) or [create a new collection](/docs/postman/collections/creating-collections/). You can share a collection to multiple workspaces.

### Environments

Add an existing environment to this workspace or [create a new environment](/docs/postman/variables-and-environments/variables/#environments-in-postman). You can share an environment to multiple workspaces.

### Monitors

[Create a monitor](/docs/postman/monitors/setting-up-monitor/) to track the performance of your APIs in a workspace. A monitor created within a workspace cannot be shared to other workspaces. If you want to create a monitor with a collection that is shared in multiple workspaces, a new monitor must be created in each of the other workspaces.

### Mocks

[Create a mock server](/docs/postman/mock-servers/setting-up-mock/) to simulate a server response. A mock created within a workspace cannot be shared to other workspaces. If you want to create a mock with a collection that is shared in multiple workspaces, a new mock must be created in each of the other workspaces.

### Integrations

View a list of current integrations or create a new one. Postman has [third party integrations](/docs/integrations/intro-integrations/) available to help you integrate with your existing workflow and tools. Integrations created within a workspace cannot be shared to other workspaces. If you want to create an integration with a collection that is shared in multiple workspaces, a new integration must be created in each of the other workspaces.

### Activity

View a [list of activities](/docs/postman/workspaces/changelog-and-restoring-collections/) for this workspace.
