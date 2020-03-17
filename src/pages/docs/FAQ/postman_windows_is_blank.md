---
title: "Postman window is blank"
order: 360026088854
page_id: "postman_windows_is_blank"
warning: false
---

### Postman window is blank

**Issue**
---------

For Windows computers with certain GPUs, Postman may display a **blank/black window** when opened, and elements in the app may not be rendering correctly or at all.

![Screen_Shot_2019-07-08_at_4.36.22_PM.png](https://support.getpostman.com/hc/article_attachments/360040688194/Screen_Shot_2019-07-08_at_4.36.22_PM.png)

This issue may be related to a known issue where Postman doesn’t launch with certain GPUs. A workaround for this issue involves [disabling your GPU](https://github.com/postmanlabs/postman-app-support/issues/4594#issuecomment-391601621). Disabling GPU rendering for Postman generally allows the app to run successfully. To do so, you'll need to add a Windows environment variable: `POSTMAN_DISABLE_GPU`, with the value: `true`

**Instructions:**

1\. Open:  `Advanced system settings`

[![step 1](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.1.png)

2\. Navigate to:  `Environment Variables`

[![step 2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.12.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.12.png)

3\. Add a new system variable with the name: `POSTMAN_DISABLE_GPU`, and the value: `true`.

[![step 3](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.1+(1).png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.1+(1).png)

4\. Click OK to save

If the issue persists and you see any error logs while the app launches, please send us those logs to investigate further at [help@getpostman.com](mailto:help@getpostman.com)
