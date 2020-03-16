---
title: "What is New Code Generation Mode?"
order: 360036521074
page_id: "What-is-New-Code-Generation-mode"
warning: false
---

When the feature of code-generation was introduced, the logic for converting the postman requests to code snippets was outsourced. Postman used 3rd party library to produce these converted snippets from an open-source GitHub repository.

Postman has now built its own code-generators since the previously used 3rd party library had a lot of bugs as it was not maintained well. We've introduced bug-fixes, support for two new languages (JS-Fetch and Powershell) and the ability to configure certain aspects of the generated snippet with the 'New Code Generation mode' flag enabled in Postman's global settings. This is available from version 7.2.1.

But, we haven't completely removed the old mode since we are still improving the New Code Generation mode.

You can switch on the "New Code Generation mode" by navigating to the settings

![Settings](https://drive.google.com/open?id=1-nLFgEhcZvbxF-kGy9czDZOrSyTgHs-o)

Now when you will click on the code button, a whole new modal will be opened.

![Generate Code Snippets](https://drive.google.com/open?id=1QbalQQT73raZK1BB2lzDhmFR_VLJ6Rkf)

The configuration Icon will help you enable/disable settings.

![Settings](https://drive.google.com/open?id=1GmmL0lzKgS_t9o1Y5cVz2cZa5vvisTQ6)

This mode has two new languages: Javascript Fetch, and Powershell REST method. We also have configurations for each language, which is accessible using the "Settings" Icon. Here you can change the Indent Count, Indent Type, etc for the generated code snippet.

To know more, refer to this link: [https://github.com/postmanlabs/postman-code-generators](https://github.com/postmanlabs/postman-code-generators)
