---
title: "Storage of file / Working Directory in reference for collections"
order: 4
page_id: "storage-of-file-in-reference-for-collections"
warning: false
---
In order to enable users to select files that make API calls with the help of those, run collections that have requests which require file uploads/ file uploads using Newman, Postman has now introduced paths so that all files selected for the request is saved along with the collection. The relative path is saved with respect to the working directory for binary file body and form-data request body.

The working directory is made available as a folder via browse input box in `Settings > General Tab > Request` section. By default `~/Postman/files` are populated in it as a placeholder. The default location will be created the first time and would not be re-created unnecessarily upon update in case this has been deleted.

In Newman, the shell CWD will be used as default working directory and a `-w`, `--working-diroption` is added which accepts a valid path to customize the same.


![Settings](https://support.getpostman.com/hc/article_attachments/360035277554/Reference.png)

This would help loading files that have test data, loading of files in CI to enable workflows using Newman and monitoring of file upload using API endpoints.

If files are loaded from within the working directory it will run smoothly across devices if the same files are stored on the other devices. However, if you wish to run files from outside working directory, then a setting has to be turned on to state the same intent. The opt-in checkbox setting called “Allow reading files outside working directory” is placed right after the “Working Directory” setting.

In Newman, this setting is less consequential since collection runs are controlled. As such the setting is inverted for Newman using the switch `--no-parentfileread`

Irrespective of whether a file is within or outside PWD, a relative path is always stored. If not any then the previous point used.

**Error displays for file reference:**

1) Mini warning ⚠️ icons will be placed wherever the saved file reference does not exist or the setting to read the same from outside PWD is disabled preventing the reading of the same.

2) Postman console shows warning for file reading errors. It would also include errors where a collaborated collection wants to read a file outside PWD while the opt-in setting is turned off.

3) For Newman, it would read from the default PWD and can even be modified using CLI options and file reading errors are propagated by console error. Newman verbose mode may show extended info and errors around file reading.
