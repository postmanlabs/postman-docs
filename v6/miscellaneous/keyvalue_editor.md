---

title: "Key Value Editor"
page_id: "keyvalue_editor"
tags: 
  - "app"
warning: false
---

The Key-Value Editor is a UI element that is used across Postman to simplify working with key-value pairs. The following parts of Postman use this plugin:

* Environment value editor
* Global value editor
* URL parameters
* URL path variables
* Request headers
* Header presets
* Form-data editor
* URL-encoded data editor

Key-Value editors may have the following options:

#### Adding a new row

Clicking on the last row will automatically add a placeholder for a new row.
![](https://www.getpostman.com/img/v1/docs/kveditor/add-row.png)

---

#### Re-ordering existing rows

Hovering over a row will show the reorder icon to the right, which you can use to drag-and-drop each row to the correct location.
![](https://www.getpostman.com/img/v1/docs/kveditor/move-row.png)

---

#### Enabling/disabling rows

While hovering over a row, you can use the checkbox to enable/disable the inclusion of the selected row. Due to a limitation of the app, this feature is not available for URL parameters.
![](https://www.getpostman.com/img/v1/docs/kveditor/disable-row.png)

---

#### Bulk edit

If you want to paste values from your clipboard, click the bulk-edit icon at the bottom-right of the key-value editor
![](https://www.getpostman.com/img/v1/docs/kveditor/bulk-edit.png)  
Use this format for every row:
`Key: Value`  
  
For editors that have the disable option, prepend the row with "\\\\" if you want to add the row, but keep it disabled:
`\\Key: Value`
