---
title: "I'm not able to update my Mac app."
order: 3
page_id: "I'm not able to update my Mac app."
warning: false
---

If your app lives in a directory that your user doesn't have seamless write access to, you might face a problem while updating your app. The updater downloads the new version of Postman and replaces the Postman.app executable during the restart process. If the updater isn't able to write to the folder, you'll get an error while updating.

To resolve this, you can move the Postman.app bundle to your user directory's applications folder: `~/Applications`, instead of your system-level folder `/Applications`.

Refer to this Github thread for more - [https://github.com/postmanlabs/postman-app-support/issues/2489](https://github.com/postmanlabs/postman-app-support/issues/2489)
